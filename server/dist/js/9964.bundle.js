"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([[9964],{49964:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(11504),n=a.n(l),r=a(96800),c=a(66564),d=a(85704),i=a(89340),s=a(60580),m=a(27768),o=a(53740),u=a(64768),f=a(44484),v=a(1784),E=a(79328),h=a(87636);const b=e=>{let{allEvents:t}=e;const a=(0,r.OY)(),l=[{field:"id",headerName:"Product Id",minWidth:150,flex:.7},{field:"name",headerName:"Name",minWidth:180,flex:1.4},{field:"Preview",flex:.8,minWidth:100,headerName:"",type:"number",sortable:!1,renderCell:e=>n().createElement(n().Fragment,null,n().createElement(u.cH,{to:"/dashboard-draft-events/edit/".concat(e.row.id)},n().createElement(v.QRu,{size:20})))},{field:"Delete",flex:.8,minWidth:120,headerName:"",type:"number",sortable:!1,renderCell:e=>n().createElement(n().Fragment,null,n().createElement(f.ekA,{size:20,onClick:()=>{return t=e.id,a((0,E.It)(t)),void window.location.reload();var t},color:"red"}))}],c=[];return t&&t.forEach((e=>{c.push({id:null==e?void 0:e._id,name:e.name})})),n().createElement("div",{className:"w-full mx-8 pt-1 mt-10 bg-white outer1-div"},n().createElement(h.op,{rows:c,columns:l,pageSize:10,disableSelectionOnClick:!0,autoHeight:!0}))};var w=a(93736);const p=()=>{const[e,t]=(0,l.useState)(!0),[a,u]=(0,l.useState)([]),{seller:f}=(0,r.w1)((e=>e.seller));return(0,l.useEffect)((()=>{(async()=>{try{const{data:e}=await c.c.get("".concat(d.Yb,"/event/get-all-draft-events/").concat(f._id));u(null==e?void 0:e.events),t(!1)}catch(e){i.cp.error(e.response.data.message)}})()}),[f]),n().createElement(n().Fragment,null,e?n().createElement(s.c,null):n().createElement("div",null,n().createElement(m.c,null),n().createElement("div",{className:"flex justify-between w-full dasboard-user-width-mobile"},n().createElement("div",{className:"800px:w-[330px] dashboard-side-bar-res"},n().createElement(o.c,{active:12})),n().createElement("div",{className:"w-full justify-center flex dashboard-side-bar-data-view"},n().createElement(b,{allEvents:a,active:12}))),n().createElement(w.c,null)))}}}]);