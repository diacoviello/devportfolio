(this.webpackJsonpdevdaveportfolio=this.webpackJsonpdevdaveportfolio||[]).push([[5,7],{140:function(e,t,a){"use strict";var c=a(5),n=a(3),r=a(7),o=a(8),s=a.n(o),i=a(0),l=a(9),u=a(1),f=["as","bsPrefix","className"],d=["className"];var b=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,o=Object(r.a)(e,f);a=Object(l.c)(a,"col");var i=Object(l.a)(),u=Object(l.b)(),d=[],b=[];return i.forEach((function(e){var t,c,n,r=o[e];delete o[e],"object"===typeof r&&null!=r?(t=r.span,c=r.offset,n=r.order):t=r;var s=e!==u?"-".concat(e):"";t&&d.push(!0===t?"".concat(a).concat(s):"".concat(a).concat(s,"-").concat(t)),null!=n&&b.push("order".concat(s,"-").concat(n)),null!=c&&b.push("offset".concat(s,"-").concat(c))})),[Object(n.a)(Object(n.a)({},o),{},{className:s.a.apply(void 0,[c].concat(d,b))}),{as:t,bsPrefix:a,spans:d}]}(e),o=Object(c.a)(a,2),i=o[0],b=i.className,j=Object(r.a)(i,d),m=o[1],O=m.as,h=void 0===O?"div":O,v=m.bsPrefix,p=m.spans;return Object(u.jsx)(h,Object(n.a)(Object(n.a)({},j),{},{ref:t,className:s()(b,!p.length&&v)}))}));b.displayName="Col",t.a=b},150:function(e,t,a){"use strict";var c=a(3),n=a(7),r=a(8),o=a.n(r),s=a(0),i=a(9),l=a(1),u=["bsPrefix","className","as"],f=s.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.as,f=void 0===s?"div":s,d=Object(n.a)(e,u),b=Object(i.c)(a,"row"),j=Object(i.a)(),m=Object(i.b)(),O="".concat(b,"-cols"),h=[];return j.forEach((function(e){var t,a=d[e];delete d[e],t=null!=a&&"object"===typeof a?a.cols:a;var c=e!==m?"-".concat(e):"";null!=t&&h.push("".concat(O).concat(c,"-").concat(t))})),Object(l.jsx)(f,Object(c.a)(Object(c.a)({ref:t},d),{},{className:o.a.apply(void 0,[r,b].concat(h))}))}));f.displayName="Row",t.a=f},85:function(e,t,a){"use strict";a.r(t);a(0),a(87);var c=a(1);t.default=function(e){var t=e.title;return Object(c.jsx)("div",{className:"header",children:t})}},92:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a(0),r=a(165),o=a(136),s=a(150),i=a(140),l=a(3),u=a(7),f=a(8),d=a.n(f),b=a(10),j=a.n(b),m=a(9),O=a(1),h=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],v=(j.a.string,j.a.bool,j.a.bool,j.a.bool,j.a.bool,n.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,n=e.fluid,r=e.rounded,o=e.roundedCircle,s=e.thumbnail,i=Object(u.a)(e,h);return a=Object(m.c)(a,"img"),Object(O.jsx)("img",Object(l.a)(Object(l.a)({ref:t},i),{},{className:d()(c,n&&"".concat(a,"-fluid"),r&&"rounded",o&&"rounded-circle",s&&"".concat(a,"-thumbnail"))}))})));v.displayName="Image",v.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var p=v,x=a(64),N=a.n(x),g=a(85),y=a(24),w=a(34),C={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"flex-start",display:"flex"},img:{height:"auto",width:"auto",resize:"scale"}};t.default=function(e){var t,a=e.header,l=Object(n.useState)(null),u=Object(c.a)(l,2),f=u[0],d=u[1];return Object(n.useEffect)((function(){fetch(y.a.about,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return e}))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g.default,{title:a}),Object(O.jsx)("div",{className:"section-content-container",children:Object(O.jsx)(o.a,{children:f?Object(O.jsx)(N.a,{children:Object(O.jsxs)(s.a,{className:"flex-column-reverse flex-md-row",children:[Object(O.jsx)(i.a,{style:C.introTextContainer,responsive:!0,children:(t=f.about,Object(O.jsx)(r.a,{children:t}))}),Object(O.jsx)(i.a,{style:C.introImageContainer,children:Object(O.jsx)(p,{src:null===f||void 0===f?void 0:f.imageSource,thumbnail:!0,responsive:!0,style:C.img,alt:"profile"})})]})}):Object(O.jsx)(w.default,{})})})]})}}}]);
//# sourceMappingURL=5.809ba8c7.chunk.js.map