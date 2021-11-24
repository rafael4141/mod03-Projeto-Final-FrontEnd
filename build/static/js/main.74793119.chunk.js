(this["webpackJsonpmod03-projeto-final-frontend"]=this["webpackJsonpmod03-projeto-final-frontend"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},25:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(9),s=a.n(r),i=(a(21),a(22),a(2)),l=a(0),o=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("nav",{className:"navbar fixed-top navbar-expand-sm navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:"To do List"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link","aria-current":"page",href:"../",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"/registration",children:"Cadastrar Tarefa"})})]})})]})})})},d=a(3),j=a.n(d),b=a(4),u=a(5),h=a(7),m=function(e){var t=e.data;return Object(l.jsx)(h.b,{to:"/view/".concat(t._id),className:"col",children:Object(l.jsx)("div",{className:"card text-white bg-dark mb-3",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:"Nome da Tarefa:"}),Object(l.jsx)("p",{className:"card-text",children:t.title}),Object(l.jsxs)("h5",{className:"card-title",children:["Prioridade:"," ",Object(l.jsx)("span",{className:"badge bg-primary",children:t.priority})]})]})})})},x=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/list");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.list);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"row row-cols-1 row-cols-md-3 mt-3 g-4",children:a.map((function(e){return Object(l.jsx)(m,{data:e},e._id)}))})},f=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"text-center h1",children:"PAGINA DA HOME"}),Object(l.jsx)(x,{})]})},p=a(13),O=function e(){var t=this;Object(p.a)(this,e),this.listUrl="https://back-end-mod03.herokuapp.com/list",this.findAll=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.listUrl);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.findId=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t.listUrl,"/").concat(a));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.create=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(t.listUrl,"/create"),{method:"POST",body:JSON.stringify(a),headers:new Headers({"Content-Type":"application/json"})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.edit=function(){var e=Object(b.a)(j.a.mark((function e(a,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(t.listUrl,"/update/").concat(n),{method:"PUT",body:JSON.stringify(a),headers:new Headers({"Content-Type":"application/json"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.delete=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("".concat(t.listUrl,"/delete/").concat(a)),e.abrupt("return",fetch("".concat(t.listUrl,"/delete/").concat(a),{method:"DELETE"}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){var e=Object(i.f)(),t=function(){var t=Object(b.a)(j.a.mark((function t(a){var n,c,r,s,i,l,o,d;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=a.target.title.value,c=a.target.priority.value,r=a.target.status.value,s=a.target.deadline.value,i=new O,l={title:n,priority:c,status:r,deadline:s},t.next=9,i.create(l);case 9:return o=t.sent,t.next=12,o.json();case 12:d=t.sent,console.log(d),500===o.status&&alert("Erro no servidor! Tente novamente."),d.success?e("/"):alert("N\xe3o foi possivel criar a tarefa. Tente novamente.");case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("main",{className:"container-fluid",children:[Object(l.jsx)("h2",{children:"Cadastrar tarefa"}),Object(l.jsxs)("form",{onSubmit:t,id:"form",children:[Object(l.jsxs)("div",{className:"mb-3 col-5",children:[Object(l.jsx)("label",{htmlFor:"title",className:"form-label",children:"Nome da Tarefa:"}),Object(l.jsx)("input",{id:"title",className:"form-control",type:"text",placeholder:"Nome da tarefa",name:"title",required:!0})]}),Object(l.jsxs)("div",{className:"mb-3 col-5",children:[Object(l.jsx)("label",{htmlFor:"priority",className:"form-label",children:"Prioridade:"}),Object(l.jsxs)("select",{id:"priority",className:"form-select","aria-label":"Default select example",children:[Object(l.jsx)("option",{selected:!0,children:"Selecione"}),Object(l.jsx)("option",{value:"Alta",children:"Alta"})," // Alta, M\xe9dia e Baixa",Object(l.jsx)("option",{value:"M\xe9dia",children:"M\xe9dia"}),Object(l.jsx)("option",{value:"Baixa",children:"Baixa"})]})]}),Object(l.jsxs)("div",{className:"mb-3 col-5",children:[Object(l.jsx)("label",{htmlFor:"status",className:"form-label",children:"Status:"}),Object(l.jsxs)("select",{id:"status",className:"form-select","aria-label":"Default select example",children:[Object(l.jsx)("option",{selected:!0,children:"Selecione"}),Object(l.jsx)("option",{value:"Fazer",children:"Fazer"})," // Fazer, Fazendo, Feito",Object(l.jsx)("option",{value:"Fazendo",children:"Fazendo"}),Object(l.jsx)("option",{value:"Feito",children:"Feito"})]})]}),Object(l.jsxs)("div",{className:"mb-3 col-5",children:[Object(l.jsx)("label",{htmlFor:"deadline",className:"form-label",children:"Prazo:"}),Object(l.jsx)("input",{id:"deadline",className:"form-control",type:"date",placeholder:"Prazo",name:"deadline",required:!0})]}),Object(l.jsx)("button",{type:"submit",class:"btn btn-dark",children:"Cadastrar"})]})]})},N=(a(16),a(25),function(){var e=Object(i.f)(),t=Object(n.useState)({title:"",priority:"",status:"",deadline:""}),a=Object(u.a)(t,2),c=a[0],r=a[1],s=new O;Object(n.useEffect)((function(){d()}),[]);var o=Object(i.g)().id,d=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.findId(o);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.list);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var t=Object(b.a)(j.a.mark((function t(a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,s.edit(c,o);case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,alert(r.message),e("/view/".concat(o));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("main",{className:"container-fluid",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h2",{id:"title",children:"Edi\xe7\xe3o da tarefa"})}),Object(l.jsxs)("form",{onSubmit:h,id:"form",children:[Object(l.jsxs)("div",{className:"mb-3 col-5",children:[Object(l.jsx)("label",{htmlFor:"title",className:"form-label",children:"Nome da Tarefa:"}),Object(l.jsx)("input",{id:"title",className:"form-control",type:"text",placeholder:"Nome da tarefa",name:"title",required:!0})]}),Object(l.jsxs)("div",{className:"mb-3 col-5",children:[Object(l.jsx)("label",{htmlFor:"priority",className:"form-label",children:"Prioridade:"}),Object(l.jsxs)("select",{id:"priority",className:"form-select","aria-label":"Default select example",children:[Object(l.jsx)("option",{selected:!0,children:"Selecione"}),Object(l.jsx)("option",{value:"Alta",children:"Alta"})," // Alta, M\xe9dia e Baixa",Object(l.jsx)("option",{value:"M\xe9dia",children:"M\xe9dia"}),Object(l.jsx)("option",{value:"Baixa",children:"Baixa"})]})]}),Object(l.jsxs)("div",{className:"mb-3 col-5",children:[Object(l.jsx)("label",{htmlFor:"status",className:"form-label",children:"Status:"}),Object(l.jsxs)("select",{id:"status",className:"form-select","aria-label":"Default select example",children:[Object(l.jsx)("option",{selected:!0,children:"Selecione"}),Object(l.jsx)("option",{value:"Fazer",children:"Fazer"})," // Fazer, Fazendo, Feito",Object(l.jsx)("option",{value:"Fazendo",children:"Fazendo"}),Object(l.jsx)("option",{value:"Feito",children:"Feito"})]})]}),Object(l.jsxs)("div",{className:"mb-3 col-5",children:[Object(l.jsx)("label",{htmlFor:"deadline",className:"form-label",children:"Prazo:"}),Object(l.jsx)("input",{id:"deadline",className:"form-control",type:"date",placeholder:"Prazo",name:"deadline",required:!0})]}),Object(l.jsx)("button",{type:"submit",class:"btn btn-dark",children:"Cadastrar"})]})]})}),y=a(14),w=(a(27),function(){var e=new O,t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!1),o=Object(u.a)(s,2),d=o[0],m=o[1],x=Object(i.f)(),f=function(){return m(!1)};Object(n.useEffect)((function(){v()}),[]);var p=Object(i.g)().id,v=function(){var t=Object(b.a)(j.a.mark((function t(){var a,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.findId(p);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,r(n.list);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(b.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.delete(p);case 2:return a=t.sent,t.next=5,a.json();case 5:t.sent.success&&(console.log("excluido"),x("/"));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("div",{className:"row my-5",children:Object(l.jsx)("div",{className:"col-6",children:Object(l.jsxs)("div",{className:"card my-5",children:[Object(l.jsxs)("h1",{className:"text-center my-4",children:[Object(l.jsx)("b",{children:"Nome: "}),c.title]}),Object(l.jsxs)("h3",{className:"text-center",children:[Object(l.jsx)("b",{children:"Priority: "}),c.priority]}),Object(l.jsxs)("h4",{className:"text-center",children:[Object(l.jsx)("b",{children:"Status: "})," ",c.status]}),Object(l.jsxs)("h5",{className:"text-center",children:[Object(l.jsx)("b",{children:"Prazo: "}),c.deadline]}),Object(l.jsxs)("h6",{className:"text-center",children:[Object(l.jsx)("b",{children:"Data de Cria\xe7\xe3o: "}),c.creation_date]}),Object(l.jsxs)("div",{className:"btn-group mt-3 w-100",children:[Object(l.jsx)(h.b,{to:"/edit/".concat(c._id),className:"btn btn-info",children:"Editar"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){return m(!0)},children:"Excluir"})]})]})})}),Object(l.jsxs)(y.a,{open:d,onClose:f,center:!0,showCloseIcon:!1,children:[Object(l.jsx)("h2",{className:"my-4",children:"Deseja Realmente Excluir ?"}),Object(l.jsxs)("div",{className:"d-flex w-50 mx-auto justify-content-center",children:[Object(l.jsx)("button",{className:"btn btn-danger mr-2",onClick:f,children:"N\xe3o"}),Object(l.jsx)("button",{className:"btn btn-success",onClick:N,children:"Sim"})]})]})]})}),g=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",element:Object(l.jsx)(f,{})}),Object(l.jsx)(i.a,{path:"/registration",element:Object(l.jsx)(v,{})}),Object(l.jsx)(i.a,{path:"/edit/:id",element:Object(l.jsx)(N,{})}),Object(l.jsx)(i.a,{path:"/view/:id",element:Object(l.jsx)(w,{})})]})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};a(28);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h.a,{children:Object(l.jsx)(g,{})})}),document.querySelector("body")),F()}},[[29,1,2]]]);
//# sourceMappingURL=main.74793119.chunk.js.map