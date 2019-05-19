(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/components/Editor.js":function(e,n,t){"use strict";var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),r=t("./node_modules/react/index.js"),o=t.n(r),i=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=t("./node_modules/polished/dist/polished.es.js");"#282a36"===Object("#282a36")&&Object.defineProperty("#282a36","__filemeta",{enumerable:!0,configurable:!0,value:{name:"background",filename:"src/utils/colors.js"}});"#f8f8f2"===Object("#f8f8f2")&&Object.defineProperty("#f8f8f2","__filemeta",{enumerable:!0,configurable:!0,value:{name:"foreground",filename:"src/utils/colors.js"}});var s="#ff5555";s===Object(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/utils/colors.js"}});var l=c.b(.1,"#6272a4");"undefined"!==typeof l&&l&&l===Object(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/utils/colors.js"}});var m=c.a(.05,"#282a36");"undefined"!==typeof m&&m&&m===Object(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"lightGrey",filename:"src/utils/colors.js"}});var u=t("./node_modules/react-live/dist/react-live.es.js");function d(){var e=Object(a.a)(["\n  display: block;\n  padding: ",";\n  background: ",";\n  color: ",";\n  white-space: pre-wrap;\n  text-align: left;\n  font-size: 0.9em;\n  font-family: 'Source Code Pro', monospace;\n"]);return d=function(){return e},e}function p(){var e=Object(a.a)(["\n  position: relative;\n  padding: 0.5rem;\n  background: white;\n  color: black;\n  height: auto;\n  overflow: hidden;\n  ",";\n"]);return p=function(){return e},e}function b(){var e=Object(a.a)(["\n  background: ",";\n  font-family: 'Source Code Pro', monospace;\n  font-size: ",";\n  height: ",";\n  max-height: auto;\n  overflow: auto;\n  ",";\n  * > textarea:focus {\n    outline: none;\n  }\n"]);return b=function(){return e},e}function f(){var e=Object(a.a)(["\n  flex-basis: 50%;\n  width: 50%;\n  max-width: 50%;\n  @media (max-width: 600px) {\n    flex-basis: auto;\n    width: 100%;\n    max-width: 100%;\n  }\n"]);return f=function(){return e},e}function h(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: stretch;\n  align-items: stretch;\n  @media (max-width: 600px) {\n    flex-direction: column;\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(a.a)(["\n  border-radius: ",";\n  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);\n  overflow: hidden;\n  margin-bottom: ",";\n"]);return g=function(){return e},e}var j=i.d.div(g(),c.c(3),c.c(100)),E=i.d.div(h()),w=Object(i.c)(f()),v=i.d.div(b(),m,c.c(14),function(e){return e.autoEditorHeight?"auto":c.c(350)},w),M=i.d.div(p(),w),D=Object(i.d)(u.b)(d(),c.c(8),s,"#f8f8f2"),_={useState:r.useState,useEffect:r.useEffect,useLayoutEffect:r.useLayoutEffect,useMemo:r.useMemo,useReducer:r.useReducer,useRef:r.useRef,useCallback:r.useCallback,useContext:r.useContext,memo:r.memo},C=function(e){var n=e.noInline,t=e.code,a=e.autoEditorHeight;return o.a.createElement(j,null,o.a.createElement(u.d,{code:t,scope:_,noInline:n},o.a.createElement(E,null,o.a.createElement(v,{autoEditorHeight:a},o.a.createElement(u.a,null)),o.a.createElement(M,null,o.a.createElement(u.c,null))),o.a.createElement(D,null)))};n.a=C;C&&C===Object(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Editor",filename:"src/components/Editor.js"}})},"./src/docs/useReducer.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),l=t("./node_modules/react/index.js"),m=t.n(l),u=t("./node_modules/@mdx-js/tag/dist/index.js"),d=t("./src/components/Editor.js"),p="const initialState = { width: 15 }\nconst reducer = (state, action) => {\n  switch (action) {\n    case 'plus':\n      return { width: state.width + 15 }\n    case 'minus':\n      return { width: Math.max(state.width - 15, 2) }\n    default:\n      throw new Error(\"what's going on?\" )\n  }\n}\n\nconst Bar = () => {\n  const [state, dispatch] = useReducer(reducer, initialState)\n  return <>\n    <div style={{ background: 'teal', height: '30px', width: state.width }}></div>\n    <div style={{marginTop: '3rem'}}>\n        <button onClick={() => dispatch('plus')}>Increase bar size</button>\n        <button onClick={() => dispatch('minus')}>Decrease bar size</button>\n    </div>\n    </>\n}\nrender(Bar)",b="\nconst initializeState = () => ({\n  width: 100\n})\n// \u2705 note how the value returned from the fn above overrides initialState below: \nconst initialState = { width: 15 }\nconst reducer = (state, action) => {\n  switch (action) {\n    case 'plus':\n      return { width: state.width + 15 }\n    case 'minus':\n      return { width: Math.max(state.width - 15, 2) }\n    default:\n      throw new Error(\"what's going on?\" )\n  }\n}\n\nconst Bar = () => {\n  const [state, dispatch] = useReducer(reducer, initialState, initializeState)\n  return <>\n    <div style={{ background: 'teal', height: '30px', width: state.width }}></div>\n    <div style={{marginTop: '3rem'}}>\n        <button onClick={() => dispatch('plus')}>Increase bar size</button>\n        <button onClick={() => dispatch('minus')}>Decrease bar size</button>\n    </div>\n    </>\n}\nrender(Bar)",f="\nconst initialState = { width: 15 }\nconst reducer = (state, newState) => ({\n  ...state,\n  width: newState.width\n})\n\nconst Bar = () => {\n  const [state, setState] = useReducer(reducer, initialState)\n  return <>\n    <div style={{ background: 'teal', height: '30px', width: state.width }}></div>\n    <div style={{marginTop: '3rem'}}>\n        <button onClick={() => setState({width: 100})}>Increase bar size</button>\n        <button onClick={() => setState({width: 3})}>Decrease bar size</button>\n    </div>\n    </>\n}\nrender(Bar)";f===Object(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ImitateSetState",filename:"src/components/examples/useReducer.js"}}),b===Object(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"InitLazy",filename:"src/components/examples/useReducer.js"}}),p===Object(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BasicExample",filename:"src/components/examples/useReducer.js"}}),t.d(n,"default",function(){return h});var h=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).layout=null,t}return Object(s.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components;Object(a.a)(e,["components"]);return m.a.createElement(u.MDXTag,{name:"wrapper",components:n},m.a.createElement(u.MDXTag,{name:"h1",components:n,props:{id:"usereducer-\ud83e\udd96"}},"useReducer \ud83e\udd96"),m.a.createElement(u.MDXTag,{name:"blockquote",components:n},m.a.createElement(u.MDXTag,{name:"p",components:n,parentName:"blockquote"},"\u7b14\u8bb0\uff1a")),m.a.createElement(u.MDXTag,{name:"ul",components:n},m.a.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"useReducer")," \u53ef\u4ee5\u7528\u4f5c ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"useState")," \u7684\u66ff\u4ee3\u65b9\u6cd5\u3002"),m.a.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},"\u9002\u7528\u573a\u666f\uff1a",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"state")," \u903b\u8f91\u8f83\u590d\u6742\u4e14\u5305\u542b\u591a\u4e2a\u5b50\u503c\uff0c\u6216\u8005\u4e0b\u4e00\u4e2a ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"state")," \u4f9d\u8d56\u4e8e\u4e4b\u524d\u7684 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"state")," \u7b49"),m.a.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},"\u6839\u636e\u60a8\u7684\u7528\u4f8b\uff0c\u60a8\u53ef\u80fd\u4f1a\u53d1\u73b0 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"useReducer")," \u975e\u5e38\u597d\u6d4b\u8bd5"),m.a.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(u.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer"}},"\u67e5\u770b\u6587\u6863"))),m.a.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\u57fa\u672c\u7528\u6cd5"}},"\u57fa\u672c\u7528\u6cd5"),m.a.createElement(u.MDXTag,{name:"p",components:n},"\u4e0e",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useState"),"\u4e0d\u540c\uff0c",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useReducer"),"\u8c03\u7528\u662f\u4e00\u4e2a",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"reducer"),"\u548c",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"initialState"),"\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002\u8fd9\u4e2a",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useReducer"),"\u8c03\u7528\u8fd4\u56de State \u5c5e\u6027\u548c",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dispatch"),"\u529f\u80fd\u3002"),m.a.createElement(d.a,{noInline:!0,code:p}),m.a.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\u60f0\u6027\u521d\u59cb\u5316\u72b6\u6001"}},"\u60f0\u6027\u521d\u59cb\u5316\u72b6\u6001"),m.a.createElement(u.MDXTag,{name:"p",components:n},m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useReducer"),"\u6709\u7b2c\u4e09\u4e2a\u53c2\u6570\uff0c\u662f\u4e2a\u51fd\u6570\u3002\u53ef\u4ee5\u7528\u6765\u521d\u59cb\u5316\u72b6\u6001\uff0c\u5e76\u4e14\u4ece\u8be5\u51fd\u6570\u8fd4\u56de\u7684\u4efb\u4f55\u5185\u5bb9\uff0c\u90fd\u5c06\u4f5c\u4e3a\u72b6\u6001\u5bf9\u8c61\u3002\u6b64\u51fd\u6570\u7684\u8c03\u7528\u53ef\u7528",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"initialState"),"\u4f5c\u4e3a\u53c2\u6570 \u2014\u2014 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useReducer"),"\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002"),m.a.createElement(d.a,{noInline:!0,code:b}),m.a.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\u6a21\u4effthissetstate\u7684\u884c\u4e3a"}},"\u6a21\u4eff",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"this.setState"),"\u7684\u884c\u4e3a"),m.a.createElement(u.MDXTag,{name:"p",components:n},m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useReducer"),"\u4f7f\u7528\u4e00\u4e2a",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"reducer"),"\uff0c\u8fd9\u4e0d\u662f redux \u4e25\u683c\u7684\u8bed\u6cd5\uff0c\u4f8b\u5982\u4f20\u9012\u7ed9 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"reducer")," \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"action"),"\u4e0d\u5fc5\u6709",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"type"),"\u5c5e\u6027\u3002\u8fd9\u79cd\u5bbd\u677e\u6761\u4ef6\uff0c\u80fd\u505a\u4e9b\u6709\u8da3\u7684\u64cd\u4f5c\uff0c\u4f8b\u5982\uff0c\u91cd\u547d\u540d\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5e76\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),m.a.createElement(d.a,{noInline:!0,code:f}))}}]),n}(m.a.Component);"undefined"!==typeof h&&h&&h===Object(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/useReducer.mdx"}}),"undefined"!==typeof h&&h&&h===Object(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/useReducer.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-use-reducer.81a2667657c494cbd3a8.js.map