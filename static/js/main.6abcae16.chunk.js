(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[1],{11:function(e,t,n){e.exports={aside:"Sidebar_aside__2PSuW",active:"Sidebar_active__3cC-l",list:"Sidebar_list__Pwqkz",link:"Sidebar_link__1ZmNx",linkSet:"Sidebar_linkSet__1hvPu"}},147:function(e,t,n){},148:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return g})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return A}));var a=n(4),r=n.n(a),c=n(7),i=n(3),s=n(30),o=n(9),u="auth/CHANGE_STATE_BURG",l="auth/SET_USER_DATA",d="auth/GET_CAPTCHA_URL_SUCCESS",p={burgerActive:!1,isFetching:!1,isAuth:!1,id:null,login:null,email:null,captchaUrl:null},f=function(e){return{type:u,newState:e}},b=function(e,t,n,a){return{type:l,payload:{id:e,email:t,login:n,isAuth:a}}},g=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.auth();case 2:0===(n=e.sent).resultCode&&(a=n.data,c=a.id,i=a.email,s=a.login,t(b(c,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e,t,n,a){return function(){var i=Object(c.a)(r.a.mark((function i(u){var l,p;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,o.d.login(e,t,n,a);case 2:0===(l=i.sent).resultCode?u(g()):(10===l.resultCode&&u(function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.getCaptchaUrl();case 2:n=e.sent,t((a=n.data.url,{type:d,payload:{captchaUrl:a}}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()),p=l.messages.length>0?l.messages[0]:"Common error",u(Object(s.b)("login",{_error:p})));case 4:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}()},A=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.logout();case 2:0===e.sent.resultCode&&t(b(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{burgerActive:t.newState});case l:case d:return Object(i.a)(Object(i.a)({},e),t.payload);default:return e}}},22:function(e,t,n){e.exports={header:"Header_header__3bCi2",logo:"Header_logo__o07SF",burger:"Header_burger__2jfV2",active:"Header_active__30yIh",info:"Header_info__M4xaw",profile:"Header_profile__2Iwfw",name:"Header_name__2pUbc",loginWrap:"Header_loginWrap__1FFMa"}},232:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),i=n(49),s=n.n(i),o=(n(147),n(148),n(3)),u=n(38),l=n(39),d=n(41),p=n(40),f=n(19),b=n(10),g=n(22),j=n.n(g),A=function(e){var t=j.a.burger;return e.burgerActive&&(t+=" ".concat(j.a.active)),Object(a.jsxs)("header",{className:j.a.header,children:[Object(a.jsx)(b.c,{to:"/",className:j.a.logo,children:"LFJ"}),Object(a.jsxs)("div",{className:j.a.info,children:[Object(a.jsx)("div",{className:j.a.loginWrap,children:e.isAuth?Object(a.jsxs)("div",{className:j.a.profile,children:[Object(a.jsx)("div",{className:j.a.name,children:e.login}),Object(a.jsx)("button",{onClick:e.logout,className:"btnLight",children:Object(a.jsx)("span",{children:"Log out"})})]}):Object(a.jsx)(b.c,{to:"/login",className:"btnLight",children:Object(a.jsx)("span",{children:"login"})})}),Object(a.jsx)("div",{className:t,onClick:function(){e.changeStateMenu(!e.burgerActive),e.changeStateBurg(!e.burgerActive)},children:Object(a.jsx)("span",{})})]})]})},h=n(4),O=n.n(h),w=n(7),m=n(18),v=n(9),I="sidebar/CHANGE-STATE-MENU",x="sidebar/SET-FRIENDS",C="sidebar/TOGGLE-IS-FETCING",E={active:!1,friends:[],pageSize:6,isFetching:!0},y=function(e){return{type:I,payload:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(o.a)(Object(o.a)({},e),{},{active:t.payload});case x:return Object(o.a)(Object(o.a)({},e),{},{friends:Object(m.a)(t.payload)});case C:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.payload});default:return e}},k=n(21),N=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(A,Object(o.a)({},this.props))}}]),n}(c.a.Component),P=Object(f.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,burgerActive:e.sidebar.active}}),{changeStateMenu:y,changeStateBurg:k.b,logout:k.e})(N),Q=n(36),B=n.n(Q),T=n(51),R=n.n(T),D=n(66),G=function(e){var t=e.id,n=e.photo,r=e.name;return Object(a.jsxs)(b.c,{to:"/profile/".concat(t),className:R.a.item,children:[Object(a.jsxs)("div",{className:R.a.img,children:[" ",Object(a.jsx)("img",{src:null!=n?n:D.a,alt:"avatar"})]}),Object(a.jsx)("div",{className:R.a.name,children:r})]})},F=n(29),U=function(e){var t=e.friends.map((function(e){return Object(a.jsx)(G,{id:e.id,photo:e.photo,name:e.name},e.id)}));return Object(a.jsxs)("div",{className:B.a.friends,children:[Object(a.jsx)("div",{className:B.a.title,children:"Friends"}),Object(a.jsx)("div",{className:B.a.body,children:e.isFetching?Object(a.jsx)("div",{className:B.a.preloader,children:Object(a.jsx)(F.a,{white:!0})}):t})]})},L=n(11),Y=n.n(L),H=function(e){return e.sidebar.friends},M=function(e){return e.sidebar.pageSize},J=function(e){return e.sidebar.isFetching},z=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).render=function(){return Object(a.jsx)(U,{friends:e.props.friends,isFetching:e.props.isFetching})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.requestFriends(this.props.pageSize)}}]),n}(c.a.Component),W=Object(f.b)((function(e){return{friends:H(e),pageSize:M(e),isFetching:J(e)}}),{requestFriends:function(e){return function(){var t=Object(w.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.d.getUsers(1,e);case 2:a=t.sent,n({type:C,payload:!1}),n((r=a.items,{type:x,payload:r}));case 5:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()}})(z),Z=function(e){var t=Y.a.aside;e.active&&(t+=" ".concat(Y.a.active));var n=function(){e.changeStateMenu(!1),e.changeStateBurg(!1)};return Object(a.jsxs)("aside",{className:t,children:[Object(a.jsxs)("ul",{className:Y.a.list,children:[Object(a.jsx)("li",{children:Object(a.jsx)(b.c,{to:"/profile",onClick:n,className:Y.a.link,activeClassName:Y.a.active,children:Object(a.jsx)("span",{children:"Profile"})})}),Object(a.jsx)("li",{children:Object(a.jsx)(b.c,{to:"/messages",onClick:n,className:Y.a.link,activeClassName:Y.a.active,children:Object(a.jsx)("span",{children:"Messages"})})}),Object(a.jsx)("li",{children:Object(a.jsx)(b.c,{to:"/news",onClick:n,className:Y.a.link,activeClassName:Y.a.active,children:Object(a.jsx)("span",{children:"News"})})}),Object(a.jsx)("li",{children:Object(a.jsx)(b.c,{to:"/users",onClick:n,className:Y.a.link,activeClassName:Y.a.active,children:Object(a.jsx)("span",{children:"Users"})})}),Object(a.jsx)("li",{children:Object(a.jsx)(b.c,{to:"/music",onClick:n,className:Y.a.link,activeClassName:Y.a.active,children:Object(a.jsx)("span",{children:"Music"})})}),Object(a.jsx)("li",{children:Object(a.jsx)(b.c,{to:"/settings",onClick:n,className:"".concat(Y.a.link," ").concat(Y.a.linkSet),activeClassName:Y.a.active,children:Object(a.jsx)("span",{children:"Settings"})})})]}),e.isAuth&&Object(a.jsx)(W,{})]})},V=Object(f.b)((function(e){return{active:e.sidebar.active,friends:e.sidebar.friends,isAuth:e.auth.isAuth}}),{changeStateMenu:y,changeStateBurg:k.b})(Z),X=n(8),K="app/SET_INITIALIZED_SUCCESS",_="app/SET_GLOBAL_ERROR",q={initialized:!1,globalError:null},$=function(e){return{type:_,payload:e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(o.a)(Object(o.a)({},e),{},{initialized:!0});case _:return Object(o.a)(Object(o.a)({},e),{},{globalError:t.payload});default:return e}},te=n(26),ne=n(82),ae=n(69),re=n(90),ce=n(92),ie=n(89),se=n(83),oe=Object(te.c)({dialogsPage:ne.b,auth:k.c,profilePage:ae.b,sidebar:S,usersPage:re.a,app:ee,form:ie.a,newsPage:se.a}),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,le=Object(te.e)(oe,ue(Object(te.a)(ce.a))),de=n(37),pe=n.n(de),fe=function(e){return Object(a.jsxs)("footer",{className:pe.a.footer,children:[Object(a.jsx)(b.c,{to:"/",className:pe.a.logo,children:"LFJ"}),Object(a.jsxs)("div",{className:pe.a.by,children:["Made by ",Object(a.jsx)("a",{className:pe.a.author,href:"https://github.com/NikitosKokos",target:"_blank",children:"Nick"})]})]})},be=function(e){return function(t){return Object(a.jsx)(c.a.Suspense,{fallback:Object(a.jsx)("div",{className:"preloader-container",children:Object(a.jsx)(F.a,{})}),children:Object(a.jsx)(e,Object(o.a)({},t))})}},ge=n(64),je=n.n(ge),Ae=function(){return Object(a.jsxs)("div",{className:je.a.page404,children:[Object(a.jsxs)("div",{className:je.a.title,children:[Object(a.jsx)("span",{children:"404"})," not found"]}),Object(a.jsx)(b.b,{className:"btn",to:"/",children:Object(a.jsx)("span",{children:"Go to home"})})]})},he=be(c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,319))}))),Oe=be(c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,318))}))),we=be(c.a.lazy((function(){return n.e(8).then(n.bind(null,320))}))),me=be(c.a.lazy((function(){return n.e(7).then(n.bind(null,321))}))),ve=be(c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,322))}))),Ie=Object(f.b)((function(e){return{initialized:e.app.initialized,globalError:e.app.globalError}}),{initializeApp:function(){return function(){var e=Object(w.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(Object(k.a)()),e.next=3,Promise.all([n]);case 3:e.sent,t({type:K});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},catchGlobalError:function(e){return function(t,n){n().app.globalError||(t($(e)),setTimeout((function(){t($(null))}),3e3))}}})((function(e){return c.a.useEffect((function(){e.initializeApp();var t=function(t){t.promise;var n=t.reason;e.catchGlobalError(n.toString())};return window.addEventListener("unhandledrejection",t),function(){window.removeEventListener("unhandledrejection",t)}}),[]),e.initialized?Object(a.jsx)(b.a,{basename:"/ReactWayOfSamurai",children:Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(P,{}),Object(a.jsx)(V,{}),Object(a.jsx)("main",{className:"main",children:Object(a.jsxs)(X.d,{children:[Object(a.jsx)(X.b,{exact:!0,path:"/",children:Object(a.jsx)(X.a,{to:"/profile"})}),Object(a.jsx)(X.b,{path:"/profile/:userId?",children:Object(a.jsx)(Oe,{})}),Object(a.jsx)(X.b,{path:"/messages/:chatId?",children:Object(a.jsx)(he,{})}),Object(a.jsx)(X.b,{path:"/news/:page?",children:Object(a.jsx)(we,{})}),Object(a.jsx)(X.b,{path:"/music"}),Object(a.jsx)(X.b,{path:"/settings"}),Object(a.jsx)(X.b,{path:"/users/:page?",children:Object(a.jsx)(me,{})}),Object(a.jsx)(X.b,{path:"/login",children:Object(a.jsx)(ve,{})}),Object(a.jsx)(X.b,{path:"*",children:Object(a.jsx)(Ae,{})})]})}),Object(a.jsx)(fe,{}),e.globalError&&Object(a.jsx)("div",{className:"globalError",children:e.globalError})]})}):Object(a.jsx)("div",{className:"center",children:Object(a.jsx)(F.a,{})})})),xe=function(e){return Object(a.jsx)(f.a,{store:le,children:Object(a.jsx)(Ie,{})})},Ce=function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,317)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(xe,{}),document.getElementById("root")),Ce()},29:function(e,t,n){"use strict";var a=n(0),r=(n(1),n(63)),c=n.n(r);t.a=function(e){var t=e.white;return Object(a.jsxs)("div",{className:"".concat(c.a.preloader," ").concat(t?c.a.white:""),children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})}},36:function(e,t,n){e.exports={friends:"Friends_friends___q5N3",title:"Friends_title__1b2vC",body:"Friends_body__1tKyu",preloader:"Friends_preloader__2bm5V"}},37:function(e,t,n){e.exports={footer:"Footer_footer__2S6ja",logo:"Footer_logo__f65X0",by:"Footer_by__1UwuX",author:"Footer_author__1MRvu"}},51:function(e,t,n){e.exports={item:"FriendsElement_item__3aavx",name:"FriendsElement_name__1nR-Z",img:"FriendsElement_img__1Yp64"}},63:function(e,t,n){e.exports={preloader:"Preloader_preloader__1w1UC",white:"Preloader_white__3HFuI"}},64:function(e,t,n){e.exports={page404:"Page404_page404__xONTi",title:"Page404_title__ABNYE"}},66:function(e,t,n){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEQCAYAAAB4CisVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNENkIyMkQwQjVBRDExRTg5MTYyRTI5RjI2MTUyN0IzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNENkIyMkQxQjVBRDExRTg5MTYyRTI5RjI2MTUyN0IzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0Q2QjIyQ0VCNUFEMTFFODkxNjJFMjlGMjYxNTI3QjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Q2QjIyQ0ZCNUFEMTFFODkxNjJFMjlGMjYxNTI3QjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7xUat8AAAbw0lEQVR42uyd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"},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return v})),n.d(t,"d",(function(){return x})),n.d(t,"c",(function(){return C})),n.d(t,"i",(function(){return E})),n.d(t,"e",(function(){return y})),n.d(t,"f",(function(){return S}));var a=n(50),r=n(4),c=n.n(r),i=n(7),s=n(18),o=n(3),u=n(30),l=n(9),d="profilePage/ADD-POST",p="profilePage/SET-USER-PROFILE",f="profilePage/SET-STATUS",b="profilePage/DELETE_POST",g="profilePage/SET_LIKE_COUNT",j="profilePage/SET_USER_LIKE",A="profilePage/SAVE_PHOTO_SUCCESS",h="profilePage/SET_IS_OPEN_DATA",O={posts:[{id:1,message:"hello",likeCount:44,isUserLike:!1},{id:2,message:"It's my new blog",likeCount:23,isUserLike:!1},{id:3,message:"Yo",likeCount:31,isUserLike:!1},{id:4,message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum reprehenderit fuga at corporis a modi adipisci doloribus ullam accusamus laboriosam quasi et laborum dolore, quisquam saepe consequatur sed odio!",likeCount:1,isUserLike:!1}],profile:null,status:"",isOpenData:!1},w=function(e,t){return{type:d,newPostText:e,newPostImage:t}},m=function(e,t){return{type:g,id:e,newLikeCount:t}},v=function(e,t){return{type:j,id:e,isUserLike:t}},I=function(e){return{type:f,status:e}},x=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.d.getProfile(e);case 2:a=t.sent,n((r=a.data,{type:p,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.getStatus(e);case 2:a=t.sent,n(I(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(I(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n((r=a.data.photos,{type:A,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n,r){var i,s,o,d;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r().auth.id,t.next=3,l.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(x(i)),t.next=12;break;case 8:return o=s.data.messages,d=o.map((function(e,t){var n=/\((.+?)\)/,r=e.match(n)[1].toLowerCase().replace("contacts->","");return Object(a.a)({},r,"".concat(e.replace(n,"")," ").concat(r))})),n(Object(u.b)("editProfile",{contacts:d[0]})),t.abrupt("return",Promise.reject(d[0]));case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[{id:e.posts.length+1,message:t.newPostText,image:t.newPostImage?t.newPostImage:null,likeCount:0}])});case b:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.payload}))});case p:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case f:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case g:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id&&(e.likeCount=t.newLikeCount),e}))});case j:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id&&(e.isUserLike=t.isUserLike),e}))});case A:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});case h:return Object(o.a)(Object(o.a)({},e),{},{isOpenData:t.isOpenData});default:return e}}},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(18),r=n(3),c="dialogsPage/ADD-MES",i={userImage:null,messages:[{id:1,text:"Hi Den!1",avatar:"https://buki.com.ua/data/files/news/15542215853893.jpg"},{id:2,text:"Hello, how do you do?",avatar:"https://www.flaticon.com/svg/static/icons/svg/1503/1503835.svg"},{id:3,text:"Good",avatar:"https://buki.com.ua/data/files/news/15542215853893.jpg"},{id:4,text:"Ok :)",avatar:"https://www.flaticon.com/svg/static/icons/svg/1503/1503835.svg"}],dialogs:[{id:1,name:"Oleg"},{id:2,name:"Roma"},{id:3,name:"Den"},{id:4,name:"Boris"},{id:5,name:"Vika"},{id:6,name:"Olga"}]},s=function(e){return{type:c,newMesText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:5,text:t.newMesText,avatar:"https://buki.com.ua/data/files/news/15542215853893.jpg"}])});default:return e}}},83:function(e,t,n){"use strict";n.d(t,"d",(function(){return A})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return O}));var a=n(4),r=n.n(a),c=n(7),i=n(18),s=n(3),o=n(9),u="newsPage/SET_NEWS",l="newsPage/SET_TOTAL_RESULT",d="newsPage/TOGGLE_IS_FETCING",p="newsPage/SET_CURRENT_PAGE",f="newsPage/SET_COUNTRY",b={news:[],pageSize:10,totalResults:0,page:1,isFetching:!1,country:"us",countries:[["us","USA"],["ua","Ukraine"],["ru","Russia"]]},g=function(e){return{type:l,payload:e}},j=function(e){return{type:d,payload:e}},A=function(e){return{type:p,payload:e}},h=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c){var i,s,l,d;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(j(!0)),c(A(t)),a.next=4,o.a.getNews(e,t,n);case 4:i=a.sent,s=i.status,l=i.totalResults,d=i.articles,"ok"===s&&(c(j(!1)),c(g(l)),c({type:u,payload:d}));case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},O=function(e,t,n){return function(a){a(h(e,t,n)),a(function(e){return{type:f,payload:e}}(e))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),{},{news:Object(i.a)(t.payload)});case l:return Object(s.a)(Object(s.a)({},e),{},{totalResults:t.payload});case d:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.payload});case p:return Object(s.a)(Object(s.a)({},e),{},{page:t.payload});case f:return Object(s.a)(Object(s.a)({},e),{},{country:t.payload});default:return e}}},9:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u}));var a=n(62),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"8dd2b7a3-aa93-40bf-9359-84d3eb5a1a53"}}),c=a.create({baseURL:"https://newsapi.org/v2/"}),i={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},auth:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))},getProfile:function(e){return s.getProfile(e)}},s={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},o={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}},u={getNews:function(e,t,n){return c.get("top-headlines?country=".concat(e,"&page=").concat(t,"&pageSize=").concat(n,"&apiKey=70b45b6b25ec42cfb8bf8d6e7c6dc87d")).then((function(e){return e.data}))}}},90:function(e,t,n){"use strict";n.d(t,"d",(function(){return w})),n.d(t,"e",(function(){return v})),n.d(t,"c",(function(){return I})),n.d(t,"b",(function(){return C})),n.d(t,"f",(function(){return E}));var a=n(4),r=n.n(a),c=n(7),i=n(18),s=n(3),o=n(9),u=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),a):e}))},l="usersPage/FOLLOW",d="usersPage/UNFOLLOW",p="usersPage/SET-USERS",f="usersPage/SET-CURRENT-PAGE",b="usersPage/SET-TOTAL-USERS-COUNT",g="usersPage/TOGGLE-IS-FETCING",j="usersPage/TOGGLE-IS-FOLLOWING-PROGRESS",A={users:[],pageSize:25,totalUsersCount:0,currentPage:1,isFetching:!1,followingIsProgress:[]},h=function(e){return{type:l,userId:e}},O=function(e){return{type:d,userId:e}},w=function(e){return{type:f,currentPage:e}},m=function(e){return{type:g,isFetching:e}},v=function(e,t){return{type:j,isFetching:e,userId:t}},I=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(m(!0)),a(w(e)),n.next=4,o.d.getUsers(e,t);case 4:c=n.sent,a(m(!1)),a((i=c.items,{type:p,users:i})),a((r=c.totalCount,{type:b,totalUsersCount:r}));case 8:case"end":return n.stop()}var r,i}),n)})));return function(e){return n.apply(this,arguments)}}()},x=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(c(n)),t(v(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),C=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(n,e,o.d.follow.bind(o.d),h);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(n,e,o.d.unfollow.bind(o.d),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case d:return Object(s.a)(Object(s.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case p:return Object(s.a)(Object(s.a)({},e),{},{users:Object(i.a)(t.users)});case f:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case b:return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.totalUsersCount});case g:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case j:return Object(s.a)(Object(s.a)({},e),{},{followingIsProgress:t.isFetching?[].concat(Object(i.a)(e.followingIsProgress),[t.userId]):e.followingIsProgress.filter((function(e){return e!==t.userId}))});default:return e}}}},[[232,2,3]]]);
//# sourceMappingURL=main.6abcae16.chunk.js.map