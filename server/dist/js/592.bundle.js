"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([[592],{60592:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var l=a(11504),s=a.n(l),c=a(59776),n=a(86944),r=a(52096),m=a(89340),o=a(66564),i=a(85704),d=a(96800),u=a(44484),E=a(76542),v=a(15896),g=a(60580),p=(a(94312),a(96592),a(83284)),N=a(64768);const f=()=>{const{user:e}=(0,d.w1)((e=>e.user)),t=(0,p.i6)();return s().createElement(s().Fragment,null,s().createElement("div",{className:"UserProfileModal-parent"},s().createElement("div",{className:" bd-example m-0 border-0"},s().createElement("a",{className:"btn","data-bs-toggle":"offcanvas",href:"#offcanvasExample",role:"button","aria-controls":"offcanvasExample"},s().createElement("div",{className:"Usermodaltoggle-image"},s().createElement("img",{src:"/DronesHomepage/usermodalmoreicon.png",alt:""}))),s().createElement("div",{className:"offcanvas offcanvas-start",tabIndex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel"},s().createElement("div",{className:"offcanvas-header"},s().createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})),s().createElement("div",{className:"offcanvas-body"},s().createElement("div",{className:""},s().createElement("div",{className:"ContactDetails-sub2"},s().createElement("h3",null,"Hello ",null==e?void 0:e.name),s().createElement("p",null,"Welcome to your Account"),s().createElement("div",{className:"ContactDetails-sub2-list"},s().createElement("div",{className:"row"},s().createElement("div",{className:"col-md-12"},s().createElement("div",{className:"ContactDetails-sub2-list-content"},s().createElement("div",{className:"ContactDetails-sub2-list-content-image"},s().createElement("img",{src:"DronesHomepage/userimage.png",alt:""})),s().createElement(N.cH,{to:"/profilepage"},s().createElement("p",null,"Profile")))),s().createElement("div",{className:"col-md-12"},s().createElement("div",{className:"ContactDetails-sub2-list-content"},s().createElement("div",{className:"ContactDetails-sub2-list-content-image"},s().createElement("img",{src:"DronesHomepage/my orders.png",alt:""})),s().createElement(N.cH,{to:"/orderspage"},s().createElement("p",null,"My orders")))),s().createElement("div",{className:"col-md-12"},s().createElement("div",{className:"ContactDetails-sub2-list-content"},s().createElement("div",{className:"ContactDetails-sub2-list-content-image"},s().createElement("img",{src:"DronesHomepage/refund.png",alt:""})),s().createElement(N.cH,{to:"/refundpage"},s().createElement("p",null,"Refunds")))),s().createElement("div",{className:"col-md-12"},s().createElement("div",{className:"Profilepage-sub2-list-content"},s().createElement("div",{className:"Profilepage-sub2-list-content-image"},s().createElement("img",{src:"DronesHomepage/addresshome.png",alt:""})),s().createElement(N.cH,{to:"/contactDetailsPage"},s().createElement("p",null,"Address")))),s().createElement("div",{className:"col-md-12"},s().createElement("div",{className:"ContactDetails-sub2-list-content"},s().createElement("div",{className:"ContactDetails-sub2-list-content-image"},s().createElement("img",{src:"DronesHomepage/sign out.png",alt:""})),s().createElement("p",{onClick:()=>{o.c.get("".concat(i.Yb,"/user/logout"),{withCredentials:!0}).then((e=>{m.cp.success(e.data.message),window.location.reload(!0),t("/login")})).catch((e=>{console.log(e.response.data.message)}))}},"Sign Out"))))))))))))},b=()=>{var e;const[t,a]=(0,l.useState)(!0),{user:c,error:n,successMessage:p,loading:N}=(0,d.w1)((e=>e.user)),[b,h]=(0,l.useState)(),[D,C]=(0,l.useState)(),[P,y]=(0,l.useState)(),[x,w]=(0,l.useState)(""),H=(0,d.OY)();return(0,l.useEffect)((()=>{h(c&&(null==c?void 0:c.name)),C(c&&(null==c?void 0:c.email)),y(c&&(null==c?void 0:c.phoneNumber))}),[c]),(0,l.useEffect)((()=>{n&&(m.cp.error(n),H({type:"clearErrors"})),p&&(m.cp.success(p),H({type:"clearMessages"}))}),[H,n,p]),s().createElement(s().Fragment,null,N?s().createElement(g.c,null):s().createElement("div",{className:"Profilepage-sub3"},s().createElement("div",{className:"Profilepage-sub3-headings"},s().createElement("div",null,s().createElement("h3",null,"My Info"),s().createElement("h5",null,"Contact Details")),s().createElement("div",{className:"Userprofilemodal"},s().createElement(f,null))),s().createElement("div",{className:"flex justify-center w-full"},s().createElement("div",{className:"relative"},s().createElement("img",{src:"".concat(null==c||null===(e=c.avatar)||void 0===e?void 0:e.url),className:"w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]",alt:"avatar"}),s().createElement("div",{className:"w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]"},s().createElement("input",{type:"file",id:"image",className:"hidden",onChange:async e=>{const t=new FileReader;t.onload=()=>{2===t.readyState&&o.c.put("".concat(i.Yb,"/user/update-avatar"),{avatar:t.result},{withCredentials:!0}).then((e=>{H((0,r._Z)()),m.cp.success("avatar updated successfully!")})).catch((e=>{m.cp.error(e)}))},t.readAsDataURL(e.target.files[0])}}),s().createElement("label",{htmlFor:"image"},s().createElement(u.UBE,null))))),s().createElement("br",null),s().createElement("form",{onSubmit:e=>{e.preventDefault(),H((0,r.KA)(b,D,P,x))}},s().createElement("div",{className:"col-md-12"},s().createElement("div",{className:"Profile-details"},s().createElement("div",{className:"Profile-details-sub1"},s().createElement("label",{className:"form-label",htmlFor:"Your Name"},"Your Name"),s().createElement("div",{className:"Profile-details-sub1-text"},s().createElement("input",{className:"form-control",type:"text",placeholder:"Enter name",required:!0,value:b,onChange:e=>h(e.target.value)})),s().createElement("hr",null)))),s().createElement("div",{className:"col-md-12"},s().createElement("div",{className:"Profile-details"},s().createElement("div",{className:"Profile-details-sub1"},s().createElement("label",{className:"form-label",htmlFor:"Email Address"},"Email Address"),s().createElement("div",{className:"Profile-details-sub1-text"},s().createElement("input",{className:"form-control",type:"email",placeholder:"abcdef@gmail.col",required:!0,value:D,onChange:e=>C(e.target.value)})),s().createElement("hr",null)))),s().createElement("div",{className:"col-md-12"},s().createElement("div",{className:"Profile-details"},s().createElement("div",{className:"Profile-details-sub1"},s().createElement("label",{className:"form-label",htmlFor:"Phone Number"},"Phone Number"),s().createElement("div",{className:"Profile-details-sub1-text"},s().createElement("input",{className:"form-control",type:"tele",placeholder:"897465959",required:!0,value:P,onChange:e=>y(e.target.value)})),s().createElement("hr",null)))),s().createElement("div",{className:"col-md-12"},s().createElement("div",{className:"Profile-details"},s().createElement("div",{className:"Profile-details-sub1"},s().createElement("label",{className:"form-label",htmlFor:"Password"},"Password"),s().createElement("div",{className:"Profile-details-sub1-text"},s().createElement("input",{className:"form-control",type:t?"password":"text",required:!0,value:x,onChange:e=>w(e.target.value)}),s().createElement(E.u,{className:"cursor-pointer",icon:t?v.yOB:v.ILB,onClick:()=>{a(!t)}})),s().createElement("hr",null)))),s().createElement("input",{className:"w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer",required:!0,value:"Update",type:"submit"}))))};var h=a(93736),D=a(17554),C=a(33280),P=a(17652);const y=()=>{const[e,t]=(0,l.useState)();return(0,C.c)({pageName:"profileSEO",setState:t}),s().createElement(s().Fragment,null,s().createElement(P.c,{seoDetails:e}),s().createElement(n.c,null),s().createElement(D.c,null),s().createElement("div",{className:"Profilepage-parent"},s().createElement("div",{className:"Profilepage-main-content"},s().createElement("div",{className:"row"},s().createElement("div",{className:"col-md-12 col-lg-3"},s().createElement(c.c,null)),s().createElement("div",{className:"col-md-12 col-lg-9"},s().createElement(b,null))))),s().createElement(h.c,null))}},59776:(e,t,a)=>{a.d(t,{c:()=>d});var l=a(66564),s=a(11504),c=a.n(s),n=a(96800),r=a(83284),m=a(64768),o=a(85704),i=a(89340);const d=()=>{const{user:e}=(0,n.w1)((e=>e.user)),t=(0,r.i6)();return c().createElement("div",{className:"ContactDetails-sub2-main-parent"},c().createElement("div",{className:"ContactDetails-sub2"},c().createElement("h3",null,"Hello ",null==e?void 0:e.name),c().createElement("p",null,"Welcome to your Account"),c().createElement("div",{className:"ContactDetails-sub2-list"},c().createElement("div",{className:"row"},c().createElement("div",{className:"col-md-12"},c().createElement("div",{className:"ContactDetails-sub2-list-content"},c().createElement("div",{className:"ContactDetails-sub2-list-content-image"},c().createElement("img",{src:"DronesHomepage/userimage.png",alt:""})),c().createElement(m.cH,{to:"/profilepage"},c().createElement("p",null,"Profile")))),c().createElement("div",{className:"col-md-12"},c().createElement("div",{className:"ContactDetails-sub2-list-content"},c().createElement("div",{className:"ContactDetails-sub2-list-content-image"},c().createElement("img",{src:"DronesHomepage/my orders.png",alt:""})),c().createElement(m.cH,{to:"/orderspage"},c().createElement("p",null,"My orders")))),c().createElement("div",{className:"col-md-12"},c().createElement("div",{className:"ContactDetails-sub2-list-content"},c().createElement("div",{className:"ContactDetails-sub2-list-content-image"},c().createElement("img",{src:"DronesHomepage/refund.png",alt:""})),c().createElement(m.cH,{to:"/refundpage"},c().createElement("p",null,"Refunds")))),c().createElement("div",{className:"col-md-12"},c().createElement("div",{className:"Profilepage-sub2-list-content"},c().createElement("div",{className:"Profilepage-sub2-list-content-image"},c().createElement("img",{src:"DronesHomepage/addresshome.png",alt:""})),c().createElement(m.cH,{to:"/contactDetailsPage"},c().createElement("p",null,"Address")))),c().createElement("div",{className:"col-md-12"},c().createElement("div",{className:"ContactDetails-sub2-list-content"},c().createElement("div",{className:"ContactDetails-sub2-list-content-image"},c().createElement("img",{src:"DronesHomepage/sign out.png",alt:""})),c().createElement("p",{onClick:()=>{l.c.get("".concat(o.Yb,"/user/logout"),{withCredentials:!0}).then((e=>{i.cp.success(e.data.message),window.location.reload(!0),t("/login")})).catch((e=>{console.log(e.response.data.message)}))}},"Sign Out")))))))}},33280:(e,t,a)=>{a.d(t,{c:()=>c});var l=a(11504),s=a(85976);const c=e=>{let{pageName:t,setState:a,setLoading:c}=e;const n=(0,s.U)();(0,l.useEffect)((()=>{var e,l;c&&c(!1),null!=n&&n.allPagesSEODetails?a({metaTitle:null==n||null===(e=n.allPagesSEODetails)||void 0===e||null===(e=e[t])||void 0===e?void 0:e.metaTitle,metaDescription:null==n||null===(l=n.allPagesSEODetails)||void 0===l||null===(l=l[t])||void 0===l?void 0:l.metaDescription}):a({metaTitle:"Airbee Technologies",metaDescription:"Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth."})}),[t,c,a,null==n?void 0:n.allPagesSEODetails])}}}]);