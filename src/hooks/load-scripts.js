/**
 * The `useLoadScript` hook loads an external script tag on the client-side.
 * @param src - The URL of the script to load.
 * @param options - {
 * @returns The return value is a promise.
 */
"use strict";
const __awaiter =
  this?.__awaiter ||
  ((thisArg, _arguments, P, generator) => {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P((resolve) => {
            resolve(value);
          });
    }
    return new (P || (P = Promise))((resolve, reject) => {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        if (result.done) {
          resolve(result.value);
        } else {
          adopt(result.value).then(fulfilled, rejected);
        }
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
const __generator =
  this?.__generator ||
  ((thisArg, body) => {
    let _ = {
      label: 0,
      sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    };
    let f;
    let y;
    var t;
    let g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return (v) => step([n, v]);
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : undefined, done: true };
    }
  });
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoadScript = exports.loadScript = undefined;
const react_1 = require("react");
const SCRIPTS_LOADED = {};
function loadScript(src, options) {
  const isScriptLoaded = SCRIPTS_LOADED[src];
  if (isScriptLoaded) {
    return isScriptLoaded;
  }
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    if (options == null ? undefined : options.module) {
      script.type = "module";
    }
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      reject(false);
    };
    document.body.appendChild(script);
  });
  SCRIPTS_LOADED[src] = promise;
  return promise;
}
exports.loadScript = loadScript;
/**
 * The `useLoadScript` hook loads an external script tag on the client-side.
 */
function useLoadScript(url, options) {
  const _a = (0, react_1.useState)("loading");
  const status = _a[0];
  (0, react_1.useEffect)(() => {
    function loadScriptWrapper() {
      return __awaiter(this, undefined, undefined, function () {
        let error_1;
        return __generator(this, (_a) => {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              _a[1]("loading");
              return [4 /*yield*/, loadScript(url, options)];
            case 1:
              _a.sent();
              _a[1]("done");
              return [3 /*break*/, 3];
            case 2:
              error_1 = _a.sent();
              _a[1]("error");
              return [3 /*break*/, 3];
            case 3:
              return [2 /*return*/];
          }
        });
      });
    }
    loadScriptWrapper();
  }, [url, JSON.stringify(options)]);
  return status;
}
exports.useLoadScript = useLoadScript;
