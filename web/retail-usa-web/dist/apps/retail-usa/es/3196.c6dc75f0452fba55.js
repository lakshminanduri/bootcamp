(self.webpackChunkretail_usa=self.webpackChunkretail_usa||[]).push([[3196],{9528:(w,b,i)=>{"use strict";i.r(b),i.d(b,{ManageStatementsJourneyBundleModule:()=>ln});var e=i(5e3),T=i(7579),D=i(1135),M=i(9646),r=i(538),m=i(7218),A=i(4351),g=i(4004),_=i(262),C=i(1365),B=i(8505),y=(i(2071),i(5633)),l=i(5556);let f=(()=>{class n{constructor(){this.discard$=new T.x,this.isDiscardModalVisible$$=new D.X(!1),this.isFormActive=!1,this.isDiscardModalVisible$=this.isDiscardModalVisible$$.asObservable()}startChanges(){this.isFormActive=!0}finishChanges(){this.isFormActive=!1}requestDiscard(){return this.isFormActive?(this.discard$.complete(),this.discard$=new T.x,this.isDiscardModalVisible$$.next(!0),this.discard$.asObservable()):(0,M.of)(!0)}discard(){this.discard$.next(!0),this.discard$.complete(),this.isDiscardModalVisible$$.next(!1),this.finishChanges()}cancelDiscard(){this.discard$.next(!1),this.discard$.complete(),this.isDiscardModalVisible$$.next(!1)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),u=(()=>{class n{constructor(t){this.discardChangesService=t}canDeactivate(){return this.discardChangesService.requestDiscard()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();(0,r.PH)("[Manage Preferences] Init");const p=(0,r.PH)("[Manage Preferences] Fetch Accounts List"),L=(0,r.PH)("[Manage Preferences] Fetch Accounts List Failure",(0,r.Ky)()),Q=(0,r.PH)("[Manage Preferences] Fetch Accounts List Success",(0,r.Ky)()),J=(0,r.PH)("[Manage Preferences] Update preferences",(0,r.Ky)()),R=(0,r.PH)("[Manage Preferences] Update preferences Success"),x=(0,r.PH)("[Manage Preferences] Update preferences Failure"),Y=(0,r.PH)("[Manage Preferences] Set NotificationDismissTime",(0,r.Ky)()),k={accounts:[],loading:!1,updatePending:!1,error:"",notificationDismissTime:0},Se=(0,r.Lq)(k,(0,r.on)(p,n=>Object.assign(Object.assign({},n),{loading:!0})),(0,r.on)(Q,(n,{accounts:o})=>Object.assign(Object.assign({},n),{accounts:o,loading:!1})),(0,r.on)(L,(n,o)=>Object.assign(Object.assign({},n),{loading:!1,error:o})),(0,r.on)(J,n=>Object.assign(Object.assign({},n),{updatePending:!0})),(0,r.on)(R,n=>Object.assign(Object.assign({},n),{updatePending:!1})),(0,r.on)(x,n=>Object.assign(Object.assign({},n),{updatePending:!1})),(0,r.on)(Y,(n,{notificationDismissTime:o})=>Object.assign(Object.assign({},n),{notificationDismissTime:o}))),z="manageStatements",me={statementPreferences:function de(n=k,o){return Se(n,o)}},U=(0,r.ZF)(z),N={selectAccounts:(0,r.P1)(U,n=>n.statementPreferences.accounts),isAccountsListLoading:(0,r.P1)(U,n=>n.statementPreferences.loading),accountsListErrors:(0,r.P1)(U,n=>n.statementPreferences.error),updatePending:(0,r.P1)(U,n=>n.statementPreferences.updatePending),notificationDismissTime:(0,r.P1)(U,n=>n.statementPreferences.notificationDismissTime)};let V=(()=>{class n{constructor(t){this.store=t,this.accounts$=this.store.select(N.selectAccounts),this.loading$=this.store.select(N.isAccountsListLoading),this.error$=this.store.select(N.accountsListErrors),this.updatePending$=this.store.select(N.updatePending),this.notificationDismissTime$=this.store.select(N.notificationDismissTime)}fetchAccounts(){this.store.dispatch(p())}setNotificationDismissTime(t){this.store.dispatch(Y({notificationDismissTime:t}))}submitPreferences(t){this.store.dispatch(J({preferences:t}))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(r.yh))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),j=(()=>{class n{constructor(t){this.httpService=t,this.allItems=9999}getAccounts(){return this.httpService.getAccountStatementsPreferences({size:this.allItems},"body")}updateAccounts(t){return this.httpService.bulkUpdateAccountStatementPreferences({accountStatementsPreferencesBulkUpdateRequest:{preferences:t}},"body")}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(y.gJ))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),he=(()=>{class n{constructor(t,a,s){this.actions$=t,this.preferencesDataService=a,this.discardChangesService=s,this.fetchAccounts$=(0,m.GW)(()=>this.actions$.pipe((0,m.l4)(p),(0,A.b)(()=>this.preferencesDataService.getAccounts().pipe((0,g.U)(d=>Q({accounts:d})),(0,_.K)(d=>(0,M.of)(L(d))))))),this.updatePreferences$=(0,m.GW)(()=>this.actions$.pipe((0,m.l4)(J),(0,A.b)(d=>this.preferencesDataService.updateAccounts(d.preferences).pipe((0,g.U)(()=>R()),(0,_.K)(()=>(0,M.of)(x())))))),this.updatePreferencesSuccess$=(0,m.GW)(()=>this.actions$.pipe((0,m.l4)(R),(0,g.U)(()=>(this.discardChangesService.finishChanges(),p()))))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(m.eX),e.LFG(j),e.LFG(f))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),Ce=(()=>{class n{constructor(t,a,s){this.actions$=t,this.notificationService=a,this.store=s,this.updatePreferencesSuccess$=this.createEffect(R,{header:"Statements Successfully Updated",message:"",modifier:"success"}),this.updatePreferencesFailure$=this.createEffect(x,{header:"Failed to Update Statements",message:"Please try again",modifier:"error"})}createEffect(t,a){return(0,m.GW)(()=>this.actions$.pipe((0,m.l4)(t),(0,C.M)(this.store.select(N.notificationDismissTime)),(0,B.b)(([,s])=>{this.notificationService.showNotification(Object.assign(Object.assign({},a),{ttl:s}))})),{dispatch:!1})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(m.eX),e.LFG(l.gq),e.LFG(r.yh))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),be=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[j,V],imports:[[r.Aw.forFeature(z,me),m.sQ.forFeature([he,Ce])]]}),n})();i(6554);var X=i(6072),q=i(9287),ee=i(5460),S=i(9808),v=i(7605),I=i(5357),W=i(2722),Be=i(1884),E=i(3075),P=i(4619),ne=i(7933),te=i(2908),Z=i(3922),F=i(4951),G=i(5622),h=i(429),oe=i(9136);function Ne(n,o){if(1&n&&(e.TgZ(0,"tr",17)(1,"td",18),e._UZ(2,"bb-manage-preferences-account",19),e.qZA(),e.TgZ(3,"td",20),e._uU(4),e.qZA(),e.TgZ(5,"td",21),e._UZ(6,"bb-input-checkbox-ui",22),e.qZA(),e.TgZ(7,"td",23),e._UZ(8,"bb-input-checkbox-ui",24),e.qZA()()),2&n){const t=o.$implicit,a=o.index,s=e.oxw().ngIf;e.Q6J("formGroupName",a),e.xp6(2),e.Q6J("accountNumber",t.accountNumber)("displayName",t.displayName),e.xp6(2),e.hij(" ",t.accountType," "),e.xp6(2),e.Q6J("label",s.value?"Online":""),e.xp6(2),e.Q6J("label",s.value?"Post":"")}}const ve=function(n){return{"table-responsive":n}};function Oe(n,o){if(1&n&&(e.TgZ(0,"div",1)(1,"table",2)(2,"thead")(3,"tr")(4,"th",3)(5,"span",4),e.SDv(6,5),e.qZA()(),e.TgZ(7,"th",6)(8,"span",7),e.SDv(9,8),e.qZA()(),e.TgZ(10,"th",9)(11,"span",10),e.SDv(12,11),e.qZA()(),e.TgZ(13,"th",12)(14,"span",13),e.SDv(15,14),e.qZA()()()(),e.TgZ(16,"tbody",15),e.YNc(17,Ne,9,6,"tr",16),e.qZA()()()),2&n){const t=o.ngIf,a=e.oxw();e.Q6J("formGroup",a.form)("ngClass",e.VKq(5,ve,t.value)),e.xp6(1),e.Q6J("bbTable",a.accounts),e.xp6(15),e.Q6J("formArrayName",a.arrayName),e.xp6(1),e.Q6J("ngForOf",a.accounts)}}function De(n,o){1&n&&e._UZ(0,"bb-loading-indicator-ui",10)}const ye=function(n){return{invisible:n}};function Ue(n,o){1&n&&(e.TgZ(0,"h1",4),e.Hsn(1),e.qZA())}function Fe(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"label",7,8),e.SDv(3,9),e.qZA(),e.TgZ(4,"span",10),e._uU(5," ("),e.ynx(6),e.SDv(7,11),e.BQk(),e._uU(8,") "),e.qZA(),e.TgZ(9,"bb-textarea-ui",12),e.NdJ("ngModelChange",function(s){return e.CHM(t),e.oxw(2).comment=s}),e.qZA(),e.BQk()}if(2&n){const t=e.MAs(2),a=e.oxw(2);e.xp6(3),e.pQV(a.commentFieldLabel),e.QtT(3),e.xp6(6),e.Q6J("rows",3)("cols",50)("minLength",3)("maxLength",140)("ngModel",a.comment)("aria-labelledby",t.id)("showCharCounter",!0)}}const Le=function(n){return{"bb-block bb-block--md":n}};function Re(n,o){if(1&n&&(e.TgZ(0,"div",5),e.Hsn(1,1),e.qZA(),e.YNc(2,Fe,10,8,"ng-container",6)),2&n){const t=e.oxw();e.Q6J("ngClass",e.VKq(2,Le,t.attachComment)),e.xp6(2),e.Q6J("ngIf",t.attachComment&&t.isOpen)}}function Ie(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",13)(1,"button",14),e.NdJ("click",function(){return e.CHM(t),e.oxw().onClickConfirm()}),e.Hsn(2,2),e.qZA(),e.TgZ(3,"button",15),e.NdJ("click",function(){return e.CHM(t),e.oxw().onClickCancel()}),e.Hsn(4,3),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("color",t.confirmButtonColor),e.xp6(2),e.Q6J("color",t.cancelButtonColor)}}const Pe=[[["","title",""]],[["","body",""]],[["","confirmButtonLabel",""]],[["","cancelButtonLabel",""]]],Ge=["[title]","[body]","[confirmButtonLabel]","[cancelButtonLabel]"];function Ke(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"bb-manage-preferences-form",14),e.NdJ("dirty",function(s){return e.CHM(t),e.oxw(4).onDirty(s)})("formSubmit",function(s){return e.CHM(t),e.oxw(4).onSubmit(s)}),e.ALo(2,"async"),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(2).ngIf,a=e.oxw(2);e.xp6(1),e.Q6J("accounts",t)("pending",!0===e.lcZ(2,2,a.updatePending$))}}function Je(n,o){if(1&n&&(e.ynx(0),e.YNc(1,Ke,3,4,"ng-container",0),e.BQk()),2&n){const t=e.oxw().ngIf;e.oxw(2);const a=e.MAs(7);e.xp6(1),e.Q6J("ngIf",t.length>0)("ngIfElse",a)}}function xe(n,o){if(1&n&&(e.ynx(0),e.YNc(1,Je,2,2,"ng-container",0),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw(2),a=e.MAs(5);e.xp6(1),e.Q6J("ngIf",!e.lcZ(2,2,t.error$))("ngIfElse",a)}}function We(n,o){if(1&n&&(e.ynx(0),e.YNc(1,xe,3,4,"ng-container",13),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,t.accounts$))}}function Ze(n,o){1&n&&e._UZ(0,"bb-manage-preferences-loading-state")}function $e(n,o){1&n&&e._UZ(0,"bb-manage-preferences-error-state")}function we(n,o){1&n&&e._UZ(0,"bb-manage-preferences-empty-state")}function He({accountId:n,accountNumber:o,accountName:t,accountType:a,displayName:s,onlineStatement:d,paperStatement:K}){return{accountId:n||"",accountNumber:o||"",accountType:a||"",displayName:s||t||"",onlineStatement:!!d,paperStatement:!!K}}let Qe=(()=>{class n{constructor(t){this.rootFormGroup=t,this.indeterminate=!1,this.controlName=""}ngOnInit(){this.form=this.rootFormGroup.form}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(E.sg))},n.\u0275cmp=e.Xpm({type:n,selectors:[["bb-go-paperless-banner"]],inputs:{indeterminate:"indeterminate",controlName:"controlName"},decls:4,vars:3,consts:function(){let o;return o="Go Paperless for all accounts",[[3,"formGroup"],[1,"card","mb-4"],[1,"card-body","p-3"],["label",o,"data-role","manage-preferences-go-paperless-banner",3,"formControlName","indeterminate"]]},template:function(t,a){1&t&&(e.ynx(0,0),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"bb-input-checkbox-ui",3),e.qZA()(),e.BQk()),2&t&&(e.Q6J("formGroup",a.form),e.xp6(3),e.Q6J("formControlName",a.controlName)("indeterminate",a.indeterminate))},directives:[P.r,E.JL,E.sg,E.JJ,E.u],encapsulation:2,changeDetection:0}),n})(),ae=(()=>{class n{constructor(){this.accountNumber="",this.displayName=""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["bb-manage-preferences-account"]],inputs:{accountNumber:"accountNumber",displayName:"displayName"},decls:1,vars:3,consts:[[3,"productNumber","title","active"]],template:function(t,a){1&t&&e._UZ(0,"bb-product-item-basic-account-ui",0),2&t&&e.Q6J("productNumber",a.accountNumber)("title",a.displayName)("active",!1)},directives:[te.mB],encapsulation:2,changeDetection:0}),n})(),ie=(()=>{class n{constructor(t,a){this.mediaQueryService=t,this.rootFormGroup=a,this.accounts=[],this.arrayName="",this.listLayout$=this.mediaQueryService.isMediaBreakpointMatches("min-width","sm").pipe((0,g.U)(s=>({value:!s})))}ngOnInit(){this.form=this.rootFormGroup.form}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(ne.h),e.Y36(E.sg))},n.\u0275cmp=e.Xpm({type:n,selectors:[["bb-manage-preferences-table"]],inputs:{accounts:"accounts",arrayName:"arrayName"},decls:2,vars:3,consts:function(){let o,t,a,s,d,K,ue;return o="Manage preferences table",t="Account name",a="Account type",s="Online",d="Post",K="Online",ue="Post",[[3,"formGroup","ngClass",4,"ngIf"],[3,"formGroup","ngClass"],["aria-label",o,"bbTableFocus","",1,"table","manage-statements__table",3,"bbTable"],["data-role","manage-preferences-table__accountName-header","scope","col"],["data-role","account-name-thead",1,"th-content"],t,["data-role","manage-preferences-table__accountType-header","scope","col"],["data-role","account-type-thead",1,"th-content"],a,["data-role","manage-preferences-table__online-header","scope","col"],["data-role","online-thead",1,"th-content"],s,["data-role","manage-preferences-table__post-header","scope","col"],["data-role","post-thead",1,"th-content"],d,[3,"formArrayName"],["data-role","manage-preferences-table__row",3,"formGroupName",4,"ngFor","ngForOf"],["data-role","manage-preferences-table__row",3,"formGroupName"],["data-role","account-name-td"],[3,"accountNumber","displayName"],[1,"account-type-td"],[1,"online-statement-td"],["aria-label",K,"formControlName","onlineStatement","data-role","manage-preferences-table__checkbox-online",3,"label"],[1,"post-statement-td"],["aria-label",ue,"formControlName","paperStatement","data-role","manage-preferences-table__checkbox-post",3,"label"]]},template:function(t,a){1&t&&(e.YNc(0,Oe,18,7,"div",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,a.listLayout$))},directives:[ae,P.r,S.O5,E.JL,E.sg,S.mk,Z.au,Z.xi,E.CE,S.sg,E.x0,E.JJ,E.u],pipes:[S.Ov],encapsulation:2,changeDetection:0}),n})(),Ye=(()=>{class n{constructor(t){this.formBuilder=t,this.destroy$=new T.x,this.accounts=[],this.pending=!1,this.formSubmit=new e.vpe,this.dirty=new e.vpe,this.paperlessFormControl=new E.NI(!1),this.indeterminate=!1}ngOnInit(){this.buildForm(this.accounts),this.calculateIndeterminate(),this.updateCheckboxState(),this.watchPaperlessChange(),this.watchPreferencesChange(),this.watchDirtyChange()}ngOnChanges(t){t.accounts&&this.preferencesArray&&(this.form.markAsPristine(),this.updatePreferencesValues(this.accounts))}buildForm(t){const a=t.map(s=>this.formBuilder.group({paperStatement:this.formBuilder.control(s.paperStatement),onlineStatement:this.formBuilder.control(s.onlineStatement)}));this.preferencesArray=this.formBuilder.array(a),this.form=this.formBuilder.group({paperless:this.paperlessFormControl,preferences:this.preferencesArray})}updatePreferencesValues(t){this.preferencesArray.patchValue(t.map(({paperStatement:a,onlineStatement:s})=>({paperStatement:a,onlineStatement:s})))}watchPaperlessChange(){this.paperlessFormControl.valueChanges.pipe((0,B.b)(t=>this.preferencesArray.controls.forEach(a=>a.patchValue({onlineStatement:t,paperStatement:!t}))),(0,W.R)(this.destroy$)).subscribe()}watchPreferencesChange(){this.preferencesArray.valueChanges.pipe((0,B.b)(()=>{this.calculateIndeterminate(),this.updateCheckboxState()}),(0,W.R)(this.destroy$)).subscribe()}watchDirtyChange(){this.form.valueChanges.pipe((0,g.U)(()=>this.form.dirty),(0,Be.x)(),(0,B.b)(t=>this.dirty.emit(t)),(0,W.R)(this.destroy$)).subscribe()}calculateIndeterminate(){const t=this.preferencesArray.controls;this.indeterminate=t.some(a=>a.value.onlineStatement)&&t.some(a=>a.value.paperStatement)}updateCheckboxState(){const t=this.preferencesArray.controls,a=t.every(s=>s.value.onlineStatement)&&!t.some(s=>s.value.paperStatement);this.paperlessFormControl.patchValue(a,{emitEvent:!1})}onPreferencesSubmit(){if(this.pending)return;const t=this.accounts.map((a,s)=>({accountId:a.accountId,onlineStatement:this.preferencesArray.controls[s].value.onlineStatement,paperStatement:this.preferencesArray.controls[s].value.paperStatement}));this.formSubmit.emit(t)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(E.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["bb-manage-preferences-form"]],inputs:{accounts:"accounts",pending:"pending"},outputs:{formSubmit:"formSubmit",dirty:"dirty"},features:[e.TTD],decls:10,vars:7,consts:function(){let o;return o=" Save ",[[3,"formGroup","ngSubmit"],["controlName","paperless",3,"indeterminate"],[1,"card"],[1,"card-body"],["arrayName","preferences",3,"accounts"],[1,"bb-button-bar"],["bbButton","","color","primary","type","submit","data-role","manage-preferences-table__submit",1,"bb-button-bar__button"],[1,"bb-load-button__content",3,"ngClass"],o,["class","bb-load-button__loading-indicator","data-role","manage-preferences-table__submit--loading","loaderSize","sm",4,"ngIf"],["data-role","manage-preferences-table__submit--loading","loaderSize","sm",1,"bb-load-button__loading-indicator"]]},template:function(t,a){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return a.onPreferencesSubmit()}),e._UZ(1,"bb-go-paperless-banner",1),e.TgZ(2,"div",2)(3,"div",3),e._UZ(4,"bb-manage-preferences-table",4),e.TgZ(5,"div",5)(6,"button",6)(7,"span",7),e.SDv(8,8),e.qZA(),e.YNc(9,De,1,0,"bb-loading-indicator-ui",9),e.qZA()()()()()),2&t&&(e.Q6J("formGroup",a.form),e.xp6(1),e.Q6J("indeterminate",a.indeterminate),e.xp6(3),e.Q6J("accounts",a.accounts),e.xp6(3),e.Q6J("ngClass",e.VKq(5,ye,a.pending)),e.xp6(2),e.Q6J("ngIf",a.pending))},directives:[Qe,ie,F.Q,E._Y,E.JL,E.sg,v.Hq,S.mk,S.O5],encapsulation:2,changeDetection:0}),n})(),se=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["bb-manage-preferences-loading-state"]],decls:3,vars:0,consts:[[1,"card"],[1,"card-body"],["data-role","manage-preferences-table__loading","loaderSize","lg"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"bb-loading-indicator-ui",2),e.qZA()())},directives:[F.Q],encapsulation:2,changeDetection:0}),n})(),re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["bb-manage-preferences-error-state"]],decls:3,vars:0,consts:function(){let o,t;return o="Page Couldn't Load",t="Try to reload the page or contact the system administrator.",[[1,"card"],[1,"card-body"],["iconSize","xxl","iconModifier","error","data-role","manage-preferences-error-state","title",o,"subtitle",t,1,"bb-state-container"]]},template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"bb-empty-state-ui",2),e.qZA()())},directives:[G.s],encapsulation:2,changeDetection:0}),n})(),ce=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["bb-manage-preferences-empty-state"]],decls:3,vars:0,consts:function(){let o,t;return o="No Accounts to Show",t="You need to open an account. For help please contact the bank.",[[1,"card"],[1,"card-body"],["iconSize","xxl","iconModifier","current-accounts","data-role","manage-preferences-empty-state","title",o,"subtitle",t,1,"bb-state-container"]]},template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"bb-empty-state-ui",2),e.qZA()())},directives:[G.s],encapsulation:2,changeDetection:0}),n})(),ke=(()=>{class n{constructor(){this.modalOptions={backdrop:"static",keyboard:!1},this.comment="",this.confirmButtonColor="primary",this.cancelButtonColor="link",this.isOpen=!1,this.attachComment=!1,this.commentFieldLabel="Add comment",this.confirm=new e.vpe,this.cancel=new e.vpe}ngOnChanges(t){t.isOpen&&(this.comment="")}onClickCancel(){this.cancel.emit()}onClickConfirm(){this.confirm.emit({comment:this.comment})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["bb-confirm-action-dialog"]],inputs:{confirmButtonColor:"confirmButtonColor",cancelButtonColor:"cancelButtonColor",isOpen:"isOpen",attachComment:"attachComment",commentFieldLabel:"commentFieldLabel"},outputs:{confirm:"confirm",cancel:"cancel"},features:[e.TTD],ngContentSelectors:Ge,decls:7,vars:2,consts:function(){let o,t;return o="" + "\ufffd0\ufffd" + "",t="Optional",[["aria-labelledby","manage-preferences-confirm-action-dialog-header","aria-describedby","manage-preferences-confirm-action-dialog-body",3,"isOpen","modalOptions"],["bbCustomModalHeader",""],["bbCustomModalBody",""],["bbCustomModalFooter",""],["data-role","confirm-action-header","id","manage-preferences-confirm-action-dialog-header",1,"modal-title"],["id","manage-preferences-confirm-action-dialog-body",3,"ngClass"],[4,"ngIf"],["id","manage-preferences-approval-log-comment-label"],["commentLabel",""],o,["id","comment-optional-info",1,"bb-text-support"],t,["wrap","hard","aria-describedby","comment-optional-info","data-role","confirmation-comment",3,"rows","cols","minLength","maxLength","ngModel","aria-labelledby","showCharCounter","ngModelChange"],[1,"bb-button-bar"],["bbButton","","data-role","confirm-action-confirm-btn",1,"bb-button-bar__button",3,"color","click"],["bbButton","","data-role","confirm-action-cancel-btn",1,"bb-button-bar__button",3,"color","click"]]},template:function(t,a){1&t&&(e.F$t(Pe),e.TgZ(0,"bb-modal-ui",0)(1,"bb-modal-header-ui"),e.YNc(2,Ue,2,0,"ng-template",1),e.qZA(),e.TgZ(3,"bb-modal-body-ui"),e.YNc(4,Re,3,4,"ng-template",2),e.qZA(),e.TgZ(5,"bb-modal-footer-ui"),e.YNc(6,Ie,5,2,"ng-template",3),e.qZA()()),2&t&&e.Q6J("isOpen",a.isOpen)("modalOptions",a.modalOptions)},directives:[h.zS,h.Rb,h.KF,oe.R,h.YI,h.cA,h.Qd,S.mk,S.O5,E.JJ,E.On,h.yk,v.Hq],encapsulation:2,changeDetection:0}),n})(),_e=(()=>{class n{constructor(t,a){this.storeFacade=t,this.discardChangesService=a,this.accounts$=this.storeFacade.accounts$.pipe((0,g.U)(s=>s.map(He))),this.loading$=this.storeFacade.loading$,this.error$=this.storeFacade.error$,this.updatePending$=this.storeFacade.updatePending$,this.isDiscardModalVisible$=this.discardChangesService.isDiscardModalVisible$}set notificationDismissTime(t){this.storeFacade.setNotificationDismissTime(t)}ngOnInit(){this.storeFacade.fetchAccounts()}onSubmit(t){this.storeFacade.submitPreferences(t)}onDirty(t){t?this.discardChangesService.startChanges():this.discardChangesService.finishChanges()}confirmDiscard(){this.discardChangesService.discard()}cancelDiscard(){this.discardChangesService.cancelDiscard()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(V),e.Y36(f))},n.\u0275cmp=e.Xpm({type:n,selectors:[["bb-manage-statements-preference-container"]],inputs:{notificationDismissTime:"notificationDismissTime"},decls:18,vars:8,consts:function(){let o,t,a,s;return o="Leave Without Saving?",t="You have unsaved changes. If you leave, all entered data will be lost. ",a="Cancel",s="Leave",[[4,"ngIf","ngIfElse"],["loadingState",""],["managePreferencesErrorState",""],["managePreferencesEmptyState",""],[3,"isOpen","confirmButtonColor","confirm","cancel"],["title",""],o,["body",""],t,["cancelButtonLabel",""],a,["confirmButtonLabel",""],s,[4,"ngIf"],[3,"accounts","pending","dirty","formSubmit"]]},template:function(t,a){if(1&t&&(e.YNc(0,We,3,3,"ng-container",0),e.ALo(1,"async"),e.YNc(2,Ze,1,0,"ng-template",null,1,e.W1O),e.YNc(4,$e,1,0,"ng-template",null,2,e.W1O),e.YNc(6,we,1,0,"ng-template",null,3,e.W1O),e.TgZ(8,"bb-confirm-action-dialog",4),e.NdJ("confirm",function(){return a.confirmDiscard()})("cancel",function(){return a.cancelDiscard()}),e.ALo(9,"async"),e.TgZ(10,"span",5),e.SDv(11,6),e.qZA(),e.TgZ(12,"span",7),e.SDv(13,8),e.qZA(),e.TgZ(14,"span",9),e.SDv(15,10),e.qZA(),e.TgZ(16,"span",11),e.SDv(17,12),e.qZA()()),2&t){const s=e.MAs(3);e.Q6J("ngIf",!e.lcZ(1,4,a.loading$))("ngIfElse",s),e.xp6(8),e.Q6J("isOpen",!0===e.lcZ(9,6,a.isDiscardModalVisible$))("confirmButtonColor","danger")}},directives:[Ye,se,re,ce,ke,S.O5],pipes:[S.Ov],encapsulation:2,changeDetection:0}),n})(),ze=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.zk,v.hJ,S.ez,oe.J,E.u5]]}),n})();const Ve=[Z.U$,te.gn,P.b,ne.x];let je=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[S.ez,...Ve,E.u5,E.UX]]}),n})(),Xe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[P.b,E.UX,je,S.ez,F.p,v.hJ]]}),n})();const qe=[F.p,G.P,l.PQ];let en=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[S.ez,...qe]]}),n})();const nn=[F.p,G.P,l.PQ];let tn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[S.ez,...nn,ze,Xe,en]]}),n})();function on(n,o){if(1&n&&(e.TgZ(0,"div",4)(1,"button",5),e.ALo(2,"async"),e._UZ(3,"bb-icon-ui",6),e.TgZ(4,"span",7),e.SDv(5,8),e.qZA()()()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("routerLink",e.lcZ(2,1,t.accountStatementsNavigationUrl$))}}const le=new e.OlP("MANAGE_STATEMENTS_JOURNEY_CONFIG"),an={notificationDismissTime:3e3,showAccountStatementsNavigation:!0,accountStatementsNavigationUrl:"/download-statements"};let $=(()=>{class n{constructor(t){this.config=Object.assign(Object.assign({},an),t||{})}get notificationDismissTime(){return(0,M.of)(this.config.notificationDismissTime)}get showAccountStatementsNavigation(){return(0,M.of)(this.config.showAccountStatementsNavigation)}get accountStatementsNavigationUrl(){return(0,M.of)(this.config.accountStatementsNavigationUrl)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(le,8))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();const sn={path:"",component:(()=>{class n{constructor(t){this.config=t,this.showAccountStatementsNavigation$=this.config.showAccountStatementsNavigation,this.accountStatementsNavigationUrl$=this.config.accountStatementsNavigationUrl}}return n.\u0275fac=function(t){return new(t||n)(e.Y36($))},n.\u0275cmp=e.Xpm({type:n,selectors:[["bb-manage-statements-journey"]],decls:7,vars:3,consts:function(){let o,t,a;return o="Manage Statements",t=" Below you can define which accounts you would like to be delivered online, by post, or both. ",a=" Back to Account Statements ",[["class","bb-block bb-block--lg",4,"ngIf"],[1,"page-heading-primary","px-0","bb-block--lg"],["headingType","h1","heading",o],t,[1,"bb-block","bb-block--lg"],["bbButton","","color","link-text","data-role","manage-statements-heading__navigation",3,"routerLink"],["name","arrow-back"],[1,"ml-1"],a]},template:function(t,a){1&t&&(e.YNc(0,on,6,3,"div",0),e.ALo(1,"async"),e.TgZ(2,"div",1),e._UZ(3,"bb-header-ui",2),e.qZA(),e.TgZ(4,"p"),e.SDv(5,3),e.qZA(),e._UZ(6,"router-outlet")),2&t&&e.Q6J("ngIf",!0===e.lcZ(1,1,a.showAccountStatementsNavigation$))},directives:[q.o,ee.G,S.O5,v.Hq,I.rH,I.lC],pipes:[S.Ov],encapsulation:2,changeDetection:0}),n})(),canActivate:[X.GW],data:{entitlements:"AccountStatements.ManageStatements.view"},children:[{path:"",component:(()=>{class n{constructor(t){this.config=t,this.notificationDismissTime$=this.config.notificationDismissTime}}return n.\u0275fac=function(t){return new(t||n)(e.Y36($))},n.\u0275cmp=e.Xpm({type:n,selectors:[["bb-account-statement-retail-view"]],decls:2,vars:3,consts:[[3,"notificationDismissTime"]],template:function(t,a){1&t&&(e._UZ(0,"bb-manage-statements-preference-container",0),e.ALo(1,"async")),2&t&&e.Q6J("notificationDismissTime",e.lcZ(1,1,a.notificationDismissTime$))},directives:[_e],pipes:[S.Ov],encapsulation:2,changeDetection:0}),n})(),canDeactivate:[u]}]},rn=[ee.O,q.Q,v.hJ,be,tn];let cn=(()=>{class n{static forRoot(t={routes:sn}){return{ngModule:n,providers:[y.gJ,f,u,$,(0,I.co)([t.routes])]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[S.ez,I.Bz,X.Gl,...rn]]}),n})();var _n=i(570);let ln=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[{provide:le,useFactory:function(){return{accountStatementsNavigationUrl:"/self-service/download-statements"}}},{provide:y.m9,useExisting:_n.wi}],imports:[[cn.forRoot()]]}),n})()},2071:()=>{},6554:()=>{},3823:(w,b,i)=>{"use strict";i.d(b,{Z:()=>r,_:()=>m});var e=i(5e3),T=i(9808);let r=(()=>{class A{constructor(_,C){this.renderer=_,this.elementRef=C,this.negativeClass="bb-amount--negative",this.positiveClass="bb-amount--positive",this.amountValue=0,this.highlightValue=!0}set amount(_){this.amountValue="number"==typeof _?_:parseFloat(_)}set bbHighlight(_){this.highlightValue=""===_||_}get isPositive(){return this.amountValue>=0}ngOnChanges(_){_.negativeClass&&this.renderer.removeClass(this.elementRef.nativeElement,_.negativeClass.previousValue),_.positiveClass&&this.renderer.removeClass(this.elementRef.nativeElement,_.positiveClass.previousValue),(_.amount||_.highlight||_.bbHighlight)&&(this.renderer.removeClass(this.elementRef.nativeElement,this.negativeClass),this.renderer.removeClass(this.elementRef.nativeElement,this.positiveClass)),this.highlightValue&&this.renderer.addClass(this.elementRef.nativeElement,this.isPositive?this.positiveClass:this.negativeClass)}}return A.\u0275fac=function(_){return new(_||A)(e.Y36(e.Qsj),e.Y36(e.SBq))},A.\u0275dir=e.lG2({type:A,selectors:[["","bbHighlight",""]],inputs:{amount:"amount",bbHighlight:"bbHighlight",negativeClass:"negativeClass",positiveClass:"positiveClass"},features:[e.TTD]}),A})(),m=(()=>{class A{}return A.\u0275fac=function(_){return new(_||A)},A.\u0275mod=e.oAB({type:A}),A.\u0275inj=e.cJS({imports:[[T.ez]]}),A})()},9136:(w,b,i)=>{"use strict";i.d(b,{J:()=>y,R:()=>H});var e=i(5e3),T=i(9144),D=i(682),M=i(4483),r=i(3075),m=i(6746),A=i(9808),g=i(3203);function _(l,f){if(1&l&&(e.TgZ(0,"label",5),e._uU(1),e.qZA()),2&l){const u=e.oxw();e.s9C("for",u.id),e.uIk("data-role","textarea-label"),e.xp6(1),e.Oqu(u.label)}}function C(l,f){if(1&l&&e._UZ(0,"bb-char-counter-ui",6),2&l){const u=e.oxw(),c=e.MAs(3);e.Q6J("element",c)("inputValue",u.value)("maxLength",u.maxLength),e.uIk("id",u.charCounterId)("data-role","textarea-char-counter")}}const B=function(l,f){return{"ng-invalid":l,"ng-touched":f}};let H=(()=>{class l extends T.rA{constructor(u,c,p){super(u),this.cd=u,this.domAttributesService=c,this.parentFormControl=p,this.placeholder="",this.readonly=!1,this.showCharCounter=!1,this.idListAttr=D.hQ,this.charCounterId=this.domAttributesService.generateId(),this.parentFormControl&&(this.parentFormControl.valueAccessor=this)}}return l.\u0275fac=function(u){return new(u||l)(e.Y36(e.sBO),e.Y36(M.JE),e.Y36(r.a5,10))},l.\u0275cmp=e.Xpm({type:l,selectors:[["bb-textarea-ui"]],inputs:{rows:"rows",cols:"cols",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",readonly:"readonly",showCharCounter:"showCharCounter",wrap:"wrap"},features:[e.qOj],decls:5,vars:27,consts:[[1,"bb-textarea-ui",3,"ngClass"],[3,"for",4,"ngIf"],[1,"form-control",3,"id","ngModel","rows","cols","disabled","readOnly","bbFocus","placeholder","required","wrap","ngModelChange","blur","focus"],["textarea",""],[3,"element","inputValue","maxLength",4,"ngIf"],[3,"for"],[3,"element","inputValue","maxLength"]],template:function(u,c){1&u&&(e.TgZ(0,"div",0),e.YNc(1,_,2,3,"label",1),e.TgZ(2,"textarea",2,3),e.NdJ("ngModelChange",function(L){return c.onValueChange(L)})("blur",function(){return c.onBlur()})("focus",function(){return c.onFocus()}),e.qZA(),e.YNc(4,C,1,5,"bb-char-counter-ui",4),e.qZA()),2&u&&(e.Q6J("ngClass",e.WLB(24,B,null==c.parentFormControl?null:c.parentFormControl.invalid,null==c.parentFormControl?null:c.parentFormControl.touched)),e.xp6(1),e.Q6J("ngIf",c.label),e.xp6(1),e.s9C("id",c.id),e.Q6J("ngModel",c.value)("rows",c.rows)("cols",c.cols)("disabled",c.disabled)("readOnly",c.readonly)("bbFocus",c.autofocus)("placeholder",c.placeholder)("required",c.required)("wrap",c.wrap),e.uIk("aria-label",c.label?null:c.ariaLabel||null)("aria-describedby",c.idListAttr(c.ariaDescribedby,c.maxLength&&c.showCharCounter?c.charCounterId:null))("aria-labelledby",c.ariaLabelledby)("aria-expanded",c.ariaExpanded)("role",c.role)("aria-invalid",c.ariaInvalid)("aria-owns",c.ariaOwns)("aria-activedescendant",c.ariaActivedescendant)("maxlength",c.maxLength)("minlength",c.minLength)("data-role","textarea-text-field"),e.xp6(2),e.Q6J("ngIf",c.maxLength&&c.showCharCounter))},directives:[m.M,A.mk,A.O5,r.Fj,r.JJ,r.On,g.R,r.Q7,r.nD,r.wO],encapsulation:2,changeDetection:0}),l})(),y=(()=>{class l{}return l.\u0275fac=function(u){return new(u||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[A.ez,r.u5,T.$B,m.Z,g.J]]}),l})()}}]);