webpackJsonp([1],{F05s:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/5sW"),s=n("/ocq"),r=n("mtWM"),a=n.n(r),o=n("//Fk"),c=n.n(o);function u(t){var e=document.createElement("img"),n=new c.a(function(n,i){e.onload=function(){return n(t)},e.onerror=function(){return i(t)}});return e.src=t,n}var d={name:"Slide",props:{url:String,number:String}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"figure"},[e("img",{staticClass:"img-responsive",attrs:{src:this.url,alt:""}}),this._v(" "),e("figcaption",{staticClass:"text-center text-gray mt-2"},[this._v(this._s(this.number))])])},staticRenderFns:[]};var h=n("VU/8")(d,l,!1,function(t){n("byor")},"data-v-701ecf08",null).exports,g={name:"Slideshow",props:{images:Array},data:function(){return{active:0,isLoading:!1,loaded:!1}},computed:{activeUrl:function(){return this.images[this.active].url},number:function(){return this.active+1+"/"+this.images.length},start:function(){return 0===this.active},end:function(){return this.active===this.images.length-1}},watch:{images:function(t,e){var n=this;0===e.length&&0!==t.length&&u(this.activeUrl).then(function(t){return n.loaded=!0})},$route:function(){this.changeSlide(Number(this.$route.params.index),!0)}},methods:{changeSlide:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t-1:this.active+t;void 0!==this.images[n]&&(this.isLoading=!0,u(this.images[n].url).then(function(t){e.active=n,e.isLoading=!1,e.$router.push("/slide/"+(n+1))}))}},components:{Slide:h}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slides-wrapper",class:{loading:t.isLoading||!t.loaded}},[t.loaded?[n("button",{staticClass:"btn btn-primary btn-action btn-lg slides-prev",attrs:{disabled:t.start||t.isLoading},on:{click:function(e){t.changeSlide(-1)}}},[n("i",{staticClass:"icon icon-arrow-left"})]),t._v(" "),n("div",{staticClass:"slides"},[n("slide",{class:{dimmed:t.isLoading},attrs:{url:t.activeUrl,number:t.number}})],1),t._v(" "),n("button",{staticClass:"btn btn-primary btn-action btn-lg slides-next",attrs:{disabled:t.end||t.isLoading},on:{click:function(e){t.changeSlide(1)}}},[n("i",{staticClass:"icon icon-arrow-right"})])]:t._e()],2)},staticRenderFns:[]};var m=n("VU/8")(g,p,!1,function(t){n("F05s")},"data-v-7a8674af",null).exports,f={name:"App",props:{endpoint:String},data:function(){return{images:[]}},components:{Slideshow:m},created:function(){var t=this;a.a.get(this.endpoint).then(function(e){return t.images=e.data})}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[this._v("Pokaz zdjęć")]),this._v(" "),e("router-view",{attrs:{images:this.images}})],1)},staticRenderFns:[]},b=n("VU/8")(f,v,!1,null,null,null).exports,_=[{path:"/",redirect:"/slide/1"},{path:"/slide/:index",component:m}],w=new s.a({routes:_});i.a.use(s.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:w,render:function(t){return t(b,{props:{endpoint:"http://code.eduweb.pl/kurs-vue/images/?wait=1"}})}})},byor:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5e3d53579fd351d73c60.js.map