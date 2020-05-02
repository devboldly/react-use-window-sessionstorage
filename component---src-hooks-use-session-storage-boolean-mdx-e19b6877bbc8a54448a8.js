(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0B5O":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return d}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt");var a=n("/FXl"),l=n("TjRS"),o=n("/QZ3");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/useSessionStorageBoolean.mdx"}});var b={_frontmatter:i},s=l.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(s,r({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"useSessionStorageBoolean"),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This hook gets and sets a ",Object(a.b)("inlineCode",{parentName:"p"},"boolean")," in ",Object(a.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"}),"sessionStorage"),". "),Object(a.b)("p",null,"Features synchronization across hooks sharing the same key name."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import { useSessionStorageBoolean } from 'react-use-window-sessionstorage';\n")),Object(a.b)("p",null,"In your function component:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"const [value, setValue] = useSessionStorageBoolean('swordEquipped', true);\n")),Object(a.b)("p",null,"The hook takes a key name and an optional default value argument. The default value will be immediately written to sessionStorage and returned if no value is present already. Uses ",Object(a.b)("inlineCode",{parentName:"p"},"null")," when no default value is provided."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"value")," and ",Object(a.b)("inlineCode",{parentName:"p"},"setValue")," to read and write the value."),Object(a.b)("p",null,"Because sessionStorage accepts strings only, the value is encoded using\n",Object(a.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"}),Object(a.b)("inlineCode",{parentName:"a"},"JSON.stringify()")),"\nand decoded using ",Object(a.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"}),Object(a.b)("inlineCode",{parentName:"a"},"JSON.parse()")),"."),Object(a.b)("h3",{id:"additional-features"},"Additional Features"),Object(a.b)("p",null,"The hook provides additional features in its return array, should you be interested:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"const [value, setValue, loading, available, reset, restore] = useSessionStorageBoolean('swordEquipped', true);\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("inlineCode",{parentName:"li"},"loading")," value of ",Object(a.b)("inlineCode",{parentName:"li"},"true")," indicates that the value is being loaded from sessionStorage."),Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("inlineCode",{parentName:"li"},"available")," value of ",Object(a.b)("inlineCode",{parentName:"li"},"true")," indicates that ",Object(a.b)("inlineCode",{parentName:"li"},"sessionStorage")," is supported and available for use. "),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"reset()")," function sets the value back to the provided default, or ",Object(a.b)("inlineCode",{parentName:"li"},"null")," if none was given."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"restore()")," function retrieves the latest value from sessionStorage. Use this if the sessionStorage value changes outside of this hook and you need to restore it to the latest.")),Object(a.b)("h2",{id:"signature"},"Signature"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useSessionStorageBoolean(keyName: string, defaultValue?: boolean | null) => [boolean | null, (value: boolean | null) => void, boolean, () => void, () => void]")),Object(a.b)("h3",{id:"props"},"Props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Prop"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"keyName"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"string")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Required.")," Key name to use in sessionStorage.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"defaultValue"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",Object(a.b)("inlineCode",{parentName:"td"},"null")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Optional. Provide a default ",Object(a.b)("inlineCode",{parentName:"td"},"boolean")," value when the key's value is not found in sessionStorage. Will be immediately written to sessionStorage if not present. Use ",Object(a.b)("inlineCode",{parentName:"td"},"null")," for no default.")))),Object(a.b)("h3",{id:"return"},"Return"),Object(a.b)("p",null,"The hook returns an array containing:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Index"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"0"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"value"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",Object(a.b)("inlineCode",{parentName:"td"},"null")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The ",Object(a.b)("inlineCode",{parentName:"td"},"boolean")," value from sessionStorage, when ",Object(a.b)("inlineCode",{parentName:"td"},"loading")," is ",Object(a.b)("inlineCode",{parentName:"td"},"false"),". Will be the default value (or ",Object(a.b)("inlineCode",{parentName:"td"},"null")," if none provided) while loading is ",Object(a.b)("inlineCode",{parentName:"td"},"true"),". If ",Object(a.b)("inlineCode",{parentName:"td"},"null")," when not loading, the key was not found in sessionStorage.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"1"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"setValue"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"(value: boolean")," ","|"," ",Object(a.b)("inlineCode",{parentName:"td"},"null) => void")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the value in sessionStorage. Provide ",Object(a.b)("inlineCode",{parentName:"td"},"null")," to set it back to the default value. Providing ",Object(a.b)("inlineCode",{parentName:"td"},"null")," will delete the key from sessionStorage if the default value is ",Object(a.b)("inlineCode",{parentName:"td"},"null"),".")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"2"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"loading"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"boolean")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"true")," while the value loads from sessionStorage, ",Object(a.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"3"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"available"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"boolean")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"true")," if sessionStorage is supported and available for use, ",Object(a.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"4"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"reset"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"() => void")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Reset the value to the default.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"5"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"restore"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"() => void")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Retrieve the latest value from sessionStorage. Use this if the sessionStorage value changes outside of this hook and you need to restore it to the latest.")))),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("div",{style:{border:"solid 2px #67788a",padding:"20px"}},Object(a.b)(o.a,{mdxType:"UseSessionStorageBooleanExample"})),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { useSessionStorageBoolean } from 'react-use-window-sessionstorage';\n\nexport function UseSessionStorageBooleanExample() {\n  const defaultValue = true;\n  const [value, setValue, loading, available, reset] = useSessionStorageBoolean('boolValue', defaultValue);\n  const [value2, setValue2, loading2] = useSessionStorageBoolean('boolValue', defaultValue);\n\n  return (\n    <div>\n      {!loading && (\n        <div>\n          <div>\n            Key \"boolValue\": <button onClick={() => setValue(!value)}>Toggle</button>\n          </div>\n          <div>\n            <strong>Stored value:</strong> {value + ''}\n          </div>\n        </div>\n      )}\n      <div>\n        <button onClick={() => reset()}>Reset \"boolValue\" to default</button>\n      </div>\n      <hr />\n      {!loading2 && <div>Another \"boolValue\" hook (different hook, will synchronize): {value2 + ''}</div>}\n    </div>\n  );\n}\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/useSessionStorageBoolean.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-session-storage-boolean-mdx-e19b6877bbc8a54448a8.js.map