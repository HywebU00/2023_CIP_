import{a4 as E,bo as q,p as W,I as x,W as K,m as O,aj as X,X as j,b as G,bp as U,c as H,d as J,ap as Q,g as Y,a1 as Z,h as aa,N as ea,L as ta,$ as ia,O as la,a7 as A,aI as na,P as b,bq as k,t as g,l as sa,o,B as L,q as P,br as R,a9 as $}from"./index.6fd0f893.js";function ra(){const a=E([]);q(()=>a.value=[]);function V(n,_){a.value[_]=n}return{refs:a,updateRef:V}}const ua=W({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:a=>a.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:a=>a%1===0},totalVisible:[Number,String],firstIcon:{type:x,default:"$first"},prevIcon:{type:x,default:"$prev"},nextIcon:{type:x,default:"$next"},lastIcon:{type:x,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...K(),...O(),...X(),...j(),...G(),...U(),...H({tag:"nav"}),...J(),...Q({variant:"text"})},"VPagination"),va=Y()({name:"VPagination",props:ua(),emits:{"update:modelValue":a=>!0,first:a=>!0,prev:a=>!0,next:a=>!0,last:a=>!0},setup(a,V){let{slots:n,emit:_}=V;const l=Z(a,"modelValue"),{t:f,n:B}=aa(),{isRtl:h}=ea(),{themeClasses:C}=ta(a),{width:w}=ia(),p=la(-1);A(void 0,{scoped:!0});const{resizeRef:F}=na(e=>{if(!e.length)return;const{target:t,contentRect:i}=e[0],u=t.querySelector(".v-pagination__list > *");if(!u)return;const v=i.width,m=u.offsetWidth+parseFloat(getComputedStyle(u).marginRight)*2;p.value=I(v,m)}),s=b(()=>parseInt(a.length,10)),r=b(()=>parseInt(a.start,10)),c=b(()=>a.totalVisible?parseInt(a.totalVisible,10):p.value>=0?p.value:I(w.value,58));function I(e,t){const i=a.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((e-t*i)/t).toFixed(2)))}const D=b(()=>{if(s.value<=0||isNaN(s.value)||s.value>Number.MAX_SAFE_INTEGER)return[];if(c.value<=1)return[l.value];if(s.value<=c.value)return k(s.value,r.value);const e=c.value%2===0,t=e?c.value/2:Math.floor(c.value/2),i=e?t:t+1,u=s.value-t;if(i-l.value>=0)return[...k(Math.max(1,c.value-1),r.value),a.ellipsis,s.value];if(l.value-u>=(e?1:0)){const v=c.value-1,m=s.value-v+r.value;return[r.value,a.ellipsis,...k(v,m)]}else{const v=Math.max(1,c.value-3),m=v===1?l.value:l.value-Math.ceil(v/2)+r.value;return[r.value,a.ellipsis,...k(v,m),a.ellipsis,s.value]}});function y(e,t,i){e.preventDefault(),l.value=t,i&&_(i,t)}const{refs:N,updateRef:M}=ra();A({VPaginationBtn:{color:g(a,"color"),border:g(a,"border"),density:g(a,"density"),size:g(a,"size"),variant:g(a,"variant"),rounded:g(a,"rounded"),elevation:g(a,"elevation")}});const z=b(()=>D.value.map((e,t)=>{const i=u=>M(u,t);if(typeof e=="string")return{isActive:!1,key:`ellipsis-${t}`,page:e,props:{ref:i,ellipsis:!0,icon:!0,disabled:!0}};{const u=e===l.value;return{isActive:u,key:e,page:B(e),props:{ref:i,ellipsis:!1,icon:!0,disabled:!!a.disabled||+a.length<2,color:u?a.activeColor:a.color,ariaCurrent:u,ariaLabel:f(u?a.currentPageAriaLabel:a.pageAriaLabel,e),onClick:v=>y(v,e)}}}})),d=b(()=>{const e=!!a.disabled||l.value<=r.value,t=!!a.disabled||l.value>=r.value+s.value-1;return{first:a.showFirstLastPage?{icon:h.value?a.lastIcon:a.firstIcon,onClick:i=>y(i,r.value,"first"),disabled:e,ariaLabel:f(a.firstAriaLabel),ariaDisabled:e}:void 0,prev:{icon:h.value?a.nextIcon:a.prevIcon,onClick:i=>y(i,l.value-1,"prev"),disabled:e,ariaLabel:f(a.previousAriaLabel),ariaDisabled:e},next:{icon:h.value?a.prevIcon:a.nextIcon,onClick:i=>y(i,l.value+1,"next"),disabled:t,ariaLabel:f(a.nextAriaLabel),ariaDisabled:t},last:a.showFirstLastPage?{icon:h.value?a.firstIcon:a.lastIcon,onClick:i=>y(i,r.value+s.value-1,"last"),disabled:t,ariaLabel:f(a.lastAriaLabel),ariaDisabled:t}:void 0}});function S(){var t;const e=l.value-r.value;(t=N.value[e])==null||t.$el.focus()}function T(e){e.key===R.left&&!a.disabled&&l.value>+a.start?(l.value=l.value-1,$(S)):e.key===R.right&&!a.disabled&&l.value<r.value+s.value-1&&(l.value=l.value+1,$(S))}return sa(()=>o(a.tag,{ref:F,class:["v-pagination",C.value,a.class],style:a.style,role:"navigation","aria-label":f(a.ariaLabel),onKeydown:T,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[a.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[n.first?n.first(d.value.first):o(L,P({_as:"VPaginationBtn"},d.value.first),null)]),o("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[n.prev?n.prev(d.value.prev):o(L,P({_as:"VPaginationBtn"},d.value.prev),null)]),z.value.map((e,t)=>o("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[n.item?n.item(e):o(L,P({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})])),o("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[n.next?n.next(d.value.next):o(L,P({_as:"VPaginationBtn"},d.value.next),null)]),a.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[n.last?n.last(d.value.last):o(L,P({_as:"VPaginationBtn"},d.value.last),null)])])]})),{}}});export{va as V};
