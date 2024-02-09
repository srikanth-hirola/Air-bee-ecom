"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([[8024],{88024:(e,t,l)=>{l.r(t),l.d(t,{default:()=>_});var a=l(11504),s=l.n(a),n=l(27768),i=l(53740),d=l(96800),r=l(66564),o=l(44484),c=l(91864),u=l(73467),m=l(85976),p=l(89340),v=l(85704),b=l(60580),x=l(64824),h=l(87804),E=l(32602);function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},D.apply(this,arguments)}const g=e=>s().createElement(E.c,D({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),s().createElement(E.c.Header,{closeButton:!0},s().createElement(E.c.Title,{id:"contained-modal-title-vcenter"},"Tracking Details")),s().createElement(E.c.Body,null,s().createElement("div",{className:"mx-auto w-fit"},e.trackingData.map((e=>s().createElement("div",{className:"mb-12 w-[500px]"},s().createElement("p",{className:"mb-0 text-[18px]"},null==e?void 0:e.activity),s().createElement("p",{className:"mb-0 text-xs"},s().createElement("strong",null,"Date : "),null==e?void 0:e.date),s().createElement("p",{className:"mb-0 text-xs"},s().createElement("strong",null,"Location : "),null==e?void 0:e.location)))))));var f=l(38467);const N=()=>{const{seller:e}=(0,d.w1)((e=>e.seller)),{shippingOrders:t}=(0,d.w1)((e=>e.shipping)),{isLoadingShipping:l}=(0,d.w1)((e=>e.shipping)),{orders:n,isLoading:i}=(0,d.w1)((e=>e.order)),{ConvertCurrency:E}=(0,f.c)(),D=(0,d.OY)();(0,a.useEffect)((()=>{D((0,c.At)(e._id)),D((0,u.g)(e._id))}),[e,D]);const[N,w]=(0,a.useState)([]),[_,y]=(0,a.useState)(!1),[k,S]=(0,a.useState)(!1),[C,I]=(0,a.useState)(null),[A,O]=(0,a.useState)(null),[L,P]=(0,a.useState)([]),[T,j]=(0,a.useState)(null),[H,Y]=(0,a.useState)(!0),[R,U]=(0,a.useState)({}),[B,q]=(0,a.useState)(!1),[z,F]=(0,a.useState)([]),G=(0,m.U)();(0,a.useEffect)((()=>{(async()=>{let l=[];await n.map((a=>{var s;const n=null==a||null===(s=a._id)||void 0===s?void 0:s.slice(0,8),i=null==t?void 0:t.find((e=>(null==e?void 0:e.channel_order_id)===n));if(i){var d;const t=null==a||null===(d=a.sellerCart)||void 0===d?void 0:d.find((t=>(null==t?void 0:t.sellerID)===(null==e?void 0:e._id)));t&&l.push({shipDetails:i,orderDetails:t,id:a._id})}})),w(l)})()}),[n,null==e?void 0:e._id,t]);const W=async(t,l,a)=>{t.preventDefault();try{const t=e._id;await r.c.post("".concat(v.Yb,"/shipping/request-pickup"),{sellerID:t,orderID:l,shipmentID:a}),p.cp.success("Requested Successfully for Shipment Pickup"),D((0,c.At)(e._id)),D((0,u.g)(e._id))}catch(e){p.cp.error(e.response.data.message)}},M=async(t,l,a,s)=>{t.preventDefault();try{const t=e._id;await r.c.post("".concat(v.Yb,"/shipping/generateAWB"),{orderID:l,shippmentID:a,courierID:s,sellerID:t}),p.cp.success("generated awb successfully"),D((0,c.At)(e._id)),D((0,u.g)(e._id))}catch(e){p.cp.error(e.response.data.message)}},V=async(t,l)=>{t.preventDefault();try{const t=e._id,{data:a}=await r.c.post("".concat(v.Yb,"/shipping/generateInvoice"),{sellerID:t,orderID:l}),s=document.createElement("a");s.href=a.invoiceURL,s.download="invoice.pdf",document.body.appendChild(s),s.click(),document.body.removeChild(s),p.cp.success("Invoice Downloaded"),D((0,c.At)(e._id)),D((0,u.g)(e._id))}catch(e){p.cp.error(e.response.data.message)}},J=async(t,l,a)=>{t.preventDefault();try{const t=e._id;await r.c.post("".concat(v.Yb,"/shipping/cancelShipmentOrder"),{sellerID:t,orderID:l,id:a}),p.cp.success("Shipment Order Canceled Successfully"),D((0,c.At)(e._id)),D((0,u.g)(e._id))}catch(e){p.cp.error(e.response.data.message)}},K=async(t,l)=>{t.preventDefault();try{const t=e._id,{data:a}=await r.c.post("".concat(v.Yb,"/shipping/generateLabel"),{sellerID:t,shipmentID:l}),s=document.createElement("a");s.href=a.label_url,s.download="invoice.pdf",document.body.appendChild(s),s.click(),document.body.removeChild(s),p.cp.success("Label Downloaded"),D((0,c.At)(e._id)),D((0,u.g)(e._id))}catch(e){p.cp.error(e.response.data.message)}};return s().createElement(s().Fragment,null,i&&l?s().createElement(b.c,null):s().createElement("div",{className:"w-full mx-6 my-6"},s().createElement("div",{className:"w-full"},s().createElement("div",{className:"w-full rounded my-2 bg-[#f4f4f4] p-4 flex justify-between"},s().createElement("p",{className:"text-xs font-semibold mb-0"},"Order Details"),s().createElement("p",{className:"text-xs font-semibold mb-0"},"Customer Details"),s().createElement("p",{className:"text-xs font-semibold mb-0"},"Package Details"),s().createElement("p",{className:"text-xs font-semibold mb-0"},"Payment"),s().createElement("p",{className:"text-xs font-semibold mb-0"},"Pickup Address"),s().createElement("p",{className:"text-xs font-semibold mb-0"},"Status"),s().createElement("p",{className:"text-xs font-semibold mb-0"},"Shipping Details"),s().createElement("p",{className:"text-xs font-semibold mb-0"},"Action")),(null==N?void 0:N.length)>0&&(null==N?void 0:N.map(((t,l)=>{var a,n,i,d,c,u,m,b,x,h,D,g,f,_,k,C,A,L,T,H,R,B,z,Q,X,Z,$,ee;return s().createElement("div",{className:"w-full rounded my-2 bg-[#f4f4f4] p-4 "},s().createElement("div",{key:l,className:"flex justify-between"},s().createElement("div",{className:"order-detail width"},s().createElement("p",{className:"text-xs"},s().createElement("span",{className:"font-semibold"},"ID : "),null==t||null===(a=t.shipDetails)||void 0===a?void 0:a.id),s().createElement("p",{className:"text-xs"},s().createElement("span",{className:"font-semibold"},"SHIPPMENT ID : "),null==t||null===(n=t.orderDetails)||void 0===n||null===(n=n.shippingOrderDetails)||void 0===n?void 0:n.shipment_id),s().createElement("p",{className:"text-xs"},s().createElement("span",{className:"font-semibold"},"CHANNEL ORDER_ID :"," "),null==t||null===(i=t.shipDetails)||void 0===i?void 0:i.channel_order_id),s().createElement("p",{className:"text-xs"},s().createElement("span",{className:"font-semibold"},"CHANNEL_ID : "),null==t||null===(d=t.shipDetails)||void 0===d?void 0:d.channel_id),s().createElement("p",{className:"text-xs"},null==t||null===(c=t.shipDetails)||void 0===c?void 0:c.created_at)),s().createElement("div",{className:"customer-detail w-[125px]"},s().createElement("p",{className:"text-xs"},null==t||null===(u=t.shipDetails)||void 0===u?void 0:u.customer_name),s().createElement("p",{className:"text-xs"},null==t||null===(m=t.shipDetails)||void 0===m?void 0:m.customer_email),s().createElement("p",{className:"text-xs"},null==t||null===(b=t.shipDetails)||void 0===b?void 0:b.customer_phone)),s().createElement("div",{className:"package width"},s().createElement("p",{className:"text-xs"},s().createElement("span",{className:"font-semibold"},"Dead weight : "),null==t||null===(x=t.shipDetails)||void 0===x?void 0:x.shipments[0].weight,"kg"),s().createElement("p",{className:"text-xs"},null==t||null===(h=t.shipDetails)||void 0===h?void 0:h.shipments[0].dimensions," (cm)"),s().createElement("p",{className:"text-xs"},s().createElement("span",{className:"font-semibold"},"Volumetric weight :"," "),null==t||null===(D=t.shipDetails)||void 0===D?void 0:D.shipments[0].volumetric_weight,"kg")),s().createElement("div",{className:"payment width"},s().createElement("p",{className:"text-xs"},null==G||null===(g=G.currency)||void 0===g?void 0:g.Symbol," ",E(null==t||null===(f=t.shipDetails)||void 0===f?void 0:f.total)),s().createElement("p",{className:"text-xs font-semibold rounded-sm ".concat("cod"===(null==t||null===(_=t.shipDetails)||void 0===_?void 0:_.payment_method)?"text-red-600 bg-red-200":"text-green-600 bg-green-200","  w-fit p-1 px-2")},null==t||null===(k=t.shipDetails)||void 0===k?void 0:k.payment_method)),s().createElement("div",{className:"addreses w-[125px]"},s().createElement("p",{className:"text-xs mb-1"},null==t||null===(C=t.shipDetails)||void 0===C?void 0:C.pickup_address_detail.pickup_code),s().createElement("p",{className:"text-xs mb-1"},null==t||null===(A=t.shipDetails)||void 0===A?void 0:A.pickup_address_detail.address),s().createElement("p",{className:"text-xs mb-1"},null==t||null===(L=t.shipDetails)||void 0===L?void 0:L.pickup_address_detail.state," -"," ",null==t||null===(T=t.shipDetails)||void 0===T?void 0:T.pickup_address_detail.pin_code),s().createElement("p",{className:"text-xs mb-1"},null==t||null===(H=t.shipDetails)||void 0===H?void 0:H.pickup_address_detail.phone)),s().createElement("div",{className:"status width"},s().createElement("p",{className:"text-xs font-semibold rounded-sm text-green-600 bg-green-200 w-fit p-1 px-2"},null==t||null===(R=t.shipDetails)||void 0===R?void 0:R.status)),s().createElement("div",{className:"courier"},s().createElement("p",{className:"text-xs mb-1"},null==t||null===(B=t.orderDetails)||void 0===B||null===(B=B.response)||void 0===B||null===(B=B.orders)||void 0===B?void 0:B.courier_name),s().createElement("p",{className:"text-xs mb-1"},s().createElement("strong",null,"ETD : "),null==t||null===(z=t.orderDetails)||void 0===z||null===(z=z.response)||void 0===z||null===(z=z.orders)||void 0===z?void 0:z.etd),s().createElement("p",{className:"text-xs mb-1"},s().createElement("strong",null,"Shipping : "),null==G||null===(Q=G.currency)||void 0===Q?void 0:Q.Symbol," ",E(null==t||null===(X=t.orderDetails)||void 0===X||null===(X=X.response)||void 0===X||null===(X=X.orders)||void 0===X?void 0:X.rate))),s().createElement("div",{className:"courier flex flex-col gap-2"},s().createElement("button",{className:"text-white bg-blue-600 p-1 rounded-sm text-xs",onClick:e=>{var l,a;M(e,null==t?void 0:t.id,null==t||null===(l=t.orderDetails)||void 0===l||null===(l=l.shippingOrderDetails)||void 0===l?void 0:l.shipment_id,null==t||null===(a=t.orderDetails)||void 0===a||null===(a=a.response)||void 0===a||null===(a=a.orders)||void 0===a?void 0:a.courier_company_id)}},"Generate AWB"),null!=t&&null!==(Z=t.orderDetails)&&void 0!==Z&&Z.awbDetails?s().createElement("button",{className:"text-white bg-blue-600 p-1 rounded-sm text-xs",onClick:e=>{var l;W(e,null==t?void 0:t.id,null==t||null===(l=t.orderDetails)||void 0===l||null===(l=l.shippingOrderDetails)||void 0===l?void 0:l.shipment_id)}},"Ship now"):s().createElement("button",{className:"text-white bg-blue-600 p-1 rounded-sm text-xs opacity-20 "},"Ship now"))),s().createElement("div",{className:"flex space-x-3 rounded"},s().createElement("button",{className:"w-fit p-1 bg-green-200 border-1 border-green-600 text-green-600 font-semibold rounded-sm text-xs",onClick:e=>{var l;V(e,null==t||null===(l=t.shipDetails)||void 0===l?void 0:l.id)}},"Download Invoice"),(null==t||null===($=t.orderDetails)||void 0===$?void 0:$.awbDetails)&&s().createElement("button",{className:"w-fit p-1 bg-green-200 border-1 border-green-600 text-green-600 font-semibold rounded-sm text-xs",onClick:e=>{var l;K(e,null==t||null===(l=t.orderDetails)||void 0===l||null===(l=l.shippingOrderDetails)||void 0===l?void 0:l.shipment_id)}},"Download Label"),s().createElement("button",{className:"w-fit p-1 bg-blue-200 text-blue-600 border-1 border-blue-600 font-semibold rounded-sm text-xs",onClick:e=>{(async(e,t)=>{e.preventDefault(),y(!0),Y(!0),U(t)})(e,null==t?void 0:t.shipDetails)}},"Update Customer Delivery Address"),s().createElement("button",{className:"w-fit p-1 bg-blue-200 text-blue-600 border-1 border-blue-600 font-semibold rounded-sm text-xs",onClick:e=>{(async(e,t)=>{e.preventDefault(),y(!0),Y(!1),U(t)})(e,null==t?void 0:t.shipDetails)}},"Updated Pickup Location"),s().createElement("button",{className:"w-fit p-1 bg-red-300 text-red-600 border-1 border-red-600 font-semibold rounded-sm text-xs",onClick:e=>{var l;J(e,null==t||null===(l=t.shipDetails)||void 0===l?void 0:l.id,null==t?void 0:t.id)}},"Cancel Order"),s().createElement("button",{className:"w-fit p-1 bg-red-300 text-red-600 border-1 border-red-600 font-semibold rounded-sm text-xs",onClick:e=>{var l,a;((e,t,l,a,s)=>{e.preventDefault(),S(!0),I(t),O(l),P(a),j(s)})(e,null==t||null===(l=t.shipDetails)||void 0===l?void 0:l.products,null==t?void 0:t.shipDetails,null==t||null===(a=t.orderDetails)||void 0===a?void 0:a.products,null==t?void 0:t.id)}},"Return Order"),(null==t||null===(ee=t.orderDetails)||void 0===ee?void 0:ee.awbDetails)&&s().createElement(s().Fragment,null,s().createElement("button",{className:"w-fit p-1 bg-blue-200 text-blue-600 border-1 border-blue-600 font-semibold rounded-sm text-xs",onClick:l=>{var a,s;return(async(t,l,a)=>{try{var s,n;const t=e._id,{data:i}=await r.c.post("".concat(v.Yb,"/shipping/awb-tracking"),{sellerID:t,awbCode:l}),d=null==i||null===(s=i.tracking_data)||void 0===s||null===(s=s.shipment_track[0])||void 0===s?void 0:s.current_Status,o=null==i||null===(n=i.tracking_data)||void 0===n?void 0:n.shipment_track_activities,c=N.findIndex((e=>{var t;return(null==e||null===(t=e.shipDetails)||void 0===t?void 0:t.id)===a})),u=[...N];u[c].currentStatus=d,u[c].awbTrackingActivity=o,w(u)}catch(e){p.cp.error(e.response.data.message)}})(0,null==t||null===(a=t.orderDetails)||void 0===a||null===(a=a.awbDetails)||void 0===a||null===(a=a.response)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.awb_code,null==t||null===(s=t.shipDetails)||void 0===s?void 0:s.id)}},"Get Tracking Status"),(null==t?void 0:t.currentStatus)&&s().createElement("p",{className:"text-xs mb-1"},s().createElement("strong",null,"status : "),null==t?void 0:t.currentStatus),(null==t?void 0:t.awbTrackingActivity)&&s().createElement(o.opb,{size:20,className:"cursor-pointer",onClick:e=>{((e,t)=>{e.preventDefault(),q(!0),F(t)})(e,null==t?void 0:t.awbTrackingActivity)}}))))})))),s().createElement(h.c,{show:k,onHide:()=>S(!1),orderItems:C,orderDetails:A,orderProducts:L,orderID:T}),s().createElement(g,{show:B,onHide:()=>q(!1),trackingData:z}),s().createElement(x.c,{show:_,onHide:()=>y(!1),updateAddressType:H,addressUpdatedData:R})))};var w=l(93736);const _=()=>s().createElement("div",null,s().createElement(n.c,null),s().createElement("div",{className:"flex justify-between w-full dasboard-user-width-mobile"},s().createElement("div",{className:"800px:w-[330px] dashboard-side-bar-res"},s().createElement(i.c,{active:18})),s().createElement("div",{className:"w-full justify-center flex dashboard-side-bar-data-view"},s().createElement(N,{active:21}))),s().createElement(w.c,null))}}]);