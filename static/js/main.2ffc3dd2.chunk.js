(this["webpackJsonpimg-recog"]=this["webpackJsonpimg-recog"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),r=n.n(i),s=(n(12),n(4)),o=n.n(s),l=n(6),u=n(2),j=(n(14),n(7)),b=n.n(j),d=(n(15),n(0));var f=function(){var e=Object(c.useRef)(null),t=(Object(c.useRef)(null),Object(c.useState)(null)),n=Object(u.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(!1),s=Object(u.a)(r,2),j=s[0],f=s[1],O=Object(c.useState)(!1),p=Object(u.a)(O,2),g=p[0],h=p[1],m=Object(c.useState)(!1),x=Object(u.a)(m,2),v=x[0],S=x[1],k=Object(c.useState)(null),y=Object(u.a)(k,2),C=y[0],w=(y[1],Object(c.useState)()),P=Object(u.a)(w,2),T=P[0],F=P[1],A=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),console.log("1234"),t='{ "organs": "flower", "images": "'.concat(a,'", "organs": "leaf", "images": "').concat(C,'" }'),n={method:"POST",headers:{"Content-Type":"multipart/form-data"},body:t},e.next=6,fetch("https://crossorigin.me/https://my-api.plantnet.org/v2/identify/all?api-key=2b10189SmpQJ3XHmESgf2Hz9k",n);case 6:return c=e.sent,e.next=9,c.json();case 9:e.sent,console.log(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:[j&&Object(d.jsx)(b.a,{onTakePhoto:function(e){f(!1),h(!0),i(e)}}),g&&Object(d.jsx)("img",{src:null!==a&&void 0!==a?a:"",className:"App-logo",alt:""}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"file",id:"file",ref:e,onChange:function(e){if(e&&e.target){var t=e.target,n=new FileReader;t.files&&(F(t.files[0].toString()),n.readAsDataURL(t.files[0]),n.onloadend=function(e){e&&e.target&&i(e.target.result)})}},style:{display:"none"},accept:"image/*"}),Object(d.jsx)("button",{onClick:function(){e.current&&(e.current.click(),h(!0))},children:"Upload Picture"}),Object(d.jsx)("button",{onClick:function(){f(!0),h(!1)},children:"Take Picture"})]})]})}),Object(d.jsx)("button",{onClick:A,children:"Identify"}),v&&Object(d.jsx)("div",{children:T})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.2ffc3dd2.chunk.js.map