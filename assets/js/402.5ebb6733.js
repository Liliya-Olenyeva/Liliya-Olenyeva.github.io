"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[402],{7402:(e,t,n)=>{n.r(t),n.d(t,{default:()=>me});var a=n(6252),o=n(9963),r=n(2262),l=n(2119),i=n(7621),s=n(6590),m=n(9755),c=n.n(m),d=n(833),h=n(3577);const u={class:"page-top-share"},g={id:"theme-default-content",class:"theme-default-content pageContent medium-zoom-content"},p={class:"recommend-page"};var v=n(4991);const y={class:"page-meta"},P=["data"],f={key:1,class:"meta-item last-updated"},w={class:"meta-item-label"},b={class:"meta-item-info"},k={key:2,class:"meta-item contributors"},x={class:"meta-item-label"},L={class:"meta-item-info"},I=["title"],C=(0,a.Uk)(", ");var D=n(1628),S=n(9785),N=n(1366);const _=(0,a.aZ)({name:"PageMeta",components:{Poster:N.Z,NavLink:S.Z},setup(){const e=(0,s.X6)();let t=(()=>{const e=(0,s.X6)(),t=(0,i.Vi)(),n=(0,i.I2)();return(0,r.Fl)((()=>{var a,o;if(null!=(o=null!=(a=n.value.editLink)?a:e.value.editLink)&&!o)return null;const{repo:r,docsRepo:l=r,docsBranch:i="main",docsDir:s="",editLinkText:m}=e.value;if(!l)return null;const c=(0,D.Fg)({docsRepo:l,docsBranch:i,docsDir:s,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=m?m:"Edit this page",link:c}:null}))})();const n=(()=>{const e=(0,i.I5)(),t=(0,s.X6)(),n=(0,i.Vi)(),a=(0,i.I2)();return(0,r.Fl)((()=>{var o,r,l,i;return(null==(r=null!=(o=a.value.lastUpdated)?o:t.value.lastUpdated)||r)&&(null==(l=n.value.git)?void 0:l.updatedTime)?new Date(null==(i=n.value.git)?void 0:i.updatedTime).toLocaleString(e.value.lang):null}))})(),a=(()=>{const e=(0,s.X6)(),t=(0,i.Vi)(),n=(0,i.I2)();return(0,r.Fl)((()=>{var a,o,r,l;return null!=(o=null!=(a=n.value.contributors)?a:e.value.contributors)&&!o||null==(l=null==(r=t.value.git)?void 0:r.contributors)?null:l}))})(),o=(0,i.Vi)();if(e.value.githubActions&&void 0!==e.value.docsRepo){let n=o.value.filePathRelative,a=e.value.docsRepo,r="";r=void 0!==e.value.docsBranch?e.value.docsBranch:"main",t.value.link=a+"/edit/"+r+"/docs/"+n}return{themeLocale:e,editNavLink:t,lastUpdated:n,contributors:a}}});var T=n(3744);const j=(0,T.Z)(_,[["render",function(e,t,n,o,r,l){const i=(0,a.up)("NavLink");return(0,a.wg)(),(0,a.iD)("footer",y,[e.editNavLink?((0,a.wg)(),(0,a.iD)("div",{key:0,data:e.editNavLink,class:"meta-item edit-link"},[(0,a.Wm)(i,{class:"meta-item-label",item:e.editNavLink},null,8,["item"])],8,P)):(0,a.kq)("",!0),e.lastUpdated?((0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("span",w,(0,h.zw)(e.themeLocale.lastUpdatedText)+": ",1),(0,a._)("span",b,(0,h.zw)(e.lastUpdated),1)])):(0,a.kq)("",!0),e.contributors&&e.contributors.length?((0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("span",x,(0,h.zw)(e.themeLocale.contributorsText)+": ",1),(0,a._)("span",L,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.contributors,((t,n)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:n},[(0,a._)("span",{class:"contributor",title:`email: ${t.email}`},(0,h.zw)(t.name),9,I),n!==e.contributors.length-1?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[C],64)):(0,a.kq)("",!0)],64)))),128))])])):(0,a.kq)("",!0)])}]]),M={key:0,class:"page-nav"},R={class:"inner"},A={key:0,class:"prev"},H=(0,a.Uk)(" ← "),$={key:1,class:"next"},q=(0,a.Uk)(" → ");var W=n(480);const O=e=>!1===e?null:(0,W.HD)(e)?(0,s.sC)(e):!!(0,W.PO)(e)&&e,Z=(e,t,n)=>{const a=e.findIndex((e=>e.link===t));if(-1!==a){const t=e[a+n];return(null==t?void 0:t.link)?t:null}for(const a of e)if(a.children){const e=Z(a.children,t,n);if(e)return e}return null},z=(0,a.aZ)({name:"PageNav",components:{NavLink:S.Z},setup(){const e=(0,i.I2)(),t=(0,s.VU)(),n=(0,l.yj)();return{prevNavLink:(0,r.Fl)((()=>{const a=O(e.value.prev);return!1!==a?a:Z(t.value,n.path,-1)})),nextNavLink:(0,r.Fl)((()=>{const a=O(e.value.next);return!1!==a?a:Z(t.value,n.path,1)}))}}}),B=(0,T.Z)(z,[["render",function(e,t,n,o,r,l){const i=(0,a.up)("NavLink");return e.prevNavLink||e.nextNavLink?((0,a.wg)(),(0,a.iD)("nav",M,[(0,a._)("p",R,[e.prevNavLink?((0,a.wg)(),(0,a.iD)("span",A,[H,(0,a.Wm)(i,{item:e.prevNavLink},null,8,["item"])])):(0,a.kq)("",!0),e.nextNavLink?((0,a.wg)(),(0,a.iD)("span",$,[(0,a.Wm)(i,{item:e.nextNavLink},null,8,["item"]),q])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)}]]),U=(0,a._)("h2",{id:"recommend-top-title"},"推荐阅读",-1),V={id:"recommend",class:"recommend"},Y={class:"recommend-item",id:"recommend-item"},F={class:"recommend-bottom"},X={class:"recommend-tag recommend-common"},E={class:"recommend-title recommend-common"},K=["href"],G={name:"RecommendItem",data:()=>({recommendNoTitle:"`╮(￣▽￣)╭`"}),props:{item:null,index:null,themeProperty:""},computed:{setSpanStyle(){return e=>{let t="";return t=void 0!==this.themeProperty.randomColor?this.themeProperty.randomColor[this.getRandomInt(0,this.themeProperty.randomColor.length-1)]:this.$store.state.defaultRandomColors[this.getRandomInt(0,this.$store.state.defaultRandomColors.length-1)],"background-color: "+t+";"}},getHref(){let e=this.item.articleUrl,t=(0,i.I5)().value.base;return t="/"===t?"":t,window.location.origin+t+e}},created(){void 0!==this.themeProperty.recommendNoTitle&&(this.recommendNoTitle=this.themeProperty.recommendNoTitle)},methods:{getRandomInt:(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e)}},J={name:"RecommendPage",components:{RecommendItem:(0,T.Z)(G,[["render",function(e,t,n,o,r,l){return(0,a.wg)(),(0,a.iD)("div",Y,[(0,a._)("div",{style:(0,h.j5)(l.setSpanStyle(n.index)),class:"recommend-top"},[(0,a._)("div",F,[(0,a._)("div",X,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.item.tag,((e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("span",{style:(0,h.j5)(l.setSpanStyle(t+1))},(0,h.zw)(e),5)])))),256))]),(0,a._)("div",E,[(0,a._)("a",{href:l.getHref},[(0,a._)("span",null,(0,h.zw)(""===n.item.title?r.recommendNoTitle:n.item.title),1)],8,K)])])],4)])}]])},data:()=>({allPages:null}),props:{themeProperty:""},mounted(){setTimeout((()=>{let e=this.$store.state.allPageMap;new Promise(((t,n)=>{let a=[],o=30;if(void 0!==this.themeProperty.recommendPageLength&&null!=this.themeProperty.recommendPageLength&&(o=this.themeProperty.recommendPageLength),o<e.length)for(let t=0;t<o;t++)a.push(e[this.getRandomInt(0,e.length-1)]);else for(let t=0;t<e.length;t++)a.push(e[this.getRandomInt(0,e.length-1)]);t(a)})).then((e=>{this.allPages=e}))}),700)},methods:{getRandomInt:(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e)}},Q=(0,T.Z)(J,[["render",function(e,t,n,o,r,l){const i=(0,a.up)("recommend-item"),s=(0,a.up)("BCenter");return(0,a.wg)(),(0,a.j4)(s,null,{"page-center1":(0,a.w5)((()=>[U])),"page-center3":(0,a.w5)((()=>[(0,a._)("div",V,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.allPages,((e,t)=>((0,a.wg)(),(0,a.j4)(i,{item:e,key:t,"theme-property":n.themeProperty,index:t},null,8,["item","theme-property","index"])))),128))])])),_:1})}]]),ee={class:"page-next-left page-next-item"},te=["data"],ne={key:0,class:"page-next-right page-next-item"},ae=["data"],oe={name:"PageNextItem",data:()=>({currentCatalogObjectArr:null,prePage:"",nextPage:""}),computed:{getBgSrc(){let e=this.getRandomInt(-9999,999),t=this.getRandomInt(0,300),n=t/this.getRandomInt(0,30)*e+t,a=(0,s.X6)().value.homePageImgApi;return void 0===a&&(a=this.$store.state.defaultHomePageImgApi),"--homePageImgApi: url("+a+"?time="+n+");"}},created(){let e=setInterval((()=>{0!==this.$store.state.currentCatalogObjectArr.length&&(this.currentCatalogObjectArr=this.$store.state.currentCatalogObjectArr,clearInterval(e),this.setPageNext())}),50)},methods:{getRandomInt:(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e),setPageNext(){if(1===this.currentCatalogObjectArr.length)return void(this.prePage=this.currentCatalogObjectArr[0]);let e=this.$route.path,t=0;new Promise(((n,a)=>{for(let n=0;n<this.currentCatalogObjectArr.length;n++)if(this.currentCatalogObjectArr[n].path===e){t=n;break}n()})).then((()=>{let e=this.currentCatalogObjectArr[(t-1)%this.currentCatalogObjectArr.length];this.prePage=void 0===e?this.currentCatalogObjectArr[this.currentCatalogObjectArr.length-1]:e,this.nextPage=this.currentCatalogObjectArr[(t+1)%this.currentCatalogObjectArr.length]}))}}},re=(0,T.Z)(oe,[["render",function(e,t,n,o,r,l){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",{style:(0,h.j5)(l.getBgSrc),class:"page-bottom-next"},[(0,a._)("div",ee,[(0,a.Wm)(i,{to:void 0===r.prePage.path?"":r.prePage.path},{default:(0,a.w5)((()=>[(0,a._)("span",{data:r.prePage.path},(0,h.zw)(r.prePage.title),9,te)])),_:1},8,["to"])]),""!==r.nextPage?((0,a.wg)(),(0,a.iD)("div",ne,[(0,a.Wm)(i,{to:void 0===r.nextPage.path?"":r.nextPage.path},{default:(0,a.w5)((()=>[(0,a._)("span",{data:r.nextPage.path},(0,h.zw)(r.nextPage.title),9,ae)])),_:1},8,["to"])])):(0,a.kq)("",!0)],4)}]]),le=(0,a.aZ)({name:"Page",components:{PageMeta:j,PageNav:B,RecommendPage:Q,Mood:v.Z,PageNext:re},data:()=>({lazyLoadingImg:null,originPageData:"",posterContent:"",title:"",showMobileCatalog:!0}),props:{pathName:"",themeProperty:""},computed:{showDonate(){let e=!0;try{e=this.themeProperty.donate.articlePage}catch(e){}return e}},emits:["getHeadLine"],created(){this.$store.state.openMobileSidebar&&this.$store.commit("setOpenMobileSidebar",{openMobileSidebar:!1});const e=(0,i.Vi)();this.originPageData=e,this.$emit("getHeadLine",e.value.title);let t=this.themeProperty.lazyLoadingImg;this.lazyLoadingImg=void 0===t?"https://ooszy.cco.vin/img/blog-public/ljz.gif":t},methods:{getPosterText:()=>new Promise(((e,t)=>{let n=c()(".pageContent p"),a="";if(n.length>30)for(let e=0;e<30;e++)a+=n[e].innerText;else for(let e=0;e<n.length;e++)a+=n[e].innerText;a=a.replace(/\r\n/g,""),a=a.replace(/\n/g,""),a=a.replace(/\s/g,""),a=a.replace("#",""),a=a.replace("#\n",""),a=a.replace("##\n",""),a=a.replace("##",""),e(a)})),start(){let e=c()(".pageContent img");for(let t=0;t<e.length;t++){let n=document.body.clientWidth,a=e[t],o=a.offsetTop,r=c()(window).scrollTop(),l="";l=n<600?o-r-350:o-(r+50),l<0&&this.loadImg(a)}},loadImg(e){let t=e.getAttribute("data-origin");e.setAttribute("src",t)},setOtherProperty(e,t){},setDesc(e){let t=document.querySelectorAll('meta[name="description"]');if(0!==t.length)new Promise(((e,n)=>{for(let e=0;e<t.length;e++)document.querySelector("head").removeChild(t[e]);e()})).then((()=>{let t=c()('<meta name="description" content="'+e+'">').get(0);document.querySelector("head").appendChild(t)}));else{let t=c()('<meta name="description" content="'+e+'">').get(0);document.querySelector("head").appendChild(t)}},setKeyword(e){let t=document.querySelector('meta[name="keyword"]');if(null===t){let t=c()('<meta name="keyword" content="'+e+'">').get(0);document.querySelector("head").appendChild(t)}else t.setAttribute("content",e)},setMeta(){let e=this.originPageData.frontmatter.description,t=this.originPageData.frontmatter.keyword,n="",a="",o=document.querySelector("#theme-default-content").innerText;o=o.replace(/[\r\n]/g,""),o=o.replace(" ",""),o.length>220&&(o=o.substr(0,220)),a=void 0===e||null==e?o:e,n=void 0===t||null==t?o.length>90?o.substr(0,90):o:t,this.setKeyword(n),this.setDesc(a),this.setOtherProperty(n,a)}},mounted(){c()(window).on("scroll",(()=>{this.start()})),this.$nextTick((()=>{this.getPosterText().then((e=>{this.posterContent=e})),this.setMeta()}));let e=c()(".pageContent img");for(let t=0;t<e.length;t++){let n=e[t].src;e[t].setAttribute("data-origin",n),e[t].src=this.lazyLoadingImg}let t=c()("#c-page h1");t.length>0&&c()(t[0]).css("display","none")}}),ie=(0,T.Z)(le,[["render",function(e,t,n,o,r,l){const i=(0,a.up)("poster"),s=(0,a.up)("Content"),m=(0,a.up)("PageMeta"),c=(0,a.up)("page-next"),d=(0,a.up)("b-center"),v=(0,a.up)("donate"),y=(0,a.up)("RecommendPage"),P=(0,a.up)("comment");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("main",{style:(0,h.j5)(e.$store.state.borderRadiusStyle+e.$store.state.opacityStyle),class:"page sidebar-single-enter-animate",id:"article-page"},[(0,a.WI)(e.$slots,"top"),(0,a._)("div",u,[(0,a.Wm)(i,{title:e.originPageData.title,content:e.posterContent},null,8,["title","content"])]),(0,a._)("div",g,[(0,a.Wm)(s)]),(0,a.Wm)(m),(0,a.WI)(e.$slots,"bottom")],4),(0,a.Wm)(d,null,{"page-center1":(0,a.w5)((()=>[(0,a.Wm)(c)])),_:1}),(0,a._)("div",null,[e.showDonate?((0,a.wg)(),(0,a.j4)(v,{key:0})):(0,a.kq)("",!0)]),(0,a._)("div",p,[(0,a.Wm)(y,{"theme-property":e.themeProperty},null,8,["theme-property"])]),(0,a.Wm)(P,{"path-name":e.pathName},null,8,["path-name"])],64)}]]),se=(0,a.aZ)({name:"Layout",components:{Home:d.Z,Page:ie,Transition:o.uT},props:{showPrintTextValue:{type:Boolean,default:()=>!1}},setup(){const e=(0,i.Vi)(),t=(0,i.I2)(),n=(0,s.X6)(),o=(0,r.Fl)((()=>!1!==t.value.navbar&&!1!==n.value.navbar)),m=((0,s.VU)(),(0,r.iH)(!1)),d=e=>{m.value="boolean"==typeof e?e:!m.value,m.value&&c()("#c-sidebar").css("display","block")},h={x:0,y:0};let u;(0,a.bv)((()=>{const e=(0,l.tv)();u=e.afterEach((()=>{d(!1)}))})),(0,a.Ah)((()=>{u()}));const g=(0,s.P$)(),p=g.resolve,v=g.pending;return{frontmatter:t,page:e,shouldShowNavbar:o,toggleSidebar:d,onTouchStart:e=>{h.x=e.changedTouches[0].clientX,h.y=e.changedTouches[0].clientY},onTouchEnd:e=>{const t=e.changedTouches[0].clientX-h.x,n=e.changedTouches[0].clientY-h.y;Math.abs(t)>Math.abs(n)&&Math.abs(t)>40&&(t>0&&h.x<=80?d(!0):d(!1))},onBeforeEnter:p,onBeforeLeave:v}},created(){this.themeProperty=(0,s.BV)().value},mounted(){this.$router.beforeEach(((e,t,n)=>{n()}))},data:()=>({isShow:!1,animeImg:"",headLine:"",isShowSideBar:"",themeProperty:null}),methods:{showPrintText(e){console.log(e)},getHeadLine(e){this.headLine=e}},computed:{setBackgroundUrl(){return"background-image: url("+this.animeImg+");"},getIsHome(){let e=(0,i.I2)().value.home;return this.isShowSideBar=void 0===e,this.isShowSideBar}}}),me=(0,T.Z)(se,[["render",function(e,t,n,o,r,l){const i=(0,a.up)("Home"),s=(0,a.up)("Page"),m=(0,a.up)("common"),c=(0,a.up)("Footer"),d=(0,a.up)("home-bottom");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(m,{"is-sticky-sidebar":!e.frontmatter.home,"head-line":e.headLine,"is-show-head-line":!e.frontmatter.home,"is-show-catalog":!e.frontmatter.home,"is-show-top-img":e.getIsHome},{center1:(0,a.w5)((()=>[e.frontmatter.home?((0,a.wg)(),(0,a.j4)(i,{key:0,"theme-property":e.themeProperty,"is-home":e.frontmatter.home},null,8,["theme-property","is-home"])):(0,a.kq)("",!0)])),center2:(0,a.w5)((()=>[e.frontmatter.home?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(s,{"path-name":e.page.path,onGetHeadLine:e.getHeadLine,"theme-property":e.themeProperty,key:e.page.path},{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-bottom")])),_:3},8,["path-name","onGetHeadLine","theme-property"]))])),_:3},8,["is-sticky-sidebar","head-line","is-show-head-line","is-show-catalog","is-show-top-img"]),e.frontmatter.home?((0,a.wg)(),(0,a.j4)(d,{key:0},{"home-footer":(0,a.w5)((()=>[(0,a.Wm)(c,{"theme-property":e.themeProperty,"is-home":!e.frontmatter.home,"is-show-footer":!0},null,8,["theme-property","is-home"])])),_:1})):(0,a.kq)("",!0)],64)}]])}}]);