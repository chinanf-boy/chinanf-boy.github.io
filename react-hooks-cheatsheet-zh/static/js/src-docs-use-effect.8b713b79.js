(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/Editor.js":function(e,n,t){"use strict";var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),o=t("./node_modules/react/index.js"),c=t.n(o),r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=t("./node_modules/polished/dist/polished.es.js");"#282a36"===Object("#282a36")&&Object.defineProperty("#282a36","__filemeta",{enumerable:!0,configurable:!0,value:{name:"background",filename:"src/utils/colors.js"}});"#f8f8f2"===Object("#f8f8f2")&&Object.defineProperty("#f8f8f2","__filemeta",{enumerable:!0,configurable:!0,value:{name:"foreground",filename:"src/utils/colors.js"}});var m="#ff5555";m===Object(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/utils/colors.js"}});var l=s.b(.1,"#6272a4");"undefined"!==typeof l&&l&&l===Object(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/utils/colors.js"}});var i=s.a(.05,"#282a36");"undefined"!==typeof i&&i&&i===Object(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"lightGrey",filename:"src/utils/colors.js"}});var u=t("./node_modules/react-live/dist/react-live.es.js");function f(){var e=Object(a.a)(["\n  display: block;\n  padding: ",";\n  background: ",";\n  color: ",";\n  white-space: pre-wrap;\n  text-align: left;\n  font-size: 0.9em;\n  font-family: 'Source Code Pro', monospace;\n"]);return f=function(){return e},e}function d(){var e=Object(a.a)(["\n  position: relative;\n  padding: 0.5rem;\n  background: white;\n  color: black;\n  height: auto;\n  overflow: hidden;\n  ",";\n"]);return d=function(){return e},e}function p(){var e=Object(a.a)(["\n  background: ",";\n  font-family: 'Source Code Pro', monospace;\n  font-size: ",";\n  height: ",";\n  max-height: auto;\n  overflow: auto;\n  ",";\n  * > textarea:focus {\n    outline: none;\n  }\n"]);return p=function(){return e},e}function b(){var e=Object(a.a)(["\n  flex-basis: 50%;\n  width: 50%;\n  max-width: 50%;\n  @media (max-width: 600px) {\n    flex-basis: auto;\n    width: 100%;\n    max-width: 100%;\n  }\n"]);return b=function(){return e},e}function E(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: stretch;\n  align-items: stretch;\n  @media (max-width: 600px) {\n    flex-direction: column;\n  }\n"]);return E=function(){return e},e}function g(){var e=Object(a.a)(["\n  border-radius: ",";\n  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);\n  overflow: hidden;\n  margin-bottom: ",";\n"]);return g=function(){return e},e}var h=r.d.div(g(),s.c(3),s.c(100)),v=r.d.div(E()),j=Object(r.c)(b()),M=r.d.div(p(),i,s.c(14),function(e){return e.autoEditorHeight?"auto":s.c(350)},j),_=r.d.div(d(),j),k=Object(r.d)(u.b)(f(),s.c(8),m,"#f8f8f2"),D={useState:o.useState,useEffect:o.useEffect,useLayoutEffect:o.useLayoutEffect,useMemo:o.useMemo,useReducer:o.useReducer,useRef:o.useRef,useCallback:o.useCallback,useContext:o.useContext,memo:o.memo},T=function(e){var n=e.noInline,t=e.code,a=e.autoEditorHeight;return c.a.createElement(h,null,c.a.createElement(u.d,{code:t,scope:D,noInline:n},c.a.createElement(v,null,c.a.createElement(M,{autoEditorHeight:a},c.a.createElement(u.a,null)),c.a.createElement(_,null,c.a.createElement(u.c,null))),c.a.createElement(k,null)))};n.a=T;T&&T===Object(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Editor",filename:"src/components/Editor.js"}})},"./src/docs/useEffect.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),m=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),l=t("./node_modules/react/index.js"),i=t.n(l),u=t("./node_modules/@mdx-js/tag/dist/index.js"),f=t("./src/components/Editor.js"),d="() => {\n  const [age, setAge] = useState(0)\n  const handleClick = () => setAge(age + 1)\n\n  useEffect(() => {\n    document.title = 'You are ' + age + ' years old!'\n  })\n\n  return <div>\n    <p> Look at the title of the current tab in your browser </p>\n    <button onClick={handleClick}>Update Title!! </button>\n  </div>\n}",p="() => {\n  useEffect(() => {\n    const clicked = () => console.log('window clicked')\n    window.addEventListener('click', clicked)\n\n    // return a clean-up function\n    return () => {\n      window.removeEventListener('click', clicked)\n    }\n  }, [])\n\n  return <div>\n    When you click the window you'll \n    find a message logged to the console\n  </div>\n}",b="() => {\n  // \ud83c\udf5f\n  useEffect(() => {\n    const clicked = () => console.log('window clicked')\n    window.addEventListener('click', clicked)\n\n    return () => {\n      window.removeEventListener('click', clicked)\n    }\n  }, [])\n\n  // \ud83c\udf5f another useEffect hook \n  useEffect(() => {\n    console.log(\"another useEffect call\");\n  })\n\n  return <div>\n    Check your console logs\n  </div>\n}",E="() => {\n  const [randomNumber, setRandomNumber] = useState(0)\n  const [effectLogs, setEffectLogs] = useState([])\n\n  useEffect(\n    () => {\n      setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect fn has been invoked'])\n    },\n    [randomNumber]\n  )\n\n  return (\n    <div>\n      <h1>{randomNumber}</h1>\n      <button\n        onClick={() => {\n          setRandomNumber(Math.random())\n        }}\n      >\n        Generate random number!\n      </button>\n      <div>\n        {effectLogs.map((effect, index) => (\n          <div key={index}>{'\ud83c\udf54'.repeat(index) + effect}</div>\n        ))}\n      </div>\n    </div>\n  )\n}",g="() => {\n  const [randomNumber, setRandomNumber] = useState(0)\n  const [effectLogs, setEffectLogs] = useState([])\n\n  useEffect(\n    () => {\n      setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect fn has been invoked'])\n    },\n    []\n  )\n\n  return (\n    <div>\n      <h1>{randomNumber}</h1>\n      <button\n        onClick={() => {\n          setRandomNumber(Math.random())\n        }}\n      >\n        Generate random number!\n      </button>\n      <div>\n        {effectLogs.map((effect, index) => (\n          <div key={index}>{'\ud83c\udf54'.repeat(index) + effect}</div>\n        ))}\n      </div>\n    </div>\n  )\n}";g===Object(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArrayDepMount",filename:"src/components/examples/useEffect.js"}}),E===Object(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArrayDep",filename:"src/components/examples/useEffect.js"}}),b===Object(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MultipleEffects",filename:"src/components/examples/useEffect.js"}}),p===Object(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EffectCleanup",filename:"src/components/examples/useEffect.js"}}),d===Object(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BasicEffect",filename:"src/components/examples/useEffect.js"}}),t.d(n,"default",function(){return h});var h=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(r.a)(this,Object(s.a)(n).call(this,e))).layout=null,t}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components;Object(a.a)(e,["components"]);return i.a.createElement(u.MDXTag,{name:"wrapper",components:n},i.a.createElement(u.MDXTag,{name:"h1",components:n,props:{id:"useeffect-\ud83e\udd8b"}},"useEffect \ud83e\udd8b"),i.a.createElement(u.MDXTag,{name:"blockquote",components:n},i.a.createElement(u.MDXTag,{name:"p",components:n,parentName:"blockquote"},"\u7b14\u8bb0\uff1a")),i.a.createElement(u.MDXTag,{name:"ul",components:n},i.a.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"useEffect"),"\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u53ef\u80fd\u6709\u526f\u4f5c\u7528\u4ee3\u7801\u3002"),i.a.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect"}},"\u67e5\u770b\u6587\u6863"),"\u3002")),i.a.createElement(u.MDXTag,{name:"blockquote",components:n},i.a.createElement(u.MDXTag,{name:"p",components:n,parentName:"blockquote"},"\u4f5c\u7528\u51fd\u6570\u6307\u7684\u662f\uff0c\u4f20\u9012\u7ed9",i.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useEffect"),"\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff1a\u51fd\u6570\u7c7b\u578b\u3002")),i.a.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"effect-\u57fa\u672c\u4f5c\u7528"}},"Effect \u57fa\u672c\u4f5c\u7528"),i.a.createElement(f.a,{code:d}),i.a.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\u6e05\u7406-effect"}},"\u6e05\u7406 Effect"),i.a.createElement(u.MDXTag,{name:"p",components:n},"\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u8981\u6e05\u7406 Effect \u662f\u5f88\u5e38\u89c1\u3002\u8981\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c",i.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useEffect")," \u51fd\u6570\u9700\u8fd4\u56de\u4e00\u4e2a\u6e05\u9664\u51fd\u6570\u3002\u4e0b\u9762\u662f\u4e00\u4e2a",i.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"addEventListener"),"\u4f8b\u5b50\u3002"),i.a.createElement(f.a,{code:p}),i.a.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\u591a\u91cd\u6548\u679c"}},"\u591a\u91cd\u6548\u679c"),i.a.createElement(u.MDXTag,{name:"p",components:n},"\u591a\u4e2a",i.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useEffect"),"\u8c03\u7528\u53ef\u5728\u7ec4\u4ef6\u51fd\u6570\u4e2d\u53d1\u751f\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),i.a.createElement(f.a,{code:b}),i.a.createElement(u.MDXTag,{name:"blockquote",components:n},i.a.createElement(u.MDXTag,{name:"p",components:n,parentName:"blockquote"},"\u5176\u5b9e ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useEffect"),"\u7684\u8c03\u7528\u662f\u53ef\u4ee5\u8df3\u8fc7\u7684\uff0c\u5373\u4e0d\u4e00\u5b9a\u4f1a\u5728\u6bcf\u4e2a\u6e32\u67d3\u4e0a\u8c03\u7528\u3002\u8fd9\u662f\u901a\u8fc7\u5c06\u7b2c\u4e8c\u4e2a\u6570\u7ec4\u53c2\u6570\uff0c\u4f20\u9012\u7ed9\u4f5c\u7528\u51fd\u6570\u6765\u5b8c\u6210\u7684\u3002")),i.a.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\u8df3\u8fc7-effects\uff08\u6570\u7ec4\u4f9d\u8d56\uff09"}},"\u8df3\u8fc7 Effects\uff08\u6570\u7ec4\u4f9d\u8d56\uff09"),i.a.createElement(u.MDXTag,{name:"p",components:n},"\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c",i.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useEffect"),"\u88ab\u4f20\u9012\u4e86\u5177\u6709\u4e00\u4e2a\u503c\u7684\u6570\u7ec4\uff0c",i.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"[randomNumber]"),"\uff0c\u56e0\u6b64\uff0c\u4f5c\u7528\u51fd\u6570\u5c06\u5728 mount\uff08\u9636\u6bb5\uff09\u4e0a\uff0c",i.a.createElement(u.MDXTag,{name:"strong",components:n,parentName:"p"},"\u548c"),"\u6bcf\u5f53\u751f\u6210\u65b0\u7684\u968f\u673a\u6570",i.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"randomNumber"),"\u65f6\uff0c\u8c03\u7528\u3002"),i.a.createElement(u.MDXTag,{name:"p",components:n},"\u5355\u51fb\u201c\u751f\u6210\u968f\u673a\u6570\u201d\u6309\u94ae\uff0c\u4ee5\u67e5\u770b\u6b64\u5185\u5bb9\u3002"),i.a.createElement(f.a,{code:E}),i.a.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\u8df3\u8fc7\u6548\u679c\uff08\u7a7a\u6570\u7ec4\u4f9d\u8d56\uff09"}},"\u8df3\u8fc7\u6548\u679c\uff08\u7a7a\u6570\u7ec4\u4f9d\u8d56\uff09"),i.a.createElement(u.MDXTag,{name:"p",components:n},"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",i.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useEffect"),"\u88ab\u4f20\u9012\u4e86\u4e00\u4e2a\u7a7a\u6570\u7ec4\uff0c",i.a.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"[]"),"\u3002\u56e0\u6b64\uff0c\u53ea\u5728 mount\uff08\u9636\u6bb5\uff09\uff0c\u8c03\u7528\u4f5c\u7528\u51fd\u6570\u3002"),i.a.createElement(u.MDXTag,{name:"p",components:n},"\u5355\u51fb\u6309\u94ae\uff0c\u60a8\u4f1a\u770b\u5230\uff0c\u5e76\u6ca1\u6709\u8c03\u7528\u4f5c\u7528\u51fd\u6570\u3002"),i.a.createElement(f.a,{code:g}),i.a.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\u8df3\u8fc7\u6548\u679c\uff08\u65e0\u6570\u7ec4\u4f9d\u8d56\uff09"}},"\u8df3\u8fc7\u6548\u679c\uff08\u65e0\u6570\u7ec4\u4f9d\u8d56\uff09"),i.a.createElement(u.MDXTag,{name:"p",components:n},"\u5982\u679c\u6ca1\u6709\u6570\u7ec4\u4f9d\u8d56\u5173\u7cfb\uff0c\u4f5c\u7528\u51fd\u6570\u5c06\u5728\u6bcf\u6b21\u6e32\u67d3\u540e\uff0c\u8fd0\u884c\u3002"),i.a.createElement(u.MDXTag,{name:"pre",components:n},i.a.createElement(u.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"useEffect(() => {\n    console.log('This will be logged after every render!')\n})\n")))}}]),n}(i.a.Component);"undefined"!==typeof h&&h&&h===Object(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/useEffect.mdx"}}),"undefined"!==typeof h&&h&&h===Object(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/useEffect.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-use-effect.81a2667657c494cbd3a8.js.map