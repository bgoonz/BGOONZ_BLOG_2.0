var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// functions/login.ts
var login_exports = {};
__export(login_exports, {
  onRequest: () => onRequest
});

// node_modules/@cloudflare/pages-plugin-cloudflare-access/api/index.ts
var generateLoginURL = ({
  redirectURL: redirectURLInit,
  domain,
  aud
}) => {
  const redirectURL = typeof redirectURLInit === "string" ? new URL(redirectURLInit) : redirectURLInit;
  const { hostname } = redirectURL;
  const loginPathname = `/cdn-cgi/access/login/${hostname}?`;
  const searchParams = new URLSearchParams({
    kid: aud,
    redirect_url: redirectURL.pathname + redirectURL.search
  });
  return new URL(loginPathname + searchParams.toString(), domain).toString();
};

// functions/login.ts
var onRequest = () => {
  const loginURL = generateLoginURL({
    redirectURL: "https://example.com/greet",
    domain: "https://test.cloudflareaccess.com",
    aud: "4714c1358e65fe4b408ad6d432a5f878f08194bdb4752441fd56faefa9b2b6f2"
  });
  return new Response(null, {
    status: 302,
    headers: { Location: loginURL }
  });
};
module.exports = __toCommonJS(login_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  onRequest
});
//# sourceMappingURL=login.js.map
