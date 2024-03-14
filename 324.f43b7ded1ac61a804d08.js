"use strict";(self.webpackChunkappgastos_frontend=self.webpackChunkappgastos_frontend||[]).push([[324],{5324:(R,I,u)=>{u.r(I),u.d(I,{VehiclesModule:()=>k});var C=u(4364),o=u(335),F=u(8379),N=u(881),T=u(4664),f=u(5709),S=u(7787),h=u(9369),y=u(1318),d=u(2316),r=u(5540),w=u(2e3),D=u(5409);let K=(()=>{class l{constructor(e,t,c,n){this.activatedRoute=e,this.store=t,this.storeSrv=c,this.actions=n,this.params={},this.validationInitial=!1,this.subP=new y.w,this.susA=new y.w,this.subP=this.activatedRoute.queryParams.subscribe(i=>{}),this.susA=this.actions.subscribe(i=>{})}ngOnInit(){return(0,h.Z)(function*(){})()}getAllData(e=!1){return(0,h.Z)(function*(){})()}ngOnDestroy(){}}return l.\u0275fac=function(e){return new(e||l)(d.Y36(f.gz),d.Y36(r.yh),d.Y36(w.d),d.Y36(D.eX))},l.\u0275cmp=d.Xpm({type:l,selectors:[["app-start-vehicles"]],decls:1,vars:0,template:function(e,t){1&e&&d._UZ(0,"router-outlet")},directives:[f.lC],encapsulation:2}),l})();var b=u(6752),O=u(3802);let j=(()=>{class l{constructor(e,t,c){this.storeSrv=e,this.store=t,this.router=c}form(){const e=(new Date).getFullYear(),t=(new Date).getMonth()+1,c=new Date,n=c.setDate(c.getDate()+7),i=(0,O.b3)(new Date),v=(0,O.b3)(new Date(n));return new o.cw({filter:new o.NI("",o.kI.required),month:new o.NI(`${e}-${t<10?`0${t}`:t}`,o.kI.required),date:new o.NI(i,o.kI.required),date1:new o.NI(i,o.kI.required),date2:new o.NI(v,o.kI.required),week:new o.NI("",o.kI.required),year:new o.NI(e,o.kI.required),notincategory:new o.NI("",o.kI.required),notinaccount:new o.NI("",o.kI.required),limit:new o.NI(20),orderKey:new o.NI("date"),orderType:new o.NI("DESC"),price:new o.NI,fixed:new o.NI,transfers:new o.NI,atm:new o.NI,installments:new o.NI,id_account:new o.NI("",o.kI.required),category:new o.NI("",o.kI.required)})}createUrl(e,t,c){e.pagesArray&&delete e.pagesArray,e.pages&&delete e.pages,e.total&&delete e.total,e.quantity&&delete e.quantity,this.router.url.includes("expensives")&&this.router.navigate([],{relativeTo:t,queryParams:Object.assign({},e)})}expensivesFilter(e,t,c){var n=this;return(0,h.Z)(function*(){let i=Object.assign({},c.value);i.category&&(e.category=i.category?i.category.join(","):null),i.notincategory&&(e.notincategory=i.notincategory?i.notincategory.join(","):null),i.notinaccount&&(e.notinaccount=i.notinaccount?i.notinaccount.join(","):null),i.id_account&&(e.id_account=i.id_account?i.id_account.join(","):null),i.limit&&(e.limit=i.limit),i.orderKey&&(e.orderKey=i.orderKey),i.orderType&&(e.orderType=i.orderType),i.price&&(e.price=i.price),i.transfers&&(e.transfers=i.transfers),i.fixed&&(e.fixed=i.fixed),i.atm&&(e.atm=i.atm),i.installments&&(e.installments=i.installments),""===e.category&&delete e.category,""===e.notincategory&&delete e.notincategory,""===e.notinaccount&&delete e.notinaccount,""===e.id_account&&delete e.id_account,""===e.limit&&delete e.limit,""===e.orderKey&&delete e.orderKey,""===e.orderType&&delete e.orderType,""===e.price&&delete e.price,e.price||delete e.price,(""===e.transfers||!c.value.transfers)&&delete e.transfers,(""===e.atm||!c.value.atm)&&delete e.atm,(""===e.fixed||!c.value.fixed)&&delete e.fixed,(""===e.installments||!c.value.installments)&&delete e.installments,i.filter&&(e.type=i.filter),"today"===i.filter?(e.month&&delete e.month,e.year&&delete e.year,e.date1&&delete e.date1,e.date2&&delete e.date2,e.date&&delete e.date,e=Object.assign({},e)):"year"===i.filter&&i.year?(e.month&&delete e.month,e.date1&&delete e.date1,e.date2&&delete e.date2,e.date&&delete e.date,e=Object.assign(Object.assign({},e),{year:i.year})):"month"===i.filter&&i.month?(e.year&&delete e.year,e.date1&&delete e.date1,e.date2&&delete e.date2,e.date&&delete e.date,e=Object.assign(Object.assign({},e),{month:i.month})):"dates"===i.filter&&i.date1&&i.date2?(e.month&&delete e.month,e.year&&delete e.year,e.date&&delete e.date,e=Object.assign(Object.assign({},e),{date1:i.date1,date2:i.date2})):"date"===i.filter&&i.date?(e.month&&delete e.month,e.year&&delete e.year,e.date1&&delete e.date1,e.date2&&delete e.date2,e=Object.assign(Object.assign({},e),{date:i.date})):"week"===i.filter&&i.week?e=Object.assign(Object.assign({},e),{type:"date",week:i.week}):(e.type&&delete e.type,e.month&&delete e.month,e.year&&delete e.year,e.date1&&delete e.date1,e.date2&&delete e.date2,e.date&&delete e.date,(i.category||i.notincategory||i.notinaccount||i.limit||i.orderKey||i.orderType||i.price||i.atm||i.fixed||i.installments||i.transfers||i.id_account)&&(e=Object.assign({},e))),n.setDataOnForm(c,e,"expensivesFilter()"),yield n.manageService(e,t,i.filter?i.filter:"normal filters -----------------"),e.category||delete e.category,e.notincategory||delete e.notincategory,e.notinaccount||delete e.notinaccount,e.id_account||delete e.id_account,e.limit||delete e.limit,e.orderKey||delete e.orderKey,e.orderType||delete e.orderType})()}manageService(e,t,c){var n=this;return(0,h.Z)(function*(){n.store.dispatch((0,b.r0)({filters:Object.assign({},e),ref:"manageService Filters UTILS"})),n.createUrl(e,t,"expensivesFilterManage()"),yield n.storeSrv.expensivesByDate(e,c+"filters")})()}setDataOnForm(e,t,c){if(this.router.url.includes("expensives")){if(!Object.keys(e.value).length)return;e.controls.filter.setValue(null==t?void 0:t.type),"year"===(null==t?void 0:t.type)&&e.controls.year.setValue(null==t?void 0:t.year),"month"===(null==t?void 0:t.type)&&e.controls.month.setValue(null==t?void 0:t.month),"dates"===(null==t?void 0:t.type)&&(e.controls.date1.setValue(null==t?void 0:t.date1),e.controls.date2.setValue(null==t?void 0:t.date2)),"date"===(null==t?void 0:t.type)&&e.controls.date.setValue(null==t?void 0:t.date),"week"===(null==t?void 0:t.type)&&e.controls.week.setValue(null==t?void 0:t.week),(null==t?void 0:t.category)&&e.controls.category.setValue(null==t?void 0:t.category.split(",").map(n=>parseInt(n))),(null==t?void 0:t.notincategory)&&e.controls.notincategory.setValue(null==t?void 0:t.notincategory.split(",").map(n=>parseInt(n))),(null==t?void 0:t.notinaccount)&&e.controls.notinaccount.setValue(null==t?void 0:t.notinaccount.split(",").map(n=>parseInt(n))),(null==t?void 0:t.id_account)&&e.controls.id_account.setValue(null==t?void 0:t.id_account.split(",").map(n=>parseInt(n))),(null==t?void 0:t.limit)&&e.controls.limit.setValue(null==t?void 0:t.limit),(null==t?void 0:t.orderKey)&&e.controls.orderKey.setValue(null==t?void 0:t.orderKey),(null==t?void 0:t.orderType)&&e.controls.orderType.setValue(null==t?void 0:t.orderType),(null==t?void 0:t.price)&&e.controls.price.setValue(null==t?void 0:t.price),e.controls.atm.setValue((null==t?void 0:t.atm)&&e.value.atm?(null==t?void 0:t.atm)||e.value.atm:e.value.atm||(null==t?void 0:t.atm)?e.value.atm||t.atm:null),e.controls.transfers.setValue((null==t?void 0:t.transfers)&&e.value.transfers?(null==t?void 0:t.transfers)||e.value.transfers:e.value.transfers||(null==t?void 0:t.transfers)?e.value.transfers||t.transfers:null),e.controls.fixed.setValue((null==t?void 0:t.fixed)&&e.value.fixed?(null==t?void 0:t.fixed)||e.value.fixed:e.value.fixed||(null==t?void 0:t.fixed)?e.value.fixed||t.fixed:null),e.controls.installments.setValue((null==t?void 0:t.installments)&&e.value.installments?(null==t?void 0:t.installments)||e.value.installments:e.value.installments||(null==t?void 0:t.installments)?e.value.installments||t.installments:null)}}}return l.\u0275fac=function(e){return new(e||l)(d.LFG(w.d),d.LFG(r.yh),d.LFG(f.F0))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();const G=[{path:"",component:K,canActivate:[S.s],children:[{path:"",component:(()=>{class l{constructor(e){this.utils=e,this.form=new o.cw({})}ngOnInit(){this.buildForm()}buildForm(){this.form=this.utils.form()}}return l.\u0275fac=function(e){return new(e||l)(d.Y36(j))},l.\u0275cmp=d.Xpm({type:l,selectors:[["app-home-vehicles"]],decls:1,vars:0,consts:[[1,"px-6","py-5"]],template:function(e,t){1&e&&d._UZ(0,"div",0)},encapsulation:2}),l})()},{path:"create",component:(()=>{class l{constructor(e,t,c){this.store=e,this.activatedRoute=t,this.utils=c,this.showChart$=this.store.select(n=>{var i,v;return null===(v=null===(i=null==n?void 0:n.expensives)||void 0===i?void 0:i.filters)||void 0===v?void 0:v.showChart}),this.user={},this.form=new o.cw({}),this.expensives$=this.store.select(n=>n.expensives),this.categories=this.store.select(n=>n.categories_expenses.data),this.accounts$=this.store.select(n=>{var i;return null===(i=null==n?void 0:n.user)||void 0===i?void 0:i.accounts}),this.loading=!1,this.loaded=!1,this.dataGraphicMonth2=[],this.dataGraphicMonth3=[],this.dataGraphicMonth4=[],this.dataGraphicYear2=[],this.sub=new y.w,this.dataGraphics=[],this.buildForm(),this.sub=this.store.select(n=>n).subscribe(n=>{var i,v,g,V,x;try{this.loading=null===(i=null==n?void 0:n.expensives)||void 0===i?void 0:i.loading,this.loaded=null===(v=null==n?void 0:n.expensives)||void 0===v?void 0:v.loaded,this.user=null===(g=null==n?void 0:n.user)||void 0===g?void 0:g.data,this.queryParams=null===(V=null==n?void 0:n.expensives)||void 0===V?void 0:V.filters,this.dataGraphics=[{},...null===(x=null==n?void 0:n.expensives)||void 0===x?void 0:x.complete]}catch(A){console.log(A)}})}buildForm(){this.form=this.utils.form()}ngOnDestroy(){this.sub.unsubscribe()}ngOnInit(){}toggleChart(){this.store.dispatch((0,b.RC)()),this.utils.createUrl(Object.assign({},this.queryParams),this.activatedRoute,"toggleChart()")}}return l.\u0275fac=function(e){return new(e||l)(d.Y36(r.yh),d.Y36(f.gz),d.Y36(j))},l.\u0275cmp=d.Xpm({type:l,selectors:[["app-vehicles"]],decls:0,vars:0,template:function(e,t){},encapsulation:2}),l})()}]}];let U=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[[f.Bz.forChild(G)],f.Bz]}),l})(),k=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[[C.ez,o.u5,o.UX,F.A0,T.X,U,N.m]]}),l})()}}]);
//# sourceMappingURL=324.f43b7ded1ac61a804d08.js.map