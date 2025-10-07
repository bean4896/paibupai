exports.id = 387;
exports.ids = [387];
exports.modules = {

/***/ 5671:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 2524:
/***/ (() => {



/***/ }),

/***/ 2098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Header({ nav =true  }) {
    const [mobileMenuOpen, setMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [servicesExpanded, setServicesExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();
    const isHomePage = pathname === "/";
    const navigation = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Services",
            href: "/services"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Blog",
            href: "/blog"
        }
    ];
    const services = [
        {
            name: "Photo Shooting",
            href: "/services/photoshooting"
        },
        {
            name: "Social Media Marketing",
            href: "/services/social-media-marketing"
        },
        {
            name: "Event Planning",
            href: "/services/event-planning"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "absolute w-full z-30",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-between h-24 md:h-28 py-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "shrink-0 mr-6 p-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "block group",
                                href: "/",
                                "aria-label": "Paibupai",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/logo_paibupai.png",
                                    alt: "Paibupai Logo",
                                    width: 3553,
                                    height: 3547,
                                    className: "h-[100px] w-auto transition duration-150 ease-in-out group-hover:opacity-80 md:h-[100px]",
                                    priority: true
                                })
                            })
                        }),
                        nav && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                    className: "hidden lg:flex grow",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "flex grow justify-center space-x-8",
                                            children: navigation.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: item.name === "Services" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "relative group",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                className: `font-medium px-3 py-2 flex items-center transition duration-150 ease-in-out ${isHomePage ? "text-white hover:text-primary-200" : "text-gray-600 hover:text-primary-600"}`,
                                                                href: item.href,
                                                                children: [
                                                                    item.name,
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                        className: "ml-1 h-4 w-4",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M19 9l-7 7-7-7"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "py-2",
                                                                    children: services.map((service)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            href: service.href,
                                                                            className: "block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition duration-150 ease-in-out",
                                                                            children: service.name
                                                                        }, service.name))
                                                                })
                                                            })
                                                        ]
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        className: `font-medium px-3 py-2 flex items-center transition duration-150 ease-in-out ${isHomePage ? "text-white hover:text-primary-200" : "text-gray-600 hover:text-primary-600"}`,
                                                        href: item.href,
                                                        children: item.name
                                                    })
                                                }, item.name))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "btn-sm text-white bg-primary-500 hover:bg-primary-600 shadow-sm",
                                                href: "/contact",
                                                children: "Contact Us"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                        className: `focus:outline-none ${isHomePage ? "text-white hover:text-primary-200 focus:text-primary-200" : "text-gray-600 hover:text-primary-600 focus:text-primary-600"}`,
                                        "aria-label": "Toggle mobile menu",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: "h-6 w-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: mobileMenuOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M4 6h16M4 12h16M4 18h16"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                nav && mobileMenuOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2",
                        children: [
                            navigation.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: item.name === "Services" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: ()=>setServicesExpanded(!servicesExpanded),
                                                className: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition duration-150 ease-in-out",
                                                children: [
                                                    item.name,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        className: `h-4 w-4 transition-transform duration-200 ${servicesExpanded ? "rotate-180" : ""}`,
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 9l-7 7-7-7"
                                                        })
                                                    })
                                                ]
                                            }),
                                            servicesExpanded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pl-4 space-y-1",
                                                children: services.map((service)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: service.href,
                                                        className: "block px-3 py-2 text-sm text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-md transition duration-150 ease-in-out",
                                                        onClick: ()=>setMobileMenuOpen(false),
                                                        children: service.name
                                                    }, service.name))
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: item.href,
                                        className: "block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition duration-150 ease-in-out",
                                        onClick: ()=>setMobileMenuOpen(false),
                                        children: item.name
                                    })
                                }, item.name)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pt-4 border-t border-gray-200",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/contact",
                                    className: "block px-3 py-2 text-base font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-md transition duration-150 ease-in-out",
                                    onClick: ()=>setMobileMenuOpen(false),
                                    children: "Contact Us"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 5596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   "metadata": () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4257);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_font_local_target_css_path_app_layout_tsx_import_arguments_src_path_public_fonts_CabinetGrotesk_Medium_woff2_weight_500_path_public_fonts_CabinetGrotesk_Bold_woff2_weight_700_path_public_fonts_CabinetGrotesk_Extrabold_woff2_weight_800_variable_font_cabinet_grotesk_display_swap_variableName_cabinet___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(462);
/* harmony import */ var next_font_local_target_css_path_app_layout_tsx_import_arguments_src_path_public_fonts_CabinetGrotesk_Medium_woff2_weight_500_path_public_fonts_CabinetGrotesk_Bold_woff2_weight_700_path_public_fonts_CabinetGrotesk_Extrabold_woff2_weight_800_variable_font_cabinet_grotesk_display_swap_variableName_cabinet___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_app_layout_tsx_import_arguments_src_path_public_fonts_CabinetGrotesk_Medium_woff2_weight_500_path_public_fonts_CabinetGrotesk_Bold_woff2_weight_700_path_public_fonts_CabinetGrotesk_Extrabold_woff2_weight_800_variable_font_cabinet_grotesk_display_swap_variableName_cabinet___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1893);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);




const metadata = {
    title: "Paibupai - The Platform for Creative Minds",
    description: "Join the best creative community. Discover inspiration, connect with creatives, and showcase your work on Paibupai.",
    keywords: "creative, design, inspiration, community, artists, designers, portfolio",
    authors: [
        {
            name: "Paibupai"
        }
    ],
    openGraph: {
        title: "Paibupai - The Platform for Creative Minds",
        description: "Join the best creative community. Discover inspiration, connect with creatives, and showcase your work.",
        type: "website",
        locale: "en_US"
    },
    twitter: {
        card: "summary_large_image",
        title: "Paibupai - The Platform for Creative Minds",
        description: "Join the best creative community. Discover inspiration, connect with creatives, and showcase your work."
    }
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: `${(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().variable)} ${(next_font_local_target_css_path_app_layout_tsx_import_arguments_src_path_public_fonts_CabinetGrotesk_Medium_woff2_weight_500_path_public_fonts_CabinetGrotesk_Bold_woff2_weight_700_path_public_fonts_CabinetGrotesk_Extrabold_woff2_weight_800_variable_font_cabinet_grotesk_display_swap_variableName_cabinet___WEBPACK_IMPORTED_MODULE_3___default().variable)} font-inter antialiased bg-white text-gray-800 tracking-tight`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col min-h-screen overflow-hidden",
                children: children
            })
        })
    });
}


/***/ }),

/***/ 9767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/keyidai/Desktop/ github/paibupai/components/ui/header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proxy.default);


/***/ }),

/***/ 1893:
/***/ (() => {



/***/ })

};
;