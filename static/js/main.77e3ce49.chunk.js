(this["webpackJsonpreact-expense-tracker"]=this["webpackJsonpreact-expense-tracker"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(14),n(5)),s=n(2),i=n(1),r=(n(15),n(0)),u=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},j=n(9),o=(n(17),function(e){var t="0%";return e.maxValue>0&&(t="".concat(Math.round(e.value/e.maxValue*100),"%")),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),d=(n(18),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(o,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),b=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(j.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(r.jsx)(d,{dataPoints:n})},x=(n(19),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"}),Object(r.jsx)("option",{value:"2018",children:"2018"}),Object(r.jsx)("option",{value:"2017",children:"2017"})]})]})})}),O=(n(20),n(21),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})}),v=(n(22),function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(u,{className:"expense-item",children:[Object(r.jsx)(O,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["\u09f3",Number(parseFloat(e.amount).toFixed(2)).toLocaleString("en")]})]})]})})}),h=(n(23),function(e){return 0===e.items.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(r.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(r.jsx)(v,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),m=function(e){var t=Object(i.useState)("2020"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsxs)(u,{className:"expenses",children:[Object(r.jsx)(x,{selected:a,onChangeFilter:function(e){c(e)}}),Object(r.jsx)(b,{expenses:l}),Object(r.jsx)(h,{items:l})]})},p=n(7),f=(n(24),function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(""),u=Object(s.a)(l,2),j=u[0],o=u[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),x=b[0],O=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+j,date:new Date(x)};e.onSaveExpenseData(n),c(""),o(""),O("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",value:j,min:"0.01",step:"0.01",onChange:function(e){o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",value:x,min:"2017-01-01",max:"2022-12-31",onChange:function(e){O(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),N=(n(25),function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!a&&Object(r.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(r.jsx)(f,{onCancel:function(){c(!1)},onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})]})}),_=function(){var e=[{id:"e1",title:"Toilet Paper",amount:50,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:25e3,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:15e3,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:5e3,date:new Date(2021,5,12)}],t=Object(i.useState)(e),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{onAddExpense:function(e){c((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(m,{items:a})]})};c.a.render(Object(r.jsx)(_,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.77e3ce49.chunk.js.map