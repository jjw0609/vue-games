"use strict";(self["webpackChunkvue3_jjw_game"]=self["webpackChunkvue3_jjw_game"]||[]).push([[138],{579:function(t,a,o){o.d(a,{Z:function(){return m}});var e=o(3396);const l={class:"text-center"},n=(0,e._)("hr",null,null,-1),r=(0,e._)("p",null,"© Company 2022-2023",-1),s=[n,r];function c(t,a,o,n,r,c){return(0,e.wg)(),(0,e.iD)("footer",l,s)}var i={},u=o(89);const d=(0,u.Z)(i,[["render",c]]);var m=d},1505:function(t,a,o){o.d(a,{Z:function(){return _}});var e=o(3396);const l={class:"navbar navbar-expand-lg navbar-dark bg-dark"},n={class:"container-fluid"},r=(0,e._)("a",{class:"navbar-brand",href:"#"},"게임사이트",-1),s=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarScroll"},i={class:"navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll",style:{"--bs-scroll-height":"100px"}},u={class:"nav-item"},d={class:"nav-item"},m={class:"nav-item"},v=(0,e._)("li",{class:"nav-item"},[(0,e._)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true"})],-1),g=(0,e._)("form",{class:"d-flex"},[(0,e._)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),(0,e._)("button",{class:"btn btn-outline-success",type:"submit"},"Search")],-1);function h(t,a,o,h,f,b){const p=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("header",null,[(0,e._)("nav",l,[(0,e._)("div",n,[r,s,(0,e._)("div",c,[(0,e._)("ul",i,[(0,e._)("li",u,[(0,e.Wm)(p,{class:"nav-link active","aria-current":"page",to:"/"},{default:(0,e.w5)((()=>[(0,e.Uk)("로또")])),_:1})]),(0,e._)("li",d,[(0,e.Wm)(p,{class:"nav-link active","aria-current":"page",to:"/rsp"},{default:(0,e.w5)((()=>[(0,e.Uk)("가위바위보")])),_:1})]),(0,e._)("li",m,[(0,e.Wm)(p,{class:"nav-link active","aria-current":"page",to:"/board"},{default:(0,e.w5)((()=>[(0,e.Uk)("게시판")])),_:1})]),v]),g])])])])}var f={},b=o(89);const p=(0,b.Z)(f,[["render",h]]);var _=p},3464:function(t,a,o){o.r(a),o.d(a,{default:function(){return Z}});var e=o(3396);const l={class:"lotto"};function n(t,a,o,n,r,s){const c=(0,e.up)("header-common"),i=(0,e.up)("lotto-main"),u=(0,e.up)("FooterCommon");return(0,e.wg)(),(0,e.iD)("div",l,[(0,e.Wm)(c),(0,e.Wm)(i),(0,e.Wm)(u)])}var r=o(1505),s=o(579);const c={class:"container"},i={class:"row mt-sm-5"};function u(t,a,o,l,n,r){const s=(0,e.up)("lotto-ball");return(0,e.wg)(),(0,e.iD)("div",c,[(0,e._)("div",i,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(n.lottoSet,(t=>((0,e.wg)(),(0,e.j4)(s,{key:t,lottoNum:t},null,8,["lottoNum"])))),128))])])}var d=o(7139);const m={class:"col-lg-2 mt-3 d-flex justify-content-around"},v={class:"rounded-circle",margin:"30",width:"140",height:"140",focusable:"false"},g=["fill"],h={"text-anchor":"middle",x:"50%",y:"50%",fill:"white",dy:".3em","font-size":"60"};function f(t,a,o,l,n,r){return(0,e.wg)(),(0,e.iD)("div",m,[((0,e.wg)(),(0,e.iD)("svg",v,[(0,e._)("rect",{width:"100%",height:"100%",fill:r.getColor()},null,8,g),(0,e._)("text",h,(0,d.zw)(o.lottoNum),1)]))])}var b={name:"LottoBall",props:{lottoNum:Number},created(){console.log("생성된 숫자"+this.lottoNum)},methods:{getColor(){let t="black";return t=this.lottoNum>0&&this.lottoNum<=10?"gold":this.lottoNum>10&&this.lottoNum<=20?"green":this.lottoNum>20&&this.lottoNum<=30?"gray":this.lottoNum>30&&this.lottoNum<=40?"blue":"black",t}}},p=o(89);const _=(0,p.Z)(b,[["render",f],["__scopeId","data-v-4f6a66f4"]]);var w=_,k={name:"LottoMain",components:{LottoBall:w},data(){return{lottoSet:new Set}},created(){console.log(typeof this.lottoSet);while(6!=this.lottoSet.size){const t=Math.ceil(45*Math.random()+1);this.lottoSet.add(t)}for(let t of this.lottoSet)console.log(t)}};const N=(0,p.Z)(k,[["render",u],["__scopeId","data-v-f0c6662e"]]);var y=N,S={name:"LottoMainView",components:{HeaderCommon:r.Z,FooterCommon:s.Z,LottoMain:y}};const x=(0,p.Z)(S,[["render",n]]);var Z=x}}]);
//# sourceMappingURL=lottomainview.9f5915d1.js.map