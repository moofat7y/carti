import{r as c,a as m,f as n,j as e,L as p,e as h,g as j,b as s,z as g,a7 as u,S as N,F as y}from"./index-a646533f.js";import{B as b}from"./BreadCrumbs-b9ca7c48.js";import{a as f,P as v}from"./ProdFilter-37790635.js";import{P as w}from"./index.esm-fb358e0a.js";import{a as k}from"./index.esm-041452e2.js";import{P as I}from"./Pagination-eee932df.js";const S=({invoice:t,setSelectedInvoice:l,selectedInvoice:r})=>(c.useState(!1),m(),n(),e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[e.jsx("td",{className:"flex gap-2 items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white",children:e.jsxs(p,{to:`/orders/order-details/${t.order_id}`,children:["#",t.invoice_number]})}),e.jsxs("td",{className:"px-6 min-w-[150px] py-4",children:[t.tax," %"]}),e.jsxs("td",{className:"px-6  py-4",children:[t.subtotal," ج.م"]}),e.jsxs("td",{className:"px-6  py-4",children:[t.total," ج.م"]}),e.jsx("td",{className:"px-6  py-4",children:new Date(t.invoice_date).toLocaleDateString()})]})})),M=()=>{const[t,l]=c.useState([]),{invoices:r,from:i,to:x,current:d}=h(a=>a.invoice),o=n();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 flex justify-between w-full py-3 px-[18px]",children:[e.jsx("div",{className:"col flex items-center gap-2",children:e.jsxs("div",{className:"text flex items-center gap-1",children:[e.jsx(j,{className:"mx-auto text-gray-700 text-2xl"}),e.jsx("p",{className:"my-1 font-semibold",children:"التقارير"}),e.jsxs("span",{className:"text-xs mr-1 text-gray-500",children:["(",r.length," تقرير)"]})]})}),e.jsx("div",{className:"col",children:e.jsxs(s.Menu,{placement:"bottom-end",children:[e.jsx(s.MenuHandler,{children:e.jsxs("div",{className:"border select-none border-purple-500 rounded-sm p-2 flex items-center gap-1 cursor-pointer text-xs",children:[e.jsx(k,{}),"تحرير سريع"]})}),e.jsx(s.MenuList,{className:"p-0",children:e.jsxs(s.MenuItem,{onClick:()=>onSubmit(),className:"flex items-center py-3 gap-2",children:[e.jsx(g,{}),"حذف من مجموعة"]})})]})})]}),e.jsxs("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:[e.jsxs("table",{className:"w-full text-sm text-right text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"رقم الفاتوره"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"الضريبه"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"المجموع الفرعي"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"المجموع الكلي"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"التاريخ"})]})}),e.jsx("tbody",{children:r.map(a=>e.jsx(S,{invoice:a,setSelectedInvoice:l,selectedInvoice:t},a.id))})]}),e.jsx(I,{from:i,to:x,current:d,action:a=>o(u({page:a}))})]})]})},A=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"clients-list",children:e.jsxs("div",{className:"container",children:[e.jsx(b,{links:[{text:"التقارير",href:"/invoices"}]}),e.jsx("div",{className:"group-client mt-5",children:e.jsxs("div",{className:"title flex items-center gap-2 text-base font-bold text-gray-600",children:[e.jsx(f,{className:"text-xl -mb-1"}),e.jsx("h2",{className:"",children:"مجموعات العملاء"}),e.jsx("span",{className:"text-xs text-gray-500",children:"(4 مجموعات)"})]})}),e.jsxs("div",{className:"mt-4 flex justify-between items-center mb-5",children:[e.jsxs(s.Button,{className:"px-2 md:px-6 flex items-center gap-2 cursor-pointer",color:"purple",children:[e.jsx(N,{className:"-mb-1"}),"عميل جديد"]}),e.jsx("div",{className:"btn",children:e.jsxs("div",{className:"flex gap-1 text-sm font-medium text-gray-500",children:[e.jsx(v,{}),e.jsxs(s.Menu,{placement:"bottom-end",children:[e.jsx(s.MenuHandler,{children:e.jsxs(s.Button,{color:"purple",variant:"text",className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(w,{}),"خدمات"]})}),e.jsx(s.MenuList,{className:"p-0",children:e.jsxs("a",{href:"#",className:"flex gap-2 items-center w-full p-3",children:[e.jsx(y,{}),"استيراد العملاء"]})})]})]})})]}),e.jsx(M,{})]})})});export{A as default};
