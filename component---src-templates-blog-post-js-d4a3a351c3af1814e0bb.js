(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2yjy":function(t,e,r){},"6GVF":function(t,e,r){"use strict";r.r(e);var n=r("rePB"),o=r("dI71"),c=r("q1tI"),i=r.n(c),a=r("A2+M"),u=r("yBb5"),p=r("ZEsj"),l=r("b+fq"),s=r.n(l),f=(r("2yjy"),{clientID:{}.GITHUB_ID,clientSecret:{}.GITHUB_SECRET,repo:"cpannwitz.github.io",owner:"cpannwitz",admin:["cpannwitz"],distractionFreeMode:!1});function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b="undefined"!=typeof window?r("dnEz"):void 0,m=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var r=e.prototype;return r.componentDidMount=function(){var t=this.props.data.mdx.frontmatter,e=t.title,r=t.slug;new b(d(d({},f),{},{title:e,id:r})).render("gitalk-container")},r.render=function(){var t=this.props.data,e=t.mdx,r=t.site.siteMetadata.title;return i.a.createElement(u.a,{location:this.props.location,title:r},i.a.createElement(p.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("article",{className:s.a.article},i.a.createElement("header",{className:s.a.header},i.a.createElement("h1",{className:s.a.title},e.frontmatter.title),i.a.createElement("small",{className:s.a.date},e.frontmatter.date)),i.a.createElement(a.MDXRenderer,null,e.body)),i.a.createElement("div",{id:"gitalk-container"}))},e}(i.a.Component);e.default=m},"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),c=r("ZhPi"),i=r("Bnag");t.exports=function(t){return n(t)||o(t)||c(t)||i()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),o=r("RIqP"),c=r("lSNA"),i=r("8OQS");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=r("q1tI"),l=r("7ljp").mdx,s=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,c=i(t,["scope","children"]),a=s(e),f=p.useMemo((function(){if(!r)return null;var t=u({React:p,mdx:l},a),e=Object.keys(t),c=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,e]);return p.createElement(f,u({},c))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},"b+fq":function(t,e,r){t.exports={header:"BlogPost-module--header--3Ufps",title:"BlogPost-module--title--2ADao",article:"BlogPost-module--article--NAkcg"}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sXyB:function(t,e,r){var n=r("SksO"),o=r("b48C");function c(e,r,i){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,r){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return r&&n(c,r.prototype),c},c.apply(null,arguments)}t.exports=c}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d4a3a351c3af1814e0bb.js.map