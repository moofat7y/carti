import{r as a,X as x,j as e,b as n,d as p}from"./index-a646533f.js";const g=()=>{const[r,l]=a.useState(null),[o,d]=a.useState(!1),{id:c}=x(),i=async t=>{try{d(!0);const s=await p.get(`/orders/${t}`);console.log(s),l(s.data[0][0]),d(!1)}catch(s){d(!1),console.log(s)}};return a.useEffect(()=>{c&&i(c)},[]),a.useEffect(()=>{r&&window.print()},[r]),e.jsx(e.Fragment,{children:o&&!r?e.jsx("div",{className:"h-[8vh] flex items-center justify-center",children:e.jsx(n.Spinner,{color:"purple"})}):r?e.jsx("div",{className:"data-table flex flex-col md:flex-row justify-between p-4 gap-8",children:e.jsxs("table",{id:"invoice-table",className:"w-full text-sm text-gray-500 text-right",children:[e.jsx("thead",{className:"text-xs text-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-3 py-3",children:"المنتج"}),e.jsx("th",{scope:"col",className:"px-3 py-3",children:"الكمية"}),e.jsx("th",{scope:"col",className:"px-3 py-3",children:"السعر"}),e.jsx("th",{scope:"col",className:"px-3 py-3",children:"المجموع"})]})}),e.jsx("tbody",{children:r.items.map(t=>e.jsxs("tr",{className:"bg-white dark:bg-gray-800 border-t border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[e.jsx("th",{scope:"row",className:"flex items-center gap-3 px-3 py-4 text-gray-900 whitespace-nowrap",children:e.jsx("div",{className:"",children:e.jsx("div",{className:"text-sm font-semibold text-purple-700 hover:text-purple-600",children:t.product_id.name})})}),e.jsx("td",{className:"px-3 py-4 font-semibold text-gray-400 text-right",children:t.quantity}),e.jsxs("td",{className:"px-3 py-4 text-gray-400",children:[t.product_id.price," ج.م"]}),e.jsxs("td",{className:"px-3 py-4 font-medium text-purple-700",children:[t.quantity*t.product_id.price," ج.م"]})]},t.id))}),e.jsxs("tfoot",{children:[e.jsxs("tr",{className:"bg-white dark:bg-gray-800 border-t border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[e.jsx("td",{className:"px-3 py-2 font-semibold text-gray-400 text-right",colSpan:"3",children:"المجموع الفرعي"}),e.jsxs("td",{className:"px-3 py-2 font-semibold text-gray-400 text-right",children:[r.invoices.subtotal," ج.م"]})]}),e.jsxs("tr",{className:"bg-white dark:bg-gray-800 border-t border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[e.jsx("td",{className:"px-3 py-2 font-semibold text-gray-400 text-right",colSpan:"3",children:"الضريبه"}),e.jsxs("td",{className:"px-3 py-2 font-semibold text-gray-400 text-right",children:[r.invoices.tax," %"]})]}),e.jsxs("tr",{className:"bg-white dark:bg-gray-800 border-t border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[e.jsx("td",{className:"px-3 py-2 font-semibold text-gray-400 text-right",colSpan:"3",children:"المجموع الكلي"}),e.jsxs("td",{className:"px-3 py-2 font-semibold text-gray-400 text-right",children:[r.invoices.total," ج.م"]})]})]})]})}):e.jsx("div",{})})};export{g as default};