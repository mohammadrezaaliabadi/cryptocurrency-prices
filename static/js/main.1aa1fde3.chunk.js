(this["webpackJsonpcryptocurrency-prices"]=this["webpackJsonpcryptocurrency-prices"]||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(19),s=n.n(r),i=(n(24),n(1)),u=n.n(i),o=n(4),l=n(5),d=(n(26),n(27),n(0)),j=function(e){var t=e.data,n=e.header,c=e.rowMap;return Object(d.jsx)("table",{children:Object(d.jsxs)("tbody",{children:[Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("table",{className:"table",children:Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"table-head",children:[Object(d.jsx)("td",{style:{width:"1.5rem"},children:"#"}),n.map((function(e){return Object(d.jsx)("td",{children:e},"head-".concat(e))}))]})})})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("div",{style:{height:"1000px",overflow:"auto"},children:Object(d.jsx)("table",{className:"table",children:Object(d.jsx)("tbody",{children:t.map(c)})})})})})]})})},b=function(e,t){return new Intl.NumberFormat(t,{style:"percent",maximumFractionDigits:2}).format(e)},h=function(e,t){return new Intl.NumberFormat(t,{notation:"compact",compactDisplay:"short"}).format(e)},p=function(e){var t,n,c,a,r,s,i=e.rowData,u=e.i;return Object(d.jsxs)("tr",{className:"table-row",children:[Object(d.jsx)("td",{style:{width:"1.8rem"},children:u+1}),Object(d.jsxs)("td",{className:"first-column",children:[Object(d.jsx)("img",{srcSet:i.logo_url,alt:"",style:{width:"1.5rem",height:"1.5rem"}}),Object(d.jsx)("h3",{children:i.name}),Object(d.jsx)("span",{className:"data-sub",children:i.symbol})]}),Object(d.jsx)("td",{children:(a=i.price,r="en-us",s="USD",new Intl.NumberFormat(r,{style:"currency",currency:s}).format(a))}),Object(d.jsx)("td",{className:Number.parseFloat(null===(t=i["1d"])||void 0===t?void 0:t.price_change_pct)>=0?"high-style":"low-style",children:b(null===(n=i["1d"])||void 0===n?void 0:n.price_change_pct,"en-us")}),Object(d.jsx)("td",{children:h(null===(c=i["1d"])||void 0===c?void 0:c.volume)}),Object(d.jsx)("td",{children:h(null===i||void 0===i?void 0:i.market_cap)})]})},f=(n(29),function(e){e.page;var t=e.count,n=e.onChange,c=e.prev,a=e.next;return Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)("button",{onClick:c,className:"page",children:"\u25c0"}),new Array(t).fill(0).map((function(e,t){return Object(d.jsx)("button",{onClick:function(){n(t+1)},className:"page",children:t+1},t)})),Object(d.jsx)("button",{onClick:a,className:"page",children:"\u25b6"})]})}),m=(n(30),function(e){var t=e.submitHandler,n=e.searchChangeInputHandler,a=e.search,r=e.btnClear,s=Object(c.useState)(""),i=Object(l.a)(s,2),u=i[0],o=i[1],j=Object(c.useCallback)((function(){o(""==u?"active":"")}),[u]),b=Object(c.useCallback)((function(e){e.preventDefault(),a.setSearchValue("")}),[a]);return Object(d.jsxs)("div",{className:"search ".concat(u),children:[Object(d.jsx)("div",{onClick:j,className:"icon"}),Object(d.jsx)("div",{className:"input",children:Object(d.jsx)("input",{type:"text",placeholder:"Search By ids, smaple:BTC",onChange:n,value:null===a||void 0===a?void 0:a.searchValue,className:"input-search"})}),r&&Object(d.jsx)("span",{onClick:b,className:"clear"}),Object(d.jsx)("span",{onClick:t,className:"submit",children:Object(d.jsx)("span",{className:"submit-icon",children:"\ud83d\udd0e"})})]})}),x=n(8),O=n.n(x),v="".concat("https://api.nomics.com/v1/","currencies/ticker"),g="bc281b24f1951347de7e1c4b54ee193e5dbb6c0c",w=(navigator.language,"USD"),y=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(v,"?&per-page=").concat(100,"&page=").concat(t,"&currency=").concat(w,"&key=").concat(g));case 2:return n=e.sent,e.next=5,n.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(v,"?interval=1h,1d,7d,30d,365d,ytd&ids=").concat(t,"&quote-currency=").concat(w,"&key=").concat(g));case 2:return n=e.sent,e.next=5,n.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=n(10),C=function(e,t){var n=Object(c.useState)(1),a=Object(l.a)(n,2),r=a[0],s=a[1],i=Object(k.useCallback)(Object(o.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return clearInterval(t.intervalId),n.t0=e,n.next=4,y(r);case 4:n.t1=n.sent,(0,n.t0)(n.t1),null===t||void 0===t||t.setIntervalId(setInterval(Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,y(r);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)}))),1e4));case 7:case"end":return n.stop()}}),n)}))),[r,t.intervalId]);Object(k.useEffect)(Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:case"end":return e.stop()}}),e)}))),[r]);return{next:function(){s((function(e){return Math.min(e+1,100)}))},prev:function(){s((function(e){return Math.max(e-1,1)}))},jump:function(e){var t=Math.max(1,e);s((function(e){return Math.min(t,100)}))},currentData:i,currentPage:r,maxPage:100}};var I=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),i=s[0],b=s[1],h=Object(c.useState)(),x=Object(l.a)(h,2),O=x[0],v=x[1],g=C(a,{intervalId:O,setIntervalId:v}),w=Object(c.useCallback)(function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),clearInterval(O),e.t0=a,e.next=5,N(i);case 5:e.t1=e.sent,(0,e.t0)(e.t1),v(setInterval(Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,N(i);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),1e4));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[O,i]),y=Object(c.useCallback)((function(e){b(e.target.value)}),[i]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{style:{cursor:"pointer"},onClick:Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.currentData();case 2:case"end":return e.stop()}}),e)}))),children:"Crypto prices"}),Object(d.jsx)(m,{search:{searchValue:i,setSearchValue:b},submitHandler:w,searchChangeInputHandler:y})]}),Object(d.jsx)(j,{data:n,header:["NAME","PRICE","1D CHANGE","VOLUME","MARKET CAP"],rowMap:function(e,t){return Object(d.jsx)(p,{i:t,rowData:e},e.id)}}),Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)(f,{count:10,onChange:function(e){g.jump(e)},prev:g.prev,next:g.next})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),S()}},[[49,1,2]]]);
//# sourceMappingURL=main.1aa1fde3.chunk.js.map