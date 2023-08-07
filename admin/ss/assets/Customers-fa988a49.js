import{r as x,a as h,f as o,j as e,p,e as j,g as u,b as a,z as f,P as b,Q as y,S as N,F as k}from"./index-a646533f.js";import{B as v}from"./BreadCrumbs-b9ca7c48.js";import{a as w,P as C}from"./ProdFilter-37790635.js";import{P as M}from"./index.esm-fb358e0a.js";import{a as P}from"./index.esm-041452e2.js";import{P as F}from"./Pagination-eee932df.js";const S=({customer:s,setSelectedCustomer:t,selectedCustomer:c})=>(x.useState(!1),h(),o(),e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[e.jsx("td",{className:"w-4 p-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{id:s.id,onChange:l=>l.target.checked?t(i=>[...i,+l.target.id]):t(i=>i.filter(n=>n!==+l.target.id)),type:"checkbox",checked:c.findIndex(l=>l===s.id)>=0,className:"w-4 h-4 text-blue-600 bg-gray-100 bcustomer-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bcustomer-gray-600 cursor-pointer"}),e.jsx("label",{htmlFor:s.id,className:"sr-only",children:"checkbox"})]})}),e.jsxs("td",{className:"flex gap-2 items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white",children:[e.jsx("img",{className:"w-10 h-10 rounded-md object-contain",loading:"lazy",src:s.image?`https://cartyi.com/storage/images/customers/${s.image}`:p,alt:s.name}),e.jsxs("div",{className:"",children:[e.jsx("div",{className:"text-sm font-semibold",children:s.name}),e.jsxs("div",{className:"text-sm",children:[s.id,"#"]})]})]}),e.jsx("td",{className:"px-6 min-w-[150px] py-4",children:s.email}),e.jsx("td",{className:"px-6  py-4",children:s.phone}),e.jsx("td",{className:"px-6  py-4",children:new Date(s.created_at).toLocaleDateString()})]})})),B=()=>{const[s,t]=x.useState([]),{customers:c,from:l,to:i,current:n}=j(r=>r.customer),d=o(),m=async()=>{s.length>0&&(await d(y({ids:s})),t([]))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 flex justify-between w-full py-3 px-[18px]",children:[e.jsx("div",{className:"col flex items-center gap-2",children:e.jsxs("div",{className:"text flex items-center gap-1",children:[e.jsx(u,{className:"mx-auto text-gray-700 text-2xl"}),e.jsx("p",{className:"my-1 font-semibold",children:"العملاء"}),e.jsxs("span",{className:"text-xs mr-1 text-gray-500",children:["(",c.length," عميل)"]})]})}),e.jsx("div",{className:"col",children:e.jsxs(a.Menu,{placement:"bottom-end",children:[e.jsx(a.MenuHandler,{children:e.jsxs("div",{className:"border select-none border-purple-500 rounded-sm p-2 flex items-center gap-1 cursor-pointer text-xs",children:[e.jsx(P,{}),"تحرير سريع"]})}),e.jsx(a.MenuList,{className:"p-0",children:e.jsxs(a.MenuItem,{onClick:()=>m(),className:"flex items-center py-3 gap-2",children:[e.jsx(f,{}),"حذف من مجموعة"]})})]})})]}),e.jsxs("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:[e.jsxs("table",{className:"w-full text-sm text-right text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"p-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{id:"checkbox-all",onChange:r=>r.target.checked?t(D=>c.map(g=>g.id)):t([]),type:"checkbox",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e.jsx("label",{htmlFor:"checkbox-all",className:"sr-only",children:"checkbox"})]})}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"اسم العميل"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"البريد الالكتروني"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"رقم الهاتف"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"التاريخ"})]})}),e.jsx("tbody",{children:c.map(r=>e.jsx(S,{customer:r,setSelectedCustomer:t,selectedCustomer:s},r.id))})]}),e.jsx(F,{from:l,to:i,current:n,action:r=>d(b({page:r}))})]})]})},z=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"clients-list",children:e.jsxs("div",{className:"container",children:[e.jsx(v,{links:[{text:"العملاء",href:"/customers"}]}),e.jsx("div",{className:"group-client mt-5",children:e.jsxs("div",{className:"title flex items-center gap-2 text-base font-bold text-gray-600",children:[e.jsx(w,{className:"text-xl -mb-1"}),e.jsx("h2",{className:"",children:"مجموعات العملاء"}),e.jsx("span",{className:"text-xs text-gray-500",children:"(4 مجموعات)"})]})}),e.jsxs("div",{className:"mt-4 flex justify-between items-center mb-5",children:[e.jsxs(a.Button,{className:"px-2 md:px-6 flex items-center gap-2 cursor-pointer",color:"purple",children:[e.jsx(N,{className:"-mb-1"}),"عميل جديد"]}),e.jsx("div",{className:"btn",children:e.jsxs("div",{className:"flex gap-1 text-sm font-medium text-gray-500",children:[e.jsx(C,{}),e.jsxs(a.Menu,{placement:"bottom-end",children:[e.jsx(a.MenuHandler,{children:e.jsxs(a.Button,{color:"purple",variant:"text",className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(M,{}),"خدمات"]})}),e.jsx(a.MenuList,{className:"p-0",children:e.jsxs("a",{href:"#",className:"flex gap-2 items-center w-full p-3",children:[e.jsx(k,{}),"استيراد العملاء"]})})]})]})})]}),e.jsx(B,{})]})})});export{z as default};