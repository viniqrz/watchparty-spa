(this["webpackJsonpwatchparty-spa"]=this["webpackJsonpwatchparty-spa"]||[]).push([[0],{116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(65),s=c.n(a),i=(c(77),c(78),c(5)),o=c(6),u=c(43);c(119),c(79),c(81);u.a.initializeApp({apiKey:"AIzaSyCteqt-I0zgtyDXT3LseVaQJDghZemSIsg",authDomain:"watchparty-7462e.firebaseapp.com",databaseURL:"https://watchparty-7462e-default-rtdb.firebaseio.com",projectId:"watchparty-7462e",storageBucket:"watchparty-7462e.appspot.com",messagingSenderId:"567381303704",appId:"1:567381303704:web:12352e78d289b40a538bed",measurementId:"G-F87JBE7C95"});var l=u.a,j=new l.auth.GoogleAuthProvider;j.addScope("profile"),j.addScope("email");var d=c(0),b=new l.auth.GoogleAuthProvider;b.addScope("profile"),b.addScope("email");var h,m,f,p=Object(n.createContext)({}),O=function(e){var t=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],r=t[1];return c&&l.database().ref("users/"+c.id).set(c),Object(n.useEffect)((function(){var e=l.auth().onAuthStateChanged((function(e){r(!!e&&{name:e.displayName,photo:e.photoURL,id:e.uid,email:e.email})}));return function(){return e()}}),[]),{user:c,signIn:function(){return l.auth().signInWithPopup(j).then((function(e){var t={name:e.user.displayName,photo:e.user.photoURL,id:e.user.uid,email:e.user.email};r(t)})).catch((function(e){alert(e.message)}))}}}();return Object(d.jsx)(p.Provider,{value:t,children:e.children})},x=c(67),g=c.n(x),v=function(e){return Object(d.jsx)("button",{className:g.a.btn,children:e.children})},y=c(20),_=c.n(y),w=c.p+"static/media/welcomeVideo.bc2281f5.mp4",N=function(){var e=Object(i.f)(),t=Object(n.useContext)(p),c=Object(n.useState)(),r=Object(o.a)(c,2),a=(r[0],r[1]);setTimeout((function(){t.user&&e.push("/room/new")}),1e3);return Object(d.jsxs)("div",{className:_.a.main,children:[Object(d.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,children:Object(d.jsx)("source",{src:w})}),Object(d.jsxs)("div",{className:_.a["content-container"],children:[Object(d.jsx)("h1",{children:"Watchparty"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:_.a.highlight,children:"Lorem ipsum"})," dolor sit amet"," ",Object(d.jsx)("span",{className:_.a.highlight,children:"consectetur adipisicing elit."})," ","Ex, ad cum sapiente reiciendis voluptate."]}),Object(d.jsx)("div",{className:_.a["sign-in"],children:Object(d.jsx)("div",{onClick:function(){a(t.signIn()),t.user&&e.push("/room/new")},children:Object(d.jsxs)(v,{className:_.a["btn-home"],children:[Object(d.jsx)("i",{className:"fab fa-google"}),Object(d.jsx)("span",{children:"Sign In with Google"})]})})})]})]})},C=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(N,{})})},P=c(32),k=c(68),S=Object(n.createContext)(""),R=Object(k.io)(),I=function(e){return Object(d.jsx)(S.Provider,{value:R,children:e.children})},W=c(17),L=c.n(W),T=function(e){var t=Object(n.useContext)(S),c=Object(n.useRef)(""),r=Object(n.useRef)(""),a=Object(n.useRef)(""),s=Object(n.useRef)(1),i=Object(n.useState)(),u=Object(o.a)(i,2),l=u[0],j=u[1],b=Object(n.useState)(1),h=Object(o.a)(b,2),m=h[0],f=h[1];Object(n.useEffect)((function(){c.current.load()}),[e.source]);var p=function(){c.current.volume=s.current.value,f(s.current.value)};t.on("change",(function(t,n){if(e.source){var r=Date.now(),a=0;t.isPlaying?(c.current.play(),a=(r-n)/Math.pow(10,3)):c.current.pause(),c.current.currentTime=t.currentTime+a}})),t.on("uploaded",(function(t,n){e.source&&(c.current.currentTime=0,c.current.pause())}));return Object(d.jsxs)("div",{ref:r,className:L.a["player-container"],children:[Object(d.jsx)("video",{ref:c,onTimeUpdate:function(){if(e.source){var t=c.current.currentTime/c.current.duration;j(t*a.current.offsetWidth+"px")}},id:"my-video",className:"",children:Object(d.jsx)("source",{id:"source-video",src:e.source,type:"video/mp4"})}),Object(d.jsxs)("div",{className:L.a["player-controls"],children:[Object(d.jsx)("div",{onClick:function(n){if(e.source){var r=a.current.getBoundingClientRect().left,s=a.current.getBoundingClientRect().left+a.current.offsetWidth;if(n.clientX>r&&n.clientX<s){var i=(n.clientX-r)/a.current.offsetWidth;c.current.currentTime=i*c.current.duration,c.current.play();var o={currentTime:c.current.currentTime,isPlaying:!c.current.paused};t.emit("change",o,Date.now())}}},ref:a,className:L.a["progress-bar"],children:Object(d.jsx)("div",{style:{width:l},className:L.a["progress-bar-fill"]})}),Object(d.jsxs)("div",{className:L.a["player-buttons"],children:[Object(d.jsx)("button",{onClick:function(){if(e.source){c.current.paused?c.current.play():c.current.pause();var n={currentTime:c.current.currentTime,isPlaying:!c.current.paused};t.emit("change",n,Date.now())}},className:L.a["btn-play"],children:Object(d.jsx)("i",{className:c.current.paused?"fas fa-play":"fas fa-pause"})}),Object(d.jsxs)("div",{className:L.a["player-controls-right"],children:[Object(d.jsxs)("div",{className:L.a["control-volume"],children:[Object(d.jsx)("span",{className:L.a["volume-button"],children:Object(d.jsx)("i",{onClick:function(){"0"===s.current.value?(s.current.value=1,f(s.current.value)):s.current.value=0,p()},className:"0"!==m?"fas fa-volume-down":"fas fa-volume-mute"})}),Object(d.jsx)("input",{onChange:p,type:"range",step:"0.05",min:"0",max:"1",ref:s})]}),Object(d.jsx)("button",{onClick:function(){r.current&&("85%"!==r.current.style.width?r.current.style.width="85%":r.current.style.width="70%")},children:Object(d.jsx)("i",{className:"fas fa-expand"})})]})]})]})]})},D=c(18),U=c(46),F=c.n(U),B=function(e){var t=Object(n.useContext)(S),c=Object(n.useContext)(p),r=Object(n.useRef)(""),a=Object(n.useRef)(""),s=Object(n.useState)([]),i=Object(o.a)(s,2),u=i[0],l=i[1];return t.on("uploaded",(function(e,t){l([].concat(Object(D.a)(u),[{user:e,fileName:t}]))})),setInterval((function(){var e="rgb(".concat(256*Math.random(),",").concat(256*Math.random(),",").concat(256*Math.random(),")");a.current&&(a.current.style.backgroundColor=e)}),1e3),Object(d.jsxs)("div",{children:[u.length>=1&&Object(d.jsx)("div",{className:F.a["info-container"],children:u.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:e.user.photo,alt:"avatar"}),Object(d.jsxs)("h2",{children:[e.user.name," uploaded ",e.fileName]})]},Math.random())}))}),Object(d.jsxs)("form",{className:F.a["video-form"],children:[Object(d.jsx)("input",{ref:r,className:"input-video",type:"file",accept:"video/*",required:!0}),Object(d.jsxs)("button",{ref:a,onClick:function(n){n.preventDefault();var a=r.current.files[0];a&&(e.onUpload(a),t.emit("uploaded",c.user,a.name),l([].concat(Object(D.a)(u),[{user:c.user,fileName:a.name}])))},className:"submit",type:"submit",children:[Object(d.jsx)("img",{src:"https://media4.giphy.com/media/VJScpfdeSNwuPdCL0W/200w.gif",alt:"colored parrot",width:"20"}),"Special Button made by a Parrot"]})]})]})},G=c(23),H=G.a.div(h||(h=Object(P.a)(["\n  background-color: #444647;\n  width: 100%;\n  overflow-y: scroll;\n  padding-right: 20%;\n  height: 100vh;\n"]))),E=function(){Object(n.useContext)(S);var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1];return Object(d.jsxs)(H,{children:[Object(d.jsx)(B,{onUpload:function(e){var t=window.URL.createObjectURL(e);r(t)}}),Object(d.jsx)(T,{source:c})]})},J=c(47),A=c.n(J),M=Object(n.createContext)({}),z=function(e){var t=Object(i.f)(),c=Object(n.useState)(),r=Object(o.a)(c,2),a=r[0],s=r[1],u=l.database().ref(),j={state:a,createRoom:function(e,c,n){var r=Math.random().toString().slice(2,10),a={id:r,name:e,owner:c,admins:[],isPrivate:n,createdAt:(new Date).toUTCString()};s(a),l.database().ref("rooms/"+r).set(a),t.push("/room/"+r)},getRoom:function(e){u.child("rooms").child(e).get().then((function(e){e.exists()?s(e.val()):console.log("No data available")})).catch((function(e){console.error(e)}))}};return Object(d.jsx)(M.Provider,{value:j,children:e.children})},V=(c(116),{mustacheParrot:{shortcut:":mustacheParrot:",src:"https://media4.giphy.com/media/VJScpfdeSNwuPdCL0W/200w.gif"},cartoonParrot:{shortcut:":cartoonParrot:",src:"https://acegif.com/wp-content/uploads/2020/b72nv6/partyparrt-21.gif"},dealWithParrot:{shortcut:":dealWithParrot:",src:"https://media4.giphy.com/media/XZOce3ICovscxHshz5/200w.gif"},cookParrot:{shortcut:":cookParrot:",src:"https://cdn2.scratch.mit.edu/get_image/user/60526075_60x60.png"},maskParrot:{shortcut:":maskParrot:",src:"https://i1.wp.com/emojis.slackmojis.com/emojis/images/1583350348/7963/mask-parrot.gif"}}),X=function(e){var t=Object(n.useRef)(),c=Object(n.useRef)();t.current&&c.current&&setTimeout((function(){t.current.scrollTo(0,t.current.scrollHeight+c.current.offsetHeight)}),500);var r=function(e){var t=e,c=[];return Object.keys(V).forEach((function(e){if(t.includes(V[e].shortcut)){for(var n=t.split(V[e].shortcut),r=0;r<n.length+(n.length-1);r++)r%2===0?c.push(n[r]):c.push(Object(d.jsx)("img",{style:{width:"32px"},src:V[e].src,alt:""}));t=c.join("")}})),0===c.length?e:(console.log(1),c)};return Object(d.jsx)("div",{ref:t,id:"messages",children:e.messages.map((function(e){return Object(d.jsx)("div",{className:"message-container",ref:c,children:Object(d.jsxs)("p",{children:[e.isOwner&&Object(d.jsx)("span",{className:"icon-container",children:Object(d.jsx)("i",{style:{fontSize:"16px"},className:"fas fa-chess-king"})}),Object(d.jsxs)("b",{children:[" ",e.author]}),r(e.content.trim())]})},Math.random())}))})},q=r.a.memo(X),Y=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(o.a)(a,2),i=s[0],u=s[1],l=Object(n.useState)(!1),j=Object(o.a)(l,2),b=j[0],h=j[1],m=Object(n.useRef)(""),f=Object(n.useRef)(""),O=Object(n.useContext)(S),x=Object(n.useContext)(p),g=Object(n.useContext)(M);O.on("message",(function(e){u([].concat(Object(D.a)(i),[e]))})),O.on("joined",(function(e){u([].concat(Object(D.a)(i),[{author:e,content:"joined."}]))})),O.on("left",(function(e){u([].concat(Object(D.a)(i),[{author:e,content:"left."}]))}));return Object(d.jsxs)("div",{className:A.a["chat-container"],children:[Object(d.jsx)(q,{messages:i}),Object(d.jsxs)("form",{id:"form",action:"",children:[Object(d.jsx)("textarea",{onChange:function(){r(m.current.value)},onKeyPress:function(e){"Enter"===e.key&&(c.length<1||(u([].concat(Object(D.a)(i),[{isOwner:x.user.id===g.state.owner,author:x.user.name,content:c}])),O.emit("message",{isOwner:x.user.id===g.state.owner,author:x.user.name,content:c}),m.current.value=""))},ref:m,rows:"3",placeholder:"Send your message."}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),h(!b)},style:{float:"right"},children:Object(d.jsx)("i",{className:"far fa-smile"})}),b&&Object(d.jsxs)("div",{ref:f,onClick:function(e){Object(D.a)(f.current.children).forEach((function(t){t.alt===e.target.alt&&(m.current.value+=":"+t.alt+":",r(c+":"+t.alt+":"))}))},className:A.a["emote-board"],children:[Object(d.jsx)("img",{src:"https://media4.giphy.com/media/VJScpfdeSNwuPdCL0W/200w.gif",alt:"mustacheParrot"}),Object(d.jsx)("img",{src:"https://acegif.com/wp-content/uploads/2020/b72nv6/partyparrt-21.gif",alt:"cartoonParrot"}),Object(d.jsx)("img",{src:"https://media4.giphy.com/media/XZOce3ICovscxHshz5/200w.gif",alt:"dealWithParrot"}),Object(d.jsx)("img",{src:"https://cdn2.scratch.mit.edu/get_image/user/60526075_60x60.png",alt:"cookParrot"}),Object(d.jsx)("img",{src:"https://i1.wp.com/emojis.slackmojis.com/emojis/images/1583350348/7963/mask-parrot.gif",alt:"maskParrot"})]})]})]})},K=c(48),Z=c.n(K),Q=function(){return Object(d.jsx)("svg",{className:Z.a["spinner-svg"],children:Object(d.jsx)("circle",{className:Z.a.spinner,cx:"5rem",cy:"5rem",r:"4rem",stroke:"rgba(1,1,1,0.75)",strokeWidth:"10",fill:"rgba(1,1,1,0)",strokeLinecap:"round",strokeDasharray:"16rem"})})},$=G.a.div(m||(m=Object(P.a)(["\n  background-color: grey;\n  display: flex;\n  justify-content: space-between;\n  padding-top: 5rem;\n"]))),ee=G.a.div(f||(f=Object(P.a)(["\n  height: 100vh;\n  padding: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: rgb(0, 33, 36);\n  background: radial-gradient(\n    circle,\n    rgba(0, 33, 36, 1) 0%,\n    rgba(163, 163, 163, 1) 0%,\n    rgb(80, 80, 80) 100%\n  );\n"]))),te=function(){Object(i.f)();var e=Object(n.useContext)(S),t=Object(n.useContext)(p),c=Object(n.useContext)(M),a=Object(i.g)(),s=Object(n.useRef)(!1),u=Object(n.useState)(!1),l=Object(o.a)(u,2),j=l[0],b=l[1],h=a.roomId;return c.state?s.current||(e.emit("join",h,t.user.name),s.current=!0):c.getRoom(h),Object(d.jsx)("div",{children:c.state?Object(d.jsx)(r.a.Fragment,{children:c?Object(d.jsxs)(r.a.Fragment,{children:[!j&&!t.user&&Object(d.jsxs)(ee,{children:[Object(d.jsx)("h1",{style:{margin:"3rem"},children:"You have to sign in in order to have access."}),Object(d.jsx)("div",{onClick:function(){console.log(1),b(t.signIn()),console.log(1)},children:Object(d.jsxs)(v,{children:[Object(d.jsx)("i",{className:"fab fa-google"}),Object(d.jsx)("span",{children:"Sign In with Google"})]})})]}),t.user&&Object(d.jsxs)($,{children:[Object(d.jsx)(E,{}),Object(d.jsx)(Y,{})]})]}):Object(d.jsx)(ee,{children:Object(d.jsx)("h1",{style:{fontSize:"42px"},children:"Room Not Found"})})}):Object(d.jsx)(ee,{children:Object(d.jsx)(Q,{})})})},ce=(c(117),function(){var e=Object(i.f)(),t=Object(n.useContext)(p),c=Object(n.useContext)(M),r=Object(n.useRef)(),a=Object(n.useRef)();t.user||e.push("/");return Object(d.jsx)("div",{className:"new-room-container",children:Object(d.jsxs)("div",{className:"new-room-form-container",children:[Object(d.jsx)("h1",{children:"New Room"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.createRoom(r.current.value,t.user.id,a.current.checked)},children:[Object(d.jsx)("div",{className:"name-control",children:Object(d.jsx)("input",{required:!0,ref:r,placeholder:"Name",id:"name",type:"text",autoComplete:"off"})}),Object(d.jsxs)("div",{className:"check-control",children:[Object(d.jsx)("input",{ref:a,id:"check",type:"checkbox"}),Object(d.jsx)("label",{htmlFor:"check",children:"Private"})]}),Object(d.jsx)(v,{type:"submit",children:"Create New Room"})]})]})})}),ne=function(){return Object(d.jsx)(ce,{})},re=c(72),ae=c(36),se=c.n(ae),ie=function(){var e=Object(n.useContext)(M),t=Object(n.useContext)(p);return Object(d.jsxs)("header",{className:se.a["main-header"],children:[Object(d.jsx)("h1",{children:"WatchParty"}),t.user&&Object(d.jsx)("div",{className:se.a["user-greeting"],children:Object(d.jsxs)("h3",{children:["Welcome, ",function(e){if(e.length>20){var t,c="",n=Object(re.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(" "===r)return c;c+=r}}catch(a){n.e(a)}finally{n.f()}return e.slice(0,19)+"..."}return e}(t.user.name)]})}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/",children:"Home"})}),e.state&&Object(d.jsxs)("li",{className:se.a.invite,onClick:function(){console.log(1)},children:[Object(d.jsx)("i",{className:"fas fa-link"}),Object(d.jsx)("p",{children:"Get Link"})]})]})})]})},oe=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(ie,{}),e.children]})};var ue=function(){return Object(d.jsx)(oe,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",exact:!0,children:Object(d.jsx)(C,{})}),Object(d.jsx)(i.a,{path:"/room/new",exact:!0,children:Object(d.jsx)(ne,{})}),Object(d.jsx)(i.a,{path:"/room/:roomId",exact:!0,children:Object(d.jsx)(te,{})})]})})},le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,120)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))},je=c(27);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(je.a,{children:Object(d.jsx)(z,{children:Object(d.jsx)(O,{children:Object(d.jsx)(I,{children:Object(d.jsx)(ue,{})})})})})}),document.getElementById("root")),le()},17:function(e,t,c){e.exports={"player-container":"Player_player-container__2Sobe","player-controls":"Player_player-controls__aAcpm","player-controls-right":"Player_player-controls-right__3aSI0","player-buttons":"Player_player-buttons__1X5Nn","control-volume":"Player_control-volume__1Krx8","progress-bar":"Player_progress-bar__3Ia-m","progress-bar-fill":"Player_progress-bar-fill__1qCUq","btn-play":"Player_btn-play__1pyf1","volume-button":"Player_volume-button__1ouUy"}},20:function(e,t,c){e.exports={main:"WelcomePage_main__23DkG",highlight:"WelcomePage_highlight__2uP9-","content-container":"WelcomePage_content-container__3D0t7",appear:"WelcomePage_appear__2NgdU"}},36:function(e,t,c){e.exports={"main-header":"Header_main-header__uxmvG",invite:"Header_invite__B8Id2","user-greeting":"Header_user-greeting__3TRYE",appear:"Header_appear__YwtNC"}},46:function(e,t,c){e.exports={"info-container":"VideoForm_info-container__1v7h9","video-form":"VideoForm_video-form__2W8H6"}},47:function(e,t,c){e.exports={"chat-container":"Chat_chat-container__ALfRp","emote-board":"Chat_emote-board__1kGmq"}},48:function(e,t,c){e.exports={"spinner-svg":"LoadingSpinner_spinner-svg__bIIGb",spin:"LoadingSpinner_spin__347Ra",spinner:"LoadingSpinner_spinner__1rJY2"}},67:function(e,t,c){e.exports={btn:"Button_btn__32gbx",primary:"Button_primary__dhJsS"}},77:function(e,t,c){},78:function(e,t,c){}},[[118,1,2]]]);
//# sourceMappingURL=main.df72ffca.chunk.js.map