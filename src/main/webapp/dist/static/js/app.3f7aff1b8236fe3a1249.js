webpackJsonp([1],{"9zH9":function(t,e){},GKv3:function(t,e){},Js7q:function(t,e){},NHnr:function(t,e,l){"use strict";function i(t){l("hsBK")}function n(t){l("9zH9")}function s(t){l("Js7q")}function r(t){l("GKv3")}function a(t){l("XFz2")}Object.defineProperty(e,"__esModule",{value:!0});var o=l("7+uW"),c=l("v5o6"),u=l.n(c),v=l("/ocq"),d={name:"app"},_=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"app"}},[l("router-view")],1)},f=[],g={render:_,staticRenderFns:f},p=g,h=l("VU/8"),m=i,b=h(d,p,!1,m,null,null),x=b.exports,S=l("wmxo"),y=(S.a,String,String,String,String,String,String,Number,String,String,{name:"group",methods:{cleanStyle:S.a},props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number],footerTitle:String,footerTitleColor:String}}),C=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t.title?l("div",{staticClass:"weui-cells__title",style:t.cleanStyle({color:t.titleColor}),domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),l("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:t.cleanStyle({marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter})},[t._t("after-title"),t._v(" "),t._t("default")],2),t._v(" "),t.footerTitle?l("div",{staticClass:"weui-cells__title vux-group-footer-title",style:t.cleanStyle({color:t.footerTitleColor}),domProps:{innerHTML:t._s(t.footerTitle)}}):t._e()],2)},w=[],$={render:C,staticRenderFns:w},T=$,j=l("VU/8"),k=n,O=j(y,T,!1,k,null,null),R=O.exports,A={name:"inline-desc"},F=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},H=[],I={render:F,staticRenderFns:H},M=I,D=l("VU/8"),E=s,L=D(A,M,!1,E,null,null),U=L.exports,V=l("0FxO"),z=l("2IIR"),K=l("vLYD"),N=(Object(z.a)(),{name:"cell",components:{InlineDesc:U},props:Object(z.a)(),created:function(){},beforeMount:function(){this.hasTitleSlot=!!this.$slots.title,this.$slots.value},computed:{labelStyles:function(){return Object(S.a)({width:Object(K.a)(this,"labelWidth"),textAlign:Object(K.a)(this,"labelAlign"),marginRight:Object(K.a)(this,"labelMarginRight")})},valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}},style:function(){if(this.alignItems)return{alignItems:this.alignItems}}},methods:{onClick:function(){!this.disabled&&Object(V.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!0,hasMounted:!1}}}),W=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},style:t.style,on:{click:t.onClick}},[l("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),l("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[l("p",[t.title||t.hasTitleSlot?l("label",{staticClass:"vux-label",class:t.labelClass,style:t.labelStyles},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),l("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),l("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?l("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},q=[],G={render:W,staticRenderFns:q},J=G,P=l("VU/8"),X=r,B=P(N,J,!1,X,null,null),Q=B.exports,Y={components:{Group:R,Cell:Q},data:function(){return{msg:"Hello World!"}}},Z=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t._m(0),t._v(" "),l("group",{attrs:{title:"cell demo"}},[l("cell",{attrs:{title:"VUX",value:"cool","is-link":""}})],1)],1)},tt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-demo"},[i("img",{staticClass:"logo",attrs:{src:l("ge4Q")}}),t._v(" "),i("h1")])}],et={render:Z,staticRenderFns:tt},lt=et,it=l("VU/8"),nt=a,st=it(Y,lt,!1,nt,null,null),rt=st.exports;o.a.use(v.a);var at=[{path:"/",component:rt}],ot=new v.a({routes:at});u.a.attach(document.body),o.a.config.productionTip=!1,new o.a({router:ot,render:function(t){return t(x)}}).$mount("#app-box")},XFz2:function(t,e){},ge4Q:function(t,e,l){t.exports=l.p+"static/img/vux_logo.79cbb96.png"},hsBK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3f7aff1b8236fe3a1249.js.map