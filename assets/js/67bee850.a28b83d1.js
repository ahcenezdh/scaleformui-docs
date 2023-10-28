"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2},i="Getting Started",l={unversionedId:"ScaleformUI/getting-started",id:"ScaleformUI/getting-started",title:"Getting Started",description:"Requirements",source:"@site/docs/ScaleformUI/getting-started.md",sourceDirName:"ScaleformUI",slug:"/ScaleformUI/getting-started",permalink:"/scaleformui-docs/docs/ScaleformUI/getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ScaleformUI/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Dispose",permalink:"/scaleformui-docs/docs/ScaleformUI/scaleforms/dispose"},next:{title:"Menu Handler",permalink:"/scaleformui-docs/docs/ScaleformUI/menu-handler"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"How to install ScaleformUI",id:"how-to-install-scaleformui",level:2},{value:"Streaming the Scaleforms.",id:"streaming-the-scaleforms",level:3},{value:"C#",id:"c",level:3},{value:"Lua",id:"lua",level:3},{value:"How to use it?",id:"how-to-use-it",level:2},{value:"C#",id:"c-1",level:3},{value:"Lua",id:"lua-1",level:3},{value:"How do i make a menu?",id:"how-do-i-make-a-menu",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://store.rockstargames.com/fr/game/buy-gta-v"},"Grand Theft Auto V")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fivem.net/"},"FiveM")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/fr/vs/community/"},"Visual Studio or FxDK for C#"),"   "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/manups4e/ScaleformUI/releases"},"ScaleformUI"))),(0,n.kt)("h2",{id:"how-to-install-scaleformui"},"How to install ScaleformUI"),(0,n.kt)("h3",{id:"streaming-the-scaleforms"},"Streaming the Scaleforms."),(0,n.kt)("p",null,"FiveM and streamed scaleforms are a strange match, if you would place the streamed gfxs along with your resource and restart it.. weird things happen!!",(0,n.kt)("br",{parentName:"p"}),"\n","So to avoid bad things, i prepared a zip called ScaleformUI_Assets containing a ready to start empty script to stream your scaleforms separated from any script at all. This way even if you restart your script 100 times, the scaleforms won't go \ud83c\udf4c\ud83c\udf4c\ud83c\udf4c.",(0,n.kt)("br",{parentName:"p"}),"\n","Simply unzip ScaleformUI_Assets and place the resource wherever you want in your resources folder and start it before you start any other ScaleformUI dependant script."),(0,n.kt)("h3",{id:"c"},"C#"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download the latest release of ScaleformUI_Csharp, unzip it and place it in your resources folder."),(0,n.kt)("li",{parentName:"ol"},"It contains the ScaleformUI library and ExamleMenu script. If you want to use the library directly, simply take ScaleformUI.dll and delete the rest."),(0,n.kt)("li",{parentName:"ol"},"Add ScaleformUI.dll to your references in your Visual Studio /FxDK project and in your script's folder specifying it in the resource manifest's ",(0,n.kt)("inlineCode",{parentName:"li"},"files {}")," section.")),(0,n.kt)("h3",{id:"lua"},"Lua"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download the latest release of ScaleformUI_Lua, unzip it and place it in your resources folder."),(0,n.kt)("li",{parentName:"ol"},"It contains the ScaleformUI.lua file, the \ud83d\udc96 of your API and example.lua. If you don't want the example menu, simply delete the file and remove it from the manifest."),(0,n.kt)("li",{parentName:"ol"},"Remember to start the ScaleformUI script after you started the Assets to ensure the scaleforms are loaded correctly on client joining!")),(0,n.kt)("h2",{id:"how-to-use-it"},"How to use it?"),(0,n.kt)("h3",{id:"c-1"},"C#"),(0,n.kt)("p",null,"Simply use the reference in the project and on compilation it should copy the dll in the output folder along with your client.net.dll, copy the dll if you didn't do that before and add the reference in the resource's manifest ",(0,n.kt)("inlineCode",{parentName:"p"},"files {}")," section, you're good to go!\ud83c\udf7e\ud83e\udd42\ud83c\udf89"),(0,n.kt)("h3",{id:"lua-1"},"Lua"),(0,n.kt)("p",null,"There are 2 ways you can use the ScaleformUI.lua library."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First option: Place your ScaleformUI.lua in each resource that uses it and start it before any other client file."),(0,n.kt)("li",{parentName:"ol"},"Second option: Leave it in its own ScaleformUI resource and start it before the other resources. When you want to use it in any resource simply add ",(0,n.kt)("inlineCode",{parentName:"li"},'"@ScaleformUI_Lua/ScaleformUI.lua",')," in the resource manifest in the client_scripts section before anything else.  ")),(0,n.kt)("p",null,"I personally suggest the ",(0,n.kt)("strong",{parentName:"p"},"second option")," for 2 main reasons: the first is that whenever you need to update the API you do it only once in its own resource, the second reason is that this way you don't risk to have multiple instances of the API at the same time for each script.. less memory used, happy players, happy scripter, happy me! \ud83e\udd73\ud83e\udd73"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Now for the fun part.")),(0,n.kt)("h2",{id:"how-do-i-make-a-menu"},"How do i make a menu?"),(0,n.kt)("p",null,"You can create a menu by using the UIMenu class, this is the main class that handles the menu and all the items the menu contains.\nOnce the menu is declared you need to add items to it, there are different types of items, "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"UIMenuItem"),(0,n.kt)("li",{parentName:"ul"},"UIMenuListItem"),(0,n.kt)("li",{parentName:"ul"},"UIMenuDynamicListItem"),(0,n.kt)("li",{parentName:"ul"},"UIMenuCheckboxItem"),(0,n.kt)("li",{parentName:"ul"},"UIMenuSliderItem"),(0,n.kt)("li",{parentName:"ul"},"UIMenuProgressItem"),(0,n.kt)("li",{parentName:"ul"},"UIMenuSeparatorItem"),(0,n.kt)("li",{parentName:"ul"},"UIMenuStatsItem")),(0,n.kt)("p",null,"Each item has its own features but all of them are an inheritance of UIMenuItem, the basic item where all begins.",(0,n.kt)("br",{parentName:"p"}),"\n","The menu doesn't stop with the ",(0,n.kt)("strong",{parentName:"p"},"items"),". Each item can define a number of ",(0,n.kt)("strong",{parentName:"p"},"Panels")," that will be displayed below or besides the menu.\nAnd along with the items, the menu can contain ",(0,n.kt)("strong",{parentName:"p"},"windows")," like the Mom and Dad window, or the Statistics window!",(0,n.kt)("br",{parentName:"p"}),"\n","How the items, the panels and the windows interact with the menu we'll see it in the related pages of the wiki, but if you're impatient you can go check the example menus! They contain almost all the features and a showcase of how all the items are coded to work in the menu."))}p.isMDXComponent=!0}}]);