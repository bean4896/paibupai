exports.id = 324;
exports.ids = [324];
exports.modules = {

/***/ 3009:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1942))

/***/ }),

/***/ 1942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5250);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6038);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2098);
/* harmony import */ var _components_ui_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6683);
/* __next_internal_client_entry_do_not_use__ default auto */ 





function DefaultLayout({ children  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_2___default().init({
            once: true,
            disable: "phone",
            duration: 500,
            easing: "ease-out-cubic"
        });
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_header__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "grow",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
}


/***/ }),

/***/ 9674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SocialLinks)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./lib/social-config.ts
// Social Media Configuration
// Update these URLs with your actual social media profiles
const socialMediaConfig = {
    instagram: {
        url: "https://www.instagram.com/paibupai",
        handle: "@paibupai",
        name: "Instagram"
    },
    tiktok: {
        url: "https://www.tiktok.com/@paibupai",
        handle: "@paibupai",
        name: "TikTok"
    },
    facebook: {
        url: "https://www.facebook.com/paibupai",
        handle: "paibupai",
        name: "Facebook"
    }
};
// Export individual URLs for easy access
const { instagram , tiktok , facebook  } = socialMediaConfig;

;// CONCATENATED MODULE: ./components/ui/SocialLinks.tsx



function SocialLinks({ className ="" , iconClassName =""  }) {
    const socialLinks = [
        {
            name: "Instagram",
            href: socialMediaConfig.instagram.url,
            ariaLabel: "Follow us on Instagram",
            icon: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                className: `w-8 h-8 fill-current ${iconClassName}`,
                viewBox: "0 0 32 32",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "20.145",
                        cy: "11.892",
                        r: "1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"
                    })
                ]
            })
        },
        {
            name: "TikTok",
            href: socialMediaConfig.tiktok.url,
            ariaLabel: "Follow us on TikTok",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: `w-8 h-8 fill-current ${iconClassName}`,
                viewBox: "0 0 32 32",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.762 7.762 0 0 0 2.189 5.213l-.002-.002A8.77 8.77 0 0 0 29 8.45l.028.002v5.036a13.327 13.327 0 0 1-5.331-1.247l.082.034a15.385 15.385 0 0 1-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.513 9.513 0 0 1-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 0 1-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23.163 23.163 0 0 1-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476.547 0 1.083.047 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 0 0-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426 0 .206.013.41.037.61l-.002-.024a4.26 4.26 0 0 0 4.382 3.586h-.009a4.198 4.198 0 0 0 3.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z"
                })
            })
        },
        {
            name: "Facebook",
            href: socialMediaConfig.facebook.url,
            ariaLabel: "Follow us on Facebook",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: `w-8 h-8 fill-current ${iconClassName}`,
                viewBox: "0 0 32 32",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"
                })
            })
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: `inline-flex ${className}`,
        children: socialLinks.map((social, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: index > 0 ? "ml-4" : "",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: social.href,
                    className: "flex justify-center items-center text-primary-500 bg-primary-100 hover:text-white hover:bg-primary-500 rounded-full transition duration-150 ease-in-out",
                    "aria-label": social.ariaLabel,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: social.icon
                })
            }, social.name))
    });
}


/***/ }),

/***/ 6683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9674);




function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "py-8 md:py-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-12 md:mb-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "shrink-0 mr-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "inline-flex group mb-8 sm:mb-0",
                                href: "/",
                                "aria-label": "Paibupai",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/logo_paibupai.png",
                                    alt: "Paibupai Logo",
                                    width: 3553,
                                    height: 3547,
                                    className: "h-[100px] w-auto transition duration-150 ease-in-out group-hover:opacity-80"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center md:flex md:items-center md:justify-between mb-8 md:mb-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialLinks__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                className: "mb-4 md:order-2 md:ml-4 md:mb-0"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-sm font-medium md:order-1 space-x-6 mb-2 md:mb-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "text-gray-500 decoration-primary-500 decoration-2 underline-offset-2 hover:underline",
                                        href: "/about",
                                        children: "About"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "text-gray-500 decoration-primary-500 decoration-2 underline-offset-2 hover:underline",
                                        href: "/services",
                                        children: "Services"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "text-gray-500 decoration-primary-500 decoration-2 underline-offset-2 hover:underline",
                                        href: "/blog",
                                        children: "Blog"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "text-gray-500 decoration-primary-500 decoration-2 underline-offset-2 hover:underline",
                                        href: "/contact",
                                        children: "Contact"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-xs text-gray-400 text-center md:text-left",
                        children: [
                            "\xa9 2024 Paibupai Photography. All rights reserved. Professional photography services in Singapore. We are committed to delivering exceptional visual content for your business and personal needs. For inquiries about our services or to discuss your photography requirements, please",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "font-medium text-primary-500 decoration-primary-500 underline-offset-2 hover:underline",
                                href: "/contact",
                                children: "contact us"
                            }),
                            "."
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 4506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$typeof": () => (/* binding */ $$typeof),
/* harmony export */   "__esModule": () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/keyidai/Desktop/ github/paibupai/app/(default)/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proxy.default);


/***/ }),

/***/ 3117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ct": () => (/* reexport */ Badge_Badge),
  "$h": () => (/* reexport */ BlogCard),
  "zx": () => (/* reexport */ Button_Button),
  "Zb": () => (/* reexport */ Card_Card),
  "cK": () => (/* reexport */ EventBanner),
  "X6": () => (/* reexport */ Heading),
  "$0": () => (/* reexport */ Section)
});

// UNUSED EXPORTS: CategoryButton, Footer, GalleryItem, Header, PricingCard, SocialLinks, TestimonialCard

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(2585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/ui/Button.tsx


const buttonVariants = {
    primary: "text-white bg-primary-500 hover:bg-primary-600 shadow-sm",
    secondary: "text-gray-600 bg-white hover:bg-primary-100 hover:text-primary-600 shadow-sm",
    outline: "text-primary-500 bg-transparent border border-primary-500 hover:bg-primary-50",
    ghost: "text-gray-600 bg-transparent hover:bg-gray-100"
};
const buttonSizes = {
    sm: "btn-sm",
    md: "btn",
    lg: "btn-lg"
};
function Button_Button({ children , variant ="primary" , size ="md" , href , onClick , className ="" , disabled =false , type ="button" , fullWidth =false  }) {
    const baseClasses = `${buttonSizes[size]} ${buttonVariants[variant]}`;
    const widthClasses = fullWidth ? "w-full" : "";
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
    const classes = `${baseClasses} ${widthClasses} ${disabledClasses} ${className}`.trim();
    if (href) {
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            className: classes,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: type,
        onClick: onClick,
        disabled: disabled,
        className: classes,
        children: children
    });
}

;// CONCATENATED MODULE: ./components/ui/Card.tsx

const cardVariants = {
    default: "bg-white",
    elevated: "bg-white shadow-lg",
    outlined: "bg-white border border-gray-200",
    dark: "bg-gray-800 text-white"
};
const cardPadding = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
};
function Card_Card({ children , variant ="default" , padding ="md" , className ="" , hover =false  }) {
    const baseClasses = cardVariants[variant];
    const paddingClasses = cardPadding[padding];
    const hoverClasses = hover ? "hover:shadow-xl transition duration-150 ease-in-out" : "";
    const classes = `${baseClasses} ${paddingClasses} ${hoverClasses} ${className}`.trim();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes,
        children: children
    });
}

;// CONCATENATED MODULE: ./components/ui/Section.tsx

const sectionVariants = {
    default: "",
    gray: "bg-gray-50",
    dark: "bg-gray-800 text-white"
};
const sectionPadding = {
    none: "",
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-20"
};
const containerMaxWidth = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "6xl": "max-w-6xl"
};
function Section({ children , variant ="default" , padding ="md" , className ="" , container =true , maxWidth ="6xl"  }) {
    const variantClasses = sectionVariants[variant];
    const paddingClasses = sectionPadding[padding];
    const containerClasses = container ? `max-w-6xl mx-auto px-4 sm:px-6` : "";
    const classes = `${variantClasses} ${paddingClasses} ${className}`.trim();
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: classes,
        children: container ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: containerClasses,
            children: children
        }) : children
    });
}

;// CONCATENATED MODULE: ./components/ui/Heading.tsx

const headingVariants = {
    default: "",
    display: "font-cabinet-grotesk",
    section: "font-cabinet-grotesk"
};
const headingSizes = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6"
};
function Heading({ children , level =2 , variant ="default" , className ="" , center =false  }) {
    const Tag = `h${level}`;
    const variantClasses = headingVariants[variant];
    const sizeClasses = headingSizes[level];
    const centerClasses = center ? "text-center" : "";
    const classes = `${sizeClasses} ${variantClasses} ${centerClasses} ${className}`.trim();
    return /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
        className: classes,
        children: children
    });
}

;// CONCATENATED MODULE: ./components/ui/Badge.tsx

const badgeVariants = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-primary-100 text-primary-800",
    secondary: "bg-gray-200 text-gray-800",
    success: "bg-emerald-100 text-emerald-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800"
};
const badgeSizes = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2"
};
function Badge_Badge({ children , variant ="default" , size ="md" , className =""  }) {
    const variantClasses = badgeVariants[variant];
    const sizeClasses = badgeSizes[size];
    const classes = `inline-flex items-center font-semibold rounded-full ${variantClasses} ${sizeClasses} ${className}`.trim();
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: classes,
        children: children
    });
}

;// CONCATENATED MODULE: ./components/ui/PricingCard.tsx




function PricingCard({ title , price , period ="/mo" , description , features , buttonText , buttonHref , popular =false , className ="" , variant ="default"  }) {
    const isDark = variant === "dark";
    return /*#__PURE__*/ _jsxs(Card, {
        variant: isDark ? "dark" : "default",
        className: `relative flex flex-col h-full ${className}`,
        children: [
            popular && /*#__PURE__*/ _jsx("div", {
                className: "absolute top-0 right-0 mr-6 -mt-4",
                children: /*#__PURE__*/ _jsx(Badge, {
                    variant: "success",
                    children: "Most Popular"
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: `font-cabinet-grotesk text-xl font-semibold mb-1 ${isDark ? "text-gray-100" : ""}`,
                        children: title
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: `font-cabinet-grotesk inline-flex items-baseline mb-2 ${isDark ? "text-gray-100" : ""}`,
                        children: typeof price === "number" ? /*#__PURE__*/ _jsxs(_Fragment, {
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: "text-3xl font-medium text-gray-400",
                                    children: "$"
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    className: "text-5xl font-bold",
                                    children: price
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    className: "font-medium text-gray-400",
                                    children: period
                                })
                            ]
                        }) : /*#__PURE__*/ _jsx("span", {
                            className: "text-5xl font-bold",
                            children: price
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: `mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`,
                        children: description
                    }),
                    /*#__PURE__*/ _jsx(Button, {
                        href: buttonHref,
                        variant: "primary",
                        fullWidth: true,
                        children: buttonText
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: `font-medium mb-4 ${isDark ? "text-gray-100" : ""}`,
                children: isDark ? "All free features, plus:" : "Features include:"
            }),
            /*#__PURE__*/ _jsx("ul", {
                className: `space-y-3 grow ${isDark ? "text-gray-400" : "text-gray-500"}`,
                children: features.map((feature, index)=>/*#__PURE__*/ _jsxs("li", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ _jsx("svg", {
                                className: "w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0",
                                viewBox: "0 0 12 12",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ _jsx("path", {
                                    d: "M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                                })
                            }),
                            /*#__PURE__*/ _jsx("span", {
                                children: feature
                            })
                        ]
                    }, index))
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2208);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/ui/TestimonialCard.tsx



function TestimonialCard({ image , name , handle , quote , buttonText , buttonHref , className =""  }) {
    return /*#__PURE__*/ _jsxs("div", {
        className: `space-y-8 lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left ${className}`,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "shrink-0 relative inline-flex",
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        className: "rounded-full",
                        src: image,
                        width: 280,
                        height: 280,
                        alt: `${name} testimonial`
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "absolute right-0 bottom-0 mr-4 mb-6",
                        children: /*#__PURE__*/ _jsxs("a", {
                            className: "flex items-center font-cabinet-grotesk font-bold decoration-primary-500 decoration-2 underline-offset-2 hover:underline px-3 py-1 bg-white rounded-full shadow-sm",
                            href: "#0",
                            children: [
                                /*#__PURE__*/ _jsx("svg", {
                                    className: "shrink-0 mr-1.5",
                                    width: "16",
                                    height: "13",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ _jsx("path", {
                                        d: "M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8Z",
                                        fill: "#1D9BF0",
                                        fillRule: "nonzero"
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("span", {
                                    children: [
                                        "@",
                                        handle
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ _jsx("svg", {
                        className: "absolute left-0 top-0 -mt-16",
                        width: "24",
                        height: "48",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ _jsx("path", {
                            className: "fill-primary-300",
                            d: "M9.736 2.485c-.458-.226-.257-.84.318-1.7.185-.273.932-.82 1.107-.783.348.065.692.136.979.256.18.067 1.969 1.987 2.587 2.648.615.624 1.083 1.347 1.53 2.09L17.6 7.26c.445.756.883 1.516 1.3 2.287.142.256.257.527.347.812l.081.29c.282 1.15.768 2.18 1.292 3.19l.386.742a.66.66 0 0 0 .286.294c.394.193 1.857 3.493 1.922 3.978.221 1.181.258 2.447.447 3.634l.046.2c.023.099.034.203-.028.331-.237.5-.06.81.025 1.16.125.486.232.98.29 1.495.03.257-.059.56-.103.847-.044.263-.507.352-.586.304-.222-.138-.354.122-.522.225l-.128.072a.317.317 0 0 1-.058.022c-.073.008-1.941-1.856-2.315-2.283l-.051-.063c-.019-.026-.604-.888-1.23-1.81-.688-.87-1.177-1.889-1.326-2.07-.14-.202-.146-.47-.186-.718-.014-.127-1.707-2.888-1.761-3-.241-.629-.68-1.149-.602-1.95.015-.155-.062-.268-.125-.385-.541-1.007-.898-2.118-1.32-3.194-.213-.55-.53-1.04-.789-1.563-.047-.094-.043-.218-.07-.327l-.064-.27a.681.681 0 0 0-.05-.124c-.68-1.196-1.16-2.527-1.992-3.62-.18-.26-.585-1.813-.829-2.088-.127-.157.036-1.103-.15-1.192ZM.246 30.253c-.444-.162-.255-.76.311-1.603.181-.27.91-.842 1.081-.836.333.018.657.04.927.104.162.05 1.832 1.473 2.456 1.898.588.425 1.074.94 1.534 1.478.947 1.084 1.946 2.123 2.938 3.169.221.234.402.5.557.8.45.912 1.096 1.635 1.784 2.31l.458.443a.49.49 0 0 0 .32.14c.382.023 2.439 2.21 2.624 2.586.48.9.833 1.948 1.316 2.865.062.136.192.213.158.44-.077.523.162.705.334.963.242.356.472.726.67 1.13.097.2.102.5.141.762.033.237-.356.518-.438.512-.236-.018-.283.261-.406.424a.968.968 0 0 1-.138.16c-.06.042-2.243-.708-2.71-.915l-.07-.034-1.605-1.025c-.859-.466-1.577-1.147-1.759-1.25-.179-.114-.254-.348-.357-.548l-2.36-1.975c-.375-.463-.9-.783-1.001-1.523-.022-.145-.117-.222-.199-.304-.72-.73-1.276-1.62-1.865-2.476-.3-.435-.672-.81-1.003-1.217-.06-.073-.077-.185-.119-.277l-.098-.233a.458.458 0 0 0-.067-.102c-.813-.94-1.43-2.061-2.312-2.943-.207-.201-.686-1.6-.927-1.826-.137-.127.002-1.032-.176-1.097Z"
                        })
                    }),
                    /*#__PURE__*/ _jsx("h4", {
                        className: "h3 font-cabinet-grotesk mb-4",
                        children: quote
                    }),
                    buttonText && buttonHref && /*#__PURE__*/ _jsx("div", {
                        children: /*#__PURE__*/ _jsxs(Button, {
                            href: buttonHref,
                            variant: "primary",
                            size: "sm",
                            className: "group",
                            children: [
                                buttonText,
                                /*#__PURE__*/ _jsx("span", {
                                    className: "tracking-normal text-primary-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1",
                                    children: "->"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/BlogCard.tsx


function BlogCard({ image , title , excerpt , authorName , authorImage , href , date , className =""  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: `h-full flex flex-col space-y-5 ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "block group overflow-hidden",
                href: href,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    className: "w-full aspect-[7/4] object-cover group-hover:scale-105 transition duration-700 ease-out",
                    src: image,
                    width: 347,
                    height: 198,
                    alt: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grow flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("header", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "h4 font-cabinet-grotesk font-bold mb-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "inline-block decoration-primary-500 decoration-2 underline-offset-2 hover:underline",
                                href: href,
                                children: title
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-500 grow",
                        children: excerpt
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                        className: "flex items-center justify-between text-sm mt-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "rounded-full shrink-0 mr-3",
                                            src: authorImage,
                                            width: 32,
                                            height: 32,
                                            alt: authorName
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-gray-500",
                                                children: "By"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "font-medium decoration-primary-500 decoration-2 underline-offset-2 hover:underline",
                                                href: "#0",
                                                children: authorName
                                            })
                                        ]
                                    })
                                ]
                            }),
                            date && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-gray-400 text-xs",
                                children: date
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/GalleryItem.tsx


function GalleryItem({ image , authorName , authorHandle , authorImage , likes , href , className ="" , categories =[
    "0"
] , currentCategory ="0"  }) {
    const isVisible = categories.includes(currentCategory) || currentCategory === "0";
    return /*#__PURE__*/ _jsxs("a", {
        className: `relative group hover:shadow-xl transition duration-150 ease-in-out ${className}`,
        style: !isVisible ? {
            display: "none"
        } : {},
        href: href,
        children: [
            /*#__PURE__*/ _jsx(Image, {
                className: "w-full aspect-square object-cover",
                src: image,
                width: "352",
                height: "352",
                alt: `Gallery item by ${authorName}`
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "relative flex justify-between",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ _jsx(Image, {
                                        className: "shrink-0 w-10 h-10 rounded-full mr-4",
                                        src: authorImage,
                                        width: 40,
                                        height: 40,
                                        alt: authorName
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "truncate",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "font-bold text-white truncate",
                                                children: authorName
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "text-xs text-white opacity-60 truncate",
                                                children: [
                                                    "@",
                                                    authorHandle
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex flex-nowrap items-center ml-2",
                                children: [
                                    /*#__PURE__*/ _jsxs("button", {
                                        className: "text-rose-500 hover:text-rose-600",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "sr-only",
                                                children: "Like"
                                            }),
                                            /*#__PURE__*/ _jsx("svg", {
                                                className: "fill-current",
                                                width: "16",
                                                height: "14",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ _jsx("path", {
                                                    d: "M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z",
                                                    fillRule: "nonzero"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "whitespace-nowrap text-sm text-white opacity-90 ml-2",
                                        children: likes
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/CategoryButton.tsx

function CategoryButton({ children , count , isActive , onClick , className =""  }) {
    return /*#__PURE__*/ _jsx("button", {
        className: `relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${isActive ? "bg-primary-100 border-primary-300" : "bg-white border-gray-200"} ${className}`,
        onClick: onClick,
        children: /*#__PURE__*/ _jsxs("div", {
            className: "flex items-center justify-center",
            children: [
                /*#__PURE__*/ _jsx("span", {
                    children: children
                }),
                /*#__PURE__*/ _jsx("span", {
                    className: `text-xs font-semibold px-1 py-px rounded-full ml-2 ${isActive ? "text-white bg-primary-300" : "text-gray-400 bg-gray-100"}`,
                    children: count
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/EventBanner.tsx





function EventBanner({ event  }) {
    if (!event.isActive) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        padding: "none",
        className: "relative pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 pointer-events-none -z-10"
            }),
            event.backgroundImage && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: event.backgroundImage,
                alt: event.title,
                fill: true,
                className: "object-cover"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [
                        event.badge && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6",
                            "data-aos": "fade-up",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-4 h-4 mr-2",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                }),
                                event.badge
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                            level: 1,
                            variant: "display",
                            className: "text-white mb-4",
                            "data-aos": "fade-up",
                            "data-aos-delay": "100",
                            children: event.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                            level: 2,
                            variant: "section",
                            className: "text-primary-100 mb-6",
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                            children: event.subtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-xl text-primary-100 mb-8 max-w-2xl mx-auto",
                            "data-aos": "fade-up",
                            "data-aos-delay": "300",
                            children: event.description
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10",
                            "data-aos": "fade-up",
                            "data-aos-delay": "400",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center text-white",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            className: "w-5 h-5 mr-2 text-primary-200",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-medium",
                                            children: event.date
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center text-white",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            className: "w-5 h-5 mr-2 text-primary-200",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-medium",
                                            children: event.location
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            "data-aos": "fade-up",
                            "data-aos-delay": "500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button_Button, {
                                href: event.ctaLink,
                                variant: "secondary",
                                className: "bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 shadow-lg",
                                children: event.ctaText
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./lib/social-config.ts
// Social Media Configuration
// Update these URLs with your actual social media profiles
const social_config_socialMediaConfig = {
    instagram: {
        url: "https://www.instagram.com/paibupai",
        handle: "@paibupai",
        name: "Instagram"
    },
    tiktok: {
        url: "https://www.tiktok.com/@paibupai",
        handle: "@paibupai",
        name: "TikTok"
    },
    facebook: {
        url: "https://www.facebook.com/paibupai",
        handle: "paibupai",
        name: "Facebook"
    }
};
// Export individual URLs for easy access
const { instagram , tiktok , facebook  } = social_config_socialMediaConfig;

;// CONCATENATED MODULE: ./components/ui/SocialLinks.tsx



function SocialLinks_SocialLinks({ className ="" , iconClassName =""  }) {
    const socialLinks = [
        {
            name: "Instagram",
            href: socialMediaConfig.instagram.url,
            ariaLabel: "Follow us on Instagram",
            icon: /*#__PURE__*/ _jsxs("svg", {
                className: `w-8 h-8 fill-current ${iconClassName}`,
                viewBox: "0 0 32 32",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "20.145",
                        cy: "11.892",
                        r: "1"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"
                    })
                ]
            })
        },
        {
            name: "TikTok",
            href: socialMediaConfig.tiktok.url,
            ariaLabel: "Follow us on TikTok",
            icon: /*#__PURE__*/ _jsx("svg", {
                className: `w-8 h-8 fill-current ${iconClassName}`,
                viewBox: "0 0 32 32",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ _jsx("path", {
                    d: "M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.762 7.762 0 0 0 2.189 5.213l-.002-.002A8.77 8.77 0 0 0 29 8.45l.028.002v5.036a13.327 13.327 0 0 1-5.331-1.247l.082.034a15.385 15.385 0 0 1-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.513 9.513 0 0 1-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 0 1-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23.163 23.163 0 0 1-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476.547 0 1.083.047 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 0 0-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426 0 .206.013.41.037.61l-.002-.024a4.26 4.26 0 0 0 4.382 3.586h-.009a4.198 4.198 0 0 0 3.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z"
                })
            })
        },
        {
            name: "Facebook",
            href: socialMediaConfig.facebook.url,
            ariaLabel: "Follow us on Facebook",
            icon: /*#__PURE__*/ _jsx("svg", {
                className: `w-8 h-8 fill-current ${iconClassName}`,
                viewBox: "0 0 32 32",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ _jsx("path", {
                    d: "M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"
                })
            })
        }
    ];
    return /*#__PURE__*/ _jsx("ul", {
        className: `inline-flex ${className}`,
        children: socialLinks.map((social, index)=>/*#__PURE__*/ _jsx("li", {
                className: index > 0 ? "ml-4" : "",
                children: /*#__PURE__*/ _jsx(Link, {
                    href: social.href,
                    className: "flex justify-center items-center text-primary-500 bg-primary-100 hover:text-white hover:bg-primary-500 rounded-full transition duration-150 ease-in-out",
                    "aria-label": social.ariaLabel,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: social.icon
                })
            }, social.name))
    });
}

// EXTERNAL MODULE: ./components/ui/header.tsx
var header = __webpack_require__(9767);
;// CONCATENATED MODULE: ./components/ui/footer.tsx




function Footer() {
    return /*#__PURE__*/ _jsx("footer", {
        children: /*#__PURE__*/ _jsx("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "py-8 md:py-12",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-12 md:mb-6",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "shrink-0 mr-4",
                            children: /*#__PURE__*/ _jsx(Link, {
                                className: "inline-flex group mb-8 sm:mb-0",
                                href: "/",
                                "aria-label": "Paibupai",
                                children: /*#__PURE__*/ _jsx(Image, {
                                    src: "/logo_paibupai.png",
                                    alt: "Paibupai Logo",
                                    width: 3553,
                                    height: 3547,
                                    className: "h-[100px] w-auto transition duration-150 ease-in-out group-hover:opacity-80"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "text-center md:flex md:items-center md:justify-between mb-8 md:mb-6",
                        children: [
                            /*#__PURE__*/ _jsx(SocialLinks, {
                                className: "mb-4 md:order-2 md:ml-4 md:mb-0"
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "text-sm font-medium md:order-1 space-x-6 mb-2 md:mb-0",
                                children: [
                                    /*#__PURE__*/ _jsx("a", {
                                        className: "text-gray-500 decoration-primary-500 decoration-2 underline-offset-2 hover:underline",
                                        href: "/about",
                                        children: "About"
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        className: "text-gray-500 decoration-primary-500 decoration-2 underline-offset-2 hover:underline",
                                        href: "/services",
                                        children: "Services"
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        className: "text-gray-500 decoration-primary-500 decoration-2 underline-offset-2 hover:underline",
                                        href: "/blog",
                                        children: "Blog"
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        className: "text-gray-500 decoration-primary-500 decoration-2 underline-offset-2 hover:underline",
                                        href: "/contact",
                                        children: "Contact"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "text-xs text-gray-400 text-center md:text-left",
                        children: [
                            "\xa9 2024 Paibupai Photography. All rights reserved. Professional photography services in Singapore. We are committed to delivering exceptional visual content for your business and personal needs. For inquiries about our services or to discuss your photography requirements, please",
                            " ",
                            /*#__PURE__*/ _jsx("a", {
                                className: "font-medium text-primary-500 decoration-primary-500 underline-offset-2 hover:underline",
                                href: "/contact",
                                children: "contact us"
                            }),
                            "."
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/index.ts
// Base components





// Composite components







// Layout components




/***/ })

};
;