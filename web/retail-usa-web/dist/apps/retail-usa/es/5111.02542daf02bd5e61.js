(self.webpackChunkretail_usa=self.webpackChunkretail_usa||[]).push([[5111],{6691:()=>{},2637:(J,T,i)=>{"use strict";i.d(T,{HE:()=>f,cf:()=>V,ck:()=>xe,rp:()=>Z});var e=i(5e3),m=i(9808),N=i(5357),S=i(4738),L=(i(6691),i(6305)),O=i(4004),r=i(8505),g=i(262),A=i(9646),d=i(7579),s=i(9841),p=i(2722),c=i(3900),M=i(4782),B=i(2843),u=i(5460),b=i(9287),K=i(3533),W=i(7555),Y=i(194),F=i(4951),w=i(5622),_e=i(5556),k=i(6888),x=i(7605),C=i(429);function ne(_,a){1&_&&e._UZ(0,"bb-badge-ui",7)}function ae(_,a){1&_&&e._UZ(0,"bb-badge-ui",8)}function oe(_,a){1&_&&e._UZ(0,"bb-badge-ui",9)}function ie(_,a){1&_&&e._UZ(0,"bb-badge-ui",10)}function le(_,a){1&_&&e._UZ(0,"bb-badge-ui",11)}function se(_,a){1&_&&e._UZ(0,"bb-badge-ui",12)}function Ee(_,a){if(1&_&&(e.TgZ(0,"div",11)(1,"div",12),e._UZ(2,"bb-icon-ui",13),e.qZA(),e.TgZ(3,"div",14),e.SDv(4,15),e.qZA()()),2&_){const t=e.oxw(2);e.xp6(4),e.pQV(t.payment.frequency),e.QtT(4)}}function Ae(_,a){if(1&_&&(e.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"div",7),e._uU(4),e.qZA(),e.YNc(5,Ee,5,1,"div",8),e.qZA(),e._UZ(6,"div",9)(7,"bb-billpay-payment-status-badge",10),e.qZA()()),2&_){const t=e.oxw();e.xp6(4),e.hij(" ",t.payment.payeeNickName||t.payment.payeeName," "),e.xp6(1),e.Q6J("ngIf",t.payment.recurring),e.xp6(2),e.Q6J("status",t.payment.status)}}function re(_,a){if(1&_&&(e.ynx(0),e.SDv(1,5),e.BQk()),2&_){const t=a.ngIf;e.xp6(1),e.pQV(t),e.QtT(1)}}function ce(_,a){if(1&_&&(e._uU(0),e.ALo(1,"bbDate")),2&_){const t=e.oxw();e.Oqu(e.xi3(1,1,null==t.paymentsGroup?null:t.paymentsGroup.date,"MMMM d"))}}function me(_,a){if(1&_){const t=e.EpF();e.TgZ(0,"li",6)(1,"bb-billpay-payment-card",7),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw().navigateToPayment(l.id,l.recurring)})("keydown.enter",function(){const l=e.CHM(t).$implicit;return e.oxw().navigateToPayment(l.id,l.recurring)}),e.qZA()()}if(2&_){const t=a.$implicit;e.xp6(1),e.Q6J("payment",t)}}function pe(_,a){if(1&_&&(e.TgZ(0,"li",8),e._UZ(1,"bb-billpay-payments-group",9),e.qZA()),2&_){const t=a.$implicit;e.xp6(1),e.Q6J("paymentsGroup",t)}}function Se(_,a){if(1&_&&(e.ynx(0),e.TgZ(1,"section")(2,"ul",6),e.YNc(3,pe,2,1,"li",7),e.qZA()(),e.BQk()),2&_){const t=e.oxw(3);e.xp6(3),e.Q6J("ngForOf",t.paymentsByDate)}}function Me(_,a){if(1&_&&(e.ynx(0),e.YNc(1,Se,4,1,"ng-container",2),e.BQk()),2&_){const t=e.oxw().ngIf;e.oxw();const n=e.MAs(9);e.xp6(1),e.Q6J("ngIf",t.length)("ngIfElse",n)}}function ue(_,a){if(1&_&&(e.ynx(0),e.YNc(1,Me,2,2,"ng-container",2),e.BQk()),2&_){const t=e.oxw(),n=e.MAs(7);e.xp6(1),e.Q6J("ngIf",!t.hasLoadingError)("ngIfElse",n)}}function ye(_,a){1&_&&(e.TgZ(0,"div",10)(1,"div",11),e._UZ(2,"bb-loading-indicator-ui",12),e.qZA()())}function de(_,a){1&_&&(e.TgZ(0,"div",10)(1,"div",11)(2,"div",13),e._UZ(3,"bb-empty-state-ui",14),e.qZA()()())}function Ne(_,a){1&_&&(e.TgZ(0,"div",10)(1,"div",11)(2,"div",13),e._UZ(3,"bb-empty-state-ui",15),e.qZA()()())}function ge(_,a){if(1&_&&(e.TgZ(0,"div")(1,"div",5),e._UZ(2,"bb-icon-ui",15),e.TgZ(3,"span",16),e._uU(4),e.qZA()()()),2&_){const t=e.oxw();e.Gre("bb-block ",null!=t.payment&&t.payment.recurring?"bb-block--sm":"bb-block--lg",""),e.xp6(4),e.Oqu(null==t.payment||null==t.payment.paymentAccount?null:t.payment.paymentAccount.accountNickName)}}function Be(_,a){if(1&_&&(e.TgZ(0,"div",5),e._UZ(1,"bb-icon-ui",18),e.TgZ(2,"span",19),e.SDv(3,20),e.qZA()()),2&_){const t=e.oxw(2);e.xp6(3),e.pQV(null==t.payment?null:t.payment.frequency),e.QtT(3)}}function Oe(_,a){if(1&_&&(e.TgZ(0,"div"),e.YNc(1,Be,4,1,"div",17),e.qZA()),2&_){const t=e.oxw();e.Tol((null==t.payment?null:t.payment.status)===t.paymentStatus.INPROCESS||(null==t.payment?null:t.payment.status)===t.paymentStatus.PENDING?"bb-block bb-block--lg":""),e.xp6(1),e.Q6J("ngIf",null==t.payment?null:t.payment.frequency)}}function be(_,a){1&_&&(e.TgZ(0,"div"),e._UZ(1,"bb-alert-ui",21),e.qZA())}function Le(_,a){if(1&_){const t=e.EpF();e.TgZ(0,"div",22)(1,"button",23),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return o.editPayment(o.payment)}),e.SDv(2,24),e.qZA(),e.TgZ(3,"button",25),e.NdJ("click",function(){return e.CHM(t),e.oxw().cancelPayment()}),e.SDv(4,26),e.qZA()()}}function Ce(_,a){if(1&_&&(e.TgZ(0,"div",1)(1,"div",2),e._UZ(2,"bb-header-ui",27),e.qZA(),e._UZ(3,"bb-billpay-payment-review-card",28),e.qZA()),2&_){const t=e.oxw();e.xp6(3),e.Q6J("paymentReview",t.parseToReview(t.payment,t.payee))("accountNumberMask",t.accountNumberMasked)}}function fe(_,a){1&_&&e._UZ(0,"bb-header-ui",4)}function Pe(_,a){1&_&&(e.TgZ(0,"span",5),e.SDv(1,6),e.qZA())}function Te(_,a){if(1&_){const t=e.EpF();e.TgZ(0,"div",7)(1,"button",8),e.NdJ("click",function(){return e.CHM(t),e.oxw().resolveModal(!0)}),e.SDv(2,9),e.qZA(),e.TgZ(3,"button",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().resolveModal(!1)}),e.SDv(4,11),e.qZA()()}}const De=["notificationHeader"],Ie=["notificationMessage"];function Ue(_,a){if(1&_){const t=e.EpF();e.TgZ(0,"bb-billpay-payment-details",9),e.NdJ("paymentCancelling",function(){return e.CHM(t),e.oxw(3).onPaymentDeleteFlowStarted()})("paymentEditing",function(o){return e.CHM(t),e.oxw(3).onEditPayment(o)}),e.qZA()}if(2&_){const t=e.oxw().ngIf,n=e.oxw(2);e.Q6J("payment",null==t?null:t.payment)("payee",null==t?null:t.payee)("accountNumberMasked",n.config.accountNumberMasked)}}function Ge(_,a){if(1&_&&(e.TgZ(0,"span",10),e.SDv(1,11),e.qZA()),2&_){const t=e.oxw().ngIf;e.xp6(1),e.pQV((null==t.payment?null:t.payment.payeeNickName)&&(null==t.payment?null:t.payment.payeeNickName)+" ("+(null==t.payment?null:t.payment.payeeName)+")"||(null==t.payment?null:t.payment.payeeName)),e.QtT(1)}}function Re(_,a){if(1&_&&(e.ynx(0),e.TgZ(1,"section"),e.YNc(2,Ue,1,3,"bb-billpay-payment-details",7),e.qZA(),e.YNc(3,Ge,2,1,"ng-template",null,8,e.W1O),e.BQk()),2&_){const t=a.ngIf;e.xp6(2),e.Q6J("ngIf",t.payment&&t.payee)}}const ve=function(_,a){return{payment:_,payee:a}};function Ye(_,a){if(1&_&&(e.ynx(0),e.YNc(1,Re,5,1,"ng-container",2),e.ALo(2,"async"),e.ALo(3,"async"),e.BQk()),2&_){const t=e.oxw(),n=e.MAs(10);e.xp6(1),e.Q6J("ngIf",e.WLB(6,ve,e.lcZ(2,2,t.payment$),e.lcZ(3,4,t.payee$)))("ngIfElse",n)}}function he(_,a){if(1&_){const t=e.EpF();e.TgZ(0,"bb-billpay-payments-delete-modal",12),e.NdJ("resolve",function(o){return e.CHM(t),e.oxw().onModalResolve(o)}),e.qZA()}}function Je(_,a){1&_&&(e.TgZ(0,"span",13),e.SDv(1,14),e.qZA())}function Ke(_,a){1&_&&(e.TgZ(0,"div",15)(1,"div",16)(2,"div",17),e._UZ(3,"bb-empty-state-ui",18),e.qZA()()())}function We(_,a){1&_&&(e.TgZ(0,"div",15)(1,"div",16),e._UZ(2,"bb-loading-indicator-ui",19),e.qZA()())}const Z=new e.OlP("ManageBillPaymentsJourneyJourneyConfiguration injection token");var f=(()=>{return(_=f||(f={})).PENDING="PENDING",_.HISTORICAL="HISTORICAL",_.ALL="ALL",f;var _})();const H={notificationDismissTime:5e3,pageSize:0,pageFilter:f.PENDING,accountNumberMasked:!1,pageTitle:"Pending payments"};let U=(()=>{class _{constructor(t){t=t||{},this._config=Object.assign(Object.assign({},H),t)}get defaults(){return H}get notificationDismissTime(){return this._config.notificationDismissTime}get pageSize(){return this._config.pageSize}get pageFilter(){return this._config.pageFilter}get accountNumberMasked(){return this._config.accountNumberMasked}get pageTitle(){return this._config.pageTitle}}return _.\u0275fac=function(t){return new(t||_)(e.LFG(Z,8))},_.\u0275prov=e.Yz7({token:_,factory:_.\u0275fac}),_})();class V{}let G=(()=>{class _{constructor(t,n,o){this.router=t,this.route=n,this.communicationService=o}navigateToPayment(t,n=!1){this.router.navigate([t],{queryParams:{type:n?S.Oq:S.N$},relativeTo:this.route})}navigateToPaymentsList(t){this.communicationService?t===f.HISTORICAL?this.communicationService.navigateToPaymentsHistory():this.communicationService.navigateToPaymentsList():this.router.navigate(["./"])}navigateToEditRecurringPayment(t){var n;null===(n=this.communicationService)||void 0===n||n.navigateToEditRecurringPayment(t)}navigateToEditOneOffPayment(t){var n;null===(n=this.communicationService)||void 0===n||n.navigateToEditOneOffPayment(t)}}return _.\u0275fac=function(t){return new(t||_)(e.LFG(N.F0),e.LFG(N.gz),e.LFG(V,8))},_.\u0275prov=e.Yz7({token:_,factory:_.\u0275fac}),_})();var I=(()=>{return(_=I||(I={})).PENDING="PENDING",_.INPROCESS="INPROCESS",_.PROCESSED="PROCESSED",_.FAILED="FAILED",_.CANCELED="CANCELED",_.UNAPPROVED="UNAPPROVED",I;var _})(),R=(()=>{return(_=R||(R={})).PENDING="PENDING",_.HISTORICAL="HISTORICAL",_.ALL="ALL",R;var _})();let v=(()=>{class _{constructor(t,n){this.paymentsData=t,this.payeesData=n}getPayments(t,n){return this.paymentsData.getBillPayPayments(Object.assign({status:n,direction:(l=n,l===R.PENDING?S.Nm.ASC:S.Nm.DESC)},t&&{size:t}));var l}getPayment(t,n=S.N$){return n===S.N$?this.paymentsData.getPaymentById({id:t}):this.paymentsData.getRecurringPaymentById({id:t})}getPayee(t){return this.payeesData.getPayeeById({id:t})}deletePayment(t,n=S.N$){return n===S.N$?this.paymentsData.deletePaymentById({id:t}):this.paymentsData.deleteRecurringPaymentById({id:t})}}return _.\u0275fac=function(t){return new(t||_)(e.LFG(L.D6),e.LFG(L.cE))},_.\u0275prov=e.Yz7({token:_,factory:_.\u0275fac}),_})(),h=(()=>{class _{constructor(){this.paymentStatus=I}}return _.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["bb-billpay-payment-status-badge"]],inputs:{status:"status"},decls:7,vars:7,consts:function(){let a,t,n,o,l,y;return a="In progress",t="Pending",n="Failed",o="Canceled",l="Unapproved",y="Processed",[[3,"ngSwitch"],["text",a,4,"ngSwitchCase"],["color","warning","text",t,4,"ngSwitchCase"],["color","danger","text",n,4,"ngSwitchCase"],["color","danger","text",o,4,"ngSwitchCase"],["color","danger","text",l,4,"ngSwitchCase"],["color","success","text",y,4,"ngSwitchCase"],["text",a],["color","warning","text",t],["color","danger","text",n],["color","danger","text",o],["color","danger","text",l],["color","success","text",y]]},template:function(t,n){1&t&&(e.ynx(0,0),e.YNc(1,ne,1,0,"bb-badge-ui",1),e.YNc(2,ae,1,0,"bb-badge-ui",2),e.YNc(3,oe,1,0,"bb-badge-ui",3),e.YNc(4,ie,1,0,"bb-badge-ui",4),e.YNc(5,le,1,0,"bb-badge-ui",5),e.YNc(6,se,1,0,"bb-badge-ui",6),e.BQk()),2&t&&(e.Q6J("ngSwitch",n.status),e.xp6(1),e.Q6J("ngSwitchCase",n.paymentStatus.INPROCESS),e.xp6(1),e.Q6J("ngSwitchCase",n.paymentStatus.PENDING),e.xp6(1),e.Q6J("ngSwitchCase",n.paymentStatus.FAILED),e.xp6(1),e.Q6J("ngSwitchCase",n.paymentStatus.CANCELED),e.xp6(1),e.Q6J("ngSwitchCase",n.paymentStatus.UNAPPROVED),e.xp6(1),e.Q6J("ngSwitchCase",n.paymentStatus.PROCESSED))},directives:[K.F,m.RF,m.n9],encapsulation:2,changeDetection:0}),_})(),$=(()=>{class _{constructor(){this.isNegativeAmount=!1}getFormattedAmount(t){return`${this.isNegativeAmount?"-":""}${t}`}}return _.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["bb-billpay-payment-card"]],inputs:{payment:"payment",isNegativeAmount:"isNegativeAmount"},decls:4,vars:2,consts:function(){let a,t;return a="{VAR_SELECT, select, WEEKLY {weekly} EVERY_2_WEEKS {every 2 weeks} EVERY_4_WEEKS {every 4\n            weeks} TWICE_A_MONTH {twice a month} MONTHLY {monthly} EVERY_2_MONTHS {every 2 months} EVERY_3_MONTHS {every\n            3 months} EVERY_4_MONTHS {every 4 months} EVERY_6_MONTHS {every 6 months} ANNUALLY {annually}}",a=e.Zx4(a,{VAR_SELECT:"\ufffd0\ufffd"}),t=" Recurring " + a + " ",[[1,"bb-stack"],["class","bb-stack__item bb-stack__item--fill","data-role","payment-item",4,"ngIf"],["data-role","payment-item-amount",1,"col-4","col-md-3","col-lg-2","bb-stack__item","bb-text-align-right"],["data-role","amount",1,"bb-text-bold",3,"amount"],["data-role","payment-item",1,"bb-stack__item","bb-stack__item--fill"],[1,"bb-stack","bb-stack--wrap"],[1,"bb-stack__item","bb-stack__item--fill"],["data-role","payment-item-title",1,"bb-text-bold"],["class","bb-stack bb-stack--align-top",4,"ngIf"],[1,"bb-stack__break","bb-stack__break--sm-down"],["data-role","payment-item-badge",1,"bb-stack__item","bb-text-align-right","bb-text-align-left--sm-down",3,"status"],[1,"bb-stack","bb-stack--align-top"],[1,"bb-stack__item","bb-stack__item--spacing-sm"],["data-role","payment-item-recurring-icon","size","sm","name","repeat","color","secondary"],["data-role","payment-item-recurring-label",1,"bb-stack__item","bb-subtitle","bb-text-support"],t]},template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,Ae,8,3,"div",1),e.TgZ(2,"div",2),e._UZ(3,"bb-amount-ui",3),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngIf",n.payment),e.xp6(2),e.Q6J("amount",n.payment&&n.getFormattedAmount(n.payment.amount.amount)))},directives:[b.o,h,W.G4,m.O5],encapsulation:2}),_})();var P=(()=>{return(_=P||(P={})).yesterday="yesterday",_.today="today",_.tomorrow="tomorrow",P;var _})();let Q=(()=>{class _{constructor(t){this.router=t}getDateLabel(t){const o=(new Date).setHours(0,0,0,0),l=new Date(t).setHours(0,0,0,0);switch(Math.round((l-o)/864e5)){case-1:return P.yesterday;case 0:return P.today;case 1:return P.tomorrow;default:return}}navigateToPayment(t,n){this.router.navigateToPayment(t,n)}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(G))},_.\u0275cmp=e.Xpm({type:_,selectors:[["bb-billpay-payments-group"]],inputs:{paymentsGroup:"paymentsGroup"},decls:7,vars:5,consts:function(){let a,t;return a="{VAR_SELECT, select, yesterday {Yesterday} today {Today} tomorrow {Tomorrow}}",a=e.Zx4(a,{VAR_SELECT:"\ufffd0\ufffd"}),t=" " + a + " ",[["role","heading","aria-level","2","data-role","date-label",1,"bb-text-support","bb-subheader","bb-block","bb-block--lg"],[4,"ngIf","ngIfElse"],["formattedDate",""],[1,"bb-list"],["class","bb-list__item bb-list__item--no-separator",4,"ngFor","ngForOf"],t,[1,"bb-list__item","bb-list__item--no-separator"],["tabindex","0","role","button","isNegativeAmount","true",3,"payment","click","keydown.enter"]]},template:function(t,n){if(1&t&&(e.TgZ(0,"section")(1,"div",0),e.YNc(2,re,2,1,"ng-container",1),e.YNc(3,ce,2,4,"ng-template",null,2,e.W1O),e.qZA(),e.TgZ(5,"ul",3),e.YNc(6,me,2,1,"li",4),e.qZA()()),2&t){const o=e.MAs(4);e.xp6(1),e.Q2q("id","payments-group-heading-",null==n.paymentsGroup||null==n.paymentsGroup.payments[0]?null:n.paymentsGroup.payments[0].id,""),e.xp6(1),e.Q6J("ngIf",n.getDateLabel(null==n.paymentsGroup?null:n.paymentsGroup.date))("ngIfElse",o),e.xp6(3),e.Q2q("aria-labelledby","payments-group-heading-",null==n.paymentsGroup||null==n.paymentsGroup.payments[0]?null:n.paymentsGroup.payments[0].id,""),e.xp6(1),e.Q6J("ngForOf",null==n.paymentsGroup?null:n.paymentsGroup.payments)}},directives:[$,m.O5,m.sg],pipes:[Y.y],encapsulation:2}),_})(),z=(()=>{class _{constructor(t,n){this.dataService=t,this.config=n,this.hasLoadingError=!1,this.paymentsByDate=[]}ngOnInit(){this.payments$=this.dataService.getPayments(this.config.pageSize,this.config.pageFilter).pipe((0,O.U)(({payments:t})=>t),(0,r.b)(t=>{this.paymentsByDate=this.groupPaymentsByDate(t)}),(0,g.K)(()=>(this.hasLoadingError=!0,(0,A.of)([]))))}groupPaymentsByDate(t){return t.reduce((o,l)=>{const y=o[o.length-1],{paymentDate:E}=l;return y&&this.isSameDay(y.date,E)?y.payments.push(l):o.push({date:E,payments:[l]}),o},[])}isSameDay(t,n){return new Date(t).setHours(0,0,0,0)===new Date(n).setHours(0,0,0,0)}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(v),e.Y36(U))},_.\u0275cmp=e.Xpm({type:_,selectors:[["bb-billpay-list-view"]],decls:10,vars:5,consts:function(){let a,t,n,o;return a="Payments list is not loading",t="Try to reload the page or contact support",n="No bill payments",o="You don't have any bill payments to display",[[1,"bb-block","bb-block--lg"],["headingType","h1",3,"heading"],[4,"ngIf","ngIfElse"],["loadingState",""],["errorState",""],["emptyState",""],[1,"card","card-lg","bb-list"],["class","card-section",4,"ngFor","ngForOf"],[1,"card-section"],[3,"paymentsGroup"],[1,"card","card-lg"],[1,"card-body"],["loaderSize","lg"],[1,"bb-state-container"],["data-role","error-state","iconSize","xxl","iconModifier","error-outline","title",a,"subtitle",t],["data-role","empty-state","iconSize","xxl","iconModifier","payments","title",n,"subtitle",o]]},template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"bb-header-ui",1),e.qZA(),e.YNc(2,ue,2,2,"ng-container",2),e.ALo(3,"async"),e.YNc(4,ye,3,0,"ng-template",null,3,e.W1O),e.YNc(6,de,4,0,"ng-template",null,4,e.W1O),e.YNc(8,Ne,4,0,"ng-template",null,5,e.W1O)),2&t){const o=e.MAs(5);e.xp6(1),e.Q6J("heading",n.config.pageTitle),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,3,n.payments$))("ngIfElse",o)}},directives:[u.G,Q,F.Q,w.s,m.O5,m.sg],pipes:[m.Ov],encapsulation:2}),_})(),q=(()=>{class _{constructor(t){this.paymentParserService=t,this.accountNumberMasked=!0,this.paymentCancelling=new e.vpe,this.paymentEditing=new e.vpe,this.paymentStatus=I}parseToReview(t,n){return this.paymentParserService.paymentAndPayeeResponsesToReview(t,n)}cancelPayment(){this.paymentCancelling.emit()}editPayment(t){this.paymentEditing.next({id:t.id,recurring:t.recurring})}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(S.$c))},_.\u0275cmp=e.Xpm({type:_,selectors:[["bb-billpay-payment-details"]],inputs:{payment:"payment",payee:"payee",accountNumberMasked:"accountNumberMasked"},outputs:{paymentCancelling:"paymentCancelling",paymentEditing:"paymentEditing"},decls:20,vars:15,consts:function(){let a,t,n,o,l,y;return a="{VAR_SELECT, select, WEEKLY {weekly} EVERY_2_WEEKS {every 2 weeks} EVERY_4_WEEKS {every 4\n          weeks} TWICE_A_MONTH {twice a month} MONTHLY {monthly} EVERY_2_MONTHS {every 2 months} EVERY_3_MONTHS {every 3\n          months} EVERY_4_MONTHS {every 4 months} EVERY_6_MONTHS {every 6 months} ANNUALLY {annually}}",a=e.Zx4(a,{VAR_SELECT:"\ufffd0\ufffd"}),t="Recurring " + a + " ",n="Payment in progress, it cannot be edited or canceled",o=" Edit payment ",l=" Cancel payment ",y="Full details",[[1,"card","card-lg"],[1,"card-section"],[1,"bb-block","bb-block--md"],["data-role","payee-name","headingType","h2",3,"heading"],[1,"bb-block","bb-block--xl"],[1,"bb-stack"],["data-role","payment-amount",1,"bb-stack__item","bb-text-bold",3,"amount"],[1,"bb-stack__item"],["data-role","payment-status",3,"status"],["name","calendar-today","color","muted",1,"bb-stack__item","bb-stack__item--spacing-sm"],["data-role","payment-date",1,"bb-stack__item"],[3,"class",4,"ngIf"],[4,"ngIf"],["data-role","payment-buttons","class","bb-stack",4,"ngIf"],["class","card-section",4,"ngIf"],["name","savings-accounts","color","muted",1,"bb-stack__item","bb-stack__item--spacing-sm"],["data-role","payment-account-nickname",1,"bb-stack__item"],["class","bb-stack",4,"ngIf"],["name","repeat","color","muted",1,"bb-stack__item","bb-stack__item--spacing-sm"],["data-role","payment-recurring-label",1,"bb-stack__item"],t,["modifier","info","title",n,"data-role","alert-message"],["data-role","payment-buttons",1,"bb-stack"],["bbButton","","data-role","edit-payment-button","color","secondary",1,"bb-stack__item",3,"click"],o,["bbButton","","data-role","cancel-payment-button","color","danger",1,"bb-stack__item",3,"click"],l,["headingType","h2","heading",y],[3,"paymentReview","accountNumberMask"]]},template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"bb-header-ui",3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5),e._UZ(6,"bb-amount-ui",6),e.TgZ(7,"div",7),e._UZ(8,"bb-billpay-payment-status-badge",8),e.qZA()()(),e.TgZ(9,"div")(10,"div",5),e._UZ(11,"bb-icon-ui",9),e.TgZ(12,"span",10),e._uU(13),e.ALo(14,"bbDate"),e.qZA()()(),e.YNc(15,ge,5,4,"div",11),e.YNc(16,Oe,2,4,"div",11),e.YNc(17,be,2,0,"div",12),e.YNc(18,Le,5,0,"div",13),e.qZA(),e.YNc(19,Ce,4,2,"div",14),e.qZA()),2&t&&(e.xp6(3),e.s9C("heading",(null==n.payment?null:n.payment.payeeNickName)&&(null==n.payment?null:n.payment.payeeNickName)+" ("+(null==n.payment?null:n.payment.payeeName)+")"||(null==n.payment?null:n.payment.payeeName)),e.xp6(3),e.Q6J("amount",-(null==n.payment||null==n.payment.amount?null:n.payment.amount.amount)),e.xp6(2),e.Q6J("status",null==n.payment?null:n.payment.status),e.xp6(1),e.Gre("bb-block ",null!=n.payment&&n.payment.recurring||null!=n.payment&&null!=n.payment.paymentAccount&&n.payment.paymentAccount.accountNickName?"bb-block--sm":"bb-block--lg",""),e.xp6(4),e.Oqu(e.xi3(14,12,null==n.payment?null:n.payment.paymentDate,"fullDate")),e.xp6(2),e.Q6J("ngIf",null==n.payment||null==n.payment.paymentAccount?null:n.payment.paymentAccount.accountNickName),e.xp6(1),e.Q6J("ngIf",n.payment&&(null==n.payment?null:n.payment.recurring)&&(null==n.payment?null:n.payment.frequency)),e.xp6(1),e.Q6J("ngIf",(null==n.payment?null:n.payment.status)===n.paymentStatus.INPROCESS),e.xp6(1),e.Q6J("ngIf",n.payment&&n.payment.status===n.paymentStatus.PENDING),e.xp6(1),e.Q6J("ngIf",n.payment&&n.payee))},directives:[u.G,W.G4,h,b.o,k.w,S.nL,m.O5,x.Hq],pipes:[Y.y],encapsulation:2,changeDetection:0}),_})(),j=(()=>{class _{constructor(){this.resolve=new e.vpe}resolveModal(t){this.resolve.emit(t)}}return _.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["bb-billpay-payments-delete-modal"]],outputs:{resolve:"resolve"},decls:7,vars:1,consts:function(){let a,t,n,o;return a="Cancel payment?",t="Are you sure you want to cancel this payment? This action can not be undone.",n=" Cancel payment ",o=" Keep payment ",[["data-role","delete-payment-modal",3,"isOpen","cancel"],["bbCustomModalHeader",""],["bbCustomModalBody",""],["bbCustomModalFooter",""],["data-role","delete-payment-modal-header","headingType","h2","heading",a],["data-role","delete-payment-modal-body"],t,[1,"d-flex","flex-wrap","flex-row-reverse","w-100"],["bbButton","","color","danger","data-role","confirm-cancelling-button",1,"col-sm-auto","col-xs-12",3,"click"],n,["bbButton","","color","secondary","data-role","keep-payment-button",1,"mt-2","mt-sm-0","mr-sm-3","col-sm-auto","col-xs-12",3,"click"],o]},template:function(t,n){1&t&&(e.TgZ(0,"bb-modal-ui",0),e.NdJ("cancel",function(){return n.resolveModal(!1)}),e.TgZ(1,"bb-modal-header-ui"),e.YNc(2,fe,1,0,"ng-template",1),e.qZA(),e.TgZ(3,"bb-modal-body-ui"),e.YNc(4,Pe,2,0,"ng-template",2),e.qZA(),e.TgZ(5,"bb-modal-footer-ui"),e.YNc(6,Te,5,0,"ng-template",3),e.qZA()()),2&t&&e.Q6J("isOpen",!0)},directives:[C.zS,C.Rb,u.G,C.KF,C.YI,C.cA,C.Qd,C.yk,x.Hq],encapsulation:2}),_})(),X=(()=>{class _{constructor(t,n,o,l,y){this.config=t,this.dataService=n,this.route=o,this.routerService=l,this.notificationService=y,this.notificationHeaderTemplate="",this.notificationMessageTemplate="",this.hasLoadingError=!1,this.isDeleteModalOpened=!1,this.id$=this.route.paramMap.pipe((0,O.U)(E=>E.get("id")||"")),this.paymentType$=this.route.queryParamMap.pipe((0,O.U)(E=>E.get("type")||S.N$)),this.destroy$=new d.x,this.payment$=(0,s.a)([this.id$,this.paymentType$]).pipe((0,p.R)(this.destroy$),(0,c.w)(([E,Ze])=>this.dataService.getPayment(E,Ze)),(0,O.U)(({payment:E})=>E),(0,M.d)(1),(0,g.K)(()=>(this.hasLoadingError=!0,(0,A.of)(void 0)))),this.payee$=this.payment$.pipe((0,c.w)(E=>E&&!E.payeeElectronic&&E.payeeID?this.dataService.getPayee(E.payeeID):(0,B._)("Payee can't be retrieved")),(0,O.U)(({payee:E})=>E),(0,g.K)(()=>(0,A.of)({})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onPaymentDeleteFlowStarted(){this.isDeleteModalOpened=!0}onEditPayment(t){t.recurring?this.routerService.navigateToEditRecurringPayment(t.id):this.routerService.navigateToEditOneOffPayment(t.id)}onModalResolve(t){const n=this.deletePayment().pipe((0,r.b)(()=>{this.routerService.navigateToPaymentsList(this.config.pageFilter),this.notificationService.showNotification({header:this.notificationHeaderTemplate,message:this.notificationMessageTemplate,modifier:"success",ttl:this.dismissTimeout})}));(t?n:(0,A.of)()).subscribe({complete:()=>this.isDeleteModalOpened=!1})}deletePayment(){return(0,s.a)([this.id$,this.paymentType$]).pipe((0,p.R)(this.destroy$),(0,c.w)(([t,n])=>this.dataService.deletePayment(t,n)))}get dismissTimeout(){if(void 0===this.config.notificationDismissTime)throw new Error("Dismiss timeout value not found");return this.config.notificationDismissTime}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(U),e.Y36(v),e.Y36(N.gz),e.Y36(G),e.Y36(_e.gq))},_.\u0275cmp=e.Xpm({type:_,selectors:[["bb-billpay-payment-details-view"]],viewQuery:function(t,n){if(1&t&&(e.Gf(De,5),e.Gf(Ie,5)),2&t){let o;e.iGM(o=e.CRH())&&(n.notificationHeaderTemplate=o.first),e.iGM(o=e.CRH())&&(n.notificationMessageTemplate=o.first)}},decls:11,vars:4,consts:function(){let a,t,n,o;return a="Payment to " + "\ufffd0\ufffd" + " has been canceled successfully",t="Payment canceled",n="Payment is not loading",o="Try to reload the page or contact support",[[1,"bb-block","bb-block--lg"],["headingType","h1",3,"heading"],[4,"ngIf","ngIfElse"],[3,"resolve",4,"ngIf"],["notificationHeader",""],["errorState",""],["loadingState",""],[3,"payment","payee","accountNumberMasked","paymentCancelling","paymentEditing",4,"ngIf"],["notificationMessage",""],[3,"payment","payee","accountNumberMasked","paymentCancelling","paymentEditing"],["data-role","notification-message"],a,[3,"resolve"],[1,"text-dark"],t,[1,"card","card-lg"],[1,"card-body"],[1,"bb-state-container"],["data-role","error-state","iconSize","xxl","iconModifier","error-outline","title",n,"subtitle",o],["loaderSize","lg"]]},template:function(t,n){if(1&t&&(e.TgZ(0,"div")(1,"div",0),e._UZ(2,"bb-header-ui",1),e.qZA(),e.YNc(3,Ye,4,9,"ng-container",2),e.qZA(),e.YNc(4,he,1,0,"bb-billpay-payments-delete-modal",3),e.YNc(5,Je,2,0,"ng-template",null,4,e.W1O),e.YNc(7,Ke,4,0,"ng-template",null,5,e.W1O),e.YNc(9,We,3,0,"ng-template",null,6,e.W1O)),2&t){const o=e.MAs(8);e.xp6(2),e.Q6J("heading",n.config.pageTitle),e.xp6(1),e.Q6J("ngIf",!n.hasLoadingError)("ngIfElse",o),e.xp6(1),e.Q6J("ngIf",n.isDeleteModalOpened)}},directives:[u.G,q,j,w.s,F.Q,m.O5],pipes:[m.Ov],encapsulation:2}),_})(),ee=(()=>{class _{constructor(t){this.config=t}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(U))},_.\u0275cmp=e.Xpm({type:_,selectors:[["bb-billpay-enrolment-view"]],decls:4,vars:1,consts:function(){let a;return a="Pending Payments",[[1,"bb-block","bb-block--lg"],["headingType","h1","heading",a],[3,"notificationDismissTime"]]},template:function(t,n){1&t&&(e.TgZ(0,"div")(1,"div",0),e._UZ(2,"bb-header-ui",1),e.qZA(),e._UZ(3,"bb-billpay-enrolment",2),e.qZA()),2&t&&(e.xp6(3),e.Q6J("notificationDismissTime",null==n.config?null:n.config.notificationDismissTime))},directives:[u.G,S.KH],encapsulation:2}),_})();const Fe=[b.Q,k.n,K.T,Y.G],we=[G,v,L.D6,L.cE],ke={path:"",component:(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["bb-manage-bill-payments-journey"]],features:[e._Bn([U,v,G])],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"router-outlet")},directives:[N.lC],encapsulation:2}),_})(),children:[{path:"enrolment",component:ee},{path:"",canActivate:[S.tc],children:[{path:"",component:z,pathMatch:"full"},{path:":id",component:X}]}]};let xe=(()=>{class _{static forRoot(t={route:ke}){return{ngModule:_,providers:[(0,N.co)([t.route])]}}}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.oAB({type:_}),_.\u0275inj=e.cJS({providers:[...we],imports:[[m.ez,N.Bz,S.Op,...Fe]]}),_})()},4747:(J,T,i)=>{"use strict";i.d(T,{Le:()=>D,cY:()=>O,kU:()=>L});var e=i(5e3),m=i(682);const N={segments:4},S=new e.OlP("ACCOUNTS_DISPLAYING_FORMAT_TOKEN");let D=(()=>{class r{constructor(A){this.accountsDisplayingFormat=A}getDefaultFormat(A,d){var s,p;return"cardNumber"===A?this.getCardNumberFormat(d):null!==(p=null===(s=this.accountsDisplayingFormat)||void 0===s?void 0:s[A])&&void 0!==p?p:N}getCardNumberFormat(A){var d;const s=null===(d=this.accountsDisplayingFormat)||void 0===d?void 0:d.cardNumber,p=Object.entries((null==s?void 0:s.cardProviders)||{}).reduce((c,M)=>Object.assign(Object.assign({},c),{[M[0].toLowerCase()]:M[1]}),{});return A&&p[A.toLowerCase()]?p[A.toLowerCase()]:null!=s?s:N}}return r.\u0275fac=function(A){return new(A||r)(e.LFG(S,8))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),L=(()=>{class r{constructor(A){this.accountsDisplayingFormatService=A}transform(A,d,s){const p=A.toString(),c="object"==typeof d?d:this.accountsDisplayingFormatService.getDefaultFormat(d,s);return(0,m.EX)(p,c.segments)}}return r.\u0275fac=function(A){return new(A||r)(e.Y36(D,16))},r.\u0275pipe=e.Yjl({name:"bbAccountNumber",type:r,pure:!0}),r})(),O=(()=>{class r{}return r.\u0275fac=function(A){return new(A||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({}),r})()},9633:(J,T,i)=>{"use strict";i.d(T,{So:()=>D,V9:()=>A,nj:()=>d});var e=i(9808),m=i(5e3),N=i(682),S=i(4747);const D={length:16,maskRange:[0,12],segments:4},O=new m.OlP("Enables accounts masking synchronization with backend",{providedIn:"root",factory:()=>!1});let A=(()=>{class s{constructor(c,M){this.accountsDisplayingFormatService=c,this.synchronizeNumberMasking=M,this.defaultFormat=this.accountsDisplayingFormatService.getDefaultFormat("cardNumber")}transform(c,M,B="\u2022"){const u=null!=M?M:this.defaultFormat;let b=c.toString();return M&&!this.synchronizeNumberMasking&&(b=function r(s,p,c="0",M=!0){const B=Math.max(p-s.length,0),u=c.repeat(B);return M?u+s:s+u}(b,M.length,B),b=function g(s,[p,c],M="*"){let B="";if(c<0){const u=s.slice(c);B=M.repeat(s.length-u.length)+u}else{const u=M.repeat(c-p);B=s.substring(0,p)+u+s.substring(c)}return B}(b,M.maskRange,B)),(0,N.EX)(b,u.segments)}}return s.\u0275fac=function(c){return new(c||s)(m.Y36(S.Le,16),m.Y36(O,24))},s.\u0275pipe=m.Yjl({name:"paymentCardNumber",type:s,pure:!0}),s})(),d=(()=>{class s{}return s.\u0275fac=function(c){return new(c||s)},s.\u0275mod=m.oAB({type:s}),s.\u0275inj=m.cJS({imports:[[e.ez]]}),s})()}}]);