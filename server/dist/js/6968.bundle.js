"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([[6968],{86968:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(11504),n=a.n(l),s=a(27768),c=a(53740),r=a(66564),i=a(58496),m=a(96800),d=a(60580),u=a(97928),o=a(85704),y=a(89340);const w=()=>{const{seller:e}=(0,m.w1)((e=>e.seller)),[t,a]=(0,l.useState)(!1),[s,c]=(0,l.useState)(""),[w,h]=(0,l.useState)([]);(0,l.useEffect)((()=>{(async()=>{try{a(!0);const{data:e}=await r.c.get("".concat(o.Yb,"/form/inquiry"),{withCredentials:!0});h(null==e?void 0:e.inquiris)}catch(e){y.cp.error(null==e?void 0:e.message)}finally{a(!1)}})()}),[e]);const p=w.filter((e=>e.name.toLowerCase().includes(s)||e.email.toLowerCase().includes(s)||e.phone.toLowerCase().includes(s)||e.item.toLowerCase().includes(s)));return n().createElement(n().Fragment,null,t?n().createElement(d.c,null):n().createElement("div",{className:"w-full mx-8 pt-1 mt-10 bg-white outer1-div"},n().createElement("div",{className:"flex justify-between"},n().createElement("h2",{className:"mb-4"},"Inquiries"),n().createElement(u.c,{setState:c,state:s,title:"Inquiry Name",key:1})),n().createElement(i.c,{dataSource:p,columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Phone",dataIndex:"phone",key:"phone"},{title:"Email",dataIndex:"email",key:"email"},{title:"Item",dataIndex:"item",key:"item"},{title:"Details",dataIndex:"details",key:"details"},{title:"Qty",dataIndex:"qty",key:"qty"}],pagination:!1})))};var h=a(93736);const p=()=>n().createElement("div",null,n().createElement(s.c,null),n().createElement("div",{className:"flex items-start justify-between w-full dasboard-user-width-mobile"},n().createElement("div",{className:"800px:w-[330px] dashboard-side-bar-res"},n().createElement(c.c,{active:28})),n().createElement("div",{className:"w-full justify-center flex dashboard-side-bar-data-view"},n().createElement(w,null))),n().createElement(h.c,null))},97928:(e,t,a)=>{a.d(t,{c:()=>s});var l=a(11504),n=a.n(l);const s=e=>{let{state:t,setState:a,title:l}=e;return n().createElement("input",{type:"text",className:"border-1 rounded w-[400px] mr-2 px-2 py-1 h-[40px]",value:t,onChange:e=>a(e.target.value),placeholder:"Search By ".concat(l)})}}}]);