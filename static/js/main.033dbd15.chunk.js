(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{30:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(34),s=n.n(a),r=(n(39),n(5)),l=n(14),o=n(9),j=n(10),d=(n(40),n(60)),h=(n(30),n(0));function u(e){var t=e.interpretCmd,n=e.currDirPath,i=(e.clearCmdInput,Object(c.useState)("")),a=Object(r.a)(i,2),s=a[0],l=a[1];return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(n,s).then((function(t){e.target.reset()}))},children:[Object(h.jsxs)("label",{style:{color:"green",fontSize:"20px"},children:[n,">\xa0"]}),Object(h.jsx)("input",{className:"CmdText",autoFocus:!0,onChange:function(e){l(e.target.value)}})]})}function b(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{class:"Text",children:e.text}),Object(h.jsx)("br",{})]})}function x(e,t){return e+"> "+t}function O(e){var t=e.userId,n=Object(c.useState)([]),i=Object(r.a)(n,2),a=i[0],s=i[1],l="http://127.0.0.1:8000/",o=Object(c.useState)("C:"),O=Object(r.a)(o,2),f=O[0],m=O[1],p=Object(c.useState)(["home"]),g=Object(r.a)(p,2),v=g[0],y=g[1],w=Object(c.useState)([]),C=Object(r.a)(w,2),S=C[0],I=C[1],k=Object(c.useState)(""),P=Object(r.a)(k,2),T=P[0],_=P[1],N=Object(c.useState)(200),E=Object(r.a)(N,2),L=E[0],F=E[1];return Object(h.jsx)("div",{id:"box",style:{backgroundColor:"black"},children:Object(h.jsxs)(d.a,{sx:{width:"100%",height:"100vh",backgroundColor:"black"},children:[Object(h.jsx)("input",{className:"invisible",type:"file",name:"file",id:"upload",onChange:function(e){var n=e.target.files[0],c=new FormData;c.append("file",n),fetch(l+"files/file?name="+T+"&parent_path="+f+"&user_id="+t,{body:c,method:"POST"})}}),a.map((function(e){return Object(h.jsx)(b,{text:e})})),Object(h.jsx)(u,{interpretCmd:function(e,n){return window.innerHeight+window.scrollY>document.getElementById("box").scrollHeight&&(document.getElementById("box").style.height=L.toString()+"vh",F(L+50)),new Promise((function(c){"ls"==n?function(e,t){return new Promise((function(n){a.push(x(e,t));for(var c=0;c<S.length;c++)a.push(S[c]);for(var i=0;i<v.length;i++)a.push(v[i]);s(Object(j.a)(a)),n()}))}(e,n).then((function(e){c()})):n.startsWith("makedir ")?function(e,n){return new Promise((function(c){var i=n.substring(8);0==i.length?(s([].concat(Object(j.a)(a),[x(e,n),"Invalid Directory Name"])),c()):"C:"==e?(s([].concat(Object(j.a)(a),[x(e,n),"Cannot insert anything in the root directory"])),c()):(y([].concat(Object(j.a)(v),[i])),fetch(l+"files/dir?dir_name="+i+"&dir_path="+e+"/"+i+"&parent_path="+f+"&user_id="+t+"&is_home_path=0",{method:"POST"}).then((function(t){s([].concat(Object(j.a)(a),[x(e,n)])),c()})))}))}(e,n).then((function(e){c()})):n.startsWith("cd ")?function(e,n){return new Promise((function(c){var i=function(e,t){if(e.startsWith("C:"))return e;if(e.startsWith("../")&&e.match(/(..\/)+[A-Z,a-z,0-9,_,.,\/]+/)[0]==e){var n=e.lastIndexOf("../")+3,c=e.substring(n),i=n/3;".."==c&&(c="",i++);var a=t.split("/");return a.slice(0,a.length-i).join("/")+(0!=c.length?"/"+c:"")}return".."==e?t.substring(0,t.lastIndexOf("/")):(-1==e.indexOf("/")?e.length:e.indexOf("/"),t+"/"+e)}(n.substring(3),e);fetch(l+"files/dir?user_id="+t+"&dir_path="+i).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(t){var r=[],l=[];for(var o in t.files)r.push(t.files[o]);for(var d in t.subdirs)l.push(t.subdirs[d]);I([].concat(r)),y([].concat(l)),m(i),s([].concat(Object(j.a)(a),[x(e,n)])),c()})).catch((function(t){s([].concat(Object(j.a)(a),[x(e,n),"Directory does not exist"])),c()}))}))}(e,n).then((function(e){c()})):n.startsWith("upload ")?function(e,t){return new Promise((function(n,c){var i=t.substring(7);0==i.length?(s([].concat(Object(j.a)(a),[x(e,t),"Invalid file name"])),n()):"C:"==e?(s([].concat(Object(j.a)(a),[x(e,t),"Cannot insert anything in the root directory"])),n()):(I([].concat(Object(j.a)(S),[i])),_(i),document.getElementById("upload").click(),s([].concat(Object(j.a)(a),[x(e,t)])),n())}))}(e,n).then((function(e){c()})):n.startsWith("download ")?function(e,t){return new Promise((function(n,c){var i=t.substring(9);!function(e,t){for(var n=0;n<e.length;n++)if(e[n]==t)return!0;return!1}(S,i)?(s([].concat(Object(j.a)(a),[x(e,t),"File does not exist in directory"])),n()):(window.location.href=l+"files/file?name="+i,s([].concat(Object(j.a)(a),[x(e,t)])),n())}))}(e,n).then((function(e){c()})):(s([].concat(Object(j.a)(a),[x(e,n),"Command given does not exist"])),c())}))},currDirPath:f})]})})}var f=n(12),m=n(23);n(32),n(46);function p(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)(""),l=Object(r.a)(s,2),o=l[0],j=l[1],d=Object(c.useState)(!1),u=Object(r.a)(d,2),b=u[0],x=u[1],O=Object(c.useState)(!1),p=Object(r.a)(O,2),g=p[0],v=p[1],y=Object(c.useState)(!1),w=Object(r.a)(y,2),C=w[0],S=w[1],I=e.url,k=function(e,t){return-1!==e.indexOf(t)},P=function(e){return e.length>=10&&function(e){for(var t=0;t<26;t++)if(k(e,"QWERTYUIOPASDFGHJKLZXCVBNM"[t]))return!0;return!1}(e)&&function(e){for(var t="!@#$%^&*()_+-=[]{};':\"\\|,.<>/?",n=0;n<t.length;n++)if(k(e,t[n]))return!0;return!1}(e)};return Object(h.jsxs)(f.a,{children:[Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicEmail",style:{width:"500px",marginTop:"30px",marginLeft:"100px",marginRight:"100px"},children:[Object(h.jsx)(f.a.Label,{children:"Email address"}),Object(h.jsx)(f.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){a(e.target.value)}}),Object(h.jsx)(f.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]})}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicPassword",style:{width:"500px",marginTop:"30px",marginLeft:"100px",marginRight:"100px"},children:[Object(h.jsx)(f.a.Label,{children:"Password"}),Object(h.jsx)(f.a.Control,{type:"password",placeholder:"Password",onChange:function(e){j(e.target.value)}})]})}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:b&&Object(h.jsx)("p",{children:" You have successfully signed up! Now go and log in. "})}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:g&&Object(h.jsx)("p",{children:" Email already exists! "})}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:C&&Object(h.jsx)("p",{children:" Password must be at least 10 characters and contain an upper case and special character "})}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsx)(m.a,{onClick:function(){if(!P(o))return console.log(o+" is not good"),S(!0),x(!1),void v(!1);var e=I+"files/user?email="+i+"&password="+o;(function(e){return new Promise((function(t){fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){t(e.user_exists)}))}))})(e).then((function(t){console.log("Check user exist: "+t),t?(v(!0),x(!1),S(!1)):fetch(e,{method:"POST"}).then((function(e){return e.json()})).then((function(e){var t=e.id;fetch(I+"files/dir?parent_path=C:&dir_name=home&dir_path=C:/home&is_home_path=1&user_id="+t,{method:"POST"}).then((function(e){console.log("Created with user id: "+t),x(!0),v(!1),S(!1)}))}))}))},style:{marginTop:"30px",marginLeft:"100px",marginRight:"10px"},children:" Create Account "})})]})}function g(e){var t=e.givenUrl,n=e.saveTokenFunc,i=Object(c.useState)(""),a=Object(r.a)(i,2),s=a[0],l=a[1],o=Object(c.useState)(""),j=Object(r.a)(o,2),d=j[0],u=j[1],b=Object(c.useState)(!1),x=Object(r.a)(b,2),O=x[0],p=x[1],g=Object(c.useState)(!1),v=Object(r.a)(g,2),y=v[0],w=v[1];console.log("Given url: "+t);return Object(h.jsx)("header",{className:"logInHeader",children:Object(h.jsxs)(f.a,{children:[Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicEmail",style:{width:"500px",marginTop:"30px",marginLeft:"100px",marginRight:"100px"},children:[Object(h.jsx)(f.a.Label,{children:"Email address"}),Object(h.jsx)(f.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){l(e.target.value)}}),Object(h.jsx)(f.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]})}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicPassword",style:{width:"500px",marginTop:"30px",marginLeft:"100px",marginRight:"100px"},children:[Object(h.jsx)(f.a.Label,{children:"Password"}),Object(h.jsx)(f.a.Control,{type:"password",placeholder:"Password",onChange:function(e){u(e.target.value)}})]})}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:y&&Object(h.jsx)("p",{children:" The email does not exist "})}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:O&&Object(h.jsx)("p",{children:" Password is incorrect! "})}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsx)(m.a,{onClick:function(){fetch(t+"files/user?email="+s+"&password="+d,{method:"GET"}).then((function(e){return e.json()})).then((function(e){e.user_pass_exists?(p(!1),w(!1),n(e.id)):e.user_exists?(p(!0),w(!1)):(p(!1),w(!0))}))},style:{marginTop:"30px",marginLeft:"100px",marginRight:"10px"},children:" Sign In "})})]})})}function v(e){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("br",{}),"\xa0\xa0 The given terminal is acts like any Unix-based system, but with much more restrictions. "]}),Object(h.jsx)("h3",{children:"\xa0 Available commands "}),Object(h.jsxs)("p",{children:["\xa0\xa0 ",Object(h.jsx)("b",{children:"ls"})," - list contents of current directory "]}),Object(h.jsxs)("p",{children:["\xa0\xa0 ",Object(h.jsx)("b",{children:"cd [new directory]"})," - change directory (Ex: cd [sub directory name], cd [full path to new directory], cd [partial path to new directory]) "]}),Object(h.jsxs)("p",{children:["\xa0\xa0 ",Object(h.jsx)("b",{children:"makedir"})," - create a directory "]}),Object(h.jsxs)("p",{children:["\xa0\xa0 ",Object(h.jsx)("b",{children:"upload [file name]"})," - will prompt you to select a file to upload, which will be available on this system with the name you gave it"]}),Object(h.jsxs)("p",{children:["\xa0\xa0 ",Object(h.jsx)("b",{children:"download [file name]"}),"- downloads the file, if its in the current directory "]})]})}function y(e){return e.clearToken(),Object(h.jsx)("div",{})}var w=Object(o.e)((function(e){return Object(h.jsx)("div",{className:"navigation",children:Object(h.jsx)("nav",{class:"navbar navbar-expand navbar-dark bg-dark",children:Object(h.jsxs)("div",{class:"container",children:[Object(h.jsx)(l.b,{class:"navbar-brand",to:"/",children:"Save My Files"}),Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{class:"navbar-nav ml-auto",children:[Object(h.jsx)("li",{class:"nav-item  ".concat("/home"===e.location.pathname?"active":""),children:Object(h.jsx)(l.b,{class:"nav-link",to:"/home",children:"Log In"})}),Object(h.jsx)("li",{class:"nav-item  ".concat("/signup"===e.location.pathname?"active":""),children:Object(h.jsx)(l.b,{class:"nav-link",to:"/signup",children:"Create Account"})})]})})]})})})}));var C=Object(o.e)((function(e){return Object(h.jsx)("div",{className:"navigation",children:Object(h.jsx)("nav",{class:"navbar navbar-expand navbar-dark bg-dark",children:Object(h.jsxs)("div",{class:"container",children:[Object(h.jsx)(l.b,{class:"navbar-brand",to:"/",children:"Save My Files"}),Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{class:"navbar-nav ml-auto",children:[Object(h.jsx)("li",{class:"nav-item  ".concat("/home"===e.location.pathname?"active":""),children:Object(h.jsx)(l.b,{class:"nav-link",to:"/home",children:"My Files"})}),Object(h.jsx)("li",{class:"nav-item  ".concat("/help"===e.location.pathname?"active":""),children:Object(h.jsx)(l.b,{class:"nav-link",to:"/help",children:"Help"})}),Object(h.jsx)("li",{class:"nav-item  ".concat("/signout"===e.location.pathname?"active":""),children:Object(h.jsx)(l.b,{class:"nav-link",to:"/signout",children:"Sign out"})})]})})]})})})}));var S=function(){var e=function(){var e=localStorage.getItem("token");return JSON.parse(e)},t=Object(c.useState)(e()),n=Object(r.a)(t,2),i=n[0],a=n[1],s="http://127.0.0.1:8000/";return i?Object(h.jsx)("div",{className:"UserView",children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(C,{}),Object(h.jsxs)(o.a,{path:"/home",children:[" ",Object(h.jsx)(O,{userId:e()})," "]}),Object(h.jsxs)(o.a,{path:"/help",children:[" ",Object(h.jsx)(v,{})," "]}),Object(h.jsxs)(o.a,{path:"/signout",children:[" ",Object(h.jsx)(y,{clearToken:function(){localStorage.clear(),a(e())}})," "]})]})}):Object(h.jsx)("div",{className:"PublicView",children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(w,{}),Object(h.jsxs)(o.a,{path:"/signup",children:[" ",Object(h.jsx)(p,{url:s})," "]}),Object(h.jsxs)(o.a,{path:"/home",children:[" ",Object(h.jsx)(g,{givenUrl:s,saveTokenFunc:function(e){localStorage.setItem("token",JSON.stringify(e)),a(e)}})," "]})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),I()}},[[49,1,2]]]);
//# sourceMappingURL=main.033dbd15.chunk.js.map