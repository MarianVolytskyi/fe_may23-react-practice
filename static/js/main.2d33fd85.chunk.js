(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,a,c){},18:function(e,a,c){"use strict";c.r(a);var t=c(2),s=c(8),n=c.n(s),r=(c(14),c(15),c(6)),i=c(9),l=c(7),d=c(1),o=c.n(d),j=(c(16),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),h=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],b=c(0),x=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var a=h.find((function(a){return a.id===e.categoryId})),c=j.find((function(e){return a.ownerId===e.id}));return Object(l.a)(Object(l.a)({},e),{},{category:a,user:c})}));var m=function(){var e=Object(t.useState)("all"),a=Object(r.a)(e,2),c=a[0],s=a[1],n=Object(t.useState)(""),l=Object(r.a)(n,2),d=l[0],j=l[1],h=function(e,a,c){var t=Object(i.a)(e);if(c){var s=c.toLowerCase();t=t.filter((function(e){return e.name.toLowerCase().includes(s)}))}return"all"!==a&&(t=t.filter((function(e){return e.user.name===a}))),t}(x,c,d);return Object(b.jsx)("div",{className:"section",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"Product Categories"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsxs)("nav",{className:"panel",children:[Object(b.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(b.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(b.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",onClick:function(){s("all")},className:o()({"is-active":"all"===c}),children:"All"}),Object(b.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:function(){s("Roma")},className:o()({"is-active":"Roma"===c}),children:"Roma"}),Object(b.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:o()({"is-active":"Anna"===c}),onClick:function(){s("Anna")},children:"Anna"}),Object(b.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:function(){s("Max")},className:o()({"is-active":"Max"===c}),children:"Max"}),Object(b.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:function(){s("John")},className:o()({"is-active":"John"===c}),children:"John"})]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",value:d,onChange:function(e){return j(e.target.value)},placeholder:"Search"}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),d&&Object(b.jsx)("span",{className:"icon is-right",children:Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return j("")}})})]})}),Object(b.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(b.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(b.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(b.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(b.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(b.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){s("all"),j("")},children:"Reset all filters"})})]})}),Object(b.jsx)("div",{className:"box table-container",children:0===h.length?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})}):Object(b.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(b.jsx)("tbody",{children:h.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"Product",children:[Object(b.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(b.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(b.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(b.jsx)("td",{"data-cy":"ProductUser",className:o()({"has-text-link":"m"===e.user.sex,"has-text-danger":"f"===e.user.sex}),children:e.user.name})]},e.id)}))})]})})]})})};n.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2d33fd85.chunk.js.map