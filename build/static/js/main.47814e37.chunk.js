(this.webpackJsonp7_study=this.webpackJsonp7_study||[]).push([[0],{41:function(t,n,e){},42:function(t,n,e){"use strict";e.r(n);var c=e(2),r=e(17),o=e.n(r),a=e(8),u=e(3),i=e(0),s=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(i.jsxs)("li",{className:"note",children:[n.content,Object(i.jsx)("button",{onClick:e,children:c})]})},j=e(6),l=e.n(j),b="/api/notes/",f=function(){return l.a.get(b).then((function(t){return t.data}))},d=function(t){return l.a.post(b,t).then((function(t){return t.data}))},m=function(t,n){return l.a.put("".concat(b,"/").concat(t),n).then((function(t){return t.data}))},O=function(t){var n=t.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},h=function(){var t=Object(c.useState)([]),n=Object(u.a)(t,2),e=n[0],r=n[1],o=Object(c.useState)("a new note..."),j=Object(u.a)(o,2),l=j[0],b=j[1],h=Object(c.useState)(!0),p=Object(u.a)(h,2),v=p[0],g=p[1],x=Object(c.useState)(""),S=Object(u.a)(x,2),k=S[0],w=S[1];Object(c.useEffect)((function(){f().then((function(t){return r(t)}))}),[]),console.log("render",e.length," notes");var y=v?e:e.filter((function(t){return!0===t.important}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Notes"}),Object(i.jsx)(O,{message:k}),Object(i.jsx)("div",{children:Object(i.jsxs)("button",{onClick:function(){return g(!v)},children:["show ",v?"important":"all"]})}),Object(i.jsx)("ul",{children:y.map((function(t){return Object(i.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(a.a)(Object(a.a)({},n),{},{important:!n.important});m(t,c).then((function(n){return r(e.map((function(e){return e.id!==t?e:n})))})).catch((function(t){return w("Note ".concat(n.content," was already removed from server"))}))}(t.id)}},t.id)}))}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:l,date:(new Date).toISOString(),important:Math.random()>.5};d(n).then((function(t){r(e.concat(t)),b("")}))},children:[Object(i.jsx)("input",{value:l,onChange:function(t){console.log(t.target.value),b(t.target.value)}}),Object(i.jsx)("button",{type:"submit",children:"save"})]})]})};e(41);o.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.47814e37.chunk.js.map