exports.id = 326;
exports.ids = [326];
exports.modules = {

/***/ 501:
/***/ ((module) => {

// Exports
module.exports = {
	"Page": "MainPage_Page__3pqfP"
};


/***/ }),

/***/ 427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const someJSCodeExample = `
  // The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325

  const CANCELATION_MESSAGE = {
    type: 'cancelation',
    msg: 'operation is manually canceled',
  };

  function makeCancelable(promise) {
    let hasCanceled_ = false;

    const wrappedPromise = new Promise((resolve, reject) => {
      promise.then(val => hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val));
      promise.catch(reject);
    });

    return (wrappedPromise.cancel = () => (hasCanceled_ = true), wrappedPromise);
  }

  export default makeCancelable;
`;
const someCSSCodeExample = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [type=reset], [type=submit], button, html [type=button] {
      -webkit-appearance: button;
  }

  [type=button]{
    -webkit-appearance: none;
  }

  .full-width {
    width: 100%;
  }
  .full-height {
    height: 100%;
  }
  .full-size {
    width: 100%;
    height: 100%;
  }

  .ql-editor a {
    color: rgba(255, 255, 255, 0.20);
    cursor: pointer;
    padding-left: 8px;
    padding-right: 8px;
    text-decoration: none;
  }
  .ql-editor ul, .ql-editor li, .ql-editor ol {
    margin-left: 16px;
  }
  .ql-editor object {
    color: #d32f2f;
  }
  .ql-editor blockquote {
    border-left: 3px solid rgba(255, 255, 255, 0.12);
    padding-top: 8px;
    padding-left: 24px;
    padding-right: 16px;
    padding-bottom: 8px;
  }
  .ql-editor .ql-align-center {
    text-align: center;
  }
  .ql-editor .ql-align-justify {
    text-align: justify;
  }
  .ql-editor .ql-align-right {
    text-align: right;
  }
  .ql-editor a:hover {
    text-decoration: underline;
  }
`;
const someHTMLCodeExample = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <!-- https://web.dev/uses-rel-preconnect -->
      <link rel="preconnect" href="https://storage.googleapis.com">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#111" />

      <meta
        name="description"
        content="Wlist"
        data-react-helmet="true"
      />
      <meta
        property="og:title"
        content="Wlist"
        data-react-helmet="true"
      >
      <meta
        property="og:description"
        content="Wlist"
        data-react-helmet="true"
      >
      <meta
        property="og:url"
        content="%PUBLIC_URL%"
        data-react-helmet="true"
      >
      <meta
        property="og:image"
        content="%PUBLIC_URL%/images/cover.png"
        data-react-helmet="true"
      />
      <meta
        name="twitter:card"
        content="summary"
        data-react-helmet="true"
      />
      <meta property="og:type" content="website" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <!--
        manifest.json provides metadata used when your web app is installed on a
        user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
      -->
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" crossorigin="use-credentials" />
      <!-- https://web.dev/defer-non-critical-css/ -->
      <link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">

      <title>Wlist</title>

      <!-- ie -->
      <script type="text/javascript">
        var ua = navigator.userAgent;
        var is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;

        if (is_ie) {
          document.ie = 'true';

          var ie_script = document.createElement('script');
          var ie_styles = document.createElement('link');

          ie_script.src = 'no-ie/init.js';
          ie_styles.rel = 'stylesheet';
          ie_styles.href = 'no-ie/styles.css';

          function injectScripts() {
            document.body.innerHTML = '';
            document.body.appendChild(ie_styles);
            document.body.appendChild(ie_script);
          }

          if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', injectScripts);
          } else { // before IE 9
            document.attachEvent('DOMContentLoaded', injectScripts);
          }

        }
      </script>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <script type="text/javascript">
        // set the body color before app initialization, to avoid blinking
        var themeMode = localStorage.getItem('theme-mode');
        var initialBodyStyles = document.createElement('style');
        var currentThemeColor = themeMode === 'light' ? '#fafafa': '#111';
        initialBodyStyles.innerText = 'body { background-color: ' + currentThemeColor + ' }';
        document.head.appendChild(initialBodyStyles);

        // also set meta[name="theme-color"] content
        var metaTheme = document.querySelector('meta[name="theme-color"]');

        metaTheme.content = currentThemeColor;
      </script>
      <div id="root"></div>
    </body>
  </html>
`;
const someTSCodeExample = "Typescript example";
const somePythonCodeExample = "Python example";
const someJavaCodeExample = "Java Code example";
const someTextExample = "Text Example";
const Files = {
    "JavaScript": {
        name: "JavaScript",
        language: "javascript",
        value: someJSCodeExample
    },
    "CSS": {
        name: "CSS",
        language: "css",
        value: someCSSCodeExample
    },
    "HTML": {
        name: "HTML",
        language: "html",
        value: someHTMLCodeExample
    },
    "Java": {
        name: "Java",
        language: "java",
        value: someJavaCodeExample
    },
    "TypeScript": {
        name: "TypeScript",
        language: "typescript",
        value: someTSCodeExample
    },
    "Python": {
        name: "Python",
        language: "python",
        value: somePythonCodeExample
    },
    "Text": {
        name: "Text",
        language: "text",
        value: someTextExample
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Files);


/***/ }),

/***/ 294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_0__);

const Styles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_0__.createStyles)((theme, _params, getRef)=>{
    theme.colorScheme = "dark";
    const icon = getRef("icon");
    return {
        Navheader: {
            paddingBottom: theme.spacing.md,
            marginBottom: theme.spacing.md * 1.5,
            borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
        },
        Navfooter: {
            paddingTop: theme.spacing.md,
            marginTop: theme.spacing.md,
            borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
        },
        Navlink: {
            ...theme.fn.focusStyles(),
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: theme.fontSizes.sm,
            color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
            padding: `${theme.spacing.xs}px`,
            margin: `${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,
            cursor: "pointer",
            "&:hover": {
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === "dark" ? theme.white : theme.black,
                [`& .${icon}`]: {
                    color: theme.colorScheme === "dark" ? theme.white : theme.black
                }
            }
        },
        NavlinkIcon: {
            ref: icon,
            color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
            marginRight: theme.spacing.sm
        },
        NavlinkActive: {
            "&, &:hover": {
                backgroundColor: theme.fn.variant({
                    variant: "light",
                    color: theme.primaryColor
                }).background,
                color: theme.fn.variant({
                    variant: "light",
                    color: theme.primaryColor
                }).color,
                [`& .${icon}`]: {
                    color: theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor
                    }).color
                }
            }
        },
        Username: {
            padding: "0px",
            margin: "0px"
        },
        EditorPanel: {
            display: "relative"
        },
        PaneTwo: {
            backgroundColor: "#1A1B1E",
            height: "100vh",
            maxWidth: "45vw",
            padding: "0",
            margin: "0"
        },
        Result: {
            // margin: '5px',
            padding: "10px",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Roboto, sans-serif",
            borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
        },
        ResultContainer: {
            padding: "10px",
            minHeight: "300px",
            border: `3px solid wheat`
        },
        RUN: {
            position: "sticky",
            // position: 'absolute',
            top: "325px",
            left: "30px"
        }
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Styles);


/***/ }),

/***/ 326:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_split_pane_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93);
/* harmony import */ var react_split_pane_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_split_pane_next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(975);
/* harmony import */ var _mantine_tiptap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tiptap_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(891);
/* harmony import */ var _tiptap_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tiptap_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tiptap_extension_highlight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(706);
/* harmony import */ var _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92);
/* harmony import */ var _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(828);
/* harmony import */ var _tiptap_extension_text_align__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(641);
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(587);
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Constants_Files__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(427);
/* harmony import */ var _Constants_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(294);
/* harmony import */ var _styles_MainPage_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(501);
/* harmony import */ var _styles_MainPage_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_MainPage_module_css__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tiptap_extension_highlight__WEBPACK_IMPORTED_MODULE_6__, _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_8__, _tiptap_extension_text_align__WEBPACK_IMPORTED_MODULE_9__]);
([_tiptap_extension_highlight__WEBPACK_IMPORTED_MODULE_6__, _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_8__, _tiptap_extension_text_align__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const MainPage = ()=>{
    const { classes , cx  } = (0,_Constants_styles__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Your Name");
    const [modalOpened, setModalOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("JavaScript");
    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("JavaScript");
    const [executionResult, setExecutionResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const file = _Constants_Files__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z[fileName];
    const content = `<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2>
    <p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar 
    editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" 
    target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, 
    <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts 
    (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And 
    all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';`;
    const editor = (0,_tiptap_react__WEBPACK_IMPORTED_MODULE_5__.useEditor)({
        extensions: [
            (_tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_7___default()),
            _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_8__["default"],
            _mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.Link,
            _tiptap_extension_highlight__WEBPACK_IMPORTED_MODULE_6__["default"],
            _tiptap_extension_text_align__WEBPACK_IMPORTED_MODULE_9__["default"].configure({
                types: [
                    "heading",
                    "paragraph"
                ]
            })
        ],
        content
    });
    const splitPaneProps = {
        split: "vertical"
    };
    const paneProps = {
        minSize: "20%"
    };
    const editorProps = {
        initialSize: "75%",
        minSize: "20%"
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        editorRef.current?.focus();
    }, [
        file?.name
    ]);
    const handleResult = (code)=>{
        let CodeSize = Buffer.byteLength(code);
        if (CodeSize > 1024) {
            console.log(CodeSize);
            setExecutionResult("Error");
        } else {
            console.log(CodeSize);
            setExecutionResult("OK");
        }
    };
    const handleClick = ()=>{
        var inputName = document.getElementById("usernameInput");
        if (inputName) {
            setUsername(inputName.value);
        }
        setModalOpened(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                overlayColor: "#101113",
                opened: modalOpened,
                onClose: ()=>setModalOpened(false),
                overlayBlur: 3,
                centered: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
                    size: 420,
                    my: 40,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Title, {
                            align: "center",
                            sx: (theme)=>({
                                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                                    fontWeight: 900
                                }),
                            children: "Welcome back!"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Paper, {
                            withBorder: true,
                            shadow: "md",
                            p: 30,
                            mt: 30,
                            radius: "md",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
                                    label: "Your Name",
                                    placeholder: "Enter Your Name",
                                    id: "usernameInput"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    fullWidth: true,
                                    mt: "xl",
                                    onClick: handleClick,
                                    children: "Sign in"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_MainPage_module_css__WEBPACK_IMPORTED_MODULE_13___default().Page),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
                            height: "96vh",
                            width: {
                                sm: "28vh"
                            },
                            p: "md",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {
                                    className: classes.Navheader,
                                    position: "apart",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: " CoderPad "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Code, {
                                            sx: {
                                                fontweight: 700
                                            },
                                            children: "v3.1.2"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: classes.Username,
                                            children: [
                                                " Hello, ",
                                                username,
                                                "!"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    onClick: ()=>setOpened((o)=>!o),
                                    children: "Choose Language"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
                                    in: opened,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: cx(classes.Navlink, {
                                                [classes.NavlinkActive]: "HTML" === active
                                            }),
                                            onClick: ()=>{
                                                setActive("HTML"), setFileName("HTML");
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "HTML"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: cx(classes.Navlink, {
                                                [classes.NavlinkActive]: "CSS" === active
                                            }),
                                            onClick: ()=>{
                                                setActive("CSS"), setFileName("CSS");
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "CSS"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: cx(classes.Navlink, {
                                                [classes.NavlinkActive]: "JavaScript" === active
                                            }),
                                            onClick: ()=>{
                                                setActive("JavaScript"), setFileName("JavaScript");
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "JavaScript"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: cx(classes.Navlink, {
                                                [classes.NavlinkActive]: "TypeScript" === active
                                            }),
                                            onClick: ()=>{
                                                setActive("TypeScript"), setFileName("TypeScript");
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "TypeScript"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: cx(classes.Navlink, {
                                                [classes.NavlinkActive]: "Python" === active
                                            }),
                                            onClick: ()=>{
                                                setActive("Python"), setFileName("Python");
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Python"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: cx(classes.Navlink, {
                                                [classes.NavlinkActive]: "Java" === active
                                            }),
                                            onClick: ()=>{
                                                setActive("Java"), setFileName("Java");
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Java"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: cx(classes.Navlink, {
                                                [classes.NavlinkActive]: "PlainText" === active
                                            }),
                                            onClick: ()=>{
                                                setActive("Text"), setFileName("Text");
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Plain Text"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {
                                    className: classes.Navfooter,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        className: classes.Navlink,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Logout"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_MainPage_module_css__WEBPACK_IMPORTED_MODULE_13___default().EditorandResults),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_split_pane_next__WEBPACK_IMPORTED_MODULE_3___default()), {
                            ...splitPaneProps,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_split_pane_next__WEBPACK_IMPORTED_MODULE_3__.Pane, {
                                    ...editorProps,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
                                        className: classes.EditorPanel,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_monaco_editor_react__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            height: "96vh",
                                            // min-width="70vw"
                                            path: file?.name,
                                            defaultLanguage: file?.language,
                                            defaultValue: file?.value,
                                            theme: "vs-dark",
                                            onMount: (editor)=>editorRef.current = editor
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_split_pane_next__WEBPACK_IMPORTED_MODULE_3__.Pane, {
                                    ...paneProps,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
                                        className: classes.PaneTwo,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Navbar.Section, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                        className: classes.Result,
                                                        children: " RESULT "
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
                                                        className: classes.ResultContainer,
                                                        children: [
                                                            executionResult,
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                                variant: "gradient",
                                                                gradient: {
                                                                    from: "teal",
                                                                    to: "blue",
                                                                    deg: 60
                                                                },
                                                                className: classes.RUN,
                                                                onClick: ()=>{
                                                                    handleResult(file?.value);
                                                                },
                                                                children: "RUN"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.ScrollArea, {
                                                style: {
                                                    height: "355px"
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor, {
                                                    editor: editor,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.Toolbar, {
                                                            sticky: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.ControlsGroup, {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.Bold, {}),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.Italic, {}),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.Underline, {}),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.Highlight, {})
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.ControlsGroup, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.H1, {})
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.ControlsGroup, {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.BulletList, {}),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.OrderedList, {})
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.ControlsGroup, {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.AlignLeft, {}),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.AlignCenter, {}),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.AlignJustify, {}),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.AlignRight, {})
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_tiptap__WEBPACK_IMPORTED_MODULE_4__.RichTextEditor.Content, {})
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;