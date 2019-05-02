(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/Editor.js":function(e,n,t){"use strict";var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),o=t("./node_modules/react/index.js"),r=t.n(o),l=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=t("./node_modules/polished/dist/polished.es.js");"#282a36"===Object("#282a36")&&Object.defineProperty("#282a36","__filemeta",{enumerable:!0,configurable:!0,value:{name:"background",filename:"src/utils/colors.js"}});"#f8f8f2"===Object("#f8f8f2")&&Object.defineProperty("#f8f8f2","__filemeta",{enumerable:!0,configurable:!0,value:{name:"foreground",filename:"src/utils/colors.js"}});var c="#ff5555";c===Object(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/utils/colors.js"}});var i=s.b(.1,"#6272a4");"undefined"!==typeof i&&i&&i===Object(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/utils/colors.js"}});var m=s.a(.05,"#282a36");"undefined"!==typeof m&&m&&m===Object(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"lightGrey",filename:"src/utils/colors.js"}});var u=t("./node_modules/react-live/dist/react-live.es.js");function d(){var e=Object(a.a)(["\n  display: block;\n  padding: ",";\n  background: ",";\n  color: ",";\n  white-space: pre-wrap;\n  text-align: left;\n  font-size: 0.9em;\n  font-family: 'Source Code Pro', monospace;\n"]);return d=function(){return e},e}function p(){var e=Object(a.a)(["\n  position: relative;\n  padding: 0.5rem;\n  background: white;\n  color: black;\n  height: auto;\n  overflow: hidden;\n  ",";\n"]);return p=function(){return e},e}function f(){var e=Object(a.a)(["\n  background: ",";\n  font-family: 'Source Code Pro', monospace;\n  font-size: ",";\n  height: ",";\n  max-height: auto;\n  overflow: auto;\n  ",";\n  * > textarea:focus {\n    outline: none;\n  }\n"]);return f=function(){return e},e}function b(){var e=Object(a.a)(["\n  flex-basis: 50%;\n  width: 50%;\n  max-width: 50%;\n  @media (max-width: 600px) {\n    flex-basis: auto;\n    width: 100%;\n    max-width: 100%;\n  }\n"]);return b=function(){return e},e}function g(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: stretch;\n  align-items: stretch;\n  @media (max-width: 600px) {\n    flex-direction: column;\n  }\n"]);return g=function(){return e},e}function h(){var e=Object(a.a)(["\n  border-radius: ",";\n  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);\n  overflow: hidden;\n  margin-bottom: ",";\n"]);return h=function(){return e},e}var j=l.d.div(h(),s.c(3),s.c(100)),v=l.d.div(g()),E=Object(l.c)(b()),x=l.d.div(f(),m,s.c(14),function(e){return e.autoEditorHeight?"auto":s.c(350)},E),y=l.d.div(p(),E),_=Object(l.d)(u.b)(d(),s.c(8),c,"#f8f8f2"),O={useState:o.useState,useEffect:o.useEffect,useLayoutEffect:o.useLayoutEffect,useMemo:o.useMemo,useReducer:o.useReducer,useRef:o.useRef,useCallback:o.useCallback,useContext:o.useContext,memo:o.memo},D=function(e){var n=e.noInline,t=e.code,a=e.autoEditorHeight;return r.a.createElement(j,null,r.a.createElement(u.d,{code:t,scope:O,noInline:n},r.a.createElement(v,null,r.a.createElement(x,{autoEditorHeight:a},r.a.createElement(u.a,null)),r.a.createElement(y,null,r.a.createElement(u.c,null))),r.a.createElement(_,null)))};n.a=D;D&&D===Object(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Editor",filename:"src/components/Editor.js"}})},"./src/docs/useRef.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),i=t("./node_modules/react/index.js"),m=t.n(i),u=t("./node_modules/@mdx-js/tag/dist/index.js"),d=(t("./src/components/Editor.js"),'() => {\n  const textAreaEl = useRef(null);\n  const handleBtnClick = () => {\n    textAreaEl.current.value =\n      "The is the story of your life. You are an human being, and you\'re on a website about React Hooks";\n    textAreaEl.current.focus();\n  };\n  return (\n    <section style={{ textAlign: "center" }}>\n      <div>\n        <button onClick={handleBtnClick}>Focus and Populate Text Field</button>\n      </div>\n      <label\n        htmlFor="story"\n        style={{\n          display: "block",\n          background: "olive",\n          margin: "1em",\n          padding: "1em"\n        }}\n      >\n        The input box below will be focused and populated with some text\n        (imperatively) upon clicking the button above.\n      </label>\n      <textarea ref={textAreaEl} id="story" rows="5" cols="33" />\n    </section>\n  );\n};'),p='() => {\n    const textAreaEl = useRef(null);\n    const stringVal = useRef("This is a string saved via the ref object --- ")\n    const handleBtnClick = () => {\n      textAreaEl.current.value =\n      stringVal.current + "The is the story of your life. You are an human being, and you\'re on a website about React Hooks";\n      textAreaEl.current.focus();\n    };\n    return (\n      <section style={{ textAlign: "center" }}>\n        <div>\n          <button onClick={handleBtnClick}>Focus and Populate Text Field</button>\n        </div>\n        <label\n          htmlFor="story"\n          style={{\n            display: "block",\n            background: "olive",\n            margin: "1em",\n            padding: "1em"\n          }}\n        >\n          Prepare to see text from the ref object here. Click button above.\n        </label>\n        <textarea ref={textAreaEl} id="story" rows="5" cols="33" />\n      </section>\n    );\n  };';p===Object(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HoldStringVal",filename:"src/components/examples/useRef.js"}}),d===Object(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AccessDOM",filename:"src/components/examples/useRef.js"}}),t.d(n,"default",function(){return f});var f=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).layout=null,t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components;Object(a.a)(e,["components"]);return m.a.createElement(u.MDXTag,{name:"wrapper",components:n},m.a.createElement(u.MDXTag,{name:"h1",components:n,props:{id:"useref-"}},"useRef \ud83c\udf02"),m.a.createElement(u.MDXTag,{name:"blockquote",components:n},m.a.createElement(u.MDXTag,{name:"p",components:n,parentName:"blockquote"},"\u7b14\u8bb0")),m.a.createElement(u.MDXTag,{name:"ul",components:n},m.a.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},"\u8fd4\u56de\u4e00\u4e2a",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ref"),"\u5bf9\u8c61\u3002"),m.a.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},"\u503c\u53ef\u4ee5\u4ece\u8bbf\u95ee\u5bf9\u8c61\u7684",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".current"),"\u5c5e\u6027\u4e2d\u8bbf\u95ee\u3002"),m.a.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".current"),"\u5c5e\u6027\u53ef\u4ee5\u521d\u59cb\u5316\uff0c\u4e3a\u521d\u59cb\u503c\uff0c\u4f8b\u5982",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"useRef(initialValue)")),m.a.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},"\u8be5\u5bf9\u8c61\u5728\u7ec4\u4ef6\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\uff0c\u4fdd\u6301\u4e0d\u53d8\u3002"),m.a.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(u.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#useref"}},"\u67e5\u770b\u6587\u6863"),"\u3002")),m.a.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\u8bbf\u95ee-dom"}},"\u8bbf\u95ee DOM"),m.a.createElement(u.MDXTag,{name:"p",components:n},m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Editor code={AccessDOM} />")),m.a.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\u50cf\u53d8\u91cf\u4e00\u6837\u7684\u5b9e\u4f8b\uff08\u901a\u7528\u5bb9\u5668\uff09"}},"\u50cf\u53d8\u91cf\u4e00\u6837\u7684\u5b9e\u4f8b\uff08\u901a\u7528\u5bb9\u5668\uff09"),m.a.createElement(u.MDXTag,{name:"p",components:n},"\u9664\u4e86\uff0c\u6301\u6709 DOM refs \u4e4b\u5916\uff0c",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ref"),"\u5bf9\u8c61\u53ef\u4ee5\u6301\u6709\u4efb\u4f55\u503c\u3002"),m.a.createElement(u.MDXTag,{name:"p",components:n},m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Editor code={HoldStringVal} />")),m.a.createElement(u.MDXTag,{name:"p",components:n},"\u60a8\u53ef\u4ee5\u66f4\u6574\u6d01\u5730\u8fbe\u5230\u540c\u4e00\u6548\u679c\uff0c\u5b58\u50a8\u4ece\u4e00\u4e2a",m.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"setInterval"),"\uff0c\u8fd4\u56de\u7684\u503c\u3002"),m.a.createElement(u.MDXTag,{name:"pre",components:n},m.a.createElement(u.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"function TimerWithRefID() {\n    const setIntervalRef = useRef()\n\n    useEffect(() => {\n        const intervalID = setInterval(() => {\n            // \u6bcf 100ms \u5b8c\u6210\u4e00\u4e9b\u4e1c\u897f\n        }, 100)\n\n        // \u8fd9\u5c31\u662f\uff0c interval ID \u88ab\u4fdd\u5b58\u5728 ref \u5bf9\u8c61\u7684\u4f4d\u7f6e\u3002\n        setIntervalRef.current = intervalID\n        return () => {\n            clearInterval(setIntervalRef.current)\n        }\n    })\n}\n")))}}]),n}(m.a.Component);"undefined"!==typeof f&&f&&f===Object(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/useRef.mdx"}}),"undefined"!==typeof f&&f&&f===Object(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/useRef.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-use-ref.81a2667657c494cbd3a8.js.map