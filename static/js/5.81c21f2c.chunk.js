(this.webpackJsonpdevdaveportfolio=this.webpackJsonpdevdaveportfolio||[]).push([[5,7],{140:function(e,t,c){"use strict";var a=c(5),n=c(3),r=c(7),s=c(8),o=c.n(s),i=c(0),l=c(9),f=c(1),j=["as","bsPrefix","className"],u=["className"];var b=i.forwardRef((function(e,t){var c=function(e){var t=e.as,c=e.bsPrefix,a=e.className,s=Object(r.a)(e,j);c=Object(l.c)(c,"col");var i=Object(l.a)(),f=Object(l.b)(),u=[],b=[];return i.forEach((function(e){var t,a,n,r=s[e];delete s[e],"object"===typeof r&&null!=r?(t=r.span,a=r.offset,n=r.order):t=r;var o=e!==f?"-".concat(e):"";t&&u.push(!0===t?"".concat(c).concat(o):"".concat(c).concat(o,"-").concat(t)),null!=n&&b.push("order".concat(o,"-").concat(n)),null!=a&&b.push("offset".concat(o,"-").concat(a))})),[Object(n.a)(Object(n.a)({},s),{},{className:o.a.apply(void 0,[a].concat(u,b))}),{as:t,bsPrefix:c,spans:u}]}(e),s=Object(a.a)(c,2),i=s[0],b=i.className,d=Object(r.a)(i,u),O=s[1],v=O.as,h=void 0===v?"div":v,p=O.bsPrefix,x=O.spans;return Object(f.jsx)(h,Object(n.a)(Object(n.a)({},d),{},{ref:t,className:o()(b,!x.length&&p)}))}));b.displayName="Col",t.a=b},150:function(e,t,c){"use strict";var a=c(3),n=c(7),r=c(8),s=c.n(r),o=c(0),i=c(9),l=c(1),f=["bsPrefix","className","as"],j=o.forwardRef((function(e,t){var c=e.bsPrefix,r=e.className,o=e.as,j=void 0===o?"div":o,u=Object(n.a)(e,f),b=Object(i.c)(c,"row"),d=Object(i.a)(),O=Object(i.b)(),v="".concat(b,"-cols"),h=[];return d.forEach((function(e){var t,c=u[e];delete u[e],t=null!=c&&"object"===typeof c?c.cols:c;var a=e!==O?"-".concat(e):"";null!=t&&h.push("".concat(v).concat(a,"-").concat(t))})),Object(l.jsx)(j,Object(a.a)(Object(a.a)({ref:t},u),{},{className:s.a.apply(void 0,[r,b].concat(h))}))}));j.displayName="Row",t.a=j},85:function(e,t,c){"use strict";c.r(t);c(0),c(87);var a=c(1);t.default=function(e){var t=e.title;return Object(a.jsx)("div",{className:"header",children:t})}},89:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c(0),r=c(165),s=c(136),o=c(150),i=c(140),l=c(64),f=c.n(l),j=c(85),u=c(24),b=c(34),d=c(1),O={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"}};t.default=function(e){var t,c=e.header,l=Object(n.useState)(null),v=Object(a.a)(l,2),h=v[0],p=v[1];return Object(n.useEffect)((function(){fetch(u.a.about,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return p(e)})).catch((function(e){return e}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.default,{title:c}),Object(d.jsx)("div",{className:"section-content-container",children:Object(d.jsx)(s.a,{children:h?Object(d.jsx)(f.a,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(i.a,{style:O.introTextContainer,children:(t=h.about,Object(d.jsx)(r.a,{children:t}))}),Object(d.jsx)(i.a,{style:O.introImageContainer,children:Object(d.jsx)("img",{src:null===h||void 0===h?void 0:h.imageSource,alt:"profile"})})]})}):Object(d.jsx)(b.default,{})})})]})}}}]);
//# sourceMappingURL=5.81c21f2c.chunk.js.map