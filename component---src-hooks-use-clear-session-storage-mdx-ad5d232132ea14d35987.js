(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{wrhA:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return i})),a.d(n,"default",(function(){return u}));var t=a("Fcif"),o=a("+I+c"),s=(a("mXGw"),a("/FXl")),l=a("TjRS"),r=a("wcmV"),i=(a("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/useClearSessionStorage.mdx"}});var c={_frontmatter:i},b=l.a;function u(e){var n=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)(b,Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",null,"useClearSessionStorage"),Object(s.b)("h2",{id:"description"},"Description"),Object(s.b)("p",null,"This hook calls ",Object(s.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"sessionStorage.clear()")," to clear all items from ",Object(s.b)("inlineCode",{parentName:"p"},"sessionStorage"),". "),Object(s.b)("p",null,"All hooks will be reset back to their default values, or to ",Object(s.b)("inlineCode",{parentName:"p"},"null")," if none was provided."),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"import { useClearSessionStorage } from 'react-use-window-sessionstorage';\n")),Object(s.b)("p",null,"In your function component:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"const clearSessionStorage = useClearSessionStorage();\n")),Object(s.b)("p",null,"Call ",Object(s.b)("inlineCode",{parentName:"p"},"clearSessionStorage()")," to clear sessionStorage."),Object(s.b)("h2",{id:"signature"},"Signature"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"useClearSessionStorage() => (() => void)")),Object(s.b)("h3",{id:"props"},"Props"),Object(s.b)("p",null,"The hook takes no props."),Object(s.b)("h3",{id:"return"},"Return"),Object(s.b)("p",null,"The hook returns a function, ",Object(s.b)("inlineCode",{parentName:"p"},"clearSessionStorage"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"clearSessionStorage() => void\n")),Object(s.b)("p",null,"Calling this function clears sessionStorage and synchronizes all hooks."),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)("p",null,"In the following example, four numbers are defaulted to ",Object(s.b)("inlineCode",{parentName:"p"},"0")," and can be set to randomly generated values. The fifth value has no default. Calling ",Object(s.b)("inlineCode",{parentName:"p"},"clearSessionStorage()")," will clear\nsessionStorage using ",Object(s.b)("inlineCode",{parentName:"p"},"sessionStorage.clear()")," and synchronize all hooks."),Object(s.b)("div",{style:{border:"solid 2px #67788a",padding:"20px"}},Object(s.b)(r.a,{mdxType:"UseClearExample"})),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport { useClearSessionStorage, useSessionStorageNumber } from 'react-use-window-sessionstorage';\n\nexport function UseClearExample() {\n  const [val1, setVal1] = useSessionStorageNumber('val1', 0);\n  const [val2, setVal2] = useSessionStorageNumber('val2', 0);\n  const [val3, setVal3] = useSessionStorageNumber('val3', 0);\n  const [val4, setVal4] = useSessionStorageNumber('val4', 0);\n  const [val5, setVal5] = useSessionStorageNumber('val5');\n  const clearSessionStorage = useClearSessionStorage();\n\n  return (\n    <div>\n      <div>\n        <div>\n          <strong>Stored values:</strong>\n          <ul>\n            <li>val1: {val1}</li>\n            <li>val2: {val2}</li>\n            <li>val3: {val3}</li>\n            <li>val4: {val4}</li>\n            <li>val5 (no default): {val5}</li>\n          </ul>\n        </div>\n      </div>\n      <div>\n        <button\n          onClick={() => {\n            setVal1(Math.random());\n            setVal2(Math.random());\n            setVal3(Math.random());\n            setVal4(Math.random());\n            setVal5(Math.random());\n          }}\n        >\n          Generate Random Values\n        </button>\n      </div>\n      <div>\n        <button onClick={() => clearSessionStorage()}>Clear</button>\n      </div>\n    </div>\n  );\n}\n")))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/useClearSessionStorage.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-clear-session-storage-mdx-ad5d232132ea14d35987.js.map