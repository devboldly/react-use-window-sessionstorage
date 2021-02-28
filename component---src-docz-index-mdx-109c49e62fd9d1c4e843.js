(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"KZ+V":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return g}));var n=a("Fcif"),s=a("+I+c"),o=(a("mXGw"),a("/FXl")),r=a("TjRS"),i=a("aN4c"),l=a("Vkpr"),b=a.n(l),c=a("isvF"),u=a.n(c),p=(a("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/__docz__/index.mdx"}});var m={_frontmatter:p},d=r.a;function g(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{style:{display:"flex",alignItems:"center"}},Object(o.b)("div",null,Object(o.b)("h1",null,"React Use Window.sessionStorage")),Object(o.b)("div",null,Object(o.b)("a",{href:"https://github.com/justinmahar/react-use-window-sessionstorage/",target:"_blank",rel:"noopener noreferrer"},Object(o.b)(i.a,{src:b.a,size:28,style:{margin:"0 0 0 20px"},mdxType:"SvgIcon"})))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"React hooks for accessing the sessionStorage ",Object(o.b)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"},"Web Storage API"),".")),Object(o.b)("a",{href:"https://justinmahar.github.io/react-use-window-sessionstorage/useSessionStorageString#example"},Object(o.b)("img",{src:u.a})),Object(o.b)("p",null,"👁️ ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/react-use-window-sessionstorage/useSessionStorageString#example"},"Live Demo"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"For localStorage, see ",Object(o.b)("a",{parentName:"em",href:"https://justinmahar.github.io/react-use-window-localstorage"},"react-use-window-localstorage"),".")),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"A set of hooks to easily store and retrieve data from ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"sessionStorage"),"."),Object(o.b)("p",null,"Encoding is handled for common data types, including ",Object(o.b)("a",{parentName:"p",href:"/react-use-window-sessionstorage/useSessionStorageBoolean"},"booleans"),", ",Object(o.b)("a",{parentName:"p",href:"/react-use-window-sessionstorage/useSessionStorageNumber"},"numbers"),", ",Object(o.b)("a",{parentName:"p",href:"/react-use-window-sessionstorage/useSessionStorageString"},"strings"),", and ",Object(o.b)("a",{parentName:"p",href:"/react-use-window-sessionstorage/useSessionStorageObject"},"objects"),", or you can ",Object(o.b)("a",{parentName:"p",href:"/react-use-window-sessionstorage/useSessionStorageItem"},"encode data yourself")," if you'd like."),Object(o.b)("p",null,"Changes to sessionStorage are synchronized across all hooks automatically."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"What is sessionStorage?")," The ",Object(o.b)("inlineCode",{parentName:"p"},"sessionStorage")," property allows you to store ",Object(o.b)("inlineCode",{parentName:"p"},"{key: value}")," string data that is cleared when the page session ends. A page session lasts as long as the browser is open, and survives over page reloads and restores.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For localStorage, check out the companion project ",Object(o.b)("a",{parentName:"p",href:"https://justinmahar.github.io/react-use-window-localstorage"},"react-use-window-localstorage"),".")),Object(o.b)("h3",{id:"features-include"},"Features include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"💪 Easily add ",Object(o.b)("inlineCode",{parentName:"strong"},"sessionStorage")," support"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Easily store data that is cleared when the page session ends."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"🔢 Support for primitives and objects"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Store and retrieve strings, booleans, numbers, and objects effortlessly."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"💁 Default values"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Optional support for defaults is baked right in."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"🔄 Automatic synchronization"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Changes are synchronized across hooks automatically."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"👾 Customizable"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Want to store something unusual? Just provide your own encoder."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"⛔ Storage availability detection"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Detects if ",Object(o.b)("inlineCode",{parentName:"li"},"sessionStorage")," is available for use and lets you know otherwise."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"🧼 Clearing support"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Clear all sessionStorage values and reset hooks to defaults with one simple call.")))),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm i react-use-window-sessionstorage\n")),Object(o.b)("h2",{id:"quick-start"},"Quick Start"),Object(o.b)("h3",{id:"storing-strings"},"Storing Strings"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"/react-use-window-sessionstorage/useSessionStorageString"},"useSessionStorageString")," hook:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import { useSessionStorageString } from "react-use-window-sessionstorage";\n')),Object(o.b)("p",null,"In your function component:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'const defaultValue = "cyan";\nconst [value, setValue] = useSessionStorageString("favColor", defaultValue);\n')),Object(o.b)("h3",{id:"storing-objects"},"Storing Objects"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"/react-use-window-sessionstorage/useSessionStorageObject"},"useSessionStorageObject")," hook:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import { useSessionStorageObject } from "react-use-window-sessionstorage";\n')),Object(o.b)("p",null,"In your function component:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'const defaultValue = { a: "hello", b: 123 };\nconst [value, setValue] = useSessionStorageObject("myObj", defaultValue);\n')),Object(o.b)("p",null,"Note that your objects must be compatible with ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"},"JSON.stringify()"),". Use ",Object(o.b)("a",{parentName:"p",href:"/react-use-window-sessionstorage/useSessionStorageItem"},"useSessionStorageItem")," otherwise."),Object(o.b)("h3",{id:"storing-booleans"},"Storing Booleans"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"/react-use-window-sessionstorage/useSessionStorageBoolean"},"useSessionStorageBoolean")," hook:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import { useSessionStorageBoolean } from "react-use-window-sessionstorage";\n')),Object(o.b)("p",null,"In your function component:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'const defaultValue = true;\nconst [value, setValue] = useSessionStorageBoolean(\n  "swordEquipped",\n  defaultValue\n);\n')),Object(o.b)("h3",{id:"storing-numbers"},"Storing Numbers"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"/react-use-window-sessionstorage/useSessionStorageNumber"},"useSessionStorageNumber")," hook:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import { useSessionStorageNumber } from "react-use-window-sessionstorage";\n')),Object(o.b)("p",null,"In your function component:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'const defaultValue = 3.14159;\nconst [value, setValue] = useSessionStorageNumber(\n  "importantNumber",\n  defaultValue\n);\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: All value defaults are optional. Hooks will return ",Object(o.b)("inlineCode",{parentName:"p"},"null")," if none is provided.")),Object(o.b)("h3",{id:"storing-everything-else"},"Storing Everything Else"),Object(o.b)("p",null,"If you'd like to store something other than the data types above, define your own encoding using the ",Object(o.b)("a",{parentName:"p",href:"/react-use-window-sessionstorage/useSessionStorageItem"},"useSessionStorageItem")," hook."),Object(o.b)("p",null,"Here's a starting point:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import { useSessionStorageItem } from "react-use-window-sessionstorage";\n')),Object(o.b)("p",null,"In your function component:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'const defaultValue = "something custom";\nconst encode = (value) => JSON.stringify(value);\nconst decode = (itemString) => JSON.parse(itemString);\nconst [value, setValue] = useSessionStorageItem(\n  "name",\n  defaultValue,\n  encode,\n  decode\n);\n')),Object(o.b)("p",null,"Provide ",Object(o.b)("inlineCode",{parentName:"p"},"null")," for no default value."),Object(o.b)("h3",{id:"additional-features"},"Additional Features"),Object(o.b)("p",null,"All hooks provide additional features in their return arrays, should you be interested:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'const [value, setValue, loading, available, reset] = useSessionStorageString(\n  "favColor",\n  "cyan"\n);\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"loading")," value of ",Object(o.b)("inlineCode",{parentName:"li"},"true")," indicates that the value is being loaded from sessionStorage."),Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("inlineCode",{parentName:"li"},"available")," value of ",Object(o.b)("inlineCode",{parentName:"li"},"true")," indicates that ",Object(o.b)("inlineCode",{parentName:"li"},"sessionStorage")," is supported and available for use."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"reset()")," function sets the value back to the provided default, or ",Object(o.b)("inlineCode",{parentName:"li"},"null")," if none was given.")),Object(o.b)("h3",{id:"clearing-sessionstorage"},"Clearing ",Object(o.b)("inlineCode",{parentName:"h3"},"sessionStorage")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import { useClearSessionStorage } from "react-use-window-sessionstorage";\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const clearSessionStorage = useClearSessionStorage();\n")),Object(o.b)("p",null,"Call ",Object(o.b)("inlineCode",{parentName:"p"},"clearSessionStorage()")," to clear all values in sessionStorage using ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"sessionStorage.clear()"),"\nand reset all hooks to their defaults (or ",Object(o.b)("inlineCode",{parentName:"p"},"null")," if none provided)."),Object(o.b)("h2",{id:"typescript"},"TypeScript"),Object(o.b)("p",null,"Type definitions have been included for ",Object(o.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," support."),Object(o.b)("h2",{id:"contributing"},"Contributing"),Object(o.b)("p",null,"Open source software is awesome and so are you. 😎"),Object(o.b)("p",null,"Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help."),Object(o.b)("p",null,"For major changes, open an issue first to discuss what you'd like to change."),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"https://tinyurl.com/kindlingscripts"},"Kindling")," for npm script documentation."),Object(o.b)("h2",{id:"-found-it-helpful-star-it"},"⭐ Found It Helpful? ",Object(o.b)("a",{parentName:"h2",href:"https://github.com/justinmahar/react-use-window-sessionstorage/stargazers"},"Star It!")),Object(o.b)("p",null,"If you found this project helpful, let the community know by giving it a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/justinmahar/react-use-window-sessionstorage/stargazers"},"star"),": ",Object(o.b)("a",{parentName:"p",href:"https://github.com/justinmahar/react-use-window-sessionstorage/stargazers"},"👉⭐")))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/__docz__/index.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docz-index-mdx-109c49e62fd9d1c4e843.js.map