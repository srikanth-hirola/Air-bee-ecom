"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([[6568],{54188:(e,l,t)=>{t.r(l),t.d(l,{default:()=>f});var a=t(11504),n=t.n(a),r=t(96800),s=t(83284),i=t(64768),c=t(91864),d=t(66564),o=t(85704),u=t(89340),m=t(85976),p=t(44484),v=t(6840),E=t(38467),g=t(86944),h=t(17554),N=t(93736),y=t(33280),b=t(17652);const f=()=>{var e,l,t,f,x,w,O,S,A,C,D,k,I,P;const{ConvertCurrency:B}=(0,E.c)(),{orders:U}=(0,r.w1)((e=>e.order)),{user:_}=(0,r.w1)((e=>e.user)),Y=(0,r.OY)(),[R,T]=(0,a.useState)(!1),[z,q]=(0,a.useState)(""),[H,F]=(0,a.useState)(null),[M,W]=(0,a.useState)(1),{id:G}=(0,s.W4)(),K=(0,m.U)(),[j,L]=(0,a.useState)();(0,y.c)({pageName:"ordersSEO",setState:L}),(0,a.useEffect)((()=>{Y((0,c.Ym)(_._id))}),[Y,_._id]);const Q=U&&U.find((e=>e._id===G));return n().createElement(n().Fragment,null,n().createElement(b.c,{seoDetails:j}),n().createElement(g.c,null),n().createElement(h.c,null),n().createElement("div",{className:"OrderDetails-parent"},n().createElement("div",{className:"row"},n().createElement("div",{className:" col-md-12"},n().createElement("div",{className:"Orderspage-tabs-active-parent"},n().createElement("div",{className:"Orderspage-tabs-active-text1"},n().createElement("h6",null,"Order no:#",null==Q||null===(e=Q._id)||void 0===e?void 0:e.slice(0,8)),n().createElement("p",null,"Order Date : ",n().createElement("span",{className:"Orderspage-Orderdate"},null==Q||null===(l=Q.createdAt)||void 0===l?void 0:l.slice(0,10))),n().createElement("p",null,"Estimated Delivery Date : ",n().createElement("span",{className:"Orderspage-Estimated-date"},null==Q||null===(t=Q.sellerCart[0])||void 0===t||null===(t=t.response)||void 0===t||null===(t=t.orders)||void 0===t?void 0:t.etd))),n().createElement("div",{className:"Orderspage-tabs-active-text2"},n().createElement("p",null,"Order Status : ",n().createElement("span",{className:"Orderspage-oder-status"},"Inprogress")),n().createElement("p",null,"Payment Method : ",n().createElement("span",{className:"Orderspage-paymentMethod"},"Cash On Delivery")))),n().createElement("div",{className:"Orderspage-ordered-item-parent"},n().createElement("div",{className:"Orderspage-product-button"},n().createElement(i.cH,{to:"/orderspage"},n().createElement("button",null,"Back To Orders"))),Q&&n().createElement("div",{className:"flex flex-col gap-4"},null==Q?void 0:Q.cart.map(((e,l)=>{var t,a,r,s,i,m,p,v;return n().createElement("div",{className:"Orderspage-product-image-parent",key:l},n().createElement("div",{className:"Orderspage-product-image"},n().createElement("img",{src:"".concat(e.showInputs?null===(t=e.selectedColor.image)||void 0===t?void 0:t.url:null===(a=e.selectedColor.mainImage)||void 0===a?void 0:a.url),alt:"product"})),n().createElement("div",{className:"Orderspage-product-text"},n().createElement("h6",null,null==e?void 0:e.name),n().createElement("p",null,"SKU : ",n().createElement("span",null,null!=e&&e.showInputs?null==e||null===(r=e.selectedColor)||void 0===r?void 0:r.varientSKU:null==e||null===(s=e.selectedColor)||void 0===s?void 0:s.SKU)),n().createElement("p",null,"Qty : ",n().createElement("span",null,null==e?void 0:e.qty)),n().createElement("p",null,"Total : ",n().createElement("span",null,null==K||null===(i=K.currency)||void 0===i?void 0:i.Symbol," ",B(null==e?void 0:e.finalPrice)*(null==e?void 0:e.qty))),(null==e||null===(m=e.selectedColor)||void 0===m?void 0:m.haveAttributes)&&n().createElement("p",{className:"pl-3 text-[18px] text-[#00000091]"},null===(p=e.colorAttribute)||void 0===p?void 0:p.name," :"," ",null===(v=e.colorAttribute)||void 0===v?void 0:v.value.valName)),n().createElement("div",{className:"d-flex flex-column "},n().createElement("h5",{className:"pl-3 text-[20px] text-[#00000091]"},null==e?void 0:e.status),"Delivered"===(null==e?void 0:e.status)&&n().createElement("div",{className:"".concat(K.button," text-white"),onClick:l=>{(async(e,l)=>{e.preventDefault(),await d.c.put("".concat(o.Yb,"/order/order-refund/").concat(G),{status:"Processing refund",productID:l}).then((e=>{u.cp.success(e.data.message),Y((0,c.Ym)(_._id))})).catch((e=>{u.cp.error(e.response.data.message)}))})(l,e._id)}},"Give a Refund"),null!=e&&e.isReviewed||"Delivered"!==(null==e?void 0:e.status)?null:n().createElement("div",{className:"".concat(K.button," text-[#fff]"),onClick:()=>T(!0)||F(e)},"Write a review")))})))),n().createElement("div",null)),R&&n().createElement("div",{className:"w-full fixed top-0 left-0 h-screen bg-[#0005] z-50 flex items-center justify-center"},n().createElement("div",{className:"w-[50%] h-min bg-[#fff] shadow rounded-md p-3"},n().createElement("div",{className:"w-full flex justify-end p-3"},n().createElement(v.eWI,{size:30,onClick:()=>T(!1),className:"cursor-pointer"})),n().createElement("h2",{className:"text-[30px] font-[500] font-Poppins text-center"},"Give a Review"),n().createElement("br",null),n().createElement("div",{className:"w-full flex"},n().createElement("img",{src:"".concat(null==H||null===(f=H.images[0])||void 0===f?void 0:f.url),alt:"product",className:"w-[80px] h-[80px]"}),n().createElement("div",null,n().createElement("div",{className:"pl-3 text-[20px]"},null==H?void 0:H.name),n().createElement("h4",{className:"pl-3 text-[20px]"},null==K||null===(x=K.currency)||void 0===x?void 0:x.Symbol," ",B(null==H?void 0:H.discountPrice)," x ",null==H?void 0:H.qty))),n().createElement("br",null),n().createElement("br",null),n().createElement("h5",{className:"pl-3 text-[20px] font-[500]"},"Give a Rating ",n().createElement("span",{className:"text-red-500"},"*")),n().createElement("div",{className:"flex w-full ml-2 pt-1"},[1,2,3,4,5].map((e=>M>=e?n().createElement(p.Oi5,{key:e,className:"mr-1 cursor-pointer",color:"rgb(246,186,0)",size:25,onClick:()=>W(e)}):n().createElement(p.U5e,{key:e,className:"mr-1 cursor-pointer",color:"rgb(246,186,0)",size:25,onClick:()=>W(e)})))),n().createElement("br",null),n().createElement("div",{className:"w-full ml-3"},n().createElement("label",{className:"block text-[20px] font-[500]"},"Write a comment",n().createElement("span",{className:"ml-1 font-[400] text-[16px] text-[#00000052]"},"(optional)")),n().createElement("textarea",{name:"comment",id:"",cols:"20",rows:"5",value:z,onChange:e=>q(e.target.value),placeholder:"How was your product? write your expresion about it!",className:"mt-2 w-[95%] border p-2 outline-none"})),n().createElement("div",{className:"".concat(K.button," text-white text-[20px] ml-3"),onClick:M>1?async e=>{await d.c.put("".concat(o.Yb,"/product/create-new-review"),{user:_,rating:M,comment:z,productId:null==H?void 0:H._id,orderId:G},{withCredentials:!0}).then((e=>{u.cp.success(e.data.message),Y((0,c.Ym)(_._id)),q(""),W(null),T(!1)})).catch((e=>{u.cp.error(e)}))}:null},"Submit"))),n().createElement("div",{className:"col-md-12"},n().createElement("div",{className:"OrderDetails-Shipping-details"},n().createElement("div",{className:"OrderDetails-Shipping-details-sub1"},n().createElement("h6",null,"Shipping : ",n().createElement("span",null,null==K||null===(w=K.currency)||void 0===w?void 0:w.Symbol," ",null==Q?void 0:Q.shipping))),n().createElement("div",{className:" OrderDetails-Shipping-details-sub1"},n().createElement("h6",null,"Total Price : ",n().createElement("span",null,null==K||null===(O=K.currency)||void 0===O?void 0:O.Symbol," ",null==Q?void 0:Q.totalPrice))),n().createElement("div",{className:"OrderDetails-Shipping-details-sub1"},n().createElement("h6",null,null==Q||null===(S=Q.paymentInfo)||void 0===S?void 0:S.type)))),n().createElement("div",{className:"OrderDetails-additional-info"},n().createElement("div",{className:"col-md-12"},n().createElement("div",{className:"row"},null!=Q&&Q.shipping_is_billing?n().createElement("div",{className:"col-md-8"},n().createElement("div",{className:"OrderDetails-delivery-address"},n().createElement("h6",null,"Shipping Address :"),n().createElement("p",null,null==Q?void 0:Q.BillingAddress.billingaddress1),n().createElement("p",null,null==Q?void 0:Q.BillingAddress.billingaddress2),n().createElement("p",null,null==Q?void 0:Q.BillingAddress.newCountry),n().createElement("p",null,null==Q?void 0:Q.BillingAddress.newState),n().createElement("p",null,null==Q?void 0:Q.BillingAddress.newCity," - ",null==Q?void 0:Q.BillingAddress.billingzipCode),n().createElement("p",null,null==Q||null===(A=Q.BillingAddress)||void 0===A?void 0:A.billinguserphonenumber),n().createElement("p",null,null==Q||null===(C=Q.BillingAddress)||void 0===C?void 0:C.billinguserEmail),n().createElement("div",{className:"OrderDetails-delivery-address-buttons"},n().createElement(i.cH,{to:"/inbox"},n().createElement("div",{className:"bg-black p-3 rounded text-white"},"Send Message"))))):n().createElement("div",{className:"col-md-8"},n().createElement("div",{className:"OrderDetails-delivery-address"},n().createElement("h6",null,"Shipping Address :"),n().createElement("p",null,null==Q?void 0:Q.shippingAddress.shippingaddress1),n().createElement("p",null,null==Q?void 0:Q.shippingAddress.shippingaddress2),n().createElement("p",null,null==Q?void 0:Q.shippingAddress.newCountryshipping),n().createElement("p",null,null==Q?void 0:Q.shippingAddress.newStateshipping),n().createElement("p",null,null==Q?void 0:Q.shippingAddress.newCityshipping," - ",null==Q?void 0:Q.BillingAddress.shippingzipCode),n().createElement("p",null,null==Q||null===(D=Q.shippingAddress)||void 0===D?void 0:D.shippinguserphonenumber),n().createElement("p",null,null==Q||null===(k=Q.shippingAddress)||void 0===k?void 0:k.shippinguserEmail),n().createElement("div",{className:"OrderDetails-delivery-address-buttons"},n().createElement(i.cH,{to:"/"},n().createElement("div",{className:"bg-black p-3 rounded text-white"},"Send Message")),n().createElement("button",null,"Cancel Order")))),n().createElement("div",{className:"col-md-4"},n().createElement("div",{className:"OrderDetails-paymentStatus"},n().createElement("h6",null,"Payment Info :"),n().createElement("p",null,"Status : ",n().createElement("span",null,null!=Q&&null!==(I=Q.paymentInfo)&&void 0!==I&&I.status?null==Q||null===(P=Q.paymentInfo)||void 0===P?void 0:P.status:"Not Paid")," ")))))))),n().createElement(N.c,null))}},38467:(e,l,t)=>{t.d(l,{c:()=>n});var a=t(85976);const n=()=>{const e=(0,a.U)(),l=null==e?void 0:e.currency;return{ConvertCurrency:e=>"INR"!==(null==l?void 0:l.code)?(e*(null==l?void 0:l.exchangeRate)).toFixed(2):e}}},33280:(e,l,t)=>{t.d(l,{c:()=>r});var a=t(11504),n=t(85976);const r=e=>{let{pageName:l,setState:t,setLoading:r}=e;const s=(0,n.U)();(0,a.useEffect)((()=>{var e,a;r&&r(!1),null!=s&&s.allPagesSEODetails?t({metaTitle:null==s||null===(e=s.allPagesSEODetails)||void 0===e||null===(e=e[l])||void 0===e?void 0:e.metaTitle,metaDescription:null==s||null===(a=s.allPagesSEODetails)||void 0===a||null===(a=a[l])||void 0===a?void 0:a.metaDescription}):t({metaTitle:"Airbee Technologies",metaDescription:"Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth."})}),[l,r,t,null==s?void 0:s.allPagesSEODetails])}},91864:(e,l,t)=>{t.d(l,{At:()=>s,Ym:()=>r});var a=t(66564),n=t(85704);const r=e=>async l=>{try{l({type:"getAllOrdersUserRequest"});const{data:t}=await a.c.get("".concat(n.Yb,"/order/get-all-orders/").concat(e));l({type:"getAllOrdersUserSuccess",payload:t.orders})}catch(e){l({type:"getAllOrdersUserFailed",payload:e.response.data.message})}},s=e=>async l=>{try{l({type:"getAllOrdersShopRequest"});const{data:t}=await a.c.get("".concat(n.Yb,"/order/get-seller-all-orders/").concat(e));l({type:"getAllOrdersShopSuccess",payload:t.orders})}catch(e){l({type:"getAllOrdersShopFailed",payload:e.response.data.message})}}}}]);