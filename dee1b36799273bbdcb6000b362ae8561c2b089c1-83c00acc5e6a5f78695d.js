(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7R1l":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("qhky"),l=a("Wbzz"),s=i.a.memo((function(e){var t=e.author,a=e.title,r=e.url,l=e.defaultTitle,s=e.datePublished,o=e.description,d=e.image,u=[{"@context":"http://schema.org","@type":"WebSite",url:r,name:a,alternateName:l}],c=e.isBlogPost?[].concat(u,[{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:a,image:d}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:r,name:a,alternateName:l,headline:a,image:{"@type":"ImageObject",url:d},description:o,author:{"@type":"Person",url:r,image:d,name:t},publisher:{"@type":"Person",url:r,image:d,name:t},mainEntityOfPage:{"@type":"WebSite","@id":r},datePublished:s}]):u;return i.a.createElement(n.Helmet,null,i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(c)))})),o=a("ZvMx"),d=a.n(o),u=function(e){var t,a,r=e.isBlogPost,l=e.siteMetadata,o=e.pageData,u=null!=o&&o.title?o.title+" | "+l.title:l.title,c=(null==o?void 0:o.description)||l.description,f=""+l.siteUrl+((null==o||null===(t=o.thumbnail)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.fluid.src)||d.a),m=null!=o&&o.slug?""+l.siteUrl+(null==o?void 0:o.slug):l.siteUrl,p=r&&null!=o&&o.date?o.date:void 0;return i.a.createElement(i.a.Fragment,null,i.a.createElement(n.Helmet,{defer:!0,htmlAttributes:{lang:l.language}},i.a.createElement("title",null,u),i.a.createElement("meta",{name:"description",content:c}),i.a.createElement("meta",{name:"image",content:f}),i.a.createElement("meta",{property:"og:url",content:m}),i.a.createElement("meta",{property:"og:type",content:r?"article":"website"}),i.a.createElement("meta",{property:"og:title",content:u}),i.a.createElement("meta",{property:"og:description",content:c}),i.a.createElement("meta",{property:"og:image",content:f}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:l.twitterHandle}),i.a.createElement("meta",{name:"twitter:title",content:u}),i.a.createElement("meta",{name:"twitter:description",content:c}),i.a.createElement("meta",{name:"twitter:image",content:f})),i.a.createElement(s,{isBlogPost:r,url:m,title:u,image:f,description:c,datePublished:p,author:l.author,defaultTitle:u}))};t.a=function(e){var t=Object(l.useStaticQuery)("745512391").site.siteMetadata;return i.a.createElement(u,Object.assign({siteMetadata:t},e))}},"9eSz":function(e,t,a){"use strict";var r=a("mBgD");t.__esModule=!0,t.default=void 0;var i,n=r(a("GE+h")),l=r(a("Rz0W")),s=r(a("u0WH")),o=r(a("SM4Z")),d=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=c(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+l+s+a+r+t+n+i+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(P,(0,o.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),s):s})),P=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));P.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,E=e.itemProp,w=e.loading,I=e.draggable,R=g||h;if(!R)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,o.default)({opacity:j?1:0,transition:k?"opacity "+y+"ms":"none"},s),V="boolean"==typeof b?"lightgray":b,W={transitionDelay:y+"ms"},M=(0,o.default)({opacity:this.state.imgLoaded?0:1},k&&W,s,f),C={title:t,alt:this.state.isVisible?"":a,style:M,className:m,itemProp:E},T=this.state.isHydrated?p(R):R[0];if(g)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),V&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&W)}),T.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:C,imageVariants:R,generateSources:L}),T.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:C,imageVariants:R,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,S(R),d.default.createElement(P,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:w},T,{imageVariants:R}))}}));if(h){var N=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete N.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},V&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},k&&W)}),T.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:C,imageVariants:R,generateSources:L}),T.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:C,imageVariants:R,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,S(R),d.default.createElement(P,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:w},T,{imageVariants:R}))}}))}return null},t}(d.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),H=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function V(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}j.propTypes={resolutions:k,sizes:H,fixed:V(u.default.oneOfType([k,u.default.arrayOf(k)])),fluid:V(u.default.oneOfType([H,u.default.arrayOf(H)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var W=j;t.default=W},ZvMx:function(e,t,a){e.exports=a.p+"static/icon-e1cfd5f539afdbdb0408769d670c8f2e.png"},k4FV:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,s=e.size,o=void 0===s?24:s,d=l(e,["color","size"]);return i.a.createElement("svg",n({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.a.createElement("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}))}));s.displayName="Folder";var o=s;t.a=function(e){var t=e.date,a=e.category,r=e.keywords;return i.a.createElement("small",null,i.a.createElement("span",null,t),a&&i.a.createElement("span",null," | ",i.a.createElement(o,{size:13})," ",a),r&&i.a.createElement("span",null," | ",r.map((function(e){return"#"+e+" "}))))}},w3zs:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=a("9eSz"),s=a.n(l),o=a("vOnD"),d=a("2v/j"),u=function(e){var t=e.thumbnail;return t&&"svg"===t.extension?i.a.createElement("img",{src:t.publicURL,alt:t.name,title:t.name}):t&&t.childImageSharp?i.a.createElement(s.a,{fluid:t.childImageSharp.fluid}):null},c=o.c.div.withConfig({displayName:"Thumbnail__ThumbnailContainer",componentId:"sc-1f29bld-0"})(["min-width:",";width:",";margin:",";"],(function(e){return e.fullWidth||e.isMobile?"100%":"30%"}),(function(e){return e.fullWidth||e.isMobile?"100%":"30%"}),(function(e){return e.fullWidth||e.isMobile?"2rem 0":"0 2rem 0 0"}));t.a=function(e){var t=e.postLink,a=e.thumbnail,r=Object(d.a)();return t?i.a.createElement(c,{isMobile:r},i.a.createElement(n.Link,{to:t},i.a.createElement(u,{thumbnail:a}))):i.a.createElement(c,{fullWidth:!0,isMobile:r},i.a.createElement(u,{thumbnail:a}))}}}]);
//# sourceMappingURL=dee1b36799273bbdcb6000b362ae8561c2b089c1-83c00acc5e6a5f78695d.js.map