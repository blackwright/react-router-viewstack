(this["webpackJsonpreact-router-test"]=this["webpackJsonpreact-router-test"]||[]).push([[0],{10:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(9),o=Object(a.b)({name:"user",reducers:{login:function(e){e.token="token"},logout:function(e){e.token=""}},initialState:{token:""}})},29:function(e,n,t){e.exports=t(42)},38:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n),t.d(n,"App",(function(){return w}));var a=t(13),o=t(0),r=t.n(o),c=t(1),i=t(14),u=t(28),l=t(15),s=t(11),m=t(10);function f(){var e=Object(s.b)(),n=Object(s.c)((function(e){return!!e.user.token})),t=r.a.useCallback((function(){e(m.a.actions.login())}),[e]),a=r.a.useCallback((function(){e(m.a.actions.logout())}),[e]);return r.a.useMemo((function(){return{isLoggedIn:n,login:t,logout:a}}),[n,t,a])}var d=t(2),b={"/login":{component:function(){var e=f(),n=e.login;return e.isLoggedIn?r.a.createElement(c.a,{to:"/home"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Login"),r.a.createElement("button",{onClick:n},"Log in"))},stackIndex:0,isPublic:!0},"/home":{component:function(){var e=f().logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e},"Logout"),r.a.createElement("h1",null,"Home"),r.a.createElement(d.b,{to:"/course/123"},"Course"))},stackIndex:0},"/course/:id":{component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/home"},"Back"),r.a.createElement("h1",null,"Course"),r.a.createElement(d.b,{to:"/lesson/123"},"Lesson"),r.a.createElement(d.b,{to:"/discussion/123"},"Discussion"))},stackIndex:1},"/lesson/:id":{component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/course/123"},"Back"),r.a.createElement("h1",null,"Lesson"))},stackIndex:2},"/discussion/:id":{component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/course/123"},"Back"),r.a.createElement("h1",null,"Discussion"))},stackIndex:2}},g={initial:function(e){return e<0?{x:0}:0===e?{opacity:0}:{x:"100%"}},animate:function(e){return 0===e?{opacity:1}:{x:0}},exit:function(e){return console.log("diff",e),e<0?{x:"100%"}:0===e?{opacity:0}:{x:0}}},E=Object.keys(b);function h(){var e=Object(a.a)(["\n  z-index: ",";\n  background: gray;\n  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  min-width: 100vw;\n  min-height: 100vh;\n"]);return h=function(){return e},e}var p=Object(i.a)(l.b.div)(h(),(function(e){return e.stackIndex})),x=function(e){return r.a.createElement(p,Object.assign({initial:"initial",animate:"animate",exit:"exit",transition:{ease:"easeInOut",duration:.3}},e))},k=r.a.memo((function(e){var n,t=e.location,a=r.a.useRef(),o=function(e,n){var t=e?b[e].stackIndex:0;return(n?b[n].stackIndex:0)-t}(a.current,(n=t.pathname,E.find((function(e){return Object(c.f)(n,{exact:!0,path:e})})))),i=f().isLoggedIn;return r.a.createElement(l.a,{initial:!1,custom:o},r.a.createElement(c.d,{key:t.pathname,location:t},r.a.createElement(c.a,{exact:!0,from:"/",to:"/home"}),Object.entries(b).map((function(e){var n=Object(u.a)(e,2),t=n[0],l=n[1];return r.a.createElement(c.b,{key:t,exact:!0,path:t,render:function(){return(l.isPublic||i)&&(a.current=t),r.a.createElement(x,{custom:o,variants:g,stackIndex:l.stackIndex},l.isPublic||i?r.a.createElement(l.component,null):r.a.createElement(c.a,{to:"/login"}))}})})),r.a.createElement(c.a,{to:"/home"})))}));function v(){var e=Object(a.a)(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n"]);return v=function(){return e},e}var w=function(){return r.a.createElement(I,null,r.a.createElement(c.b,null,(function(e){var n=e.location;return r.a.createElement(k,{location:n})})))},I=i.a.div(v());n.default=w},42:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(12),c=t.n(r),i=t(11),u=t(2);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(9),s=t(5),m=t(10),f=Object(s.c)({user:m.a.reducer}),d=Object(l.a)({reducer:f});t(38);!function(){var e=t(41).App;c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:d},o.a.createElement(u.a,null,o.a.createElement(e,null)))),document.getElementById("root"))}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.4244947a.chunk.js.map