(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[4],{232:function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"a",(function(){return c}));var a=function(e){if(!e)return"Field is required"},c=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}}},233:function(e,t,s){"use strict";s.d(t,"b",(function(){return j})),s.d(t,"a",(function(){return l}));var a=s(3),c=s(231),r=s(1),n=(s(0),s(113),s(234)),o=s.n(n),i=function(e){e.input;var t=e.meta,s=t.touched,a=t.error,n=(t.warning,e.children),i=e.errorClass,j=(Object(c.a)(e,["input","meta","children","errorClass"]),s&&a);return Object(r.jsxs)("div",{className:"".concat(o.a.formControl," ").concat(j?"error":""),children:[Object(r.jsxs)("div",{className:o.a.textarea,children:[n,Object(r.jsx)("span",{className:o.a.checkebox})]}),Object(r.jsx)("div",{className:o.a.errors,children:j&&Object(r.jsx)("p",{className:"".concat(o.a.error," ").concat(i||""),children:a})})]})},j=function(e){var t=e.input,s=Object(c.a)(e,["input"]);return Object(r.jsx)(i,Object(a.a)(Object(a.a)({},e),{},{children:Object(r.jsx)("textarea",Object(a.a)(Object(a.a)({},t),s))}))},l=function(e){var t=e.input,s=Object(c.a)(e,["input"]);return Object(r.jsx)(i,Object(a.a)(Object(a.a)({},e),{},{children:Object(r.jsx)("input",Object(a.a)(Object(a.a)({},t),s))}))}},234:function(e,t,s){e.exports={formControl:"FormControls_formControl__2g-FB",textarea:"FormControls_textarea__Ji8_w",error:"FormControls_error__2zH4w",checkebox:"FormControls_checkebox__2MJo8"}},236:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var a=s(3),c=s(37),r=s(38),n=s(40),o=s(39),i=s(1),j=s(0),l=s.n(j),u=s(19),b=s(7),d=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(n.a)(j,t);var s=Object(o.a)(j);function j(){return Object(c.a)(this,j),s.apply(this,arguments)}return Object(r.a)(j,[{key:"render",value:function(){return this.props.isAuth?Object(i.jsx)(e,Object(a.a)({},this.props)):Object(i.jsx)(b.a,{to:"/login"})}}]),j}(l.a.Component);return Object(u.b)(d)(t)}},238:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var a=s(66);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var s=[],a=!0,c=!1,r=void 0;try{for(var n,o=e[Symbol.iterator]();!(a=(n=o.next()).done)&&(s.push(n.value),!t||s.length!==t);a=!0);}catch(i){c=!0,r=i}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return s}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},302:function(e,t,s){e.exports={newpost:"AddPosts_newpost__3FYwK",textarea:"AddPosts_textarea__FulEL",label:"AddPosts_label___R0y0",input:"AddPosts_input__3NDco",buttons:"AddPosts_buttons__3xRSv",details:"AddPosts_details__23-Gb"}},303:function(e,t,s){e.exports={post:"Post_post__2DZtL",avatar:"Post_avatar__34WCH",main:"Post_main__39fq2",text:"Post_text__1gaPO",body:"Post_body__3FEFn",sidebar:"Post_sidebar__2PZSw",likes:"Post_likes__1v4Dx",likesCount:"Post_likesCount__1J2EI",like:"Post_like__1A9wD",active:"Post_active__2q5w8",image:"Post_image__2xSkZ"}},304:function(e,t,s){e.exports={posts:"Posts_posts__1JAaH"}},305:function(e,t,s){e.exports={main:"Profile_main__YswD0"}},306:function(e,t,s){e.exports={info:"UserInfo_info__13vIN",bg:"UserInfo_bg__2i6yu",photo:"UserInfo_photo__1aY7_",user:"UserInfo_user__3XAly",text:"UserInfo_text__30sdK",name:"UserInfo_name__23tok",fullName:"UserInfo_fullName__qfmyr",job:"UserInfo_job__19RpE",jobdescr:"UserInfo_jobdescr__cCHDd",about:"UserInfo_about__3NBjG"}},307:function(e,t,s){e.exports={status:"ProfileStatus_status__3Jvfg",edit:"ProfileStatus_edit__1yHIC",text:"ProfileStatus_text__fpT7i",input:"ProfileStatus_input__3_AhF",about:"ProfileStatus_about__2L4LT"}},314:function(e,t,s){"use strict";s.r(t);var a=s(3),c=s(37),r=s(38),n=s(40),o=s(39),i=s(1),j=s(0),l=s.n(j),u=s(19),b=s(7),d=s(26),p=s(236),f=s(67),O=s(29),x=s(238),m=s(231),_=s(302),h=s.n(_),g=s(113),v=s(114),N=s(232),P=s(233),k=Object(N.a)(1e3),C=function(e,t){return function(s){e(s.target.files[0]),t(s.target.files[0])}},y=function(e){var t=e.input,s=(t.value,t.onChange),c=t.onBlur,r=(Object(m.a)(t,["value","onChange","onBlur"]),e.meta,e.setFormImage),n=Object(m.a)(e,["input","meta","setFormImage"]);return Object(i.jsx)("input",Object(a.a)(Object(a.a)({onChange:C(s,r),onBlur:C(c,r),type:"file"},n.input),n))},S=Object(v.a)({form:"profileAddPostForm"})((function(e){var t=e.handleSubmit,s=e.formImage,a=e.setFormImage;return Object(i.jsxs)("form",{onSubmit:t,className:h.a.newpost,children:[Object(i.jsx)("label",{htmlFor:"message",className:h.a.label,children:"Create your new post"}),Object(i.jsx)("div",{className:h.a.textarea,children:Object(i.jsx)(g.a,{id:"message",type:"text",name:"profilePost",placeholder:"Writing new post",component:P.b,validate:[N.b,k]})}),Object(i.jsxs)("div",{className:h.a.buttons,children:[Object(i.jsx)("button",{className:"btn",children:Object(i.jsx)("span",{children:"Create post"})}),Object(i.jsx)(g.a,{className:h.a.input,name:"profileFile",component:y,id:"image",accept:".jpg, .png, .jpeg",setFormImage:a}),Object(i.jsx)("label",{htmlFor:"image",className:"btn btn_t",children:Object(i.jsx)("span",{children:"Choose image"})}),s&&Object(i.jsxs)("div",{className:h.a.details,children:[s.name," - ",(s.size/1024e3).toFixed(2),"MB"]})]})]})})),I=s(303),U=s.n(I),F=s(65),w=function(e){var t=e.photos,s=e.likeCount,a=e.setLikeCount,c=e.setUserLike,r=e.image,n=e.message,o=e.isUserLike,j=e.id;return Object(i.jsx)("div",{className:U.a.post,children:Object(i.jsxs)("div",{className:U.a.body,children:[Object(i.jsxs)("div",{className:U.a.sidebar,children:[Object(i.jsx)("div",{className:U.a.avatar,children:Object(i.jsx)("img",{src:null!=t.large?t.large:F.a})}),Object(i.jsxs)("div",{className:U.a.likes,children:[Object(i.jsx)("div",{className:"".concat(U.a.like," ").concat(o?U.a.active:""),onClick:function(){a(j,o?s-1:s+1),c(j,!o)},children:Object(i.jsxs)("svg",{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 478.2 478.2",children:[Object(i.jsx)("g",{children:Object(i.jsx)("path",{fill:"#393e46",d:"M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5\r c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1\r c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7\r c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61\r c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3\r c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3\r c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z M48.275,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1\r c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6h-61V447.3z M431.975,313.4\r c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8\r c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2\r c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9\r c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7\r c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3\r c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3\r C444.875,295.3,440.675,304.4,431.975,313.4z"})}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{})]})}),Object(i.jsxs)("div",{className:U.a.likesCount,children:[" ",s]})]})]}),Object(i.jsxs)("div",{className:U.a.main,children:[r&&Object(i.jsx)("div",{className:U.a.image,children:Object(i.jsx)("img",{src:URL.createObjectURL(r),alt:r.name})}),Object(i.jsx)("div",{className:U.a.text,children:n})]})]})})},A=s(304),L=s.n(A),B=s(36),z=l.a.memo((function(e){var t=e.profile,s=e.posts,a=e.addPost,c=e.setLikeCount,r=e.setUserLike,n=l.a.useState(null),o=Object(x.a)(n,2),j=o[0],u=o[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(S,{onSubmit:function(e,t){console.log(e),a(e.profilePost,e.profileFile),t(Object(B.a)("profileAddPostForm")),u(null)},setFormImage:u,formImage:j}),Object(i.jsx)("div",{className:L.a.posts,children:s.map((function(e){return Object(i.jsx)(w,{setUserLike:r,setLikeCount:c,id:e.id,image:e.image,photos:t.photos,message:e.message,likeCount:e.likeCount,isUserLike:e.isUserLike},e.id)}))})]})})),D=Object(u.b)((function(e){return{posts:e.profilePage.posts,profile:e.profilePage.profile}}),{addPost:f.a,setLikeCount:f.e,setUserLike:f.f})(z),M=s(305),J=s.n(M),E=s(306),H=s.n(E),R=s(307),q=s.n(R),T=(s.p,function(e){var t=l.a.useState(!1),s=Object(x.a)(t,2),a=s[0],c=s[1],r=l.a.useState(e.status),n=Object(x.a)(r,2),o=n[0],j=n[1];l.a.useEffect((function(){j(e.status)}),[e.status]);return Object(i.jsxs)("div",{className:q.a.status,children:[!a&&Object(i.jsxs)("div",{className:q.a.about,children:[Object(i.jsx)("span",{className:q.a.text,children:o}),o&&Object(i.jsx)("div",{onClick:function(){c(!0)},className:q.a.edit,children:Object(i.jsxs)("svg",{viewBox:"0 0 383.947 383.947",children:[Object(i.jsx)("g",{children:Object(i.jsx)("g",{children:Object(i.jsxs)("g",{children:[Object(i.jsx)("polygon",{fill:"#393e46",points:"0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893 \t\t\t"}),Object(i.jsx)("path",{fill:"#393e46",d:"M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\r C386.027,77.92,386.027,64.373,377.707,56.053z"})]})})}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{}),Object(i.jsx)("g",{})]})})]}),a&&Object(i.jsx)("div",{className:q.a.input,children:Object(i.jsx)("input",{onChange:function(e){return j(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(o)},value:o})})]})}),V=function(e){var t=e.profile,s=e.updateStatus,a=e.status;return Object(i.jsx)("div",{className:H.a.info,children:Object(i.jsxs)("div",{className:H.a.user,children:[Object(i.jsx)("div",{className:H.a.photo,children:Object(i.jsx)("img",{src:null!=t.photos.large?t.photos.large:F.a})}),Object(i.jsxs)("div",{className:H.a.text,children:[Object(i.jsx)("div",{className:H.a.name,children:Object(i.jsx)("div",{className:H.a.fullName,children:t.fullName})}),Object(i.jsx)(T,{status:a,updateStatus:s})]})]})})},Y=function(e){var t=e.profile,s=e.status,a=e.updateStatus;return t?Object(i.jsxs)("main",{className:J.a.main,children:[Object(i.jsx)(V,{profile:t,status:s,updateStatus:a}),Object(i.jsx)(D,{})]}):Object(i.jsx)(O.a,{})},Z=function(e){Object(n.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).getNewUserProfile=function(){var t=e.props.match.params.userId;t||(t=e.props.autorizedUserId),e.props.getUserProfile(t),e.props.getStatus(t)},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.getNewUserProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.getNewUserProfile()}},{key:"render",value:function(){return Object(i.jsx)(Y,Object(a.a)(Object(a.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(l.a.Component);t.default=Object(d.d)(Object(u.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,autorizedUserId:e.auth.id}}),{getUserProfile:f.d,getStatus:f.c,updateStatus:f.g}),b.f,p.a)(Z)}}]);
//# sourceMappingURL=4.125801b5.chunk.js.map