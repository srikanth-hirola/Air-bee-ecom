"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([[5118],{35118:(e,t,l)=>{l.r(t),l.d(t,{default:()=>y});var a=l(11504),r=l.n(a),n=l(27768),c=l(53740),o=l(93736),s=l(66564),i=l(83284),m=l(26460),u=l(40232),d=l(58130),p=l(94064),g=l(42760),b=l(45584),E=l(89340),v=l(85704);const f=()=>{const e=(0,i.W4)().id,[t,l]=(0,a.useState)({title:"",metaTitle:"",metaDescription:"",blogDescription:"",read_time:"",category:"",excerpt:"",large_thumb:[],body:"",slug:""}),[n,c]=(0,a.useState)(""),[o,f]=(0,a.useState)(!0);let y="".concat(v.Yb,"/blogs/blog/edit/").concat(e);(0,a.useEffect)((()=>{(async e=>{try{f(!1),await s.c.get(e).then((e=>{""===e.data?c("Notfound"):l({...e.data})})).catch((e=>{console.log(e)}))}catch(e){console.log(e)}finally{f(!0)}})(y)}),[]);const h=(0,i.i6)();return r().createElement(r().Fragment,null,o?r().createElement(g.c,null,r().createElement("div",null,"Notfound"===n?r().createElement("p",null,"No Blog is Available"):r().createElement(r().Fragment,null,r().createElement("div",{className:"col-md-12 sticky-top"},r().createElement("h4",null,"Admin Blog Edit Panel"),r().createElement(m.c,{variant:"outline-primary",className:"update_button",type:"submit",name:"sub",onClick:async l=>{l.preventDefault(),f(!0);try{await s.c.put("".concat(v.Yb,"/blogs/update/").concat(e),{blogEdit:t},{withCredentials:!0}),h("/dashboard"),E.cp.success("Updated Blog Successfully!")}catch(l){var a;E.cp.error(null==l||null===(a=l.response)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.message)}finally{f(!1)}}},"Update")),r().createElement(p.c,null,r().createElement(b.m,{blogData:t,setBlogData:l,_id:e}))))):r().createElement(u.c,{sx:{color:"#fff",zIndex:e=>e.zIndex.drawer+1},open:!0},r().createElement(d.c,{color:"inherit"})))},y=()=>r().createElement("div",null,r().createElement(n.c,{active:0}),r().createElement("div",{className:"flex justify-between w-full"},r().createElement("div",{className:"w-[80px] 800px:w-[330px] dashboard-side-bar-res"},r().createElement(c.c,{active:50})),r().createElement("div",{className:"w-full justify-center flex dashboard-side-bar-data-view"},r().createElement(f,null))),r().createElement(o.c,null))},45584:(e,t,l)=>{l.d(t,{m:()=>b});var a=l(11504),r=l.n(a),n=l(94064),c=l(43192),o=l.n(c),s=l(88096),i=l(26460),m=l(66564),u=l(76542),d=l(15896),p=l(89340),g=l(85704);const b=e=>{var t;let{blogData:l,setBlogData:c,_id:b}=e;const[E,v]=(0,a.useState)(""),[f,y]=(0,a.useState)([]);(0,a.useEffect)((()=>{(async()=>{try{const{data:e}=await m.c.get("".concat(g.Yb,"/blogs/category"));y(null==e?void 0:e.categories)}catch(e){console.log(e)}})()}),[]);const h=(0,a.useRef)(null),w=(0,a.useMemo)((()=>({readonly:!1,enableDragAndDropFileToEditor:!0,uploader:{insertImageAsBase64URI:!0},controls:{font:{list:{"Roboto Medium,Arial,sans-serif":"Roboto"}}}})),[]),x=e=>{const{value:t,name:a}=e.target;let r=JSON.parse(JSON.stringify(l));r[a]=t,c(r)};return r().createElement("div",{className:"form-group"},r().createElement(p.ox,{position:"top-right",reverseOrder:!1,toastOptions:{duration:3e3,style:{position:"relative",top:"80px"}}}),r().createElement(n.c.Group,{className:"mb-3",controlId:"formBasicPassword"},r().createElement(n.c.Label,null,"Blog Title"),r().createElement(n.c.Control,{name:"title",value:l.title,onChange:x,type:"text",placeholder:"Blog Title",required:!0})),r().createElement("br",null),r().createElement(n.c.Group,{className:"mb-3",controlId:"formBasicPassword"},r().createElement(n.c.Label,null,"URL slug"),r().createElement(n.c.Control,{name:"slug",value:l.slug,onChange:x,type:"text",placeholder:"URL slug",required:!0}),r().createElement(i.c,{variant:"outline-primary",className:"update_button mt-3",type:"submit",name:"sub",onClick:e=>{if(e.preventDefault(),null==l||!l.title)return void alert("Title is required!");const t=(0,s.c)(null==l?void 0:l.title);c({...l,slug:t})}},"Generate")),r().createElement("br",null),r().createElement(n.c.Group,{className:"mb-3",controlId:"formBasicPassword"},r().createElement(n.c.Label,null,"Meta Title"),r().createElement(n.c.Control,{name:"metaTitle",value:l.metaTitle,onChange:x,type:"text",placeholder:"Meta Title",required:!0})),r().createElement("br",null),r().createElement(n.c.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1"},r().createElement(n.c.Label,null,"Meta Description"),r().createElement(n.c.Control,{placeholder:"Meta Description",as:"textarea",rows:5,name:"metaDescription",value:l.metaDescription,onChange:x,required:!0})),r().createElement(n.c.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1"},r().createElement(n.c.Label,null,"Post Description"),r().createElement(n.c.Control,{placeholder:"Post Description",as:"textarea",rows:5,name:"blogDescription",value:l.blogDescription,onChange:x,required:!0})),r().createElement("br",null),r().createElement(n.c.Group,{className:"mb-3",controlId:"formBasicPassword"},r().createElement(n.c.Label,null,"Read Time"),r().createElement(n.c.Control,{name:"read_time",value:l.read_time,onChange:x,type:"text",placeholder:"Read Time",required:!0})),r().createElement("br",null),r().createElement(n.c.Group,{className:"mb-3",controlId:"formBasicPassword"},r().createElement(n.c.Label,null,"Category"),r().createElement("div",{className:"row"},r().createElement("div",{className:"col-6"},r().createElement("select",{value:null==l?void 0:l.category,className:"category-select-dropDown",name:"category",onChange:x},r().createElement("option",{value:"",disabled:!0},"Select a Category"),null==f?void 0:f.map(((e,t)=>r().createElement("option",{key:t,value:null==e?void 0:e.category},null==e?void 0:e.category))))),r().createElement("div",{className:"col-6 d-flex justify-between gap-2"},r().createElement(n.c.Control,{name:"category",value:E,onChange:e=>v(e.target.value),type:"text",placeholder:"Add new Category",required:!0}),r().createElement("button",{variant:"outline-primary",className:"update_button btn btn-sm btn-primary",onClick:async e=>{e.preventDefault();try{await m.c.post("".concat(g.Yb,"/blogs/category"),{category:E},{withCredentials:!0});let e=[...f];e.push({category:E}),y(e),p.cp.success("Added Category successfully")}catch(e){var t;p.cp.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}}},"ADD")))),r().createElement("br",null),r().createElement(n.c.Group,{className:"mb-3",controlId:"formBasicPassword"},r().createElement(n.c.Label,null,"Excerpt"),r().createElement(n.c.Control,{name:"excerpt",value:l.excerpt,onChange:x,type:"text",placeholder:"Excerpt",required:!0})),r().createElement("br",null),r().createElement(n.c.Group,{controlId:"formFile",className:"mb-3"},r().createElement(n.c.Label,null,"Upload Image"),r().createElement(n.c.Control,{type:"file",size:"lg",name:"image",accept:".png, .jpg, .jpeg",onChange:e=>{const t=e.target.files,a=[],r=(e,r)=>{if(e.size<=512e4){const n=new FileReader;n.onload=()=>{const e=n.result;if(a[r]=e,a.filter(Boolean).length===t.length){let e=[...null==l?void 0:l.large_thumb].concat(a);c({...l,large_thumb:e})}},n.readAsDataURL(e)}else p.cp.error('File "'.concat(e.name,'" exceeds the size limit of 200 KB.'))};for(let e=0;e<t.length;e++)r(t[e],e)},multiple:!0}),r().createElement("div",{className:"blog-post-image-formInput-parent flex flex-wrap gap-3 my-3"},(null==l?void 0:l.large_thumb.length)>0&&(null==l||null===(t=l.large_thumb)||void 0===t?void 0:t.map(((e,t)=>r().createElement("div",{className:"blog-img-flex relative",key:t},r().createElement("div",{className:"blog-post-image-formInput w-[100px] h-[60px] border-1 rounded"},r().createElement("img",{src:null!=e&&e.public_id?null==e?void 0:e.url:e,alt:"blog-post",className:"w-full h-full object-cover"})),r().createElement("button",{className:"delete-btn absolute top-0 bg-red-200 rounded-br p-1",onClick:a=>{null!=e&&e.public_id?((e,t)=>{e.preventDefault(),window.confirm("uploaded Image will be deleted Permanently!")&&(async(e,t)=>{try{var a;await m.c.delete("".concat(g.Yb,"/blogs/delete-Img/").concat(e,"/").concat(t),{withCredentials:!0});let r={...l},n=[...r.large_thumb];n=null===(a=n)||void 0===a?void 0:a.filter((t=>(null==t?void 0:t.public_id)!==e)),r.large_thumb=n,c(r),p.cp.success("Image delete successfully!")}catch(e){var r;p.cp.error(null==e||null===(r=e.response)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.message)}})(t,b)})(a,null==e?void 0:e.public_id):((e,t)=>{e.preventDefault();let a={...l},r=[...a.large_thumb];r.splice(t,1),a.large_thumb=r,c(a)})(a,t)}},r().createElement(u.u,{icon:d._8k,style:{color:"#e10909",fontSize:"15px"}})))))))),r().createElement("br",null),r().createElement(n.c.Group,{className:"mb-3",controlId:"formBasicPassword"},r().createElement(n.c.Label,null,"Page Content"),r().createElement(o(),{ref:h,value:l.body,config:w,onBlur:e=>{c({...l,body:e})}})))}}}]);