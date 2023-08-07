import{R as i,r as g,u as j,f as c,j as e,b as s,T as y,M as f,U as N,V as C,e as v,W as S,K as w,k as B}from"./index-a646533f.js";import{B as F}from"./BreadCrumbs-b9ca7c48.js";import{b as I}from"./index.esm-041452e2.js";import{P as k}from"./Pagination-eee932df.js";const L=({cat:t})=>{const[l,a]=i.useState(!1),[o,n]=g.useState(!1),r=()=>a(!0),{register:d,handleSubmit:m,reset:p,formState:{errors:u}}=j({values:{name:t.name}}),x=c(),h=async b=>{n(!0),await x(N({id:t.id,name:b.name})),p(),n(!1),a(!1)};return e.jsxs(i.Fragment,{children:[e.jsx(s.IconButton,{onClick:r,color:"purple",variant:"outlined",children:e.jsx(y,{className:"text-md"})}),e.jsx(f,{open:l,setOpen:a,children:e.jsxs("form",{onSubmit:m(h),children:[e.jsx(s.CardHeader,{color:"purple",className:"mb-4 grid h-28 place-items-center bg-gradient-to-r from-purple-400 to-purple-500",children:e.jsx(s.Typography,{variant:"h3",color:"white",children:"تعديل"})}),e.jsx(s.CardBody,{className:"flex flex-col gap-4",children:e.jsx(s.Input,{...d("name",{required:!0}),variant:"standard",color:"purple",label:"اكتب اسم الفئة",placeholder:t.name,size:"lg",error:!!u.name})}),e.jsx(s.CardFooter,{className:"pt-0",children:e.jsx(s.Button,{onClick:r,fullWidth:!0,type:"submit",disabled:o,className:"text-lg bg-gradient-to-r from-purple-400 to-purple-500 hover:shadow-purple-200",children:"تعديل"})})]})})]})},O=({cat:t})=>{const[l,a]=g.useState(!1),o=c(),n=async()=>{a(!0),await o(C({id:t.id})),a(!1)};return e.jsxs("div",{className:"category flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg",children:[e.jsx("div",{className:"info flex gap-3",children:e.jsx("div",{className:"text flex flex-col justify-between gap-2",children:e.jsx("h2",{className:"text-lg text-gray-700",children:t.name})})}),e.jsx("div",{className:"events",children:e.jsxs("div",{className:"btn flex gap-2",children:[e.jsx(L,{cat:t}),e.jsx(s.IconButton,{disabled:l,onClick:()=>n(),color:"purple",children:e.jsx(I,{className:"text-md"})})]})})]})},E=()=>{const{categories:t,from:l,to:a,current:o}=v(r=>r.category),n=c();return e.jsx(e.Fragment,{children:t.length>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"categories-list flex flex-col gap-2",children:t==null?void 0:t.map(r=>e.jsx(O,{cat:r},r.id))}),e.jsx(k,{from:l,to:a,current:o,action:r=>n(S({page:r}))})]}):e.jsx("div",{children:"لا يوجد اصناف"})})},D=()=>{const[t,l]=i.useState(!1),[a,o]=g.useState(!1),n=()=>l(!0),{register:r,handleSubmit:d,reset:m,formState:{errors:p}}=j(),u=c(),x=async h=>{o(!0),await u(B(h)),m(),o(!1),l(!1)};return e.jsxs(i.Fragment,{children:[e.jsxs(s.Button,{onClick:n,color:"purple",className:"flex items-center gap-1 p-3 ",children:[e.jsx(w,{className:"-mb-1 text-xl"}),"اضافة فئة جديدة"]}),e.jsx(f,{open:t,setOpen:l,children:e.jsxs("form",{onSubmit:d(x),children:[e.jsx(s.CardHeader,{color:"purple",className:"mb-4 grid h-28 place-items-center bg-gradient-to-r from-purple-400 to-purple-500",children:e.jsx(s.Typography,{variant:"h3",color:"white",children:"اضافة فئة جديدة"})}),e.jsx(s.CardBody,{className:"flex flex-col gap-4",children:e.jsx(s.Input,{...r("name",{required:!0}),variant:"standard",color:"purple",label:"اكتب اسم الفئة",size:"lg",error:!!p.name})}),e.jsx(s.CardFooter,{className:"pt-0",children:e.jsx(s.Button,{onClick:n,fullWidth:!0,type:"submit",disabled:a,className:"text-lg bg-gradient-to-r from-purple-400 to-purple-500 hover:shadow-purple-200",children:"أضـف"})})]})})]})},W=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"categories",children:e.jsxs("div",{className:"container mx-auto ",children:[e.jsx(F,{links:[{text:"الاصناف",href:"/categories"}]}),e.jsx("div",{className:"btn-add flex justify-between items-center  mb-3",children:e.jsx("div",{className:"modal",children:e.jsx(D,{})})}),e.jsx(E,{})]})})});export{W as default};