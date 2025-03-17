(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_components_AnimatedSection_jsx_0ca8718b._.js", {

"[project]/src/app/components/AnimatedSection.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const AnimatedSection = ()=>{
    _s();
    // Refs for the sections
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const imageRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Data for the sections
    const sections = [
        {
            title: 'OUR APPROACH',
            imageUrl: './chair-1.jpg'
        },
        {
            title: 'OUR TECHNOLOGY',
            imageUrl: './chair-2.jpg'
        },
        {
            title: 'OUR STORY',
            imageUrl: './chair-3.jpg'
        },
        {
            title: 'OUR DESIGN TEAM',
            imageUrl: './chair-4.jpg'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedSection.useEffect": ()=>{
            // Set initial positions for images (off-screen at the bottom)
            sectionRefs.current.forEach({
                "AnimatedSection.useEffect": (section, index)=>{
                    const image = imageRefs.current[index];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(image, {
                        y: '100%',
                        opacity: 0
                    });
                    // Add event listeners for mouse enter and leave
                    section.addEventListener('mouseenter', {
                        "AnimatedSection.useEffect": ()=>handleMouseEnter(index)
                    }["AnimatedSection.useEffect"]);
                    section.addEventListener('mouseleave', {
                        "AnimatedSection.useEffect": ()=>handleMouseLeave(index)
                    }["AnimatedSection.useEffect"]);
                }
            }["AnimatedSection.useEffect"]);
            // Cleanup
            return ({
                "AnimatedSection.useEffect": ()=>{
                    sectionRefs.current.forEach({
                        "AnimatedSection.useEffect": (section, index)=>{
                            section.removeEventListener('mouseenter', {
                                "AnimatedSection.useEffect": ()=>handleMouseEnter(index)
                            }["AnimatedSection.useEffect"]);
                            section.removeEventListener('mouseleave', {
                                "AnimatedSection.useEffect": ()=>handleMouseLeave(index)
                            }["AnimatedSection.useEffect"]);
                        }
                    }["AnimatedSection.useEffect"]);
                }
            })["AnimatedSection.useEffect"];
        }
    }["AnimatedSection.useEffect"], []);
    const handleMouseEnter = (index)=>{
        const image = imageRefs.current[index];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(image, {
            y: '0%',
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out'
        });
    };
    const handleMouseLeave = (index)=>{
        const image = imageRefs.current[index];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(image, {
            y: '-100%',
            opacity: 0,
            duration: 0.6,
            ease: 'power3.in'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-0",
            children: sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: (el)=>sectionRefs.current[index] = el,
                    className: "relative h-64 md:h-80 overflow-hidden border-r border-gray-200 last:border-r-0 bg-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-end p-6 z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-800",
                                children: section.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AnimatedSection.jsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/AnimatedSection.jsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>imageRefs.current[index] = el,
                            className: "absolute inset-0 w-full h-full z-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: section.imageUrl,
                                alt: section.title,
                                className: "object-cover w-full h-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AnimatedSection.jsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/AnimatedSection.jsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/app/components/AnimatedSection.jsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/components/AnimatedSection.jsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/AnimatedSection.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
};
_s(AnimatedSection, "rr7Dc0ooYJ2Hp3DIxvqZiIVwNTg=");
_c = AnimatedSection;
const __TURBOPACK__default__export__ = AnimatedSection;
var _c;
__turbopack_context__.k.register(_c, "AnimatedSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_AnimatedSection_jsx_0ca8718b._.js.map