(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const C=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
\r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="selected filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let T;const b=new Uint8Array(16);function v(){if(!T&&(T=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!T))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return T(b)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function E(e,t=0){return r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]}const P=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),S={randomUUID:P};function A(e,t,i){if(S.randomUUID&&!t&&!e)return S.randomUUID();e=e||{};const s=e.random||(e.rng||v)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=s[o];return t}return E(s)}class h{constructor(t){this.id=A(),this.descripcion=t,this.createdAt=new Date}}const a={All:"All",Complete:"Complete",Pending:"Pending"},l={todos:[new h("La Gema del Alma"),new h("La Gema de la Mente"),new h("La Gema de la Realidad"),new h("La Gema del Poder"),new h("La Gema del Tiempo")],filter:a.All},I=()=>{L(),console.log("Inicial State: ",l)},L=()=>{if(localStorage.getItem("store")===null)return;const{todos:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("store"));l.todos=e,l.filter=t},g=()=>localStorage.setItem("store",JSON.stringify(l)),U=(e=a.All)=>{switch(e){case a.All:return[...l.todos];case a.Complete:return l.todos.filter(t=>t.done);case a.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Option: ${e} is not valid`)}},q=e=>{if(!e)throw new Error("Description is required");l.todos.push(new h(e)),g()},D=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),g()},F=e=>{l.todos=l.todos.filter(t=>t.id!==e),g()},M=()=>{l.todos=l.todos.filter(e=>!e.done),g()},x=(e=a.All)=>{l.filter=e,g()},O=()=>l.filter,c={addTodo:q,deleteCompleted:M,deleteTodo:F,getCurrentFilter:O,getTodos:U,initStore:I,loadStore:L,setFilter:x,toggleTodo:D},N=e=>{if(!e)throw new Error("Todo object is required");const{done:t,descripcion:i,id:s}=e,o=`
        <div class="view">
            <input class="toggle" type="checkbox" ${t?"Checked":""}>
            <label>${i}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",s),t&&n.classList.add("completed"),n};let w;const H=e=>{if(w||(w=document.querySelector(e)),!w)throw new Error(`Element ${e} not found`);w.innerHTML=c.getTodos(a.Pending).length};let p;const k=(e,t=[])=>{if(p||(p=document.querySelector(e)),!p)throw new Error(`Element ${p} not found`);p.innerHTML="",t.forEach(i=>{p.append(N(i))})},m={TodoList:".todo-list",NewTodoInput:"#new-todo-input",ClearComplete:".clear-completed",TodoFilter:".filtro",PendingCount:"#pending-count"},R=e=>{const t=()=>{const d=c.getTodos(c.getCurrentFilter());k(m.TodoList,d),i()},i=()=>{H(m.PendingCount)};(()=>{const d=document.createElement("div");d.innerHTML=C,document.querySelector(e).append(d),t()})();const s=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),n=document.querySelector(m.ClearComplete),u=document.querySelectorAll(m.TodoFilter);s.addEventListener("keyup",d=>{d.which===13&&d.target.value.trim().length!==0&&(c.addTodo(d.target.value),t(),d.target.value="")}),o.addEventListener("click",d=>{const f=d.target.className==="destroy";let y=d.target.closest("[data-id]");f?c.deleteTodo(y.dataset.id):c.toggleTodo(y.dataset.id),t()}),n.addEventListener("click",()=>{c.deleteCompleted(),t()}),u.forEach(d=>{addEventListener("click",f=>{switch(u.forEach(y=>y.classList.remove("selected")),f.target.classList.add("selected"),f.target.text){case"Todos":c.setFilter(a.All);break;case"Pendientes":c.setFilter(a.Pending);break;case"Completados":c.setFilter(a.Complete);break}t()})})};c.initStore();R("#app");
