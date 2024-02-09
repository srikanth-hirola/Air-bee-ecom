"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([[9362],{89362:(e,l,t)=>{t.r(l),t.d(l,{default:()=>N});var s=t(11504),a=t.n(s),n=t(27768),i=t(53740),r=t(96800),d=t(66564),o=t(89340),c=t(85704),m=t(60580),u=t(87804),p=t(64824),v=t(85976),x=t(91864),h=t(73467),b=t(38467);const E=()=>{const{seller:e}=(0,r.w1)((e=>e.seller)),{returnShippingOrders:l}=(0,r.w1)((e=>e.shipping)),{isLoadingShipping:t}=(0,r.w1)((e=>e.shipping)),{orders:n,isLoading:i}=(0,r.w1)((e=>e.order)),{ConvertCurrency:E}=(0,b.c)(),D=(0,v.U)(),N=(0,r.OY)();(0,s.useEffect)((()=>{N((0,x.At)(e._id)),N((0,h.k)(e._id))}),[e,N]);const[f,g]=(0,s.useState)([]),[w,_]=(0,s.useState)(!1),[y,k]=(0,s.useState)(!1);(0,s.useEffect)((()=>{(async()=>{let t=[];await n.map((s=>{var a;const n=null==s||null===(a=s.sellerCart)||void 0===a?void 0:a.find((l=>(null==l?void 0:l.sellerID)===(null==e?void 0:e._id)));if(n){const e=null==l?void 0:l.find((e=>{var l;return(null==e?void 0:e.channel_order_id)===(null==n||null===(l=n.shippingOrderDetails)||void 0===l?void 0:l.order_id)}));e&&t.push({shipDetails:e,orderDetails:n,id:s._id})}})),g(t)})()}),[n,l,null==e?void 0:e._id]);const I=async(l,t,s)=>{l.preventDefault();try{const l=e._id;await d.c.post("".concat(c.Yb,"/shipping/request-pickup"),{sellerID:l,orderID:t,shipmentID:s}),o.cp.success("Requested Successfully for Shipment Pickup"),N((0,x.At)(e._id)),N((0,h.g)(e._id))}catch(e){o.cp.error(e.response.data.message)}},O=async(l,t,s,a)=>{l.preventDefault();try{const l=e._id;await d.c.post("".concat(c.Yb,"/shipping/generateReturnAWB"),{orderID:t,shippmentID:s,courierID:a,sellerID:l}),o.cp.success("generated return awb successfully"),N((0,x.At)(e._id)),N((0,h.g)(e._id))}catch(e){o.cp.error(e.response.data.message)}},S=async(l,t,s)=>{l.preventDefault();try{const l=e._id;await d.c.post("".concat(c.Yb,"/shipping/cancelShipmentOrder"),{sellerID:l,orderID:t,id:s}),o.cp.success("Shipment Order Canceled Successfully"),N((0,x.At)(e._id)),N((0,h.g)(e._id))}catch(e){o.cp.error(e.response.data.message)}},C=async(l,t,s)=>{l.preventDefault();try{const l=e._id;await d.c.post("".concat(c.Yb,"/shipping//get-return-order-shippingCharge"),{returnOrderID:t,orderID:s,sellerID:l}),N((0,x.At)(e._id)),N((0,h.g)(e._id))}catch(e){o.cp.error(e.response.data.message)}};return a().createElement(a().Fragment,null,i&&t?a().createElement(m.c,null):a().createElement("div",{className:"w-full mx-6 my-6"},a().createElement("div",{className:"w-full"},a().createElement("div",{className:"w-full rounded my-2 bg-[#f4f4f4] p-4 flex justify-between"},a().createElement("p",{className:"text-xs font-semibold mb-0"},"Order Details"),a().createElement("p",{className:"text-xs font-semibold mb-0"},"Customer Details"),a().createElement("p",{className:"text-xs font-semibold mb-0"},"Package Details"),a().createElement("p",{className:"text-xs font-semibold mb-0"},"Payment"),a().createElement("p",{className:"text-xs font-semibold mb-0"},"Pickup Address"),a().createElement("p",{className:"text-xs font-semibold mb-0"},"Status"),a().createElement("p",{className:"text-xs font-semibold mb-0"},"Shipping Details"),a().createElement("p",{className:"text-xs font-semibold mb-0"},"Action")),(null==f?void 0:f.length)>0&&(null==f?void 0:f.map(((e,l)=>{var t,s,n,i,r,d,o,c,m,u,v,x,h,b,N,f,g,y,k,A,R,P,H,Y,j,L,q,B,F;return a().createElement("div",{className:"w-full rounded my-2 bg-[#f4f4f4] p-4 "},a().createElement("div",{key:l,className:"flex justify-between"},a().createElement("div",{className:"order-detail width"},a().createElement("p",{className:"text-xs"},a().createElement("span",{className:"font-semibold"},"ID : "),null==e||null===(t=e.shipDetails)||void 0===t?void 0:t.id),a().createElement("p",{className:"text-xs"},a().createElement("span",{className:"font-semibold"},"SHIPPMENT ID : "),null==e||null===(s=e.orderDetails)||void 0===s||null===(s=s.shippingOrderDetails)||void 0===s?void 0:s.shipment_id),a().createElement("p",{className:"text-xs"},a().createElement("span",{className:"font-semibold"},"CHANNEL ORDER_ID :"," "),null==e||null===(n=e.shipDetails)||void 0===n?void 0:n.channel_order_id),a().createElement("p",{className:"text-xs"},a().createElement("span",{className:"font-semibold"},"CHANNEL_ID : "),null==e||null===(i=e.shipDetails)||void 0===i?void 0:i.channel_id),a().createElement("p",{className:"text-xs"},null==e||null===(r=e.shipDetails)||void 0===r?void 0:r.created_at)),a().createElement("div",{className:"package width"},a().createElement("p",{className:"text-xs"},a().createElement("span",{className:"font-semibold"},"Dead weight : "),null==e||null===(d=e.shipDetails)||void 0===d?void 0:d.shipments[0].weight,"kg"),a().createElement("p",{className:"text-xs"},null==e||null===(o=e.shipDetails)||void 0===o?void 0:o.shipments[0].length," x ",null==e||null===(c=e.shipDetails)||void 0===c?void 0:c.shipments[0].height," x ",null==e||null===(m=e.shipDetails)||void 0===m?void 0:m.shipments[0].breadth),a().createElement("p",{className:"text-xs"},a().createElement("span",{className:"font-semibold"},"Volumetric weight :"," "),null==e||null===(u=e.shipDetails)||void 0===u?void 0:u.shipments[0].volumetric_weight,"kg")),a().createElement("div",{className:"customer-detail width"},a().createElement("p",{className:"text-xs"},null==e||null===(v=e.shipDetails)||void 0===v?void 0:v.customer_name),a().createElement("p",{className:"text-xs"},null==e||null===(x=e.shipDetails)||void 0===x?void 0:x.customer_email),a().createElement("p",{className:"text-xs"},null==e||null===(h=e.shipDetails)||void 0===h?void 0:h.customer_phone)),a().createElement("div",{className:"payment "},a().createElement("p",{className:"text-xs"},null==D||null===(b=D.currency)||void 0===b?void 0:b.Symbol," ",E(null==e||null===(N=e.shipDetails)||void 0===N?void 0:N.total)),a().createElement("p",{className:"text-xs font-semibold rounded-sm ".concat("cod"===(null==e||null===(f=e.shipDetails)||void 0===f?void 0:f.payment_method)?"text-red-600 bg-red-200":"text-green-600 bg-green-200","  w-fit p-1 px-2")},null==e||null===(g=e.shipDetails)||void 0===g?void 0:g.payment_method)),a().createElement("div",{className:"addreses w-[125px]"},a().createElement("p",{className:"text-xs mb-1"},null==e||null===(y=e.shipDetails)||void 0===y?void 0:y.pickup_person_name),a().createElement("p",{className:"text-xs mb-1"},null==e||null===(k=e.shipDetails)||void 0===k?void 0:k.pickup_person_phone),a().createElement("p",{className:"text-xs mb-1"},null==e||null===(A=e.shipDetails)||void 0===A?void 0:A.pickup_person_email),a().createElement("p",{className:"text-xs mb-1"},null==e||null===(R=e.shipDetails)||void 0===R?void 0:R.pickup_location),a().createElement("p",{className:"text-xs mb-1"},null==e||null===(P=e.shipDetails)||void 0===P?void 0:P.pickup_code)),a().createElement("div",{className:"status width"},a().createElement("p",{className:"text-xs font-semibold rounded-sm text-green-600 bg-green-200 w-fit p-1 px-2"},null==e||null===(H=e.shipDetails)||void 0===H?void 0:H.status)),a().createElement("div",{className:"courier"},null!=e&&null!==(Y=e.orderDetails)&&void 0!==Y&&Y.returnOrderResponse?a().createElement(a().Fragment,null,a().createElement("p",{className:"text-xs mb-1"},null==e||null===(j=e.orderDetails)||void 0===j||null===(j=j.returnOrderResponse)||void 0===j?void 0:j.courier_name),a().createElement("p",{className:"text-xs mb-1"},a().createElement("strong",null,"ETD : "),null==e||null===(L=e.orderDetails)||void 0===L||null===(L=L.returnOrderResponse)||void 0===L?void 0:L.etd),a().createElement("p",{className:"text-xs mb-1"},a().createElement("strong",null,"Shipping : "),null==D||null===(q=D.currency)||void 0===q?void 0:q.Symbol," ",E(null==e||null===(B=e.orderDetails)||void 0===B||null===(B=B.returnOrderResponse)||void 0===B?void 0:B.rate))," "):a().createElement("button",{className:"text-white bg-blue-600 p-1 rounded-sm text-xs",onClick:l=>{var t;return C(l,null==e||null===(t=e.shipDetails)||void 0===t?void 0:t.id,null==e?void 0:e.id)}},"Assign Courier")),a().createElement("div",{className:"courier flex flex-col gap-2"},a().createElement("button",{className:"text-white bg-blue-600 p-1 rounded-sm text-xs",onClick:l=>{var t,s;O(l,null==e?void 0:e.id,null==e||null===(t=e.orderDetails)||void 0===t||null===(t=t.shippingOrderDetails)||void 0===t?void 0:t.shipment_id,null==e||null===(s=e.orderDetails)||void 0===s||null===(s=s.returnOrderResponse)||void 0===s?void 0:s.courier_company_id)}},"Generate AWB"),null!=e&&null!==(F=e.orderDetails)&&void 0!==F&&F.awbDetails?a().createElement("button",{className:"text-white bg-blue-600 p-1 rounded-sm text-xs",onClick:l=>{var t;I(l,null==e?void 0:e.id,null==e||null===(t=e.orderDetails)||void 0===t||null===(t=t.shippingOrderDetails)||void 0===t?void 0:t.shipment_id)}},"Ship now"):a().createElement("button",{className:"text-white bg-blue-600 p-1 rounded-sm text-xs opacity-20"},"Ship now"))),a().createElement("div",{className:"flex space-x-3 rounded"},a().createElement("button",{className:"w-fit p-1 bg-blue-200 text-blue-600 border-1 border-blue-600 font-semibold rounded-sm text-xs",onClick:()=>_(!0)},"Edit Order"),a().createElement("button",{className:"w-fit p-1 bg-red-300 text-red-600 border-1 border-red-600 font-semibold rounded-sm text-xs",onClick:l=>{var t;S(l,null==e||null===(t=e.shipDetails)||void 0===t?void 0:t.id,null==e?void 0:e.id)}},"Cancel Order"),a().createElement(p.c,{show:w,onHide:()=>_(!1)})))})))),a().createElement(u.c,{show:y,onHide:()=>k(!1),orderItems:null,orderDetails:null,orderProducts:[],orderID:null})))};var D=t(93736);const N=()=>a().createElement("div",null,a().createElement(n.c,null),a().createElement("div",{className:"flex justify-between w-full dasboard-user-width-mobile"},a().createElement("div",{className:"800px:w-[330px] dashboard-side-bar-res"},a().createElement(i.c,{active:18})),a().createElement("div",{className:"w-full justify-center flex dashboard-side-bar-data-view"},a().createElement(E,{active:22}))),a().createElement(D.c,null))}}]);