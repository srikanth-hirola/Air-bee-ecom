"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([[300],{12662:(e,t,a)=>{a.d(t,{c:()=>i});var l=a(11504),c=(a(32224),a(53768),a(85964));a(76944),a(91744),a(17540),new WeakMap;var s=a(48596),n=a(17624);const r=["onKeyDown"],d=l.forwardRef(((e,t)=>{let{onKeyDown:a}=e,l=function(e,t){if(null==e)return{};var a,l,c={},s=Object.keys(e);for(l=0;l<s.length;l++)a=s[l],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,r);const[d]=(0,s.cV)(Object.assign({tagName:"a"},l)),i=(0,c.c)((e=>{d.onKeyDown(e),null==a||a(e)}));return(o=l.href)&&"#"!==o.trim()&&"button"!==l.role?(0,n.jsx)("a",Object.assign({ref:t},l,{onKeyDown:a})):(0,n.jsx)("a",Object.assign({ref:t},l,d,{onKeyDown:i}));var o}));d.displayName="Anchor";const i=d},72840:(e,t,a)=>{a.d(t,{c:()=>v});var l=a(11504),c=a.n(l),s=a(37360),n=a(59480),r=a(85976),d=a(76972),i=a(64768),o=a(19036),m=a(38467);const u=e=>{var t,a,s,u,v;let{data:g,active:h}=e;const p=(0,r.U)(),{ConvertCurrency:E}=(0,m.c)(),[b,C]=(0,l.useState)(1),[f,N]=(0,l.useState)(),[k,S]=(0,l.useState)(),[y,w]=(0,l.useState)(!1),[I,P]=(0,l.useState)([]),[x,F]=(0,l.useState)(null!=g&&g.showInputs?null==g?void 0:g.colorInputs[0]:g),[D,B]=(0,l.useState)(!1),[A,V]=(0,l.useState)([]),{getOriginalPrice:j,getDiscountPrice:H}=(0,o.c)({data:g,active:h,click:y,count:b,selectedAttr:I,selectedColor:x,setClick:w,setCount:C,setLimited:S,setMainImg:V,setSelectedAttr:P,setSoldOut:B,setWarning:N});return c().createElement(c().Fragment,null,g&&c().createElement("div",{className:"card main-card"},c().createElement(i.cH,{to:"".concat("/product/".concat(null==g?void 0:g.slug))},c().createElement("div",{className:"shoppage1-card-image"},c().createElement("img",{src:null==g||null===(t=g.mainImage)||void 0===t?void 0:t.url,alt:"productImage"}))),c().createElement("div",{className:"card-body"},c().createElement("div",{className:"row"},c().createElement("div",{className:"col-md-9 col-9"},c().createElement(i.cH,{to:"".concat("/product/".concat(null==g?void 0:g.slug))},c().createElement("div",{className:"shoppage1-price"},c().createElement("h5",null,null==p||null===(a=p.currency)||void 0===a?void 0:a.Symbol," ",E(H({data:g})),c().createElement("span",null,null==p||null===(s=p.currency)||void 0===s?void 0:s.Symbol," ",E(j({data:g}))))),c().createElement("div",{className:"product-star product-brand-span d-flex"},c().createElement(n.c,{rating:null==g?void 0:g.ratings}),(null==g?void 0:g.ratings)&&c().createElement("h6",null,"(",null==g?void 0:g.ratings,")")))),c().createElement("div",{className:"col-md-3 col-3 shoppage1-likeicon p-0"},c().createElement(d.c,{data:g,click:y,setClick:w})),c().createElement("div",{className:"col-12 col-sm-12 col-md-12 pt-2"},c().createElement(i.cH,{to:"".concat("/product/".concat(null==g?void 0:g.slug))},c().createElement("p",null,(null==g||null===(u=g.name)||void 0===u?void 0:u.length)>38?(null==g||null===(v=g.name)||void 0===v?void 0:v.slice(0,48))+"...":null==g?void 0:g.name)))))))},v=e=>{let{data1:t}=e;const[a,n]=(0,l.useState)(null),[r,d]=(0,l.useState)(!1),[i,o]=(0,l.useState)(null),[m,v]=(0,l.useState)(!0);return(0,s.c)({data1:t,data:a,setData:n,setActive:d,setSeller:o,setLoading:v}),c().createElement(c().Fragment,null,a&&c().createElement(u,{data:a,active:r}))}},60300:(e,t,a)=>{a.d(t,{c:()=>v});var l=a(11504),c=a.n(l);const s=e=>{let{length:t,bredCrumb:a}=e;return c().createElement("div",{className:"row shoppage-row1"},c().createElement("div",{className:"col-md-6 col-sm-10 col-10"},c().createElement("b",{class:"fw-semibold"},t||0," items")," ",a[(null==a?void 0:a.length)-1]),c().createElement("div",{className:"col-md-6 col-sm-2 col-2 icons1-shoppage1"},c().createElement("div",{className:""}),c().createElement("div",{className:"gridicon1"},c().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},c().createElement("path",{d:"M11 3H3V11H11V3Z",fill:"#1C1C1C"}),c().createElement("path",{d:"M11 13H3V21H11V13Z",fill:"#1C1C1C"}),c().createElement("path",{d:"M21 3H13V11H21V3Z",fill:"#1C1C1C"}),c().createElement("path",{d:"M21 13H13V21H21V13Z",fill:"#1C1C1C"})))))};var n=a(42696);const r=e=>{let{checkedItems:t,setCheckedItems:a,data:l,setFilteredData:s,selectedBrands:r,setSelectedBrands:d,setSelectedPriceRange:i,setFilteredAttr:o,toggleDataVisible:m,isVisibleData:u}=e;const{handleClearFilter:v,removeTag:g}=(0,n.c)();return c().createElement("div",{className:"d-flex align-items-center"},c().createElement("div",{className:"shoppage1-row2"},null==t?void 0:t.map(((e,l)=>c().createElement("div",{key:l,className:"tag"},e,c().createElement("span",{className:"close-icon ",onClick:()=>g({valueToRemove:e,checkedItems:t,setCheckedItems:a,selectedBrands:r,setSelectedBrands:d,setFilteredAttr:o})},"✕")))),(null==t?void 0:t.length)>0?c().createElement("button",{onClick:e=>v({e,data:l,setFilteredData:s,setSelectedBrands:d,setSelectedPriceRange:i,setFilteredAttr:o,setCheckedItems:a}),class:" bg-blue-500 text-light p-2 rounded-lg"},"clear all filters"):null),c().createElement("div",{className:"mobile-filters"}))};var d=a(83308),i=a(72840);const o=e=>{let{productsLength:t,data:a,currentPage:s,setCurrentPage:n}=e;const[r,o]=(0,l.useState)([]);(0,l.useEffect)((()=>{o(a)}),[a]);const m=25*s,u=m-25,v=(null==r?void 0:r.length)>25?null==r?void 0:r.slice(u,m):r;return c().createElement(c().Fragment,null,c().createElement("div",{className:"allproducts-mapper"},v.map(((e,t)=>c().createElement(c().Fragment,{key:t},c().createElement(i.c,{data1:e}))))),c().createElement(d.c,{className:"pagination-div"},c().createElement(d.c.Prev,{onClick:()=>{n((e=>e-1))},disabled:1===s,className:"pagination-previous-button"}),Array.from({length:Math.ceil(t/25)}).map(((e,t)=>c().createElement(d.c.Item,{key:t,onClick:()=>{n(t+1)},className:"pagination-count-button"},t+1))),c().createElement(d.c.Next,{onClick:()=>{n((e=>e+1))},disabled:s===Math.ceil(t/25),className:"pagination-previous-button"})))};var m=a(64768);const u=e=>{let{bredCrumb:t}=e;return c().createElement("div",{className:"breadcrump-shop"},c().createElement("div",{className:"container"},c().createElement("nav",{"aria-label":"breadcrumb"},c().createElement("ol",{className:"breadcrumb"},c().createElement("li",{className:"breadcrumb-item active "},c().createElement(m.cH,{to:"/",className:"text-black"},"Home  ")),null==t?void 0:t.map(((e,t)=>c().createElement(m.cH,{to:"/products?search=all products"},c().createElement("li",{className:"breadcrumb-item active font-semibold",key:t,"aria-current":"page"},"/  ",e))))))))},v=e=>{let{productsLength:t,currentPage:a,setCurrentPage:l,filteredProducts:n,bredCrumb:d,checkedItems:i,setCheckedItems:m,data:v,setFilteredData:g,selectedBrands:h,setSelectedBrands:p,setSelectedPriceRange:E,setFilteredAttr:b,toggleDataVisible:C,isVisibleData:f}=e;return c().createElement("div",{className:"allproducts-main"},c().createElement(s,{length:t,bredCrumb:d}),c().createElement(u,{bredCrumb:d}),c().createElement(r,{checkedItems:i,setCheckedItems:m,data:v,setFilteredData:g,selectedBrands:h,setSelectedBrands:p,setSelectedPriceRange:E,setFilteredAttr:b,isVisibleData:f,toggleDataVisible:C}),(null==n?void 0:n.length)>0?c().createElement(o,{productsLength:t,currentPage:a,setCurrentPage:l,data:n}):c().createElement("p",null,"No Products Available"))}},42696:(e,t,a)=>{a.d(t,{c:()=>l});const l=()=>({handleCheckboxChange:e=>{let{e:t,checkedItems:a,setCheckedItems:l}=e;const{value:c,checked:s}=t.target;l(s?[...a,c]:a.filter((e=>e!==c)))},handleBrandCheckBox:async e=>{let{e:t,selectedBrands:a,setSelectedBrands:l}=e;const c=t.target.value;l(t.target.checked?[...a,c]:a.filter((e=>e!==c)))},handleClearFilter:e=>{let{e:t,data:a,setSelectedBrands:l,setSelectedPriceRange:c,setFilteredData:s,setFilteredAttr:n,setCheckedItems:r}=e;t.preventDefault(),l([]),c(),n(),r([]),s(a)},removeTag:e=>{let{valueToRemove:t,checkedItems:a,setCheckedItems:l,selectedBrands:c,setSelectedBrands:s,setFilteredAttr:n}=e;l(null==a?void 0:a.filter((e=>e!==t))),s(null==c?void 0:c.filter((e=>e!==t))),n()},handleFilterCheckswithValues:e=>{let{checkedItems:t,setCheckedItems:a,value:l}=e,c=[...t];c.includes(l)||c.push(l),a(c)}})},37360:(e,t,a)=>{a.d(t,{c:()=>s});var l=a(11504),c=a(96800);const s=e=>{let{data1:t,data:a,setData:s,setActive:n,setSeller:r,setLoading:d}=e;const i=null==t?void 0:t._id,{allProducts:o}=(0,c.w1)((e=>e.products)),{allEvents:m}=(0,c.w1)((e=>e.events));(0,l.useEffect)((()=>{const e=null==(t=m)?void 0:t.find((e=>e.productArray.some((e=>e._id===i))));var t;if(e){const t={...e.productArray.find((e=>e._id===i))};n(!0),s(t)}else{const e=null==o?void 0:o.find((e=>e._id===i));s(e)}}),[o,m,i])}},83308:(e,t,a)=>{a.d(t,{c:()=>b});var l=a(82084),c=a.n(l),s=a(11504),n=a(98624),r=a(12662),d=a(17624);const i=s.forwardRef((({active:e=!1,disabled:t=!1,className:a,style:l,activeLabel:s="(current)",children:n,linkStyle:i,linkClassName:o,as:m=r.c,...u},v)=>{const g=e||t?"span":m;return(0,d.jsx)("li",{ref:v,style:l,className:c()(a,"page-item",{active:e,disabled:t}),children:(0,d.jsxs)(g,{className:c()("page-link",o),style:i,...u,children:[n,e&&s&&(0,d.jsx)("span",{className:"visually-hidden",children:s})]})})}));i.displayName="PageItem";const o=i;function m(e,t,a=e){const l=s.forwardRef((({children:e,...l},c)=>(0,d.jsxs)(i,{...l,ref:c,children:[(0,d.jsx)("span",{"aria-hidden":"true",children:e||t}),(0,d.jsx)("span",{className:"visually-hidden",children:a})]})));return l.displayName=e,l}const u=m("First","«"),v=m("Prev","‹","Previous"),g=m("Ellipsis","…","More"),h=m("Next","›"),p=m("Last","»"),E=s.forwardRef((({bsPrefix:e,className:t,size:a,...l},s)=>{const r=(0,n.Ky)(e,"pagination");return(0,d.jsx)("ul",{ref:s,...l,className:c()(t,r,a&&`${r}-${a}`)})}));E.displayName="Pagination";const b=Object.assign(E,{First:u,Prev:v,Ellipsis:g,Item:o,Next:h,Last:p})}}]);