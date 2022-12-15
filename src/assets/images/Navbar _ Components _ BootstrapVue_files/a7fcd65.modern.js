(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{351:function(t,e,r){"use strict";var n=r(70),o=r(36),c=t=>{if(t&&"click"===t.type){var e=t.target&&t.target.closest?t.target.closest("a[href]"):null;if(!(!e||"click"!==t.type||e.__vue__||e.closest(".bd-example")||e.closest("pre")||t.defaultPrevented)){var r=e.getAttribute("href");r&&0===r.indexOf("/")&&0!==r.indexOf("//")?(t.preventDefault(),"undefined"!=typeof window&&window.$nuxt&&window.$nuxt.$router.push(r)):r&&0===r.indexOf("#")&&Object(o.i)(t,r)}}};e.a={name:"BVSection",functional:!0,props:{tag:{type:String,default:"section"},play:{type:Boolean,default:!1}},render(t,e){var{props:r,data:data,children:o}=e,l=[];return r.play&&l.push({name:"play"}),t(r.tag,Object(n.a)(data,{class:["bd-content"],directives:l,on:{click:c}}),[o])}}},352:function(t,e,r){"use strict";r(17),r(18);e.a={name:"BVCarbonAd",props:{id:{type:String,default:"_carbonads_js"},url:{type:String,default:"//cdn.carbonads.com/carbon.js"},serve:{type:String,default:"CE7ITK77"},placement:{type:String,default:"bootstrap-vuejsorg"}},data:()=>({mounted:!1}),computed:{src(){return"".concat(this.url,"?serve=").concat(this.serve,"&placement=").concat(this.placement)}},mounted(){var t=document.querySelectorAll('head > script[id="_carbonads_projs"]');for(var e of t)try{e.parentNode.removeChild(e)}catch(t){}this.$nextTick((()=>{requestAnimationFrame((()=>{this.mounted=!0}))}))},beforeDestroy(){this.mounted=!1},render(t){var e=t();return this.mounted&&(e=t("script",{attrs:{id:this.id,async:"async",type:"text/javascript",src:this.src}})),t("aside",{staticClass:"bv-carbon-ad"},[e])}}},354:function(t,e,r){"use strict";var n=r(70);e.a={name:"BVMain",functional:!0,props:{tag:{type:String,default:"main"}},render(t,e){var{props:r,data:data,children:o}=e;return t(r.tag,Object(n.a)(data,{staticClass:"bd-main"}),[o])}}},355:function(t,e,r){"use strict";r(24),r(192),r(20);var n=r(36),o=r(62),c={};e.a={head(){return{title:this.headTitle,meta:this.headMeta}},computed:{headTitle(){var t=this.$route.name,title="",section="";return this.meta&&this.meta.title&&(title=this.meta.title),/^docs-components/.test(t)?section="Components":/^docs-directives/.test(t)?section="Directives":/^docs-reference/.test(t)&&(section="Reference"),[title,section,"BootstrapVue"].filter(Boolean).join(" | ")},headMeta(){var section=this.$route.name.split("-")[1],t=section?o.j.find((t=>t.base==="".concat(section,"/"))):null,e=this.meta&&this.meta.description?this.meta.description:t&&t.description?t.description:o.f,meta=[{hid:"og:title",name:"og:title",property:"og:title",content:this.headTitle}];return e&&(meta.push({hid:"description",name:"description",content:e}),meta.push({hid:"og:description",name:"og:description",property:"og:description",content:e})),meta}},created(){this.$_filterTimer=null,this.$nextTick((()=>{var t="".concat(this.$route.name,"_").concat(this.$route.params.slug||""),e=c[t]||(c[t]=Object(n.k)(this.baseTOC||{},this.meta||null));this.$root.$emit("docs-set-toc",e)}))},mounted(){this.clearScrollTimeout(),this.focusScroll()},updated(){this.clearScrollTimeout(),this.focusScroll()},beforeDestroy(){this.clearScrollTimeout()},methods:{clearScrollTimeout(){clearTimeout(this.$_scrollTimeout),this.$_scrollTimeout=null},focusScroll(){var t=this.$route.hash;this.$nextTick((()=>{var e;t&&(e=this.$el.querySelector('[id="'.concat(t.replace("#",""),'"]')),this.scrollIntoView(e)),e||(e=this.$el.querySelector("h1")),e&&(e.tabIndex=-1,e.focus())}))},scrollIntoView(t){if(t){var e=document.scrollingElement||document.documentElement||document.body;this.clearScrollTimeout(),this.$_scrollTimeout=setTimeout((()=>{Object(n.j)(e,Object(n.e)(t)-70,100)}),100)}}}}},357:function(t,e,r){},360:function(t,e,r){"use strict";r(357)},362:function(t,e,r){"use strict";r(27),r(20),r(24),r(192);var n=r(352),main=r(354),section=r(351),o=r(62).j.reduce(((t,g)=>(t[g.base.replace(/\/$/,"")]=g,t)),{}),c={name:"BVSectionToc",components:{CarbonAd:n.a,Main:main.a,Section:section.a},layout:"docs",computed:{slug(){return this.$route.path.replace(/^\//,"").split("/")[1]||""},id(){return"bd-section-toc-".concat(this.slug)},group(){return o[this.slug]||{}},groupDescription(){return this.group.description},groupTitle(){var title=this.group.title||"";return"Components"===title?"Component groups":"Misc"===title?"Miscellaneous":title||""},pages(){return this.group.pages||[]}}},l=(r(360),r(33)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Main",[r("Section",{attrs:{tag:"header"}},[r("h1",{staticClass:"bv-no-focus-ring",attrs:{id:t.id,tabindex:"-1"}},[r("span",{staticClass:"bd-content-title"},[t._v("\n        "+t._s(t.groupTitle)+" "),r("span",{staticClass:"small text-muted"},[t._v("- table of contents")])])]),t._v(" "),t.groupDescription?r("p",{staticClass:"bd-lead"},[t._v(t._s(t.groupDescription))]):t._e()]),t._v(" "),r("CarbonAd",{key:"ad-{$route.path}"}),t._v(" "),r("Section",[r("b-list-group",{staticClass:"mb-5",attrs:{tag:"nav","aria-label":t.groupTitle+" section navigation"}},t._l(t.pages,(function(e){return r("b-list-group-item",{key:e.slug,attrs:{to:"/docs/"+t.slug+"/"+e.slug,"active-class":""}},[r("strong",{staticClass:"text-primary"},[t._v(t._s(e.title))]),t._v(" —\n        "),e.new?r("b-badge",{attrs:{variant:"success"}},[t._v("NEW")]):t._e(),t._v(" "),r("span",{staticClass:"text-muted"},[t._v(t._s(e.description))]),t._v(" "),e.version?r("b-badge",{attrs:{variant:"secondary"}},[t._v("v"+t._s(e.version))]):t._e()],1)})),1)],1)],1)}),[],!1,null,"a6bd3544",null);e.a=component.exports},512:function(t,e,r){"use strict";r.r(e);var n=r(362),o=r(355);e.default={name:"BVDocsReferenceIndex",extends:n.a,mixins:[o.a]}}}]);