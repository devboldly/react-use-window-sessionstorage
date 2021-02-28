(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{aQnU:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n("Fcif"),l=n("+I+c"),r=(n("mXGw"),n("/FXl")),i=n("TjRS"),b=n("HO76"),o=(n("aD51"),{});void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/useSessionStorageObject.mdx"}});var s={_frontmatter:o},d=i.a;function c(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)(d,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"useSessionStorageObject"),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"This hook gets and sets an ",Object(r.b)("inlineCode",{parentName:"p"},"Object")," in ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"sessionStorage"),". This includes arrays."),Object(r.b)("p",null,"Uses ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"},Object(r.b)("inlineCode",{parentName:"a"},"JSON.stringify()")),"\nand ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"},Object(r.b)("inlineCode",{parentName:"a"},"JSON.parse()"))," for string encoding, so make sure your object is compatible with that interface. For objects that ",Object(r.b)("inlineCode",{parentName:"p"},"JSON.stringify()")," can't handle, provide your own encoding via ",Object(r.b)("a",{parentName:"p",href:"/react-use-window-sessionstorage/useSessionStorageItem"},"useSessionStorageItem"),"."),Object(r.b)("p",null,"Features synchronization across hooks sharing the same key name."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { useSessionStorageObject } from 'react-use-window-sessionstorage';\n")),Object(r.b)("p",null,"In your function component:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"const [value, setValue] = useSessionStorageObject('myObj', { a: 'hello', b: 123 });\n")),Object(r.b)("p",null,"The hook takes a key name and an optional default value argument. The default value will be immediately written to sessionStorage and returned if no value is present already. Uses ",Object(r.b)("inlineCode",{parentName:"p"},"null")," when no default value is provided."),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"value")," and ",Object(r.b)("inlineCode",{parentName:"p"},"setValue")," to read and write the value."),Object(r.b)("p",null,"Because sessionStorage accepts strings only, the value is encoded using\n",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"},Object(r.b)("inlineCode",{parentName:"a"},"JSON.stringify()")),"\nand decoded using ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"},Object(r.b)("inlineCode",{parentName:"a"},"JSON.parse()")),". Make sure your object is compatible with that interface."),Object(r.b)("h3",{id:"additional-features"},"Additional Features"),Object(r.b)("p",null,"The hook provides additional features in its return array, should you be interested:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"const [value, setValue, loading, available, reset] = useSessionStorageObject('myObj', { a: 'hello', b: 123 });\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"loading")," value of ",Object(r.b)("inlineCode",{parentName:"li"},"true")," indicates that the value is being loaded from sessionStorage."),Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("inlineCode",{parentName:"li"},"available")," value of ",Object(r.b)("inlineCode",{parentName:"li"},"true")," indicates that ",Object(r.b)("inlineCode",{parentName:"li"},"sessionStorage")," is supported and available for use. "),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"reset()")," function sets the value back to the provided default, or ",Object(r.b)("inlineCode",{parentName:"li"},"null")," if none was given.")),Object(r.b)("h2",{id:"signature"},"Signature"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"useSessionStorageObject(keyName: string, defaultValue?: Object | null) => [Object | null, (value: Object | null) => void, boolean, () => void, () => void]")),Object(r.b)("h3",{id:"props"},"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Prop"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"keyName"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Required.")," Key name to use in sessionStorage.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"defaultValue"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Object")," ","|"," ",Object(r.b)("inlineCode",{parentName:"td"},"null")),Object(r.b)("td",{parentName:"tr",align:null},"Optional. Provide a default ",Object(r.b)("inlineCode",{parentName:"td"},"Object")," value when the key's value is not found in sessionStorage. Will be immediately written to sessionStorage if not present. Use ",Object(r.b)("inlineCode",{parentName:"td"},"null")," for no default.")))),Object(r.b)("h3",{id:"return"},"Return"),Object(r.b)("p",null,"The hook returns an array containing:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Index"),Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"0"),Object(r.b)("td",{parentName:"tr",align:null},"value"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Object")," ","|"," ",Object(r.b)("inlineCode",{parentName:"td"},"null")),Object(r.b)("td",{parentName:"tr",align:null},"The ",Object(r.b)("inlineCode",{parentName:"td"},"Object")," value from sessionStorage, when ",Object(r.b)("inlineCode",{parentName:"td"},"loading")," is ",Object(r.b)("inlineCode",{parentName:"td"},"false"),". Will be the default value (or ",Object(r.b)("inlineCode",{parentName:"td"},"null")," if none provided) while loading is ",Object(r.b)("inlineCode",{parentName:"td"},"true"),". If ",Object(r.b)("inlineCode",{parentName:"td"},"null")," when not loading, the key was not found in sessionStorage.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"1"),Object(r.b)("td",{parentName:"tr",align:null},"setValue"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"(value: Object")," ","|"," ",Object(r.b)("inlineCode",{parentName:"td"},"null) => void")),Object(r.b)("td",{parentName:"tr",align:null},"Sets the value in sessionStorage. Provide ",Object(r.b)("inlineCode",{parentName:"td"},"null")," to set it back to the default value. Providing ",Object(r.b)("inlineCode",{parentName:"td"},"null")," will delete the key from sessionStorage if the default value is ",Object(r.b)("inlineCode",{parentName:"td"},"null"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"2"),Object(r.b)("td",{parentName:"tr",align:null},"loading"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"true")," while the value loads from sessionStorage, ",Object(r.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"3"),Object(r.b)("td",{parentName:"tr",align:null},"available"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"true")," if sessionStorage is supported and available for use, ",Object(r.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"4"),Object(r.b)("td",{parentName:"tr",align:null},"reset"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"() => void")),Object(r.b)("td",{parentName:"tr",align:null},"Reset the value to the default.")))),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("div",{style:{border:"solid 2px #67788a",padding:"20px"}},Object(r.b)(b.a,{mdxType:"UseSessionStorageObjectExample"})),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport { useSessionStorageObject } from 'react-use-window-sessionstorage';\n\nexport function UseSessionStorageObjectExample() {\n  const defaultValue = { first: 'Ron', last: 'Burgundy' };\n  const [enteredFirstName, setEnteredFirstName] = React.useState(defaultValue.first);\n  const [enteredLastName, setEnteredLastName] = React.useState(defaultValue.last);\n  const enteredObj = { first: enteredFirstName, last: enteredLastName };\n  const [value, setValue, loading, available, reset] = useSessionStorageObject('objValue', defaultValue);\n  const [value2, setValue2, loading2] = useSessionStorageObject('objValue', defaultValue);\n\n  return (\n    <div>\n      {!loading && (\n        <div>\n          <div>\n            Key \"objValue\": {'{'} first:\n            <input\n              type=\"text\"\n              value={enteredFirstName}\n              onChange={e => setEnteredFirstName(e.target.value)}\n              onKeyPress={e => e.key === 'Enter' && setValue(enteredObj)}\n            />\n            , last:\n            <input\n              type=\"text\"\n              value={enteredLastName}\n              onChange={e => setEnteredLastName(e.target.value)}\n              onKeyPress={e => e.key === 'Enter' && setValue(enteredObj)}\n            />\n            {' } '}\n            <button onClick={() => setValue(enteredObj)}>Set</button>\n          </div>\n          <div>\n            <strong>Stored value:</strong> {JSON.stringify(value)}\n          </div>\n        </div>\n      )}\n      <div>\n        <button onClick={() => reset()}>Reset \"objValue\" to default</button>\n      </div>\n      <hr />\n      {!loading2 && <div>Another \"objValue\" hook (different hook, will synchronize): {JSON.stringify(value2)}</div>}\n    </div>\n  );\n}\n")))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/useSessionStorageObject.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-session-storage-object-mdx-2366749f562d08de27ae.js.map