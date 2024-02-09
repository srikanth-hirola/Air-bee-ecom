"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([[780],{80780:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=a(11504),s=a.n(l),n=a(27768),c=a(53740),r=a(96800),o=a(85976),i=a(49816),d=a(77980),m=a(66564),u=a(85704),p=a(89340);const g=e=>{let{display:t,setDisplay:a,name:l,number:n,position:c}=e;return s().createElement("label",{className:"toggle-switch"},n?s().createElement(s().Fragment,null,s().createElement("input",{type:"checkbox",checked:c===t,onChange:async()=>{a(c);try{await m.c.put("".concat(u.Yb,"/site/site-config-display"),{name:l,value:c})}catch(e){p.cp.error(e.response.data.message)}}}),s().createElement("span",{className:"switch"})):s().createElement(s().Fragment,null,s().createElement("input",{type:"checkbox",checked:t,onChange:async()=>{a(!t);try{await m.c.put("".concat(u.Yb,"/site/site-config-display"),{name:l,value:!t})}catch(e){p.cp.error(e.response.data.message)}}}),s().createElement("span",{className:"switch"})))},y=e=>{let{styles:t,logoLoading:a,setLogoLoading:n,category:c}=e;const{siteConfigData:o}=(0,r.w1)((e=>e.siteConfig)),{handleUpdateCategories:i,handleSelectedCategoryObject:d}={handleSelectedCategoryChange:(e,t,a,l)=>{const{checked:s}=e.target;let n=[...a];if(s)n.push(t);else{let e=n.filter((e=>e!==t));n=e}l(n)},handleUpdateCategories:async(e,t,a,l)=>{e.preventDefault();try{l(!0),await m.c.put("".concat(u.Yb,"/site/site-config-update-categories"),{CategoryLayoutName:t,CategoryContent:a}),p.cp.success("Updated Categories View"),l(!1)}catch(e){l(!1),p.cp.error(e.response.data.message)}},handleSelectedCategoryObject:(e,t,a)=>{const{checked:l}=e.target;a((e=>{let a=JSON.parse(JSON.stringify(e)),s=a.selectedCategories;return l?s.push(t):s=s.filter((e=>e!==t)),a.selectedCategories=s,a}))}},[y,C]=(0,l.useState)(null==o?void 0:o.CategoriesOneDisplay),[f,h]=(0,l.useState)({displayAllCategories:!0,selectedCategories:[]});return(0,l.useEffect)((()=>{C(null==o?void 0:o.CategoriesOneDisplay),h(null==o?void 0:o.CategoriesOne)}),[o]),s().createElement("div",null,s().createElement("div",{className:"flex  justify-between catagorie-page-main-text"},s().createElement("label",{className:"pb-2"},"Categories One to display in main page",s().createElement("span",{className:"text-red-500"},"*")),s().createElement(g,{display:y,setDisplay:C,name:"CategoriesOneDisplay"})),s().createElement("div",{className:"flex flex-wrap justify-between mt-6"},s().createElement("div",{className:"flex space-x-20 catagorie-page-display"},s().createElement("div",{className:"flex items-center"},s().createElement("input",{type:"radio",className:"w-[20px] h-[20px] mr-2",style:{accentColor:null==t?void 0:t.mainColor},onChange:()=>h({...f,displayAllCategories:!0}),checked:!(null==f||!f.displayAllCategories)}),s().createElement("label",null,"Display All Categories")),s().createElement("div",{className:"flex items-center label-image"},s().createElement("input",{type:"radio",className:"w-[20px] h-[20px] mr-2",style:{accentColor:null==t?void 0:t.mainColor},onChange:()=>h({...f,displayAllCategories:!1}),checked:null==f||!f.displayAllCategories}),s().createElement("label",null,"Select Categories"))),s().createElement("div",null,a?s().createElement("button",{className:"px-4 py-2 rounded bg-blue-500 text-light",style:{backgroundColor:null==t?void 0:t.mainColor,color:null==t?void 0:t.fontColor}},"Loading..."):s().createElement("button",{className:"px-4 py-2 rounded bg-blue-500 text-light",style:{backgroundColor:null==t?void 0:t.mainColor,color:null==t?void 0:t.fontColor},onClick:e=>i(e,"CategoriesOne",f,n)},"Update"))),!(null!=f&&f.displayAllCategories)&&s().createElement("div",{className:"my-4 h-fit max-h-[400px] overflow-scroll border-1 px-2 rounded"},null==c?void 0:c.map(((e,a)=>s().createElement("div",{key:a,className:"border-1 flex justify-between py-2 px-4 my-2 rounded"},s().createElement("p",{className:"mb-0"},null==e?void 0:e.name),s().createElement("input",{type:"checkbox",className:"w-[18px] h-[18px]",style:{accentColor:null==t?void 0:t.mainColor},onChange:t=>d(t,null==e?void 0:e._id,h),checked:!(null==f||!f.selectedCategories.includes(null==e?void 0:e._id))}))))))},C=()=>{const e=(0,o.U)(),[t,a]=(0,l.useState)(!1),{category:n}=(0,r.w1)((e=>e.category)),c=(0,r.OY)();return(0,l.useEffect)((()=>{c((0,i.WS)()),c((0,d.Y)())}),[c]),s().createElement("div",{className:"w-full min-h-[45vh] pt-5 rounded flex justify-center outer1-div"},s().createElement("div",{className:"w-full"},s().createElement("div",{className:"w-[97%] flex justify-center border-1 rounded h-fit mx-auto mb-3"},s().createElement("div",{className:"w-full px-8 py-4 "},s().createElement(y,{styles:e,logoLoading:t,setLogoLoading:a,category:n})))))};var f=a(93736);const h=()=>s().createElement("div",null,s().createElement(n.c,null),s().createElement("div",{className:"flex items-start justify-between w-full dasboard-user-width-mobile"},s().createElement("div",{className:"800px:w-[330px] dashboard-side-bar-res"},s().createElement(c.c,{active:25})),s().createElement("div",{className:"w-full justify-center flex dashboard-side-bar-data-view"},s().createElement(C,{active:25}))),s().createElement(f.c,null))}}]);