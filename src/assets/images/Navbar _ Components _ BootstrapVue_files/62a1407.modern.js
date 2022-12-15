(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{351:function(t,e,r){"use strict";var o=r(70),n=r(36),c=t=>{if(t&&"click"===t.type){var e=t.target&&t.target.closest?t.target.closest("a[href]"):null;if(!(!e||"click"!==t.type||e.__vue__||e.closest(".bd-example")||e.closest("pre")||t.defaultPrevented)){var r=e.getAttribute("href");r&&0===r.indexOf("/")&&0!==r.indexOf("//")?(t.preventDefault(),"undefined"!=typeof window&&window.$nuxt&&window.$nuxt.$router.push(r)):r&&0===r.indexOf("#")&&Object(n.i)(t,r)}}};e.a={name:"BVSection",functional:!0,props:{tag:{type:String,default:"section"},play:{type:Boolean,default:!1}},render(t,e){var{props:r,data:data,children:n}=e,l=[];return r.play&&l.push({name:"play"}),t(r.tag,Object(o.a)(data,{class:["bd-content"],directives:l,on:{click:c}}),[n])}}},352:function(t,e,r){"use strict";r(17),r(18);e.a={name:"BVCarbonAd",props:{id:{type:String,default:"_carbonads_js"},url:{type:String,default:"//cdn.carbonads.com/carbon.js"},serve:{type:String,default:"CE7ITK77"},placement:{type:String,default:"bootstrap-vuejsorg"}},data:()=>({mounted:!1}),computed:{src(){return"".concat(this.url,"?serve=").concat(this.serve,"&placement=").concat(this.placement)}},mounted(){var t=document.querySelectorAll('head > script[id="_carbonads_projs"]');for(var e of t)try{e.parentNode.removeChild(e)}catch(t){}this.$nextTick((()=>{requestAnimationFrame((()=>{this.mounted=!0}))}))},beforeDestroy(){this.mounted=!1},render(t){var e=t();return this.mounted&&(e=t("script",{attrs:{id:this.id,async:"async",type:"text/javascript",src:this.src}})),t("aside",{staticClass:"bv-carbon-ad"},[e])}}},354:function(t,e,r){"use strict";var o=r(70);e.a={name:"BVMain",functional:!0,props:{tag:{type:String,default:"main"}},render(t,e){var{props:r,data:data,children:n}=e;return t(r.tag,Object(o.a)(data,{staticClass:"bd-main"}),[n])}}},355:function(t,e,r){"use strict";r(24),r(192),r(20);var o=r(36),n=r(62),c={};e.a={head(){return{title:this.headTitle,meta:this.headMeta}},computed:{headTitle(){var t=this.$route.name,title="",section="";return this.meta&&this.meta.title&&(title=this.meta.title),/^docs-components/.test(t)?section="Components":/^docs-directives/.test(t)?section="Directives":/^docs-reference/.test(t)&&(section="Reference"),[title,section,"BootstrapVue"].filter(Boolean).join(" | ")},headMeta(){var section=this.$route.name.split("-")[1],t=section?n.j.find((t=>t.base==="".concat(section,"/"))):null,e=this.meta&&this.meta.description?this.meta.description:t&&t.description?t.description:n.f,meta=[{hid:"og:title",name:"og:title",property:"og:title",content:this.headTitle}];return e&&(meta.push({hid:"description",name:"description",content:e}),meta.push({hid:"og:description",name:"og:description",property:"og:description",content:e})),meta}},created(){this.$_filterTimer=null,this.$nextTick((()=>{var t="".concat(this.$route.name,"_").concat(this.$route.params.slug||""),e=c[t]||(c[t]=Object(o.k)(this.baseTOC||{},this.meta||null));this.$root.$emit("docs-set-toc",e)}))},mounted(){this.clearScrollTimeout(),this.focusScroll()},updated(){this.clearScrollTimeout(),this.focusScroll()},beforeDestroy(){this.clearScrollTimeout()},methods:{clearScrollTimeout(){clearTimeout(this.$_scrollTimeout),this.$_scrollTimeout=null},focusScroll(){var t=this.$route.hash;this.$nextTick((()=>{var e;t&&(e=this.$el.querySelector('[id="'.concat(t.replace("#",""),'"]')),this.scrollIntoView(e)),e||(e=this.$el.querySelector("h1")),e&&(e.tabIndex=-1,e.focus())}))},scrollIntoView(t){if(t){var e=document.scrollingElement||document.documentElement||document.body;this.clearScrollTimeout(),this.$_scrollTimeout=setTimeout((()=>{Object(o.j)(e,Object(o.e)(t)-70,100)}),100)}}}}},356:function(t,e,r){},358:function(t,e,r){"use strict";r(20);var o=r(36),n={name:"BVQuickLinks",data:()=>({toc:{},offset:0,expanded:!1}),computed:{hasContent(){return!!this.toc.toc},toogleText(){return"".concat(this.expanded?"Hide":"Show"," page table of contents")}},created(){this.$root.$on("docs-set-toc",(t=>{this.expanded=!1,this.toc=t}))},mounted(){var t=document.body.querySelector("header.navbar");t&&(this.offset=t.offsetHeight+6)},methods:{scrollIntoView(t,e){t.preventDefault(),t.stopPropagation();var r=(e||"").replace(/#/g,""),n=document.body.querySelector('[id="'.concat(r,'"]'));if(n){var c=document.scrollingElement||document.documentElement||document.body;Object(o.j)(c,Object(o.e)(n)-70,100,(()=>{n.tabIndex=-1,n.focus()}))}}}},c=(r(359),r(33)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{class:["bd-quick-links","mb-3","d-xl-none",{"d-none":!t.hasContent}],attrs:{"aria-hidden":t.hasContent?null:"true"}},[t.hasContent?r("header",[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.bd-quick-links-collapse",modifiers:{"bd-quick-links-collapse":!0}}],staticClass:"font-weight-bold",attrs:{variant:"outline-secondary",size:"sm",block:""}},[t._v("\n      "+t._s(t.toogleText)+"\n    ")])],1):t._e(),t._v(" "),t.hasContent?r("b-collapse",{attrs:{id:"bd-quick-links-collapse",tag:"ul"},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},t._l(t.toc.toc,(function(h2){return r("li",{key:h2.href},[r("b-link",{attrs:{href:h2.href},on:{click:function(e){return t.scrollIntoView(e,h2.href)}}},[r("span",{domProps:{innerHTML:t._s(h2.label)}})]),t._v(" "),h2.toc&&h2.toc.length>0?r("ul",{key:"sub-"+h2.href},t._l(h2.toc,(function(h3){return r("li",{key:h3.href},[r("b-link",{attrs:{href:h3.href},on:{click:function(e){return t.scrollIntoView(e,h3.href)}}},[r("span",{domProps:{innerHTML:t._s(h3.label)}})])],1)})),0):t._e()],1)})),0):t._e()],1)}),[],!1,null,"68483bce",null);e.a=component.exports},359:function(t,e,r){"use strict";r(356)},363:function(t,e,r){"use strict";var o=r(352),main=r(354),n=r(358),section=r(351),c={name:"BVReload",render(t){var e=t("h1",[t("span",{staticClass:"bd-content-title"},"Updated documentation")]),r=t("p",{staticClass:"lead"},"Updated documentation is available. Please reload."),o=t("b-button",{props:{variant:"primary"},on:{click:()=>{window.location.reload(!0)}}},"Reload page");return t(section.a,[e,r,t("p",[o])])}},l=r(70);e.a={name:"BVMainDocs",functional:!0,props:{tag:{type:String,default:"main"},titleLead:{type:String,default:""},body:{type:String,default:""},meta:{type:Object,default:null},loadError:{type:Boolean,default:!1}},render(t,e){var{props:r,data:data,children:d}=e,{tag:m,titleLead:h,body:body,meta:meta,loadError:f}=r,{version:v}=meta||{},y=t(section.a,{props:{tag:"header",play:!1},domProps:{innerHTML:h||""}}),E=t();v&&(E=t(section.a,{props:{play:!1}},[t("p",{staticClass:"font-italic"},["Available in BootstrapVue since ",t("code",{staticClass:"text-nowrap"},"v".concat(v))])]));var k=f?t(c):t(),T=t(o.a),_=t(n.a),x=t(section.a,{props:{play:!0},domProps:{innerHTML:body||""}});return t(main.a,Object(l.a)(data,{props:{tag:m}}),[y,k,E,T,_,x,d])}}},415:function(t,e,r){var map={"./accessibility/README.md":[493,64],"./changelog/README.md":[494,65],"./color-variants/README.md":[495,70],"./contributing/README.md":[496,71],"./images/README.md":[497,72],"./router-links/README.md":[498,73],"./settings/README.md":[499,74],"./size-props/README.md":[500,75],"./spacing-classes/README.md":[501,76],"./starter-templates/README.md":[502,77],"./theming/README.md":[503,66],"./third-party/README.md":[504,67],"./utility-classes/README.md":[505,68],"./validation/README.md":[506,69]};function o(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return r.e(e[1]).then((function(){return r.t(o,7)}))}o.keys=function(){return Object.keys(map)},o.id=415,t.exports=o},519:function(t,e,r){"use strict";r.r(e);var o=r(21),n=(r(17),r(35),r(18),r(363)),c=r(355),l=r(62);e.default={name:"BDVReference",mixins:[c.a],layout:"docs",validate(t){var{params:e}=t;return Boolean(l.t[e.slug])},asyncData:t=>Object(o.a)((function*(){var{params:e}=t,o=e.slug,meta=l.t[o],n=(yield(t=>{try{return r(415)("./".concat(t,"/README.md"))}catch(t){return{default:{loadError:!0}}}})(o)).default,{titleLead:c="",body:body="",baseTOC:d={},loadError:m=!1}=n;return{meta:meta,titleLead:c,body:body,baseTOC:d,loadError:m}}))(),render(t){return t(n.a,{staticClass:"bd-components",props:{meta:this.meta,titleLead:this.titleLead,body:this.body,loadError:this.loadError}})}}}}]);