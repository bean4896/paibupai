"use strict";
(() => {
var exports = {};
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 9411:
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ 7742:
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ 1041:
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ 881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/blog/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "GET": () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6145);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9532);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(3804);
// EXTERNAL MODULE: ./lib/github-api.ts + 1 modules
var github_api = __webpack_require__(1936);
;// CONCATENATED MODULE: ./app/api/blog/route.ts


// GET /api/blog - Fetch all blog posts or paginated posts
async function GET(request) {
    try {
        const { searchParams  } = new URL(request.url);
        const page = searchParams.get("page");
        const featured = searchParams.get("featured");
        if (featured === "true") {
            // Return only featured posts
            const { fetchFeaturedPosts  } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 1936));
            const posts = await fetchFeaturedPosts();
            return next_response/* default.json */.Z.json({
                posts
            });
        }
        if (page) {
            // Return paginated posts
            const pageNumber = parseInt(page, 10);
            if (isNaN(pageNumber) || pageNumber < 1) {
                return next_response/* default.json */.Z.json({
                    error: "Invalid page number"
                }, {
                    status: 400
                });
            }
            const result = await (0,github_api.fetchPostsPage)(pageNumber);
            return next_response/* default.json */.Z.json(result);
        }
        // Return all posts
        const posts = await (0,github_api.fetchAllPosts)();
        return next_response/* default.json */.Z.json({
            posts
        });
    } catch (error) {
        console.error("Blog API error:", error);
        return next_response/* default.json */.Z.json({
            error: "Failed to fetch blog posts"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fblog%2Froute&name=app%2Fapi%2Fblog%2Froute&pagePath=private-next-app-dir%2Fapi%2Fblog%2Froute.ts&appDir=%2FUsers%2Fkeyidai%2FDesktop%2F%20github%2Fpaibupai%2Fapp&appPaths=%2Fapi%2Fblog%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/blog",
    resolvedPagePath: "/Users/keyidai/Desktop/ github/paibupai/app/api/blog/route.ts",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/blog/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,142,198,601,804,936], () => (__webpack_exec__(881)));
module.exports = __webpack_exports__;

})();