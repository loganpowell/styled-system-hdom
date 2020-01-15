// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@thi.ng/api/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEMAPHORE = exports.DEFAULT_EPS = void 0;
const DEFAULT_EPS = 1e-6;
/**
 * Internal use only. **Do NOT use in user land code!**
 */

exports.DEFAULT_EPS = DEFAULT_EPS;
const SEMAPHORE = Symbol();
exports.SEMAPHORE = SEMAPHORE;
},{}],"node_modules/@thi.ng/api/api/event.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EVENT_DISABLE = exports.EVENT_ENABLE = exports.EVENT_ALL = void 0;
const EVENT_ALL = "*";
exports.EVENT_ALL = EVENT_ALL;
const EVENT_ENABLE = "enable";
exports.EVENT_ENABLE = EVENT_ENABLE;
const EVENT_DISABLE = "disable";
exports.EVENT_DISABLE = EVENT_DISABLE;
},{}],"node_modules/@thi.ng/api/api/fn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NO_OP = void 0;

/**
 * No-effect placeholder function.
 */
const NO_OP = () => {};

exports.NO_OP = NO_OP;
},{}],"node_modules/@thi.ng/api/api/logger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogLevel = void 0;
var LogLevel;
exports.LogLevel = LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["FINE"] = 0] = "FINE";
  LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["SEVERE"] = 4] = "SEVERE";
  LogLevel[LogLevel["NONE"] = 5] = "NONE";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
},{}],"node_modules/@thi.ng/api/api/typedarray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typedArray = typedArray;
exports.intType = exports.uintType = exports.TYPEDARRAY_CTORS = exports.SIZEOF = exports.TYPE2GL = exports.GL2TYPE = exports.GLType = exports.Type = void 0;

/**
 * Type enums for Typedarray-backed buffers.
 *
 * @see GLType
 * @see GL2TYPE
 * @see TYPE2GL
 */
var Type;
exports.Type = Type;

(function (Type) {
  Type[Type["U8"] = 0] = "U8";
  Type[Type["U8C"] = 1] = "U8C";
  Type[Type["I8"] = 2] = "I8";
  Type[Type["U16"] = 3] = "U16";
  Type[Type["I16"] = 4] = "I16";
  Type[Type["U32"] = 5] = "U32";
  Type[Type["I32"] = 6] = "I32";
  Type[Type["F32"] = 7] = "F32";
  Type[Type["F64"] = 8] = "F64";
})(Type || (exports.Type = Type = {}));
/**
 * WebGL numeric type constants. Use `GL2TYPE` to convert, if needed.
 *
 * @see Type
 * @see GL2TYPE
 * @see TYPE2GL
 */


var GLType;
exports.GLType = GLType;

(function (GLType) {
  GLType[GLType["I8"] = 5120] = "I8";
  GLType[GLType["U8"] = 5121] = "U8";
  GLType[GLType["I16"] = 5122] = "I16";
  GLType[GLType["U16"] = 5123] = "U16";
  GLType[GLType["I32"] = 5124] = "I32";
  GLType[GLType["U32"] = 5125] = "U32";
  GLType[GLType["F32"] = 5126] = "F32";
})(GLType || (exports.GLType = GLType = {}));
/**
 * Conversion from `GLType` to `Type` enums.
 */


const GL2TYPE = {
  [5120
  /* I8 */
  ]: 2
  /* I8 */
  ,
  [5121
  /* U8 */
  ]: 0
  /* U8 */
  ,
  [5122
  /* I16 */
  ]: 4
  /* I16 */
  ,
  [5123
  /* U16 */
  ]: 3
  /* U16 */
  ,
  [5124
  /* I32 */
  ]: 6
  /* I32 */
  ,
  [5125
  /* U32 */
  ]: 5
  /* U32 */
  ,
  [5126
  /* F32 */
  ]: 7
  /* F32 */

};
/**
 * Potentially lossy conversion from `Type` to `GLType` enums.
 *
 * Not all enums are mappable:
 *
 * - `F64` maps to `undefined`, since unsupported by WebGL
 * - `U8C` maps to U8
 */

exports.GL2TYPE = GL2TYPE;
const TYPE2GL = {
  [2
  /* I8 */
  ]: 5120
  /* I8 */
  ,
  [0
  /* U8 */
  ]: 5121
  /* U8 */
  ,
  [1
  /* U8C */
  ]: 5121
  /* U8 */
  ,
  [4
  /* I16 */
  ]: 5122
  /* I16 */
  ,
  [3
  /* U16 */
  ]: 5123
  /* U16 */
  ,
  [6
  /* I32 */
  ]: 5124
  /* I32 */
  ,
  [6
  /* I32 */
  ]: 5124
  /* I32 */
  ,
  [5
  /* U32 */
  ]: 5125
  /* U32 */
  ,
  [7
  /* F32 */
  ]: 5126
  /* F32 */
  ,
  [8
  /* F64 */
  ]: undefined
};
/**
 * Size information (in bytes) for `Type` enums. For `GLType`, use this
 * form, e.g. `SIZEOF[GL2TYPE[GLType.F32]]`
 */

exports.TYPE2GL = TYPE2GL;
const SIZEOF = {
  [0
  /* U8 */
  ]: 1,
  [1
  /* U8C */
  ]: 1,
  [2
  /* I8 */
  ]: 1,
  [3
  /* U16 */
  ]: 2,
  [4
  /* I16 */
  ]: 2,
  [5
  /* U32 */
  ]: 4,
  [6
  /* I32 */
  ]: 4,
  [7
  /* F32 */
  ]: 4,
  [8
  /* F64 */
  ]: 8
};
exports.SIZEOF = SIZEOF;
const TYPEDARRAY_CTORS = {
  [0
  /* U8 */
  ]: Uint8Array,
  [1
  /* U8C */
  ]: Uint8ClampedArray,
  [2
  /* I8 */
  ]: Int8Array,
  [3
  /* U16 */
  ]: Uint16Array,
  [4
  /* I16 */
  ]: Int16Array,
  [5
  /* U32 */
  ]: Uint32Array,
  [6
  /* I32 */
  ]: Int32Array,
  [7
  /* F32 */
  ]: Float32Array,
  [8
  /* F64 */
  ]: Float64Array,
  [5121
  /* U8 */
  ]: Uint8Array,
  [5120
  /* I8 */
  ]: Int8Array,
  [5123
  /* U16 */
  ]: Uint16Array,
  [5122
  /* I16 */
  ]: Int16Array,
  [5125
  /* U32 */
  ]: Uint32Array,
  [5124
  /* I32 */
  ]: Int32Array,
  [5126
  /* F32 */
  ]: Float32Array
};
exports.TYPEDARRAY_CTORS = TYPEDARRAY_CTORS;

function typedArray(type, ...xs) {
  return new TYPEDARRAY_CTORS[type](...xs);
}
/**
 * Returns the smallest possible *unsigned* int type enum for given `x`.
 * E.g. if `x <= 256`, the function returns `Type.U8`.
 *
 * @param x
 */


const uintType = x => x <= 0x100 ? 0
/* U8 */
: x <= 0x10000 ? 3
/* U16 */
: 5
/* U32 */
;
/**
 * Returns the smallest possible *signed* int type enum for given `x`.
 * E.g. if `x >= -128 && x < 128`, the function returns `Type.I8`.
 *
 * @param x
 */


exports.uintType = uintType;

const intType = x => x >= -0x80 && x < 0x80 ? 2
/* I8 */
: x >= -0x8000 && x < 0x8000 ? 4
/* I16 */
: 6
/* I32 */
;

exports.intType = intType;
},{}],"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"node_modules/@thi.ng/api/assert.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assert = void 0;

var _fn = require("./api/fn");

/**
 * Takes a `test` result or predicate function without args and throws
 * error with given `msg` if test failed (i.e. is falsy). The function
 * is only enabled if `NODE_ENV != "production"` or if
 * `UMBRELLA_ASSERTS = 1`.
 */
const assert = typeof process === "undefined" || "development" !== "production" || undefined === "1" ? (test, msg = "assertion failed") => {
  if (typeof test === "function" && !test() || !test) {
    throw new Error(typeof msg === "function" ? msg() : msg);
  }
} : _fn.NO_OP;
exports.assert = assert;
},{"./api/fn":"node_modules/@thi.ng/api/api/fn.js","process":"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel/src/builtins/_empty.js"}],"node_modules/@thi.ng/api/logger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsoleLogger = exports.NULL_LOGGER = void 0;

var _logger = require("./api/logger");

const NULL_LOGGER = Object.freeze({
  level: _logger.LogLevel.NONE,

  fine() {},

  debug() {},

  info() {},

  warn() {},

  severe() {}

});
exports.NULL_LOGGER = NULL_LOGGER;

class ConsoleLogger {
  constructor(id, level = _logger.LogLevel.FINE) {
    this.id = id;
    this.level = level;
  }

  fine(...args) {
    this.level <= _logger.LogLevel.FINE && this.log("FINE", args);
  }

  debug(...args) {
    this.level <= _logger.LogLevel.DEBUG && this.log("DEBUG", args);
  }

  info(...args) {
    this.level <= _logger.LogLevel.INFO && this.log("INFO", args);
  }

  warn(...args) {
    this.level <= _logger.LogLevel.WARN && this.log("WARN", args);
  }

  severe(...args) {
    this.level <= _logger.LogLevel.SEVERE && this.log("SEVERE", args);
  }

  log(level, args) {
    console.log(`[${level}] ${this.id}:`, ...args);
  }

}

exports.ConsoleLogger = ConsoleLogger;
},{"./api/logger":"node_modules/@thi.ng/api/api/logger.js"}],"node_modules/@thi.ng/api/mixin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = void 0;

/**
 * Class behavior mixin based on:
 * http://raganwald.com/2015/06/26/decorators-in-es7.html
 *
 * Additionally only injects/overwrites properties in target, which are
 * NOT marked with `@nomixin` (i.e. haven't set their `configurable`
 * property descriptor flag to `false`)
 *
 * @param behaviour to mixin
 * @param sharedBehaviour
 * @returns decorator function
 */
const mixin = (behaviour, sharedBehaviour = {}) => {
  const instanceKeys = Reflect.ownKeys(behaviour);
  const sharedKeys = Reflect.ownKeys(sharedBehaviour);
  const typeTag = Symbol("isa");

  function _mixin(clazz) {
    for (let key of instanceKeys) {
      const existing = Object.getOwnPropertyDescriptor(clazz.prototype, key);

      if (!existing || existing.configurable) {
        Object.defineProperty(clazz.prototype, key, {
          value: behaviour[key],
          writable: true
        });
      } else {
        console.log(`not patching: ${clazz.name}.${key.toString()}`);
      }
    }

    Object.defineProperty(clazz.prototype, typeTag, {
      value: true
    });
    return clazz;
  }

  for (let key of sharedKeys) {
    Object.defineProperty(_mixin, key, {
      value: sharedBehaviour[key],
      enumerable: sharedBehaviour.propertyIsEnumerable(key)
    });
  }

  Object.defineProperty(_mixin, Symbol.hasInstance, {
    value: x => !!x[typeTag]
  });
  return _mixin;
};

exports.mixin = mixin;
},{}],"node_modules/@thi.ng/api/decorators/configurable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configurable = void 0;

/**
 * Property decorator factory. Sets `configurable` flag of PropertyDescriptor
 * to given state.
 *
 * @param state
 */
const configurable = state => function (_, __, descriptor) {
  descriptor.configurable = state;
};

exports.configurable = configurable;
},{}],"node_modules/@thi.ng/api/decorators/deprecated.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecated = void 0;

var _assert = require("../assert");

/**
 * Method property decorator factory. Augments original method with
 * deprecation message (via console), shown when method is invoked.
 * Accepts optional message arg. Throws error if assigned property
 * is not a function.
 *
 * @param msg deprecation message
 */
const deprecated = (msg, log = console.log) => function (target, prop, descriptor) {
  const signature = `${target.constructor.name}#${prop.toString()}`;
  const fn = descriptor.value;
  (0, _assert.assert)(typeof fn === "function", `${signature} is not a function`);

  descriptor.value = function () {
    log(`DEPRECATED ${signature}: ${msg || "will be removed soon"}`);
    return fn.apply(this, arguments);
  };

  return descriptor;
};

exports.deprecated = deprecated;
},{"../assert":"node_modules/@thi.ng/api/assert.js"}],"node_modules/@thi.ng/api/decorators/nomixin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nomixin = void 0;

/**
 * Method property decorator. Sets `configurable` flag of
 * PropertyDescriptor to `false` (same as `@configurable(false)`).
 * Intended to be used in combination with mixin decorators to enable
 * partial implementations of mixed-in behaviors in target class and
 * avoid them being overidden by mixed-in behaviour.
 */
const nomixin = (_, __, descriptor) => {
  descriptor.configurable = false;
};

exports.nomixin = nomixin;
},{}],"node_modules/@thi.ng/api/decorators/sealed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sealed = void 0;

/**
 * Class decorator. Seals both constructor and prototype.
 *
 * @param constructor
 */
const sealed = constructor => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

exports.sealed = sealed;
},{}],"node_modules/@thi.ng/api/mixins/ienable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IEnableMixin = void 0;

var _event = require("../api/event");

var _mixin = require("../mixin");

/**
 * Mixin class decorator, injects IEnable default implementation, incl.
 * a `_enabled` property. If the target also implements the `INotify`
 * interface, `enable()` and `disable()` will automatically emit the
 * respective events.
 */
const IEnableMixin = (0, _mixin.mixin)({
  _enabled: true,

  isEnabled() {
    return this._enabled;
  },

  enable() {
    this._enabled = true;

    if (this.notify) {
      this.notify({
        id: _event.EVENT_ENABLE,
        target: this
      });
    }
  },

  disable() {
    this._enabled = false;

    if (this.notify) {
      this.notify({
        id: _event.EVENT_DISABLE,
        target: this
      });
    }
  },

  toggle() {
    this._enabled ? this.disable() : this.enable();
    return this._enabled;
  }

});
exports.IEnableMixin = IEnableMixin;
},{"../api/event":"node_modules/@thi.ng/api/api/event.js","../mixin":"node_modules/@thi.ng/api/mixin.js"}],"node_modules/@thi.ng/api/mixins/inotify.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INotifyMixin = exports.inotify_dispatch = void 0;

var _event = require("../api/event");

var _mixin = require("../mixin");

const inotify_dispatch = (listeners, e) => {
  if (!listeners) return;

  for (let i = 0, n = listeners.length, l; i < n; i++) {
    l = listeners[i];
    l[0].call(l[1], e);

    if (e.canceled) {
      return;
    }
  }
};
/**
 * Mixin class decorator, injects INotify default implementation, incl.
 * a lazily instantiated `_listeners` property object, storing
 * registered listeners.
 */


exports.inotify_dispatch = inotify_dispatch;
const INotifyMixin = (0, _mixin.mixin)({
  addListener(id, fn, scope) {
    let l = (this._listeners = this._listeners || {})[id];
    !l && (l = this._listeners[id] = []);

    if (this.__listener(l, fn, scope) === -1) {
      l.push([fn, scope]);
      return true;
    }

    return false;
  },

  removeListener(id, fn, scope) {
    let listeners;
    if (!(listeners = this._listeners)) return false;
    const l = listeners[id];

    if (l) {
      const idx = this.__listener(l, fn, scope);

      if (idx !== -1) {
        l.splice(idx, 1);
        !l.length && delete listeners[id];
        return true;
      }
    }

    return false;
  },

  notify(e) {
    let listeners;
    if (!(listeners = this._listeners)) return false;
    e.target === undefined && (e.target = this);
    inotify_dispatch(listeners[e.id], e);
    inotify_dispatch(listeners[_event.EVENT_ALL], e);
  },

  __listener(listeners, f, scope) {
    let i = listeners.length;

    while (--i >= 0) {
      const l = listeners[i];

      if (l[0] === f && l[1] === scope) {
        break;
      }
    }

    return i;
  }

});
exports.INotifyMixin = INotifyMixin;
},{"../api/event":"node_modules/@thi.ng/api/api/event.js","../mixin":"node_modules/@thi.ng/api/mixin.js"}],"node_modules/@thi.ng/api/mixins/iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterable = void 0;

var _mixin = require("../mixin");

const iterable = prop => (0, _mixin.mixin)({
  *[Symbol.iterator]() {
    yield* this[prop];
  }

});

exports.iterable = iterable;
},{"../mixin":"node_modules/@thi.ng/api/mixin.js"}],"node_modules/@thi.ng/api/mixins/iwatch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IWatchMixin = void 0;

var _mixin = require("../mixin");

const IWatchMixin = (0, _mixin.mixin)({
  addWatch(id, fn) {
    this._watches = this._watches || {};

    if (this._watches[id]) {
      return false;
    }

    this._watches[id] = fn;
    return true;
  },

  removeWatch(id) {
    if (!this._watches) return;

    if (this._watches[id]) {
      delete this._watches[id];
      return true;
    }

    return false;
  },

  notifyWatches(oldState, newState) {
    if (!this._watches) return;
    const w = this._watches;

    for (let id in w) {
      w[id](id, oldState, newState);
    }
  }

});
exports.IWatchMixin = IWatchMixin;
},{"../mixin":"node_modules/@thi.ng/api/mixin.js"}],"node_modules/@thi.ng/api/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _event = require("./api/event");

Object.keys(_event).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _event[key];
    }
  });
});

var _fn = require("./api/fn");

Object.keys(_fn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fn[key];
    }
  });
});

var _logger = require("./api/logger");

Object.keys(_logger).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logger[key];
    }
  });
});

var _typedarray = require("./api/typedarray");

Object.keys(_typedarray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _typedarray[key];
    }
  });
});

var _assert = require("./assert");

Object.keys(_assert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _assert[key];
    }
  });
});

var _logger2 = require("./logger");

Object.keys(_logger2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logger2[key];
    }
  });
});

var _mixin = require("./mixin");

Object.keys(_mixin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mixin[key];
    }
  });
});

var _configurable = require("./decorators/configurable");

Object.keys(_configurable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _configurable[key];
    }
  });
});

var _deprecated = require("./decorators/deprecated");

Object.keys(_deprecated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deprecated[key];
    }
  });
});

var _nomixin = require("./decorators/nomixin");

Object.keys(_nomixin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nomixin[key];
    }
  });
});

var _sealed = require("./decorators/sealed");

Object.keys(_sealed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sealed[key];
    }
  });
});

var _ienable = require("./mixins/ienable");

Object.keys(_ienable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ienable[key];
    }
  });
});

var _inotify = require("./mixins/inotify");

Object.keys(_inotify).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _inotify[key];
    }
  });
});

var _iterable = require("./mixins/iterable");

Object.keys(_iterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iterable[key];
    }
  });
});

var _iwatch = require("./mixins/iwatch");

Object.keys(_iwatch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iwatch[key];
    }
  });
});
},{"./api":"node_modules/@thi.ng/api/api.js","./api/event":"node_modules/@thi.ng/api/api/event.js","./api/fn":"node_modules/@thi.ng/api/api/fn.js","./api/logger":"node_modules/@thi.ng/api/api/logger.js","./api/typedarray":"node_modules/@thi.ng/api/api/typedarray.js","./assert":"node_modules/@thi.ng/api/assert.js","./logger":"node_modules/@thi.ng/api/logger.js","./mixin":"node_modules/@thi.ng/api/mixin.js","./decorators/configurable":"node_modules/@thi.ng/api/decorators/configurable.js","./decorators/deprecated":"node_modules/@thi.ng/api/decorators/deprecated.js","./decorators/nomixin":"node_modules/@thi.ng/api/decorators/nomixin.js","./decorators/sealed":"node_modules/@thi.ng/api/decorators/sealed.js","./mixins/ienable":"node_modules/@thi.ng/api/mixins/ienable.js","./mixins/inotify":"node_modules/@thi.ng/api/mixins/inotify.js","./mixins/iterable":"node_modules/@thi.ng/api/mixins/iterable.js","./mixins/iwatch":"node_modules/@thi.ng/api/mixins/iwatch.js"}],"node_modules/@thi.ng/hdom/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLogger = exports.LOGGER = void 0;

var _api = require("@thi.ng/api");

let LOGGER = _api.NULL_LOGGER;
exports.LOGGER = LOGGER;

const setLogger = logger => exports.LOGGER = LOGGER = logger;

exports.setLogger = setLogger;
},{"@thi.ng/api":"node_modules/@thi.ng/api/index.js"}],"node_modules/@thi.ng/diff/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiffMode = void 0;
var DiffMode;
exports.DiffMode = DiffMode;

(function (DiffMode) {
  DiffMode[DiffMode["ONLY_DISTANCE"] = 0] = "ONLY_DISTANCE";
  DiffMode[DiffMode["ONLY_DISTANCE_LINEAR"] = 1] = "ONLY_DISTANCE_LINEAR";
  DiffMode[DiffMode["ONLY_DISTANCE_LINEAR_ONLY_CHANGES"] = 2] = "ONLY_DISTANCE_LINEAR_ONLY_CHANGES";
  DiffMode[DiffMode["FULL"] = 3] = "FULL";
})(DiffMode || (exports.DiffMode = DiffMode = {}));
},{}],"node_modules/@thi.ng/equiv/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equivObject = exports.equivMap = exports.equivSet = exports.equivArrayLike = exports.equiv = void 0;
const OBJP = Object.getPrototypeOf({});
const FN = "function";
const STR = "string";

const equiv = (a, b) => {
  let proto;

  if (a === b) {
    return true;
  }

  if (a != null) {
    if (typeof a.equiv === FN) {
      return a.equiv(b);
    }
  } else {
    return a == b;
  }

  if (b != null) {
    if (typeof b.equiv === FN) {
      return b.equiv(a);
    }
  } else {
    return a == b;
  }

  if (typeof a === STR || typeof b === STR) {
    return false;
  }

  if ((proto = Object.getPrototypeOf(a), proto == null || proto === OBJP) && (proto = Object.getPrototypeOf(b), proto == null || proto === OBJP)) {
    return equivObject(a, b);
  }

  if (typeof a !== FN && a.length !== undefined && typeof b !== FN && b.length !== undefined) {
    return equivArrayLike(a, b);
  }

  if (a instanceof Set && b instanceof Set) {
    return equivSet(a, b);
  }

  if (a instanceof Map && b instanceof Map) {
    return equivMap(a, b);
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  } // NaN


  return a !== a && b !== b;
};

exports.equiv = equiv;

const equivArrayLike = (a, b, _equiv = equiv) => {
  let l = a.length;

  if (l === b.length) {
    while (--l >= 0 && _equiv(a[l], b[l]));
  }

  return l < 0;
};

exports.equivArrayLike = equivArrayLike;

const equivSet = (a, b, _equiv = equiv) => a.size === b.size && _equiv([...a.keys()].sort(), [...b.keys()].sort());

exports.equivSet = equivSet;

const equivMap = (a, b, _equiv = equiv) => a.size === b.size && _equiv([...a].sort(), [...b].sort());

exports.equivMap = equivMap;

const equivObject = (a, b, _equiv = equiv) => {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (let k in a) {
    if (!b.hasOwnProperty(k) || !_equiv(a[k], b[k])) {
      return false;
    }
  }

  return true;
};

exports.equivObject = equivObject;
},{}],"node_modules/@thi.ng/diff/array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffArray = void 0;

var _equiv2 = require("@thi.ng/equiv");

let _cachedFP;

let _cachedPath;

let _cachedEPC = [];
let _cachedPathPos = [];

const cachedFP = size => _cachedFP && _cachedFP.length >= size ? _cachedFP : _cachedFP = new Int32Array(size);

const cachedPath = size => _cachedPath && _cachedPath.length >= size ? _cachedPath : _cachedPath = new Int32Array(size);

const simpleDiff = (state, src, key, logDir, mode) => {
  const n = src.length;
  const linear = state.linear;
  state.distance = n;

  if (mode !== 0
  /* ONLY_DISTANCE */
  ) {
      for (let i = 0, j = 0; i < n; i++, j += 3) {
        linear[j] = logDir;
        linear[j + 1] = i;
        linear[j + 2] = src[i];
      }

      if (mode === 3
      /* FULL */
      ) {
          const _state = state[key];

          for (let i = 0; i < n; i++) {
            _state[i] = src[i];
          }
        }
    }

  return state;
};
/**
 * Based on "An O(NP) Sequence Comparison Algorithm""
 * by Wu, Manber, Myers and Miller
 *
 * - http://www.itu.dk/stud/speciale/bepjea/xwebtex/litt/an-onp-sequence-comparison-algorithm.pdf
 * - https://github.com/cubicdaiya/onp
 *
 * Various optimizations, fixes & refactorings.
 * By default uses `@thi.ng/equiv` for equality checks.
 *
 * @param a "old" array
 * @param b "new" array
 * @param mode result mode
 * @param equiv equality predicate function
 */


const diffArray = (a, b, mode = 3
/* FULL */
, equiv = _equiv2.equiv) => {
  const state = {
    distance: 0,
    adds: {},
    dels: {},
    const: {},
    linear: []
  };

  if (a === b || a == null && b == null) {
    return state;
  } else if (a == null || a.length === 0) {
    return simpleDiff(state, b, "adds", 1, mode);
  } else if (b == null || b.length === 0) {
    return simpleDiff(state, a, "dels", -1, mode);
  }

  const reverse = a.length >= b.length;

  let _a, _b, na, nb;

  if (reverse) {
    _a = b;
    _b = a;
  } else {
    _a = a;
    _b = b;
  }

  na = _a.length;
  nb = _b.length;
  const offset = na + 1;
  const delta = nb - na;
  const doff = delta + offset;
  const size = na + nb + 3;
  const path = cachedPath(size).fill(-1, 0, size);
  const fp = cachedFP(size).fill(-1, 0, size);
  const epc = _cachedEPC;
  const pathPos = _cachedPathPos;
  epc.length = 0;
  pathPos.length = 0;

  const snake = (k, p, pp) => {
    const koff = k + offset;
    let r, y;

    if (p > pp) {
      r = path[koff - 1];
      y = p;
    } else {
      r = path[koff + 1];
      y = pp;
    }

    let x = y - k;

    while (x < na && y < nb && equiv(_a[x], _b[y])) {
      x++;
      y++;
    }

    path[koff] = pathPos.length / 3;
    pathPos.push(x, y, r);
    return y;
  };

  let p = -1,
      k,
      ko;

  do {
    p++;

    for (k = -p, ko = k + offset; k < delta; k++, ko++) {
      fp[ko] = snake(k, fp[ko - 1] + 1, fp[ko + 1]);
    }

    for (k = delta + p, ko = k + offset; k > delta; k--, ko--) {
      fp[ko] = snake(k, fp[ko - 1] + 1, fp[ko + 1]);
    }

    fp[doff] = snake(delta, fp[doff - 1] + 1, fp[doff + 1]);
  } while (fp[doff] !== nb);

  state.distance = delta + 2 * p;

  if (mode !== 0
  /* ONLY_DISTANCE */
  ) {
      p = path[doff] * 3;

      while (p >= 0) {
        epc.push(p);
        p = pathPos[p + 2] * 3;
      }

      if (mode === 3
      /* FULL */
      ) {
          buildFullLog(epc, pathPos, state, _a, _b, reverse);
        } else {
        buildLinearLog(epc, pathPos, state, _a, _b, reverse, mode === 1
        /* ONLY_DISTANCE_LINEAR */
        );
      }
    }

  return state;
};

exports.diffArray = diffArray;

const buildFullLog = (epc, pathPos, state, a, b, reverse) => {
  const linear = state.linear;
  const _const = state.const;
  let i = epc.length;
  let px = 0;
  let py = 0;
  let adds;
  let dels;
  let aID;
  let dID;

  if (reverse) {
    adds = state.dels;
    dels = state.adds;
    aID = -1;
    dID = 1;
  } else {
    adds = state.adds;
    dels = state.dels;
    aID = 1;
    dID = -1;
  }

  for (; --i >= 0;) {
    const e = epc[i];
    const ppx = pathPos[e];
    const ppy = pathPos[e + 1];
    const d = ppy - ppx;

    while (px < ppx || py < ppy) {
      const dp = py - px;

      if (d > dp) {
        linear.push(aID, py, adds[py] = b[py]);
        py++;
      } else if (d < dp) {
        linear.push(dID, px, dels[px] = a[px]);
        px++;
      } else {
        linear.push(0, px, _const[px] = a[px]);
        px++;
        py++;
      }
    }
  }
};

const buildLinearLog = (epc, pathPos, state, a, b, reverse, inclConst) => {
  const linear = state.linear;
  const aID = reverse ? -1 : 1;
  const dID = reverse ? 1 : -1;
  let i = epc.length,
      px = 0,
      py = 0;

  for (; --i >= 0;) {
    const e = epc[i];
    const ppx = pathPos[e];
    const ppy = pathPos[e + 1];
    const d = ppy - ppx;

    while (px < ppx || py < ppy) {
      const dp = py - px;

      if (d > dp) {
        linear.push(aID, py, b[py]);
        py++;
      } else if (d < dp) {
        linear.push(dID, px, a[px]);
        px++;
      } else {
        inclConst && linear.push(0, px, a[px]);
        px++;
        py++;
      }
    }
  }
};
},{"@thi.ng/equiv":"node_modules/@thi.ng/equiv/index.js"}],"node_modules/@thi.ng/diff/object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffObject = void 0;

var _equiv2 = require("@thi.ng/equiv");

const diffObject = (a, b, mode = 3
/* FULL */
, _equiv = _equiv2.equiv) => a === b ? {
  distance: 0
} : mode === 0
/* ONLY_DISTANCE */
? diffObjectDist(a, b, _equiv) : diffObjectFull(a, b, _equiv);

exports.diffObject = diffObject;

const diffObjectDist = (a, b, _equiv) => {
  if (!a) a = {};
  if (!b) b = {};
  let d = 0;

  for (let k in a) {
    const vb = b[k];
    (vb === undefined || !_equiv(a[k], vb)) && d++;
  }

  for (let k in b) {
    !(k in a) && d++;
  }

  return {
    distance: d
  };
};

const diffObjectFull = (a, b, _equiv) => {
  if (!a) a = {};
  if (!b) b = {};
  let d = 0;
  const adds = [];
  const dels = [];
  const edits = [];

  for (let k in a) {
    const vb = b[k];

    if (vb === undefined) {
      dels.push(k);
      d++;
    } else if (!_equiv(a[k], vb)) {
      edits.push(k, vb);
      d++;
    }
  }

  for (let k in b) {
    if (!(k in a)) {
      adds.push(k);
      d++;
    }
  }

  return {
    distance: d,
    adds,
    dels,
    edits
  };
};
},{"@thi.ng/equiv":"node_modules/@thi.ng/equiv/index.js"}],"node_modules/@thi.ng/diff/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _array = require("./array");

Object.keys(_array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _array[key];
    }
  });
});

var _object = require("./object");

Object.keys(_object).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _object[key];
    }
  });
});
},{"./api":"node_modules/@thi.ng/diff/api.js","./array":"node_modules/@thi.ng/diff/array.js","./object":"node_modules/@thi.ng/diff/object.js"}],"node_modules/@thi.ng/hdom/diff.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equiv = exports.releaseTree = exports.diffAttributes = exports.diffTree = void 0;

var _api = require("@thi.ng/api");

var _diff = require("@thi.ng/diff");

var _equiv2 = require("@thi.ng/equiv");

const isArray = Array.isArray;
const max = Math.max;
const OBJP = Object.getPrototypeOf({});
const FN = "function";
const STR = "string"; // child index tracking template buffer

const INDEX = (() => {
  const res = new Array(2048);

  for (let i = 2, n = res.length; i < n; i++) {
    res[i] = i - 2;
  }

  return res;
})();

const buildIndex = n => {
  if (n <= INDEX.length) {
    return INDEX.slice(0, n);
  }

  const res = new Array(n);

  while (--n >= 2) {
    res[n] = n - 2;
  }

  return res;
};
/**
 * See `HDOMImplementation` interface for further details.
 *
 * @param opts
 * @param impl hdom implementation
 * @param parent
 * @param prev previous tree
 * @param curr current tree
 * @param child child index
 */


const diffTree = (opts, impl, parent, prev, curr, child = 0) => {
  const attribs = curr[1];

  if (attribs.__skip) {
    return;
  } // always replace element if __diff = false


  if (attribs.__diff === false) {
    releaseTree(prev);
    impl.replaceChild(opts, parent, child, curr);
    return;
  }

  const pattribs = prev[1];

  if (pattribs && pattribs.__skip) {
    impl.replaceChild(opts, parent, child, curr, false);
    return;
  } // delegate to branch-local implementation


  let _impl = attribs.__impl;

  if (_impl && _impl !== impl) {
    return _impl.diffTree(opts, _impl, parent, prev, curr, child);
  }

  const delta = (0, _diff.diffArray)(prev, curr, 1
  /* ONLY_DISTANCE_LINEAR */
  , equiv);

  if (delta.distance === 0) {
    return;
  }

  const edits = delta.linear;
  const el = impl.getChild(parent, child);
  let i;
  let ii;
  let status;
  let val;

  if (edits[0] !== 0 || prev[1].key !== attribs.key) {
    // LOGGER.fine("replace:", prev, curr);
    releaseTree(prev);
    impl.replaceChild(opts, parent, child, curr);
    return;
  }

  if ((val = prev.__release) && val !== curr.__release) {
    releaseTree(prev);
  }

  if (edits[3] !== 0) {
    diffAttributes(impl, el, prev[1], curr[1]); // if attribs changed & distance == 2 then we're done here...

    if (delta.distance === 2) {
      return;
    }
  }

  const numEdits = edits.length;
  const prevLength = prev.length - 1;
  const equivKeys = extractEquivElements(edits);
  const offsets = buildIndex(prevLength + 1);

  for (i = 2, ii = 6; ii < numEdits; i++, ii += 3) {
    status = edits[ii];
    if (!status) continue;

    if (status === -1) {
      diffDeleted(opts, impl, el, prev, curr, edits, ii, equivKeys, offsets, prevLength);
    } else {
      diffAdded(opts, impl, el, edits, ii, equivKeys, offsets, prevLength);
    }
  } // call __init after all children have been added/updated


  if ((val = curr.__init) && val != prev.__init) {
    val.apply(curr, [el, ...curr.__args]);
  }
};

exports.diffTree = diffTree;

const diffDeleted = (opts, impl, el, prev, curr, edits, ii, equivKeys, offsets, prevLength) => {
  const val = edits[ii + 2];

  if (isArray(val)) {
    let k = val[1].key;

    if (k !== undefined && equivKeys[k][2] !== undefined) {
      const eq = equivKeys[k];
      k = eq[0]; // LOGGER.fine(`diff equiv key @ ${k}:`, prev[k], curr[eq[2]]);

      diffTree(opts, impl, el, prev[k], curr[eq[2]], offsets[k]);
    } else {
      const idx = edits[ii + 1]; // LOGGER.fine("remove @", offsets[idx], val);

      releaseTree(val);
      impl.removeChild(el, offsets[idx]);
      incOffsets(offsets, prevLength, idx);
    }
  } else if (typeof val === STR) {
    impl.setContent(el, "");
  }
};

const diffAdded = (opts, impl, el, edits, ii, equivKeys, offsets, prevLength) => {
  const val = edits[ii + 2];

  if (typeof val === STR) {
    impl.setContent(el, val);
  } else if (isArray(val)) {
    const k = val[1].key;

    if (k === undefined || equivKeys[k][0] === undefined) {
      const idx = edits[ii + 1]; // LOGGER.fine("insert @", offsets[idx], val);

      impl.createTree(opts, el, val, offsets[idx]);
      decOffsets(offsets, prevLength, idx);
    }
  }
};

const incOffsets = (offsets, j, idx) => {
  for (; j > idx; j--) {
    offsets[j] = max(offsets[j] - 1, 0);
  }
};

const decOffsets = (offsets, j, idx) => {
  for (; j >= idx; j--) {
    offsets[j]++;
  }
};
/**
 * Helper function for `diffTree()` to compute & apply the difference
 * between a node's `prev` and `curr` attributes.
 *
 * @param impl
 * @param el
 * @param prev
 * @param curr
 */


const diffAttributes = (impl, el, prev, curr) => {
  const delta = (0, _diff.diffObject)(prev, curr, 3
  /* FULL */
  , _equiv2.equiv);
  impl.removeAttribs(el, delta.dels, prev);
  let val = _api.SEMAPHORE;
  let i, e, edits;

  for (edits = delta.edits, i = edits.length; (i -= 2) >= 0;) {
    e = edits[i];
    e.indexOf("on") === 0 && impl.removeAttribs(el, [e], prev);
    e !== "value" ? impl.setAttrib(el, e, edits[i + 1], curr) : val = edits[i + 1];
  }

  for (edits = delta.adds, i = edits.length; --i >= 0;) {
    e = edits[i];
    e !== "value" ? impl.setAttrib(el, e, curr[e], curr) : val = curr[e];
  }

  val !== _api.SEMAPHORE && impl.setAttrib(el, "value", val, curr);
};
/**
 * Recursively attempts to call the `release` lifecycle method on every
 * element in given tree (branch), using depth-first descent. Each
 * element is checked for the presence of the `__release` control
 * attribute. If (and only if) it is set to `false`, further descent
 * into that element's branch is skipped.
 *
 * @param tag
 */


exports.diffAttributes = diffAttributes;

const releaseTree = tag => {
  if (isArray(tag)) {
    let x;

    if ((x = tag[1]) && x.__release === false) {
      return;
    }

    if (tag.__release) {
      // LOGGER.fine("call __release", tag);
      tag.__release.apply(tag.__this, tag.__args);

      delete tag.__release;
    }

    for (x = tag.length; --x >= 2;) {
      releaseTree(tag[x]);
    }
  }
};

exports.releaseTree = releaseTree;

const extractEquivElements = edits => {
  let k;
  let val;
  let ek;
  const equiv = {};

  for (let i = edits.length; (i -= 3) >= 0;) {
    val = edits[i + 2];

    if (isArray(val) && (k = val[1].key) !== undefined) {
      ek = equiv[k];
      !ek && (equiv[k] = ek = [,,]);
      ek[edits[i] + 1] = edits[i + 1];
    }
  }

  return equiv;
};
/**
 * Customized version @thi.ng/equiv which takes `__diff` attributes into
 * account (at any nesting level). If an hdom element's attribute object
 * contains `__diff: false`, the object will ALWAYS be considered
 * unequal, even if all other attributes in the object are equivalent.
 *
 * @param a
 * @param b
 */


const equiv = (a, b) => {
  let proto;

  if (a === b) {
    return true;
  }

  if (a != null) {
    if (typeof a.equiv === FN) {
      return a.equiv(b);
    }
  } else {
    return a == b;
  }

  if (b != null) {
    if (typeof b.equiv === FN) {
      return b.equiv(a);
    }
  } else {
    return a == b;
  }

  if (typeof a === STR || typeof b === STR) {
    return false;
  }

  if ((proto = Object.getPrototypeOf(a), proto == null || proto === OBJP) && (proto = Object.getPrototypeOf(b), proto == null || proto === OBJP)) {
    return !(a.__diff === false || b.__diff === false) && (0, _equiv2.equivObject)(a, b, equiv);
  }

  if (typeof a !== FN && a.length !== undefined && typeof b !== FN && b.length !== undefined) {
    return (0, _equiv2.equivArrayLike)(a, b, equiv);
  }

  if (a instanceof Set && b instanceof Set) {
    return (0, _equiv2.equivSet)(a, b, equiv);
  }

  if (a instanceof Map && b instanceof Map) {
    return (0, _equiv2.equivMap)(a, b, equiv);
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  } // NaN


  return a !== a && b !== b;
};

exports.equiv = equiv;
},{"@thi.ng/api":"node_modules/@thi.ng/api/index.js","@thi.ng/diff":"node_modules/@thi.ng/diff/index.js","@thi.ng/equiv":"node_modules/@thi.ng/equiv/index.js"}],"node_modules/@thi.ng/checks/exists-not-null.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.existsAndNotNull = void 0;

const existsAndNotNull = x => x != null;

exports.existsAndNotNull = existsAndNotNull;
},{}],"node_modules/@thi.ng/checks/exists.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exists = void 0;

const exists = t => t !== undefined;

exports.exists = exists;
},{}],"node_modules/@thi.ng/checks/has-crypto.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasCrypto = void 0;

const hasCrypto = () => typeof window !== "undefined" && window["crypto"] !== undefined;

exports.hasCrypto = hasCrypto;
},{}],"node_modules/@thi.ng/checks/has-max-length.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMaxLength = void 0;

const hasMaxLength = (len, x) => x != null && x.length <= len;

exports.hasMaxLength = hasMaxLength;
},{}],"node_modules/@thi.ng/checks/has-min-length.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMinLength = void 0;

const hasMinLength = (len, x) => x != null && x.length >= len;

exports.hasMinLength = hasMinLength;
},{}],"node_modules/@thi.ng/checks/is-function.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = void 0;

const isFunction = x => typeof x === "function";

exports.isFunction = isFunction;
},{}],"node_modules/@thi.ng/checks/has-performance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasPerformance = void 0;

var _isFunction = require("./is-function");

const hasPerformance = () => typeof performance !== "undefined" && (0, _isFunction.isFunction)(performance.now);

exports.hasPerformance = hasPerformance;
},{"./is-function":"node_modules/@thi.ng/checks/is-function.js"}],"node_modules/@thi.ng/checks/has-wasm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasWASM = void 0;

const hasWASM = () => typeof window !== "undefined" && typeof window["WebAssembly"] !== "undefined" || typeof global !== "undefined" && typeof global["WebAssembly"] !== "undefined";

exports.hasWASM = hasWASM;
},{}],"node_modules/@thi.ng/checks/has-webgl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasWebGL = void 0;

const hasWebGL = () => {
  try {
    document.createElement("canvas").getContext("webgl");
    return true;
  } catch (e) {
    return false;
  }
};

exports.hasWebGL = hasWebGL;
},{}],"node_modules/@thi.ng/checks/has-websocket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasWebSocket = void 0;

const hasWebSocket = () => typeof WebSocket !== "undefined";

exports.hasWebSocket = hasWebSocket;
},{}],"node_modules/@thi.ng/checks/implements-function.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.implementsFunction = void 0;

const implementsFunction = (x, fn) => x != null && typeof x[fn] === "function";

exports.implementsFunction = implementsFunction;
},{}],"node_modules/@thi.ng/checks/is-array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = void 0;
const isArray = Array.isArray;
exports.isArray = isArray;
},{}],"node_modules/@thi.ng/checks/is-arraylike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayLike = void 0;

const isArrayLike = x => x != null && typeof x !== "function" && x.length !== undefined;

exports.isArrayLike = isArrayLike;
},{}],"node_modules/@thi.ng/checks/is-blob.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBlob = void 0;

const isBlob = x => x instanceof Blob;

exports.isBlob = isBlob;
},{}],"node_modules/@thi.ng/checks/is-boolean.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBoolean = void 0;

const isBoolean = x => typeof x === "boolean";

exports.isBoolean = isBoolean;
},{}],"node_modules/@thi.ng/checks/is-chrome.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isChrome = void 0;

const isChrome = () => typeof window !== "undefined" && !!window["chrome"];

exports.isChrome = isChrome;
},{}],"node_modules/@thi.ng/checks/is-date.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDate = void 0;

const isDate = x => x instanceof Date;

exports.isDate = isDate;
},{}],"node_modules/@thi.ng/checks/is-even.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEven = void 0;

const isEven = x => x % 2 === 0;

exports.isEven = isEven;
},{}],"node_modules/@thi.ng/checks/is-false.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFalse = void 0;

const isFalse = x => x === false;

exports.isFalse = isFalse;
},{}],"node_modules/@thi.ng/checks/is-file.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFile = void 0;

const isFile = x => x instanceof File;

exports.isFile = isFile;
},{}],"node_modules/@thi.ng/checks/is-firefox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFirefox = void 0;

const isFirefox = () => typeof window !== "undefined" && !!window["InstallTrigger"];

exports.isFirefox = isFirefox;
},{}],"node_modules/@thi.ng/checks/is-string.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = void 0;

const isString = x => typeof x === "string";

exports.isString = isString;
},{}],"node_modules/@thi.ng/checks/is-hex-color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHexColor = void 0;

var _isString = require("./is-string");

const RE = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i;

const isHexColor = x => (0, _isString.isString)(x) && RE.test(x);

exports.isHexColor = isHexColor;
},{"./is-string":"node_modules/@thi.ng/checks/is-string.js"}],"node_modules/@thi.ng/checks/is-ie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIE = void 0;

const isIE = () => typeof document !== "undefined" && (typeof document["documentMode"] !== "undefined" || navigator.userAgent.indexOf("MSIE") > 0);

exports.isIE = isIE;
},{}],"node_modules/@thi.ng/checks/is-in-range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInRange = void 0;

const isInRange = (min, max, x) => x >= min && x <= max;

exports.isInRange = isInRange;
},{}],"node_modules/@thi.ng/checks/is-int32.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInt32 = void 0;

const isInt32 = x => typeof x === "number" && (x | 0) === x;

exports.isInt32 = isInt32;
},{}],"node_modules/@thi.ng/checks/is-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterable = void 0;

const isIterable = x => x != null && typeof x[Symbol.iterator] === "function";

exports.isIterable = isIterable;
},{}],"node_modules/@thi.ng/checks/is-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMap = void 0;

const isMap = x => x instanceof Map;

exports.isMap = isMap;
},{}],"node_modules/@thi.ng/checks/is-mobile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = void 0;

const isMobile = () => typeof navigator !== "undefined" && /mobile|tablet|ip(ad|hone|od)|android|silk|crios/i.test(navigator.userAgent);

exports.isMobile = isMobile;
},{}],"node_modules/@thi.ng/checks/is-nan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNaN = void 0;

const isNaN = x => x !== x;

exports.isNaN = isNaN;
},{}],"node_modules/@thi.ng/checks/is-negative.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNegative = void 0;

const isNegative = x => typeof x === "number" && x < 0;

exports.isNegative = isNegative;
},{}],"node_modules/@thi.ng/checks/is-nil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNil = void 0;

/**
 * Checks if x is null or undefined.
 *
 */
const isNil = x => x == null;

exports.isNil = isNil;
},{}],"node_modules/@thi.ng/checks/is-node.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNode = void 0;

const isNode = () => {
  if (typeof process === "object") {
    if (typeof process.versions === "object") {
      if (typeof process.versions.node !== "undefined") {
        return true;
      }
    }
  }

  return false;
};

exports.isNode = isNode;
},{"process":"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel/src/builtins/_empty.js"}],"node_modules/@thi.ng/checks/is-not-string-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotStringAndIterable = void 0;

const isNotStringAndIterable = x => x != null && typeof x !== "string" && typeof x[Symbol.iterator] === "function";

exports.isNotStringAndIterable = isNotStringAndIterable;
},{}],"node_modules/@thi.ng/checks/is-null.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNull = void 0;

const isNull = x => x === null;

exports.isNull = isNull;
},{}],"node_modules/@thi.ng/checks/is-number.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = void 0;

const isNumber = x => typeof x === "number";

exports.isNumber = isNumber;
},{}],"node_modules/@thi.ng/checks/is-object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = void 0;

const isObject = x => x !== null && typeof x === "object";

exports.isObject = isObject;
},{}],"node_modules/@thi.ng/checks/is-odd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOdd = void 0;

const isOdd = x => x % 2 !== 0;

exports.isOdd = isOdd;
},{}],"node_modules/@thi.ng/checks/is-plain-object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObject = void 0;
const OBJP = Object.getPrototypeOf;
/**
 * Similar to `isObject()`, but also checks if prototype is that of
 * `Object` (or `null`).
 *
 * @param x
 */

const isPlainObject = x => {
  let p;
  return x != null && typeof x === "object" && ((p = OBJP(x)) === null || OBJP(p) === null);
};

exports.isPlainObject = isPlainObject;
},{}],"node_modules/@thi.ng/checks/is-positive.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPosititve = void 0;

const isPosititve = x => typeof x === "number" && x > 0;

exports.isPosititve = isPosititve;
},{}],"node_modules/@thi.ng/checks/is-primitive.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPrimitive = void 0;

const isPrimitive = x => {
  const t = typeof x;
  return t === "string" || t === "number";
};

exports.isPrimitive = isPrimitive;
},{}],"node_modules/@thi.ng/checks/is-promise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = void 0;

const isPromise = x => x instanceof Promise;

exports.isPromise = isPromise;
},{}],"node_modules/@thi.ng/checks/is-promiselike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromiseLike = void 0;

var _implementsFunction = require("./implements-function");

const isPromiseLike = x => x instanceof Promise || (0, _implementsFunction.implementsFunction)(x, "then") && (0, _implementsFunction.implementsFunction)(x, "catch");

exports.isPromiseLike = isPromiseLike;
},{"./implements-function":"node_modules/@thi.ng/checks/implements-function.js"}],"node_modules/@thi.ng/checks/is-regexp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRegExp = void 0;

const isRegExp = x => x instanceof RegExp;

exports.isRegExp = isRegExp;
},{}],"node_modules/@thi.ng/checks/is-safari.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSafari = void 0;

var _isChrome = require("./is-chrome");

const isSafari = () => typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !(0, _isChrome.isChrome)();

exports.isSafari = isSafari;
},{"./is-chrome":"node_modules/@thi.ng/checks/is-chrome.js"}],"node_modules/@thi.ng/checks/is-set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSet = void 0;

const isSet = x => x instanceof Set;

exports.isSet = isSet;
},{}],"node_modules/@thi.ng/checks/is-symbol.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSymbol = void 0;

const isSymbol = x => typeof x === "symbol";

exports.isSymbol = isSymbol;
},{}],"node_modules/@thi.ng/checks/is-transferable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTransferable = void 0;

const isTransferable = x => x instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && x instanceof SharedArrayBuffer || typeof MessagePort !== "undefined" && x instanceof MessagePort;

exports.isTransferable = isTransferable;
},{}],"node_modules/@thi.ng/checks/is-true.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTrue = void 0;

const isTrue = x => x === true;

exports.isTrue = isTrue;
},{}],"node_modules/@thi.ng/checks/is-typedarray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTypedArray = void 0;

const isTypedArray = x => x && (x.constructor === Float32Array || x.constructor === Uint32Array || x.constructor === Uint8Array || x.constructor === Uint8ClampedArray || x.constructor === Int8Array || x.constructor === Uint16Array || x.constructor === Int16Array || x.constructor === Int32Array || x.constructor === Float64Array);

exports.isTypedArray = isTypedArray;
},{}],"node_modules/@thi.ng/checks/is-uint32.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUint32 = void 0;

const isUint32 = x => typeof x === "number" && x >>> 0 === x;

exports.isUint32 = isUint32;
},{}],"node_modules/@thi.ng/checks/is-undefined.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUndefined = void 0;

const isUndefined = x => x === undefined;

exports.isUndefined = isUndefined;
},{}],"node_modules/@thi.ng/checks/is-uuid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUUID = void 0;
const RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const isUUID = x => RE.test(x);

exports.isUUID = isUUID;
},{}],"node_modules/@thi.ng/checks/is-uuid4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUUIDv4 = void 0;
const RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const isUUIDv4 = x => RE.test(x);

exports.isUUIDv4 = isUUIDv4;
},{}],"node_modules/@thi.ng/checks/is-zero.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isZero = void 0;

const isZero = x => x === 0;

exports.isZero = isZero;
},{}],"node_modules/@thi.ng/checks/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _existsNotNull = require("./exists-not-null");

Object.keys(_existsNotNull).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _existsNotNull[key];
    }
  });
});

var _exists = require("./exists");

Object.keys(_exists).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _exists[key];
    }
  });
});

var _hasCrypto = require("./has-crypto");

Object.keys(_hasCrypto).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasCrypto[key];
    }
  });
});

var _hasMaxLength = require("./has-max-length");

Object.keys(_hasMaxLength).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasMaxLength[key];
    }
  });
});

var _hasMinLength = require("./has-min-length");

Object.keys(_hasMinLength).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasMinLength[key];
    }
  });
});

var _hasPerformance = require("./has-performance");

Object.keys(_hasPerformance).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasPerformance[key];
    }
  });
});

var _hasWasm = require("./has-wasm");

Object.keys(_hasWasm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasWasm[key];
    }
  });
});

var _hasWebgl = require("./has-webgl");

Object.keys(_hasWebgl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasWebgl[key];
    }
  });
});

var _hasWebsocket = require("./has-websocket");

Object.keys(_hasWebsocket).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasWebsocket[key];
    }
  });
});

var _implementsFunction = require("./implements-function");

Object.keys(_implementsFunction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _implementsFunction[key];
    }
  });
});

var _isArray = require("./is-array");

Object.keys(_isArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isArray[key];
    }
  });
});

var _isArraylike = require("./is-arraylike");

Object.keys(_isArraylike).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isArraylike[key];
    }
  });
});

var _isBlob = require("./is-blob");

Object.keys(_isBlob).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isBlob[key];
    }
  });
});

var _isBoolean = require("./is-boolean");

Object.keys(_isBoolean).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isBoolean[key];
    }
  });
});

var _isChrome = require("./is-chrome");

Object.keys(_isChrome).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isChrome[key];
    }
  });
});

var _isDate = require("./is-date");

Object.keys(_isDate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isDate[key];
    }
  });
});

var _isEven = require("./is-even");

Object.keys(_isEven).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isEven[key];
    }
  });
});

var _isFalse = require("./is-false");

Object.keys(_isFalse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFalse[key];
    }
  });
});

var _isFile = require("./is-file");

Object.keys(_isFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFile[key];
    }
  });
});

var _isFirefox = require("./is-firefox");

Object.keys(_isFirefox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFirefox[key];
    }
  });
});

var _isFunction = require("./is-function");

Object.keys(_isFunction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFunction[key];
    }
  });
});

var _isHexColor = require("./is-hex-color");

Object.keys(_isHexColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isHexColor[key];
    }
  });
});

var _isIe = require("./is-ie");

Object.keys(_isIe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isIe[key];
    }
  });
});

var _isInRange = require("./is-in-range");

Object.keys(_isInRange).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isInRange[key];
    }
  });
});

var _isInt = require("./is-int32");

Object.keys(_isInt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isInt[key];
    }
  });
});

var _isIterable = require("./is-iterable");

Object.keys(_isIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isIterable[key];
    }
  });
});

var _isMap = require("./is-map");

Object.keys(_isMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isMap[key];
    }
  });
});

var _isMobile = require("./is-mobile");

Object.keys(_isMobile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isMobile[key];
    }
  });
});

var _isNan = require("./is-nan");

Object.keys(_isNan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNan[key];
    }
  });
});

var _isNegative = require("./is-negative");

Object.keys(_isNegative).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNegative[key];
    }
  });
});

var _isNil = require("./is-nil");

Object.keys(_isNil).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNil[key];
    }
  });
});

var _isNode = require("./is-node");

Object.keys(_isNode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNode[key];
    }
  });
});

var _isNotStringIterable = require("./is-not-string-iterable");

Object.keys(_isNotStringIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNotStringIterable[key];
    }
  });
});

var _isNull = require("./is-null");

Object.keys(_isNull).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNull[key];
    }
  });
});

var _isNumber = require("./is-number");

Object.keys(_isNumber).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNumber[key];
    }
  });
});

var _isObject = require("./is-object");

Object.keys(_isObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isObject[key];
    }
  });
});

var _isOdd = require("./is-odd");

Object.keys(_isOdd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isOdd[key];
    }
  });
});

var _isPlainObject = require("./is-plain-object");

Object.keys(_isPlainObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPlainObject[key];
    }
  });
});

var _isPositive = require("./is-positive");

Object.keys(_isPositive).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPositive[key];
    }
  });
});

var _isPrimitive = require("./is-primitive");

Object.keys(_isPrimitive).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPrimitive[key];
    }
  });
});

var _isPromise = require("./is-promise");

Object.keys(_isPromise).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPromise[key];
    }
  });
});

var _isPromiselike = require("./is-promiselike");

Object.keys(_isPromiselike).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPromiselike[key];
    }
  });
});

var _isRegexp = require("./is-regexp");

Object.keys(_isRegexp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isRegexp[key];
    }
  });
});

var _isSafari = require("./is-safari");

Object.keys(_isSafari).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSafari[key];
    }
  });
});

var _isSet = require("./is-set");

Object.keys(_isSet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSet[key];
    }
  });
});

var _isString = require("./is-string");

Object.keys(_isString).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isString[key];
    }
  });
});

var _isSymbol = require("./is-symbol");

Object.keys(_isSymbol).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSymbol[key];
    }
  });
});

var _isTransferable = require("./is-transferable");

Object.keys(_isTransferable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTransferable[key];
    }
  });
});

var _isTrue = require("./is-true");

Object.keys(_isTrue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTrue[key];
    }
  });
});

var _isTypedarray = require("./is-typedarray");

Object.keys(_isTypedarray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTypedarray[key];
    }
  });
});

var _isUint = require("./is-uint32");

Object.keys(_isUint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUint[key];
    }
  });
});

var _isUndefined = require("./is-undefined");

Object.keys(_isUndefined).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUndefined[key];
    }
  });
});

var _isUuid = require("./is-uuid");

Object.keys(_isUuid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUuid[key];
    }
  });
});

var _isUuid2 = require("./is-uuid4");

Object.keys(_isUuid2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUuid2[key];
    }
  });
});

var _isZero = require("./is-zero");

Object.keys(_isZero).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isZero[key];
    }
  });
});
},{"./exists-not-null":"node_modules/@thi.ng/checks/exists-not-null.js","./exists":"node_modules/@thi.ng/checks/exists.js","./has-crypto":"node_modules/@thi.ng/checks/has-crypto.js","./has-max-length":"node_modules/@thi.ng/checks/has-max-length.js","./has-min-length":"node_modules/@thi.ng/checks/has-min-length.js","./has-performance":"node_modules/@thi.ng/checks/has-performance.js","./has-wasm":"node_modules/@thi.ng/checks/has-wasm.js","./has-webgl":"node_modules/@thi.ng/checks/has-webgl.js","./has-websocket":"node_modules/@thi.ng/checks/has-websocket.js","./implements-function":"node_modules/@thi.ng/checks/implements-function.js","./is-array":"node_modules/@thi.ng/checks/is-array.js","./is-arraylike":"node_modules/@thi.ng/checks/is-arraylike.js","./is-blob":"node_modules/@thi.ng/checks/is-blob.js","./is-boolean":"node_modules/@thi.ng/checks/is-boolean.js","./is-chrome":"node_modules/@thi.ng/checks/is-chrome.js","./is-date":"node_modules/@thi.ng/checks/is-date.js","./is-even":"node_modules/@thi.ng/checks/is-even.js","./is-false":"node_modules/@thi.ng/checks/is-false.js","./is-file":"node_modules/@thi.ng/checks/is-file.js","./is-firefox":"node_modules/@thi.ng/checks/is-firefox.js","./is-function":"node_modules/@thi.ng/checks/is-function.js","./is-hex-color":"node_modules/@thi.ng/checks/is-hex-color.js","./is-ie":"node_modules/@thi.ng/checks/is-ie.js","./is-in-range":"node_modules/@thi.ng/checks/is-in-range.js","./is-int32":"node_modules/@thi.ng/checks/is-int32.js","./is-iterable":"node_modules/@thi.ng/checks/is-iterable.js","./is-map":"node_modules/@thi.ng/checks/is-map.js","./is-mobile":"node_modules/@thi.ng/checks/is-mobile.js","./is-nan":"node_modules/@thi.ng/checks/is-nan.js","./is-negative":"node_modules/@thi.ng/checks/is-negative.js","./is-nil":"node_modules/@thi.ng/checks/is-nil.js","./is-node":"node_modules/@thi.ng/checks/is-node.js","./is-not-string-iterable":"node_modules/@thi.ng/checks/is-not-string-iterable.js","./is-null":"node_modules/@thi.ng/checks/is-null.js","./is-number":"node_modules/@thi.ng/checks/is-number.js","./is-object":"node_modules/@thi.ng/checks/is-object.js","./is-odd":"node_modules/@thi.ng/checks/is-odd.js","./is-plain-object":"node_modules/@thi.ng/checks/is-plain-object.js","./is-positive":"node_modules/@thi.ng/checks/is-positive.js","./is-primitive":"node_modules/@thi.ng/checks/is-primitive.js","./is-promise":"node_modules/@thi.ng/checks/is-promise.js","./is-promiselike":"node_modules/@thi.ng/checks/is-promiselike.js","./is-regexp":"node_modules/@thi.ng/checks/is-regexp.js","./is-safari":"node_modules/@thi.ng/checks/is-safari.js","./is-set":"node_modules/@thi.ng/checks/is-set.js","./is-string":"node_modules/@thi.ng/checks/is-string.js","./is-symbol":"node_modules/@thi.ng/checks/is-symbol.js","./is-transferable":"node_modules/@thi.ng/checks/is-transferable.js","./is-true":"node_modules/@thi.ng/checks/is-true.js","./is-typedarray":"node_modules/@thi.ng/checks/is-typedarray.js","./is-uint32":"node_modules/@thi.ng/checks/is-uint32.js","./is-undefined":"node_modules/@thi.ng/checks/is-undefined.js","./is-uuid":"node_modules/@thi.ng/checks/is-uuid.js","./is-uuid4":"node_modules/@thi.ng/checks/is-uuid4.js","./is-zero":"node_modules/@thi.ng/checks/is-zero.js"}],"node_modules/@thi.ng/hiccup/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VOID_TAGS = exports.SVG_TAGS = exports.NO_SPANS = exports.COMMENT = exports.RE_ENTITY = exports.RE_TAG = exports.ENTITIES = exports.PROC_TAGS = exports.XHTML_NS = exports.XLINK_NS = exports.SVG_NS = void 0;
const SVG_NS = "http://www.w3.org/2000/svg";
exports.SVG_NS = SVG_NS;
const XLINK_NS = "http://www.w3.org/1999/xlink";
exports.XLINK_NS = XLINK_NS;
const XHTML_NS = "http://www.w3.org/1999/xhtml";
exports.XHTML_NS = XHTML_NS;
const PROC_TAGS = {
  "?xml": "?>\n",
  "!DOCTYPE": ">\n",
  "!ENTITY": ">\n",
  "!ELEMENT": ">\n",
  "!ATTLIST": ">\n"
};
exports.PROC_TAGS = PROC_TAGS;
const ENTITIES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
};
exports.ENTITIES = ENTITIES;
const RE_TAG = /^([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?$/;
exports.RE_TAG = RE_TAG;
const RE_ENTITY = new RegExp(`[${Object.keys(ENTITIES).join("")}]`, "g");
exports.RE_ENTITY = RE_ENTITY;
const COMMENT = "__COMMENT__";
exports.COMMENT = COMMENT;
const NO_SPANS = {
  button: 1,
  option: 1,
  text: 1,
  textarea: 1
};
exports.NO_SPANS = NO_SPANS;

const tagMap = tags => tags.split(" ").reduce((acc, x) => (acc[x] = true, acc), {}); // tslint:disable-next-line


const SVG_TAGS = tagMap("animate animateColor animateMotion animateTransform circle clipPath color-profile defs desc discard ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter font foreignObject g image line linearGradient marker mask metadata mpath path pattern polygon polyline radialGradient rect set stop style svg switch symbol text textPath title tref tspan use view"); // tslint:disable-next-line

exports.SVG_TAGS = SVG_TAGS;
const VOID_TAGS = tagMap("area base br circle col command ellipse embed hr img input keygen line link meta param path polygon polyline rect source stop track use wbr ?xml");
exports.VOID_TAGS = VOID_TAGS;
},{}],"node_modules/@thi.ng/hiccup/css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = void 0;

var _checks = require("@thi.ng/checks");

const css = rules => {
  let css = "",
      v;

  for (let r in rules) {
    v = rules[r];

    if ((0, _checks.isFunction)(v)) {
      v = v(rules);
    }

    v != null && (css += `${r}:${v};`);
  }

  return css;
};

exports.css = css;
},{"@thi.ng/checks":"node_modules/@thi.ng/checks/index.js"}],"node_modules/@thi.ng/hiccup/deref.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derefContext = void 0;

var _checks = require("@thi.ng/checks");

/**
 * Takes an arbitrary `ctx` object and array of `keys`. Attempts to call
 * `.deref()` on all given keys' values and stores result values instead
 * of original. Returns updated copy of `ctx` or original if `ctx` is
 * `null` or no keys were given.
 *
 * @param ctx
 * @param keys
 */
const derefContext = (ctx, keys) => {
  if (ctx == null || !keys || !keys.length) return ctx;
  const res = Object.assign({}, ctx);

  for (let k of keys) {
    const v = res[k];
    (0, _checks.implementsFunction)(v, "deref") && (res[k] = v.deref());
  }

  return res;
};

exports.derefContext = derefContext;
},{"@thi.ng/checks":"node_modules/@thi.ng/checks/index.js"}],"node_modules/@thi.ng/hiccup/escape.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escape = void 0;

var _api = require("./api");

const escape = x => x.replace(_api.RE_ENTITY, y => _api.ENTITIES[y]);

exports.escape = escape;
},{"./api":"node_modules/@thi.ng/hiccup/api.js"}],"node_modules/@thi.ng/errors/deferror.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defError = void 0;

const defError = (prefix, suffix = msg => msg !== undefined ? ": " + msg : "") => class extends Error {
  constructor(msg) {
    super(prefix(msg) + suffix(msg));
  }

};

exports.defError = defError;
},{}],"node_modules/@thi.ng/errors/illegal-arguments.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.illegalArgs = exports.IllegalArgumentError = void 0;

var _deferror = require("./deferror");

const IllegalArgumentError = (0, _deferror.defError)(() => "illegal argument(s)");
exports.IllegalArgumentError = IllegalArgumentError;

const illegalArgs = msg => {
  throw new IllegalArgumentError(msg);
};

exports.illegalArgs = illegalArgs;
},{"./deferror":"node_modules/@thi.ng/errors/deferror.js"}],"node_modules/@thi.ng/errors/illegal-arity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.illegalArity = exports.IllegalArityError = void 0;

var _deferror = require("./deferror");

const IllegalArityError = (0, _deferror.defError)(() => "illegal arity");
exports.IllegalArityError = IllegalArityError;

const illegalArity = n => {
  throw new IllegalArityError(n);
};

exports.illegalArity = illegalArity;
},{"./deferror":"node_modules/@thi.ng/errors/deferror.js"}],"node_modules/@thi.ng/errors/illegal-state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.illegalState = exports.IllegalStateError = void 0;

var _deferror = require("./deferror");

const IllegalStateError = (0, _deferror.defError)(() => "illegal state");
exports.IllegalStateError = IllegalStateError;

const illegalState = msg => {
  throw new IllegalStateError(msg);
};

exports.illegalState = illegalState;
},{"./deferror":"node_modules/@thi.ng/errors/deferror.js"}],"node_modules/@thi.ng/errors/unsupported.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsupported = exports.UnsupportedOperationError = void 0;

var _deferror = require("./deferror");

const UnsupportedOperationError = (0, _deferror.defError)(() => "unsupported operation");
exports.UnsupportedOperationError = UnsupportedOperationError;

const unsupported = msg => {
  throw new UnsupportedOperationError(msg);
};

exports.unsupported = unsupported;
},{"./deferror":"node_modules/@thi.ng/errors/deferror.js"}],"node_modules/@thi.ng/errors/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deferror = require("./deferror");

Object.keys(_deferror).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deferror[key];
    }
  });
});

var _illegalArguments = require("./illegal-arguments");

Object.keys(_illegalArguments).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _illegalArguments[key];
    }
  });
});

var _illegalArity = require("./illegal-arity");

Object.keys(_illegalArity).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _illegalArity[key];
    }
  });
});

var _illegalState = require("./illegal-state");

Object.keys(_illegalState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _illegalState[key];
    }
  });
});

var _unsupported = require("./unsupported");

Object.keys(_unsupported).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _unsupported[key];
    }
  });
});
},{"./deferror":"node_modules/@thi.ng/errors/deferror.js","./illegal-arguments":"node_modules/@thi.ng/errors/illegal-arguments.js","./illegal-arity":"node_modules/@thi.ng/errors/illegal-arity.js","./illegal-state":"node_modules/@thi.ng/errors/illegal-state.js","./unsupported":"node_modules/@thi.ng/errors/unsupported.js"}],"node_modules/@thi.ng/hiccup/normalize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalize = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _api = require("./api");

var _css = require("./css");

const normalize = tag => {
  let el = tag[0];
  let match;
  let id;
  let clazz;
  const hasAttribs = (0, _checks.isPlainObject)(tag[1]);
  const attribs = hasAttribs ? Object.assign({}, tag[1]) : {};

  if (!(0, _checks.isString)(el) || !(match = _api.RE_TAG.exec(el))) {
    (0, _errors.illegalArgs)(`"${el}" is not a valid tag name`);
  }

  el = match[1];
  id = match[2];
  clazz = match[3];

  if (id) {
    attribs.id = id;
  }

  if (clazz) {
    clazz = clazz.replace(/\./g, " ");

    if (attribs.class) {
      attribs.class += " " + clazz;
    } else {
      attribs.class = clazz;
    }
  }

  if (tag.length > 1) {
    if ((0, _checks.isPlainObject)(attribs.style)) {
      attribs.style = (0, _css.css)(attribs.style);
    }

    tag = tag.slice(hasAttribs ? 2 : 1).filter(x => x != null);

    if (tag.length > 0) {
      return [el, attribs, tag];
    }
  }

  return [el, attribs];
};

exports.normalize = normalize;
},{"@thi.ng/checks":"node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"node_modules/@thi.ng/errors/index.js","./api":"node_modules/@thi.ng/hiccup/api.js","./css":"node_modules/@thi.ng/hiccup/css.js"}],"node_modules/@thi.ng/hiccup/serialize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serialize = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _api = require("./api");

var _escape = require("./escape");

var _normalize = require("./normalize");

/**
 * Recursively normalizes and serializes given tree as HTML/SVG/XML
 * string. Expands any embedded component functions with their results.
 * Each node of the input tree can have one of the following input
 * forms:
 *
 * ```js
 * ["tag", ...]
 * ["tag#id.class1.class2", ...]
 * ["tag", {other: "attrib"}, ...]
 * ["tag", {...}, "body", function, ...]
 * [function, arg1, arg2, ...]
 * [{render: (ctx,...) => [...]}, args...]
 * iterable
 * ```
 *
 * Tags can be defined in "Zencoding" convention, e.g.
 *
 * ```js
 * ["div#foo.bar.baz", "hi"] // <div id="foo" class="bar baz">hi</div>
 * ```
 *
 * The presence of the attributes object (2nd array index) is optional.
 * Any attribute values, incl. functions are allowed. If the latter, the
 * function is called with the full attribs object as argument and the
 * return value is used for the attribute. This allows for the dynamic
 * creation of attrib values based on other attribs. The only exception
 * to this are event attributes, i.e. attribute names starting with
 * "on". Function values assigned to event attributes will be omitted
 * from the output.
 *
 * ```js
 * ["div#foo", { bar: (attribs) => attribs.id + "-bar" }]
 * // <div id="foo" bar="foo-bar"></div>
 * ```
 *
 * The `style` attribute can ONLY be defined as string or object.
 *
 * ```js
 * ["div", {style: {color: "red", background: "#000"}}]
 * // <div style="color:red;background:#000;"></div>
 * ```
 *
 * Boolean attribs are serialized in HTML5 syntax (present or not).
 * `null`, `undefined` or empty string attrib values are ignored.
 *
 * Any `null` or `undefined` array values (other than in head position)
 * will also be removed, unless a function is in head position.
 *
 * A function in head position of a node acts as a mechanism for
 * component composition & delayed execution. The function will only be
 * executed at serialization time. In this case the optional global
 * context object and all other elements of that node / array are passed
 * as arguments when that function is called. The return value the
 * function MUST be a valid new tree (or `undefined`).
 *
 * If the `ctx` object it'll be passed to each embedded component fns.
 * Optionally call `derefContext()` prior to `serialize()` to auto-deref
 * context keys with values implementing the thi.ng/api `IDeref`
 * interface.
 *
 * ```js
 * const foo = (ctx, a, b) => ["div#" + a, ctx.foo, b];
 *
 * serialize([foo, "id", "body"], { foo: { class: "black" } })
 * // <div id="id" class="black">body</div>
 * ```
 *
 * Functions located in other positions are called ONLY with the global
 * context arg and can return any (serializable) value (i.e. new trees,
 * strings, numbers, iterables or any type with a suitable
 * `.toString()`, `.toHiccup()` or `.deref()` implementation).
 *
 * If the optional `span` flag is true (default: false), all text
 * content will be wrapped in <span> elements (this is to ensure DOM
 * compatibility with hdom). The only elements for spans are never
 * created are listed in `NO_SPANS` in `api.ts`.
 *
 * If the optional `keys` flag is true (default: false), all elements
 * will have an autogenerated `key` attribute injected. If `span` is
 * enabled, `keys` will be enabled by default too (since in this case we
 * assume the output is meant to be compatible with @thi.ng/hdom).
 *
 * hiccup & hdom control attributes (i.e. attrib names prefixed with
 * `__`) will be omitted from the output. The only control attrib
 * supported by this package is `__serialize`. If set to `false`, the
 * entire tree branch will be excluded from the output.
 *
 * Single or multiline comments can be included using the special
 * `COMMENT` tag (`__COMMENT__`) (always WITHOUT attributes!).
 *
 * ```
 * [COMMENT, "Hello world"]
 * // <!-- Hello world -->
 *
 * [COMMENT, "Hello", "world"]
 * <!--
 *     Hello
 *     world
 * -->
 * ```
 *
 * Currently, the only processing / DTD instructions supported are:
 *
 * - `?xml`
 * - `!DOCTYTPE`
 * - `!ELEMENT`
 * - `!ENTITY`
 * - `!ATTLIST`
 *
 * These are used as follows (attribs are only allowed for `?xml`, all
 * others only accept a body string which is taken as is):
 *
 * ```
 * ["?xml", { version: "1.0", standalone: "yes" }]
 * // <?xml version="1.0" standalone="yes"?>
 *
 * ["!DOCTYPE", "html"]
 * // <!DOCTYPE html>
 * ```
 *
 * @param tree hiccup elements / component tree
 * @param ctx arbitrary user context object
 * @param escape auto-escape entities
 * @param span use spans for text content
 * @param keys attach key attribs
 */
const serialize = (tree, ctx, escape = false, span = false, keys = span, path = [0]) => _serialize(tree, ctx, escape, span, keys, path);

exports.serialize = serialize;

const _serialize = (tree, ctx, esc, span, keys, path) => {
  if (tree == null) {
    return "";
  }

  if (Array.isArray(tree)) {
    return serializeElement(tree, ctx, esc, span, keys, path);
  }

  if ((0, _checks.isFunction)(tree)) {
    return _serialize(tree(ctx), ctx, esc, span, keys, path);
  }

  if ((0, _checks.implementsFunction)(tree, "toHiccup")) {
    return _serialize(tree.toHiccup(ctx), ctx, esc, span, keys, path);
  }

  if ((0, _checks.implementsFunction)(tree, "deref")) {
    return _serialize(tree.deref(), ctx, esc, span, keys, path);
  }

  if ((0, _checks.isNotStringAndIterable)(tree)) {
    return serializeIter(tree, ctx, esc, span, keys, path);
  }

  tree = esc ? (0, _escape.escape)(tree.toString()) : tree;
  return span ? `<span${keys ? ` key="${path.join("-")}"` : ""}>${tree}</span>` : tree;
};

const serializeElement = (tree, ctx, esc, span, keys, path) => {
  if (!tree.length) {
    return "";
  }

  let tag = tree[0];

  if ((0, _checks.isFunction)(tag)) {
    return _serialize(tag.apply(null, [ctx, ...tree.slice(1)]), ctx, esc, span, keys, path);
  }

  if ((0, _checks.implementsFunction)(tag, "render")) {
    return _serialize(tag.render.apply(null, [ctx, ...tree.slice(1)]), ctx, esc, span, keys, path);
  }

  if (tag === _api.COMMENT) {
    return serializeComment(tree);
  }

  if ((0, _checks.isString)(tag)) {
    tree = (0, _normalize.normalize)(tree);
    tag = tree[0];
    const attribs = tree[1];

    if (attribs.__skip || attribs.__serialize === false) {
      return "";
    }

    let body = tree[2];
    let res = `<${tag}`;
    keys && attribs.key === undefined && (attribs.key = path.join("-"));
    res += serializeAttribs(attribs, esc);
    res += body ? serializeBody(tag, body, ctx, esc, span, keys, path) : !_api.VOID_TAGS[tag] ? `></${tag}>` : _api.PROC_TAGS[tag] || "/>";
    return res;
  }

  if ((0, _checks.isNotStringAndIterable)(tree)) {
    return serializeIter(tree, ctx, esc, span, keys, path);
  }

  return (0, _errors.illegalArgs)(`invalid tree node: ${tree}`);
};

const serializeAttribs = (attribs, esc) => {
  let res = "";

  for (let a in attribs) {
    if (a.startsWith("__")) continue;
    let v = attribs[a];
    if (v == null) continue;
    if ((0, _checks.isFunction)(v) && (/^on\w+/.test(a) || (v = v(attribs)) == null)) continue;

    if (v === true) {
      res += " " + a;
    } else if (v !== false) {
      v = v.toString();
      v.length && (res += ` ${a}="${esc ? (0, _escape.escape)(v) : v}"`);
    }
  }

  return res;
};

const serializeBody = (tag, body, ctx, esc, span, keys, path) => {
  if (_api.VOID_TAGS[tag]) {
    (0, _errors.illegalArgs)(`No body allowed in tag: ${tag}`);
  }

  const proc = _api.PROC_TAGS[tag];
  let res = proc ? " " : ">";
  span = span && !proc && !_api.NO_SPANS[tag];

  for (let i = 0, n = body.length; i < n; i++) {
    res += _serialize(body[i], ctx, esc, span, keys, [...path, i]);
  }

  return res + (proc || `</${tag}>`);
};

const serializeComment = tree => tree.length > 2 ? `\n<!--\n${tree.slice(1).map(x => "    " + x).join("\n")}\n-->\n` : `\n<!-- ${tree[1]} -->\n`;

const serializeIter = (iter, ctx, esc, span, keys, path) => {
  const res = [];
  const p = path.slice(0, path.length - 1);
  let k = 0;

  for (let i of iter) {
    res.push(_serialize(i, ctx, esc, span, keys, [...p, k++]));
  }

  return res.join("");
};
},{"@thi.ng/checks":"node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"node_modules/@thi.ng/errors/index.js","./api":"node_modules/@thi.ng/hiccup/api.js","./escape":"node_modules/@thi.ng/hiccup/escape.js","./normalize":"node_modules/@thi.ng/hiccup/normalize.js"}],"node_modules/@thi.ng/hiccup/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _css = require("./css");

Object.keys(_css).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _css[key];
    }
  });
});

var _deref = require("./deref");

Object.keys(_deref).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deref[key];
    }
  });
});

var _escape = require("./escape");

Object.keys(_escape).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _escape[key];
    }
  });
});

var _normalize = require("./normalize");

Object.keys(_normalize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _normalize[key];
    }
  });
});

var _serialize = require("./serialize");

Object.keys(_serialize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _serialize[key];
    }
  });
});
},{"./api":"node_modules/@thi.ng/hiccup/api.js","./css":"node_modules/@thi.ng/hiccup/css.js","./deref":"node_modules/@thi.ng/hiccup/deref.js","./escape":"node_modules/@thi.ng/hiccup/escape.js","./normalize":"node_modules/@thi.ng/hiccup/normalize.js","./serialize":"node_modules/@thi.ng/hiccup/serialize.js"}],"node_modules/@thi.ng/hdom/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeChild = exports.clearDOM = exports.removeListener = exports.setListener = exports.setStyle = exports.removeAttribs = exports.updateValueAttrib = exports.setAttrib = exports.setAttribs = exports.setContent = exports.cloneWithNewAttribs = exports.replaceChild = exports.getChild = exports.addChild = exports.createTextElement = exports.createElement = exports.hydrateTree = exports.createTree = void 0;

var _checks = require("@thi.ng/checks");

var _hiccup = require("@thi.ng/hiccup");

const isArray = _checks.isArray;
const isNotStringAndIterable = _checks.isNotStringAndIterable;

const maybeInitElement = (el, tree) => tree.__init && tree.__init.apply(tree.__this, [el, ...tree.__args]);
/**
 * See `HDOMImplementation` interface for further details.
 *
 * @param opts
 * @param parent
 * @param tree
 * @param insert
 */


const createTree = (opts, impl, parent, tree, insert, init = true) => {
  if (isArray(tree)) {
    const tag = tree[0];

    if (typeof tag === "function") {
      return createTree(opts, impl, parent, tag.apply(null, [opts.ctx, ...tree.slice(1)]), insert);
    }

    const attribs = tree[1];

    if (attribs.__impl) {
      return attribs.__impl.createTree(opts, parent, tree, insert, init);
    }

    const el = impl.createElement(parent, tag, attribs, insert);

    if (tree.length > 2) {
      const n = tree.length;

      for (let i = 2; i < n; i++) {
        createTree(opts, impl, el, tree[i], undefined, init);
      }
    }

    init && maybeInitElement(el, tree);
    return el;
  }

  if (isNotStringAndIterable(tree)) {
    const res = [];

    for (let t of tree) {
      res.push(createTree(opts, impl, parent, t, insert, init));
    }

    return res;
  }

  if (tree == null) {
    return parent;
  }

  return impl.createTextElement(parent, tree);
};
/**
 * See `HDOMImplementation` interface for further details.
 *
 * @param opts
 * @param parent
 * @param tree
 * @param index
 */


exports.createTree = createTree;

const hydrateTree = (opts, impl, parent, tree, index = 0) => {
  if (isArray(tree)) {
    const el = impl.getChild(parent, index);

    if (typeof tree[0] === "function") {
      hydrateTree(opts, impl, parent, tree[0].apply(null, [opts.ctx, ...tree.slice(1)]), index);
    }

    const attribs = tree[1];

    if (attribs.__impl) {
      return attribs.__impl.hydrateTree(opts, parent, tree, index);
    }

    maybeInitElement(el, tree);

    for (let a in attribs) {
      a.indexOf("on") === 0 && impl.setAttrib(el, a, attribs[a]);
    }

    for (let n = tree.length, i = 2; i < n; i++) {
      hydrateTree(opts, impl, el, tree[i], i - 2);
    }
  } else if (isNotStringAndIterable(tree)) {
    for (let t of tree) {
      hydrateTree(opts, impl, parent, t, index);
      index++;
    }
  }
};
/**
 * Creates a new DOM element of type `tag` with optional `attribs`. If
 * `parent` is not `null`, the new element will be inserted as child at
 * given `insert` index. If `insert` is missing, the element will be
 * appended to the `parent`'s list of children. Returns new DOM node.
 *
 * If `tag` is a known SVG element name, the new element will be created
 * with the proper SVG XML namespace.
 *
 * @param parent
 * @param tag
 * @param attribs
 * @param insert
 */


exports.hydrateTree = hydrateTree;

const createElement = (parent, tag, attribs, insert) => {
  const el = _hiccup.SVG_TAGS[tag] ? document.createElementNS(_hiccup.SVG_NS, tag) : document.createElement(tag);
  attribs && setAttribs(el, attribs);
  return addChild(parent, el, insert);
};

exports.createElement = createElement;

const createTextElement = (parent, content, insert) => addChild(parent, document.createTextNode(content), insert);

exports.createTextElement = createTextElement;

const addChild = (parent, child, insert) => parent ? insert === undefined ? parent.appendChild(child) : parent.insertBefore(child, parent.children[insert]) : child;

exports.addChild = addChild;

const getChild = (parent, child) => parent.children[child];

exports.getChild = getChild;

const replaceChild = (opts, impl, parent, child, tree, init = true) => (impl.removeChild(parent, child), impl.createTree(opts, parent, tree, child, init));

exports.replaceChild = replaceChild;

const cloneWithNewAttribs = (el, attribs) => {
  const res = el.cloneNode(true);
  setAttribs(res, attribs);
  el.parentNode.replaceChild(res, el);
  return res;
};

exports.cloneWithNewAttribs = cloneWithNewAttribs;

const setContent = (el, body) => el.textContent = body;

exports.setContent = setContent;

const setAttribs = (el, attribs) => {
  for (let k in attribs) {
    setAttrib(el, k, attribs[k], attribs);
  }

  return el;
};
/**
 * Sets a single attribute on given element. If attrib name is NOT an
 * event name (prefix: "on") and its value is a function, it is called
 * with given `attribs` object (usually the full attrib object passed to
 * `setAttribs`) and the function's return value is used as the actual
 * attrib value.
 *
 * Special rules apply for certain attributes:
 *
 * - "style": delegated to `setStyle()`
 * - "value": delegated to `updateValueAttrib()`
 * - attrib IDs starting with "on" are treated as event listeners
 *
 * If the given (or computed) attrib value is `false` or `undefined` the
 * attrib is removed from the element.
 *
 * @param el
 * @param id
 * @param val
 * @param attribs
 */


exports.setAttribs = setAttribs;

const setAttrib = (el, id, val, attribs) => {
  if (id.startsWith("__")) return;
  const isListener = id.indexOf("on") === 0;

  if (!isListener && typeof val === "function") {
    val = val(attribs);
  }

  if (val !== undefined && val !== false) {
    switch (id) {
      case "style":
        setStyle(el, val);
        break;

      case "value":
        updateValueAttrib(el, val);
        break;

      case "accesskey":
        el.accessKey = val;
        break;

      case "contenteditable":
        el.contentEditable = val;
        break;

      case "tabindex":
        el.tabIndex = val;
        break;

      case "align":
      case "autocapitalize":
      case "checked":
      case "dir":
      case "draggable":
      case "hidden":
      case "id":
      case "lang":
      case "namespaceURI":
      case "scrollTop":
      case "scrollLeft":
      case "title":
        // TODO add more properties / enumerated attribs?
        el[id] = val;
        break;

      default:
        isListener ? setListener(el, id.substr(2), val) : el.setAttribute(id, val === true ? "" : val);
    }
  } else {
    el[id] != null ? el[id] = null : el.removeAttribute(id);
  }

  return el;
};
/**
 * Updates an element's `value` property. For form elements it too
 * ensures the edit cursor retains its position.
 *
 * @param el
 * @param v
 */


exports.setAttrib = setAttrib;

const updateValueAttrib = (el, v) => {
  let ev;

  switch (el.type) {
    case "text":
    case "textarea":
    case "password":
    case "search":
    case "number":
    case "email":
    case "url":
    case "tel":
    case "date":
    case "datetime-local":
    case "time":
    case "week":
    case "month":
      if ((ev = el.value) !== undefined && typeof v === "string") {
        const off = v.length - (ev.length - (el.selectionStart || 0));
        el.value = v;
        el.selectionStart = el.selectionEnd = off;
        break;
      }

    default:
      el.value = v;
  }
};

exports.updateValueAttrib = updateValueAttrib;

const removeAttribs = (el, attribs, prev) => {
  for (let i = attribs.length; --i >= 0;) {
    const a = attribs[i];

    if (a.indexOf("on") === 0) {
      removeListener(el, a.substr(2), prev[a]);
    } else {
      el.hasAttribute(a) ? el.removeAttribute(a) : el[a] = null;
    }
  }
};

exports.removeAttribs = removeAttribs;

const setStyle = (el, styles) => (el.setAttribute("style", (0, _hiccup.css)(styles)), el);
/**
 * Adds event listener (possibly with options).
 *
 * @param el
 * @param id event name (w/o `on` prefix)
 * @param listener
 */


exports.setStyle = setStyle;

const setListener = (el, id, listener) => isArray(listener) ? el.addEventListener(id, ...listener) : el.addEventListener(id, listener);
/**
 * Removes event listener (possibly with options).
 *
 * @param el
 * @param id event name (w/o `on` prefix)
 * @param listener
 */


exports.setListener = setListener;

const removeListener = (el, id, listener) => isArray(listener) ? el.removeEventListener(id, ...listener) : el.removeEventListener(id, listener);

exports.removeListener = removeListener;

const clearDOM = el => el.innerHTML = "";

exports.clearDOM = clearDOM;

const removeChild = (parent, childIdx) => {
  const n = parent.children[childIdx];
  n !== undefined && parent.removeChild(n);
};

exports.removeChild = removeChild;
},{"@thi.ng/checks":"node_modules/@thi.ng/checks/index.js","@thi.ng/hiccup":"node_modules/@thi.ng/hiccup/index.js"}],"node_modules/@thi.ng/hdom/normalize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeTree = exports.normalizeElement = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _hiccup = require("@thi.ng/hiccup");

const isArray = _checks.isArray;
const isNotStringAndIterable = _checks.isNotStringAndIterable;
const isPlainObject = _checks.isPlainObject;
/**
 * Expands single hiccup element/component into its canonical form:
 *
 * ```
 * [tagname, {attribs}, ...children]
 * ```
 *
 * Emmet-style ID and class names in the original tagname are moved into
 * the attribs object, e.g.:
 *
 * ```
 * ["div#foo.bar.baz"] => ["div", {id: "foo", class: "bar baz"}]
 * ```
 *
 * If both Emmet-style classes AND a `class` attrib exists, the former
 * are appended to the latter:
 *
 * ```
 * ["div.bar.baz", {class: "foo"}] => ["div", {class: "foo bar baz"}]
 * ```
 *
 * Elements with `__skip` attrib enabled and no children, will have an
 * empty text child element injected.
 *
 * @param spec
 * @param keys
 */

const normalizeElement = (spec, keys) => {
  let tag = spec[0];
  let hasAttribs = isPlainObject(spec[1]);
  let match;
  let mtag;
  let id;
  let clazz;
  let attribs;

  if (typeof tag !== "string" || !(match = _hiccup.RE_TAG.exec(tag))) {
    (0, _errors.illegalArgs)(`${tag} is not a valid tag name`);
  }

  mtag = match[1]; // return orig if already normalized and satisfies key requirement

  if (tag === mtag && hasAttribs && (!keys || spec[1].key)) {
    return spec;
  }

  attribs = hasAttribs ? Object.assign({}, spec[1]) : {};
  id = match[2];
  clazz = match[3];

  if (id) {
    attribs.id = id;
  }

  if (clazz) {
    clazz = clazz.replace(/\./g, " ");

    if (attribs.class) {
      attribs.class += " " + clazz;
    } else {
      attribs.class = clazz;
    }
  }

  return attribs.__skip && spec.length < 3 ? [mtag, attribs] : [mtag, attribs, ...spec.slice(hasAttribs ? 2 : 1)];
};
/**
 * See `HDOMImplementation` interface for further details.
 *
 * @param opts
 * @param tree
 */


exports.normalizeElement = normalizeElement;

const normalizeTree = (opts, tree) => _normalizeTree(tree, opts, opts.ctx, [0], opts.keys !== false, opts.span !== false);

exports.normalizeTree = normalizeTree;

const _normalizeTree = (tree, opts, ctx, path, keys, span) => {
  if (tree == null) {
    return;
  }

  if (isArray(tree)) {
    if (tree.length === 0) {
      return;
    }

    let norm,
        nattribs = tree[1],
        impl; // if available, use branch-local normalize implementation

    if (nattribs && (impl = nattribs.__impl) && (impl = impl.normalizeTree)) {
      return impl(opts, tree);
    }

    const tag = tree[0]; // use result of function call
    // pass ctx as first arg and remaining array elements as rest args

    if (typeof tag === "function") {
      return _normalizeTree(tag.apply(null, [ctx, ...tree.slice(1)]), opts, ctx, path, keys, span);
    } // component object w/ life cycle methods
    // (render() is the only required hook)


    if (typeof tag.render === "function") {
      const args = [ctx, ...tree.slice(1)];
      norm = _normalizeTree(tag.render.apply(tag, args), opts, ctx, path, keys, span);

      if (isArray(norm)) {
        norm.__this = tag;
        norm.__init = tag.init;
        norm.__release = tag.release;
        norm.__args = args;
      }

      return norm;
    }

    norm = normalizeElement(tree, keys);
    nattribs = norm[1];

    if (nattribs.__normalize === false) {
      return norm;
    }

    if (keys && nattribs.key === undefined) {
      nattribs.key = path.join("-");
    }

    if (norm.length > 2) {
      const tag = norm[0];
      const res = [tag, nattribs];
      span = span && !_hiccup.NO_SPANS[tag];

      for (let i = 2, j = 2, k = 0, n = norm.length; i < n; i++) {
        let el = norm[i];

        if (el != null) {
          const isarray = isArray(el);

          if (isarray && isArray(el[0]) || !isarray && isNotStringAndIterable(el)) {
            for (let c of el) {
              c = _normalizeTree(c, opts, ctx, path.concat(k), keys, span);

              if (c !== undefined) {
                res[j++] = c;
              }

              k++;
            }
          } else {
            el = _normalizeTree(el, opts, ctx, path.concat(k), keys, span);

            if (el !== undefined) {
              res[j++] = el;
            }

            k++;
          }
        }
      }

      return res;
    }

    return norm;
  }

  if (typeof tree === "function") {
    return _normalizeTree(tree(ctx), opts, ctx, path, keys, span);
  }

  if (typeof tree.toHiccup === "function") {
    return _normalizeTree(tree.toHiccup(opts.ctx), opts, ctx, path, keys, span);
  }

  if (typeof tree.deref === "function") {
    return _normalizeTree(tree.deref(), opts, ctx, path, keys, span);
  }

  return span ? ["span", keys ? {
    key: path.join("-")
  } : {}, tree.toString()] : tree.toString();
};
},{"@thi.ng/checks":"node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"node_modules/@thi.ng/errors/index.js","@thi.ng/hiccup":"node_modules/@thi.ng/hiccup/index.js"}],"node_modules/@thi.ng/hdom/default.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_IMPL = void 0;

var _diff = require("./diff");

var _dom = require("./dom");

var _normalize = require("./normalize");

/**
 * Default target implementation to manipulate browser DOM.
 */
const DEFAULT_IMPL = {
  createTree(opts, parent, tree, child, init) {
    return (0, _dom.createTree)(opts, this, parent, tree, child, init);
  },

  hydrateTree(opts, parent, tree, child) {
    return (0, _dom.hydrateTree)(opts, this, parent, tree, child);
  },

  diffTree(opts, parent, prev, curr, child) {
    (0, _diff.diffTree)(opts, this, parent, prev, curr, child);
  },

  normalizeTree: _normalize.normalizeTree,

  getElementById(id) {
    return document.getElementById(id);
  },

  getChild: _dom.getChild,
  createElement: _dom.createElement,
  createTextElement: _dom.createTextElement,

  replaceChild(opts, parent, child, tree, init) {
    (0, _dom.replaceChild)(opts, this, parent, child, tree, init);
  },

  removeChild: _dom.removeChild,
  setContent: _dom.setContent,
  removeAttribs: _dom.removeAttribs,
  setAttrib: _dom.setAttrib
};
exports.DEFAULT_IMPL = DEFAULT_IMPL;
},{"./diff":"node_modules/@thi.ng/hdom/diff.js","./dom":"node_modules/@thi.ng/hdom/dom.js","./normalize":"node_modules/@thi.ng/hdom/normalize.js"}],"node_modules/@thi.ng/hdom/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveRoot = void 0;

var _checks = require("@thi.ng/checks");

const resolveRoot = (root, impl) => (0, _checks.isString)(root) ? impl.getElementById(root) : root;

exports.resolveRoot = resolveRoot;
},{"@thi.ng/checks":"node_modules/@thi.ng/checks/index.js"}],"node_modules/@thi.ng/hdom/render-once.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderOnce = void 0;

var _hiccup = require("@thi.ng/hiccup");

var _default = require("./default");

var _utils = require("./utils");

/**
 * One-off hdom tree conversion & target DOM application. Takes same
 * options as `start()`, but performs no diffing and only creates or
 * hydrates target once. The given tree is first normalized and if
 * result is `null` or `undefined` no further action will be taken.
 *
 * @param tree
 * @param opts
 * @param impl
 */
const renderOnce = (tree, opts = {}, impl = _default.DEFAULT_IMPL) => {
  opts = Object.assign({
    root: "app"
  }, opts);
  opts.ctx = (0, _hiccup.derefContext)(opts.ctx, opts.autoDerefKeys);
  const root = (0, _utils.resolveRoot)(opts.root, impl);
  tree = impl.normalizeTree(opts, tree);
  if (!tree) return;
  opts.hydrate ? impl.hydrateTree(opts, root, tree) : impl.createTree(opts, root, tree);
};

exports.renderOnce = renderOnce;
},{"@thi.ng/hiccup":"node_modules/@thi.ng/hiccup/index.js","./default":"node_modules/@thi.ng/hdom/default.js","./utils":"node_modules/@thi.ng/hdom/utils.js"}],"node_modules/@thi.ng/hdom/start.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _hiccup = require("@thi.ng/hiccup");

var _default = require("./default");

var _utils = require("./utils");

/**
 * Takes an hiccup tree (array, function or component object w/ life
 * cycle methods) and an optional object of DOM update options. Starts
 * RAF update loop, in each iteration first normalizing given tree, then
 * computing diff to previous frame's tree and applying any changes to
 * the real DOM. The `ctx` option can be used for passing arbitrary
 * config data or state down into the hiccup component tree. Any
 * embedded component function in the tree will receive this context
 * object (shallow copy) as first argument, as will life cycle methods
 * in component objects. If the `autoDerefKeys` option is given, attempts
 * to auto-expand/deref the given keys in the user supplied context
 * object (`ctx` option) prior to *each* tree normalization. All of
 * these values should implement the thi.ng/api `IDeref` interface (e.g.
 * atoms, cursors, views, rstreams etc.). This feature can be used to
 * define dynamic contexts linked to the main app state, e.g. using
 * derived views provided by thi.ng/atom.
 *
 * **Selective updates**: No updates will be applied if the given hiccup
 * tree is `undefined` or `null` or a root component function returns no
 * value. This way a given root function can do some state handling of
 * its own and implement fail-fast checks to determine no DOM updates
 * are necessary, save effort re-creating a new hiccup tree and request
 * skipping DOM updates via this function. In this case, the previous
 * DOM tree is kept around until the root function returns a tree again,
 * which then is diffed and applied against the previous tree kept as
 * usual. Any number of frames may be skipped this way.
 *
 * **Important:** Unless the `hydrate` option is enabled, the parent
 * element given is assumed to have NO children at the time when
 * `start()` is called. Since hdom does NOT track the real DOM, the
 * resulting changes will result in potentially undefined behavior if
 * the parent element wasn't empty. Likewise, if `hydrate` is enabled,
 * it is assumed that an equivalent DOM (minus listeners) already exists
 * (i.e. generated via SSR) when `start()` is called. Any other
 * discrepancies between the pre-existing DOM and the hdom trees will
 * cause undefined behavior.
 *
 * Returns a function, which when called, immediately cancels the update
 * loop.
 *
 * @param tree hiccup DOM tree
 * @param opts options
 * @param impl hdom target implementation
 */
const start = (tree, opts = {}, impl = _default.DEFAULT_IMPL) => {
  const _opts = Object.assign({
    root: "app"
  }, opts);

  let prev = [];
  let isActive = true;
  const root = (0, _utils.resolveRoot)(_opts.root, impl);

  const update = () => {
    if (isActive) {
      _opts.ctx = (0, _hiccup.derefContext)(opts.ctx, _opts.autoDerefKeys);
      const curr = impl.normalizeTree(_opts, tree);

      if (curr != null) {
        if (_opts.hydrate) {
          impl.hydrateTree(_opts, root, curr);
          _opts.hydrate = false;
        } else {
          impl.diffTree(_opts, root, prev, curr);
        }

        prev = curr;
      } // check again in case one of the components called cancel


      isActive && requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
  return () => isActive = false;
};

exports.start = start;
},{"@thi.ng/hiccup":"node_modules/@thi.ng/hiccup/index.js","./default":"node_modules/@thi.ng/hdom/default.js","./utils":"node_modules/@thi.ng/hdom/utils.js"}],"node_modules/@thi.ng/hdom/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _default = require("./default");

Object.keys(_default).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _default[key];
    }
  });
});

var _diff = require("./diff");

Object.keys(_diff).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _diff[key];
    }
  });
});

var _dom = require("./dom");

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dom[key];
    }
  });
});

var _normalize = require("./normalize");

Object.keys(_normalize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _normalize[key];
    }
  });
});

var _renderOnce = require("./render-once");

Object.keys(_renderOnce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renderOnce[key];
    }
  });
});

var _start = require("./start");

Object.keys(_start).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _start[key];
    }
  });
});

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});
},{"./api":"node_modules/@thi.ng/hdom/api.js","./default":"node_modules/@thi.ng/hdom/default.js","./diff":"node_modules/@thi.ng/hdom/diff.js","./dom":"node_modules/@thi.ng/hdom/dom.js","./normalize":"node_modules/@thi.ng/hdom/normalize.js","./render-once":"node_modules/@thi.ng/hdom/render-once.js","./start":"node_modules/@thi.ng/hdom/start.js","./utils":"node_modules/@thi.ng/hdom/utils.js"}],"uswds_theme.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.theme = exports.styles = exports.zIndices = exports.space = exports.shadows = exports.sizes = exports.radii = exports.lineHeights = exports.baseLineHeights = exports.letterSpacings = exports.inputs = exports.fontWeights = exports.baseFontWeights = exports.fontSizes = exports.fonts = exports.baseFonts = exports.colors = exports.buttons = exports.baseColors = exports.breakpoints = exports.borderWidths = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Based on https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
// and https://tailwindcss.com/components
var borderWidths = {
  "px": "1px",
  "0": "0",
  "2": "2px",
  "4": "4px",
  "8": "8px"
};
exports.borderWidths = borderWidths;
var breakpoints = ["640px", "768px", "1024px", "1280px"];
exports.breakpoints = breakpoints;
var baseColors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  blueCool: ["#e7f2f5", "#dae9ee", "#adcfdc", "#82b4c9", "#6499af", "#3a7d95", "#2e6276", "#224a58", "#14333d", "#0f191c"],
  blueCoolVivid: ["#e1f3f8", "#97d4ea", "#59b9de", "#28a0cb", "#0d7ea2", "#07648d", "#074b69", "#002d3f"],
  blueWarm: ["#ecf1f7", "#e1e7f1", "#bbcae4", "#98afd2", "#7292c7", "#4a77b4", "#345d96", "#2f4668", "#252f3e", "#13171f"],
  blueWarmVivid: ["#b7caf0", "#81aefc", "#5994f6", "#2672de", "#0050d8", "#1a4480", "#162e51"],
  blue: ["#eff6fb", "#d9e8f6", "#aacdec", "#73b3e7", "#4f97d1", "#2378c3", "#2c608a", "#274863", "#1f303e", "#11181d"],
  blueVivid: ["#58b4ff", "#2491ff", "#0076d6", "#005ea2", "#0b4778", "#112f4e"],
  cyan: ["#e7f6f8", "#ccecf2", "#9ddfeb", "#6ecbdb", "#449dac", "#168092", "#2a646d", "#2c4a4e", "#203133", "#111819"],
  cyanVivid: ["#a8f2ff", "#52daf2", "#00bde3", "#009ec1"],
  gold: ["#f5f0e6", "#f1e5cd", "#dec69a", "#c7a97b", "#ad8b65", "#8e704f", "#6b5947", "#4d4438", "#322d26", "#191714"],
  goldVivid: ["#fef0c8", "#ffe396", "#ffbe2e", "#e5a000", "#c2850c", "#936f38"],
  grayCool: ["#fbfcfd", "#f7f9fa", "#f5f6f7", "#f1f3f6", "#edeff0", "#dcdee0", "#c6cace", "#a9aeb1", "#8d9297", "#71767a", "#565c65", "#3d4551", "#2d2e2f", "#1c1d1f"],
  grayWarm: ["#fcfcfb", "#f9f9f7", "#f6f6f2", "#f5f5f0", "#f0f0ec", "#e6e6e2", "#cac9c0", "#afaea2", "#929285", "#76766a", "#5d5d52", "#454540", "#2e2e2a", "#171716"],
  gray: ["#fcfcfc", "#f9f9f9", "#f6f6f6", "#f3f3f3", "#f0f0f0", "#e6e6e6", "#c9c9c9", "#adadad", "#919191", "#757575", "#5c5c5c", "#454545", "#2e2e2e", "#1b1b1b", "#000000"],
  greenCool: ["#ecf3ec", "#dbebde", "#b4d0b9", "#86b98e", "#5e9f69", "#4d8055", "#446443", "#37493b", "#28312a", "#1a1f1a"],
  greenCoolVivid: ["#e3f5e1", "#b7f5bd", "#70e17b", "#21c834", "#00a91c", "#008817"],
  greenWarm: ["#f1f4d7", "#e7eab7", "#cbd17a", "#a6b557", "#8a984b", "#6f7a41", "#5a5f38", "#45472f", "#2d2f21", "#171712"],
  greenWarmVivid: ["#f1f6a5", "#e2f106", "#c5d30a", "#a3b72c", "#7e9c1d", "#6a7d00"],
  green: ["#eaf4dd", "#dfeacd", "#b8d293", "#9bb672", "#7d9b4e", "#607f35", "#4c6424", "#3c4a29", "#293021", "#161814"],
  greenVivid: ["#ddf9c7", "#c3ee90", "#98d035", "#7fb135", "#719f2a", "#538200"],
  indigoCool: ["#eef0f9", "#e1e6f9", "#bbc8f5", "#96abee", "#6b8ee8", "#496fd8", "#3f57a6", "#374274", "#292d42", "#151622"],
  indigoCoolVivid: ["#628ef4", "#4150f2"],
  indigoWarm: ["#f1eff7", "#e7e3fa", "#cbc4f2", "#afa5e8", "#9287d8", "#7665d1", "#5e519e", "#453c7b", "#2e2c40", "#18161d"],
  indigoWarmVivid: ["#b69fff", "#967efb", "#745fe9", "#5942d2"],
  indigo: ["#efeff8", "#e5e4fa", "#c5c5f3", "#a5a8eb", "#8889db", "#676cc8", "#4d52af", "#3d4076", "#2b2c40", "#16171f"],
  indigoVivid: ["#c4c6f2", "#a5a8e8", "#656bd7", "#4d52b0"],
  magenta: ["#f9f0f2", "#f6e1e8", "#f0bbcc", "#e895b3", "#e0699f", "#c84281", "#8b4566", "#66364b", "#402731", "#1b1617"],
  magentaVivid: ["#ffddea", "#ffb4cf", "#ff87b2", "#fd4496", "#d72d79", "#ab2165"],
  mintCool: ["#e0f7f6", "#c4eeeb", "#9bd4cf", "#6fbab3", "#4f9e99", "#21827f", "#376462", "#2a4b45", "#203131", "#111818"],
  mintCoolVivid: ["#d5fbf3", "#7efbe1", "#29e1cb", "#1dc2ae", "#00a398"],
  mint: ["#dbf6ed", "#c7efe2", "#92d9bb", "#5abf95", "#34a37e", "#1f8462", "#286846", "#204e34", "#193324", "#0d1a12"],
  mintVivid: ["#c9fbeb", "#5dfdc8", "#0ceda6", "#04c585", "#146947"],
  orangeWarm: ["#faeee5", "#fbe0d0", "#f7bca2", "#f3966d", "#e17141", "#bd5727", "#914734", "#633a32", "#3d2925", "#1c1615"],
  orangeWarmVivid: ["#fbbaa7", "#fc906d", "#ff580a", "#d24302"],
  orange: ["#f6efe9", "#f2e4d4", "#f3bf90", "#f09860", "#dd7533", "#a86437", "#775540", "#524236", "#332d27", "#1b1614"],
  orangeVivid: ["#fef2e4", "#fce2c5", "#ffbc78", "#fa9441", "#e66f0e", "#c05600"],
  redCool: ["#f8eff1", "#f3e1e4", "#ecbec6", "#e09aa6", "#e16b80", "#cd425b", "#9e394b", "#68363f", "#40282c", "#1e1517"],
  redCoolVivid: ["#f8dfe2", "#f8b9c5", "#fd8ba0", "#f45d79", "#e41d3d", "#b21d38", "#822133"],
  redWarm: ["#f6efea", "#f4e3db", "#ecc0a7", "#dca081", "#d27a56", "#c3512c", "#805039", "#524236", "#332d29", "#1f1c18"],
  redWarmVivid: ["#f6bd9c", "#f39268", "#ee601d", "#d63e04"],
  red: ["#f9eeee", "#f8e1de", "#f7bbb1", "#f2938c", "#e9695f", "#d83933", "#a23737", "#6f3331", "#3e2927", "#1b1616"],
  redVivid: ["#fde0db", "#fdb8ae", "#ff8d7b", "#fb5a47", "#e52207", "#b50909", "#8b0a03", "#5c1111"],
  violetWarm: ["#f8f0f9", "#f6dff8", "#e2bee4", "#d29ad8", "#bf77c8", "#b04abd", "#864381", "#5c395a", "#382936", "#1b151b"],
  violetWarmVivid: ["#fbebfd", "#fbdcff", "#f4b2ff", "#ee83ff", "#d85bef", "#be32d0"],
  violet: ["#f4f1f9", "#ebe3f9", "#d0c3e9", "#b8a2e3", "#9d84d2", "#8168b3", "#665190", "#4c3d69", "#312b3f", "#18161d"],
  violetVivid: ["#ede3ff", "#d5bfff", "#c39deb", "#ad79e9", "#9355dc", "#783cb9", "#562b97"],
  yellow: ["#faf3d1", "#f5e6af", "#e6c74c", "#c9ab48", "#a88f48", "#8a7237", "#6b5a39", "#504332", "#332d27", "#1a1614"],
  yellowVivid: ["#fee685", "#face00"]
};
exports.baseColors = baseColors;
var commonButtonStyles = {
  py: 2,
  px: 3,
  cursor: "pointer",
  fontSize: "100%",
  lineHeight: "inherit",
  whiteSpace: "nowrap"
};
var buttons = {
  "simple": _objectSpread({}, commonButtonStyles, {
    "backgroundColor": "primary",
    "border": "none",
    "color": "white",
    "fontWeight": "bold",
    "borderRadius": "default",
    "&:hover": {
      backgroundColor: "primaryHover",
      textDecoration: "none"
    }
  }),
  "pill": _objectSpread({}, commonButtonStyles, {
    "backgroundColor": "primary",
    "border": "none",
    "color": "white",
    "fontWeight": "bold",
    "borderRadius": "full",
    "&:hover": {
      backgroundColor: "primaryHover"
    }
  }),
  "outline": _objectSpread({}, commonButtonStyles, {
    "backgroundColor": "transparent",
    "borderWidth": "1px",
    "borderStyle": "solid",
    "borderColor": "primary",
    "color": "primary",
    "fontWeight": "semibold",
    "borderRadius": "default",
    "&:hover": {
      backgroundColor: "primary",
      color: "white",
      borderColor: "transparent"
    }
  }),
  "bordered": _objectSpread({}, commonButtonStyles, {
    "backgroundColor": "primary",
    "borderWidth": "1px",
    "borderStyle": "solid",
    "borderColor": "primaryHover",
    "color": "white",
    "fontWeight": "bold",
    "borderRadius": "default",
    "&:hover": {
      backgroundColor: "primaryHover"
    }
  }),
  "disabled": _objectSpread({}, commonButtonStyles, {
    backgroundColor: "primary",
    border: "none",
    opacity: 0.5,
    cursor: "not-allowed",
    color: "white",
    fontWeight: "bold",
    borderRadius: "default"
  }),
  "3D": _objectSpread({}, commonButtonStyles, {
    "backgroundColor": "primary",
    "border": "none",
    "borderBottomWidth": "4px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "primaryHover",
    "color": "white",
    "fontWeight": "bold",
    "borderRadius": "default",
    "transition": "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-1px)"
    }
  }),
  "elevated": _objectSpread({}, commonButtonStyles, {
    "backgroundColor": "white",
    "borderWidth": "1px",
    "borderStyle": "solid",
    "borderColor": "gray.4",
    "color": "text",
    "fontWeight": "bold",
    "borderRadius": "default",
    "boxShadow": "default",
    "&:hover": {
      backgroundColor: "gray.1"
    }
  })
};
exports.buttons = buttons;

var colors = _objectSpread({}, baseColors, {
  grayDark: baseColors.gray[8],
  text: baseColors.gray[8],
  background: baseColors.white,
  primary: baseColors.blue[7],
  primaryHover: baseColors.blue[8],
  secondary: baseColors.gray[6],
  muted: baseColors.gray[3],
  success: baseColors.green[3],
  info: baseColors.blue[4],
  warning: baseColors.yellow[3],
  danger: baseColors.red[3],
  light: baseColors.gray[1],
  dark: baseColors.gray[8],
  textMuted: baseColors.gray[6]
});

exports.colors = colors;
var baseFonts = {
  sans: '"Open Sans", system-ui',
  serif: "Merriweather, system-ui",
  mono: '"Fira Code",monospace'
};
exports.baseFonts = baseFonts;

var fonts = _objectSpread({}, baseFonts, {
  body: baseFonts.sans,
  heading: baseFonts.serif,
  monospace: baseFonts.mono
});

exports.fonts = fonts;
var fontSizes = ["0.875rem", "1rem", "1.25rem", "1.5rem", "1.875rem", "2.25rem", "3rem", "4rem", "4.5rem"];
exports.fontSizes = fontSizes;
var baseFontWeights = {
  hairline: "100",
  thin: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900"
};
exports.baseFontWeights = baseFontWeights;

var fontWeights = _objectSpread({}, baseFontWeights, {
  body: baseFontWeights.normal,
  heading: baseFontWeights.bold
});

exports.fontWeights = fontWeights;
var commonInputStyles = {
  py: 2,
  px: 3,
  fontSize: "100%",
  borderRadius: "default",
  appearance: "none",
  lineHeight: "tight"
};
var inputs = {
  shadow: _objectSpread({}, commonInputStyles, {
    "border": "none",
    "color": "gray.7",
    "boxShadow": "default",
    "&:focus": {
      outline: "none",
      boxShadow: "outline"
    }
  }),
  inline: _objectSpread({}, commonInputStyles, {
    "backgroundColor": "gray.2",
    "borderWidth": "2px",
    "borderStyle": "solid",
    "borderColor": "gray.2",
    "color": "gray.7",
    "&:focus": {
      outline: "none",
      borderColor: "primary",
      backgroundColor: "white"
    }
  }),
  underline: _objectSpread({}, commonInputStyles, {
    "backgroundColor": "transparent",
    "border": "none",
    "borderBottomWidth": "2px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "primary",
    "borderRadius": "0px",
    "color": "gray.7",
    "&:focus": {
      outline: "none",
      borderColor: "primary",
      backgroundColor: "white"
    }
  })
};
exports.inputs = inputs;
var letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
};
exports.letterSpacings = letterSpacings;
var baseLineHeights = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2"
};
exports.baseLineHeights = baseLineHeights;

var lineHeights = _objectSpread({}, baseLineHeights, {
  body: baseLineHeights.relaxed,
  heading: baseLineHeights.tight
});

exports.lineHeights = lineHeights;
var radii = {
  none: "0",
  sm: "0.125rem",
  default: "0.25rem",
  lg: "0.5rem",
  full: "9999px"
};
exports.radii = radii;
var sizes = {
  "px": "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
  "xs": "20rem",
  "sm": "24rem",
  "md": "28rem",
  "lg": "32rem",
  "xl": "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "1/2": "50%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
  "full": "100%",
  "screenHeight": "100vh",
  "screenWidth": "100vw"
};
exports.sizes = sizes;
var shadows = {
  "default": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  "inner": "inset 0 2px 0px 2px rgba(0, 0, 0, 0.03)",
  "outline": "0 0 0 3px rgba(66, 153, 225, 0.5)",
  "none": "none"
};
exports.shadows = shadows;
var space = [0, "0.25rem", "0.5rem", "1rem", "2rem", "4rem", "8rem", "16rem", "32rem"];
exports.space = space;
var zIndices = {
  "auto": "auto",
  "0": "0",
  "10": "10",
  "20": "20",
  "30": "30",
  "40": "40",
  "50": "50"
};
exports.zIndices = zIndices;
var heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
  mt: 4
};
var styles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body"
  },
  p: {
    lineHeight: [1.75, 2],
    fontSize: [2, 3],
    mt: [3, 4]
  },
  a: {
    "color": "primary",
    "textDecoration": "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  strong: {
    fontWeight: "bold"
  },
  ul: {
    listStylePostition: "outside",
    mt: 3,
    mx: 4
  },
  li: {
    listStyleType: "disc",
    lineHeight: 1.75,
    fontSize: [2, 3],
    mt: 3
  },
  h1: _objectSpread({}, heading, {
    fontSize: [6, 7],
    mt: 6
  }),
  h2: _objectSpread({}, heading, {
    fontSize: [5, 6],
    pt: 5
  }),
  h3: _objectSpread({}, heading, {
    fontSize: [4, 5],
    pt: 4
  }),
  h4: _objectSpread({}, heading, {
    fontSize: [3, 4],
    pt: 4
  }),
  h5: _objectSpread({}, heading, {
    fontSize: [2, 3]
  }),
  h6: _objectSpread({}, heading, {
    fontSize: [1, 2]
  }),
  pre: {
    lineHeight: 1.75,
    my: 4,
    mx: -2
  },
  code: {
    boxShadow: "inner",
    background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAJ0lEQVQIW2O8e/fufwYGBgZBQUEQxcCIIfDu3Tuwivfv30NUoAsAALHpFMMLqZlPAAAAAElFTkSuQmCC) repeat",
    color: "dark",
    fontSize: [0, 1],
    fontFamily: "mono",
    borderRadius: "default",
    p: 1
  },
  hr: {
    background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAJ0lEQVQIW2O8e/fufwYGBgZBQUEQxcCIIfDu3Tuwivfv30NUoAsAALHpFMMLqZlPAAAAAElFTkSuQmCC) repeat",
    height: 1,
    width: "100vw",
    position: "relative",
    marginLeft: "-50vw",
    mt: 6,
    left: "50%"
  },
  blockquote: {
    background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAPUlEQVQYV2NkQAN37979r6yszIgujiIAU4RNMVwhuiQ6H6wQl3XI4oy4FMHcCJPHcDS6J2A2EqUQpJhohQDexSef15DBCwAAAABJRU5ErkJggg==) repeat",
    fontFamily: "mono",
    fontStyle: "italic",
    fontSize: [3, 4],
    lineHeight: 1.5,
    mx: -4,
    my: 4,
    p: 5
  },
  table: {
    borderRadius: "default",
    overflow: "hidden",
    fontSize: [1, 2],
    width: "100%",
    mt: 4
  },
  tr: {
    "backgroundColor": "muted",
    "&:first-child": {
      fontWeight: "bold",
      backgroundColor: "dark",
      color: "muted"
    },
    "lineHeight": [1.75, 2],
    "&:nth-child(2n)": {
      backgroundColor: "background"
    }
  },
  td: {
    p: 2
  },
  img: {
    display: "block",
    my: [2, 3],
    width: "100%",
    maxHeight: "500px",
    objectFit: "cover",
    borderRadius: "default"
  }
};
exports.styles = styles;
var theme = {
  borderWidths: borderWidths,
  breakpoints: breakpoints,
  colors: colors,
  fonts: fonts,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  letterSpacings: letterSpacings,
  lineHeights: lineHeights,
  sizes: sizes,
  shadows: shadows,
  space: space,
  radii: radii,
  zIndices: zIndices,
  styles: styles,
  buttons: buttons,
  inputs: inputs
};
exports.theme = theme;
var _default = theme;
exports.default = _default;
},{}],"../node_modules/@thi.ng/random/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ARandom = void 0;
const INV_MAX = 1 / 0xffffffff;

class ARandom {
  float(norm = 1) {
    return this.int() * INV_MAX * norm;
  }

  norm(norm = 1) {
    return this.int() * INV_MAX * norm * 2 - norm;
  }

  minmax(min, max) {
    return this.float() * (max - min) + min;
  }
  /**
   * Returns approx. normal distribution using CLT.
   *
   * https://en.wikipedia.org/wiki/Central_limit_theorem
   *
   * @param n
   * @param offset
   * @param scale
   */


  gaussian(n = 10, offset = -0.5, scale = 1) {
    let sum = 0;
    let m = n;

    while (m-- > 0) sum += this.float(scale);

    return sum / n + offset;
  }

}

exports.ARandom = ARandom;
},{}],"../node_modules/@thi.ng/random/smush32.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Smush32 = void 0;

var _api = require("./api");

// https://github.com/thi-ng/ct-head/blob/master/random.h
// https://gist.github.com/voidqk/d112165a26b45244a65298933c0349a4
const DEFAULT_SEED = 0xdecafbad;

class Smush32 extends _api.ARandom {
  constructor(seed = DEFAULT_SEED) {
    super();
    this.buffer = new Uint32Array([seed, 0]);
  }

  copy() {
    const gen = new Smush32();
    gen.buffer.set(this.buffer);
    return gen;
  }

  seed(s) {
    this.buffer.set([s, 0]);
    return this;
  }

  int() {
    const b = this.buffer;
    const m = 0x5bd1e995;
    const k = b[1]++ * m >>> 0;
    const s = b[0] = (k ^ k >> 24 ^ b[0] * m >>> 0) * m >>> 0;
    return (s ^ s >>> 13) >>> 0;
  }

}

exports.Smush32 = Smush32;
},{"./api":"../node_modules/@thi.ng/random/api.js"}],"../node_modules/@thi.ng/random/system.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SYSTEM = exports.SystemRandom = void 0;

var _api = require("./api");

const random = Math.random;

class SystemRandom extends _api.ARandom {
  int() {
    return random() * 0xffffffff >>> 0;
  }

  float(norm = 1) {
    return random() * norm;
  }

}

exports.SystemRandom = SystemRandom;
const SYSTEM = new SystemRandom();
exports.SYSTEM = SYSTEM;
},{"./api":"../node_modules/@thi.ng/random/api.js"}],"../node_modules/@thi.ng/random/xorshift128.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XorShift128 = void 0;

var _api = require("./api");

// https://en.wikipedia.org/wiki/Xorshift
const DEFAULT_SEED = [0xdecafbad, 0x2fa9d75b, 0xe41f67e3, 0x5c83ec1a];

class XorShift128 extends _api.ARandom {
  constructor(seed = DEFAULT_SEED) {
    super();
    this.buffer = new Uint32Array(4);
    this.seed(seed);
  }

  copy() {
    return new XorShift128(this.buffer);
  }

  bytes() {
    return new Uint8Array(this.buffer.buffer);
  }

  seed(seed) {
    this.buffer.set(seed);
    return this;
  }

  int() {
    const s = this.buffer;
    let t = s[3];
    let w;
    t ^= t << 11;
    t ^= t >>> 8;
    s[3] = s[2];
    s[2] = s[1];
    w = s[1] = s[0];
    return s[0] = (t ^ w ^ w >>> 19) >>> 0;
  }

}

exports.XorShift128 = XorShift128;
},{"./api":"../node_modules/@thi.ng/random/api.js"}],"../node_modules/@thi.ng/random/xorwow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XorWow = void 0;

var _api = require("./api");

// https://en.wikipedia.org/wiki/Xorshift#xorwow
const DEFAULT_SEED = [0xdecafbad, 0x2fa9d75b, 0xe41f67e3, 0x5c83ec1a, 0xf69a5c71];

class XorWow extends _api.ARandom {
  constructor(seed = DEFAULT_SEED) {
    super();
    this.buffer = new Uint32Array(5);
    this.seed(seed);
  }

  copy() {
    return new XorWow(this.buffer);
  }

  seed(seed) {
    this.buffer.set(seed);
    return this;
  }

  bytes() {
    return new Uint8Array(this.buffer.buffer);
  }

  int() {
    const s = this.buffer;
    let t = s[3];
    let w;
    t ^= t >>> 2;
    t ^= t << 1;
    s[3] = s[2];
    s[2] = s[1];
    w = s[1] = s[0];
    t ^= w;
    t ^= w << 4;
    s[0] = t;
    return t + (s[4] += 0x587c5) >>> 0;
  }

}

exports.XorWow = XorWow;
},{"./api":"../node_modules/@thi.ng/random/api.js"}],"../node_modules/@thi.ng/random/xsadd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XsAdd = void 0;

var _api = require("./api");

// https://github.com/MersenneTwister-Lab/XSadd/blob/master/xsadd.h
const DEFAULT_SEED = 0xdecafbad;

class XsAdd extends _api.ARandom {
  constructor(seed = DEFAULT_SEED) {
    super();
    this.buffer = new Uint32Array(4);
    this.seed(seed);
  }

  bytes() {
    return new Uint8Array(this.buffer.buffer);
  }

  copy() {
    const gen = new XsAdd();
    gen.buffer.set(this.buffer);
    return gen;
  }

  seed(seed) {
    const s = this.buffer;
    s.set([seed, 0, 0, 0]);

    for (let j = 0, i = 1; i < 8; j = i++) {
      let x = (s[j & 3] ^ s[j & 3] >>> 30) >>> 0;
      x = 0x8965 * x + ((0x6c07 * x & 0xffff) << 16) >>> 0;
      s[i & 3] ^= i + x >>> 0;
    }

    return this;
  }

  int() {
    const s = this.buffer;
    let t = s[0];
    t ^= t << 15;
    t ^= t >>> 18;
    t ^= s[3] << 11;
    s[0] = s[1];
    s[1] = s[2];
    s[2] = s[3];
    s[3] = t;
    return t + s[2] >>> 0;
  }

}

exports.XsAdd = XsAdd;
},{"./api":"../node_modules/@thi.ng/random/api.js"}],"../node_modules/@thi.ng/random/random-id.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomID = void 0;

var _system = require("./system");

/**
 * Generates and returns a random string of `len` characters (default
 * 4), plus optional given `prefix` and using only provided `syms`
 * characters (default lowercase a-z).
 *
 * ```
 * randomID()
 * "qgdt"
 *
 * randomID(8, "id-", "0123456789ABCDEF")
 * "id-94EF6E1A"
 * ```
 *
 * @param len
 * @param prefix
 * @param syms
 * @param rnd
 */
const randomID = (len = 4, prefix = "", syms = "abcdefghijklmnopqrstuvwxyz", rnd = _system.SYSTEM) => {
  for (const n = syms.length; --len >= 0;) {
    prefix += syms[rnd.float(n) | 0];
  }

  return prefix;
};

exports.randomID = randomID;
},{"./system":"../node_modules/@thi.ng/random/system.js"}],"../node_modules/@thi.ng/api/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEMAPHORE = exports.DEFAULT_EPS = void 0;
const DEFAULT_EPS = 1e-6;
/**
 * Internal use only. **Do NOT use in user land code!**
 */

exports.DEFAULT_EPS = DEFAULT_EPS;
const SEMAPHORE = Symbol();
exports.SEMAPHORE = SEMAPHORE;
},{}],"../node_modules/@thi.ng/api/api/event.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EVENT_DISABLE = exports.EVENT_ENABLE = exports.EVENT_ALL = void 0;
const EVENT_ALL = "*";
exports.EVENT_ALL = EVENT_ALL;
const EVENT_ENABLE = "enable";
exports.EVENT_ENABLE = EVENT_ENABLE;
const EVENT_DISABLE = "disable";
exports.EVENT_DISABLE = EVENT_DISABLE;
},{}],"../node_modules/@thi.ng/api/api/fn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NO_OP = void 0;

/**
 * No-effect placeholder function.
 */
const NO_OP = () => {};

exports.NO_OP = NO_OP;
},{}],"../node_modules/@thi.ng/api/api/logger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogLevel = void 0;
var LogLevel;
exports.LogLevel = LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["FINE"] = 0] = "FINE";
  LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["SEVERE"] = 4] = "SEVERE";
  LogLevel[LogLevel["NONE"] = 5] = "NONE";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
},{}],"../node_modules/@thi.ng/api/api/typedarray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typedArray = typedArray;
exports.intType = exports.uintType = exports.TYPEDARRAY_CTORS = exports.SIZEOF = exports.TYPE2GL = exports.GL2TYPE = exports.GLType = exports.Type = void 0;

/**
 * Type enums for Typedarray-backed buffers.
 *
 * @see GLType
 * @see GL2TYPE
 * @see TYPE2GL
 */
var Type;
exports.Type = Type;

(function (Type) {
  Type[Type["U8"] = 0] = "U8";
  Type[Type["U8C"] = 1] = "U8C";
  Type[Type["I8"] = 2] = "I8";
  Type[Type["U16"] = 3] = "U16";
  Type[Type["I16"] = 4] = "I16";
  Type[Type["U32"] = 5] = "U32";
  Type[Type["I32"] = 6] = "I32";
  Type[Type["F32"] = 7] = "F32";
  Type[Type["F64"] = 8] = "F64";
})(Type || (exports.Type = Type = {}));
/**
 * WebGL numeric type constants. Use `GL2TYPE` to convert, if needed.
 *
 * @see Type
 * @see GL2TYPE
 * @see TYPE2GL
 */


var GLType;
exports.GLType = GLType;

(function (GLType) {
  GLType[GLType["I8"] = 5120] = "I8";
  GLType[GLType["U8"] = 5121] = "U8";
  GLType[GLType["I16"] = 5122] = "I16";
  GLType[GLType["U16"] = 5123] = "U16";
  GLType[GLType["I32"] = 5124] = "I32";
  GLType[GLType["U32"] = 5125] = "U32";
  GLType[GLType["F32"] = 5126] = "F32";
})(GLType || (exports.GLType = GLType = {}));
/**
 * Conversion from `GLType` to `Type` enums.
 */


const GL2TYPE = {
  [5120
  /* I8 */
  ]: 2
  /* I8 */
  ,
  [5121
  /* U8 */
  ]: 0
  /* U8 */
  ,
  [5122
  /* I16 */
  ]: 4
  /* I16 */
  ,
  [5123
  /* U16 */
  ]: 3
  /* U16 */
  ,
  [5124
  /* I32 */
  ]: 6
  /* I32 */
  ,
  [5125
  /* U32 */
  ]: 5
  /* U32 */
  ,
  [5126
  /* F32 */
  ]: 7
  /* F32 */

};
/**
 * Potentially lossy conversion from `Type` to `GLType` enums.
 *
 * Not all enums are mappable:
 *
 * - `F64` maps to `undefined`, since unsupported by WebGL
 * - `U8C` maps to U8
 */

exports.GL2TYPE = GL2TYPE;
const TYPE2GL = {
  [2
  /* I8 */
  ]: 5120
  /* I8 */
  ,
  [0
  /* U8 */
  ]: 5121
  /* U8 */
  ,
  [1
  /* U8C */
  ]: 5121
  /* U8 */
  ,
  [4
  /* I16 */
  ]: 5122
  /* I16 */
  ,
  [3
  /* U16 */
  ]: 5123
  /* U16 */
  ,
  [6
  /* I32 */
  ]: 5124
  /* I32 */
  ,
  [6
  /* I32 */
  ]: 5124
  /* I32 */
  ,
  [5
  /* U32 */
  ]: 5125
  /* U32 */
  ,
  [7
  /* F32 */
  ]: 5126
  /* F32 */
  ,
  [8
  /* F64 */
  ]: undefined
};
/**
 * Size information (in bytes) for `Type` enums. For `GLType`, use this
 * form, e.g. `SIZEOF[GL2TYPE[GLType.F32]]`
 */

exports.TYPE2GL = TYPE2GL;
const SIZEOF = {
  [0
  /* U8 */
  ]: 1,
  [1
  /* U8C */
  ]: 1,
  [2
  /* I8 */
  ]: 1,
  [3
  /* U16 */
  ]: 2,
  [4
  /* I16 */
  ]: 2,
  [5
  /* U32 */
  ]: 4,
  [6
  /* I32 */
  ]: 4,
  [7
  /* F32 */
  ]: 4,
  [8
  /* F64 */
  ]: 8
};
exports.SIZEOF = SIZEOF;
const TYPEDARRAY_CTORS = {
  [0
  /* U8 */
  ]: Uint8Array,
  [1
  /* U8C */
  ]: Uint8ClampedArray,
  [2
  /* I8 */
  ]: Int8Array,
  [3
  /* U16 */
  ]: Uint16Array,
  [4
  /* I16 */
  ]: Int16Array,
  [5
  /* U32 */
  ]: Uint32Array,
  [6
  /* I32 */
  ]: Int32Array,
  [7
  /* F32 */
  ]: Float32Array,
  [8
  /* F64 */
  ]: Float64Array,
  [5121
  /* U8 */
  ]: Uint8Array,
  [5120
  /* I8 */
  ]: Int8Array,
  [5123
  /* U16 */
  ]: Uint16Array,
  [5122
  /* I16 */
  ]: Int16Array,
  [5125
  /* U32 */
  ]: Uint32Array,
  [5124
  /* I32 */
  ]: Int32Array,
  [5126
  /* F32 */
  ]: Float32Array
};
exports.TYPEDARRAY_CTORS = TYPEDARRAY_CTORS;

function typedArray(type, ...xs) {
  return new TYPEDARRAY_CTORS[type](...xs);
}
/**
 * Returns the smallest possible *unsigned* int type enum for given `x`.
 * E.g. if `x <= 256`, the function returns `Type.U8`.
 *
 * @param x
 */


const uintType = x => x <= 0x100 ? 0
/* U8 */
: x <= 0x10000 ? 3
/* U16 */
: 5
/* U32 */
;
/**
 * Returns the smallest possible *signed* int type enum for given `x`.
 * E.g. if `x >= -128 && x < 128`, the function returns `Type.I8`.
 *
 * @param x
 */


exports.uintType = uintType;

const intType = x => x >= -0x80 && x < 0x80 ? 2
/* I8 */
: x >= -0x8000 && x < 0x8000 ? 4
/* I16 */
: 6
/* I32 */
;

exports.intType = intType;
},{}],"../node_modules/@thi.ng/api/assert.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assert = void 0;

var _fn = require("./api/fn");

/**
 * Takes a `test` result or predicate function without args and throws
 * error with given `msg` if test failed (i.e. is falsy). The function
 * is only enabled if `NODE_ENV != "production"` or if
 * `UMBRELLA_ASSERTS = 1`.
 */
const assert = typeof process === "undefined" || "development" !== "production" || undefined === "1" ? (test, msg = "assertion failed") => {
  if (typeof test === "function" && !test() || !test) {
    throw new Error(typeof msg === "function" ? msg() : msg);
  }
} : _fn.NO_OP;
exports.assert = assert;
},{"./api/fn":"../node_modules/@thi.ng/api/api/fn.js","process":"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel/src/builtins/_empty.js"}],"../node_modules/@thi.ng/api/logger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsoleLogger = exports.NULL_LOGGER = void 0;

var _logger = require("./api/logger");

const NULL_LOGGER = Object.freeze({
  level: _logger.LogLevel.NONE,

  fine() {},

  debug() {},

  info() {},

  warn() {},

  severe() {}

});
exports.NULL_LOGGER = NULL_LOGGER;

class ConsoleLogger {
  constructor(id, level = _logger.LogLevel.FINE) {
    this.id = id;
    this.level = level;
  }

  fine(...args) {
    this.level <= _logger.LogLevel.FINE && this.log("FINE", args);
  }

  debug(...args) {
    this.level <= _logger.LogLevel.DEBUG && this.log("DEBUG", args);
  }

  info(...args) {
    this.level <= _logger.LogLevel.INFO && this.log("INFO", args);
  }

  warn(...args) {
    this.level <= _logger.LogLevel.WARN && this.log("WARN", args);
  }

  severe(...args) {
    this.level <= _logger.LogLevel.SEVERE && this.log("SEVERE", args);
  }

  log(level, args) {
    console.log(`[${level}] ${this.id}:`, ...args);
  }

}

exports.ConsoleLogger = ConsoleLogger;
},{"./api/logger":"../node_modules/@thi.ng/api/api/logger.js"}],"../node_modules/@thi.ng/api/mixin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = void 0;

/**
 * Class behavior mixin based on:
 * http://raganwald.com/2015/06/26/decorators-in-es7.html
 *
 * Additionally only injects/overwrites properties in target, which are
 * NOT marked with `@nomixin` (i.e. haven't set their `configurable`
 * property descriptor flag to `false`)
 *
 * @param behaviour to mixin
 * @param sharedBehaviour
 * @returns decorator function
 */
const mixin = (behaviour, sharedBehaviour = {}) => {
  const instanceKeys = Reflect.ownKeys(behaviour);
  const sharedKeys = Reflect.ownKeys(sharedBehaviour);
  const typeTag = Symbol("isa");

  function _mixin(clazz) {
    for (let key of instanceKeys) {
      const existing = Object.getOwnPropertyDescriptor(clazz.prototype, key);

      if (!existing || existing.configurable) {
        Object.defineProperty(clazz.prototype, key, {
          value: behaviour[key],
          writable: true
        });
      } else {
        console.log(`not patching: ${clazz.name}.${key.toString()}`);
      }
    }

    Object.defineProperty(clazz.prototype, typeTag, {
      value: true
    });
    return clazz;
  }

  for (let key of sharedKeys) {
    Object.defineProperty(_mixin, key, {
      value: sharedBehaviour[key],
      enumerable: sharedBehaviour.propertyIsEnumerable(key)
    });
  }

  Object.defineProperty(_mixin, Symbol.hasInstance, {
    value: x => !!x[typeTag]
  });
  return _mixin;
};

exports.mixin = mixin;
},{}],"../node_modules/@thi.ng/api/decorators/configurable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configurable = void 0;

/**
 * Property decorator factory. Sets `configurable` flag of PropertyDescriptor
 * to given state.
 *
 * @param state
 */
const configurable = state => function (_, __, descriptor) {
  descriptor.configurable = state;
};

exports.configurable = configurable;
},{}],"../node_modules/@thi.ng/api/decorators/deprecated.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecated = void 0;

var _assert = require("../assert");

/**
 * Method property decorator factory. Augments original method with
 * deprecation message (via console), shown when method is invoked.
 * Accepts optional message arg. Throws error if assigned property
 * is not a function.
 *
 * @param msg deprecation message
 */
const deprecated = (msg, log = console.log) => function (target, prop, descriptor) {
  const signature = `${target.constructor.name}#${prop.toString()}`;
  const fn = descriptor.value;
  (0, _assert.assert)(typeof fn === "function", `${signature} is not a function`);

  descriptor.value = function () {
    log(`DEPRECATED ${signature}: ${msg || "will be removed soon"}`);
    return fn.apply(this, arguments);
  };

  return descriptor;
};

exports.deprecated = deprecated;
},{"../assert":"../node_modules/@thi.ng/api/assert.js"}],"../node_modules/@thi.ng/api/decorators/nomixin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nomixin = void 0;

/**
 * Method property decorator. Sets `configurable` flag of
 * PropertyDescriptor to `false` (same as `@configurable(false)`).
 * Intended to be used in combination with mixin decorators to enable
 * partial implementations of mixed-in behaviors in target class and
 * avoid them being overidden by mixed-in behaviour.
 */
const nomixin = (_, __, descriptor) => {
  descriptor.configurable = false;
};

exports.nomixin = nomixin;
},{}],"../node_modules/@thi.ng/api/decorators/sealed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sealed = void 0;

/**
 * Class decorator. Seals both constructor and prototype.
 *
 * @param constructor
 */
const sealed = constructor => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

exports.sealed = sealed;
},{}],"../node_modules/@thi.ng/api/mixins/ienable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IEnableMixin = void 0;

var _event = require("../api/event");

var _mixin = require("../mixin");

/**
 * Mixin class decorator, injects IEnable default implementation, incl.
 * a `_enabled` property. If the target also implements the `INotify`
 * interface, `enable()` and `disable()` will automatically emit the
 * respective events.
 */
const IEnableMixin = (0, _mixin.mixin)({
  _enabled: true,

  isEnabled() {
    return this._enabled;
  },

  enable() {
    this._enabled = true;

    if (this.notify) {
      this.notify({
        id: _event.EVENT_ENABLE,
        target: this
      });
    }
  },

  disable() {
    this._enabled = false;

    if (this.notify) {
      this.notify({
        id: _event.EVENT_DISABLE,
        target: this
      });
    }
  },

  toggle() {
    this._enabled ? this.disable() : this.enable();
    return this._enabled;
  }

});
exports.IEnableMixin = IEnableMixin;
},{"../api/event":"../node_modules/@thi.ng/api/api/event.js","../mixin":"../node_modules/@thi.ng/api/mixin.js"}],"../node_modules/@thi.ng/api/mixins/inotify.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INotifyMixin = exports.inotify_dispatch = void 0;

var _event = require("../api/event");

var _mixin = require("../mixin");

const inotify_dispatch = (listeners, e) => {
  if (!listeners) return;

  for (let i = 0, n = listeners.length, l; i < n; i++) {
    l = listeners[i];
    l[0].call(l[1], e);

    if (e.canceled) {
      return;
    }
  }
};
/**
 * Mixin class decorator, injects INotify default implementation, incl.
 * a lazily instantiated `_listeners` property object, storing
 * registered listeners.
 */


exports.inotify_dispatch = inotify_dispatch;
const INotifyMixin = (0, _mixin.mixin)({
  addListener(id, fn, scope) {
    let l = (this._listeners = this._listeners || {})[id];
    !l && (l = this._listeners[id] = []);

    if (this.__listener(l, fn, scope) === -1) {
      l.push([fn, scope]);
      return true;
    }

    return false;
  },

  removeListener(id, fn, scope) {
    let listeners;
    if (!(listeners = this._listeners)) return false;
    const l = listeners[id];

    if (l) {
      const idx = this.__listener(l, fn, scope);

      if (idx !== -1) {
        l.splice(idx, 1);
        !l.length && delete listeners[id];
        return true;
      }
    }

    return false;
  },

  notify(e) {
    let listeners;
    if (!(listeners = this._listeners)) return false;
    e.target === undefined && (e.target = this);
    inotify_dispatch(listeners[e.id], e);
    inotify_dispatch(listeners[_event.EVENT_ALL], e);
  },

  __listener(listeners, f, scope) {
    let i = listeners.length;

    while (--i >= 0) {
      const l = listeners[i];

      if (l[0] === f && l[1] === scope) {
        break;
      }
    }

    return i;
  }

});
exports.INotifyMixin = INotifyMixin;
},{"../api/event":"../node_modules/@thi.ng/api/api/event.js","../mixin":"../node_modules/@thi.ng/api/mixin.js"}],"../node_modules/@thi.ng/api/mixins/iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterable = void 0;

var _mixin = require("../mixin");

const iterable = prop => (0, _mixin.mixin)({
  *[Symbol.iterator]() {
    yield* this[prop];
  }

});

exports.iterable = iterable;
},{"../mixin":"../node_modules/@thi.ng/api/mixin.js"}],"../node_modules/@thi.ng/api/mixins/iwatch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IWatchMixin = void 0;

var _mixin = require("../mixin");

const IWatchMixin = (0, _mixin.mixin)({
  addWatch(id, fn) {
    this._watches = this._watches || {};

    if (this._watches[id]) {
      return false;
    }

    this._watches[id] = fn;
    return true;
  },

  removeWatch(id) {
    if (!this._watches) return;

    if (this._watches[id]) {
      delete this._watches[id];
      return true;
    }

    return false;
  },

  notifyWatches(oldState, newState) {
    if (!this._watches) return;
    const w = this._watches;

    for (let id in w) {
      w[id](id, oldState, newState);
    }
  }

});
exports.IWatchMixin = IWatchMixin;
},{"../mixin":"../node_modules/@thi.ng/api/mixin.js"}],"../node_modules/@thi.ng/api/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _event = require("./api/event");

Object.keys(_event).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _event[key];
    }
  });
});

var _fn = require("./api/fn");

Object.keys(_fn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fn[key];
    }
  });
});

var _logger = require("./api/logger");

Object.keys(_logger).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logger[key];
    }
  });
});

var _typedarray = require("./api/typedarray");

Object.keys(_typedarray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _typedarray[key];
    }
  });
});

var _assert = require("./assert");

Object.keys(_assert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _assert[key];
    }
  });
});

var _logger2 = require("./logger");

Object.keys(_logger2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logger2[key];
    }
  });
});

var _mixin = require("./mixin");

Object.keys(_mixin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mixin[key];
    }
  });
});

var _configurable = require("./decorators/configurable");

Object.keys(_configurable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _configurable[key];
    }
  });
});

var _deprecated = require("./decorators/deprecated");

Object.keys(_deprecated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deprecated[key];
    }
  });
});

var _nomixin = require("./decorators/nomixin");

Object.keys(_nomixin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nomixin[key];
    }
  });
});

var _sealed = require("./decorators/sealed");

Object.keys(_sealed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sealed[key];
    }
  });
});

var _ienable = require("./mixins/ienable");

Object.keys(_ienable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ienable[key];
    }
  });
});

var _inotify = require("./mixins/inotify");

Object.keys(_inotify).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _inotify[key];
    }
  });
});

var _iterable = require("./mixins/iterable");

Object.keys(_iterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iterable[key];
    }
  });
});

var _iwatch = require("./mixins/iwatch");

Object.keys(_iwatch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iwatch[key];
    }
  });
});
},{"./api":"../node_modules/@thi.ng/api/api.js","./api/event":"../node_modules/@thi.ng/api/api/event.js","./api/fn":"../node_modules/@thi.ng/api/api/fn.js","./api/logger":"../node_modules/@thi.ng/api/api/logger.js","./api/typedarray":"../node_modules/@thi.ng/api/api/typedarray.js","./assert":"../node_modules/@thi.ng/api/assert.js","./logger":"../node_modules/@thi.ng/api/logger.js","./mixin":"../node_modules/@thi.ng/api/mixin.js","./decorators/configurable":"../node_modules/@thi.ng/api/decorators/configurable.js","./decorators/deprecated":"../node_modules/@thi.ng/api/decorators/deprecated.js","./decorators/nomixin":"../node_modules/@thi.ng/api/decorators/nomixin.js","./decorators/sealed":"../node_modules/@thi.ng/api/decorators/sealed.js","./mixins/ienable":"../node_modules/@thi.ng/api/mixins/ienable.js","./mixins/inotify":"../node_modules/@thi.ng/api/mixins/inotify.js","./mixins/iterable":"../node_modules/@thi.ng/api/mixins/iterable.js","./mixins/iwatch":"../node_modules/@thi.ng/api/mixins/iwatch.js"}],"../node_modules/@thi.ng/random/weighted-random.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weightedRandom = void 0;

var _api = require("@thi.ng/api");

var _system = require("./system");

/**
 * Returns a no-arg function which produces a random choice of given
 * weighted `choices` and using given `IRandom` instance (default:
 * `SYSTEM`). If `weights` are given, it must be the same size as
 * `choices`. If omitted, each choice will have same probability.
 *
 * https://www.electricmonk.nl/log/2009/12/23/weighted-random-distribution/
 *
 * @param choices
 * @param weights
 */
const weightedRandom = (choices, weights, rnd = _system.SYSTEM) => {
  const n = choices.length;
  (0, _api.assert)(n > 0, "no choices given");
  const opts = choices.map(weights ? (x, i) => [x, weights[i]] : x => [x, 1]).sort((a, b) => b[1] - a[1]);
  const total = opts.reduce((acc, o) => acc + o[1], 0);
  (0, _api.assert)(total > 0, "no choices given");
  return () => {
    const r = rnd.float(total);
    let sum = total;

    for (let i = 0; i < n; i++) {
      sum -= opts[i][1];

      if (sum <= r) {
        return opts[i][0];
      }
    }

    return undefined;
  };
};

exports.weightedRandom = weightedRandom;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","./system":"../node_modules/@thi.ng/random/system.js"}],"../node_modules/@thi.ng/random/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _smush = require("./smush32");

Object.keys(_smush).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _smush[key];
    }
  });
});

var _system = require("./system");

Object.keys(_system).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _system[key];
    }
  });
});

var _xorshift = require("./xorshift128");

Object.keys(_xorshift).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _xorshift[key];
    }
  });
});

var _xorwow = require("./xorwow");

Object.keys(_xorwow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _xorwow[key];
    }
  });
});

var _xsadd = require("./xsadd");

Object.keys(_xsadd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _xsadd[key];
    }
  });
});

var _randomId = require("./random-id");

Object.keys(_randomId).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _randomId[key];
    }
  });
});

var _weightedRandom = require("./weighted-random");

Object.keys(_weightedRandom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _weightedRandom[key];
    }
  });
});
},{"./api":"../node_modules/@thi.ng/random/api.js","./smush32":"../node_modules/@thi.ng/random/smush32.js","./system":"../node_modules/@thi.ng/random/system.js","./xorshift128":"../node_modules/@thi.ng/random/xorshift128.js","./xorwow":"../node_modules/@thi.ng/random/xorwow.js","./xsadd":"../node_modules/@thi.ng/random/xsadd.js","./random-id":"../node_modules/@thi.ng/random/random-id.js","./weighted-random":"../node_modules/@thi.ng/random/weighted-random.js"}],"../node_modules/@thi.ng/errors/deferror.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defError = void 0;

const defError = (prefix, suffix = msg => msg !== undefined ? ": " + msg : "") => class extends Error {
  constructor(msg) {
    super(prefix(msg) + suffix(msg));
  }

};

exports.defError = defError;
},{}],"../node_modules/@thi.ng/errors/illegal-arguments.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.illegalArgs = exports.IllegalArgumentError = void 0;

var _deferror = require("./deferror");

const IllegalArgumentError = (0, _deferror.defError)(() => "illegal argument(s)");
exports.IllegalArgumentError = IllegalArgumentError;

const illegalArgs = msg => {
  throw new IllegalArgumentError(msg);
};

exports.illegalArgs = illegalArgs;
},{"./deferror":"../node_modules/@thi.ng/errors/deferror.js"}],"../node_modules/@thi.ng/errors/illegal-arity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.illegalArity = exports.IllegalArityError = void 0;

var _deferror = require("./deferror");

const IllegalArityError = (0, _deferror.defError)(() => "illegal arity");
exports.IllegalArityError = IllegalArityError;

const illegalArity = n => {
  throw new IllegalArityError(n);
};

exports.illegalArity = illegalArity;
},{"./deferror":"../node_modules/@thi.ng/errors/deferror.js"}],"../node_modules/@thi.ng/errors/illegal-state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.illegalState = exports.IllegalStateError = void 0;

var _deferror = require("./deferror");

const IllegalStateError = (0, _deferror.defError)(() => "illegal state");
exports.IllegalStateError = IllegalStateError;

const illegalState = msg => {
  throw new IllegalStateError(msg);
};

exports.illegalState = illegalState;
},{"./deferror":"../node_modules/@thi.ng/errors/deferror.js"}],"../node_modules/@thi.ng/errors/unsupported.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsupported = exports.UnsupportedOperationError = void 0;

var _deferror = require("./deferror");

const UnsupportedOperationError = (0, _deferror.defError)(() => "unsupported operation");
exports.UnsupportedOperationError = UnsupportedOperationError;

const unsupported = msg => {
  throw new UnsupportedOperationError(msg);
};

exports.unsupported = unsupported;
},{"./deferror":"../node_modules/@thi.ng/errors/deferror.js"}],"../node_modules/@thi.ng/errors/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deferror = require("./deferror");

Object.keys(_deferror).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deferror[key];
    }
  });
});

var _illegalArguments = require("./illegal-arguments");

Object.keys(_illegalArguments).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _illegalArguments[key];
    }
  });
});

var _illegalArity = require("./illegal-arity");

Object.keys(_illegalArity).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _illegalArity[key];
    }
  });
});

var _illegalState = require("./illegal-state");

Object.keys(_illegalState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _illegalState[key];
    }
  });
});

var _unsupported = require("./unsupported");

Object.keys(_unsupported).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _unsupported[key];
    }
  });
});
},{"./deferror":"../node_modules/@thi.ng/errors/deferror.js","./illegal-arguments":"../node_modules/@thi.ng/errors/illegal-arguments.js","./illegal-arity":"../node_modules/@thi.ng/errors/illegal-arity.js","./illegal-state":"../node_modules/@thi.ng/errors/illegal-state.js","./unsupported":"../node_modules/@thi.ng/errors/unsupported.js"}],"../node_modules/@thi.ng/checks/exists-not-null.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.existsAndNotNull = void 0;

const existsAndNotNull = x => x != null;

exports.existsAndNotNull = existsAndNotNull;
},{}],"../node_modules/@thi.ng/checks/exists.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exists = void 0;

const exists = t => t !== undefined;

exports.exists = exists;
},{}],"../node_modules/@thi.ng/checks/has-crypto.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasCrypto = void 0;

const hasCrypto = () => typeof window !== "undefined" && window["crypto"] !== undefined;

exports.hasCrypto = hasCrypto;
},{}],"../node_modules/@thi.ng/checks/has-max-length.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMaxLength = void 0;

const hasMaxLength = (len, x) => x != null && x.length <= len;

exports.hasMaxLength = hasMaxLength;
},{}],"../node_modules/@thi.ng/checks/has-min-length.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMinLength = void 0;

const hasMinLength = (len, x) => x != null && x.length >= len;

exports.hasMinLength = hasMinLength;
},{}],"../node_modules/@thi.ng/checks/is-function.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = void 0;

const isFunction = x => typeof x === "function";

exports.isFunction = isFunction;
},{}],"../node_modules/@thi.ng/checks/has-performance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasPerformance = void 0;

var _isFunction = require("./is-function");

const hasPerformance = () => typeof performance !== "undefined" && (0, _isFunction.isFunction)(performance.now);

exports.hasPerformance = hasPerformance;
},{"./is-function":"../node_modules/@thi.ng/checks/is-function.js"}],"../node_modules/@thi.ng/checks/has-wasm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasWASM = void 0;

const hasWASM = () => typeof window !== "undefined" && typeof window["WebAssembly"] !== "undefined" || typeof global !== "undefined" && typeof global["WebAssembly"] !== "undefined";

exports.hasWASM = hasWASM;
},{}],"../node_modules/@thi.ng/checks/has-webgl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasWebGL = void 0;

const hasWebGL = () => {
  try {
    document.createElement("canvas").getContext("webgl");
    return true;
  } catch (e) {
    return false;
  }
};

exports.hasWebGL = hasWebGL;
},{}],"../node_modules/@thi.ng/checks/has-websocket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasWebSocket = void 0;

const hasWebSocket = () => typeof WebSocket !== "undefined";

exports.hasWebSocket = hasWebSocket;
},{}],"../node_modules/@thi.ng/checks/implements-function.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.implementsFunction = void 0;

const implementsFunction = (x, fn) => x != null && typeof x[fn] === "function";

exports.implementsFunction = implementsFunction;
},{}],"../node_modules/@thi.ng/checks/is-array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = void 0;
const isArray = Array.isArray;
exports.isArray = isArray;
},{}],"../node_modules/@thi.ng/checks/is-arraylike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayLike = void 0;

const isArrayLike = x => x != null && typeof x !== "function" && x.length !== undefined;

exports.isArrayLike = isArrayLike;
},{}],"../node_modules/@thi.ng/checks/is-blob.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBlob = void 0;

const isBlob = x => x instanceof Blob;

exports.isBlob = isBlob;
},{}],"../node_modules/@thi.ng/checks/is-boolean.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBoolean = void 0;

const isBoolean = x => typeof x === "boolean";

exports.isBoolean = isBoolean;
},{}],"../node_modules/@thi.ng/checks/is-chrome.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isChrome = void 0;

const isChrome = () => typeof window !== "undefined" && !!window["chrome"];

exports.isChrome = isChrome;
},{}],"../node_modules/@thi.ng/checks/is-date.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDate = void 0;

const isDate = x => x instanceof Date;

exports.isDate = isDate;
},{}],"../node_modules/@thi.ng/checks/is-even.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEven = void 0;

const isEven = x => x % 2 === 0;

exports.isEven = isEven;
},{}],"../node_modules/@thi.ng/checks/is-false.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFalse = void 0;

const isFalse = x => x === false;

exports.isFalse = isFalse;
},{}],"../node_modules/@thi.ng/checks/is-file.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFile = void 0;

const isFile = x => x instanceof File;

exports.isFile = isFile;
},{}],"../node_modules/@thi.ng/checks/is-firefox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFirefox = void 0;

const isFirefox = () => typeof window !== "undefined" && !!window["InstallTrigger"];

exports.isFirefox = isFirefox;
},{}],"../node_modules/@thi.ng/checks/is-string.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = void 0;

const isString = x => typeof x === "string";

exports.isString = isString;
},{}],"../node_modules/@thi.ng/checks/is-hex-color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHexColor = void 0;

var _isString = require("./is-string");

const RE = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i;

const isHexColor = x => (0, _isString.isString)(x) && RE.test(x);

exports.isHexColor = isHexColor;
},{"./is-string":"../node_modules/@thi.ng/checks/is-string.js"}],"../node_modules/@thi.ng/checks/is-ie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIE = void 0;

const isIE = () => typeof document !== "undefined" && (typeof document["documentMode"] !== "undefined" || navigator.userAgent.indexOf("MSIE") > 0);

exports.isIE = isIE;
},{}],"../node_modules/@thi.ng/checks/is-in-range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInRange = void 0;

const isInRange = (min, max, x) => x >= min && x <= max;

exports.isInRange = isInRange;
},{}],"../node_modules/@thi.ng/checks/is-int32.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInt32 = void 0;

const isInt32 = x => typeof x === "number" && (x | 0) === x;

exports.isInt32 = isInt32;
},{}],"../node_modules/@thi.ng/checks/is-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterable = void 0;

const isIterable = x => x != null && typeof x[Symbol.iterator] === "function";

exports.isIterable = isIterable;
},{}],"../node_modules/@thi.ng/checks/is-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMap = void 0;

const isMap = x => x instanceof Map;

exports.isMap = isMap;
},{}],"../node_modules/@thi.ng/checks/is-mobile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = void 0;

const isMobile = () => typeof navigator !== "undefined" && /mobile|tablet|ip(ad|hone|od)|android|silk|crios/i.test(navigator.userAgent);

exports.isMobile = isMobile;
},{}],"../node_modules/@thi.ng/checks/is-nan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNaN = void 0;

const isNaN = x => x !== x;

exports.isNaN = isNaN;
},{}],"../node_modules/@thi.ng/checks/is-negative.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNegative = void 0;

const isNegative = x => typeof x === "number" && x < 0;

exports.isNegative = isNegative;
},{}],"../node_modules/@thi.ng/checks/is-nil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNil = void 0;

/**
 * Checks if x is null or undefined.
 *
 */
const isNil = x => x == null;

exports.isNil = isNil;
},{}],"../node_modules/@thi.ng/checks/is-node.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNode = void 0;

const isNode = () => {
  if (typeof process === "object") {
    if (typeof process.versions === "object") {
      if (typeof process.versions.node !== "undefined") {
        return true;
      }
    }
  }

  return false;
};

exports.isNode = isNode;
},{"process":"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel/src/builtins/_empty.js"}],"../node_modules/@thi.ng/checks/is-not-string-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotStringAndIterable = void 0;

const isNotStringAndIterable = x => x != null && typeof x !== "string" && typeof x[Symbol.iterator] === "function";

exports.isNotStringAndIterable = isNotStringAndIterable;
},{}],"../node_modules/@thi.ng/checks/is-null.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNull = void 0;

const isNull = x => x === null;

exports.isNull = isNull;
},{}],"../node_modules/@thi.ng/checks/is-number.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = void 0;

const isNumber = x => typeof x === "number";

exports.isNumber = isNumber;
},{}],"../node_modules/@thi.ng/checks/is-object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = void 0;

const isObject = x => x !== null && typeof x === "object";

exports.isObject = isObject;
},{}],"../node_modules/@thi.ng/checks/is-odd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOdd = void 0;

const isOdd = x => x % 2 !== 0;

exports.isOdd = isOdd;
},{}],"../node_modules/@thi.ng/checks/is-plain-object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObject = void 0;
const OBJP = Object.getPrototypeOf;
/**
 * Similar to `isObject()`, but also checks if prototype is that of
 * `Object` (or `null`).
 *
 * @param x
 */

const isPlainObject = x => {
  let p;
  return x != null && typeof x === "object" && ((p = OBJP(x)) === null || OBJP(p) === null);
};

exports.isPlainObject = isPlainObject;
},{}],"../node_modules/@thi.ng/checks/is-positive.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPosititve = void 0;

const isPosititve = x => typeof x === "number" && x > 0;

exports.isPosititve = isPosititve;
},{}],"../node_modules/@thi.ng/checks/is-primitive.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPrimitive = void 0;

const isPrimitive = x => {
  const t = typeof x;
  return t === "string" || t === "number";
};

exports.isPrimitive = isPrimitive;
},{}],"../node_modules/@thi.ng/checks/is-promise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = void 0;

const isPromise = x => x instanceof Promise;

exports.isPromise = isPromise;
},{}],"../node_modules/@thi.ng/checks/is-promiselike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromiseLike = void 0;

var _implementsFunction = require("./implements-function");

const isPromiseLike = x => x instanceof Promise || (0, _implementsFunction.implementsFunction)(x, "then") && (0, _implementsFunction.implementsFunction)(x, "catch");

exports.isPromiseLike = isPromiseLike;
},{"./implements-function":"../node_modules/@thi.ng/checks/implements-function.js"}],"../node_modules/@thi.ng/checks/is-regexp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRegExp = void 0;

const isRegExp = x => x instanceof RegExp;

exports.isRegExp = isRegExp;
},{}],"../node_modules/@thi.ng/checks/is-safari.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSafari = void 0;

var _isChrome = require("./is-chrome");

const isSafari = () => typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !(0, _isChrome.isChrome)();

exports.isSafari = isSafari;
},{"./is-chrome":"../node_modules/@thi.ng/checks/is-chrome.js"}],"../node_modules/@thi.ng/checks/is-set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSet = void 0;

const isSet = x => x instanceof Set;

exports.isSet = isSet;
},{}],"../node_modules/@thi.ng/checks/is-symbol.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSymbol = void 0;

const isSymbol = x => typeof x === "symbol";

exports.isSymbol = isSymbol;
},{}],"../node_modules/@thi.ng/checks/is-transferable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTransferable = void 0;

const isTransferable = x => x instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && x instanceof SharedArrayBuffer || typeof MessagePort !== "undefined" && x instanceof MessagePort;

exports.isTransferable = isTransferable;
},{}],"../node_modules/@thi.ng/checks/is-true.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTrue = void 0;

const isTrue = x => x === true;

exports.isTrue = isTrue;
},{}],"../node_modules/@thi.ng/checks/is-typedarray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTypedArray = void 0;

const isTypedArray = x => x && (x.constructor === Float32Array || x.constructor === Uint32Array || x.constructor === Uint8Array || x.constructor === Uint8ClampedArray || x.constructor === Int8Array || x.constructor === Uint16Array || x.constructor === Int16Array || x.constructor === Int32Array || x.constructor === Float64Array);

exports.isTypedArray = isTypedArray;
},{}],"../node_modules/@thi.ng/checks/is-uint32.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUint32 = void 0;

const isUint32 = x => typeof x === "number" && x >>> 0 === x;

exports.isUint32 = isUint32;
},{}],"../node_modules/@thi.ng/checks/is-undefined.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUndefined = void 0;

const isUndefined = x => x === undefined;

exports.isUndefined = isUndefined;
},{}],"../node_modules/@thi.ng/checks/is-uuid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUUID = void 0;
const RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const isUUID = x => RE.test(x);

exports.isUUID = isUUID;
},{}],"../node_modules/@thi.ng/checks/is-uuid4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUUIDv4 = void 0;
const RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const isUUIDv4 = x => RE.test(x);

exports.isUUIDv4 = isUUIDv4;
},{}],"../node_modules/@thi.ng/checks/is-zero.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isZero = void 0;

const isZero = x => x === 0;

exports.isZero = isZero;
},{}],"../node_modules/@thi.ng/checks/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _existsNotNull = require("./exists-not-null");

Object.keys(_existsNotNull).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _existsNotNull[key];
    }
  });
});

var _exists = require("./exists");

Object.keys(_exists).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _exists[key];
    }
  });
});

var _hasCrypto = require("./has-crypto");

Object.keys(_hasCrypto).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasCrypto[key];
    }
  });
});

var _hasMaxLength = require("./has-max-length");

Object.keys(_hasMaxLength).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasMaxLength[key];
    }
  });
});

var _hasMinLength = require("./has-min-length");

Object.keys(_hasMinLength).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasMinLength[key];
    }
  });
});

var _hasPerformance = require("./has-performance");

Object.keys(_hasPerformance).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasPerformance[key];
    }
  });
});

var _hasWasm = require("./has-wasm");

Object.keys(_hasWasm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasWasm[key];
    }
  });
});

var _hasWebgl = require("./has-webgl");

Object.keys(_hasWebgl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasWebgl[key];
    }
  });
});

var _hasWebsocket = require("./has-websocket");

Object.keys(_hasWebsocket).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasWebsocket[key];
    }
  });
});

var _implementsFunction = require("./implements-function");

Object.keys(_implementsFunction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _implementsFunction[key];
    }
  });
});

var _isArray = require("./is-array");

Object.keys(_isArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isArray[key];
    }
  });
});

var _isArraylike = require("./is-arraylike");

Object.keys(_isArraylike).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isArraylike[key];
    }
  });
});

var _isBlob = require("./is-blob");

Object.keys(_isBlob).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isBlob[key];
    }
  });
});

var _isBoolean = require("./is-boolean");

Object.keys(_isBoolean).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isBoolean[key];
    }
  });
});

var _isChrome = require("./is-chrome");

Object.keys(_isChrome).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isChrome[key];
    }
  });
});

var _isDate = require("./is-date");

Object.keys(_isDate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isDate[key];
    }
  });
});

var _isEven = require("./is-even");

Object.keys(_isEven).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isEven[key];
    }
  });
});

var _isFalse = require("./is-false");

Object.keys(_isFalse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFalse[key];
    }
  });
});

var _isFile = require("./is-file");

Object.keys(_isFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFile[key];
    }
  });
});

var _isFirefox = require("./is-firefox");

Object.keys(_isFirefox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFirefox[key];
    }
  });
});

var _isFunction = require("./is-function");

Object.keys(_isFunction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFunction[key];
    }
  });
});

var _isHexColor = require("./is-hex-color");

Object.keys(_isHexColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isHexColor[key];
    }
  });
});

var _isIe = require("./is-ie");

Object.keys(_isIe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isIe[key];
    }
  });
});

var _isInRange = require("./is-in-range");

Object.keys(_isInRange).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isInRange[key];
    }
  });
});

var _isInt = require("./is-int32");

Object.keys(_isInt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isInt[key];
    }
  });
});

var _isIterable = require("./is-iterable");

Object.keys(_isIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isIterable[key];
    }
  });
});

var _isMap = require("./is-map");

Object.keys(_isMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isMap[key];
    }
  });
});

var _isMobile = require("./is-mobile");

Object.keys(_isMobile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isMobile[key];
    }
  });
});

var _isNan = require("./is-nan");

Object.keys(_isNan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNan[key];
    }
  });
});

var _isNegative = require("./is-negative");

Object.keys(_isNegative).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNegative[key];
    }
  });
});

var _isNil = require("./is-nil");

Object.keys(_isNil).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNil[key];
    }
  });
});

var _isNode = require("./is-node");

Object.keys(_isNode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNode[key];
    }
  });
});

var _isNotStringIterable = require("./is-not-string-iterable");

Object.keys(_isNotStringIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNotStringIterable[key];
    }
  });
});

var _isNull = require("./is-null");

Object.keys(_isNull).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNull[key];
    }
  });
});

var _isNumber = require("./is-number");

Object.keys(_isNumber).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNumber[key];
    }
  });
});

var _isObject = require("./is-object");

Object.keys(_isObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isObject[key];
    }
  });
});

var _isOdd = require("./is-odd");

Object.keys(_isOdd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isOdd[key];
    }
  });
});

var _isPlainObject = require("./is-plain-object");

Object.keys(_isPlainObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPlainObject[key];
    }
  });
});

var _isPositive = require("./is-positive");

Object.keys(_isPositive).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPositive[key];
    }
  });
});

var _isPrimitive = require("./is-primitive");

Object.keys(_isPrimitive).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPrimitive[key];
    }
  });
});

var _isPromise = require("./is-promise");

Object.keys(_isPromise).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPromise[key];
    }
  });
});

var _isPromiselike = require("./is-promiselike");

Object.keys(_isPromiselike).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPromiselike[key];
    }
  });
});

var _isRegexp = require("./is-regexp");

Object.keys(_isRegexp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isRegexp[key];
    }
  });
});

var _isSafari = require("./is-safari");

Object.keys(_isSafari).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSafari[key];
    }
  });
});

var _isSet = require("./is-set");

Object.keys(_isSet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSet[key];
    }
  });
});

var _isString = require("./is-string");

Object.keys(_isString).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isString[key];
    }
  });
});

var _isSymbol = require("./is-symbol");

Object.keys(_isSymbol).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSymbol[key];
    }
  });
});

var _isTransferable = require("./is-transferable");

Object.keys(_isTransferable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTransferable[key];
    }
  });
});

var _isTrue = require("./is-true");

Object.keys(_isTrue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTrue[key];
    }
  });
});

var _isTypedarray = require("./is-typedarray");

Object.keys(_isTypedarray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTypedarray[key];
    }
  });
});

var _isUint = require("./is-uint32");

Object.keys(_isUint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUint[key];
    }
  });
});

var _isUndefined = require("./is-undefined");

Object.keys(_isUndefined).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUndefined[key];
    }
  });
});

var _isUuid = require("./is-uuid");

Object.keys(_isUuid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUuid[key];
    }
  });
});

var _isUuid2 = require("./is-uuid4");

Object.keys(_isUuid2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUuid2[key];
    }
  });
});

var _isZero = require("./is-zero");

Object.keys(_isZero).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isZero[key];
    }
  });
});
},{"./exists-not-null":"../node_modules/@thi.ng/checks/exists-not-null.js","./exists":"../node_modules/@thi.ng/checks/exists.js","./has-crypto":"../node_modules/@thi.ng/checks/has-crypto.js","./has-max-length":"../node_modules/@thi.ng/checks/has-max-length.js","./has-min-length":"../node_modules/@thi.ng/checks/has-min-length.js","./has-performance":"../node_modules/@thi.ng/checks/has-performance.js","./has-wasm":"../node_modules/@thi.ng/checks/has-wasm.js","./has-webgl":"../node_modules/@thi.ng/checks/has-webgl.js","./has-websocket":"../node_modules/@thi.ng/checks/has-websocket.js","./implements-function":"../node_modules/@thi.ng/checks/implements-function.js","./is-array":"../node_modules/@thi.ng/checks/is-array.js","./is-arraylike":"../node_modules/@thi.ng/checks/is-arraylike.js","./is-blob":"../node_modules/@thi.ng/checks/is-blob.js","./is-boolean":"../node_modules/@thi.ng/checks/is-boolean.js","./is-chrome":"../node_modules/@thi.ng/checks/is-chrome.js","./is-date":"../node_modules/@thi.ng/checks/is-date.js","./is-even":"../node_modules/@thi.ng/checks/is-even.js","./is-false":"../node_modules/@thi.ng/checks/is-false.js","./is-file":"../node_modules/@thi.ng/checks/is-file.js","./is-firefox":"../node_modules/@thi.ng/checks/is-firefox.js","./is-function":"../node_modules/@thi.ng/checks/is-function.js","./is-hex-color":"../node_modules/@thi.ng/checks/is-hex-color.js","./is-ie":"../node_modules/@thi.ng/checks/is-ie.js","./is-in-range":"../node_modules/@thi.ng/checks/is-in-range.js","./is-int32":"../node_modules/@thi.ng/checks/is-int32.js","./is-iterable":"../node_modules/@thi.ng/checks/is-iterable.js","./is-map":"../node_modules/@thi.ng/checks/is-map.js","./is-mobile":"../node_modules/@thi.ng/checks/is-mobile.js","./is-nan":"../node_modules/@thi.ng/checks/is-nan.js","./is-negative":"../node_modules/@thi.ng/checks/is-negative.js","./is-nil":"../node_modules/@thi.ng/checks/is-nil.js","./is-node":"../node_modules/@thi.ng/checks/is-node.js","./is-not-string-iterable":"../node_modules/@thi.ng/checks/is-not-string-iterable.js","./is-null":"../node_modules/@thi.ng/checks/is-null.js","./is-number":"../node_modules/@thi.ng/checks/is-number.js","./is-object":"../node_modules/@thi.ng/checks/is-object.js","./is-odd":"../node_modules/@thi.ng/checks/is-odd.js","./is-plain-object":"../node_modules/@thi.ng/checks/is-plain-object.js","./is-positive":"../node_modules/@thi.ng/checks/is-positive.js","./is-primitive":"../node_modules/@thi.ng/checks/is-primitive.js","./is-promise":"../node_modules/@thi.ng/checks/is-promise.js","./is-promiselike":"../node_modules/@thi.ng/checks/is-promiselike.js","./is-regexp":"../node_modules/@thi.ng/checks/is-regexp.js","./is-safari":"../node_modules/@thi.ng/checks/is-safari.js","./is-set":"../node_modules/@thi.ng/checks/is-set.js","./is-string":"../node_modules/@thi.ng/checks/is-string.js","./is-symbol":"../node_modules/@thi.ng/checks/is-symbol.js","./is-transferable":"../node_modules/@thi.ng/checks/is-transferable.js","./is-true":"../node_modules/@thi.ng/checks/is-true.js","./is-typedarray":"../node_modules/@thi.ng/checks/is-typedarray.js","./is-uint32":"../node_modules/@thi.ng/checks/is-uint32.js","./is-undefined":"../node_modules/@thi.ng/checks/is-undefined.js","./is-uuid":"../node_modules/@thi.ng/checks/is-uuid.js","./is-uuid4":"../node_modules/@thi.ng/checks/is-uuid4.js","./is-zero":"../node_modules/@thi.ng/checks/is-zero.js"}],"../node_modules/@thi.ng/paths/path.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exists = exports.toPath = void 0;

var _checks = require("@thi.ng/checks");

/**
 * Converts the given key path to canonical form (array).
 *
 * ```
 * toPath("a.b.c");
 * // ["a", "b", "c"]
 *
 * toPath(0)
 * // [0]
 *
 * toPath(["a", "b", "c"])
 * // ["a", "b", "c"]
 * ```
 *
 * @param path
 */
const toPath = path => (0, _checks.isArray)(path) ? path : (0, _checks.isString)(path) ? path.length > 0 ? path.split(".") : [] : path != null ? [path] : [];
/**
 * Takes an arbitrary object and lookup path. Descends into object along
 * path and returns true if the full path exists (even if final leaf
 * value is `null` or `undefined`). Checks are performed using
 * `hasOwnProperty()`.
 *
 * @param obj
 * @param path
 */


exports.toPath = toPath;

const exists = (obj, path) => {
  if (obj == null) {
    return false;
  }

  path = toPath(path);

  for (let n = path.length - 1, i = 0; i <= n; i++) {
    const k = path[i];

    if (!obj.hasOwnProperty(k)) {
      return false;
    }

    obj = obj[k];

    if (obj == null && i < n) {
      return false;
    }
  }

  return true;
};

exports.exists = exists;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js"}],"../node_modules/@thi.ng/paths/getter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getterT = getterT;
exports.getter = void 0;

var _path = require("./path");

/**
 * Composes a getter function for given nested lookup path. Optimized
 * fast execution paths are provided for path lengths <= 4.
 *
 * @remarks
 * Supports any `[]`-indexable data structure (arrays, objects,
 * strings).
 *
 * If `path` is given as string, it will be split using `.`. Returns
 * function which accepts single object and when called, returns value
 * at given path.
 *
 * If any intermediate key is not present in the given obj, descent
 * stops and the function returns `undefined`.
 *
 * If `path` is an empty string or array, the returned getter will
 * simply return the given state arg (identity function).
 *
 * Also see: `getIn()`
 *
 * @example
 * ```ts
 * interface Foo {
 *   a: { b: { c: number; } }
 * }
 *
 * // fully typed getter
 * g = getter<Foo, "a", "b", "c">(["a","b","c"]);
 *
 * // error (wrong `d` key)
 * g = getter<Foo, "a", "b", "d">(["a","b","d"]);
 *
 * // unchecked (accepts any, returns any)
 * g = getter("a.b.c");
 *
 * g({ a: { b: { c: 23} } }) // 23
 * g({ x: 23 }) // undefined
 * g() // undefined
 * ```
 *
 * @param path
 */
const getter = path => getterT(path);

exports.getter = getter;

function getterT(path) {
  const ks = (0, _path.toPath)(path);
  let [a, b, c, d] = ks;

  switch (ks.length) {
    case 0:
      return s => s;

    case 1:
      return s => s != null ? s[a] : undefined;

    case 2:
      return s => s != null ? (s = s[a]) != null ? s[b] : undefined : undefined;

    case 3:
      return s => s != null ? (s = s[a]) != null ? (s = s[b]) != null ? s[c] : undefined : undefined : undefined;

    case 4:
      return s => s != null ? (s = s[a]) != null ? (s = s[b]) != null ? (s = s[c]) != null ? s[d] : undefined : undefined : undefined : undefined;

    default:
      return s => {
        const n = ks.length - 1;
        let res = s;

        for (let i = 0; res != null && i <= n; i++) {
          res = res[ks[i]];
        }

        return res;
      };
  }
}
},{"./path":"../node_modules/@thi.ng/paths/path.js"}],"../node_modules/@thi.ng/paths/setter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setterT = setterT;
exports.setter = void 0;

var _checks = require("@thi.ng/checks");

var _path = require("./path");

/**
 * Composes a setter function for given nested update path. Optimized
 * fast execution paths are provided for path lengths less up to 4.
 *
 * @remarks
 * Supports both arrays and objects and creates intermediate shallow
 * copies at each level of the path. Thus provides structural sharing
 * with the original data for any branches not being updated by the
 * setter.
 *
 * If `path` is given as string, it will be split using `.`. Returns
 * function which accepts single object and when called, **immutably**
 * updates value at given path, i.e. produces a partial deep copy of obj
 * up until given path.
 *
 * If any intermediate key is not present in the given obj, creates a
 * plain empty object for that key and descends further.
 *
 * If `path` is an empty string or array, the returned setter will
 * simply return the new value.
 *
 * Only keys in the path will be modified, all other keys present in the
 * given object retain their original values to provide efficient
 * structural sharing / re-use.
 *
 * Also see: {@link setIn}, {@link updateIn}, {@link deleteIn}
 *
 * @example
 * ```
 * s = setter("a.b.c");
 * // or
 * s = setter(["a","b","c"]);
 *
 * s({ a: { b: { c: 23} } }, 24)
 * // { a: { b: { c: 24} } }
 *
 * s({ x: 23 }, 24)
 * // { x: 23, a: { b: { c: 24 } } }
 *
 * s(null, 24)
 * // { a: { b: { c: 24 } } }
 * ```
 *
 * @example
 * ```ts
 * s = setter("a.b.c");
 *
 * a = {x: {y: {z: 1}}};
 * b = s(a, 2);
 * // { x: { y: { z: 1 } }, a: { b: { c: 2 } } }
 *
 * a.x === b.x // true
 * a.x.y === b.x.y // true
 * ```
 *
 * @param path
 */
const setter = path => setterT(path);

exports.setter = setter;

function setterT(path) {
  const ks = (0, _path.toPath)(path);
  let [a, b, c, d] = ks;

  switch (ks.length) {
    case 0:
      return (_, v) => v;

    case 1:
      return (s, v) => (s = _copy(s), s[a] = v, s);

    case 2:
      return (s, v) => {
        let x;
        s = _copy(s);
        s[a] = x = _copy(s[a]);
        x[b] = v;
        return s;
      };

    case 3:
      return (s, v) => {
        let x, y;
        s = _copy(s);
        s[a] = x = _copy(s[a]);
        x[b] = y = _copy(x[b]);
        y[c] = v;
        return s;
      };

    case 4:
      return (s, v) => {
        let x, y, z;
        s = _copy(s);
        s[a] = x = _copy(s[a]);
        x[b] = y = _copy(x[b]);
        y[c] = z = _copy(y[c]);
        z[d] = v;
        return s;
      };

    default:
      let f;

      for (let i = ks.length; --i >= 0;) {
        f = compS(ks[i], f);
      }

      return f;
  }
}

const _copy = s => (0, _checks.isArray)(s) ? s.slice() : Object.assign({}, s);

const compS = (k, f) => (s, v) => (s = _copy(s), s[k] = f ? f(s[k], v) : v, s);
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","./path":"../node_modules/@thi.ng/paths/path.js"}],"../node_modules/@thi.ng/paths/update-in.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateInT = updateInT;
exports.updateIn = void 0;

var _getter = require("./getter");

var _setter = require("./setter");

/**
 * Similar to {@link setIn}, but applies given function to current path
 * value (incl. any additional/optional arguments passed to `updateIn`)
 * and uses result as new value. Does not modify original state (unless
 * given function does so itself).
 *
 * ```
 * add = (x, y) => x + y;
 * updateIn({ a: { b: { c: 23 } } }, "a.b.c", add, 10);
 * // { a: { b: { c: 33 } } }
 * ```
 *
 * @param state - state to update
 * @param path - update path
 * @param fn - update function
 * @param args - optional args for `fn`
 */
const updateIn = (state, path, fn, ...args) => updateInT(state, path, fn, ...args);

exports.updateIn = updateIn;

function updateInT(state, path, fn, ...args) {
  return (0, _setter.setterT)(path)(state, fn.apply(null, (args.unshift((0, _getter.getterT)(path)(state)), args)));
}
},{"./getter":"../node_modules/@thi.ng/paths/getter.js","./setter":"../node_modules/@thi.ng/paths/setter.js"}],"../node_modules/@thi.ng/paths/delete-in.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteInT = deleteInT;
exports.deleteIn = void 0;

var _path = require("./path");

var _updateIn = require("./update-in");

/**
 * Uses {@link updateIn} and returns updated state with key for given
 * path removed. Does not modify original state.Returns `undefined` if
 * `path` is an empty string or array.
 *
 * ```
 * deleteIn({ a: { b: { c: 23 } } }, "a.b.c");
 * // { a: { b: { } } }
 * ```
 *
 * @param state
 * @param path
 */
const deleteIn = (state, path) => deleteInT(state, path);

exports.deleteIn = deleteIn;

function deleteInT(state, path) {
  const ks = [...(0, _path.toPath)(path)];

  if (ks.length > 0) {
    const k = ks.pop();
    return (0, _updateIn.updateInT)(state, ks, x => (x = Object.assign({}, x), delete x[k], x));
  }
}
},{"./path":"../node_modules/@thi.ng/paths/path.js","./update-in":"../node_modules/@thi.ng/paths/update-in.js"}],"../node_modules/@thi.ng/paths/get-in.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInT = getInT;
exports.getIn = void 0;

var _getter = require("./getter");

/**
 * Immediate use getter, i.e. same as: `getter(path)(state)`.
 *
 * @remarks
 * Supports type checked paths and values for path lengths <= 8. String
 * paths are always unchecked (i.e. `state` is `any`).
 *
 * @example
 * ```ts
 * // checked path and inferred return type
 * getIn({ a: { b: { c: 23 } } }, ["a","b","c"]);
 * // 23
 *
 * // unchecked path
 * getIn({ a: { b: { c: 23 } } }, "a.b.c");
 * // 23
 * ```
 *
 * @param state
 * @param path
 */
const getIn = (state, path) => (0, _getter.getterT)(path)(state);

exports.getIn = getIn;

function getInT(state, path) {
  return (0, _getter.getterT)(path)(state);
}
},{"./getter":"../node_modules/@thi.ng/paths/getter.js"}],"../node_modules/@thi.ng/paths/mutator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutatorT = mutatorT;
exports.mutator = void 0;

var _path = require("./path");

/**
 * Higher-order function, similar to {@link setter}. Returns function
 * which when called mutates given object/array at given path location.
 *
 * @remarks
 * The returned function bails if any intermediate path values are
 * non-indexable (only the very last path element can be missing in the
 * actual object structure). If successful, returns original (mutated)
 * object, else `undefined`. This function provides optimized versions
 * for path lengths <= 4. Type checking is supported for path lengths <=
 * 8.
 *
 * @param path
 */
const mutator = path => mutatorT(path);

exports.mutator = mutator;

function mutatorT(path) {
  const ks = (0, _path.toPath)(path);
  let [a, b, c, d] = ks;

  switch (ks.length) {
    case 0:
      return (_, x) => x;

    case 1:
      return (s, x) => s ? (s[a] = x, s) : undefined;

    case 2:
      return (s, x) => {
        let t;
        return s ? (t = s[a]) ? (t[b] = x, s) : undefined : undefined;
      };

    case 3:
      return (s, x) => {
        let t;
        return s ? (t = s[a]) ? (t = t[b]) ? (t[c] = x, s) : undefined : undefined : undefined;
      };

    case 4:
      return (s, x) => {
        let t;
        return s ? (t = s[a]) ? (t = t[b]) ? (t = t[c]) ? (t[d] = x, s) : undefined : undefined : undefined : undefined;
      };

    default:
      return (s, x) => {
        let t = s;
        const n = ks.length - 1;

        for (let k = 0; k < n; k++) {
          if (!(t = t[ks[k]])) return;
        }

        t[ks[n]] = x;
        return s;
      };
  }
}
},{"./path":"../node_modules/@thi.ng/paths/path.js"}],"../node_modules/@thi.ng/paths/mut-in.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutInT = mutInT;
exports.mutIn = void 0;

var _mutator = require("./mutator");

/**
 * Immediate use mutator, i.e. same as: `mutator(path)(state, val)`.
 *
 * @remarks
 * Also see {@link setIn}, {@link updateIn}, {@link deleteIn}.
 *
 * @example
 * ```ts
 * interface Foo {
 *   a: { b: number[]; }
 * }
 *
 * // fully type checked
 * mutIn({ a: { b: [10, 20] } }, ["a", "b", 1], 23)
 * // { a: { b: [ 10, 23 ] } }
 *
 * // unchecked
 * mutIn({ a: { b: [10, 20] } }, "a.b.1", 23);
 * // { a: { b: [ 10, 23 ] } }
 *
 * // fails (see `mutator` docs)
 * mutIn({}, "a.b.c", 23);
 * // undefined
 * ```
 *
 * @param state
 * @param path
 * @param val
 */
const mutIn = (state, path, val) => mutInT(state, path, val);

exports.mutIn = mutIn;

function mutInT(state, path, val) {
  return (0, _mutator.mutatorT)(path)(state, val);
}
},{"./mutator":"../node_modules/@thi.ng/paths/mutator.js"}],"../node_modules/@thi.ng/paths/mut-in-many.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutInMany = void 0;

var _errors = require("@thi.ng/errors");

var _mutIn = require("./mut-in");

/**
 * Similar to {@link mutIn}, but takes any number of path-value pairs as
 * args and applies them in sequence using `mutIn()`. All key paths must
 * already be present in the given data structure until their
 * penultimate key.
 *
 * @remarks
 * Unlike {@link mutIn}, this function does not use type checked paths.
 *
 * @example
 * ```ts
 * mutInMany(
 *   { a: { b: 1 }, x: { y: { z: 2 } } },
 *   "a.b", 10,
 *   "x.y.z", 20
 * )
 * // { a: { b: 10 }, x: { y: { z: 20 } } }
 * ```
 *
 * @param state
 * @param pairs
 */
const mutInMany = (state, ...pairs) => {
  const n = pairs.length;
  n & 1 && (0, _errors.illegalArgs)(`require even number of args (got ${pairs.length})`);

  for (let i = 0; i < n && state; i += 2) {
    state = (0, _mutIn.mutInT)(state, pairs[i], pairs[i + 1]);
  }

  return state;
};

exports.mutInMany = mutInMany;
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./mut-in":"../node_modules/@thi.ng/paths/mut-in.js"}],"../node_modules/@thi.ng/paths/set-in.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setInT = setInT;
exports.setIn = void 0;

var _setter = require("./setter");

/**
 * Immediate use setter, i.e. same as: `setter(path)(state, val)`.
 *
 * @remarks
 * Supports type checked paths and values for path lengths <= 8. String
 * paths are always unchecked (i.e. `state` is `any`).
 *
 * @example
 * ```ts
 *
 * setIn({}, "a.b.c", 23);
 * // { a: { b: { c: 23} } }
 * ```
 *
 * @param state
 * @param path
 */
const setIn = (state, path, val) => (0, _setter.setterT)(path)(state, val);

exports.setIn = setIn;

function setInT(state, path, val) {
  return (0, _setter.setterT)(path)(state, val);
}
},{"./setter":"../node_modules/@thi.ng/paths/setter.js"}],"../node_modules/@thi.ng/paths/set-in-many.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setInMany = void 0;

var _errors = require("@thi.ng/errors");

var _setIn = require("./set-in");

/**
 * Similar to {@link setIn}, but takes any number of path-value pairs as
 * args and applies them in sequence by calling `setIn()` for each.
 *
 * @remarks
 * Any key paths missing in the data structure will be created. Does
 * *not* mutate original (instead use {@link mutInMany} for this
 * purpose).
 *
 * Unlike {@link setIn}, this function does not use type checked paths.
 *
 * ```
 * setInMany({}, "a.b", 10, "x.y.z", 20)
 * // { a: { b: 10 }, x: { y: { z: 20 } } }
 * ```
 *
 * @param state
 * @param pairs
 */
const setInMany = (state, ...pairs) => {
  const n = pairs.length;
  n & 1 && (0, _errors.illegalArgs)(`require even number of KV args (got ${pairs.length})`);

  for (let i = 0; i < n; i += 2) {
    state = (0, _setIn.setInT)(state, pairs[i], pairs[i + 1]);
  }

  return state;
};

exports.setInMany = setInMany;
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./set-in":"../node_modules/@thi.ng/paths/set-in.js"}],"../node_modules/@thi.ng/paths/updater.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updaterT = updaterT;
exports.updater = void 0;

var _getter = require("./getter");

var _setter = require("./setter");

/**
 * Similar to {@link setter}, returns a function to update values at
 * given `path` using provided update `fn`.
 *
 * @remarks
 * The returned function accepts a single object / array and applies
 * `fn` to current path value (incl. any additional/optional arguments
 * passed) and uses result as new value. Does not modify original state
 * (unless given function does so itself).
 *
 * ```
 * add = updater("a.b", (x, n) => x + n);
 *
 * add({a: {b: 10}}, 13);
 * // { a: { b: 23 } }
 * ```
 *
 * @param path
 * @param fn
 */
const updater = (path, fn) => updaterT(path, fn);

exports.updater = updater;

function updaterT(path, fn) {
  const g = (0, _getter.getterT)(path);
  const s = (0, _setter.setterT)(path);
  return (state, ...args) => s(state, fn.apply(null, (args.unshift(g(state)), args)));
}
},{"./getter":"../node_modules/@thi.ng/paths/getter.js","./setter":"../node_modules/@thi.ng/paths/setter.js"}],"../node_modules/@thi.ng/paths/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deleteIn = require("./delete-in");

Object.keys(_deleteIn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deleteIn[key];
    }
  });
});

var _getter = require("./getter");

Object.keys(_getter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getter[key];
    }
  });
});

var _getIn = require("./get-in");

Object.keys(_getIn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getIn[key];
    }
  });
});

var _mutIn = require("./mut-in");

Object.keys(_mutIn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mutIn[key];
    }
  });
});

var _mutInMany = require("./mut-in-many");

Object.keys(_mutInMany).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mutInMany[key];
    }
  });
});

var _mutator = require("./mutator");

Object.keys(_mutator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mutator[key];
    }
  });
});

var _path = require("./path");

Object.keys(_path).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _path[key];
    }
  });
});

var _setter = require("./setter");

Object.keys(_setter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setter[key];
    }
  });
});

var _setIn = require("./set-in");

Object.keys(_setIn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setIn[key];
    }
  });
});

var _setInMany = require("./set-in-many");

Object.keys(_setInMany).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setInMany[key];
    }
  });
});

var _updater = require("./updater");

Object.keys(_updater).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _updater[key];
    }
  });
});

var _updateIn = require("./update-in");

Object.keys(_updateIn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _updateIn[key];
    }
  });
});
},{"./delete-in":"../node_modules/@thi.ng/paths/delete-in.js","./getter":"../node_modules/@thi.ng/paths/getter.js","./get-in":"../node_modules/@thi.ng/paths/get-in.js","./mut-in":"../node_modules/@thi.ng/paths/mut-in.js","./mut-in-many":"../node_modules/@thi.ng/paths/mut-in-many.js","./mutator":"../node_modules/@thi.ng/paths/mutator.js","./path":"../node_modules/@thi.ng/paths/path.js","./setter":"../node_modules/@thi.ng/paths/setter.js","./set-in":"../node_modules/@thi.ng/paths/set-in.js","./set-in-many":"../node_modules/@thi.ng/paths/set-in-many.js","./updater":"../node_modules/@thi.ng/paths/updater.js","./update-in":"../node_modules/@thi.ng/paths/update-in.js"}],"../node_modules/@thi.ng/equiv/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equivObject = exports.equivMap = exports.equivSet = exports.equivArrayLike = exports.equiv = void 0;
const OBJP = Object.getPrototypeOf({});
const FN = "function";
const STR = "string";

const equiv = (a, b) => {
  let proto;

  if (a === b) {
    return true;
  }

  if (a != null) {
    if (typeof a.equiv === FN) {
      return a.equiv(b);
    }
  } else {
    return a == b;
  }

  if (b != null) {
    if (typeof b.equiv === FN) {
      return b.equiv(a);
    }
  } else {
    return a == b;
  }

  if (typeof a === STR || typeof b === STR) {
    return false;
  }

  if ((proto = Object.getPrototypeOf(a), proto == null || proto === OBJP) && (proto = Object.getPrototypeOf(b), proto == null || proto === OBJP)) {
    return equivObject(a, b);
  }

  if (typeof a !== FN && a.length !== undefined && typeof b !== FN && b.length !== undefined) {
    return equivArrayLike(a, b);
  }

  if (a instanceof Set && b instanceof Set) {
    return equivSet(a, b);
  }

  if (a instanceof Map && b instanceof Map) {
    return equivMap(a, b);
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  } // NaN


  return a !== a && b !== b;
};

exports.equiv = equiv;

const equivArrayLike = (a, b, _equiv = equiv) => {
  let l = a.length;

  if (l === b.length) {
    while (--l >= 0 && _equiv(a[l], b[l]));
  }

  return l < 0;
};

exports.equivArrayLike = equivArrayLike;

const equivSet = (a, b, _equiv = equiv) => a.size === b.size && _equiv([...a.keys()].sort(), [...b.keys()].sort());

exports.equivSet = equivSet;

const equivMap = (a, b, _equiv = equiv) => a.size === b.size && _equiv([...a].sort(), [...b].sort());

exports.equivMap = equivMap;

const equivObject = (a, b, _equiv = equiv) => {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (let k in a) {
    if (!b.hasOwnProperty(k) || !_equiv(a[k], b[k])) {
      return false;
    }
  }

  return true;
};

exports.equivObject = equivObject;
},{}],"../node_modules/@thi.ng/atom/idgen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextID = void 0;
let NEXT_ID = 0;

const nextID = () => NEXT_ID++;

exports.nextID = nextID;
},{}],"../node_modules/@thi.ng/atom/view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = void 0;

var _equiv2 = require("@thi.ng/equiv");

var _paths = require("@thi.ng/paths");

var _idgen = require("./idgen");

/**
 * This class implements readonly access to a deeply nested value with
 * in an Atom/Cursor. An optional transformer function can be supplied
 * at creation time to produce a derived/materialized view of the actual
 * value held in the atom. Views can be created directly or via the
 * `.addView()` method of the parent state. Views can be `deref()`'d
 * like atoms and polled for value changes using `changed()`. The
 * transformer is only applied once per value change and its result
 * cached until the next change.
 *
 * If the optional `lazy` is true (default), the transformer will only
 * be executed with the first `deref()` after each value change. If
 * `lazy` is false, the transformer function will be executed
 * immediately after a value change occurred and so can be used like a
 * watch which only triggers if there was an actual value change (in
 * contrast to normal watches, which execute with each update,
 * regardless of value change).
 *
 * Related, the actual value change predicate can be customized. If not
 * given, the default `@thi.ng/equiv` will be used.
 *
 * ```
 * a = new Atom({a: {b: 1}});
 * v = a.addView("a.b", (x) => x * 10);
 *
 * v.deref()
 * // 10
 *
 * // update atom state
 * a.swap((state) => setIn(state, "a.b", 2));
 * // {a: {b: 2}}
 *
 * v.changed()
 * // true
 * v.deref()
 * // 20
 *
 * v.release()
 * // remove view from parent state
 * ```
 */
class View {
  constructor(parent, path, tx, lazy = true, equiv = _equiv2.equiv) {
    this.parent = parent;
    this.id = `view-${(0, _idgen.nextID)()}`;

    this.tx = tx || (x => x);

    this.path = (0, _paths.toPath)(path);
    this.isDirty = true;
    this.isLazy = lazy;
    const lookup = (0, _paths.getter)(this.path);
    const state = this.parent.deref();
    this.unprocessed = state ? lookup(state) : undefined;

    if (!lazy) {
      this.state = this.tx(this.unprocessed);
      this.unprocessed = undefined;
    }

    parent.addWatch(this.id, (_, prev, curr) => {
      const pval = prev ? lookup(prev) : prev;
      const val = curr ? lookup(curr) : curr;

      if (!equiv(val, pval)) {
        if (lazy) {
          this.unprocessed = val;
        } else {
          this.state = this.tx(val);
        }

        this.isDirty = true;
      }
    });
  }

  get value() {
    return this.deref();
  }
  /**
   * Returns view's value. If the view has a transformer, the
   * transformed value is returned. The transformer is only run once
   * per value change. See class comments about difference between
   * lazy/eager behaviors.
   */


  deref() {
    if (this.isDirty) {
      if (this.isLazy) {
        this.state = this.tx(this.unprocessed);
        this.unprocessed = undefined;
      }

      this.isDirty = false;
    }

    return this.state;
  }
  /**
   * Returns true, if the view's value has changed since last
   * `deref()`.
   */


  changed() {
    return this.isDirty;
  }
  /**
   * Like `deref()`, but doesn't update view's cached state and dirty
   * flag if value has changed. If there's an unprocessed value
   * change, returns result of this sub's transformer or else the
   * cached value.
   *
   * **Important:** Use this function only if the view has none or or
   * a stateless transformer. Else might cause undefined/inconsistent
   * behavior when calling `view()` or `deref()` subsequently.
   */


  view() {
    return this.isDirty && this.isLazy ? this.tx(this.unprocessed) : this.state;
  }
  /**
   * Disconnects this view from parent state, marks itself
   * dirty/changed and sets its unprocessed raw value to `undefined`.
   */


  release() {
    this.unprocessed = undefined;

    if (!this.isLazy) {
      this.state = this.tx(undefined);
    }

    this.isDirty = true;
    return this.parent.removeWatch(this.id);
  }

}

exports.View = View;
},{"@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js","@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","./idgen":"../node_modules/@thi.ng/atom/idgen.js"}],"../node_modules/@thi.ng/atom/atom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Atom = void 0;

var _api = require("@thi.ng/api");

var _errors = require("@thi.ng/errors");

var _paths = require("@thi.ng/paths");

var _view = require("./view");

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Mutable wrapper for an (usually) immutable value. Support for
 * watches.
 */
let Atom = class Atom {
  constructor(val, valid) {
    if (valid && !valid(val)) {
      (0, _errors.illegalState)("initial state value did not validate");
    }

    this._value = val;
    this.valid = valid;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this.reset(val);
  }

  deref() {
    return this._value;
  }

  equiv(o) {
    return this === o;
  }

  reset(val) {
    const old = this._value;

    if (this.valid && !this.valid(val)) {
      return old;
    }

    this._value = val;
    this.notifyWatches(old, val);
    return val;
  }

  resetIn(path, val) {
    return this.reset((0, _paths.setIn)(this._value, path, val));
  }

  swap(fn, ...args) {
    return this.reset(fn.apply(null, [this._value, ...args]));
  }

  swapIn(path, fn, ...args) {
    return this.reset((0, _paths.updateIn)(this._value, path, fn, ...args));
  } // mixin stub

  /* istanbul ignore next */


  addWatch(_, __) {
    return false;
  } // mixin stub

  /* istanbul ignore next */


  removeWatch(_) {
    return false;
  } // mixin stub

  /* istanbul ignore next */


  notifyWatches(_, __) {}

  addView(path, tx, lazy = true) {
    return new _view.View(this, path, tx, lazy);
  }

  release() {
    delete this._watches;
    delete this._value;
    return true;
  }

};
exports.Atom = Atom;
exports.Atom = Atom = __decorate([_api.IWatchMixin], Atom);
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","./view":"../node_modules/@thi.ng/atom/view.js"}],"../node_modules/@thi.ng/atom/cursor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cursor = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _paths = require("@thi.ng/paths");

var _atom = require("./atom");

var _idgen = require("./idgen");

var _view = require("./view");

/**
 * A cursor provides read/write access to a path location within a
 * nested parent state (Atom or another Cursor). Cursors behave like
 * Atoms for all practical purposes, i.e. support `deref()`, `reset()`,
 * `swap()`, `addWatch()` etc. However, when updating a cursor's value,
 * the parent state will be updated at the cursor's path as well (incl.
 * triggering any watches and/or validators) attached to the parent.
 * Likewise, when the parent state is modified externally, the cursor's
 * value will automatically update as well. The update order of cursor's
 * sharing a common parent is undefined, but can be overridden by
 * extending this class with a custom `notifyWatches()` implementation.
 *
 * If creating multiple cursors w/ a shared parent and each cursor
 * configured with a custom ID (provided via config object to ctor),
 * it's the user's responsibility to ensure the given IDs are unique.
 * Cursors are implemented by attaching a watch to the parent and the ID
 * is used to identify each watch.
 *
 * When using the optional validator predicate (also specified via
 * config object to ctor), the cursor's validator MUST NOT conflict with
 * the one assigned to the parent or else both will go out-of-sync.
 * Therefore, when requiring validation and updating values via cursors
 * it's recommended to only specify validators for leaf-level cursors in
 * the hierarchy.
 */
class Cursor {
  constructor(...args) {
    let parent;
    let lookup;
    let update;
    let validate;
    let opts;
    let id;

    switch (args.length) {
      case 1:
        opts = args[0];
        id = opts.id;
        parent = opts.parent;
        validate = opts.validate;

        if (opts.path) {
          if ((0, _checks.isArray)(opts.path) && (0, _checks.isFunction)(opts.path[0])) {
            [lookup, update] = opts.path;
          } else {
            lookup = (0, _paths.getter)(opts.path);
            update = (0, _paths.setter)(opts.path);
          }
        } else {
          (0, _errors.illegalArgs)("missing path config");
        }

        break;

      case 2:
        parent = args[0];
        lookup = (0, _paths.getter)(args[1]);
        update = (0, _paths.setter)(args[1]);
        break;

      case 3:
        [parent, lookup, update] = args;
        break;

      default:
        (0, _errors.illegalArity)(args.length);
    }

    this.parent = parent;
    this.id = id || `cursor-${(0, _idgen.nextID)()}`;
    this.selfUpdate = false;

    if (!lookup || !update) {
      (0, _errors.illegalArgs)();
    }

    this.local = new _atom.Atom(lookup(parent.deref()), validate);
    this.local.addWatch(this.id, (_, prev, curr) => {
      if (prev !== curr) {
        this.selfUpdate = true;
        parent.swap(state => update(state, curr));
        this.selfUpdate = false;
      }
    });
    parent.addWatch(this.id, (_, prev, curr) => {
      if (!this.selfUpdate) {
        const cval = lookup(curr);

        if (cval !== lookup(prev)) {
          this.local.reset(cval);
        }
      }
    });
  }

  get value() {
    return this.deref();
  }

  set value(val) {
    this.reset(val);
  }

  deref() {
    return this.local.deref();
  }

  release() {
    this.local.release();
    this.parent.removeWatch(this.id);
    delete this.local;
    delete this.parent;
    return true;
  }

  reset(val) {
    return this.local.reset(val);
  }

  resetIn(path, val) {
    return this.local.resetIn(path, val);
  }

  swap(fn, ...args) {
    return this.local.swap(fn, ...args);
  }

  swapIn(path, fn, ...args) {
    return this.local.swapIn(path, fn, ...args);
  }

  addWatch(id, fn) {
    return this.local.addWatch(id, fn);
  }

  removeWatch(id) {
    return this.local.removeWatch(id);
  }
  /* istanbul ignore next */


  notifyWatches(oldState, newState) {
    return this.local.notifyWatches(oldState, newState);
  }

  addView(path, tx, lazy = true) {
    return new _view.View(this, path, tx, lazy);
  }

}

exports.Cursor = Cursor;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","./atom":"../node_modules/@thi.ng/atom/atom.js","./idgen":"../node_modules/@thi.ng/atom/idgen.js","./view":"../node_modules/@thi.ng/atom/view.js"}],"../node_modules/@thi.ng/atom/history.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.History = void 0;

var _api = require("@thi.ng/api");

var _equiv = require("@thi.ng/equiv");

var _paths = require("@thi.ng/paths");

var _view = require("./view");

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var History_1;

/**
 * Undo/redo history stack wrapper for atoms and cursors. Implements
 * `IAtom` interface and so can be used directly in place and delegates
 * to wrapped atom/cursor. Value changes are only recorded in history if
 * `changed` predicate returns truthy value, or else by calling
 * `record()` directly. This class too implements the @thi.ng/api
 * `INotify` interface to support event listeners for `undo()`, `redo()`
 * and `record()`.
 */
let History = History_1 = class History {
  /**
   * @param state parent state
   * @param maxLen max size of undo stack
   * @param changed predicate to determine changed values (default `!equiv(a,b)`)
   */
  constructor(state, maxLen = 100, changed) {
    this.state = state;
    this.maxLen = maxLen;

    this.changed = changed || ((a, b) => !(0, _equiv.equiv)(a, b));

    this.clear();
  }

  get value() {
    return this.deref();
  }

  set value(val) {
    this.reset(val);
  }

  canUndo() {
    return this.history.length > 0;
  }

  canRedo() {
    return this.future.length > 0;
  }
  /**
   * Clears history & future stacks
   */


  clear() {
    this.history = [];
    this.future = [];
  }
  /**
   * Attempts to re-apply most recent historical value to atom and
   * returns it if successful (i.e. there's a history). Before the
   * switch, first records the atom's current value into the future
   * stack (to enable `redo()` feature). Returns `undefined` if
   * there's no history.
   *
   * If undo was possible, the `History.EVENT_UNDO` event is emitted
   * after the restoration with both the `prev` and `curr` (restored)
   * states provided as event value (and object with these two keys).
   * This allows for additional state handling to be executed, e.g.
   * application of the "Command pattern". See `addListener()` for
   * registering event listeners.
   */


  undo() {
    if (this.history.length) {
      const prev = this.state.deref();
      this.future.push(prev);
      const curr = this.state.reset(this.history.pop());
      this.notify({
        id: History_1.EVENT_UNDO,
        value: {
          prev,
          curr
        }
      });
      return curr;
    }
  }
  /**
   * Attempts to re-apply most recent value from future stack to atom
   * and returns it if successful (i.e. there's a future). Before the
   * switch, first records the atom's current value into the history
   * stack (to enable `undo()` feature). Returns `undefined` if
   * there's no future (so sad!).
   *
   * If redo was possible, the `History.EVENT_REDO` event is emitted
   * after the restoration with both the `prev` and `curr` (restored)
   * states provided as event value (and object with these two keys).
   * This allows for additional state handling to be executed, e.g.
   * application of the "Command pattern". See `addListener()` for
   * registering event listeners.
   */


  redo() {
    if (this.future.length) {
      const prev = this.state.deref();
      this.history.push(prev);
      const curr = this.state.reset(this.future.pop());
      this.notify({
        id: History_1.EVENT_REDO,
        value: {
          prev,
          curr
        }
      });
      return curr;
    }
  }
  /**
   * `IAtom.reset()` implementation. Delegates to wrapped atom/cursor,
   * but too applies `changed` predicate to determine if there was a
   * change and if the previous value should be recorded.
   *
   * @param val
   */


  reset(val) {
    const prev = this.state.deref();
    this.state.reset(val);
    const changed = this.changed(prev, this.state.deref());

    if (changed) {
      this.record(prev);
    }

    return val;
  }

  resetIn(path, val) {
    const prev = this.state.deref();
    const prevV = (0, _paths.getIn)(prev, path);
    const curr = (0, _paths.setIn)(prev, path, val);
    this.state.reset(curr);
    this.changed(prevV, (0, _paths.getIn)(curr, path)) && this.record(prev);
    return curr;
  }
  /**
   * `IAtom.swap()` implementation. Delegates to wrapped atom/cursor,
   * but too applies `changed` predicate to determine if there was a
   * change and if the previous value should be recorded.
   *
   * @param val
   */


  swap(fn, ...args) {
    return this.reset(fn(this.state.deref(), ...args));
  }

  swapIn(path, fn, ...args) {
    const prev = this.state.deref();
    const prevV = (0, _paths.getIn)(prev, path);
    const curr = (0, _paths.updateIn)(this.state.deref(), path, fn, ...args);
    this.state.reset(curr);
    this.changed(prevV, (0, _paths.getIn)(curr, path)) && this.record(prev);
    return curr;
  }
  /**
   * Records given state in history. This method is only needed when
   * manually managing snapshots, i.e. when applying multiple swaps on
   * the wrapped atom directly, but not wanting to create an history
   * entry for each change. **DO NOT call this explicitly if using
   * `History.reset()` / `History.swap()` etc.**
   *
   * If no `state` is given, uses the wrapped atom's current state
   * value (user code SHOULD always call without arg).
   *
   * If recording succeeded, the `History.EVENT_RECORD` event is
   * emitted with the recorded state provided as event value.
   *
   * @param state
   */


  record(state) {
    const history = this.history;
    const n = history.length;
    let ok = true; // check for arg given and not if `state == null` we want to
    // allow null/undefined as possible values

    if (!arguments.length) {
      state = this.state.deref();
      ok = !n || this.changed(history[n - 1], state);
    }

    if (ok) {
      if (n >= this.maxLen) {
        history.shift();
      }

      history.push(state);
      this.notify({
        id: History_1.EVENT_RECORD,
        value: state
      });
      this.future.length = 0;
    }
  }
  /**
   * Returns wrapped atom's **current** value.
   */


  deref() {
    return this.state.deref();
  }
  /**
   * `IWatch.addWatch()` implementation. Delegates to wrapped
   * atom/cursor.
   *
   * @param id
   * @param fn
   */


  addWatch(id, fn) {
    return this.state.addWatch(id, fn);
  }
  /**
   * `IWatch.removeWatch()` implementation. Delegates to wrapped
   * atom/cursor.
   *
   * @param id
   */


  removeWatch(id) {
    return this.state.removeWatch(id);
  }
  /**
   * `IWatch.notifyWatches()` implementation. Delegates to wrapped
   * atom/cursor.
   *
   * @param oldState
   * @param newState
   */


  notifyWatches(oldState, newState) {
    return this.state.notifyWatches(oldState, newState);
  }

  addView(path, tx, lazy = true) {
    return new _view.View(this, path, tx, lazy);
  }

  release() {
    this.state.release();
    delete this.state;
    return true;
  }

  addListener(_, __, ___) {
    return false;
  }

  removeListener(_, __, ___) {
    return false;
  }

  notify(_) {}

};
exports.History = History;
History.EVENT_UNDO = "undo";
History.EVENT_REDO = "redo";
History.EVENT_RECORD = "record";
exports.History = History = History_1 = __decorate([_api.INotifyMixin], History);
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js","@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","./view":"../node_modules/@thi.ng/atom/view.js"}],"../node_modules/@thi.ng/atom/transacted.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transacted = void 0;

var _api = require("@thi.ng/api");

var _paths = require("@thi.ng/paths");

var _idgen = require("./idgen");

var _view = require("./view");

class Transacted {
  constructor(parent) {
    this.parent = parent;
    this.current = undefined;
    this.isActive = false;
    this.id = `tx${(0, _idgen.nextID)()}-`;
  }

  get value() {
    return this.deref();
  }

  set value(val) {
    this.reset(val);
  }

  get isTransaction() {
    return this.isActive;
  }

  deref() {
    return this.isActive ? this.current : this.parent.deref();
  }

  equiv(o) {
    return this === o;
  }

  reset(val) {
    this.ensureTx();
    this.current = val;
    return val;
  }

  resetIn(path, val) {
    this.ensureTx();
    return this.reset((0, _paths.setIn)(this.current, path, val));
  }

  swap(fn, ...args) {
    this.ensureTx();
    return this.reset(fn.apply(null, [this.current, ...args]));
  }

  swapIn(path, fn, ...args) {
    this.ensureTx();
    return this.reset((0, _paths.updateIn)(this.current, path, fn, ...args));
  }

  begin() {
    (0, _api.assert)(!this.isActive, "transaction already started");
    this.current = this.parent.deref();
    this.isActive = true;
  }

  commit() {
    this.ensureTx();
    const val = this.current;
    this.parent.reset(this.current);
    this.isActive = false;
    this.current = undefined;
    return val;
  }

  cancel() {
    this.ensureTx();
    this.isActive = false;
    this.current = undefined;
  }

  addWatch(id, watch) {
    return this.parent.addWatch(this.id + id, (_, prev, curr) => watch(id, prev, curr));
  }

  removeWatch(id) {
    return this.parent.removeWatch(this.id + id);
  }

  notifyWatches(old, curr) {
    this.parent.notifyWatches(old, curr);
  }

  addView(path, tx, lazy = true) {
    return new _view.View(this, path, tx, lazy);
  }

  release() {
    delete this.parent;
    delete this.current;
    delete this.isActive;
    delete this._watches;
    return true;
  }

  ensureTx() {
    (0, _api.assert)(this.isActive, "no active transaction");
  }

}

exports.Transacted = Transacted;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","./idgen":"../node_modules/@thi.ng/atom/idgen.js","./view":"../node_modules/@thi.ng/atom/view.js"}],"../node_modules/@thi.ng/atom/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _atom = require("./atom");

Object.keys(_atom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _atom[key];
    }
  });
});

var _cursor = require("./cursor");

Object.keys(_cursor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cursor[key];
    }
  });
});

var _history = require("./history");

Object.keys(_history).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _history[key];
    }
  });
});

var _transacted = require("./transacted");

Object.keys(_transacted).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _transacted[key];
    }
  });
});

var _view = require("./view");

Object.keys(_view).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _view[key];
    }
  });
});
},{"./atom":"../node_modules/@thi.ng/atom/atom.js","./cursor":"../node_modules/@thi.ng/atom/cursor.js","./history":"../node_modules/@thi.ng/atom/history.js","./transacted":"../node_modules/@thi.ng/atom/transacted.js","./view":"../node_modules/@thi.ng/atom/view.js"}],"../node_modules/@styled-system/css/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.css = exports.responsive = exports.get = void 0;

var _scales;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
} // based on https://github.com/developit/dlv


var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};

exports.get = get;
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = (_scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles'
}, _scales["borderTopLeftRadius"] = 'radii', _scales["borderTopRightRadius"] = 'radii', _scales.borderBottomWidth = 'borderWidths', _scales.borderBottomColor = 'colors', _scales.borderBottomStyle = 'borderStyles', _scales["borderBottomLeftRadius"] = 'radii', _scales["borderBottomRightRadius"] = 'radii', _scales.borderLeftWidth = 'borderWidths', _scales.borderLeftColor = 'colors', _scales.borderLeftStyle = 'borderStyles', _scales.borderRightWidth = 'borderWidths', _scales.borderRightColor = 'colors', _scales.borderRightStyle = 'borderStyles', _scales.outlineColor = 'colors', _scales.boxShadow = 'shadows', _scales.textShadow = 'shadows', _scales.zIndex = 'zIndices', _scales.width = 'sizes', _scales.minWidth = 'sizes', _scales.maxWidth = 'sizes', _scales.height = 'sizes', _scales.minHeight = 'sizes', _scales.maxHeight = 'sizes', _scales.flexBasis = 'sizes', _scales.size = 'sizes', _scales.fill = 'colors', _scales.stroke = 'colors', _scales);

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var _extends2;

  return _extends({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative, _extends2));
}, {});

var responsive = function responsive(styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
    var mediaQueries = [null].concat(breakpoints.map(function (n) {
      return "@media screen and (min-width: " + n + ")";
    }));

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) continue;

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];
        if (value[i] == null) continue;

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};
        next[media][key] = value[i];
      }
    }

    return next;
  };
};

exports.responsive = responsive;

var css = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {};
    }

    var theme = _extends({}, defaultTheme, {}, props.theme || props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get(theme, val))(theme);
        result = _extends({}, result, {}, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = get(aliases, key, key);
      var scaleName = get(scales, prop);
      var scale = get(theme, scaleName, get(theme, prop, {}));
      var transform = get(transforms, prop, get);
      var value = transform(scale, val, val);

      if (multiples[prop]) {
        var dirs = multiples[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};

exports.css = css;
var _default = css;
exports.default = _default;
},{}],"../node_modules/decamelize/index.js":[function(require,module,exports) {
'use strict';

module.exports = function (str, sep) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  sep = typeof sep === 'undefined' ? '_' : sep;
  return str.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2').toLowerCase();
};
},{}],"../node_modules/map-obj/index.js":[function(require,module,exports) {
'use strict';

module.exports = function (obj, cb) {
  var ret = {};
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var res = cb(key, obj[key], obj);
    ret[res[0]] = res[1];
  }

  return ret;
};
},{}],"../node_modules/decamelize-keys-deep/index.js":[function(require,module,exports) {
var decamelize = require("decamelize");
var mapObj = require("map-obj");

module.exports = function decamelizeKeysDeep(obj, options) {
  // Any falsy, which includes `null` whose typeof is `object`.
  if (!obj) {
    return obj;
  }
  // Date, whose typeof is `object` too.
  if (obj instanceof Date) {
    return obj;
  }
  // Array, whose typeof is `object` too.
  if (Array.isArray(obj)) {
    return obj.map(function(element) {
      return decamelizeKeysDeep(element, options);
    });
  }
  // So, if this is still an `object`, we might be interested in it.
  if (typeof obj === "object") {
    return mapObj(obj, function(key, value) {
      var newKey = decamelize(key, options);
      if (key !== newKey && newKey in obj) {
        throw new Error("Decamelized key `" + newKey + "` would overwrite existing key of the given JSON object");
      }
      return [newKey, decamelizeKeysDeep(value, options)];
    });
  }
  // Something else like a String or Number.
  return obj;
}

},{"decamelize":"../node_modules/decamelize/index.js","map-obj":"../node_modules/map-obj/index.js"}],"../node_modules/@thi.ng/hiccup-css/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PRETTY = exports.COMPACT = exports.DEFAULT_VENDORS = void 0;
const DEFAULT_VENDORS = ["-moz-", "-ms-", "-o-", "-webkit-"];
/**
 * Default format config used by `css()` function.
 * Forms "minimized" CSS without obsolete white space
 * and omits comments unless they were forced.
 */

exports.DEFAULT_VENDORS = DEFAULT_VENDORS;
const COMPACT = {
  rules: "",
  ruleSep: ",",
  valSep: "",
  decls: "",
  declStart: "{",
  declEnd: "}",
  indent: "",
  comments: false
};
/**
 * Pretty printing format config with line breaks
 * and indentation.
 */

exports.COMPACT = COMPACT;
const PRETTY = {
  rules: "\n",
  ruleSep: ", ",
  valSep: " ",
  decls: "\n",
  declStart: " {\n",
  declEnd: "}\n",
  indent: "    ",
  comments: true
};
exports.PRETTY = PRETTY;
},{}],"../node_modules/@thi.ng/transducers/reduced.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unreduced = exports.ensureReduced = exports.isReduced = exports.reduced = exports.Reduced = void 0;

class Reduced {
  constructor(val) {
    this.value = val;
  }

  deref() {
    return this.value;
  }

}

exports.Reduced = Reduced;

const reduced = x => new Reduced(x);

exports.reduced = reduced;

const isReduced = x => x instanceof Reduced;

exports.isReduced = isReduced;

const ensureReduced = x => x instanceof Reduced ? x : new Reduced(x);

exports.ensureReduced = ensureReduced;

const unreduced = x => x instanceof Reduced ? x.deref() : x;

exports.unreduced = unreduced;
},{}],"../node_modules/@thi.ng/transducers/reduce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduce = reduce;
exports.$$reduce = exports.reducer = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _reduced = require("./reduced");

const parseArgs = args => args.length === 2 ? [undefined, args[1]] : args.length === 3 ? [args[1], args[2]] : (0, _errors.illegalArity)(args.length);

function reduce(...args) {
  const rfn = args[0];
  const init = rfn[0];
  const complete = rfn[1];
  const reduce = rfn[2];
  args = parseArgs(args);
  const acc = args[0] == null ? init() : args[0];
  const xs = args[1];
  return (0, _reduced.unreduced)(complete((0, _checks.implementsFunction)(xs, "$reduce") ? xs.$reduce(reduce, acc) : (0, _checks.isArrayLike)(xs) ? reduceArray(reduce, acc, xs) : reduceIterable(reduce, acc, xs)));
}

const reduceArray = (rfn, acc, xs) => {
  for (let i = 0, n = xs.length; i < n; i++) {
    acc = rfn(acc, xs[i]);

    if ((0, _reduced.isReduced)(acc)) {
      acc = acc.deref();
      break;
    }
  }

  return acc;
};

const reduceIterable = (rfn, acc, xs) => {
  for (let x of xs) {
    acc = rfn(acc, x);

    if ((0, _reduced.isReduced)(acc)) {
      acc = acc.deref();
      break;
    }
  }

  return acc;
};
/**
 * Convenience helper for building a full `Reducer` using the identity
 * function (i.e. `(x) => x`) as completion step (true for 90% of all
 * bundled transducers).
 *
 * @param init init step of reducer
 * @param rfn reduction step of reducer
 */


const reducer = (init, rfn) => [init, acc => acc, rfn];

exports.reducer = reducer;

const $$reduce = (rfn, args) => {
  const n = args.length - 1;
  return (0, _checks.isIterable)(args[n]) ? args.length > 1 ? reduce(rfn.apply(null, args.slice(0, n)), args[n]) : reduce(rfn(), args[0]) : undefined;
};

exports.$$reduce = $$reduce;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/rfn/push.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.push = push;

var _reduce = require("../reduce");

function push(xs) {
  return xs ? [...xs] : (0, _reduce.reducer)(() => [], (acc, x) => (acc.push(x), acc));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/iterator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterator = iterator;
exports.iterator1 = iterator1;
exports.$iter = void 0;

var _api = require("@thi.ng/api");

var _checks = require("@thi.ng/checks");

var _reduced = require("./reduced");

var _push = require("./rfn/push");

/**
 * Takes a transducer and input iterable. Returns iterator of
 * transformed results.
 *
 * @param xform
 * @param xs
 */
function* iterator(xform, xs) {
  const rfn = xform((0, _push.push)());
  const complete = rfn[1];
  const reduce = rfn[2];

  for (let x of xs) {
    const y = reduce([], x);

    if ((0, _reduced.isReduced)(y)) {
      yield* (0, _reduced.unreduced)(complete(y.deref()));
      return;
    }

    if (y.length) {
      yield* y;
    }
  }

  yield* (0, _reduced.unreduced)(complete([]));
}
/**
 * Optimized version of `iterator()` for transducers which are
 * guaranteed to:
 *
 * 1) Only produce none or a single result per input
 * 2) Do not require a `completion` reduction step
 *
 * @param xform
 * @param xs
 */


function* iterator1(xform, xs) {
  const reduce = xform([_api.NO_OP, _api.NO_OP, (_, x) => x])[2];

  for (let x of xs) {
    let y = reduce(_api.SEMAPHORE, x);

    if ((0, _reduced.isReduced)(y)) {
      y = (0, _reduced.unreduced)(y.deref());

      if (y !== _api.SEMAPHORE) {
        yield y;
      }

      return;
    }

    if (y !== _api.SEMAPHORE) {
      yield y;
    }
  }
}
/**
 * Helper function used by various transducers to wrap themselves as
 * transforming iterators. Delegates to `iterator1()` by default.
 *
 * @param xform
 * @param args
 * @param impl
 */


const $iter = (xform, args, impl = iterator1) => {
  const n = args.length - 1;
  return (0, _checks.isIterable)(args[n]) ? args.length > 1 ? impl(xform.apply(null, args.slice(0, n)), args[n]) : impl(xform(), args[0]) : undefined;
};

exports.$iter = $iter;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","./reduced":"../node_modules/@thi.ng/transducers/reduced.js","./rfn/push":"../node_modules/@thi.ng/transducers/rfn/push.js"}],"../node_modules/@thi.ng/transducers/func/compr.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compR = void 0;

/**
 * Reducer composition helper. Takes existing reducer `rfn` (a 3-tuple)
 * and a reducing function `fn`. Returns a new reducer tuple of this
 * form:
 *
 * ```
 * [rfn[0], rfn[1], fn]
 * ```
 *
 * `rfn[2]` reduces values of type `B` into an accumulator of type `A`.
 * `fn` accepts values of type `C` and produces interim results of type
 * `B`, which are then (possibly) passed to the "inner" `rfn[2]`
 * function. Therefore the resulting reducer takes inputs of `C` and an
 * accumulator of type `A`.
 *
 * It is assumed that `fn` internally calls `rfn[2]` to pass its own
 * results for further processing by the nested reducer `rfn`.
 *
 * @param rfn
 * @param fn
 */
const compR = (rfn, fn) => [rfn[0], rfn[1], fn];

exports.compR = compR;
},{}],"../node_modules/@thi.ng/transducers/xform/map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function map(fn, src) {
  return src ? (0, _iterator.iterator1)(map(fn), src) : rfn => {
    const r = rfn[2];
    return (0, _compr.compR)(rfn, (acc, x) => r(acc, fn(x)));
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/transduce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transduce = transduce;

var _errors = require("@thi.ng/errors");

var _reduce = require("./reduce");

var _map = require("./xform/map");

function transduce(...args) {
  let acc, xs;

  switch (args.length) {
    case 4:
      xs = args[3];
      acc = args[2];
      break;

    case 3:
      xs = args[2];
      break;

    case 2:
      return (0, _map.map)(x => transduce(args[0], args[1], x));

    default:
      (0, _errors.illegalArity)(args.length);
  }

  return (0, _reduce.reduce)(args[0](args[1]), acc, xs);
}
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./reduce":"../node_modules/@thi.ng/transducers/reduce.js","./xform/map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/run.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _api = require("@thi.ng/api");

var _transduce = require("./transduce");

const NO_OP_REDUCER = [_api.NO_OP, _api.NO_OP, _api.NO_OP];

function run(tx, ...args) {
  if (args.length === 1) {
    (0, _transduce.transduce)(tx, NO_OP_REDUCER, args[0]);
  } else {
    const fx = args[0];
    (0, _transduce.transduce)(tx, [_api.NO_OP, _api.NO_OP, (_, x) => fx(x)], args[1]);
  }
}
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","./transduce":"../node_modules/@thi.ng/transducers/transduce.js"}],"../node_modules/@thi.ng/transducers/step.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.step = void 0;

var _reduced = require("./reduced");

var _push = require("./rfn/push");

/**
 * Single-step transducer execution wrapper.
 * Returns array if transducer produces multiple results
 * and undefined if there was no output. Else returns single
 * result value.
 *
 * Likewise, once a transducer has produced a final / reduced
 * value, all further invocations of the stepper function will
 * return undefined.
 *
 * ```
 * // single result
 * step(map(x => x * 10))(1);
 * // 10
 *
 * // multiple results
 * step(mapcat(x => [x, x + 1, x + 2]))(1)
 * // [ 1, 2, 3 ]
 *
 * // no result
 * f = step(filter((x) => !(x & 1)))
 * f(1); // undefined
 * f(2); // 2
 *
 * // reduced value termination
 * f = step(take(2));
 * f(1); // 1
 * f(1); // 1
 * f(1); // undefined
 * f(1); // undefined
 * ```
 *
 * @param tx
 */
const step = tx => {
  const [_, complete, reduce] = tx((0, _push.push)());
  _;
  let done = false;
  return x => {
    if (!done) {
      let acc = reduce([], x);
      done = (0, _reduced.isReduced)(acc);

      if (done) {
        acc = complete(acc.deref());
      }

      return acc.length === 1 ? acc[0] : acc.length > 0 ? acc : undefined;
    }
  };
};

exports.step = step;
},{"./reduced":"../node_modules/@thi.ng/transducers/reduced.js","./rfn/push":"../node_modules/@thi.ng/transducers/rfn/push.js"}],"../node_modules/@thi.ng/transducers/internal/mathop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__mathop = void 0;

var _reduce = require("../reduce");

const __mathop = (rfn, fn, initDefault, args) => {
  const res = (0, _reduce.$$reduce)(rfn, args);

  if (res !== undefined) {
    return res;
  }

  const init = args[0] || initDefault;
  return (0, _reduce.reducer)(() => init, fn);
};

exports.__mathop = __mathop;
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/add.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;

var _mathop = require("../internal/mathop");

function add(...args) {
  return (0, _mathop.__mathop)(add, (acc, x) => acc + x, 0, args);
}
},{"../internal/mathop":"../node_modules/@thi.ng/transducers/internal/mathop.js"}],"../node_modules/@thi.ng/transducers/rfn/assoc-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assocMap = assocMap;

var _reduce = require("../reduce");

function assocMap(xs) {
  return xs ? (0, _reduce.reduce)(assocMap(), xs) : (0, _reduce.reducer)(() => new Map(), (acc, [k, v]) => acc.set(k, v));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/assoc-obj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assocObj = assocObj;

var _reduce = require("../reduce");

function assocObj(xs) {
  return xs ? (0, _reduce.reduce)(assocObj(), xs) : (0, _reduce.reducer)(() => ({}), (acc, [k, v]) => (acc[k] = v, acc));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/conj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conj = conj;

var _reduce = require("../reduce");

function conj(xs) {
  return xs ? (0, _reduce.reduce)(conj(), xs) : (0, _reduce.reducer)(() => new Set(), (acc, x) => acc.add(x));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/count.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = count;

var _reduce = require("../reduce");

function count(...args) {
  const res = (0, _reduce.$$reduce)(count, args);

  if (res !== undefined) {
    return res;
  }

  let offset = args[0] || 0;
  let step = args[1] || 1;
  return (0, _reduce.reducer)(() => offset, (acc, _) => acc + step);
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/div.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.div = div;

var _reduce = require("../reduce");

function div(init, xs) {
  return xs ? (0, _reduce.reduce)(div(init), xs) : (0, _reduce.reducer)(() => init, (acc, x) => acc / x);
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/every.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.every = every;

var _reduce = require("../reduce");

var _reduced = require("../reduced");

function every(...args) {
  const res = (0, _reduce.$$reduce)(every, args);

  if (res !== undefined) {
    return res;
  }

  const pred = args[0];
  return (0, _reduce.reducer)(() => true, pred ? (acc, x) => pred(x) ? acc : (0, _reduced.reduced)(false) : (acc, x) => x ? acc : (0, _reduced.reduced)(false));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/rfn/fill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fill = fill;
exports.fillN = fillN;

var _reduce = require("../reduce");

function fill(...args) {
  const res = (0, _reduce.$$reduce)(fill, args);

  if (res !== undefined) {
    return res;
  }

  let start = args[0] || 0;
  return (0, _reduce.reducer)(() => [], (acc, x) => (acc[start++] = x, acc));
}

function fillN(...args) {
  return fill(...args);
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/compose/comp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comp = comp;
exports.compL = compL;
exports.compI = void 0;

var _errors = require("@thi.ng/errors");

function comp(...fns) {
  let [a, b, c, d, e, f, g, h, i, j] = fns;

  switch (fns.length) {
    case 0:
      (0, _errors.illegalArity)(0);

    case 1:
      return a;

    case 2:
      return (...xs) => a(b(...xs));

    case 3:
      return (...xs) => a(b(c(...xs)));

    case 4:
      return (...xs) => a(b(c(d(...xs))));

    case 5:
      return (...xs) => a(b(c(d(e(...xs)))));

    case 6:
      return (...xs) => a(b(c(d(e(f(...xs))))));

    case 7:
      return (...xs) => a(b(c(d(e(f(g(...xs)))))));

    case 8:
      return (...xs) => a(b(c(d(e(f(g(h(...xs))))))));

    case 9:
      return (...xs) => a(b(c(d(e(f(g(h(i(...xs)))))))));

    case 10:
    default:
      const fn = (...xs) => a(b(c(d(e(f(g(h(i(j(...xs))))))))));

      return fns.length === 10 ? fn : comp(fn, ...fns.slice(10));
  }
}

function compL(...fns) {
  return comp.apply(null, fns.reverse());
}
/**
 * @deprecated renamed to `compL`
 */


const compI = compL;
exports.compI = compI;
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js"}],"../node_modules/@thi.ng/compose/complement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.complement = complement;

function complement(f) {
  return (...xs) => !f(...xs);
}
},{}],"../node_modules/@thi.ng/compose/constantly.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constantly = void 0;

const constantly = x => () => x;

exports.constantly = constantly;
},{}],"../node_modules/@thi.ng/compose/delay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Delay = exports.delay = void 0;

const delay = body => new Delay(body);

exports.delay = delay;

class Delay {
  constructor(body) {
    this.body = body;
    this.realized = false;
  }

  deref() {
    if (!this.realized) {
      this.value = this.body();
      this.realized = true;
    }

    return this.value;
  }

  isRealized() {
    return this.realized;
  }

}

exports.Delay = Delay;
},{}],"../node_modules/@thi.ng/compose/delayed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayed = void 0;

const delayed = (x, t) => new Promise(resolve => setTimeout(() => resolve(x), t));

exports.delayed = delayed;
},{}],"../node_modules/@thi.ng/compose/identity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = void 0;

const identity = x => x;

exports.identity = identity;
},{}],"../node_modules/@thi.ng/compose/ifdef.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ifDef = void 0;

/**
 * Returns f(x) iff `x` is not null or undefined.
 *
 * @param f
 * @param x
 */
const ifDef = (f, x) => x != null ? f(x) : undefined;

exports.ifDef = ifDef;
},{}],"../node_modules/@thi.ng/compose/juxt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.juxt = juxt;

function juxt(...fns) {
  const [a, b, c, d, e, f, g, h] = fns;

  switch (fns.length) {
    case 1:
      return x => [a(x)];

    case 2:
      return x => [a(x), b(x)];

    case 3:
      return x => [a(x), b(x), c(x)];

    case 4:
      return x => [a(x), b(x), c(x), d(x)];

    case 5:
      return x => [a(x), b(x), c(x), d(x), e(x)];

    case 6:
      return x => [a(x), b(x), c(x), d(x), e(x), f(x)];

    case 7:
      return x => [a(x), b(x), c(x), d(x), e(x), f(x), g(x)];

    case 8:
      return x => [a(x), b(x), c(x), d(x), e(x), f(x), g(x), h(x)];

    default:
      return x => {
        let res = new Array(fns.length);

        for (let i = fns.length; --i >= 0;) {
          res[i] = fns[i](x);
        }

        return res;
      };
  }
}
},{}],"../node_modules/@thi.ng/compose/partial.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partial = partial;
exports.foo = void 0;

var _errors = require("@thi.ng/errors");

function partial(fn, ...args) {
  let [a, b, c, d, e, f, g, h] = args;

  switch (args.length) {
    case 1:
      return (...xs) => fn(a, ...xs);

    case 2:
      return (...xs) => fn(a, b, ...xs);

    case 3:
      return (...xs) => fn(a, b, c, ...xs);

    case 4:
      return (...xs) => fn(a, b, c, d, ...xs);

    case 5:
      return (...xs) => fn(a, b, c, d, e, ...xs);

    case 6:
      return (...xs) => fn(a, b, c, d, e, f, ...xs);

    case 7:
      return (...xs) => fn(a, b, c, d, e, f, g, ...xs);

    case 8:
      return (...xs) => fn(a, b, c, d, e, f, g, h, ...xs);

    default:
      (0, _errors.illegalArgs)();
  }
}

const foo = partial((a, b) => a + b, "a");
exports.foo = foo;
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js"}],"../node_modules/@thi.ng/compose/thread-first.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.threadFirst = void 0;

/**
 * Takes an `init` value and a number of functions and/or function
 * tuples, consisting of: `[fn, ...args]`. Executes each function
 * (or tuple) with the return value of the previous expression inserted
 * as first argument, using `init` for the first expression.
 *
 * ```
 * const neg = (x) => -x;
 * const sub = (a, b) => a - b;
 * const div = (a, b) => a / b;
 *
 * threadFirst(
 *   5,
 *   neg,       // -5
 *   [sub, 20], // -5 - 20 = -25
 *   [div, 10]  // -25 / 10 = -2.5
 * );
 *
 * // -2.5
 * ```
 *
 * @see threadLast
 *
 * @param init
 * @param fns
 */
const threadFirst = (init, ...fns) => fns.reduce((acc, expr) => typeof expr === "function" ? expr(acc) : expr[0](acc, ...expr.slice(1)), init);

exports.threadFirst = threadFirst;
},{}],"../node_modules/@thi.ng/compose/thread-last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.threadLast = void 0;

/**
 * Takes an `init` value and a number of functions and/or function
 * tuples, consisting of: `[fn, ...args]`. Executes each function
 * (or tuple) with the return value of the previous expression inserted
 * as last argument, using `init` for the first expression.
 *
 * ```
 * const neg = (x) => -x;
 * const sub = (a, b) => a - b;
 * const div = (a, b) => a / b;
 *
 * threadLast(
 *   5,
 *   neg,       // -5
 *   [sub, 10], // 20 - (-5) = 25
 *   [div, 10]  // 10 / 25 = 0.4
 * );
 *
 * // 0.4
 * ```
 *
 * @see threadFirst
 *
 * @param init
 * @param fns
 */
const threadLast = (init, ...fns) => fns.reduce((acc, expr) => typeof expr === "function" ? expr(acc) : expr[0](...expr.slice(1), acc), init);

exports.threadLast = threadLast;
},{}],"../node_modules/@thi.ng/compose/trampoline.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trampoline = void 0;

/**
 * Takes a function returning either a no-arg function (thunk) or its
 * already realized (non-function) result. Re-executes thunk for as long
 * as it returns another function/thunk. Once a non-function result has
 * been produced, `trampoline` returns that value itself. If the final
 * result should be function, it needs to wrapped (e.g. as a 1-elem
 * array).
 *
 * This function should be used for non-stack consuming recursion. I.e.
 * a trampoline is a form of continuation passing style and only ever
 * consumes max. 2 extra stack frames, independent from recursion depth.
 *
 * ```
 * const countdown = (acc, x) =>
 *   x >= 0 ?
 *     () => (acc.push(x), countdown(acc, x-1)) :
 *     acc;
 *
 * trampoline(countdown([], 4))
 * // [ 4, 3, 2, 1, 0 ]
 *
 * trampoline(countdown([], -1))
 * // []
 * ```
 *
 * @param f
 */
const trampoline = f => {
  while (typeof f === "function") {
    f = f();
  }

  return f;
};

exports.trampoline = trampoline;
},{}],"../node_modules/@thi.ng/compose/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _comp = require("./comp");

Object.keys(_comp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _comp[key];
    }
  });
});

var _complement = require("./complement");

Object.keys(_complement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _complement[key];
    }
  });
});

var _constantly = require("./constantly");

Object.keys(_constantly).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constantly[key];
    }
  });
});

var _delay = require("./delay");

Object.keys(_delay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _delay[key];
    }
  });
});

var _delayed = require("./delayed");

Object.keys(_delayed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _delayed[key];
    }
  });
});

var _identity = require("./identity");

Object.keys(_identity).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _identity[key];
    }
  });
});

var _ifdef = require("./ifdef");

Object.keys(_ifdef).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ifdef[key];
    }
  });
});

var _juxt = require("./juxt");

Object.keys(_juxt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _juxt[key];
    }
  });
});

var _partial = require("./partial");

Object.keys(_partial).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partial[key];
    }
  });
});

var _threadFirst = require("./thread-first");

Object.keys(_threadFirst).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _threadFirst[key];
    }
  });
});

var _threadLast = require("./thread-last");

Object.keys(_threadLast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _threadLast[key];
    }
  });
});

var _trampoline = require("./trampoline");

Object.keys(_trampoline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _trampoline[key];
    }
  });
});
},{"./comp":"../node_modules/@thi.ng/compose/comp.js","./complement":"../node_modules/@thi.ng/compose/complement.js","./constantly":"../node_modules/@thi.ng/compose/constantly.js","./delay":"../node_modules/@thi.ng/compose/delay.js","./delayed":"../node_modules/@thi.ng/compose/delayed.js","./identity":"../node_modules/@thi.ng/compose/identity.js","./ifdef":"../node_modules/@thi.ng/compose/ifdef.js","./juxt":"../node_modules/@thi.ng/compose/juxt.js","./partial":"../node_modules/@thi.ng/compose/partial.js","./thread-first":"../node_modules/@thi.ng/compose/thread-first.js","./thread-last":"../node_modules/@thi.ng/compose/thread-last.js","./trampoline":"../node_modules/@thi.ng/compose/trampoline.js"}],"../node_modules/@thi.ng/transducers/internal/group-opts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__groupByOpts = void 0;

var _compose = require("@thi.ng/compose");

var _push = require("../rfn/push");

/**
 * Shared helper function for groupBy* reducers
 *
 * @param opts
 */
const __groupByOpts = opts => Object.assign({
  key: _compose.identity,
  group: (0, _push.push)()
}, opts);

exports.__groupByOpts = __groupByOpts;
},{"@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js","../rfn/push":"../node_modules/@thi.ng/transducers/rfn/push.js"}],"../node_modules/@thi.ng/transducers/rfn/group-by-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupByMap = groupByMap;

var _groupOpts = require("../internal/group-opts");

var _reduce = require("../reduce");

function groupByMap(...args) {
  const res = (0, _reduce.$$reduce)(groupByMap, args);

  if (res !== undefined) {
    return res;
  }

  const opts = (0, _groupOpts.__groupByOpts)(args[0]);
  const [init, _, reduce] = opts.group;
  _; // ignore

  return (0, _reduce.reducer)(() => new Map(), (acc, x) => {
    const k = opts.key(x);
    return acc.set(k, acc.has(k) ? reduce(acc.get(k), x) : reduce(init(), x));
  });
}
},{"../internal/group-opts":"../node_modules/@thi.ng/transducers/internal/group-opts.js","../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/frequencies.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frequencies = frequencies;

var _compose = require("@thi.ng/compose");

var _reduce = require("../reduce");

var _count = require("./count");

var _groupByMap = require("./group-by-map");

function frequencies(...args) {
  return (0, _reduce.$$reduce)(frequencies, args) || (0, _groupByMap.groupByMap)({
    key: args[0] || _compose.identity,
    group: (0, _count.count)()
  });
}
},{"@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js","../reduce":"../node_modules/@thi.ng/transducers/reduce.js","./count":"../node_modules/@thi.ng/transducers/rfn/count.js","./group-by-map":"../node_modules/@thi.ng/transducers/rfn/group-by-map.js"}],"../node_modules/@thi.ng/transducers/rfn/group-by-obj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupByObj = groupByObj;

var _groupOpts = require("../internal/group-opts");

var _reduce2 = require("../reduce");

function groupByObj(...args) {
  const res = (0, _reduce2.$$reduce)(groupByObj, args);

  if (res) {
    return res;
  }

  const opts = (0, _groupOpts.__groupByOpts)(args[0]);
  const [_init, _, _reduce] = opts.group;
  _; // ignore

  return (0, _reduce2.reducer)(() => ({}), (acc, x) => {
    const k = opts.key(x);
    acc[k] = acc[k] ? _reduce(acc[k], x) : _reduce(_init(), x);
    return acc;
  });
}
},{"../internal/group-opts":"../node_modules/@thi.ng/transducers/internal/group-opts.js","../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/group-binary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupBinary = void 0;

var _groupByObj = require("./group-by-obj");

var _push = require("./push");

const branchPred = (key, b, l, r) => x => key(x) & b ? r : l;
/**
 * Creates a bottom-up, unbalanced binary tree of desired depth and
 * choice of data structures. Any value can be indexed, as long as a
 * numeric representation (key) can be obtained. This numeric key is
 * produced by the supplied `key` function. IMPORTANT: the returned
 * values MUST be unsigned and less than the provided bit length (i.e.
 * `0 .. (2^bits) - 1` range).
 *
 * By default the tree is constructed using plain objects for branches,
 * with left branches stored as "l" and right ones as "r". The original
 * values are stored at the lowest tree level using a customizable
 * nested reducer. By default leaves are collected in arrays (using the
 * `push()` reducer), but any suitable reducer can be used (e.g.
 * `conj()` to collect values into sets).
 *
 * Index by lowest 4-bits of ID value:
 *
 * ```
 * tree = reduce(
 *   groupBinary(4, x => x.id & 0xf),
 *   [{id: 3}, {id: 8}, {id: 15}, {id: 0}]
 * )
 *
 * tree.l.l.l.l
 * // [ { id: 0 } ]
 * tree.r.r.r.r
 * // [ { id: 15 } ]
 * tree.l.l.r.r
 * // [ { id: 3 } ]
 * ```
 *
 * Collecting as array:
 *
 * ```
 * tree = reduce(
 *   groupBinary(4, identity, ()=>[], push(), 0, 1),
 *   [1,2,3,4,5,6,7]
 * )
 *
 * tree[0][1][0][1] // 0101 == 5 in binary
 * // [ 5 ]
 *
 * tree[0][1][1]    // 011* == branch
 * // [ [ 6 ], [ 7 ] ]
 * ```
 *
 * Using `frequencies` as leaf reducer:
 *
 * ```
 * tree = reduce(
 *   groupBinary(3, (x: string) => x.length, null, frequencies()),
 *   "aa bbb dddd ccccc bbb eeee fff".split(" ")
 * )
 * // [ [ undefined,
 * //     [ Map { 'aa' => 1 },
 * //       Map { 'bbb' => 2, 'fff' => 1 } ] ],
 * //   [ [ Map { 'dddd' => 1, 'eeee' => 1 },
 * //       Map { 'ccccc' => 1 } ] ] ]
 *
 * tree[0][1][1]
 * // Map { 'bbb' => 2, 'fff' => 1 }
 * ```
 *
 * @param bits index range (always from 0)
 * @param key key function
 * @param branch function to create a new branch container (object or
 * array)
 * @param leaf reducer for leaf collection
 * @param left key for storing left branches (e.g. `0` for arrays)
 * @param right key for storing right branches (e.g. `1` for arrays)
 */


const groupBinary = (bits, key, branch, leaf, left = "l", right = "r") => {
  const init = branch || (() => ({}));

  let rfn = (0, _groupByObj.groupByObj)({
    key: branchPred(key, 1, left, right),
    group: leaf || (0, _push.push)()
  });

  for (let i = 2, maxIndex = 1 << bits; i < maxIndex; i <<= 1) {
    rfn = (0, _groupByObj.groupByObj)({
      key: branchPred(key, i, left, right),
      group: [init, rfn[1], rfn[2]]
    });
  }

  return [init, rfn[1], rfn[2]];
};

exports.groupBinary = groupBinary;
},{"./group-by-obj":"../node_modules/@thi.ng/transducers/rfn/group-by-obj.js","./push":"../node_modules/@thi.ng/transducers/rfn/push.js"}],"../node_modules/@thi.ng/transducers/rfn/last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = last;

var _api = require("@thi.ng/api");

var _reduce = require("../reduce");

function last(xs) {
  return xs ? (0, _reduce.reduce)(last(), xs) : (0, _reduce.reducer)(_api.NO_OP, (_, x) => x);
}
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/compare/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareNumDesc = exports.compareNumAsc = exports.compare = void 0;

const compare = (a, b) => {
  if (a === b) {
    return 0;
  }

  if (a == null) {
    return b == null ? 0 : -1;
  }

  if (b == null) {
    return a == null ? 0 : 1;
  }

  if (typeof a.compare === "function") {
    return a.compare(b);
  }

  if (typeof b.compare === "function") {
    return -b.compare(a);
  }

  return a < b ? -1 : a > b ? 1 : 0;
};
/**
 * Numeric comparator (ascending order)
 *
 * @param a
 * @param b
 */


exports.compare = compare;

const compareNumAsc = (a, b) => a - b;
/**
 * Numeric comparator (descending order)
 *
 * @param a
 * @param b
 */


exports.compareNumAsc = compareNumAsc;

const compareNumDesc = (a, b) => b - a;

exports.compareNumDesc = compareNumDesc;
},{}],"../node_modules/@thi.ng/transducers/rfn/max-compare.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxCompare = maxCompare;

var _compare = require("@thi.ng/compare");

var _reduce = require("../reduce");

function maxCompare(...args) {
  const res = (0, _reduce.$$reduce)(maxCompare, args);

  if (res !== undefined) {
    return res;
  }

  const init = args[0];
  const cmp = args[1] || _compare.compare;
  return (0, _reduce.reducer)(init, (acc, x) => cmp(acc, x) >= 0 ? acc : x);
}
},{"@thi.ng/compare":"../node_modules/@thi.ng/compare/index.js","../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/max.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.max = max;

var _reduce = require("../reduce");

function max(xs) {
  return xs ? (0, _reduce.reduce)(max(), xs) : (0, _reduce.reducer)(() => -Infinity, (acc, x) => Math.max(acc, x));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/mean.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mean = mean;

var _reduce = require("../reduce");

function mean(xs) {
  let n = 1;
  return xs ? (0, _reduce.reduce)(mean(), xs) : [() => n = 0, acc => n > 1 ? acc / n : acc, (acc, x) => (n++, acc + x)];
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/min-compare.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minCompare = minCompare;

var _compare = require("@thi.ng/compare");

var _reduce = require("../reduce");

function minCompare(...args) {
  const res = (0, _reduce.$$reduce)(minCompare, args);

  if (res !== undefined) {
    return res;
  }

  const init = args[0];
  const cmp = args[1] || _compare.compare;
  return (0, _reduce.reducer)(init, (acc, x) => cmp(acc, x) <= 0 ? acc : x);
}
},{"@thi.ng/compare":"../node_modules/@thi.ng/compare/index.js","../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.min = min;

var _reduce = require("../reduce");

function min(xs) {
  return xs ? (0, _reduce.reduce)(min(), xs) : (0, _reduce.reducer)(() => Infinity, (acc, x) => Math.min(acc, x));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/mul.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mul = mul;

var _mathop = require("../internal/mathop");

function mul(...args) {
  return (0, _mathop.__mathop)(mul, (acc, x) => acc * x, 1, args);
}
},{"../internal/mathop":"../node_modules/@thi.ng/transducers/internal/mathop.js"}],"../node_modules/@thi.ng/transducers/rfn/push-copy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushCopy = void 0;

var _reduce = require("../reduce");

const pushCopy = () => (0, _reduce.reducer)(() => [], (acc, x) => ((acc = acc.slice()).push(x), acc));

exports.pushCopy = pushCopy;
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/reductions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reductions = reductions;

var _reduce2 = require("../reduce");

var _reduced = require("../reduced");

function reductions(rfn, xs) {
  const [init, complete, _reduce] = rfn;
  return xs ? (0, _reduce2.reduce)(reductions(rfn), xs) : [() => [init()], acc => (acc[acc.length - 1] = complete(acc[acc.length - 1]), acc), (acc, x) => {
    const res = _reduce(acc[acc.length - 1], x);

    if ((0, _reduced.isReduced)(res)) {
      acc.push(res.deref());
      return (0, _reduced.reduced)(acc);
    }

    acc.push(res);
    return acc;
  }];
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/rfn/some.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.some = some;

var _reduce = require("../reduce");

var _reduced = require("../reduced");

function some(...args) {
  const res = (0, _reduce.$$reduce)(some, args);

  if (res !== undefined) {
    return res;
  }

  const pred = args[0];
  return (0, _reduce.reducer)(() => false, pred ? (acc, x) => pred(x) ? (0, _reduced.reduced)(true) : acc : (acc, x) => x ? (0, _reduced.reduced)(true) : acc);
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/rfn/str.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.str = str;

var _reduce = require("../reduce");

function str(sep, xs) {
  sep = sep || "";
  let first = true;
  return xs ? [...xs].join(sep) : (0, _reduce.reducer)(() => "", (acc, x) => (acc = first ? acc + x : acc + sep + x, first = false, acc));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/sub.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub = sub;

var _mathop = require("../internal/mathop");

function sub(...args) {
  return (0, _mathop.__mathop)(sub, (acc, x) => acc - x, 0, args);
}
},{"../internal/mathop":"../node_modules/@thi.ng/transducers/internal/mathop.js"}],"../node_modules/@thi.ng/transducers/xform/benchmark.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.benchmark = benchmark;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function benchmark(src) {
  return src ? (0, _iterator.iterator1)(benchmark(), src) : rfn => {
    const r = rfn[2];
    let prev = Date.now();
    return (0, _compr.compR)(rfn, (acc, _) => {
      const t = Date.now();
      const x = t - prev;
      prev = t;
      return r(acc, x);
    });
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/cat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cat = void 0;

var _compr = require("../func/compr");

var _reduced = require("../reduced");

/**
 * Transducer to concatenate iterable values. Iterates over each input
 * and emits individual values down stream, therefore removing one level
 * of nesting from the input. If, during processing, the transducer is
 * given a wrapped `reduced()` input iterable, it will still be
 * processed as normal, but then immediately triggers early termination
 * by wrapping its own result in `reduced()`. E.g. this behavior allows
 * a `mapcat()` user functions to benefit from `reduced` results.
 *
 * ```
 * [...iterator(comp(map((x) => [x, x]), cat()), [1, 2, 3, 4])]
 * // [ 1, 1, 2, 2, 3, 3, 4, 4 ]
 *
 * [...iterator(
 *   comp(
 *     mapIndexed((i, x) => [[i], [x, x]]),
 *     cat(),
 *     cat()
 *   ),
 *   "abc"
 * )]
 * // [ 0, 'a', 'a', 1, 'b', 'b', 2, 'c', 'c' ]
 *
 * [...mapcat((x)=>(x > 1 ? reduced([x, x]) : [x, x]), [1, 2, 3, 4])]
 * // [ 1, 1, 2, 2 ]
 * ```
 *
 * @see thi.ng/transducers/iter/concat
 * @see thi.ng/transducers/xform/mapcat
 */
const cat = () => rfn => {
  const r = rfn[2];
  return (0, _compr.compR)(rfn, (acc, x) => {
    if (x) {
      for (let y of (0, _reduced.unreduced)(x)) {
        acc = r(acc, y);

        if ((0, _reduced.isReduced)(acc)) {
          break;
        }
      }
    }

    return (0, _reduced.isReduced)(x) ? (0, _reduced.ensureReduced)(acc) : acc;
  });
};

exports.cat = cat;
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/converge.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.converge = converge;

var _api = require("@thi.ng/api");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function converge(...args) {
  return (0, _iterator.$iter)(converge, args) || (rfn => {
    const r = rfn[2];
    const pred = args[0];
    let prev = _api.SEMAPHORE;
    let done = false;
    return (0, _compr.compR)(rfn, (acc, x) => {
      if (done || prev !== _api.SEMAPHORE && pred(prev, x)) {
        done = true;
        return (0, _reduced.ensureReduced)(r(acc, x));
      }

      prev = x;
      return r(acc, x);
    });
  });
}
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/iter/range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
exports.Range = void 0;

var _reduced = require("../reduced");

function range(from, to, step) {
  return new Range(from, to, step);
}
/**
 * Simple class wrapper around given range interval and implementing
 * `Iterable` and `IReducible` interfaces, the latter is used to
 * accelerate use with `reduce`.
 */


class Range {
  constructor(from, to, step) {
    if (from === undefined) {
      from = 0;
      to = Infinity;
    } else if (to === undefined) {
      to = from;
      from = 0;
    }

    step = step === undefined ? from < to ? 1 : -1 : step;
    this.from = from;
    this.to = to;
    this.step = step;
  }

  *[Symbol.iterator]() {
    const step = this.step;
    const to = this.to;
    let from = this.from;

    if (step > 0) {
      while (from < to) {
        yield from;
        from += step;
      }
    } else if (step < 0) {
      while (from > to) {
        yield from;
        from += step;
      }
    }
  }

  $reduce(rfn, acc) {
    const step = this.step;

    if (step > 0) {
      for (let i = this.from, n = this.to; i < n && !(0, _reduced.isReduced)(acc); i += step) {
        acc = rfn(acc, i);
      }
    } else {
      for (let i = this.from, n = this.to; i > n && !(0, _reduced.isReduced)(acc); i += step) {
        acc = rfn(acc, i);
      }
    }

    return acc;
  }

}

exports.Range = Range;
},{"../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/iter/range2d.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range2d = range2d;

var _errors = require("@thi.ng/errors");

var _range = require("./range");

function* range2d(...args) {
  let fromX, toX, stepX;
  let fromY, toY, stepY;

  switch (args.length) {
    case 6:
      stepX = args[4];
      stepY = args[5];

    case 4:
      [fromX, toX, fromY, toY] = args;
      break;

    case 2:
      [toX, toY] = args;
      fromX = fromY = 0;
      break;

    default:
      (0, _errors.illegalArity)(args.length);
  }

  const rx = (0, _range.range)(fromX, toX, stepX);

  for (let y of (0, _range.range)(fromY, toY, stepY)) {
    for (let x of rx) {
      yield [x, y];
    }
  }
}
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./range":"../node_modules/@thi.ng/transducers/iter/range.js"}],"../node_modules/@thi.ng/transducers/iter/zip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;

function* zip(...src) {
  const iters = src.map(s => s[Symbol.iterator]());

  while (true) {
    const tuple = [];

    for (let i of iters) {
      let v = i.next();

      if (v.done) {
        return;
      }

      tuple.push(v.value);
    }

    yield tuple;
  }
}
},{}],"../node_modules/@thi.ng/transducers/xform/convolve.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convolve1d = convolve1d;
exports.convolve2d = convolve2d;
exports.buildKernel2d = exports.buildKernel1d = void 0;

var _errors = require("@thi.ng/errors");

var _range = require("../iter/range");

var _range2d = require("../iter/range2d");

var _zip = require("../iter/zip");

var _iterator = require("../iterator");

var _add = require("../rfn/add");

var _transduce = require("../transduce");

var _map = require("./map");

const buildKernel1d = (weights, w) => {
  const w2 = w >> 1;
  return [...(0, _zip.zip)(weights, (0, _range.range)(-w2, w2 + 1))];
};

exports.buildKernel1d = buildKernel1d;

const buildKernel2d = (weights, w, h) => {
  const w2 = w >> 1;
  const h2 = h >> 1;
  return [...(0, _zip.zip)(weights, (0, _range2d.range2d)(-w2, w2 + 1, -h2, h2 + 1))];
};

exports.buildKernel2d = buildKernel2d;

const kernelLookup1d = (src, x, width, wrap, border) => wrap ? ({
  0: w,
  1: ox
}) => {
  const xx = x < -ox ? width + ox : x >= width - ox ? ox - 1 : x + ox;
  return w * src[xx];
} : ({
  0: w,
  1: ox
}) => {
  return x < -ox || x >= width - ox ? border : w * src[x + ox];
};

const kernelLookup2d = (src, x, y, width, height, wrap, border) => wrap ? ({
  0: w,
  1: {
    0: ox,
    1: oy
  }
}) => {
  const xx = x < -ox ? width + ox : x >= width - ox ? ox - 1 : x + ox;
  const yy = y < -oy ? height + oy : y >= height - oy ? oy - 1 : y + oy;
  return w * src[yy * width + xx];
} : ({
  0: w,
  1: {
    0: ox,
    1: oy
  }
}) => {
  return x < -ox || y < -oy || x >= width - ox || y >= height - oy ? border : w * src[(y + oy) * width + x + ox];
};

const kernelError = () => (0, _errors.illegalArgs)(`no kernel or kernel config`);

function convolve1d(opts, indices) {
  if (indices) {
    return (0, _iterator.iterator1)(convolve1d(opts), indices);
  }

  const {
    src,
    width
  } = opts;
  const wrap = opts.wrap !== false;
  const border = opts.border || 0;
  const rfn = opts.reduce || _add.add;
  let kernel = opts.kernel;

  if (!kernel) {
    !(opts.weights && opts.kwidth) && kernelError();
    kernel = buildKernel1d(opts.weights, opts.kwidth);
  }

  return (0, _map.map)(p => (0, _transduce.transduce)((0, _map.map)(kernelLookup1d(src, p, width, wrap, border)), rfn(), kernel));
}

function convolve2d(opts, indices) {
  if (indices) {
    return (0, _iterator.iterator1)(convolve2d(opts), indices);
  }

  const {
    src,
    width,
    height
  } = opts;
  const wrap = opts.wrap !== false;
  const border = opts.border || 0;
  const rfn = opts.reduce || _add.add;
  let kernel = opts.kernel;

  if (!kernel) {
    !(opts.weights && opts.kwidth && opts.kheight) && kernelError();
    kernel = buildKernel2d(opts.weights, opts.kwidth, opts.kheight);
  }

  return (0, _map.map)(p => (0, _transduce.transduce)((0, _map.map)(kernelLookup2d(src, p[0], p[1], width, height, wrap, border)), rfn(), kernel));
}
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","../iter/range":"../node_modules/@thi.ng/transducers/iter/range.js","../iter/range2d":"../node_modules/@thi.ng/transducers/iter/range2d.js","../iter/zip":"../node_modules/@thi.ng/transducers/iter/zip.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../rfn/add":"../node_modules/@thi.ng/transducers/rfn/add.js","../transduce":"../node_modules/@thi.ng/transducers/transduce.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/dedupe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dedupe = dedupe;

var _api = require("@thi.ng/api");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function dedupe(...args) {
  return (0, _iterator.$iter)(dedupe, args) || (rfn => {
    const r = rfn[2];
    const equiv = args[0];
    let prev = _api.SEMAPHORE;
    return (0, _compr.compR)(rfn, equiv ? (acc, x) => {
      acc = prev !== _api.SEMAPHORE && equiv(prev, x) ? acc : r(acc, x);
      prev = x;
      return acc;
    } : (acc, x) => {
      acc = prev === x ? acc : r(acc, x);
      prev = x;
      return acc;
    });
  });
}
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/delayed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayed = void 0;

var _compose = require("@thi.ng/compose");

var _map = require("./map");

/**
 * Yields transducer which wraps incoming values in promises, which each
 * resolve after specified delay time (in ms).
 *
 * **Only to be used in async contexts and NOT with `transduce`
 * directly.**
 *
 * @param t
 */
const delayed = t => (0, _map.map)(x => (0, _compose.delayed)(x, t));

exports.delayed = delayed;
},{"@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/distinct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinct = distinct;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function distinct(...args) {
  return (0, _iterator.$iter)(distinct, args) || (rfn => {
    const r = rfn[2];
    const opts = args[0] || {};
    const key = opts.key;

    const seen = (opts.cache || (() => new Set()))();

    return (0, _compr.compR)(rfn, key ? (acc, x) => {
      const k = key(x);
      return !seen.has(k) ? (seen.add(k), r(acc, x)) : acc;
    } : (acc, x) => !seen.has(x) ? (seen.add(x), r(acc, x)) : acc);
  });
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/throttle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function throttle(pred, src) {
  return src ? (0, _iterator.iterator1)(throttle(pred), src) : rfn => {
    const r = rfn[2];

    const _pred = pred();

    return (0, _compr.compR)(rfn, (acc, x) => _pred(x) ? r(acc, x) : acc);
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/drop-nth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropNth = dropNth;

var _throttle = require("./throttle");

var _iterator = require("../iterator");

function dropNth(n, src) {
  if (src) {
    return (0, _iterator.iterator1)(dropNth(n), src);
  }

  n = Math.max(0, n - 1);
  return (0, _throttle.throttle)(() => {
    let skip = n;
    return () => skip-- > 0 ? true : (skip = n, false);
  });
}
},{"./throttle":"../node_modules/@thi.ng/transducers/xform/throttle.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/drop-while.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropWhile = dropWhile;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function dropWhile(...args) {
  return (0, _iterator.$iter)(dropWhile, args) || (rfn => {
    const r = rfn[2];
    const pred = args[0];
    let ok = true;
    return (0, _compr.compR)(rfn, (acc, x) => (ok = ok && pred(x)) ? acc : r(acc, x));
  });
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/drop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drop = drop;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function drop(n, src) {
  return src ? (0, _iterator.iterator1)(drop(n), src) : rfn => {
    const r = rfn[2];
    let m = n;
    return (0, _compr.compR)(rfn, (acc, x) => m > 0 ? (m--, acc) : r(acc, x));
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/duplicate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicate = duplicate;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function duplicate(n = 1, src) {
  return src ? (0, _iterator.iterator)(duplicate(n), src) : rfn => {
    const r = rfn[2];
    return (0, _compr.compR)(rfn, (acc, x) => {
      for (let i = n; i >= 0 && !(0, _reduced.isReduced)(acc); i--) {
        acc = r(acc, x);
      }

      return acc;
    });
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;

var _iterator = require("../iterator");

var _compr = require("../func/compr");

function filter(pred, src) {
  return src ? (0, _iterator.iterator1)(filter(pred), src) : rfn => {
    const r = rfn[2];
    return (0, _compr.compR)(rfn, (acc, x) => pred(x) ? r(acc, x) : acc);
  };
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js"}],"../node_modules/@thi.ng/arrays/binary-search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.binarySearchNumeric = exports.binarySearch = void 0;

var _compare = require("@thi.ng/compare");

/**
 * Returns the supposed index of `x` in pre-sorted array-like collection
 * `buf`. If `x` can't be found, returns `-index-1`, representing the
 * negative of the index, were `x` to be inserted into `buf`. E.g if the
 * return value is -3, `x` would appear/insert at index 2.
 *
 * ```
 * binarySearch([2, 4, 6], 5);
 * // -3
 * ```
 *
 * The optional `key` function is used to obtain the actual sort value
 * of `x` and each array item (default: identity).
 *
 * The optional `cmp` comparator (default: thi.ng/compare) is then used
 * to identify the index of `x`. The sort order of `buf` MUST be
 * compatible with that of `cmp`.
 *
 * @param buf
 * @param x
 * @param key
 * @param cmp
 */
const binarySearch = (buf, x, key = x => x, cmp = _compare.compare) => {
  const kx = key(x);
  let low = 0;
  let high = buf.length - 1;

  while (low <= high) {
    const mid = low + high >>> 1;
    const c = cmp(key(buf[mid]), kx);

    if (c < 0) {
      low = mid + 1;
    } else if (c > 0) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -low - 1;
};
/**
 * Similar to `binarySearch()`, but optimized for numeric arrays and
 * supporting custom comparators (default: `compareNumAsc` from
 * thi.ng/compare pkg).
 *
 * @param buf
 * @param x
 * @param cmp
 */


exports.binarySearch = binarySearch;

const binarySearchNumeric = (buf, x, cmp = _compare.compareNumAsc) => {
  let low = 0;
  let high = buf.length - 1;

  while (low <= high) {
    const mid = low + high >>> 1;
    const c = cmp(buf[mid], x);

    if (c < 0) {
      low = mid + 1;
    } else if (c > 0) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -low - 1;
};

exports.binarySearchNumeric = binarySearchNumeric;
},{"@thi.ng/compare":"../node_modules/@thi.ng/compare/index.js"}],"../node_modules/@thi.ng/arrays/ends-with.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endsWith = void 0;

var _equiv = require("@thi.ng/equiv");

/**
 * Returns true if the last items of `buf` are the same items as in
 * `needle`. This means `buf` should have at least the same length as
 * `needle` for this to be true.
 *
 * By default, uses thi.ng/equiv for equality checking.
 *
 * @see startsWith
 *
 * @param buf
 * @param needle
 * @param equiv
 */
const endsWith = (buf, needle, equiv = _equiv.equiv) => {
  let i = buf.length;
  let j = needle.length;
  if (i < j) return false;

  while (--i, --j >= 0 && equiv(buf[i], needle[j])) {}

  return j < 0;
};

exports.endsWith = endsWith;
},{"@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js"}],"../node_modules/@thi.ng/arrays/ensure-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureIterable = void 0;

var _errors = require("@thi.ng/errors");

/**
 * Attempts to obtain an iterator from `x` and throws error if `x` is
 * not iterable.
 *
 * @param x
 */
const ensureIterable = x => {
  (x == null || !x[Symbol.iterator]) && (0, _errors.illegalArgs)(`value is not iterable: ${x}`);
  return x;
};

exports.ensureIterable = ensureIterable;
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js"}],"../node_modules/@thi.ng/arrays/ensure-array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureArrayLike = exports.ensureArray = void 0;

var _checks = require("@thi.ng/checks");

var _ensureIterable = require("./ensure-iterable");

/**
 * Helper function to avoid unnecessary copying if `x` is already an
 * array. First checks if `x` is an array and if so returns it. Else
 * attempts to obtain an iterator from `x` and if successful collects it
 * as array and returns it. Throws error if `x` isn't iterable.
 *
 * @param x
 */
const ensureArray = x => (0, _checks.isArray)(x) ? x : [...(0, _ensureIterable.ensureIterable)(x)];
/**
 * Similar to `ensureArray()`, but for `ArrayLike` types.
 *
 * @see ensureArray
 *
 * @param x
 */


exports.ensureArray = ensureArray;

const ensureArrayLike = x => (0, _checks.isArrayLike)(x) ? x : [...(0, _ensureIterable.ensureIterable)(x)];

exports.ensureArrayLike = ensureArrayLike;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","./ensure-iterable":"../node_modules/@thi.ng/arrays/ensure-iterable.js"}],"../node_modules/@thi.ng/arrays/find.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findIndex = exports.find = void 0;

var _equiv2 = require("@thi.ng/equiv");

/**
 * Similar to `Array.find()`, but uses thi.ng/equiv as default
 * predicate.
 *
 * @param src
 * @param x
 * @param equiv
 */
const find = (src, x, equiv = _equiv2.equiv) => {
  const i = findIndex(src, x, equiv);
  return i !== -1 ? src[i] : undefined;
};
/**
 * Similar to `Array.findIndex()`, but uses thi.ng/equiv as default
 * predicate.
 *
 * @param src
 * @param x
 * @param equiv
 */


exports.find = find;

const findIndex = (src, x, equiv = _equiv2.equiv) => {
  for (let i = src.length; --i >= 0;) {
    if (equiv(x, src[i])) return i;
  }

  return -1;
};

exports.findIndex = findIndex;
},{"@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js"}],"../node_modules/@thi.ng/arrays/fuzzy-match.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fuzzyMatch = void 0;

var _equiv = require("@thi.ng/equiv");

/**
 * Performs a fuzzy search of `query` in `domain` and returns `true` if
 * successful.
 *
 * The optional `equiv` predicate can be used to customize
 * item equality checking. Uses @thi.ng/equiv by default.
 *
 * Adapted and generalized from:
 * https://github.com/bevacqua/fufuzzyzzysearch (MIT)
 *
 * @see thi.ng/transducers/xform/filterFuzzy
 *
 * @param domain
 * @param query
 * @param equiv
 */
const fuzzyMatch = (domain, query, equiv = _equiv.equiv) => {
  const nd = domain.length;
  const nq = query.length;

  if (nq > nd) {
    return false;
  }

  if (nq === nd) {
    return equiv(query, domain);
  }

  next: for (let i = 0, j = 0; i < nq; i++) {
    const q = query[i];

    while (j < nd) {
      if (equiv(domain[j++], q)) {
        continue next;
      }
    }

    return false;
  }

  return true;
};

exports.fuzzyMatch = fuzzyMatch;
},{"@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js"}],"../node_modules/@thi.ng/arrays/is-sorted.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSorted = void 0;

var _compare = require("@thi.ng/compare");

/**
 * Returns true if the given array and its elements in the selected
 * index range (entire array, by default) are in the order defined by
 * the given comparator (thi.ng/compare by default). Always returns
 * true, if effective index range (or array length) has less than two
 * elements. No bounds checking.
 *
 * ```
 * isSorted([3, 2, 1])
 * // false
 *
 * // w/ custom comparator
 * isSorted([3, 2, 1], (a, b) => b - a)
 * // true
 * ```
 *
 * @param arr
 * @param cmp
 * @param start
 * @param end
 */
const isSorted = (arr, cmp = _compare.compare, start = 0, end = arr.length) => {
  let prev = arr[start];

  while (++start < end) {
    const curr = arr[start];
    if (cmp(prev, curr) > 0) return false;
    prev = curr;
  }

  return true;
};

exports.isSorted = isSorted;
},{"@thi.ng/compare":"../node_modules/@thi.ng/compare/index.js"}],"../node_modules/@thi.ng/arrays/iterator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayIterator = arrayIterator;

/**
 * Returns iterator of nullable array w/ optional index range support
 * and/or reverse iteration order. The default range covers the entire
 * array.
 *
 * @remarks
 * If `start` > `end`, yields values in reverse order. No bounds
 * checking is performed.
 *
 * @param buf - array or null
 * @param start - start index
 * @param end - end index (excluded)
 */
function* arrayIterator(buf, start = 0, end) {
  if (!buf) return;
  start = start;
  end === undefined && (end = buf.length);
  const step = start <= end ? 1 : -1;

  for (; start !== end; start += step) {
    yield buf[start];
  }
}
},{}],"../node_modules/@thi.ng/arrays/peek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.peek = void 0;

/**
 * Returns last element of given array or `undefined` if array is empty.
 *
 * @param x
 */
const peek = x => x[x.length - 1];

exports.peek = peek;
},{}],"../node_modules/@thi.ng/arrays/swap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiSwap = exports.swap = void 0;

/**
 * Swaps values at index `x`/`y` in given array.
 *
 * @param arr
 * @param x
 * @param y
 */
const swap = (arr, x, y) => {
  const t = arr[x];
  arr[x] = arr[y];
  arr[y] = t;
};
/**
 * Higher-order version of `swap` for swapping elements in multiple
 * arrays at once. The returned function takes the same args as `swap`,
 * and when called swaps 2 elements in the array given to that function
 * AND in the arrays given to `multiSwap` itself. Provides fast routes
 * for up to 3 extra arrays, then falls back to a loop-based approach.
 *
 * ```
 * a = [2, 1];
 * b = [20, 10];
 * c = [40, 30];
 *
 * ms = multiSwap(b, c);
 * ms(a, 0, 1);
 *
 * // a: [1, 2]
 * // b: [10, 20]
 * // c: [30, 40]
 * ```
 *
 * @param xs
 */


exports.swap = swap;

const multiSwap = (...xs) => {
  const [b, c, d] = xs;
  const n = xs.length;

  switch (n) {
    case 0:
      return swap;

    case 1:
      return (a, x, y) => {
        swap(a, x, y);
        swap(b, x, y);
      };

    case 2:
      return (a, x, y) => {
        swap(a, x, y);
        swap(b, x, y);
        swap(c, x, y);
      };

    case 3:
      return (a, x, y) => {
        swap(a, x, y);
        swap(b, x, y);
        swap(c, x, y);
        swap(d, x, y);
      };

    default:
      return (a, x, y) => {
        swap(a, x, y);

        for (let i = n; --i >= 0;) swap(xs[i], x, y);
      };
  }
};

exports.multiSwap = multiSwap;
},{}],"../node_modules/@thi.ng/arrays/quicksort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quickSort = quickSort;

var _compare = require("@thi.ng/compare");

var _swap2 = require("./swap");

// prettier-ignore
function quickSort(arr, _cmp = _compare.compare, _swap = _swap2.swap, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivot = arr[start + (end - start >> 1)];
    let s = start - 1;
    let e = end + 1;

    while (true) {
      do {
        s++;
      } while (_cmp(arr[s], pivot) < 0);

      do {
        e--;
      } while (_cmp(arr[e], pivot) > 0);

      if (s >= e) break;

      _swap(arr, s, e);
    }

    quickSort(arr, _cmp, _swap, start, e);
    quickSort(arr, _cmp, _swap, e + 1, end);
  }

  return arr;
}
},{"@thi.ng/compare":"../node_modules/@thi.ng/compare/index.js","./swap":"../node_modules/@thi.ng/arrays/swap.js"}],"../node_modules/@thi.ng/arrays/shuffle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shuffle = exports.shuffleRange = void 0;

var _api = require("@thi.ng/api");

var _random = require("@thi.ng/random");

/**
 * Shuffles the items in the given index range of array `buf` using
 * Fisher-yates and optional `rnd` PRNG. If neither `start` / `end` are
 * given, the entire array will be shuffled. Mutates original array.
 *
 * @param buf
 * @param n
 * @param rnd
 */
const shuffleRange = (buf, start = 0, end = buf.length, rnd = _random.SYSTEM) => {
  (0, _api.assert)(start >= 0 && end >= start && end <= buf.length, `illegal range ${start}..${end}`);
  let n = end - start;
  const l = n;

  if (l > 1) {
    while (--n >= 0) {
      const a = start + rnd.float(l) | 0;
      const b = start + rnd.float(l) | 0;
      const t = buf[a];
      buf[a] = buf[b];
      buf[b] = t;
    }
  }

  return buf;
};
/**
 * Applies `shuffleRange()` to the given array. If `n` is given, only
 * the first `n` items are shuffled. Mutates original array.
 *
 * @see shuffleRange
 *
 * @param buf
 * @param n
 * @param rnd
 */


exports.shuffleRange = shuffleRange;

const shuffle = (buf, n = buf.length, rnd = _random.SYSTEM) => shuffleRange(buf, 0, n, rnd);

exports.shuffle = shuffle;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/random":"../node_modules/@thi.ng/random/index.js"}],"../node_modules/@thi.ng/arrays/starts-with.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startsWith = void 0;

var _equiv = require("@thi.ng/equiv");

/**
 * Returns true if the first items of `buf` are the same items as in
 * `needle`. This means `buf` should have at least the same length as
 * `needle` for this to be true.
 *
 * By default, uses thi.ng/equiv for equality checking.
 *
 * @see endsWith
 *
 * @param buf
 * @param needle
 * @param equiv
 */
const startsWith = (buf, needle, equiv = _equiv.equiv) => {
  let i = buf.length;
  let j = needle.length;
  if (i < j) return false;

  while (-j >= 0 && equiv(buf[j], needle[j])) {}

  return j < 0;
};

exports.startsWith = startsWith;
},{"@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js"}],"../node_modules/@thi.ng/arrays/swizzle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swizzle = void 0;

/**
 * Returns optimized function to immutably select, repeat, reshape and /
 * or reorder array / object values in the specified index order. Fast
 * paths for up to 8 indices are provided, before a loop based approach
 * is used.
 *
 * ```
 * swizzle([0, 0, 0])([1, 2, 3, 4])    // [ 1, 1, 1 ]
 * swizzle([1, 1, 3, 3])([1, 2, 3, 4]) // [ 2, 2, 4, 4 ]
 * swizzle([2, 0])([1, 2, 3])          // [ 3, 1 ]
 * ```
 *
 * Objects can be used as input to the generated function, but the
 * result will always be in array form.
 *
 * ```
 * swizzle(["a", "c", "b"])({a: 1, b: 2, c: 3}) // [ 1, 3, 2 ]
 * ```
 *
 * @param order indices
 */
const swizzle = order => {
  const [a, b, c, d, e, f, g, h] = order;

  switch (order.length) {
    case 0:
      return () => [];

    case 1:
      return x => [x[a]];

    case 2:
      return x => [x[a], x[b]];

    case 3:
      return x => [x[a], x[b], x[c]];

    case 4:
      return x => [x[a], x[b], x[c], x[d]];

    case 5:
      return x => [x[a], x[b], x[c], x[d], x[e]];

    case 6:
      return x => [x[a], x[b], x[c], x[d], x[e], x[f]];

    case 7:
      return x => [x[a], x[b], x[c], x[d], x[e], x[f], x[g]];

    case 8:
      return x => [x[a], x[b], x[c], x[d], x[e], x[f], x[g], x[h]];

    default:
      return x => {
        const res = [];

        for (let i = order.length; --i >= 0;) {
          res[i] = x[order[i]];
        }

        return res;
      };
  }
};

exports.swizzle = swizzle;
},{}],"../node_modules/@thi.ng/arrays/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _binarySearch = require("./binary-search");

Object.keys(_binarySearch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _binarySearch[key];
    }
  });
});

var _endsWith = require("./ends-with");

Object.keys(_endsWith).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endsWith[key];
    }
  });
});

var _ensureArray = require("./ensure-array");

Object.keys(_ensureArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ensureArray[key];
    }
  });
});

var _ensureIterable = require("./ensure-iterable");

Object.keys(_ensureIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ensureIterable[key];
    }
  });
});

var _find = require("./find");

Object.keys(_find).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _find[key];
    }
  });
});

var _fuzzyMatch = require("./fuzzy-match");

Object.keys(_fuzzyMatch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fuzzyMatch[key];
    }
  });
});

var _isSorted = require("./is-sorted");

Object.keys(_isSorted).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSorted[key];
    }
  });
});

var _iterator = require("./iterator");

Object.keys(_iterator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iterator[key];
    }
  });
});

var _peek = require("./peek");

Object.keys(_peek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _peek[key];
    }
  });
});

var _quicksort = require("./quicksort");

Object.keys(_quicksort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _quicksort[key];
    }
  });
});

var _shuffle = require("./shuffle");

Object.keys(_shuffle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _shuffle[key];
    }
  });
});

var _startsWith = require("./starts-with");

Object.keys(_startsWith).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startsWith[key];
    }
  });
});

var _swap = require("./swap");

Object.keys(_swap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _swap[key];
    }
  });
});

var _swizzle = require("./swizzle");

Object.keys(_swizzle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _swizzle[key];
    }
  });
});
},{"./binary-search":"../node_modules/@thi.ng/arrays/binary-search.js","./ends-with":"../node_modules/@thi.ng/arrays/ends-with.js","./ensure-array":"../node_modules/@thi.ng/arrays/ensure-array.js","./ensure-iterable":"../node_modules/@thi.ng/arrays/ensure-iterable.js","./find":"../node_modules/@thi.ng/arrays/find.js","./fuzzy-match":"../node_modules/@thi.ng/arrays/fuzzy-match.js","./is-sorted":"../node_modules/@thi.ng/arrays/is-sorted.js","./iterator":"../node_modules/@thi.ng/arrays/iterator.js","./peek":"../node_modules/@thi.ng/arrays/peek.js","./quicksort":"../node_modules/@thi.ng/arrays/quicksort.js","./shuffle":"../node_modules/@thi.ng/arrays/shuffle.js","./starts-with":"../node_modules/@thi.ng/arrays/starts-with.js","./swap":"../node_modules/@thi.ng/arrays/swap.js","./swizzle":"../node_modules/@thi.ng/arrays/swizzle.js"}],"../node_modules/@thi.ng/transducers/xform/filter-fuzzy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterFuzzy = filterFuzzy;

var _arrays = require("@thi.ng/arrays");

var _iterator = require("../iterator");

var _filter = require("./filter");

function filterFuzzy(...args) {
  const iter = args.length > 1 && (0, _iterator.$iter)(filterFuzzy, args);

  if (iter) {
    return iter;
  }

  const query = args[0];
  const {
    key,
    equiv
  } = args[1] || {};
  return (0, _filter.filter)(x => (0, _arrays.fuzzyMatch)(key != null ? key(x) : x, query, equiv));
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./filter":"../node_modules/@thi.ng/transducers/xform/filter.js"}],"../node_modules/@thi.ng/transducers/xform/flatten-with.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenWith = flattenWith;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function flattenWith(fn, src) {
  return src ? (0, _iterator.iterator)(flattenWith(fn), src) : rfn => {
    const reduce = rfn[2];

    const flatten = (acc, x) => {
      const xx = fn(x);

      if (xx) {
        for (let y of xx) {
          acc = flatten(acc, y);

          if ((0, _reduced.isReduced)(acc)) {
            break;
          }
        }

        return acc;
      }

      return reduce(acc, x);
    };

    return (0, _compr.compR)(rfn, flatten);
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/flatten.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatten = flatten;

var _flattenWith = require("./flatten-with");

function flatten(src) {
  return (0, _flattenWith.flattenWith)(x => x != null && x[Symbol.iterator] && typeof x !== "string" ? x : undefined, src);
}
},{"./flatten-with":"../node_modules/@thi.ng/transducers/xform/flatten-with.js"}],"../node_modules/@thi.ng/transducers/xform/map-indexed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapIndexed = mapIndexed;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function mapIndexed(...args) {
  return (0, _iterator.$iter)(mapIndexed, args) || (rfn => {
    const r = rfn[2];
    const fn = args[0];
    let i = args[1] || 0;
    return (0, _compr.compR)(rfn, (acc, x) => r(acc, fn(i++, x)));
  });
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/indexed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexed = indexed;

var _iterator = require("../iterator");

var _mapIndexed = require("./map-indexed");

function indexed(...args) {
  const iter = (0, _iterator.$iter)(indexed, args);

  if (iter) {
    return iter;
  }

  const from = args[0] || 0;
  return (0, _mapIndexed.mapIndexed)((i, x) => [from + i, x]);
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map-indexed":"../node_modules/@thi.ng/transducers/xform/map-indexed.js"}],"../node_modules/@thi.ng/transducers/xform/interleave.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interleave = interleave;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function interleave(sep, src) {
  return src ? (0, _iterator.iterator)(interleave(sep), src) : rfn => {
    const r = rfn[2];

    const _sep = typeof sep === "function" ? sep : () => sep;

    return (0, _compr.compR)(rfn, (acc, x) => {
      acc = r(acc, _sep());
      return (0, _reduced.isReduced)(acc) ? acc : r(acc, x);
    });
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/func/comp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comp = comp;

var _compose = require("@thi.ng/compose");

function comp(...fns) {
  return _compose.comp.apply(null, fns);
}
},{"@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js"}],"../node_modules/@thi.ng/transducers/iter/norm-range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normRange = normRange;

/**
 * Yields sequence of `n+1` monotonically increasing numbers in the
 * closed interval (0.0 .. 1.0). If `n <= 0`, yields nothing.
 *
 * ```
 * [...normRange(4)]
 * // [0, 0.25, 0.5, 0.75, 1.0]
 * ```
 *
 * @param n number of steps
 * @param inclLast include last value (i.e. `1.0`)
 */
function* normRange(n, inclLast = true) {
  if (n > 0) {
    for (let i = 0, m = inclLast ? n + 1 : n; i < m; i++) {
      yield i / n;
    }
  }
}
},{}],"../node_modules/@thi.ng/transducers/xform/mapcat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapcat = mapcat;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _cat = require("./cat");

var _map = require("./map");

function mapcat(fn, src) {
  return src ? (0, _iterator.iterator)(mapcat(fn), src) : (0, _comp.comp)((0, _map.map)(fn), (0, _cat.cat)());
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./cat":"../node_modules/@thi.ng/transducers/xform/cat.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/partition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partition = partition;

var _iterator = require("../iterator");

function partition(...args) {
  const iter = (0, _iterator.$iter)(partition, args, _iterator.iterator);

  if (iter) {
    return iter;
  }

  let size = args[0],
      all,
      step;

  if (typeof args[1] == "number") {
    step = args[1];
    all = args[2];
  } else {
    step = size;
    all = args[1];
  }

  return ([init, complete, reduce]) => {
    let buf = [];
    let skip = 0;
    return [init, acc => {
      if (all && buf.length > 0) {
        acc = reduce(acc, buf);
        buf = [];
      }

      return complete(acc);
    }, (acc, x) => {
      if (skip <= 0) {
        if (buf.length < size) {
          buf.push(x);
        }

        if (buf.length === size) {
          acc = reduce(acc, buf);
          buf = step < size ? buf.slice(step) : [];
          skip = step - size;
        }
      } else {
        skip--;
      }

      return acc;
    }];
  };
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/interpolate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolate = interpolate;

var _comp = require("../func/comp");

var _normRange = require("../iter/norm-range");

var _iterator = require("../iterator");

var _map = require("./map");

var _mapcat = require("./mapcat");

var _partition = require("./partition");

// prettier-ignore
function interpolate(fn, window, n, src) {
  return src ? (0, _iterator.iterator)(interpolate(fn, window, n), src) : (0, _comp.comp)((0, _partition.partition)(window, 1), (0, _mapcat.mapcat)(chunk => (0, _map.map)(t => fn(chunk, t), (0, _normRange.normRange)(n, false))));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../iter/norm-range":"../node_modules/@thi.ng/transducers/iter/norm-range.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js","./mapcat":"../node_modules/@thi.ng/transducers/xform/mapcat.js","./partition":"../node_modules/@thi.ng/transducers/xform/partition.js"}],"../node_modules/@thi.ng/math/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Crossing = exports.EPS = exports.SIXTH = exports.TWO_THIRD = exports.THIRD = exports.SQRT2_3 = exports.SQRT2_2 = exports.SQRT3 = exports.SQRT2 = exports.PHI = exports.RAD2DEG = exports.DEG2RAD = exports.INV_HALF_PI = exports.INV_TAU = exports.INV_PI = exports.SIXTH_PI = exports.QUARTER_PI = exports.THIRD_PI = exports.HALF_PI = exports.TAU = exports.PI = void 0;
const PI = Math.PI;
exports.PI = PI;
const TAU = PI * 2;
exports.TAU = TAU;
const HALF_PI = PI / 2;
exports.HALF_PI = HALF_PI;
const THIRD_PI = PI / 3;
exports.THIRD_PI = THIRD_PI;
const QUARTER_PI = PI / 4;
exports.QUARTER_PI = QUARTER_PI;
const SIXTH_PI = PI / 6;
exports.SIXTH_PI = SIXTH_PI;
const INV_PI = 1 / PI;
exports.INV_PI = INV_PI;
const INV_TAU = 1 / TAU;
exports.INV_TAU = INV_TAU;
const INV_HALF_PI = 1 / HALF_PI;
exports.INV_HALF_PI = INV_HALF_PI;
const DEG2RAD = PI / 180;
exports.DEG2RAD = DEG2RAD;
const RAD2DEG = 180 / PI;
exports.RAD2DEG = RAD2DEG;
const PHI = (1 + Math.sqrt(5)) / 2;
exports.PHI = PHI;
const SQRT2 = Math.SQRT2;
exports.SQRT2 = SQRT2;
const SQRT3 = Math.sqrt(3);
exports.SQRT3 = SQRT3;
const SQRT2_2 = SQRT2 / 2;
exports.SQRT2_2 = SQRT2_2;
const SQRT2_3 = SQRT3 / 2;
exports.SQRT2_3 = SQRT2_3;
const THIRD = 1 / 3;
exports.THIRD = THIRD;
const TWO_THIRD = 2 / 3;
exports.TWO_THIRD = TWO_THIRD;
const SIXTH = 1 / 6;
exports.SIXTH = SIXTH;
let EPS = 1e-6;
exports.EPS = EPS;
var Crossing;
exports.Crossing = Crossing;

(function (Crossing) {
  /**
   * lines A & B are equal
   */
  Crossing[Crossing["EQUAL"] = 0] = "EQUAL";
  /**
   * lines A & B are flat (all same values)
   */

  Crossing[Crossing["FLAT"] = 1] = "FLAT";
  /**
   * line A crossed under B
   */

  Crossing[Crossing["UNDER"] = 2] = "UNDER";
  /**
   * line A crossed over B
   */

  Crossing[Crossing["OVER"] = 3] = "OVER";
  Crossing[Crossing["OTHER"] = 4] = "OTHER";
})(Crossing || (exports.Crossing = Crossing = {}));
},{}],"../node_modules/@thi.ng/math/abs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign = exports.absDiff = void 0;

var _api = require("./api");

const absDiff = (x, y) => Math.abs(x - y);

exports.absDiff = absDiff;

const sign = (x, eps = _api.EPS) => x > eps ? 1 : x < -eps ? -1 : 0;

exports.sign = sign;
},{"./api":"../node_modules/@thi.ng/math/api.js"}],"../node_modules/@thi.ng/math/angle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fastSin = exports.fastCos = exports.normCos = exports.loc = exports.cot = exports.sec = exports.csc = exports.rad = exports.deg = exports.quadrant = exports.atan2Abs = exports.angleDist = exports.absInnerAngle = exports.absTheta = exports.cossin = exports.sincos = void 0;

var _api = require("./api");

/**
 * Returns vector of `[sin(theta)*n, cos(theta)*n]`.
 *
 * @param theta
 * @param n
 */
const sincos = (theta, n = 1) => [Math.sin(theta) * n, Math.cos(theta) * n];
/**
 * Returns vector of `[cos(theta)*n, sin(theta)*n]`.
 *
 * @param theta
 * @param n
 */


exports.sincos = sincos;

const cossin = (theta, n = 1) => [Math.cos(theta) * n, Math.sin(theta) * n];
/**
 * Projects `theta` into [0 .. 2π] interval.
 *
 * @param theta
 */


exports.cossin = cossin;

const absTheta = theta => (theta %= _api.TAU, theta < 0 ? _api.TAU + theta : theta);

exports.absTheta = absTheta;

const absInnerAngle = theta => (theta = Math.abs(theta), theta > _api.PI ? _api.TAU - theta : theta);
/**
 * Returns smallest absolute angle difference between `a` and `b`.
 * Result will be in [0 .. π] interval.
 *
 * @param a
 * @param b
 */


exports.absInnerAngle = absInnerAngle;

const angleDist = (a, b) => absInnerAngle(absTheta(b % _api.TAU - a % _api.TAU));
/**
 * Like `Math.atan2`, but always returns angle in [0 .. TAU) interval.
 *
 * @param y
 * @param x
 */


exports.angleDist = angleDist;

const atan2Abs = (y, x) => absTheta(Math.atan2(y, x));
/**
 * Returns quadrant ID (0-3) of given angle (in radians).
 *
 * @param theta
 */


exports.atan2Abs = atan2Abs;

const quadrant = theta => absTheta(theta) * _api.INV_HALF_PI | 0;
/**
 * Converts angle to degrees.
 *
 * @param theta angle in radians
 */


exports.quadrant = quadrant;

const deg = theta => theta * _api.RAD2DEG;
/**
 * Converts angle to radians.
 *
 * @param theta angle in degrees
 */


exports.deg = deg;

const rad = theta => theta * _api.DEG2RAD;
/**
 * Cosecant. Approaches `±Infinity` for `theta` near multiples of π.
 *
 * @param theta angle in radians
 */


exports.rad = rad;

const csc = theta => 1 / Math.sin(theta);
/**
 * Secant. Approaches `±Infinity` for `theta` near π/2 ± nπ
 *
 * @param theta angle in radians
 */


exports.csc = csc;

const sec = theta => 1 / Math.cos(theta);
/**
 * Cotangent. Approaches `±Infinity` for `theta` near multiples of π.
 *
 * @param theta angle in radians
 */


exports.sec = sec;

const cot = theta => 1 / Math.tan(theta);
/**
 * Law of Cosines. Takes length of two sides of a triangle and the inner
 * angle (in radians) between them. Returns length of third side.
 *
 * @param a
 * @param b
 * @param gamma
 */


exports.cot = cot;

const loc = (a, b, gamma) => Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(gamma));
/**
 * Approximates cos(xπ) for x in [-1,1]
 *
 * @param x
 */


exports.loc = loc;

const normCos = x => {
  const x2 = x * x;
  return 1.0 + x2 * (-4 + 2 * x2);
};

exports.normCos = normCos;

const __fastCos = x => {
  const x2 = x * x;
  return 0.99940307 + x2 * (-0.49558072 + 0.03679168 * x2);
};
/**
 * Fast cosine approximation using `normCos()` (polynomial). Max. error
 * ~0.00059693
 *
 * In [0 .. 2π] interval, approx. 18-20% faster than `Math.cos` on V8.
 *
 * @param theta in radians
 */


const fastCos = theta => {
  theta %= _api.TAU;
  theta < 0 && (theta = -theta);

  switch (theta * _api.INV_HALF_PI | 0) {
    case 0:
      return __fastCos(theta);

    case 1:
      return -__fastCos(_api.PI - theta);

    case 2:
      return -__fastCos(theta - _api.PI);

    default:
      return __fastCos(_api.TAU - theta);
  }
};
/**
 * @see fastCos
 *
 * @param theta in radians
 */


exports.fastCos = fastCos;

const fastSin = theta => fastCos(_api.HALF_PI - theta);

exports.fastSin = fastSin;
},{"./api":"../node_modules/@thi.ng/math/api.js"}],"../node_modules/@thi.ng/math/eqdelta.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eqDeltaFixed = exports.eqDelta = void 0;

var _api = require("./api");

const abs = Math.abs;
const max = Math.max;
/**
 * Checks if `|a - b| <= ε` and adapts given epsilon value to the given
 * arguments:
 *
 * ε is factored with the largest absolute value of `a` or `b` (but
 * never lesser than the given `eps` value):
 *
 * `ε = ε * max(1, |a|, |b|)`
 *
 * @param a left value
 * @param b right value
 * @param eps epsilon / tolerance, default `1e-6`
 */

const eqDelta = (a, b, eps = _api.EPS) => abs(a - b) <= eps * max(1, abs(a), abs(b));
/**
 * Similar to `eqDelta()`, but used given `eps` as is.
 *
 * @param a left value
 * @param b right value
 * @param eps epsilon / tolerance, default `1e-6`
 */


exports.eqDelta = eqDelta;

const eqDeltaFixed = (a, b, eps = _api.EPS) => abs(a - b) <= eps;

exports.eqDeltaFixed = eqDeltaFixed;
},{"./api":"../node_modules/@thi.ng/math/api.js"}],"../node_modules/@thi.ng/math/crossing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classifyCrossing = exports.isCrossUnder = exports.isCrossOver = void 0;

var _api = require("./api");

var _eqdelta = require("./eqdelta");

/**
 * Returns true if line A rises up over B.
 *
 * ```
 * b1  a2
 *   \/
 *   /\
 * a1  b2
 * ```
 *
 * @param a1
 * @param a2
 * @param b1
 * @param b2
 */
const isCrossOver = (a1, a2, b1, b2) => a1 < b1 && a2 > b2;
/**
 * Returns true if line A rises up over B.
 *
 * ```
 * a1  b2
 *   \/
 *   /\
 * b1  a2
 * ```
 *
 * @param a1
 * @param a2
 * @param b1
 * @param b2
 */


exports.isCrossOver = isCrossOver;

const isCrossUnder = (a1, a2, b1, b2) => a1 > b1 && a2 < b2;
/**
 * Returns `Crossing` classifier indicating the relationship of line A
 * to line B. The optional epsilon value is used to determine if both
 * lines are considered equal or flat.
 *
 * @see isCrossUp
 * @see isCrossDown
 * @see Crossing
 *
 * @param a1
 * @param a2
 * @param b1
 * @param b2
 * @param eps
 */


exports.isCrossUnder = isCrossUnder;

const classifyCrossing = (a1, a2, b1, b2, eps = _api.EPS) => {
  if (isCrossOver(a1, a2, b1, b2)) {
    return 3
    /* OVER */
    ;
  } else if (isCrossUnder(a1, a2, b1, b2)) {
    return 2
    /* UNDER */
    ;
  }

  return (0, _eqdelta.eqDelta)(a1, b1, eps) && (0, _eqdelta.eqDelta)(a2, b2, eps) ? (0, _eqdelta.eqDelta)(a1, b2, eps) ? 1
  /* FLAT */
  : 0
  /* EQUAL */
  : 4
  /* OTHER */
  ;
};

exports.classifyCrossing = classifyCrossing;
},{"./api":"../node_modules/@thi.ng/math/api.js","./eqdelta":"../node_modules/@thi.ng/math/eqdelta.js"}],"../node_modules/@thi.ng/math/extrema.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maximaIndices = exports.minimaIndices = exports.maximaIndex = exports.minimaIndex = exports.isMaxima = exports.isMinima = void 0;

/**
 * Returns true if `b` is a local minima, i.e. iff a > b and b < c.
 *
 * @param a
 * @param b
 * @param c
 */
const isMinima = (a, b, c) => a > b && b < c;
/**
 * Returns true if `b` is a local maxima, i.e. iff a < b and b > c.
 *
 * @param a
 * @param b
 * @param c
 */


exports.isMinima = isMinima;

const isMaxima = (a, b, c) => a < b && b > c;

exports.isMaxima = isMaxima;

const index = (pred, values, from = 0, to = values.length) => {
  to--;

  for (let i = from + 1; i < to; i++) {
    if (pred(values[i - 1], values[i], values[i + 1])) {
      return i;
    }
  }

  return -1;
};
/**
 * Returns index of the first local & internal minima found in given
 * `values` array, or -1 if no such minima exists. The search range can
 * be optionally defined via semi-open [from, to) index interval.
 *
 * @param values
 * @param from
 * @param to
 */


const minimaIndex = (values, from = 0, to = values.length) => index(isMinima, values, from, to);
/**
 * Returns index of the first local & internal maxima found in given
 * `values` array, or -1 if no such maxima exists. The search range can
 * be optionally defined via semi-open [from, to) index interval.
 *
 * @param values
 * @param from
 * @param to
 */


exports.minimaIndex = minimaIndex;

const maximaIndex = (values, from = 0, to = values.length) => index(isMaxima, values, from, to);

exports.maximaIndex = maximaIndex;

function* indices(fn, vals, from = 0, to = vals.length) {
  while (from < to) {
    const i = fn(vals, from, to);
    if (i < 0) return;
    yield i;
    from = i + 1;
  }
}
/**
 * Returns an iterator yielding all minima indices in given `values`
 * array. The search range can be optionally defined via semi-open
 * [from, to) index interval.
 *
 * @param values
 * @param from
 * @param to
 */


const minimaIndices = (values, from = 0, to = values.length) => indices(minimaIndex, values, from, to);
/**
 * Returns an iterator yielding all maxima indices in given `values`
 * array. The search range can be optionally defined via semi-open
 * [from, to) index interval.
 *
 * @param values
 * @param from
 * @param to
 */


exports.minimaIndices = minimaIndices;

const maximaIndices = (values, from = 0, to = values.length) => indices(minimaIndex, values, from, to);

exports.maximaIndices = maximaIndices;
},{}],"../node_modules/@thi.ng/math/interval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inOpenRange = exports.inRange = exports.foldback = exports.absMax = exports.absMin = exports.sclamp = exports.smax = exports.smin = exports.max4id = exports.max3id = exports.max2id = exports.min4id = exports.min3id = exports.min2id = exports.wrap11 = exports.wrap01 = exports.wrap = exports.clamp11 = exports.clamp01 = exports.clamp = void 0;

/**
 * Clamps value `x` to given closed interval.
 *
 * @param x value to clamp
 * @param min lower bound
 * @param max upper bound
 */
const clamp = (x, min, max) => x < min ? min : x > max ? max : x;

exports.clamp = clamp;

const clamp01 = x => x < 0 ? 0 : x > 1 ? 1 : x;

exports.clamp01 = clamp01;

const clamp11 = x => x < -1 ? -1 : x > 1 ? 1 : x;

exports.clamp11 = clamp11;

const wrap = (x, min, max) => x < min ? x - min + max : x >= max ? x - max + min : x;

exports.wrap = wrap;

const wrap01 = x => x < 0 ? x + 1 : x >= 1 ? x - 1 : x;

exports.wrap01 = wrap01;

const wrap11 = x => x < -1 ? x + 2 : x >= 1 ? x - 2 : x;

exports.wrap11 = wrap11;

const min2id = (a, b) => a <= b ? 0 : 1;

exports.min2id = min2id;

const min3id = (a, b, c) => a <= b ? a <= c ? 0 : 2 : b <= c ? 1 : 2;

exports.min3id = min3id;

const min4id = (a, b, c, d) => a <= b ? a <= c ? a <= d ? 0 : 3 : c <= d ? 2 : 3 : b <= c ? b <= d ? 1 : 3 : c <= d ? 2 : 3;

exports.min4id = min4id;

const max2id = (a, b) => a >= b ? 0 : 1;

exports.max2id = max2id;

const max3id = (a, b, c) => a >= b ? a >= c ? 0 : 2 : b >= c ? 1 : 2;

exports.max3id = max3id;

const max4id = (a, b, c, d) => a >= b ? a >= c ? a >= d ? 0 : 3 : c >= d ? 2 : 3 : b >= c ? b >= d ? 1 : 3 : c >= d ? 2 : 3;
/**
 * See `smax()`.
 *
 * @param a
 * @param b
 * @param k smooth exponent (MUST be > 0)
 */


exports.max4id = max4id;

const smin = (a, b, k) => smax(a, b, -k);
/**
 * Smooth maximum. Note: Result values will be slightly larger than max
 * value near max(a,b) + eps due to exponential decay. Higher `k` values
 * reduce the error, but also reduce the smoothing. Recommended k=16.
 *
 * https://en.wikipedia.org/wiki/Smooth_maximum
 *
 * @param a
 * @param b
 * @param k smooth exponent (MUST be > 0)
 */


exports.smin = smin;

const smax = (a, b, k) => {
  const ea = Math.exp(a * k);
  const eb = Math.exp(b * k);
  return (a * ea + b * eb) / (ea + eb);
};
/**
 * Same as `smin(smax(x, min, k), max, k)`.
 *
 * @param x
 * @param min
 * @param max
 * @param k
 */


exports.smax = smax;

const sclamp = (x, min, max, k) => smin(smax(x, min, k), max, k);

exports.sclamp = sclamp;

const absMin = (a, b) => Math.abs(a) < Math.abs(b) ? a : b;

exports.absMin = absMin;

const absMax = (a, b) => Math.abs(a) > Math.abs(b) ? a : b;
/**
 * http://www.musicdsp.org/showone.php?id=203
 *
 * @param e
 * @param x
 */


exports.absMax = absMax;

const foldback = (e, x) => x < -e || x > e ? Math.abs(Math.abs((x - e) % (4 * e)) - 2 * e) - e : x;
/**
 * Returns true iff `x` is in closed interval `[min .. max]`
 *
 * @param x
 * @param min
 * @param max
 */


exports.foldback = foldback;

const inRange = (x, min, max) => x >= min && x <= max;
/**
 * Returns true iff `x` is in open interval `(min .. max)`
 *
 * @param x
 * @param min
 * @param max
 */


exports.inRange = inRange;

const inOpenRange = (x, min, max) => x > min && x < max;

exports.inOpenRange = inOpenRange;
},{}],"../node_modules/@thi.ng/math/fit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fit11 = exports.fit10 = exports.fit01 = exports.fitClamped = exports.fit = exports.norm = void 0;

var _interval = require("./interval");

/**
 * Returns normalized value of `x` WRT to interval `a .. b`. If `a`
 * equals `b`, returns 0.
 *
 * @param x
 * @param a
 * @param b
 */
const norm = (x, a, b) => b !== a ? (x - a) / (b - a) : 0;

exports.norm = norm;

const fit = (x, a, b, c, d) => c + (d - c) * norm(x, a, b);

exports.fit = fit;

const fitClamped = (x, a, b, c, d) => c + (d - c) * (0, _interval.clamp01)(norm(x, a, b));

exports.fitClamped = fitClamped;

const fit01 = (x, a, b) => a + (b - a) * (0, _interval.clamp01)(x);

exports.fit01 = fit01;

const fit10 = (x, a, b) => b + (a - b) * (0, _interval.clamp01)(x);

exports.fit10 = fit10;

const fit11 = (x, a, b) => a + (b - a) * (0.5 + 0.5 * (0, _interval.clamp11)(x));

exports.fit11 = fit11;
},{"./interval":"../node_modules/@thi.ng/math/interval.js"}],"../node_modules/@thi.ng/math/int.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rshiftu32 = exports.lshiftu32 = exports.notu32 = exports.xoru32 = exports.oru32 = exports.andu32 = exports.subu32 = exports.mulu32 = exports.divu32 = exports.addu32 = exports.rshiftu16 = exports.lshiftu16 = exports.notu16 = exports.xoru16 = exports.oru16 = exports.andu16 = exports.subu16 = exports.mulu16 = exports.divu16 = exports.addu16 = exports.rshiftu8 = exports.lshiftu8 = exports.notu8 = exports.xoru8 = exports.oru8 = exports.andu8 = exports.subu8 = exports.mulu8 = exports.divu8 = exports.addu8 = exports.noti32 = exports.rshifti32 = exports.lshifti32 = exports.xori32 = exports.ori32 = exports.andi32 = exports.subi32 = exports.muli32 = exports.divi32 = exports.addi32 = exports.rshifti16 = exports.lshifti16 = exports.noti16 = exports.xori16 = exports.ori16 = exports.andi16 = exports.subi16 = exports.muli16 = exports.divi16 = exports.addi16 = exports.rshifti8 = exports.lshifti8 = exports.noti8 = exports.xori8 = exports.ori8 = exports.andi8 = exports.subi8 = exports.muli8 = exports.divi8 = exports.addi8 = exports.signExtend16 = exports.signExtend8 = void 0;
const M8 = 0xff;
const M16 = 0xffff;

const signExtend8 = a => (a &= M8, a & 0x80 ? a | ~M8 : a);

exports.signExtend8 = signExtend8;

const signExtend16 = a => (a &= M16, a & 0x8000 ? a | ~M16 : a);

exports.signExtend16 = signExtend16;

const addi8 = (a, b) => signExtend8((a | 0) + (b | 0));

exports.addi8 = addi8;

const divi8 = (a, b) => signExtend8((a | 0) / (b | 0));

exports.divi8 = divi8;

const muli8 = (a, b) => signExtend8((a | 0) * (b | 0));

exports.muli8 = muli8;

const subi8 = (a, b) => signExtend8((a | 0) - (b | 0));

exports.subi8 = subi8;

const andi8 = (a, b) => signExtend8((a | 0) & (b | 0));

exports.andi8 = andi8;

const ori8 = (a, b) => signExtend8(a | 0 | (b | 0));

exports.ori8 = ori8;

const xori8 = (a, b) => signExtend8((a | 0) ^ (b | 0));

exports.xori8 = xori8;

const noti8 = a => signExtend8(~a); // prettier-ignore


exports.noti8 = noti8;

const lshifti8 = (a, b) => signExtend8((a | 0) << (b | 0)); // prettier-ignore


exports.lshifti8 = lshifti8;

const rshifti8 = (a, b) => signExtend8((a | 0) >> (b | 0));

exports.rshifti8 = rshifti8;

const addi16 = (a, b) => signExtend16((a | 0) + (b | 0));

exports.addi16 = addi16;

const divi16 = (a, b) => signExtend16((a | 0) / (b | 0));

exports.divi16 = divi16;

const muli16 = (a, b) => signExtend16((a | 0) * (b | 0));

exports.muli16 = muli16;

const subi16 = (a, b) => signExtend16((a | 0) - (b | 0));

exports.subi16 = subi16;

const andi16 = (a, b) => signExtend16((a | 0) & (b | 0));

exports.andi16 = andi16;

const ori16 = (a, b) => signExtend16(a | 0 | (b | 0));

exports.ori16 = ori16;

const xori16 = (a, b) => signExtend16((a | 0) ^ (b | 0));

exports.xori16 = xori16;

const noti16 = a => signExtend16(~a); // prettier-ignore


exports.noti16 = noti16;

const lshifti16 = (a, b) => signExtend16((a | 0) << (b | 0)); // prettier-ignore


exports.lshifti16 = lshifti16;

const rshifti16 = (a, b) => signExtend16((a | 0) >> (b | 0));

exports.rshifti16 = rshifti16;

const addi32 = (a, b) => (a | 0) + (b | 0) | 0;

exports.addi32 = addi32;

const divi32 = (a, b) => (a | 0) / (b | 0) | 0;

exports.divi32 = divi32;

const muli32 = (a, b) => (a | 0) * (b | 0) | 0;

exports.muli32 = muli32;

const subi32 = (a, b) => (a | 0) - (b | 0) | 0;

exports.subi32 = subi32;

const andi32 = (a, b) => (a | 0) & (b | 0);

exports.andi32 = andi32;

const ori32 = (a, b) => a | 0 | (b | 0);

exports.ori32 = ori32;

const xori32 = (a, b) => (a | 0) ^ (b | 0);

exports.xori32 = xori32;

const lshifti32 = (a, b) => (a | 0) << (b | 0);

exports.lshifti32 = lshifti32;

const rshifti32 = (a, b) => (a | 0) >> (b | 0);

exports.rshifti32 = rshifti32;

const noti32 = a => ~a; // prettier-ignore


exports.noti32 = noti32;

const addu8 = (a, b) => (a & M8) + (b & M8) & M8; // prettier-ignore


exports.addu8 = addu8;

const divu8 = (a, b) => (a & M8) / (b & M8) & M8; // prettier-ignore


exports.divu8 = divu8;

const mulu8 = (a, b) => (a & M8) * (b & M8) & M8; // prettier-ignore


exports.mulu8 = mulu8;

const subu8 = (a, b) => (a & M8) - (b & M8) & M8; // prettier-ignore


exports.subu8 = subu8;

const andu8 = (a, b) => a & M8 & (b & M8) & M8; // prettier-ignore


exports.andu8 = andu8;

const oru8 = (a, b) => (a & M8 | b & M8) & M8; // prettier-ignore


exports.oru8 = oru8;

const xoru8 = (a, b) => (a & M8 ^ b & M8) & M8;

exports.xoru8 = xoru8;

const notu8 = a => ~a & M8;

exports.notu8 = notu8;

const lshiftu8 = (a, b) => (a & M8) << (b & M8) & M8;

exports.lshiftu8 = lshiftu8;

const rshiftu8 = (a, b) => (a & M8) >>> (b & M8) & M8; // prettier-ignore


exports.rshiftu8 = rshiftu8;

const addu16 = (a, b) => (a & M16) + (b & M16) & M16; // prettier-ignore


exports.addu16 = addu16;

const divu16 = (a, b) => (a & M16) / (b & M16) & M16; // prettier-ignore


exports.divu16 = divu16;

const mulu16 = (a, b) => (a & M16) * (b & M16) & M16; // prettier-ignore


exports.mulu16 = mulu16;

const subu16 = (a, b) => (a & M16) - (b & M16) & M16; // prettier-ignore


exports.subu16 = subu16;

const andu16 = (a, b) => a & M16 & (b & M16) & M16; // prettier-ignore


exports.andu16 = andu16;

const oru16 = (a, b) => (a & M16 | b & M16) & M16; // prettier-ignore


exports.oru16 = oru16;

const xoru16 = (a, b) => (a & M16 ^ b & M16) & M16;

exports.xoru16 = xoru16;

const notu16 = a => ~a & M16; // prettier-ignore


exports.notu16 = notu16;

const lshiftu16 = (a, b) => (a & M16) << (b & M16) & M16; // prettier-ignore


exports.lshiftu16 = lshiftu16;

const rshiftu16 = (a, b) => (a & M16) >>> (b & M16) & M16;

exports.rshiftu16 = rshiftu16;

const addu32 = (a, b) => (a >>> 0) + (b >>> 0) >>> 0;

exports.addu32 = addu32;

const divu32 = (a, b) => (a >>> 0) / (b >>> 0) >>> 0;

exports.divu32 = divu32;

const mulu32 = (a, b) => (a >>> 0) * (b >>> 0) >>> 0;

exports.mulu32 = mulu32;

const subu32 = (a, b) => (a >>> 0) - (b >>> 0) >>> 0;

exports.subu32 = subu32;

const andu32 = (a, b) => (a >>> 0 & b >>> 0) >>> 0;

exports.andu32 = andu32;

const oru32 = (a, b) => (a >>> 0 | b >>> 0) >>> 0;

exports.oru32 = oru32;

const xoru32 = (a, b) => (a >>> 0 ^ b >>> 0) >>> 0;

exports.xoru32 = xoru32;

const notu32 = a => ~a >>> 0; // prettier-ignore


exports.notu32 = notu32;

const lshiftu32 = (a, b) => a >>> 0 << (b >>> 0) >>> 0; // prettier-ignore


exports.lshiftu32 = lshiftu32;

const rshiftu32 = (a, b) => a >>> 0 >>> (b >>> 0) >>> 0;

exports.rshiftu32 = rshiftu32;
},{}],"../node_modules/@thi.ng/math/min-error.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minError = void 0;

var _api = require("./api");

/**
 * Recursively evaluates function `fn` for `res` uniformly spaced values
 * `t` in the closed parametric interval `[start,end]` and computes
 * corresponding sample values `p`. For each `p` then calls `error`
 * function to compute the error to query target value `q` and
 * eventually returns the `t` producing the overall minimum error. At
 * each level of recursion the search interval is increasingly narrowed
 * / centered around the best `t` of the current iteration.
 *
 * The search is terminated early if the best error value is less than
 * `eps`.
 *
 * The interval end points `start` and `end` MUST be normalized values
 * in the closed [0,1] interval.
 *
 * @param fn function to evaluate
 * @param error error function
 * @param q target value
 * @param res number of samples per interval
 * @param iter max number of iterations / recursion limit
 * @param start interval start
 * @param end interval end
 */
const minError = (fn, error, q, res = 16, iter = 8, start = 0, end = 1, eps = _api.EPS) => {
  if (iter <= 0) return (start + end) / 2;
  const delta = (end - start) / res;
  let minT = start;
  let minE = Infinity;

  for (let i = 0; i <= res; i++) {
    const t = start + i * delta;
    const e = error(q, fn(t));

    if (e < minE) {
      if (e <= eps) return t;
      minE = e;
      minT = t;
    }
  }

  return minError(fn, error, q, res, iter - 1, Math.max(minT - delta, 0), Math.min(minT + delta, 1));
};

exports.minError = minError;
},{"./api":"../node_modules/@thi.ng/math/api.js"}],"../node_modules/@thi.ng/math/mix.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sigmoid11 = exports.sigmoid = exports.sinc = exports.cubicPulse = exports.parabola = exports.gain = exports.impulse = exports.ease = exports.bounce = exports.decimated = exports.cosine = exports.circular = exports.tween = exports.tangentDiff3 = exports.tangentCardinal = exports.mixCubicHermite = exports.mixHermite = exports.mixCubic = exports.mixQuadratic = exports.mixBilinear = exports.mix = void 0;

var _api = require("./api");

const mix = (a, b, t) => a + (b - a) * t;
/**
 * ```
 * c    d
 * +----+
 * |    |
 * +----+
 * a    b
 * ```
 *
 * @param a BL value
 * @param b BR value
 * @param c TL value
 * @param d TR value
 * @param u 1st interpolation factor
 * @param v 2nd interpolation factor
 */


exports.mix = mix;

const mixBilinear = (a, b, c, d, u, v) => mix(mix(a, b, u), mix(c, d, u), v);

exports.mixBilinear = mixBilinear;

const mixQuadratic = (a, b, c, t) => {
  const s = 1 - t;
  return a * s * s + b * 2 * s * t + c * t * t;
};

exports.mixQuadratic = mixQuadratic;

const mixCubic = (a, b, c, d, t) => {
  const t2 = t * t;
  const s = 1 - t;
  const s2 = s * s;
  return a * s2 * s + b * 3 * s2 * t + c * 3 * t2 * s + d * t2 * t;
};
/**
 * Returns hermite interpolation of `a, b, c, d` at normalized position
 * `t`, where `a` and `d` are used as predecessor/successor of `b` / `c`
 * and only inform the tangent of the interpolation curve. The
 * interpolated result is that of `b` and `c`.
 *
 * Assumes all inputs are uniformly spaced. If that's not the case, use
 * `mixCubicHermite()` with one of the tangent generators supporting
 * non-uniform spacing of points.
 *
 * See: https://www.desmos.com/calculator/j4gf8g9vkr
 *
 * Source:
 * https://www.musicdsp.org/en/latest/Other/93-hermite-interpollation.html
 *
 * @see mixCubicHermite
 * @see tangentCardinal
 * @see tangentDiff3
 *
 * @param a
 * @param b
 * @param c
 * @param d
 * @param t
 */


exports.mixCubic = mixCubic;

const mixHermite = (a, b, c, d, t) => {
  const y1 = 0.5 * (c - a);
  const y2 = 1.5 * (b - c) + 0.5 * (d - a);
  return ((y2 * t + a - b + y1 - y2) * t + y1) * t + b;
};
/**
 * Computes cubic-hermite interpolation between `a` / `b` at normalized
 * time `t` and using respective tangents `ta` / `tb`.
 *
 * https://en.wikipedia.org/wiki/Cubic_Hermite_spline
 *
 * @see mixHermite
 * @see tangentCardinal
 * @see tangentDiff3
 *
 * @param a
 * @param ta
 * @param b
 * @param tb
 * @param t
 */


exports.mixHermite = mixHermite;

const mixCubicHermite = (a, ta, b, tb, t) => {
  const s = t - 1;
  const t2 = t * t;
  const s2 = s * s;
  const h00 = (1 + 2 * t) * s2;
  const h10 = t * s2;
  const h01 = t2 * (3 - 2 * t);
  const h11 = t2 * s;
  return h00 * a + h10 * ta + h01 * b + h11 * tb;
};
/**
 * Helper function for `mixCubicHermite()`. Computes cardinal tangents
 * based on point neighbors of a point B (not given), i.e. `a`
 * (predecessor) and `c` (successor) and their times (defaults to
 * uniformly spaced). The optional `tension` parameter can be used to
 * scale the tangent where 0.0 produces a Cardinal spline tangent and
 * 1.0 a Catmull-Rom (opposite to the Wikipedia ref).
 *
 * https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline
 *
 * @param prev
 * @param next
 * @param scale
 * @param ta
 * @param tc
 */


exports.mixCubicHermite = mixCubicHermite;

const tangentCardinal = (prev, next, scale = 0.5, ta = 0, tc = 2) => scale * ((next - prev) / (tc - ta));
/**
 * Helper function for `mixCubicHermite()`. Computes tangent for `curr`,
 * based on 3-point finite difference, where `prev` & `next` are
 * `curr`'s neighbors and the `tX` the three points' respective time
 * values. The latter are equally spaced by default (each 1.0 apart).
 *
 * Using this function with equal spacing of 1.0 and together with
 * `mixCubicHermite()` will produce same results as the somewhat
 * optimized variant `mixHermite()`.
 *
 * https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Finite_difference
 *
 * @param prev
 * @param curr
 * @param next
 * @param ta
 * @param tb
 * @param tc
 */


exports.tangentCardinal = tangentCardinal;

const tangentDiff3 = (prev, curr, next, ta = 0, tb = 1, tc = 2) => 0.5 * ((next - curr) / (tc - tb) + (curr - prev) / (tb - ta));
/**
 * HOF interpolator. Takes a timing function `f` and interval `[from,
 * to]`. Returns function which takes normalized time as single arg and
 * returns interpolated value.
 *
 * @param f
 * @param from
 * @param to
 */


exports.tangentDiff3 = tangentDiff3;

const tween = (f, from, to) => t => mix(from, to, f(t));
/**
 * Circular interpolation: `sqrt(1 - (1 - t)^2)`
 *
 * @param t interpolation factor (0.0 .. 1.0)
 */


exports.tween = tween;

const circular = t => {
  t = 1 - t;
  return Math.sqrt(1 - t * t);
};

exports.circular = circular;

const cosine = t => 1 - (Math.cos(t * _api.PI) * 0.5 + 0.5);

exports.cosine = cosine;

const decimated = (n, t) => Math.floor(t * n) / n;

exports.decimated = decimated;

const bounce = (k, amp, t) => {
  const tk = t * k;
  return 1 - amp * Math.sin(tk) / tk * Math.cos(t * _api.HALF_PI);
};
/**
 * HOF exponential easing.
 *
 * - `ease = 1` -> linear
 * - `ease > 1` -> ease in
 * - `ease < 1` -> ease out
 *
 * @param ease easing behavior [0.0 .. ∞]
 * @param t
 */


exports.bounce = bounce;

const ease = (ease, t) => Math.pow(t, ease);
/**
 * HOF impulse generator. Peaks at `t=1/k`
 *
 * @param k impulse width (higher values => shorter impulse)
 */


exports.ease = ease;

const impulse = (k, t) => {
  const h = k * t;
  return h * Math.exp(1 - h);
};

exports.impulse = impulse;

const gain = (k, t) => t < 0.5 ? 0.5 * Math.pow(2 * t, k) : 1 - 0.5 * Math.pow(2 - 2 * t, k);

exports.gain = gain;

const parabola = (k, t) => Math.pow(4.0 * t * (1.0 - t), k);

exports.parabola = parabola;

const cubicPulse = (w, c, t) => {
  t = Math.abs(t - c);
  return t > w ? 0 : (t /= w, 1 - t * t * (3 - 2 * t));
};

exports.cubicPulse = cubicPulse;

const sinc = (k, t) => {
  t = _api.PI * (k * t - 1.0);
  return Math.sin(t) / t;
};
/**
 * Sigmoid function for inputs in [0..1] interval.
 *
 * @param k
 * @param t
 */


exports.sinc = sinc;

const sigmoid = (k, t) => 1 / (1 + Math.exp(-k * (2 * t - 1)));
/**
 * Sigmoid function for inputs in [-1..+1] interval.
 *
 * @param k
 * @param t
 */


exports.sigmoid = sigmoid;

const sigmoid11 = (k, t) => 1 / (1 + Math.exp(-k * t));

exports.sigmoid11 = sigmoid11;
},{"./api":"../node_modules/@thi.ng/math/api.js"}],"../node_modules/@thi.ng/math/prec.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundEps = exports.roundTo = exports.trunc = exports.fract = exports.fmod = void 0;

var _api = require("./api");

/**
 * Returns `a - b * floor(a/b)`
 *
 * @param a
 * @param b
 */
const fmod = (a, b) => a - b * Math.floor(a / b);

exports.fmod = fmod;

const fract = x => x - Math.floor(x);

exports.fract = fract;

const trunc = x => x < 0 ? Math.ceil(x) : Math.floor(x);

exports.trunc = trunc;

const roundTo = (x, prec = 1) => Math.round(x / prec) * prec;
/**
 * Only rounds `x` to nearest int if `fract(x)` < `eps` or > `1-eps`.
 *
 * @param x
 * @param eps
 */


exports.roundTo = roundTo;

const roundEps = (x, eps = _api.EPS) => {
  const f = fract(x);
  return f <= eps || f >= 1 - eps ? Math.round(x) : x;
};

exports.roundEps = roundEps;
},{"./api":"../node_modules/@thi.ng/math/api.js"}],"../node_modules/@thi.ng/math/ratio.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simplifyRatio = void 0;

const simplifyRatio = (num, denom) => {
  let e1 = Math.abs(num);
  let e2 = Math.abs(denom);

  while (true) {
    if (e1 < e2) {
      const t = e1;
      e1 = e2;
      e2 = t;
    }

    const r = e1 % e2;

    if (r) {
      e1 = r;
    } else {
      return [num / e2, denom / e2];
    }
  }
};

exports.simplifyRatio = simplifyRatio;
},{}],"../node_modules/@thi.ng/math/solve.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solveCubic = exports.solveQuadratic = exports.solveLinear = exports.derivative = void 0;

var _api = require("./api");

/**
 * Produces a new function which computes derivative of the given
 * single-arg function. The extra optional arg `eps` is used to
 * define the step width for computing derived values:
 *
 * `f'(x) = (f(x + eps) - f(x)) / eps`
 *
 * The original function is assumed to be fully differentiable
 * in the interval the returned function is going to be used.
 * No validity checks of any form are done.
 *
 * https://en.wikipedia.org/wiki/Derivative#Continuity_and_differentiability
 *
 * @param fn
 * @param eps
 */
const derivative = (f, eps = _api.EPS) => x => (f(x + eps) - f(x)) / eps;
/**
 * Computes solution for linear equation: `ax + b = 0`.
 *
 * Note: `a` MUST NOT be zero.
 *
 * @param a slope
 * @param b constant offset
 */


exports.derivative = derivative;

const solveLinear = (a, b) => -b / a;
/**
 * Computes solutions for quadratic equation: `ax^2 + bx + c = 0`.
 * Returns array of real solutions.
 * Note: `a` MUST NOT be zero. If the quadratic term is missing,
 * use `solveLinear` instead.
 *
 * https://en.wikipedia.org/wiki/Quadratic_function
 * https://en.wikipedia.org/wiki/Quadratic_equation
 *
 * @param a quadratic coefficient
 * @param b linear coefficient
 * @param c constant offset
 * @param eps tolerance to determine multiple roots
 */


exports.solveLinear = solveLinear;

const solveQuadratic = (a, b, c, eps = 1e-9) => {
  const d = 2 * a;
  let r = b * b - 4 * a * c;
  return r < 0 ? [] : r < eps ? [-b / d] : (r = Math.sqrt(r), [(-b - r) / d, (-b + r) / d]);
};
/**
 * Computes solutions for quadratic equation: `ax^3 + bx^2 + c*x + d = 0`.
 * Returns array of solutions, both real & imaginary.
 * Note: `a` MUST NOT be zero. If the cubic term is missing (i.e. zero),
 * use `solveQuadratic` or `solveLinear` instead.
 *
 * https://en.wikipedia.org/wiki/Cubic_function
 *
 * @param a cubic coefficient
 * @param b quadratic coefficient
 * @param c linear coefficient
 * @param d constant offset
 * @param eps tolerance to determine multiple roots
 */


exports.solveQuadratic = solveQuadratic;

const solveCubic = (a, b, c, d, eps = 1e-9) => {
  const aa = a * a;
  const bb = b * b;
  const ba3 = b / (3 * a);
  const p = (3 * a * c - bb) / (3 * aa);
  const q = (2 * bb * b - 9 * a * b * c + 27 * aa * d) / (27 * aa * a);

  if (Math.abs(p) < eps) {
    return [Math.cbrt(-q) - ba3];
  } else if (Math.abs(q) < eps) {
    return p < 0 ? [-Math.sqrt(-p) - ba3, -ba3, Math.sqrt(-p) - ba3] : [-ba3];
  } else {
    const denom = q * q / 4 + p * p * p / 27;

    if (Math.abs(denom) < eps) {
      return [-1.5 * q / p - ba3, 3 * q / p - ba3];
    } else if (denom > 0) {
      const u = Math.cbrt(-q / 2 - Math.sqrt(denom));
      return [u - p / (3 * u) - ba3];
    } else {
      const u = 2 * Math.sqrt(-p / 3),
            t = Math.acos(3 * q / p / u) / 3,
            k = 2 * Math.PI / 3;
      return [u * Math.cos(t) - ba3, u * Math.cos(t - k) - ba3, u * Math.cos(t - 2 * k) - ba3];
    }
  }
};

exports.solveCubic = solveCubic;
},{"./api":"../node_modules/@thi.ng/math/api.js"}],"../node_modules/@thi.ng/math/step.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expStep = exports.smootherStep = exports.smoothStep = exports.step = void 0;

var _interval = require("./interval");

/**
 * Step/threshold function.
 *
 * @param edge threshold
 * @param x test value
 * @returns 0, if `x < e`, else 1
 */
const step = (edge, x) => x < edge ? 0 : 1;
/**
 * GLSL-style smoothStep threshold function.
 *
 * @param edge lower threshold
 * @param edge2 upper threshold
 * @param x test value
 * @returns 0, if `x < edge1`, 1 if `x > edge2`, else sigmoid interpolation
 */


exports.step = step;

const smoothStep = (edge, edge2, x) => {
  x = (0, _interval.clamp01)((x - edge) / (edge2 - edge));
  return (3 - 2 * x) * x * x;
};
/**
 * Similar to `smoothStep()` but using different polynomial.
 *
 * @param edge
 * @param edge2
 * @param x
 */


exports.smoothStep = smoothStep;

const smootherStep = (edge, edge2, x) => {
  x = (0, _interval.clamp01)((x - edge) / (edge2 - edge));
  return x * x * x * (x * (x * 6 - 15) + 10);
};
/**
 * Exponential ramp with variable shape, e.g.
 *
 * - S-curve: k=8, n=4
 * - Step near 1.0: k=8, n=20
 * - Pulse: k=0.005, n=-10
 * - Ease-in: k=0.5, n=0.25
 *
 * @param k
 * @param n
 * @param x
 */


exports.smootherStep = smootherStep;

const expStep = (k, n, x) => 1 - Math.exp(-k * Math.pow(x, n));

exports.expStep = expStep;
},{"./interval":"../node_modules/@thi.ng/math/interval.js"}],"../node_modules/@thi.ng/math/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _abs = require("./abs");

Object.keys(_abs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _abs[key];
    }
  });
});

var _angle = require("./angle");

Object.keys(_angle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _angle[key];
    }
  });
});

var _crossing = require("./crossing");

Object.keys(_crossing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _crossing[key];
    }
  });
});

var _eqdelta = require("./eqdelta");

Object.keys(_eqdelta).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eqdelta[key];
    }
  });
});

var _extrema = require("./extrema");

Object.keys(_extrema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _extrema[key];
    }
  });
});

var _fit = require("./fit");

Object.keys(_fit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fit[key];
    }
  });
});

var _int = require("./int");

Object.keys(_int).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _int[key];
    }
  });
});

var _interval = require("./interval");

Object.keys(_interval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interval[key];
    }
  });
});

var _minError = require("./min-error");

Object.keys(_minError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _minError[key];
    }
  });
});

var _mix = require("./mix");

Object.keys(_mix).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mix[key];
    }
  });
});

var _prec = require("./prec");

Object.keys(_prec).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _prec[key];
    }
  });
});

var _ratio = require("./ratio");

Object.keys(_ratio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ratio[key];
    }
  });
});

var _solve = require("./solve");

Object.keys(_solve).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _solve[key];
    }
  });
});

var _step = require("./step");

Object.keys(_step).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _step[key];
    }
  });
});
},{"./api":"../node_modules/@thi.ng/math/api.js","./abs":"../node_modules/@thi.ng/math/abs.js","./angle":"../node_modules/@thi.ng/math/angle.js","./crossing":"../node_modules/@thi.ng/math/crossing.js","./eqdelta":"../node_modules/@thi.ng/math/eqdelta.js","./extrema":"../node_modules/@thi.ng/math/extrema.js","./fit":"../node_modules/@thi.ng/math/fit.js","./int":"../node_modules/@thi.ng/math/int.js","./interval":"../node_modules/@thi.ng/math/interval.js","./min-error":"../node_modules/@thi.ng/math/min-error.js","./mix":"../node_modules/@thi.ng/math/mix.js","./prec":"../node_modules/@thi.ng/math/prec.js","./ratio":"../node_modules/@thi.ng/math/ratio.js","./solve":"../node_modules/@thi.ng/math/solve.js","./step":"../node_modules/@thi.ng/math/step.js"}],"../node_modules/@thi.ng/transducers/xform/interpolate-hermite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolateHermite = interpolateHermite;

var _math = require("@thi.ng/math");

var _interpolate = require("./interpolate");

function interpolateHermite(n, src) {
  return (0, _interpolate.interpolate)((chunk, t) => (0, _math.mixHermite)(...chunk, t), 4, n, src);
}
},{"@thi.ng/math":"../node_modules/@thi.ng/math/index.js","./interpolate":"../node_modules/@thi.ng/transducers/xform/interpolate.js"}],"../node_modules/@thi.ng/transducers/xform/interpolate-linear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolateLinear = interpolateLinear;

var _math = require("@thi.ng/math");

var _interpolate = require("./interpolate");

function interpolateLinear(n, src) {
  return (0, _interpolate.interpolate)((chunk, t) => (0, _math.mix)(...chunk, t), 2, n, src);
}
},{"@thi.ng/math":"../node_modules/@thi.ng/math/index.js","./interpolate":"../node_modules/@thi.ng/transducers/xform/interpolate.js"}],"../node_modules/@thi.ng/transducers/xform/interpose.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpose = interpose;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function interpose(sep, src) {
  return src ? (0, _iterator.iterator)(interpose(sep), src) : rfn => {
    const r = rfn[2];

    const _sep = typeof sep === "function" ? sep : () => sep;

    let first = true;
    return (0, _compr.compR)(rfn, (acc, x) => {
      if (first) {
        first = false;
        return r(acc, x);
      }

      acc = r(acc, _sep());
      return (0, _reduced.isReduced)(acc) ? acc : r(acc, x);
    });
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/keep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keep = keep;

var _compose = require("@thi.ng/compose");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function keep(...args) {
  return (0, _iterator.$iter)(keep, args) || (rfn => {
    const r = rfn[2];
    const pred = args[0] || _compose.identity;
    return (0, _compr.compR)(rfn, (acc, x) => pred(x) != null ? r(acc, x) : acc);
  });
}
},{"@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js","../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/labeled.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.labeled = labeled;

var _checks = require("@thi.ng/checks");

var _iterator = require("../iterator");

var _map = require("./map");

function labeled(id, src) {
  return src ? (0, _iterator.iterator1)(labeled(id), src) : (0, _map.map)((0, _checks.isFunction)(id) ? x => [id(x), x] : x => [id, x]);
}
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/func/deep-transform.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepTransform = void 0;

var _checks = require("@thi.ng/checks");

/**
 * Higher-order deep object transformer. Accepts a nested `spec`
 * array reflecting same key structure as the object to be mapped,
 * but with functions or sub-specs as their values.
 * Returns a new function, which when called, recursively applies
 * nested transformers in post-order traversal (child transformers
 * are run first) and returns the result of the root transformer.
 *
 * The transform specs are given as arrays in this format:
 *
 * ```
 * [tx-function, {key1: [tx-function, {...}], key2: tx-fn}]
 * ```
 *
 * If a key in the spec has no further sub maps, its transform
 * function can be given directly without having to wrap it into
 * the usual array structure.
 *
 * ```
 * // source object to be transformed
 * src = {
 *    meta: {
 *      author: { name: "Alice", email: "a@b.com" },
 *      date: 1041510896000
 *    },
 *    type: "post",
 *    title: "Hello world",
 *    body: "Ratione necessitatibus doloremque itaque."
 * };
 *
 * // deep transformation spec
 * spec = [
 *    // root transform (called last)
 *    ({type, meta, title, body}) => ["div", {class: type}, title, meta, body],
 *    // object of transform sub-specs
 *    {
 *      meta: [
 *        ({author, date}) => ["div.meta", author, `(${date})`],
 *        {
 *          author: ({email, name}) => ["a", {href: `mailto:${email}`}, name],
 *          date: (d) => new Date(d).toLocaleString()
 *        }
 *      ],
 *      title: (title) => ["h1", title]
 *    }
 * ];
 *
 * // build transformer & apply to src
 * deepTransform(spec)(src);
 *
 * // [ "div",
 * //   { class: "article" },
 * //   [ "h1", "Hello world" ],
 * //   [ "div.meta",
 * //     [ "a", { href: "mailto:a@.b.com" }, "Alice" ],
 * //     "(1/2/2003, 12:34:56 PM)" ],
 * //   "Ratione necessitatibus doloremque itaque." ]
 * ```
 *
 * @param spec transformation spec
 */
const deepTransform = spec => {
  if ((0, _checks.isFunction)(spec)) {
    return spec;
  }

  const mapfns = Object.keys(spec[1] || {}).reduce((acc, k) => (acc[k] = deepTransform(spec[1][k]), acc), {});
  return x => {
    const res = Object.assign({}, x);

    for (let k in mapfns) {
      res[k] = mapfns[k](res[k]);
    }

    return spec[0](res);
  };
};

exports.deepTransform = deepTransform;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js"}],"../node_modules/@thi.ng/transducers/xform/map-deep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDeep = mapDeep;

var _deepTransform = require("../func/deep-transform");

var _iterator = require("../iterator");

var _map = require("./map");

function mapDeep(spec, src) {
  return src ? (0, _iterator.iterator1)(mapDeep(spec), src) : (0, _map.map)((0, _deepTransform.deepTransform)(spec));
}
},{"../func/deep-transform":"../node_modules/@thi.ng/transducers/func/deep-transform.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/map-keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapKeys = mapKeys;

var _iterator = require("../iterator");

var _map = require("./map");

function mapKeys(...args) {
  const iter = (0, _iterator.$iter)(mapKeys, args);

  if (iter) {
    return iter;
  }

  const keys = args[0];
  const copy = args[1] !== false;
  return (0, _map.map)(x => {
    const res = copy ? Object.assign({}, x) : x;

    for (let k in keys) {
      res[k] = keys[k](x[k]);
    }

    return res;
  });
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/map-nth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapNth = mapNth;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function mapNth(...args) {
  const iter = (0, _iterator.$iter)(mapNth, args);

  if (iter) {
    return iter;
  }

  let n = args[0] - 1;
  let offset;
  let fn;

  if (typeof args[1] === "number") {
    offset = args[1];
    fn = args[2];
  } else {
    fn = args[1];
    offset = 0;
  }

  return rfn => {
    const r = rfn[2];
    let skip = 0,
        off = offset;
    return (0, _compr.compR)(rfn, (acc, x) => {
      if (off === 0) {
        if (skip === 0) {
          skip = n;
          return r(acc, fn(x));
        }

        skip--;
      } else {
        off--;
      }

      return r(acc, x);
    });
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/map-vals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapVals = mapVals;

var _iterator = require("../iterator");

var _map = require("./map");

function mapVals(...args) {
  const iter = (0, _iterator.$iter)(mapVals, args);

  if (iter) {
    return iter;
  }

  const fn = args[0];
  const copy = args[1] !== false;
  return (0, _map.map)(x => {
    const res = copy ? {} : x;

    for (let k in x) {
      res[k] = fn(x[k]);
    }

    return res;
  });
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/take.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.take = take;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function take(n, src) {
  return src ? (0, _iterator.iterator)(take(n), src) : rfn => {
    const r = rfn[2];
    let m = n;
    return (0, _compr.compR)(rfn, (acc, x) => --m > 0 ? r(acc, x) : m === 0 ? (0, _reduced.ensureReduced)(r(acc, x)) : (0, _reduced.reduced)(acc));
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/match-first.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchFirst = matchFirst;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _filter = require("./filter");

var _take = require("./take");

function matchFirst(pred, src) {
  return src ? [...(0, _iterator.iterator1)(matchFirst(pred), src)][0] : (0, _comp.comp)((0, _filter.filter)(pred), (0, _take.take)(1));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./filter":"../node_modules/@thi.ng/transducers/xform/filter.js","./take":"../node_modules/@thi.ng/transducers/xform/take.js"}],"../node_modules/@thi.ng/transducers/internal/drain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__drain = void 0;

var _reduced = require("../reduced");

/**
 * Helper HOF yielding a buffer drain completion function for some
 * transducers.
 *
 * @param buf
 * @param complete
 * @param reduce
 */
const __drain = (buf, complete, reduce) => acc => {
  while (buf.length && !(0, _reduced.isReduced)(acc)) {
    acc = reduce(acc, buf.shift());
  }

  return complete(acc);
};

exports.__drain = __drain;
},{"../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/take-last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeLast = takeLast;

var _drain = require("../internal/drain");

var _iterator = require("../iterator");

function takeLast(n, src) {
  return src ? (0, _iterator.iterator)(takeLast(n), src) : ([init, complete, reduce]) => {
    const buf = [];
    return [init, (0, _drain.__drain)(buf, complete, reduce), (acc, x) => {
      if (buf.length === n) {
        buf.shift();
      }

      buf.push(x);
      return acc;
    }];
  };
}
},{"../internal/drain":"../node_modules/@thi.ng/transducers/internal/drain.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/match-last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchLast = matchLast;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _filter = require("./filter");

var _takeLast = require("./take-last");

function matchLast(pred, src) {
  return src ? [...(0, _iterator.iterator)(matchLast(pred), src)][0] : (0, _comp.comp)((0, _filter.filter)(pred), (0, _takeLast.takeLast)(1));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./filter":"../node_modules/@thi.ng/transducers/xform/filter.js","./take-last":"../node_modules/@thi.ng/transducers/xform/take-last.js"}],"../node_modules/@thi.ng/transducers/xform/moving-average.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movingAverage = movingAverage;

var _errors = require("@thi.ng/errors");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function movingAverage(period, src) {
  return src ? (0, _iterator.iterator1)(movingAverage(period), src) : rfn => {
    period |= 0;
    period < 2 && (0, _errors.illegalArgs)("period must be >= 2");
    const reduce = rfn[2];
    const window = [];
    let sum = 0;
    return (0, _compr.compR)(rfn, (acc, x) => {
      const n = window.push(x);
      sum += x;
      n > period && (sum -= window.shift());
      return n >= period ? reduce(acc, sum / period) : acc;
    });
  };
}
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/internal/sort-opts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__sortOpts = void 0;

var _compare = require("@thi.ng/compare");

var _compose = require("@thi.ng/compose");

const __sortOpts = opts => Object.assign({
  key: _compose.identity,
  compare: _compare.compare
}, opts);

exports.__sortOpts = __sortOpts;
},{"@thi.ng/compare":"../node_modules/@thi.ng/compare/index.js","@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js"}],"../node_modules/@thi.ng/transducers/xform/moving-median.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movingMedian = movingMedian;

var _comp = require("../func/comp");

var _sortOpts = require("../internal/sort-opts");

var _iterator = require("../iterator");

var _map = require("./map");

var _partition = require("./partition");

function movingMedian(...args) {
  const iter = (0, _iterator.$iter)(movingMedian, args);

  if (iter) {
    return iter;
  }

  const {
    key,
    compare
  } = (0, _sortOpts.__sortOpts)(args[1]);
  const n = args[0];
  const m = n >> 1;
  return (0, _comp.comp)((0, _partition.partition)(n, 1, true), (0, _map.map)(window => window.slice().sort((a, b) => compare(key(a), key(b)))[m]));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../internal/sort-opts":"../node_modules/@thi.ng/transducers/internal/sort-opts.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js","./partition":"../node_modules/@thi.ng/transducers/xform/partition.js"}],"../node_modules/@thi.ng/transducers/xform/multiplex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiplex = multiplex;

var _compose = require("@thi.ng/compose");

var _step = require("../step");

var _map = require("./map");

function multiplex(...args) {
  return (0, _map.map)(_compose.juxt.apply(null, args.map(_step.step)));
}
},{"@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js","../step":"../node_modules/@thi.ng/transducers/step.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/func/renamer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renamer = void 0;

const renamer = kmap => {
  const ks = Object.keys(kmap);
  const [a2, b2, c2] = ks;
  const [a1, b1, c1] = ks.map(k => kmap[k]);

  switch (ks.length) {
    case 3:
      return x => {
        const res = {};
        let v;
        v = x[c1], v !== undefined && (res[c2] = v);
        v = x[b1], v !== undefined && (res[b2] = v);
        v = x[a1], v !== undefined && (res[a2] = v);
        return res;
      };

    case 2:
      return x => {
        const res = {};
        let v;
        v = x[b1], v !== undefined && (res[b2] = v);
        v = x[a1], v !== undefined && (res[a2] = v);
        return res;
      };

    case 1:
      return x => {
        const res = {};
        let v = x[a1];
        v !== undefined && (res[a2] = v);
        return res;
      };

    default:
      return x => {
        let k, v;
        const res = {};

        for (let i = ks.length - 1; i >= 0; i--) {
          k = ks[i], v = x[kmap[k]], v !== undefined && (res[k] = v);
        }

        return res;
      };
  }
};

exports.renamer = renamer;
},{}],"../node_modules/@thi.ng/transducers/xform/rename.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rename = rename;

var _checks = require("@thi.ng/checks");

var _comp = require("../func/comp");

var _renamer = require("../func/renamer");

var _iterator = require("../iterator");

var _transduce = require("../transduce");

var _filter = require("./filter");

var _map = require("./map");

function rename(...args) {
  const iter = args.length > 2 && (0, _iterator.$iter)(rename, args);

  if (iter) {
    return iter;
  }

  let kmap = args[0];

  if ((0, _checks.isArray)(kmap)) {
    kmap = kmap.reduce((acc, k, i) => (acc[k] = i, acc), {});
  }

  if (args[1]) {
    const ks = Object.keys(kmap);
    return (0, _map.map)(y => (0, _transduce.transduce)((0, _comp.comp)((0, _map.map)(k => [k, y[kmap[k]]]), (0, _filter.filter)(x => x[1] !== undefined)), args[1], ks));
  } else {
    return (0, _map.map)((0, _renamer.renamer)(kmap));
  }
}
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../func/renamer":"../node_modules/@thi.ng/transducers/func/renamer.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../transduce":"../node_modules/@thi.ng/transducers/transduce.js","./filter":"../node_modules/@thi.ng/transducers/xform/filter.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/multiplex-obj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiplexObj = multiplexObj;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _multiplex = require("./multiplex");

var _rename = require("./rename");

function multiplexObj(...args) {
  const iter = (0, _iterator.$iter)(multiplexObj, args);

  if (iter) {
    return iter;
  }

  const [xforms, rfn] = args;
  const ks = Object.keys(xforms);
  return (0, _comp.comp)(_multiplex.multiplex.apply(null, ks.map(k => xforms[k])), (0, _rename.rename)(ks, rfn));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./multiplex":"../node_modules/@thi.ng/transducers/xform/multiplex.js","./rename":"../node_modules/@thi.ng/transducers/xform/rename.js"}],"../node_modules/@thi.ng/transducers/xform/noop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = void 0;

/**
 * No-op / pass-through transducer, essentially the same as:
 * `map(identity)`, but faster. Useful for testing and / or to keep
 * existing values in a `multiplex()` tuple lane.
 */
const noop = () => rfn => rfn;

exports.noop = noop;
},{}],"../node_modules/@thi.ng/transducers/xform/pad-last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padLast = padLast;

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function padLast(n, fill, src) {
  return src ? (0, _iterator.iterator)(padLast(n, fill), src) : ([init, complete, reduce]) => {
    let m = 0;
    return [init, acc => {
      let rem = m % n;

      if (rem > 0) {
        while (++rem <= n && !(0, _reduced.isReduced)(acc)) {
          acc = reduce(acc, fill);
        }
      }

      return complete(acc);
    }, (acc, x) => (m++, reduce(acc, x))];
  };
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/page.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.page = page;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _drop = require("./drop");

var _take = require("./take");

function page(...args) {
  return (0, _iterator.$iter)(page, args) || (0, _comp.comp)((0, _drop.drop)(args[0] * (args[1] || 10)), (0, _take.take)(args[1] || 10));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./drop":"../node_modules/@thi.ng/transducers/xform/drop.js","./take":"../node_modules/@thi.ng/transducers/xform/take.js"}],"../node_modules/@thi.ng/transducers/xform/partition-by.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionBy = partitionBy;

var _api = require("@thi.ng/api");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function partitionBy(...args) {
  return (0, _iterator.$iter)(partitionBy, args, _iterator.iterator) || (([init, complete, reduce]) => {
    const fn = args[0];
    const f = args[1] === true ? fn() : fn;
    let prev = _api.SEMAPHORE;
    let chunk;
    return [init, acc => {
      if (chunk && chunk.length) {
        acc = reduce(acc, chunk);
        chunk = null;
      }

      return complete(acc);
    }, (acc, x) => {
      const curr = f(x);

      if (prev === _api.SEMAPHORE) {
        prev = curr;
        chunk = [x];
      } else if (curr === prev) {
        chunk.push(x);
      } else {
        chunk && (acc = reduce(acc, chunk));
        chunk = (0, _reduced.isReduced)(acc) ? null : [x];
        prev = curr;
      }

      return acc;
    }];
  });
}
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/partition-of.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionOf = partitionOf;

var _iterator = require("../iterator");

var _partitionBy = require("./partition-by");

function partitionOf(sizes, src) {
  return src ? (0, _iterator.iterator)(partitionOf(sizes), src) : (0, _partitionBy.partitionBy)(() => {
    let i = 0,
        j = 0;
    return () => {
      if (i++ === sizes[j]) {
        i = 1;
        j = (j + 1) % sizes.length;
      }

      return j;
    };
  }, true);
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./partition-by":"../node_modules/@thi.ng/transducers/xform/partition-by.js"}],"../node_modules/@thi.ng/transducers/xform/partition-sort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionSort = partitionSort;

var _comp = require("../func/comp");

var _sortOpts = require("../internal/sort-opts");

var _iterator = require("../iterator");

var _mapcat = require("./mapcat");

var _partition = require("./partition");

function partitionSort(...args) {
  const iter = (0, _iterator.$iter)(partitionSort, args, _iterator.iterator);

  if (iter) {
    return iter;
  }

  const {
    key,
    compare
  } = (0, _sortOpts.__sortOpts)(args[1]);
  return (0, _comp.comp)((0, _partition.partition)(args[0], true), (0, _mapcat.mapcat)(window => window.slice().sort((a, b) => compare(key(a), key(b)))));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../internal/sort-opts":"../node_modules/@thi.ng/transducers/internal/sort-opts.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./mapcat":"../node_modules/@thi.ng/transducers/xform/mapcat.js","./partition":"../node_modules/@thi.ng/transducers/xform/partition.js"}],"../node_modules/@thi.ng/transducers/xform/partition-sync.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionSync = partitionSync;

var _checks = require("@thi.ng/checks");

var _compose = require("@thi.ng/compose");

var _errors = require("@thi.ng/errors");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function partitionSync(...args) {
  return (0, _iterator.$iter)(partitionSync, args, _iterator.iterator) || (([init, complete, reduce]) => {
    let curr = {};
    let first = true;
    const currKeys = new Set();
    const {
      key,
      mergeOnly,
      reset,
      all,
      backPressure
    } = Object.assign({
      key: _compose.identity,
      mergeOnly: false,
      reset: true,
      all: true,
      backPressure: 0
    }, args[1]);
    const ks = (0, _checks.isArray)(args[0]) ? new Set(args[0]) : args[0];

    if (mergeOnly || backPressure < 1) {
      return [init, acc => {
        if (reset && all && currKeys.size > 0 || !reset && first) {
          acc = reduce(acc, curr);
          curr = {};
          currKeys.clear();
          first = false;
        }

        return complete(acc);
      }, (acc, x) => {
        const k = key(x);

        if (ks.has(k)) {
          curr[k] = x;
          currKeys.add(k);

          if (mergeOnly || requiredInputs(ks, currKeys)) {
            acc = reduce(acc, curr);
            first = false;

            if (reset) {
              curr = {};
              currKeys.clear();
            } else {
              curr = Object.assign({}, curr);
            }
          }
        }

        return acc;
      }];
    } else {
      // with backpressure / caching...
      const cache = new Map();
      return [init, acc => {
        if (all && currKeys.size > 0) {
          acc = reduce(acc, collect(cache, currKeys));
          currKeys.clear();
        }

        return complete(acc);
      }, (acc, x) => {
        const k = key(x);

        if (ks.has(k)) {
          let slot = cache.get(k);
          !slot && cache.set(k, slot = []);
          slot.length >= backPressure && (0, _errors.illegalState)(`max back pressure (${backPressure}) exceeded for input: ${String(k)}`);
          slot.push(x);
          currKeys.add(k);

          while (requiredInputs(ks, currKeys)) {
            acc = reduce(acc, collect(cache, currKeys));
            first = false;
            if ((0, _reduced.isReduced)(acc)) break;
          }
        }

        return acc;
      }];
    }
  });
}

const requiredInputs = (required, curr) => {
  if (curr.size < required.size) return false;

  for (let id of required) {
    if (!curr.has(id)) return false;
  }

  return true;
};

const collect = (cache, currKeys) => {
  const curr = {};

  for (let id of currKeys) {
    const slot = cache.get(id);
    curr[id] = slot.shift();
    !slot.length && currKeys.delete(id);
  }

  return curr;
};
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/pluck.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluck = pluck;

var _iterator = require("../iterator");

var _map = require("./map");

function pluck(key, src) {
  return src ? (0, _iterator.iterator1)(pluck(key), src) : (0, _map.map)(x => x[key]);
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/sample.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sample = sample;

var _random = require("@thi.ng/random");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function sample(...args) {
  const iter = (0, _iterator.$iter)(sample, args);

  if (iter) {
    return iter;
  }

  const prob = args[0];
  const rnd = args[1] || _random.SYSTEM;
  return rfn => {
    const r = rfn[2];
    return (0, _compr.compR)(rfn, (acc, x) => rnd.float() < prob ? r(acc, x) : acc);
  };
}
},{"@thi.ng/random":"../node_modules/@thi.ng/random/index.js","../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/scan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scan = scan;

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function scan(...args) {
  return args.length > 2 && (0, _iterator.$iter)(scan, args, _iterator.iterator) || (([inito, completeo, reduceo]) => {
    const [initi, completei, reducei] = args[0];
    let acc = args.length > 1 && args[1] != null ? args[1] : initi();
    return [inito, _acc => {
      let a = completei(acc);

      if (a !== acc) {
        _acc = (0, _reduced.unreduced)(reduceo(_acc, a));
      }

      acc = a;
      return completeo(_acc);
    }, (_acc, x) => {
      acc = reducei(acc, x);

      if ((0, _reduced.isReduced)(acc)) {
        return (0, _reduced.ensureReduced)(reduceo(_acc, acc.deref()));
      }

      return reduceo(_acc, acc);
    }];
  });
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/func/key-selector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keySelector = void 0;

var _renamer = require("./renamer");

const keySelector = keys => (0, _renamer.renamer)(keys.reduce((acc, x) => (acc[x] = x, acc), {}));

exports.keySelector = keySelector;
},{"./renamer":"../node_modules/@thi.ng/transducers/func/renamer.js"}],"../node_modules/@thi.ng/transducers/xform/select-keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectKeys = selectKeys;

var _keySelector = require("../func/key-selector");

var _iterator = require("../iterator");

var _map = require("./map");

function selectKeys(keys, src) {
  return src ? (0, _iterator.iterator1)(selectKeys(keys), src) : (0, _map.map)((0, _keySelector.keySelector)(keys));
}
},{"../func/key-selector":"../node_modules/@thi.ng/transducers/func/key-selector.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/side-effect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sideEffect = void 0;

var _map = require("./map");

/**
 * Helper transducer. Applies given `fn` to each input value, presumably
 * for side effects. Discards function's result and yields original
 * inputs.
 *
 * @param fn side effect
 */
const sideEffect = fn => (0, _map.map)(x => (fn(x), x));

exports.sideEffect = sideEffect;
},{"./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/sliding-window.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slidingWindow = slidingWindow;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function slidingWindow(...args) {
  const iter = (0, _iterator.$iter)(slidingWindow, args);

  if (iter) {
    return iter;
  }

  const size = args[0];
  const partial = args[1] !== false;
  return rfn => {
    const reduce = rfn[2];
    let buf = [];
    return (0, _compr.compR)(rfn, (acc, x) => {
      buf.push(x);

      if (partial || buf.length === size) {
        acc = reduce(acc, buf);
        buf = buf.slice(buf.length === size ? 1 : 0);
      }

      return acc;
    });
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/stream-shuffle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.streamShuffle = streamShuffle;

var _arrays = require("@thi.ng/arrays");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function streamShuffle(...args) {
  return (0, _iterator.$iter)(streamShuffle, args, _iterator.iterator) || (([init, complete, reduce]) => {
    const n = args[0];
    const maxSwaps = args[1] || n;
    const buf = [];
    return [init, acc => {
      while (buf.length && !(0, _reduced.isReduced)(acc)) {
        (0, _arrays.shuffle)(buf, maxSwaps);
        acc = reduce(acc, buf.shift());
      }

      acc = complete(acc);
      return acc;
    }, (acc, x) => {
      buf.push(x);
      (0, _arrays.shuffle)(buf, maxSwaps);

      if (buf.length === n) {
        acc = reduce(acc, buf.shift());
      }

      return acc;
    }];
  });
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/stream-sort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.streamSort = streamSort;

var _arrays = require("@thi.ng/arrays");

var _drain = require("../internal/drain");

var _sortOpts = require("../internal/sort-opts");

var _iterator = require("../iterator");

function streamSort(...args) {
  const iter = (0, _iterator.$iter)(streamSort, args, _iterator.iterator);

  if (iter) {
    return iter;
  }

  const {
    key,
    compare
  } = (0, _sortOpts.__sortOpts)(args[1]);
  const n = args[0];
  return ([init, complete, reduce]) => {
    const buf = [];
    return [init, (0, _drain.__drain)(buf, complete, reduce), (acc, x) => {
      const idx = (0, _arrays.binarySearch)(buf, x, key, compare);
      buf.splice(idx < 0 ? -(idx + 1) : idx, 0, x);

      if (buf.length === n) {
        acc = reduce(acc, buf.shift());
      }

      return acc;
    }];
  };
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","../internal/drain":"../node_modules/@thi.ng/transducers/internal/drain.js","../internal/sort-opts":"../node_modules/@thi.ng/transducers/internal/sort-opts.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/struct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.struct = struct;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _mapKeys = require("./map-keys");

var _partition = require("./partition");

var _partitionOf = require("./partition-of");

var _rename = require("./rename");

function struct(fields, src) {
  return src ? (0, _iterator.iterator)(struct(fields), src) : (0, _comp.comp)((0, _partitionOf.partitionOf)(fields.map(f => f[1])), (0, _partition.partition)(fields.length), (0, _rename.rename)(fields.map(f => f[0])), (0, _mapKeys.mapKeys)(fields.reduce((acc, f) => f[2] ? (acc[f[0]] = f[2], acc) : acc, {}), false));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map-keys":"../node_modules/@thi.ng/transducers/xform/map-keys.js","./partition":"../node_modules/@thi.ng/transducers/xform/partition.js","./partition-of":"../node_modules/@thi.ng/transducers/xform/partition-of.js","./rename":"../node_modules/@thi.ng/transducers/xform/rename.js"}],"../node_modules/@thi.ng/transducers/xform/swizzle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swizzle = swizzle;

var _arrays = require("@thi.ng/arrays");

var _iterator = require("../iterator");

var _map = require("./map");

function swizzle(order, src) {
  return src ? (0, _iterator.iterator1)(swizzle(order), src) : (0, _map.map)((0, _arrays.swizzle)(order));
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/take-nth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeNth = takeNth;

var _iterator = require("../iterator");

var _throttle = require("./throttle");

function takeNth(n, src) {
  if (src) {
    return (0, _iterator.iterator1)(takeNth(n), src);
  }

  n = Math.max(0, n - 1);
  return (0, _throttle.throttle)(() => {
    let skip = 0;
    return () => skip === 0 ? (skip = n, true) : (skip--, false);
  });
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./throttle":"../node_modules/@thi.ng/transducers/xform/throttle.js"}],"../node_modules/@thi.ng/transducers/xform/take-while.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeWhile = takeWhile;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function takeWhile(...args) {
  return (0, _iterator.$iter)(takeWhile, args) || (rfn => {
    const r = rfn[2];
    const pred = args[0];
    let ok = true;
    return (0, _compr.compR)(rfn, (acc, x) => (ok = ok && pred(x)) ? r(acc, x) : (0, _reduced.reduced)(acc));
  });
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/throttle-time.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttleTime = throttleTime;

var _iterator = require("../iterator");

var _throttle = require("./throttle");

function throttleTime(delay, src) {
  return src ? (0, _iterator.iterator1)(throttleTime(delay), src) : (0, _throttle.throttle)(() => {
    let last = 0;
    return () => {
      const t = Date.now();
      return t - last >= delay ? (last = t, true) : false;
    };
  });
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./throttle":"../node_modules/@thi.ng/transducers/xform/throttle.js"}],"../node_modules/@thi.ng/transducers/xform/toggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggle = toggle;

var _iterator = require("../iterator");

function toggle(on, off, initial = false, src) {
  return src ? (0, _iterator.iterator1)(toggle(on, off, initial), src) : ([init, complete, reduce]) => {
    let state = initial;
    return [init, complete, acc => reduce(acc, (state = !state) ? on : off)];
  };
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/trace.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trace = void 0;

var _sideEffect = require("./side-effect");

const trace = (prefix = "") => (0, _sideEffect.sideEffect)(x => console.log(prefix, x));

exports.trace = trace;
},{"./side-effect":"../node_modules/@thi.ng/transducers/xform/side-effect.js"}],"../node_modules/@thi.ng/transducers/xform/word-wrap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wordWrap = wordWrap;

var _iterator = require("../iterator");

var _partitionBy = require("./partition-by");

function wordWrap(...args) {
  const iter = (0, _iterator.$iter)(wordWrap, args, _iterator.iterator);

  if (iter) {
    return iter;
  }

  const lineLength = args[0];
  const {
    delim,
    always
  } = Object.assign({
    delim: 1,
    always: true
  }, args[1]);
  return (0, _partitionBy.partitionBy)(() => {
    let n = 0;
    let flag = false;
    return w => {
      n += w.length + delim;

      if (n > lineLength + (always ? 0 : delim)) {
        flag = !flag;
        n = w.length + delim;
      }

      return flag;
    };
  }, true);
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./partition-by":"../node_modules/@thi.ng/transducers/xform/partition-by.js"}],"../node_modules/@thi.ng/transducers/func/juxtr.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.juxtR = juxtR;

var _reduced = require("../reduced");

function juxtR(...rs) {
  let [a, b, c] = rs;
  const n = rs.length;

  switch (n) {
    case 1:
      {
        const r = a[2];
        return [() => [a[0]()], acc => [a[1](acc[0])], (acc, x) => {
          const aa1 = r(acc[0], x);

          if ((0, _reduced.isReduced)(aa1)) {
            return (0, _reduced.reduced)([(0, _reduced.unreduced)(aa1)]);
          }

          return [aa1];
        }];
      }

    case 2:
      {
        const ra = a[2];
        const rb = b[2];
        return [() => [a[0](), b[0]()], acc => [a[1](acc[0]), b[1](acc[1])], (acc, x) => {
          const aa1 = ra(acc[0], x);
          const aa2 = rb(acc[1], x);

          if ((0, _reduced.isReduced)(aa1) || (0, _reduced.isReduced)(aa2)) {
            return (0, _reduced.reduced)([(0, _reduced.unreduced)(aa1), (0, _reduced.unreduced)(aa2)]);
          }

          return [aa1, aa2];
        }];
      }

    case 3:
      {
        const ra = a[2];
        const rb = b[2];
        const rc = c[2];
        return [() => [a[0](), b[0](), c[0]()], acc => [a[1](acc[0]), b[1](acc[1]), c[1](acc[2])], (acc, x) => {
          const aa1 = ra(acc[0], x);
          const aa2 = rb(acc[1], x);
          const aa3 = rc(acc[2], x);

          if ((0, _reduced.isReduced)(aa1) || (0, _reduced.isReduced)(aa2) || (0, _reduced.isReduced)(aa3)) {
            return (0, _reduced.reduced)([(0, _reduced.unreduced)(aa1), (0, _reduced.unreduced)(aa2), (0, _reduced.unreduced)(aa3)]);
          }

          return [aa1, aa2, aa3];
        }];
      }

    default:
      return [() => rs.map(r => r[0]()), acc => rs.map((r, i) => r[1](acc[i])), (acc, x) => {
        let done = false;
        const res = [];

        for (let i = 0; i < n; i++) {
          let a = rs[i][2](acc[i], x);

          if ((0, _reduced.isReduced)(a)) {
            done = true;
            a = (0, _reduced.unreduced)(a);
          }

          res[i] = a;
        }

        return done ? (0, _reduced.reduced)(res) : res;
      }];
  }
}
},{"../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/func/lookup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lookup3d = exports.lookup2d = exports.lookup1d = void 0;

/**
 * Returns function accepting a single index arg used to
 * lookup value in given array. No bounds checks are done.
 *
 * ```
 * [...map(lookup1d([10, 20, 30]), [2,0,1])]
 * // [ 30, 10, 20 ]
 * ```
 *
 * @param src source data
 */
const lookup1d = src => i => src[i];
/**
 * Returns function accepting a single `[x, y]` index tuple,
 * used to lookup value in given array. Useful for transducers
 * processing 2D data. **Note**: The source data MUST be in
 * row major linearized format, i.e. 1D representation of 2D data
 * (pixel buffer). No bounds checks are done.
 *
 * ```
 * [...map(lookup2d([...range(9)], 3), range2d(2, -1, 0, 3))]
 * // [ 2, 1, 0, 5, 4, 3, 8, 7, 6 ]
 * ```
 *
 * @param src source data
 * @param width number of items along X (columns)
 */


exports.lookup1d = lookup1d;

const lookup2d = (src, width) => i => src[i[0] + i[1] * width];
/**
 * Same as `lookup2d()`, but for 3D data. The index ordering of the
 * source data MUST be in Z, Y, X order (i.e. a stack of row major 2D slices).
 * No bounds checks are done.
 *
 * @param src source data
 * @param width number of items along X (columns)
 * @param height number of items along Y (rows)
 */


exports.lookup2d = lookup2d;

const lookup3d = (src, width, height) => {
  const stridez = width * height;
  return i => src[i[0] + i[1] * width + i[2] * stridez];
};

exports.lookup3d = lookup3d;
},{}],"../node_modules/@thi.ng/transducers/iter/as-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asIterable = asIterable;

/**
 * Helper function to (re)provide given iterable in iterator form.
 *
 * @param src
 */
function* asIterable(src) {
  yield* src;
}
},{}],"../node_modules/@thi.ng/transducers/iter/repeatedly.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatedly = repeatedly;

function* repeatedly(fn, n = Infinity) {
  while (n-- > 0) {
    yield fn();
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/choices.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.choices = void 0;

var _arrays = require("@thi.ng/arrays");

var _random = require("@thi.ng/random");

var _repeatedly = require("./repeatedly");

/**
 * Returns an infinite iterator of random choices and their (optional)
 * weights. If `weights` is given, it must have at least the same size
 * as `choices`. If omitted, each choice will have same probability.
 *
 * ```
 * transduce(take(1000), frequencies(), choices("abcd", [1, 0.5, 0.25, 0.125]))
 * // Map { 'c' => 132, 'a' => 545, 'b' => 251, 'd' => 72 }
 * ```
 *
 * @see weightedRandom
 *
 * @param choices
 * @param weights
 */
const choices = (choices, weights, rnd = _random.SYSTEM) => (0, _repeatedly.repeatedly)(weights ? (0, _random.weightedRandom)((0, _arrays.ensureArray)(choices), weights, rnd) : () => choices[rnd.float(choices.length) | 0]);

exports.choices = choices;
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","@thi.ng/random":"../node_modules/@thi.ng/random/index.js","./repeatedly":"../node_modules/@thi.ng/transducers/iter/repeatedly.js"}],"../node_modules/@thi.ng/transducers/iter/concat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = concat;

var _arrays = require("@thi.ng/arrays");

/**
 * Yields iterator producing concatenation of given iterables.
 * Undefined & null inputs are silently ignored, however any
 * such values produced or contained in an input will remain.
 *
 * ```
 * [...concat([1, 2, 3], null, [4, 5])]
 * // [ 1, 2, 3, 4, 5 ]
 *
 * [...concat([1, 2, 3, undefined], null, [4, 5])]
 * // [ 1, 2, 3, undefined, 4, 5 ]
 * ```
 *
 * @param xs
 */
function* concat(...xs) {
  for (let x of xs) {
    x != null && (yield* (0, _arrays.ensureIterable)(x));
  }
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js"}],"../node_modules/@thi.ng/transducers/iter/cycle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycle = cycle;

function* cycle(input) {
  let cache = [];

  for (let i of input) {
    cache.push(i);
    yield i;
  }

  if (cache.length > 0) {
    while (true) {
      yield* cache;
    }
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/repeat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = repeat;

function* repeat(x, n = Infinity) {
  while (n-- > 0) {
    yield x;
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/extend-sides.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendSides = extendSides;

var _api = require("@thi.ng/api");

var _repeat = require("./repeat");

/**
 * Yields iterator of given iterable which repeats the first and/or last
 * value(s) `numLeft`/`numRight` times (default: 1). By default both
 * sides are repeated, but can be adjusted by setting either of them to
 * zero. `numRight` defaults to same value as `numLeft`.
 *
 * ```
 * [...extendSides([1, 2, 3])]
 * // [ 1,  1, 2, 3,  3]
 *
 * [...extendSides([1, 2, 3], 3)]
 * // [ 1, 1, 1,  1, 2, 3,  3, 3, 3 ]
 *
 * [...extendSides([1, 2, 3], 0, 3)]
 * // [ 1, 2, 3,  3, 3, 3 ]
 * ```
 *
 * @see padSides
 * @see wrapSides
 *
 * @param src
 * @param numLeft
 * @param numRight
 */
function* extendSides(src, numLeft = 1, numRight = numLeft) {
  let prev = _api.SEMAPHORE;

  for (let x of src) {
    if (numLeft > 0 && prev === _api.SEMAPHORE) {
      yield* (0, _repeat.repeat)(x, numLeft);
      numLeft = 0;
    }

    yield x;
    prev = x;
  }

  if (numRight > 0 && prev !== _api.SEMAPHORE) {
    yield* (0, _repeat.repeat)(prev, numRight);
  }
}
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","./repeat":"../node_modules/@thi.ng/transducers/iter/repeat.js"}],"../node_modules/@thi.ng/transducers/iter/iterate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterate = iterate;

/**
 * Yields an infinite iterator of the inductive sequence:
 *
 * f(x+1) = f(f(x))
 *
 * The first value emitted always is `seed` itself, then f(seed),
 * f(f(seed)) etc. The given function is called with the current
 * iteration counter as 2nd arg.
 *
 * ```
 * [...take(5, iterate((x) => x * 2, 1))]
 * // [ 1, 2, 4, 8, 16 ]
 *
 * [...take(8, iterate((x, i) => x * 10 + i, 0))]
 * // [ 0, 1, 12, 123, 1234, 12345, 123456, 1234567 ]
 * ```
 *
 * @param fn
 * @param seed
 */
function* iterate(fn, seed) {
  let i = 0;

  while (true) {
    yield seed;
    seed = fn(seed, ++i);
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keys = keys;

function* keys(x) {
  for (let k in x) {
    if (x.hasOwnProperty(k)) {
      yield k;
    }
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/pad-sides.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padSides = void 0;

var _concat = require("./concat");

var _repeat = require("./repeat");

/**
 * Returns iterator of `src` padded with value `x`, repeated
 * `numLeft`/`numRight` times (default: 1). By default both sides are
 * padded, but can be adjusted by setting either of them to zero.
 * `numRight` defaults to same value as `numLeft`.
 *
 * Essentially, syntax sugar for:
 *
 * ```
 * // default
 * concat(repeat(x, numLeft), src, repeat(x, numRight))
 *
 * // left only
 * concat(repeat(x, numLeft), src)
 *
 * // right only
 * concat(src, repeat(x, numRight))
 * ```
 *
 * @see extendsSides
 * @see wrapSides
 *
 * @param src
 * @param x
 * @param numLeft
 * @param numRight
 */
const padSides = (src, x, numLeft = 1, numRight = numLeft) => numLeft > 0 ? numRight > 0 ? (0, _concat.concat)((0, _repeat.repeat)(x, numLeft), src, (0, _repeat.repeat)(x, numRight)) : (0, _concat.concat)((0, _repeat.repeat)(x, numLeft), src) : numRight > 0 ? (0, _concat.concat)(src, (0, _repeat.repeat)(x, numRight)) : (0, _concat.concat)(src);

exports.padSides = padSides;
},{"./concat":"../node_modules/@thi.ng/transducers/iter/concat.js","./repeat":"../node_modules/@thi.ng/transducers/iter/repeat.js"}],"../node_modules/@thi.ng/transducers/iter/pairs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairs = pairs;

function* pairs(x) {
  for (let k in x) {
    if (x.hasOwnProperty(k)) {
      yield [k, x[k]];
    }
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/permutations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permutations = permutations;
exports.permutationsN = void 0;

var _arrays = require("@thi.ng/arrays");

var _errors = require("@thi.ng/errors");

var _range = require("./range");

function* permutations(...src) {
  const n = src.length - 1;

  if (n < 0) {
    return;
  }

  const step = new Array(n + 1).fill(0);
  const realized = src.map(_arrays.ensureArrayLike);
  const total = realized.reduce((acc, x) => acc * x.length, 1);

  for (let i = 0; i < total; i++) {
    const tuple = [];

    for (let j = n; j >= 0; j--) {
      const r = realized[j];
      let s = step[j];

      if (s === r.length) {
        step[j] = s = 0;
        j > 0 && step[j - 1]++;
      }

      tuple[j] = r[s];
    }

    step[n]++;
    yield tuple;
  }
}
/**
 * Iterator yielding the Cartesian Product for `n` items of `m` values
 * each. If `m` is not given, defaults to value of `n`. The range of `m`
 * is `0..m-1`. The optional `offsets` array can be used to define start
 * values for each dimension.
 *
 * ```
 * [...permutationsN(2)]
 * // [ [0, 0], [0, 1], [1, 0], [1, 1] ]
 *
 * [...permutationsN(2, 3)]
 * // [ [0, 0], [0, 1], [0, 2],
 * //   [1, 0], [1, 1], [1, 2],
 * //   [2, 0], [2, 1], [2, 2] ]
 *
 * [...permutationsN(2, 3, [10, 20])]
 * // [ [ 10, 20 ], [ 10, 21 ], [ 11, 20 ], [ 11, 21 ] ]
 * ```
 *
 * @param n
 * @param m
 * @param offsets
 */


const permutationsN = (n, m = n, offsets) => {
  if (offsets && offsets.length < n) {
    (0, _errors.illegalArgs)(`insufficient offsets, got ${offsets.length}, needed ${n}`);
  }

  const seqs = [];

  while (--n >= 0) {
    const o = offsets ? offsets[n] : 0;
    seqs[n] = (0, _range.range)(o, o + m);
  }

  return permutations.apply(null, seqs);
};

exports.permutationsN = permutationsN;
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./range":"../node_modules/@thi.ng/transducers/iter/range.js"}],"../node_modules/@thi.ng/transducers/iter/range3d.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range3d = range3d;

var _errors = require("@thi.ng/errors");

var _range = require("./range");

function* range3d(...args) {
  let fromX, toX, stepX;
  let fromY, toY, stepY;
  let fromZ, toZ, stepZ;

  switch (args.length) {
    case 9:
      stepX = args[6];
      stepY = args[7];
      stepZ = args[8];

    case 6:
      [fromX, toX, fromY, toY, fromZ, toZ] = args;
      break;

    case 3:
      [toX, toY, toZ] = args;
      fromX = fromY = fromZ = 0;
      break;

    default:
      (0, _errors.illegalArity)(args.length);
  }

  const rx = (0, _range.range)(fromX, toX, stepX);
  const ry = (0, _range.range)(fromY, toY, stepY);

  for (let z of (0, _range.range)(fromZ, toZ, stepZ)) {
    for (let y of ry) {
      for (let x of rx) {
        yield [x, y, z];
      }
    }
  }
}
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./range":"../node_modules/@thi.ng/transducers/iter/range.js"}],"../node_modules/@thi.ng/transducers/iter/reverse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverse = reverse;

var _arrays = require("@thi.ng/arrays");

/**
 * Yields iterator which consumes input and yield its values in reverse
 * order. Important: Input MUST be finite.
 *
 * ```
 * [...tx.reverse("hello world")]
 * // [ "d", "l", "r", "o", "w", " ", "o", "l", "l", "e", "h" ]
 * ```
 *
 * @param input
 */
function* reverse(input) {
  const _input = (0, _arrays.ensureArray)(input);

  let n = _input.length;

  while (--n >= 0) {
    yield _input[n];
  }
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js"}],"../node_modules/@thi.ng/transducers/iter/symmetric.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.symmetric = symmetric;

/**
 * Yields an iterator of all `src` values, followed by the same values
 * in reverse order. Efficiently builds the reversed order via an
 * internal linked list.
 *
 * ```
 * [...symmetric([1, 2, 3])]
 * // [ 1, 2, 3, 3, 2, 1 ]
 * ```
 *
 * @param src
 */
function* symmetric(src) {
  let head = undefined;

  for (let x of src) {
    head = {
      x,
      n: head
    };
    yield x;
  }

  while (head) {
    yield head.x;
    head = head.n;
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/tween.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tween = tween;

var _normRange = require("./norm-range");

var _repeat = require("./repeat");

/**
 * Keyframe based interpolator. Yields a sequence of `num+1` equally
 * spaced, tweened values from given keyframe tuples (`stops`).
 * Keyframes are defined as `[time, value]` tuples. Only values in the
 * closed `[min..max]` time interval will be computed.
 *
 * Interpolation happens in two stages: First the given `init` function
 * is called to transform/prepare pairs of consecutive keyframes into a
 * single interval (user defined). Then, to produce each tweened value
 * calls `mix` with the currently active interval and interpolation time
 * value `t` (re-normalized and relative to current interval). The
 * iterator yields results of these `mix()` function calls.
 *
 * Depending on the overall `num`ber of samples requested and the
 * distance between keyframes, some keyframes MIGHT be skipped. E.g. if
 * requesting 10 samples within [0,1], the interval between two
 * successive keyframes at 0.12 and 0.19 would be skipped entirely,
 * since samples will only be taken at multiples of `1/num` (i.e. 0.0,
 * 0.1, 0.2... in this example).
 *
 * The given keyframe times can lie outside the `min`/`max` range and
 * also don't need to cover the range fully. In the latter case, tweened
 * values before the first or after the last keyframe will yield the
 * value of the first/last keyframe. If only a single keyframe is given
 * in total, all `num` yielded samples will be that keyframe's
 * transformed value.
 *
 * ```
 * [...tween({
 *   num: 10,
 *   min: 0,
 *   max: 100,
 *   init: (a, b) => [a, b],
 *   mix: ([a, b], t) => Math.floor(a + (b - a) * t),
 *   stops: [[20, 100], [50, 200], [80, 0]]
 * })]
 * // [ 100, 100, 100, 133, 166, 200, 133, 66, 0, 0, 0 ]
 * ```
 *
 * Using easing functions (e.g. from thi.ng/math), non-linear
 * interpolation within each keyframe interval can be achieved:
 *
 * ```
 * import { mix, smoothStep } from "@thi.ng/math"
 *
 * [...tween({
 *   num: 10,
 *   min: 0,
 *   max: 100,
 *   init: (a, b) => [a, b],
 *   mix: ([a, b], t) => Math.floor(mix(a, b, smoothStep(0.1, 0.9, t))),
 *   stops: [[20, 100], [50, 200], [80, 0]]
 * })]
 * // [ 100, 100, 100, 120, 179, 200, 158, 41, 0, 0, 0 ]
 * ```
 * @see TweenOpts
 * @see interpolate
 * @see interpolateHermite
 * @see interpolateLinear
 *
 * @param opts
 */
function* tween(opts) {
  const {
    min,
    max,
    num,
    init,
    mix,
    stops
  } = opts;
  let l = stops.length;
  if (l < 1) return;

  if (l === 1) {
    yield* (0, _repeat.repeat)(mix(init(stops[0][1], stops[0][1]), 0), num);
  }

  stops.sort((a, b) => a[0] - b[0]);
  stops[l - 1][0] < max && stops.push([max, stops[l - 1][1]]);
  stops[0][0] > min && stops.unshift([min, stops[0][1]]);
  const range = max - min;
  let start = stops[0][0];
  let end = stops[1][0];
  let delta = end - start;
  let interval = init(stops[0][1], stops[1][1]);
  let i = 1;
  l = stops.length;

  for (let t of (0, _normRange.normRange)(num)) {
    t = min + range * t;

    if (t > end) {
      while (i < l && t > stops[i][0]) i++;

      start = stops[i - 1][0];
      end = stops[i][0];
      delta = end - start;
      interval = init(stops[i - 1][1], stops[i][1]);
    }

    yield mix(interval, delta !== 0 ? (t - start) / delta : 0);
  }
}
},{"./norm-range":"../node_modules/@thi.ng/transducers/iter/norm-range.js","./repeat":"../node_modules/@thi.ng/transducers/iter/repeat.js"}],"../node_modules/@thi.ng/transducers/iter/vals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vals = vals;

function* vals(x) {
  for (let k in x) {
    if (x.hasOwnProperty(k)) {
      yield x[k];
    }
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/wrap-sides.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapSides = wrapSides;

var _arrays = require("@thi.ng/arrays");

var _errors = require("@thi.ng/errors");

var _math = require("@thi.ng/math");

/**
 * Yields iterator of `src` with the last `numLeft` values of `src`
 * prepended at the beginning and/or the first `numRight` values
 * appended at the end. `numLeft` defaults to 1 and `numRight` defaults
 * to same value as `numLeft`, therefore wraps both sides by default and
 * throws error if either `nXXX` < 0 or larger than `src.length`.
 *
 * @see extendSides
 * @see padSides
 *
 * @param src
 * @param numLeft
 * @param numRight
 */
function* wrapSides(src, numLeft = 1, numRight = numLeft) {
  const _src = (0, _arrays.ensureArray)(src);

  !((0, _math.inRange)(numLeft, 0, _src.length) && (0, _math.inRange)(numRight, 0, _src.length)) && (0, _errors.illegalArgs)(`allowed wrap range: [0..${_src.length}]`);

  if (numLeft > 0) {
    for (let m = _src.length, i = m - numLeft; i < m; i++) {
      yield _src[i];
    }
  }

  yield* _src;

  if (numRight > 0) {
    for (let i = 0; i < numRight; i++) {
      yield _src[i];
    }
  }
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","@thi.ng/math":"../node_modules/@thi.ng/math/index.js"}],"../node_modules/@thi.ng/transducers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iterator = require("./iterator");

Object.keys(_iterator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iterator[key];
    }
  });
});

var _reduce = require("./reduce");

Object.keys(_reduce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reduce[key];
    }
  });
});

var _reduced = require("./reduced");

Object.keys(_reduced).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reduced[key];
    }
  });
});

var _run = require("./run");

Object.keys(_run).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _run[key];
    }
  });
});

var _step = require("./step");

Object.keys(_step).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _step[key];
    }
  });
});

var _transduce = require("./transduce");

Object.keys(_transduce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _transduce[key];
    }
  });
});

var _add = require("./rfn/add");

Object.keys(_add).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _add[key];
    }
  });
});

var _assocMap = require("./rfn/assoc-map");

Object.keys(_assocMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _assocMap[key];
    }
  });
});

var _assocObj = require("./rfn/assoc-obj");

Object.keys(_assocObj).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _assocObj[key];
    }
  });
});

var _conj = require("./rfn/conj");

Object.keys(_conj).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _conj[key];
    }
  });
});

var _count = require("./rfn/count");

Object.keys(_count).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _count[key];
    }
  });
});

var _div = require("./rfn/div");

Object.keys(_div).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _div[key];
    }
  });
});

var _every = require("./rfn/every");

Object.keys(_every).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _every[key];
    }
  });
});

var _fill = require("./rfn/fill");

Object.keys(_fill).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fill[key];
    }
  });
});

var _frequencies = require("./rfn/frequencies");

Object.keys(_frequencies).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _frequencies[key];
    }
  });
});

var _groupBinary = require("./rfn/group-binary");

Object.keys(_groupBinary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _groupBinary[key];
    }
  });
});

var _groupByMap = require("./rfn/group-by-map");

Object.keys(_groupByMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _groupByMap[key];
    }
  });
});

var _groupByObj = require("./rfn/group-by-obj");

Object.keys(_groupByObj).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _groupByObj[key];
    }
  });
});

var _last = require("./rfn/last");

Object.keys(_last).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _last[key];
    }
  });
});

var _maxCompare = require("./rfn/max-compare");

Object.keys(_maxCompare).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _maxCompare[key];
    }
  });
});

var _max = require("./rfn/max");

Object.keys(_max).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _max[key];
    }
  });
});

var _mean = require("./rfn/mean");

Object.keys(_mean).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mean[key];
    }
  });
});

var _minCompare = require("./rfn/min-compare");

Object.keys(_minCompare).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _minCompare[key];
    }
  });
});

var _min = require("./rfn/min");

Object.keys(_min).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _min[key];
    }
  });
});

var _mul = require("./rfn/mul");

Object.keys(_mul).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mul[key];
    }
  });
});

var _pushCopy = require("./rfn/push-copy");

Object.keys(_pushCopy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pushCopy[key];
    }
  });
});

var _push = require("./rfn/push");

Object.keys(_push).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _push[key];
    }
  });
});

var _reductions = require("./rfn/reductions");

Object.keys(_reductions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reductions[key];
    }
  });
});

var _some = require("./rfn/some");

Object.keys(_some).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _some[key];
    }
  });
});

var _str = require("./rfn/str");

Object.keys(_str).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _str[key];
    }
  });
});

var _sub = require("./rfn/sub");

Object.keys(_sub).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sub[key];
    }
  });
});

var _benchmark = require("./xform/benchmark");

Object.keys(_benchmark).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _benchmark[key];
    }
  });
});

var _cat = require("./xform/cat");

Object.keys(_cat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cat[key];
    }
  });
});

var _converge = require("./xform/converge");

Object.keys(_converge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _converge[key];
    }
  });
});

var _convolve = require("./xform/convolve");

Object.keys(_convolve).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _convolve[key];
    }
  });
});

var _dedupe = require("./xform/dedupe");

Object.keys(_dedupe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dedupe[key];
    }
  });
});

var _delayed = require("./xform/delayed");

Object.keys(_delayed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _delayed[key];
    }
  });
});

var _distinct = require("./xform/distinct");

Object.keys(_distinct).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _distinct[key];
    }
  });
});

var _dropNth = require("./xform/drop-nth");

Object.keys(_dropNth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dropNth[key];
    }
  });
});

var _dropWhile = require("./xform/drop-while");

Object.keys(_dropWhile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dropWhile[key];
    }
  });
});

var _drop = require("./xform/drop");

Object.keys(_drop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _drop[key];
    }
  });
});

var _duplicate = require("./xform/duplicate");

Object.keys(_duplicate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _duplicate[key];
    }
  });
});

var _filter = require("./xform/filter");

Object.keys(_filter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _filter[key];
    }
  });
});

var _filterFuzzy = require("./xform/filter-fuzzy");

Object.keys(_filterFuzzy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _filterFuzzy[key];
    }
  });
});

var _flattenWith = require("./xform/flatten-with");

Object.keys(_flattenWith).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _flattenWith[key];
    }
  });
});

var _flatten = require("./xform/flatten");

Object.keys(_flatten).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _flatten[key];
    }
  });
});

var _indexed = require("./xform/indexed");

Object.keys(_indexed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _indexed[key];
    }
  });
});

var _interleave = require("./xform/interleave");

Object.keys(_interleave).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interleave[key];
    }
  });
});

var _interpolate = require("./xform/interpolate");

Object.keys(_interpolate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interpolate[key];
    }
  });
});

var _interpolateHermite = require("./xform/interpolate-hermite");

Object.keys(_interpolateHermite).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interpolateHermite[key];
    }
  });
});

var _interpolateLinear = require("./xform/interpolate-linear");

Object.keys(_interpolateLinear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interpolateLinear[key];
    }
  });
});

var _interpose = require("./xform/interpose");

Object.keys(_interpose).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interpose[key];
    }
  });
});

var _keep = require("./xform/keep");

Object.keys(_keep).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _keep[key];
    }
  });
});

var _labeled = require("./xform/labeled");

Object.keys(_labeled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _labeled[key];
    }
  });
});

var _mapDeep = require("./xform/map-deep");

Object.keys(_mapDeep).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapDeep[key];
    }
  });
});

var _mapIndexed = require("./xform/map-indexed");

Object.keys(_mapIndexed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapIndexed[key];
    }
  });
});

var _mapKeys = require("./xform/map-keys");

Object.keys(_mapKeys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapKeys[key];
    }
  });
});

var _mapNth = require("./xform/map-nth");

Object.keys(_mapNth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapNth[key];
    }
  });
});

var _mapVals = require("./xform/map-vals");

Object.keys(_mapVals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapVals[key];
    }
  });
});

var _map = require("./xform/map");

Object.keys(_map).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _map[key];
    }
  });
});

var _mapcat = require("./xform/mapcat");

Object.keys(_mapcat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapcat[key];
    }
  });
});

var _matchFirst = require("./xform/match-first");

Object.keys(_matchFirst).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _matchFirst[key];
    }
  });
});

var _matchLast = require("./xform/match-last");

Object.keys(_matchLast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _matchLast[key];
    }
  });
});

var _movingAverage = require("./xform/moving-average");

Object.keys(_movingAverage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _movingAverage[key];
    }
  });
});

var _movingMedian = require("./xform/moving-median");

Object.keys(_movingMedian).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _movingMedian[key];
    }
  });
});

var _multiplex = require("./xform/multiplex");

Object.keys(_multiplex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _multiplex[key];
    }
  });
});

var _multiplexObj = require("./xform/multiplex-obj");

Object.keys(_multiplexObj).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _multiplexObj[key];
    }
  });
});

var _noop = require("./xform/noop");

Object.keys(_noop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _noop[key];
    }
  });
});

var _padLast = require("./xform/pad-last");

Object.keys(_padLast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _padLast[key];
    }
  });
});

var _page = require("./xform/page");

Object.keys(_page).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _page[key];
    }
  });
});

var _partitionBy = require("./xform/partition-by");

Object.keys(_partitionBy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partitionBy[key];
    }
  });
});

var _partitionOf = require("./xform/partition-of");

Object.keys(_partitionOf).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partitionOf[key];
    }
  });
});

var _partitionSort = require("./xform/partition-sort");

Object.keys(_partitionSort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partitionSort[key];
    }
  });
});

var _partitionSync = require("./xform/partition-sync");

Object.keys(_partitionSync).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partitionSync[key];
    }
  });
});

var _partition = require("./xform/partition");

Object.keys(_partition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partition[key];
    }
  });
});

var _pluck = require("./xform/pluck");

Object.keys(_pluck).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pluck[key];
    }
  });
});

var _rename = require("./xform/rename");

Object.keys(_rename).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rename[key];
    }
  });
});

var _sample = require("./xform/sample");

Object.keys(_sample).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sample[key];
    }
  });
});

var _scan = require("./xform/scan");

Object.keys(_scan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _scan[key];
    }
  });
});

var _selectKeys = require("./xform/select-keys");

Object.keys(_selectKeys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _selectKeys[key];
    }
  });
});

var _sideEffect = require("./xform/side-effect");

Object.keys(_sideEffect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sideEffect[key];
    }
  });
});

var _slidingWindow = require("./xform/sliding-window");

Object.keys(_slidingWindow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _slidingWindow[key];
    }
  });
});

var _streamShuffle = require("./xform/stream-shuffle");

Object.keys(_streamShuffle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _streamShuffle[key];
    }
  });
});

var _streamSort = require("./xform/stream-sort");

Object.keys(_streamSort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _streamSort[key];
    }
  });
});

var _struct = require("./xform/struct");

Object.keys(_struct).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _struct[key];
    }
  });
});

var _swizzle = require("./xform/swizzle");

Object.keys(_swizzle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _swizzle[key];
    }
  });
});

var _takeNth = require("./xform/take-nth");

Object.keys(_takeNth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _takeNth[key];
    }
  });
});

var _takeLast = require("./xform/take-last");

Object.keys(_takeLast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _takeLast[key];
    }
  });
});

var _takeWhile = require("./xform/take-while");

Object.keys(_takeWhile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _takeWhile[key];
    }
  });
});

var _take = require("./xform/take");

Object.keys(_take).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _take[key];
    }
  });
});

var _throttle = require("./xform/throttle");

Object.keys(_throttle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _throttle[key];
    }
  });
});

var _throttleTime = require("./xform/throttle-time");

Object.keys(_throttleTime).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _throttleTime[key];
    }
  });
});

var _toggle = require("./xform/toggle");

Object.keys(_toggle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _toggle[key];
    }
  });
});

var _trace = require("./xform/trace");

Object.keys(_trace).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _trace[key];
    }
  });
});

var _wordWrap = require("./xform/word-wrap");

Object.keys(_wordWrap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wordWrap[key];
    }
  });
});

var _comp = require("./func/comp");

Object.keys(_comp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _comp[key];
    }
  });
});

var _compr = require("./func/compr");

Object.keys(_compr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _compr[key];
    }
  });
});

var _deepTransform = require("./func/deep-transform");

Object.keys(_deepTransform).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deepTransform[key];
    }
  });
});

var _juxtr = require("./func/juxtr");

Object.keys(_juxtr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _juxtr[key];
    }
  });
});

var _keySelector = require("./func/key-selector");

Object.keys(_keySelector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _keySelector[key];
    }
  });
});

var _lookup = require("./func/lookup");

Object.keys(_lookup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lookup[key];
    }
  });
});

var _renamer = require("./func/renamer");

Object.keys(_renamer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renamer[key];
    }
  });
});

var _asIterable = require("./iter/as-iterable");

Object.keys(_asIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _asIterable[key];
    }
  });
});

var _choices = require("./iter/choices");

Object.keys(_choices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _choices[key];
    }
  });
});

var _concat = require("./iter/concat");

Object.keys(_concat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _concat[key];
    }
  });
});

var _cycle = require("./iter/cycle");

Object.keys(_cycle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cycle[key];
    }
  });
});

var _extendSides = require("./iter/extend-sides");

Object.keys(_extendSides).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _extendSides[key];
    }
  });
});

var _iterate = require("./iter/iterate");

Object.keys(_iterate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iterate[key];
    }
  });
});

var _keys = require("./iter/keys");

Object.keys(_keys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _keys[key];
    }
  });
});

var _normRange = require("./iter/norm-range");

Object.keys(_normRange).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _normRange[key];
    }
  });
});

var _padSides = require("./iter/pad-sides");

Object.keys(_padSides).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _padSides[key];
    }
  });
});

var _pairs = require("./iter/pairs");

Object.keys(_pairs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pairs[key];
    }
  });
});

var _permutations = require("./iter/permutations");

Object.keys(_permutations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _permutations[key];
    }
  });
});

var _range = require("./iter/range");

Object.keys(_range).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _range[key];
    }
  });
});

var _range2d = require("./iter/range2d");

Object.keys(_range2d).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _range2d[key];
    }
  });
});

var _range3d = require("./iter/range3d");

Object.keys(_range3d).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _range3d[key];
    }
  });
});

var _repeat = require("./iter/repeat");

Object.keys(_repeat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _repeat[key];
    }
  });
});

var _repeatedly = require("./iter/repeatedly");

Object.keys(_repeatedly).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _repeatedly[key];
    }
  });
});

var _reverse = require("./iter/reverse");

Object.keys(_reverse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reverse[key];
    }
  });
});

var _symmetric = require("./iter/symmetric");

Object.keys(_symmetric).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _symmetric[key];
    }
  });
});

var _tween = require("./iter/tween");

Object.keys(_tween).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tween[key];
    }
  });
});

var _vals = require("./iter/vals");

Object.keys(_vals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _vals[key];
    }
  });
});

var _wrapSides = require("./iter/wrap-sides");

Object.keys(_wrapSides).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wrapSides[key];
    }
  });
});

var _zip = require("./iter/zip");

Object.keys(_zip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _zip[key];
    }
  });
});
},{"./iterator":"../node_modules/@thi.ng/transducers/iterator.js","./reduce":"../node_modules/@thi.ng/transducers/reduce.js","./reduced":"../node_modules/@thi.ng/transducers/reduced.js","./run":"../node_modules/@thi.ng/transducers/run.js","./step":"../node_modules/@thi.ng/transducers/step.js","./transduce":"../node_modules/@thi.ng/transducers/transduce.js","./rfn/add":"../node_modules/@thi.ng/transducers/rfn/add.js","./rfn/assoc-map":"../node_modules/@thi.ng/transducers/rfn/assoc-map.js","./rfn/assoc-obj":"../node_modules/@thi.ng/transducers/rfn/assoc-obj.js","./rfn/conj":"../node_modules/@thi.ng/transducers/rfn/conj.js","./rfn/count":"../node_modules/@thi.ng/transducers/rfn/count.js","./rfn/div":"../node_modules/@thi.ng/transducers/rfn/div.js","./rfn/every":"../node_modules/@thi.ng/transducers/rfn/every.js","./rfn/fill":"../node_modules/@thi.ng/transducers/rfn/fill.js","./rfn/frequencies":"../node_modules/@thi.ng/transducers/rfn/frequencies.js","./rfn/group-binary":"../node_modules/@thi.ng/transducers/rfn/group-binary.js","./rfn/group-by-map":"../node_modules/@thi.ng/transducers/rfn/group-by-map.js","./rfn/group-by-obj":"../node_modules/@thi.ng/transducers/rfn/group-by-obj.js","./rfn/last":"../node_modules/@thi.ng/transducers/rfn/last.js","./rfn/max-compare":"../node_modules/@thi.ng/transducers/rfn/max-compare.js","./rfn/max":"../node_modules/@thi.ng/transducers/rfn/max.js","./rfn/mean":"../node_modules/@thi.ng/transducers/rfn/mean.js","./rfn/min-compare":"../node_modules/@thi.ng/transducers/rfn/min-compare.js","./rfn/min":"../node_modules/@thi.ng/transducers/rfn/min.js","./rfn/mul":"../node_modules/@thi.ng/transducers/rfn/mul.js","./rfn/push-copy":"../node_modules/@thi.ng/transducers/rfn/push-copy.js","./rfn/push":"../node_modules/@thi.ng/transducers/rfn/push.js","./rfn/reductions":"../node_modules/@thi.ng/transducers/rfn/reductions.js","./rfn/some":"../node_modules/@thi.ng/transducers/rfn/some.js","./rfn/str":"../node_modules/@thi.ng/transducers/rfn/str.js","./rfn/sub":"../node_modules/@thi.ng/transducers/rfn/sub.js","./xform/benchmark":"../node_modules/@thi.ng/transducers/xform/benchmark.js","./xform/cat":"../node_modules/@thi.ng/transducers/xform/cat.js","./xform/converge":"../node_modules/@thi.ng/transducers/xform/converge.js","./xform/convolve":"../node_modules/@thi.ng/transducers/xform/convolve.js","./xform/dedupe":"../node_modules/@thi.ng/transducers/xform/dedupe.js","./xform/delayed":"../node_modules/@thi.ng/transducers/xform/delayed.js","./xform/distinct":"../node_modules/@thi.ng/transducers/xform/distinct.js","./xform/drop-nth":"../node_modules/@thi.ng/transducers/xform/drop-nth.js","./xform/drop-while":"../node_modules/@thi.ng/transducers/xform/drop-while.js","./xform/drop":"../node_modules/@thi.ng/transducers/xform/drop.js","./xform/duplicate":"../node_modules/@thi.ng/transducers/xform/duplicate.js","./xform/filter":"../node_modules/@thi.ng/transducers/xform/filter.js","./xform/filter-fuzzy":"../node_modules/@thi.ng/transducers/xform/filter-fuzzy.js","./xform/flatten-with":"../node_modules/@thi.ng/transducers/xform/flatten-with.js","./xform/flatten":"../node_modules/@thi.ng/transducers/xform/flatten.js","./xform/indexed":"../node_modules/@thi.ng/transducers/xform/indexed.js","./xform/interleave":"../node_modules/@thi.ng/transducers/xform/interleave.js","./xform/interpolate":"../node_modules/@thi.ng/transducers/xform/interpolate.js","./xform/interpolate-hermite":"../node_modules/@thi.ng/transducers/xform/interpolate-hermite.js","./xform/interpolate-linear":"../node_modules/@thi.ng/transducers/xform/interpolate-linear.js","./xform/interpose":"../node_modules/@thi.ng/transducers/xform/interpose.js","./xform/keep":"../node_modules/@thi.ng/transducers/xform/keep.js","./xform/labeled":"../node_modules/@thi.ng/transducers/xform/labeled.js","./xform/map-deep":"../node_modules/@thi.ng/transducers/xform/map-deep.js","./xform/map-indexed":"../node_modules/@thi.ng/transducers/xform/map-indexed.js","./xform/map-keys":"../node_modules/@thi.ng/transducers/xform/map-keys.js","./xform/map-nth":"../node_modules/@thi.ng/transducers/xform/map-nth.js","./xform/map-vals":"../node_modules/@thi.ng/transducers/xform/map-vals.js","./xform/map":"../node_modules/@thi.ng/transducers/xform/map.js","./xform/mapcat":"../node_modules/@thi.ng/transducers/xform/mapcat.js","./xform/match-first":"../node_modules/@thi.ng/transducers/xform/match-first.js","./xform/match-last":"../node_modules/@thi.ng/transducers/xform/match-last.js","./xform/moving-average":"../node_modules/@thi.ng/transducers/xform/moving-average.js","./xform/moving-median":"../node_modules/@thi.ng/transducers/xform/moving-median.js","./xform/multiplex":"../node_modules/@thi.ng/transducers/xform/multiplex.js","./xform/multiplex-obj":"../node_modules/@thi.ng/transducers/xform/multiplex-obj.js","./xform/noop":"../node_modules/@thi.ng/transducers/xform/noop.js","./xform/pad-last":"../node_modules/@thi.ng/transducers/xform/pad-last.js","./xform/page":"../node_modules/@thi.ng/transducers/xform/page.js","./xform/partition-by":"../node_modules/@thi.ng/transducers/xform/partition-by.js","./xform/partition-of":"../node_modules/@thi.ng/transducers/xform/partition-of.js","./xform/partition-sort":"../node_modules/@thi.ng/transducers/xform/partition-sort.js","./xform/partition-sync":"../node_modules/@thi.ng/transducers/xform/partition-sync.js","./xform/partition":"../node_modules/@thi.ng/transducers/xform/partition.js","./xform/pluck":"../node_modules/@thi.ng/transducers/xform/pluck.js","./xform/rename":"../node_modules/@thi.ng/transducers/xform/rename.js","./xform/sample":"../node_modules/@thi.ng/transducers/xform/sample.js","./xform/scan":"../node_modules/@thi.ng/transducers/xform/scan.js","./xform/select-keys":"../node_modules/@thi.ng/transducers/xform/select-keys.js","./xform/side-effect":"../node_modules/@thi.ng/transducers/xform/side-effect.js","./xform/sliding-window":"../node_modules/@thi.ng/transducers/xform/sliding-window.js","./xform/stream-shuffle":"../node_modules/@thi.ng/transducers/xform/stream-shuffle.js","./xform/stream-sort":"../node_modules/@thi.ng/transducers/xform/stream-sort.js","./xform/struct":"../node_modules/@thi.ng/transducers/xform/struct.js","./xform/swizzle":"../node_modules/@thi.ng/transducers/xform/swizzle.js","./xform/take-nth":"../node_modules/@thi.ng/transducers/xform/take-nth.js","./xform/take-last":"../node_modules/@thi.ng/transducers/xform/take-last.js","./xform/take-while":"../node_modules/@thi.ng/transducers/xform/take-while.js","./xform/take":"../node_modules/@thi.ng/transducers/xform/take.js","./xform/throttle":"../node_modules/@thi.ng/transducers/xform/throttle.js","./xform/throttle-time":"../node_modules/@thi.ng/transducers/xform/throttle-time.js","./xform/toggle":"../node_modules/@thi.ng/transducers/xform/toggle.js","./xform/trace":"../node_modules/@thi.ng/transducers/xform/trace.js","./xform/word-wrap":"../node_modules/@thi.ng/transducers/xform/word-wrap.js","./func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","./func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","./func/deep-transform":"../node_modules/@thi.ng/transducers/func/deep-transform.js","./func/juxtr":"../node_modules/@thi.ng/transducers/func/juxtr.js","./func/key-selector":"../node_modules/@thi.ng/transducers/func/key-selector.js","./func/lookup":"../node_modules/@thi.ng/transducers/func/lookup.js","./func/renamer":"../node_modules/@thi.ng/transducers/func/renamer.js","./iter/as-iterable":"../node_modules/@thi.ng/transducers/iter/as-iterable.js","./iter/choices":"../node_modules/@thi.ng/transducers/iter/choices.js","./iter/concat":"../node_modules/@thi.ng/transducers/iter/concat.js","./iter/cycle":"../node_modules/@thi.ng/transducers/iter/cycle.js","./iter/extend-sides":"../node_modules/@thi.ng/transducers/iter/extend-sides.js","./iter/iterate":"../node_modules/@thi.ng/transducers/iter/iterate.js","./iter/keys":"../node_modules/@thi.ng/transducers/iter/keys.js","./iter/norm-range":"../node_modules/@thi.ng/transducers/iter/norm-range.js","./iter/pad-sides":"../node_modules/@thi.ng/transducers/iter/pad-sides.js","./iter/pairs":"../node_modules/@thi.ng/transducers/iter/pairs.js","./iter/permutations":"../node_modules/@thi.ng/transducers/iter/permutations.js","./iter/range":"../node_modules/@thi.ng/transducers/iter/range.js","./iter/range2d":"../node_modules/@thi.ng/transducers/iter/range2d.js","./iter/range3d":"../node_modules/@thi.ng/transducers/iter/range3d.js","./iter/repeat":"../node_modules/@thi.ng/transducers/iter/repeat.js","./iter/repeatedly":"../node_modules/@thi.ng/transducers/iter/repeatedly.js","./iter/reverse":"../node_modules/@thi.ng/transducers/iter/reverse.js","./iter/symmetric":"../node_modules/@thi.ng/transducers/iter/symmetric.js","./iter/tween":"../node_modules/@thi.ng/transducers/iter/tween.js","./iter/vals":"../node_modules/@thi.ng/transducers/iter/vals.js","./iter/wrap-sides":"../node_modules/@thi.ng/transducers/iter/wrap-sides.js","./iter/zip":"../node_modules/@thi.ng/transducers/iter/zip.js"}],"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/@thi.ng/hiccup-css/impl.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indent = exports.formatDecls = exports.expand = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _transducers = require("@thi.ng/transducers");

const EMPTY = new Set();
const NO_SPACES = ":[";
const xfSel = (0, _transducers.comp)((0, _transducers.flatten)(), (0, _transducers.map)(x => NO_SPACES.indexOf(x.charAt(0)) >= 0 ? x : " " + x));

const withScope = (xf, scope) => (0, _transducers.comp)(xf, (0, _transducers.map)(x => (0, _checks.isString)(x) && x.indexOf(" .") == 0 ? x + scope : x));

const expand = (acc, parent, rules, opts) => {
  const n = rules.length;
  const sel = [];
  let curr, isFn;

  const process = (i, r) => {
    let rfn = null;

    if ((0, _checks.isArray)(r)) {
      expand(acc, makeSelector(parent, sel), r, opts);
    } else if ((0, _checks.isIterable)(r) && !(0, _checks.isString)(r)) {
      expand(acc, makeSelector(parent, sel), [...r], opts);
    } else if ((isFn = (0, _checks.isFunction)(r)) || (rfn = opts.fns[r])) {
      if (!parent.length) {
        if (rfn) {
          rfn.apply(null, rules.slice(i + 1))(acc, opts);
          return true;
        }

        r(acc, opts);
      } else if (isFn) {
        process(i, r());
      } else {
        (0, _errors.illegalArgs)(`quoted fn ('${r}') only allowed at head position`);
      }
    } else if ((0, _checks.isPlainObject)(r)) {
      curr = Object.assign(curr || {}, r);
    } else if (r != null) {
      sel.push(r);
    }
  };

  for (let i = 0; i < n; i++) {
    if (process(i, rules[i])) {
      return acc;
    }
  }

  curr && acc.push(formatRule(parent, sel, curr, opts));
  return acc;
};

exports.expand = expand;

const makeSelector = (parent, curr) => parent.length ? [...(0, _transducers.permutations)(parent, curr)] : curr;

const formatRule = (parent, sel, curr, opts) => {
  const f = opts.format;
  const space = indent(opts);
  const xf = opts.scope ? withScope(xfSel, opts.scope) : xfSel;
  return [space, (0, _transducers.transduce)((0, _transducers.map)(sel => (0, _transducers.transduce)(xf, (0, _transducers.str)(), (0, _checks.isArray)(sel) ? sel : [sel]).trim()), (0, _transducers.str)(f.ruleSep), makeSelector(parent, sel)), f.declStart, formatDecls(curr, opts), space, f.declEnd].join("");
};

const formatDecls = (rules, opts) => {
  const f = opts.format;
  const prefixes = opts.autoprefix || EMPTY;
  const space = indent(opts, opts.depth + 1);
  const acc = [];

  for (let r in rules) {
    if (rules.hasOwnProperty(r)) {
      let val = rules[r];

      if ((0, _checks.isFunction)(val)) {
        val = val(rules);
      }

      if ((0, _checks.isArray)(val)) {
        val = val.map(v => (0, _checks.isArray)(v) ? v.join(" ") : v).join(f.ruleSep);
      }

      if (prefixes.has(r)) {
        for (let v of opts.vendors) {
          acc.push(`${space}${v}${r}:${f.valSep}${val};`);
        }
      }

      acc.push(`${space}${r}:${f.valSep}${val};`);
    }
  }

  return acc.join(f.decls) + f.decls;
};

exports.formatDecls = formatDecls;

const indent = (opts, d = opts.depth) => d > 1 ? [...(0, _transducers.repeat)(opts.format.indent, d)].join("") : d > 0 ? opts.format.indent : "";

exports.indent = indent;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","@thi.ng/transducers":"../node_modules/@thi.ng/transducers/index.js","process":"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel/node_modules/process/browser.js"}],"../node_modules/@thi.ng/hiccup-css/units.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.turn = exports.rad = exports.deg = exports.sec = exports.ms = exports.vw = exports.vh = exports.px = exports.percent = exports.rem = exports.ex = exports.em = void 0;

const em = x => `${x}em`;

exports.em = em;

const ex = x => `${x}ex`;

exports.ex = ex;

const rem = x => `${x}rem`;

exports.rem = rem;

const percent = x => `${x}%`;

exports.percent = percent;

const px = x => `${x >>> 0}px`;

exports.px = px;

const vh = x => `${x}vh`;

exports.vh = vh;

const vw = x => `${x}vw`;

exports.vw = vw;

const ms = x => `${x >>> 0}ms`;

exports.ms = ms;

const sec = x => `${x}s`;

exports.sec = sec;

const deg = x => `${x}deg`;

exports.deg = deg;

const rad = x => `${x}rad`;

exports.rad = rad;

const turn = x => `${x}turn`;

exports.turn = turn;
},{}],"../node_modules/@thi.ng/hiccup-css/keyframes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.at_keyframes = at_keyframes;

var _impl = require("./impl");

var _units = require("./units");

function at_keyframes(id, ...args) {
  const stops = args.length === 1 ? args[0] : {
    0: args[0],
    100: args[1]
  };
  return (acc, opts) => {
    const outer = (0, _impl.indent)(opts);
    opts.depth++;
    const inner = (0, _impl.indent)(opts);
    acc.push(`${outer}@keyframes ${id}${opts.format.declStart}`);

    for (let s in stops) {
      if (stops.hasOwnProperty(s)) {
        acc.push([inner, (0, _units.percent)(s), opts.format.declStart, (0, _impl.formatDecls)(stops[s], opts), inner, opts.format.declEnd].join(""));
      }
    }

    opts.depth--;
    acc.push(outer + opts.format.declEnd);
    return acc;
  };
}
},{"./impl":"../node_modules/@thi.ng/hiccup-css/impl.js","./units":"../node_modules/@thi.ng/hiccup-css/units.js"}],"../node_modules/@thi.ng/hiccup-css/animation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animation = void 0;

var _keyframes = require("./keyframes");

/**
 * Defines new `@keyframes` with given `id` and creates related class of
 * same name to configure given animation `opts`. Only the `duration`
 * option is given a default value (250ms), all others are optional.
 *
 * ```
 * css(
 *   animation(
 *     "fadein",
 *     { delay: "0.5s" },
 *     { opacity: 0 },
 *     { opacity: 1 }
 *   )
 * );
 * ```
 *
 * ```css
 * @keyframes fadein {
 *     0% {
 *         opacity: 0;
 *     }
 *     100% {
 *         opacity: 1;
 *     }
 * }
 *
 * .fadein {
 *     animation-duration: 250ms;
 *     animation-name: fadein;
 *     animation-delay: 0.5s;
 * }
 * ```
 *
 * @param id
 * @param opts
 * @param keyframes
 */
const animation = (id, opts, ...keyframes) => {
  opts = Object.assign({
    duration: "250ms",
    name: id
  }, opts);
  return [_keyframes.at_keyframes.apply(null, [id, ...keyframes]), [`.${id}`, Object.keys(opts).reduce((acc, k) => (acc[`animation-${k}`] = opts[k], acc), {})]];
};

exports.animation = animation;
},{"./keyframes":"../node_modules/@thi.ng/hiccup-css/keyframes.js"}],"../node_modules/@thi.ng/hiccup-css/attribs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attribMatches = exports.attribSuffix = exports.attribPrefix = exports.attribContains = exports.attribEq = exports.withAttrib = void 0;

const $ = op => (id, x, caseSensitve = false) => `[${id}${op}="${x}"${caseSensitve ? " i" : ""}]`;
/**
 * Returns attrib selector: `[id]`
 *
 * @param id
 */


const withAttrib = id => `[${id}]`;
/**
 * Returns attrib selector `[id=x]`
 *
 * @param id
 * @param x
 * @param caseSensitive
 */


exports.withAttrib = withAttrib;
const attribEq = $("");
/**
 * Returns attrib selector `[id~=x]`
 *
 * @param id
 * @param x
 * @param caseSensitive
 */

exports.attribEq = attribEq;
const attribContains = $("~");
/**
 * Returns attrib selector `[id^=x]`
 *
 * @param id
 * @param x
 * @param caseSensitive
 */

exports.attribContains = attribContains;
const attribPrefix = $("^");
/**
 * Returns attrib selector `[id$=x]`
 *
 * @param id
 * @param x
 * @param caseSensitive
 */

exports.attribPrefix = attribPrefix;
const attribSuffix = $("$");
/**
 * Returns attrib selector `[id*=x]`
 * @param id
 * @param x
 * @param caseSensitive
 */

exports.attribSuffix = attribSuffix;
const attribMatches = $("*");
exports.attribMatches = attribMatches;
},{}],"../node_modules/@thi.ng/hiccup-css/comment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comment = void 0;

var _impl = require("./impl");

const comment = (body, force = false) => (acc, opts) => {
  const space = (0, _impl.indent)(opts);
  const inner = (0, _impl.indent)(opts, opts.depth + 1);

  if (opts.format.comments || force) {
    acc.push(space + "/*", body.split("\n").map(l => inner + l).join("\n"), space + "*/");
  }

  return acc;
};

exports.comment = comment;
},{"./impl":"../node_modules/@thi.ng/hiccup-css/impl.js"}],"../node_modules/@thi.ng/hiccup-css/conditional.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conditional = void 0;

var _checks = require("@thi.ng/checks");

var _impl = require("./impl");

const conditional = (type, cond, rules) => (acc, opts) => {
  const space = (0, _impl.indent)(opts);
  acc.push(`${space}${type} ${formatCond(cond)}${opts.format.declStart}`);
  opts.depth++;
  (0, _impl.expand)(acc, [], rules, opts);
  opts.depth--;
  acc.push(space + opts.format.declEnd);
  return acc;
};

exports.conditional = conditional;

const formatCond = cond => {
  if ((0, _checks.isString)(cond)) {
    return cond;
  }

  const acc = [];

  for (let c in cond) {
    if (cond.hasOwnProperty(c)) {
      let v = cond[c];

      if (v === true) {
        v = c;
      } else if (v === false) {
        v = "not " + c;
      } else if (v === "only") {
        v += " " + c;
      } else {
        v = `(${c}:${v})`;
      }

      acc.push(v);
    }
  }

  return acc.join(" and ");
};
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","./impl":"../node_modules/@thi.ng/hiccup-css/impl.js"}],"../node_modules/@thi.ng/hiccup-css/css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = void 0;

var _checks = require("@thi.ng/checks");

var _api = require("./api");

var _impl = require("./impl");

const css = (rules, opts) => {
  opts = Object.assign({
    format: _api.COMPACT,
    vendors: _api.DEFAULT_VENDORS,
    fns: {},
    depth: 0
  }, opts);

  if ((0, _checks.isPlainObject)(rules)) {
    return (0, _impl.formatDecls)(rules, opts);
  }

  if ((0, _checks.isArray)(opts.autoprefix)) {
    opts.autoprefix = new Set(opts.autoprefix);
  }

  if ((0, _checks.isIterable)(rules) && !(0, _checks.isString)(rules)) {
    rules = [...rules];
  }

  if ((0, _checks.isArray)(rules)) {
    return (0, _impl.expand)([], [], rules, opts).join(opts.format.rules);
  }

  if ((0, _checks.isFunction)(rules)) {
    return rules([], opts).join(opts.format.rules);
  }
};

exports.css = css;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","./api":"../node_modules/@thi.ng/hiccup-css/api.js","./impl":"../node_modules/@thi.ng/hiccup-css/impl.js"}],"../node_modules/@thi.ng/hiccup-css/import.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.at_import = void 0;

const at_import = (url, ...queries) => (acc, opts) => (acc.push(queries.length ? `@import url(${url}) ${queries.join(opts.format.ruleSep)};` : `@import url(${url});`), acc);

exports.at_import = at_import;
},{}],"../node_modules/@thi.ng/hiccup-css/inject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectStyleSheet = void 0;

// https://davidwalsh.name/add-rules-stylesheets

/**
 * Injects given CSS string as global stylesheet in DOM head. If `first`
 * is true, inserts it as first stylesheet, else (default) appends it.
 *
 * Returns created style DOM element.
 *
 * @param css
 * @param first
 */
const injectStyleSheet = (css, first = false) => {
  const head = document.getElementsByTagName("head")[0];
  const sheet = document.createElement("style");
  sheet.setAttribute("type", "text/css");

  if (sheet.styleSheet !== undefined) {
    sheet.styleSheet.cssText = css;
  } else {
    sheet.textContent = css;
  }

  if (first) {
    head.insertBefore(sheet, head.firstChild);
  } else {
    head.appendChild(sheet);
  }

  return sheet;
};

exports.injectStyleSheet = injectStyleSheet;
},{}],"../node_modules/@thi.ng/hiccup-css/media.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.at_media = void 0;

var _conditional = require("./conditional");

const at_media = (cond, rules) => (0, _conditional.conditional)("@media", cond, rules);

exports.at_media = at_media;
},{"./conditional":"../node_modules/@thi.ng/hiccup-css/conditional.js"}],"../node_modules/@thi.ng/hiccup-css/namespace.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.at_namespace = at_namespace;

function at_namespace(...args) {
  return (acc, _) => (acc.push(args.length > 1 ? `@namespace ${args[0]} url(${args[1]});` : `@namespace url(${args[0]});`), acc);
}
},{}],"../node_modules/@thi.ng/hiccup-css/supports.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.at_supports = void 0;

var _conditional = require("./conditional");

const at_supports = (cond, rules) => (0, _conditional.conditional)("@supports", cond, rules);

exports.at_supports = at_supports;
},{"./conditional":"../node_modules/@thi.ng/hiccup-css/conditional.js"}],"../node_modules/@thi.ng/hiccup-css/quoted-functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUOTED_FNS = void 0;

var _comment = require("./comment");

var _import = require("./import");

var _keyframes = require("./keyframes");

var _media = require("./media");

var _namespace = require("./namespace");

var _supports = require("./supports");

const QUOTED_FNS = {
  "@comment": _comment.comment,
  "@import": _import.at_import,
  "@keyframes": _keyframes.at_keyframes,
  "@media": _media.at_media,
  "@namespace": _namespace.at_namespace,
  "@supports": _supports.at_supports
};
exports.QUOTED_FNS = QUOTED_FNS;
},{"./comment":"../node_modules/@thi.ng/hiccup-css/comment.js","./import":"../node_modules/@thi.ng/hiccup-css/import.js","./keyframes":"../node_modules/@thi.ng/hiccup-css/keyframes.js","./media":"../node_modules/@thi.ng/hiccup-css/media.js","./namespace":"../node_modules/@thi.ng/hiccup-css/namespace.js","./supports":"../node_modules/@thi.ng/hiccup-css/supports.js"}],"../node_modules/@thi.ng/hiccup-css/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _animation = require("./animation");

Object.keys(_animation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _animation[key];
    }
  });
});

var _attribs = require("./attribs");

Object.keys(_attribs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _attribs[key];
    }
  });
});

var _comment = require("./comment");

Object.keys(_comment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _comment[key];
    }
  });
});

var _conditional = require("./conditional");

Object.keys(_conditional).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _conditional[key];
    }
  });
});

var _css = require("./css");

Object.keys(_css).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _css[key];
    }
  });
});

var _import = require("./import");

Object.keys(_import).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _import[key];
    }
  });
});

var _inject = require("./inject");

Object.keys(_inject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _inject[key];
    }
  });
});

var _keyframes = require("./keyframes");

Object.keys(_keyframes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _keyframes[key];
    }
  });
});

var _media = require("./media");

Object.keys(_media).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _media[key];
    }
  });
});

var _namespace = require("./namespace");

Object.keys(_namespace).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _namespace[key];
    }
  });
});

var _quotedFunctions = require("./quoted-functions");

Object.keys(_quotedFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _quotedFunctions[key];
    }
  });
});

var _supports = require("./supports");

Object.keys(_supports).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _supports[key];
    }
  });
});

var _units = require("./units");

Object.keys(_units).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _units[key];
    }
  });
});
},{"./api":"../node_modules/@thi.ng/hiccup-css/api.js","./animation":"../node_modules/@thi.ng/hiccup-css/animation.js","./attribs":"../node_modules/@thi.ng/hiccup-css/attribs.js","./comment":"../node_modules/@thi.ng/hiccup-css/comment.js","./conditional":"../node_modules/@thi.ng/hiccup-css/conditional.js","./css":"../node_modules/@thi.ng/hiccup-css/css.js","./import":"../node_modules/@thi.ng/hiccup-css/import.js","./inject":"../node_modules/@thi.ng/hiccup-css/inject.js","./keyframes":"../node_modules/@thi.ng/hiccup-css/keyframes.js","./media":"../node_modules/@thi.ng/hiccup-css/media.js","./namespace":"../node_modules/@thi.ng/hiccup-css/namespace.js","./quoted-functions":"../node_modules/@thi.ng/hiccup-css/quoted-functions.js","./supports":"../node_modules/@thi.ng/hiccup-css/supports.js","./units":"../node_modules/@thi.ng/hiccup-css/units.js"}],"../src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.themer = exports.parse_theme = void 0;

var _random = require("@thi.ng/random");

var _atom = require("@thi.ng/atom");

var _paths = require("@thi.ng/paths");

var _css = _interopRequireDefault(require("@styled-system/css"));

var _decamelizeKeysDeep = _interopRequireDefault(require("decamelize-keys-deep"));

var _hiccupCss = require("@thi.ng/hiccup-css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var log = function log() {
  var _console;

  return (_console = console).log.apply(_console, arguments);
}; // Atom structure

/*
{
  queries: {
    "min-width: 10rem": { hash: {} }
  },
  pseudos: {
    hash: { ":hover": {} }
  },
  basics: {
    hash: {}
  }
}
*/

/**
 * basic skeleton of the style atom
 * */


var global_structure = {
  basics: {},
  pseudos: {},
  queries: {}
};
/**
 * creates a new atom/state container for storing styles
 * */

var global_atom = new _atom.Atom(global_structure);
/**
 * dispatches various types of style definitions to their
 * approprate shape within the style atom/state
 * */

var partitioner = function partitioner(atom, macro, meso) {
  var micro = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var current = atom.deref();
  var has_macro = !!current[macro];
  var has_meso = !!(0, _paths.getIn)(current, [macro, meso]); // 🔥: dot_hash will get it's nuts cut off if you don't use array path syntax

  if (micro) {
    if (has_meso) {
      atom.swapIn([macro, meso], function (xx) {
        return _objectSpread({}, xx, {}, micro);
      });
    } else if (has_macro) {
      atom.swapIn([macro], function (xx) {
        return _objectSpread({}, xx, _defineProperty({}, meso, micro));
      });
    } else {
      atom.swap(function (xx) {
        return _objectSpread({}, xx, _defineProperty({}, macro, _defineProperty({}, meso, micro)));
      });
    }
  } else {
    if (has_macro) {
      atom.swapIn([macro], function (xx) {
        return _objectSpread({}, xx, {}, meso);
      });
    } else {
      atom.swap(function (xx) {
        return _objectSpread({}, xx, _defineProperty({}, macro, meso));
      });
    }
  }
};
/**
 * defines cursors to specific areas within the style state/atom
 * */


var q_crsr = new _atom.Cursor(global_atom, "queries");
var p_crsr = new _atom.Cursor(global_atom, "pseudos");
var b_crsr = new _atom.Cursor(global_atom, "basics");
/**
 * determines what kind of style is being handled and sends it
 * to the partitioner to be digested into the style state/atom
 * */

var partition = function partition(selector, styles) {
  var entries = Object.entries(styles);
  var is_root = selector === "root";

  if (is_root) {
    partitioner(b_crsr, ":root", styles);
  } else {
    entries.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      var is_pseudo = key.slice(0, 1) === "&";
      var is_query = key.slice(0, 6) === "@media";
      var is_basic = _typeof(val) !== "object";

      if (is_pseudo) {
        partitioner(p_crsr, selector, key.slice(1), val);
      } else if (is_query) {
        var rgx = /\(.*?\)/g;
        var media_query = key.match(rgx)[0].slice(1, -1);
        partitioner(q_crsr, media_query, selector, val);
      } else if (is_basic) {
        partitioner(b_crsr, selector, _defineProperty({}, key, val));
      } else {
        log("partition failure:", {
          selector: selector,
          styles: styles
        });
        return;
      }
    });
  }
};
/**
 * Takes a styled-system theme-spec compliant theme object
 * returns ready-to-wear css
 * */


var parse_theme = function parse_theme(theme) {
  return (0, _decamelizeKeysDeep.default)((0, _css.default)(theme)(theme), "-");
};
/**
 * Takes a styled-system theme-spec compliant theme object
 * returns a function that then takes
 * @param {string} sel - a css selector (e.g., 'button')
 * @param {Object} [styles] - a css-in-js style object
 * @param {string|string[]} [path] - a path string or array into the global theme
 *
 * When called with the arguments, registers the styles to the global style atom
 * and returns a unique hash string to be used by the component for scoped css
 * */


exports.parse_theme = parse_theme;

var style_fire = function style_fire(theme_spec) {
  return function (sel) {
    var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var hash = "".concat(sel).concat((0, _random.randomID)(5, "_", "0123456789abcdefghijklmnopqrstuvwxyz"));
    var dot_hash = ".".concat(hash);
    var spec_lens = (0, _paths.getIn)(theme_spec, path);
    var style_obj = path ? (0, _decamelizeKeysDeep.default)((0, _css.default)(spec_lens)(theme_spec), "-") : {};
    var themed_styles = styles ? (0, _decamelizeKeysDeep.default)((0, _css.default)(styles)(theme_spec), "-") : {};

    var computed_styles = _objectSpread({}, style_obj, {}, themed_styles); // -> to injection! 💉


    partition(dot_hash, computed_styles);
    return hash;
  };
};
/**
 * registers theme-spec compliant theme
 * Takes a theme-spec compliant object and returns a tuple that contains
 * [theme_styler, THEME]
 * theme_styler calls style_fire (registering styles and returns a unique hash string)
 * THEME is the theme-spec complaint object parsed into standards compliant css
 * */


var themer = function themer(theme_spec) {
  var THEME = parse_theme(theme_spec);
  var BASE = THEME.styles;
  var basic_entries = Object.entries(BASE);
  basic_entries.forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        selector = _ref4[0],
        styles = _ref4[1];

    return partition(selector, styles);
  });
  var theme_styler = style_fire(theme_spec);
  return [theme_styler, THEME];
};

exports.themer = themer;

var dereference = function dereference(atom, opts) {
  var entries = Object.entries(atom.deref());
  var results = [];
  entries.forEach(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        cursor = _ref6[0],
        styles = _ref6[1];

    var style_array = Object.entries(styles);

    switch (cursor) {
      case "basics":
        style_array.forEach(function (style) {
          results.push(style);
        });
        break;

      case "pseudos":
        style_array.forEach(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
              tag = _ref8[0],
              style = _ref8[1];

          results.push([tag].concat(_toConsumableArray(Object.entries(style))));
        });
        break;

      case "queries":
        style_array.forEach(function (style) {
          var _style$0$split = style[0].split(":"),
              _style$0$split2 = _slicedToArray(_style$0$split, 2),
              m = _style$0$split2[0],
              q = _style$0$split2[1];

          results.push([(0, _hiccupCss.at_media)(_defineProperty({
            screen: true
          }, m, q), Object.entries(style[1]))]);
        });
        break;

      default:
        log("no case found for:", cursor);
    }
  }); // const results = hiccup_css(res)

  return (0, _hiccupCss.css)(results, opts);
}; //?


var _default = themer;
exports.default = _default;
var opts = "development" !== "production" ? {
  format: _hiccupCss.PRETTY
} : null;
/**
 * Waits for the DOMContentLoaded event to inject all registered component styles
 * and basic `styles` from the theme into the <head> of the webpage
 * */

window.addEventListener("DOMContentLoaded", function () {
  var formatted_styles = dereference(global_atom, opts);
  (0, _hiccupCss.injectStyleSheet)(formatted_styles);
});
},{"@thi.ng/random":"../node_modules/@thi.ng/random/index.js","@thi.ng/atom":"../node_modules/@thi.ng/atom/index.js","@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","@styled-system/css":"../node_modules/@styled-system/css/dist/index.esm.js","decamelize-keys-deep":"../node_modules/decamelize-keys-deep/index.js","@thi.ng/hiccup-css":"../node_modules/@thi.ng/hiccup-css/index.js"}],"styles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THEME = exports.theme_styler = void 0;

var _uswds_theme = require("./uswds_theme");

var _src = require("../src");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _themer = (0, _src.themer)(_uswds_theme.theme),
    _themer2 = _slicedToArray(_themer, 2),
    theme_styler = _themer2[0],
    THEME = _themer2[1];

exports.THEME = THEME;
exports.theme_styler = theme_styler;
},{"./uswds_theme":"uswds_theme.js","../src":"../src/index.js"}],"components/button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = exports.button_x = void 0;

var _styles = require("../styles");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var x_btn_bhvr = function x_btn_bhvr(name) {
  return {
    onclick: function onclick() {
      return console.warn("no handler assigned to ".concat(name, " 'onclick' event"));
    }
  };
}; // a HOF that takes a config and returns an HDOM node function


var button_x = function button_x(cfg, theme_path) {
  cfg = _objectSpread({
    tag: "a",
    tag_noop: "span"
  }, cfg); // allow user-defined spec-compliant overrides (e.g., tagActive for route link)

  var hash = (0, _styles.theme_styler)("button", {
    fontSize: [2, 3, 4],
    my: [1, 2, 3],
    marginRight: [1, 2, 3]
  }, theme_path); // the returned hdom node fn with user-provided arbitrary context object

  return function (ctx, attrs) {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    return attrs && attrs.disabled ? [cfg.tag_noop, _objectSpread({
      class: hash,
      style: {
        "background-color": ctx.theme.colors.muted || "gray",
        "cursor": "default"
      }
    }, attrs)].concat(children) // inline theme-derived overrides
    : _typeof(attrs) !== "object" ? [cfg.tag, _objectSpread({
      class: hash
    }, x_btn_bhvr(hash)), attrs].concat(children) : [cfg.tag, _objectSpread({
      class: hash
    }, x_btn_bhvr(hash), {}, attrs)].concat(children);
  };
};

exports.button_x = button_x;
var button = button_x(null, "buttons.simple"); // also accepts ["buttons", "simple"]

exports.button = button;
},{"../styles":"styles.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _hdom = require("@thi.ng/hdom");

var _button = require("./components/button");

var _styles = require("./styles");

// declare button before using in-site (prevent re-registration on RAF)
var btn_outline = (0, _button.button_x)({
  tag: "span"
}, "buttons.outline");

var outlined_button = function outlined_button() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function () {
    return [btn_outline, {
      onclick: function onclick(e) {
        return e.preventDefault(), i++;
      }
    }, // add button behavior in-situ
    "clicks: ".concat(i)];
  };
};

var app = function app(ctx) {
  return ["div", {
    style: {
      padding: "20px"
    }
  }, ["div", outlined_button(), [_button.button, "👀 console"], [_button.button, {
    disabled: true
  }, "sorry"]]];
};

(0, _hdom.start)(app(), {
  ctx: {
    theme: _styles.THEME
  },
  root: document.getElementById("app")
});
},{"@thi.ng/hdom":"node_modules/@thi.ng/hdom/index.js","./components/button":"components/button.js","./styles":"styles.js"}],"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58223" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], "md")
//# sourceMappingURL=/example.e31bb0bc.js.map