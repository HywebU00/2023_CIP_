import{p as be,aV as Fe,aW as Se,aX as xe,aY as Ie,e as Pe,g as Ae,h as Re,a3 as $,N as I,a0 as j,O as w,aZ as De,i as _e,a_ as Me,a$ as Te,b0 as Y,b1 as Le,R as Z,l as Ee,A as J,o,F as E,B as Ne,q as L,E as Oe,G as Q,b2 as Ue,b3 as Be,V as ee,b4 as Ke,aj as $e,C as je,b5 as ze,aR as He,b6 as qe,b7 as le,a8 as te}from"./index.4e26191f.js";function Ge(l,h,t){if(h==null)return l;if(Array.isArray(h))throw new Error("Multiple matches is not implemented");return typeof h=="number"&&~h?o(E,null,[o("span",{class:"v-autocomplete__unmask"},[l.substr(0,h)]),o("span",{class:"v-autocomplete__mask"},[l.substr(h,t)]),o("span",{class:"v-autocomplete__unmask"},[l.substr(h+t)])]):l}const We=be({autoSelectFirst:{type:[Boolean,String]},search:String,...Fe({filterKeys:["title"]}),...Se(),...xe(Ie({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...Pe({transition:!1})},"VAutocomplete"),Ye=Ae()({name:"VAutocomplete",props:We(),emits:{"update:focused":l=>!0,"update:search":l=>!0,"update:modelValue":l=>!0,"update:menu":l=>!0},setup(l,h){let{slots:t}=h;const{t:ae}=Re(),f=$(),V=I(!1),y=I(!0),P=I(!1),z=$(),N=j(l,"menu"),d=w({get:()=>N.value,set:e=>{var a;N.value&&!e&&((a=z.value)==null?void 0:a.\u03A8openChildren)||(N.value=e)}}),i=I(-1),ue=w(()=>{var e;return(e=f.value)==null?void 0:e.color}),{items:A,transformIn:ne,transformOut:oe}=De(l),{textColorClasses:ie,textColorStyles:se}=_e(ue),v=j(l,"search",""),m=j(l,"modelValue",[],e=>ne(e===null?[null]:qe(e)),e=>{var u;const a=oe(e);return l.multiple?a:(u=a[0])!=null?u:null}),F=Me(),{filteredItems:R,getMatches:re}=Te(l,A,()=>y.value?"":v.value),g=w(()=>m.value.map(e=>A.value.find(a=>{const u=Y(a.raw,l.itemValue),p=Y(e.raw,l.itemValue);return u===void 0||p===void 0?!1:l.returnObject?l.valueComparator(u,p):l.valueComparator(a.value,e.value)})||e)),k=w(()=>l.hideSelected?R.value.filter(e=>!g.value.some(a=>a.value===e.value)):R.value),O=w(()=>g.value.map(e=>e.props.value)),H=w(()=>g.value[i.value]),D=w(()=>{var a;return(l.autoSelectFirst===!0||l.autoSelectFirst==="exact"&&v.value===((a=k.value[0])==null?void 0:a.title))&&k.value.length>0&&!y.value&&!P.value}),U=w(()=>l.hideNoData&&!A.value.length||l.readonly||(F==null?void 0:F.isReadonly.value)),B=$(),{onListScroll:ce,onListKeydown:ve}=Le(B,f);function de(e){l.openOnClear&&(d.value=!0),v.value=""}function fe(){U.value||(d.value=!0)}function me(e){U.value||(V.value&&(e.preventDefault(),e.stopPropagation()),d.value=!d.value)}function pe(e){var p,n,s;if(l.readonly||(F==null?void 0:F.isReadonly.value))return;const a=f.value.selectionStart,u=O.value.length;if((i.value>-1||["Enter","ArrowDown","ArrowUp"].includes(e.key))&&e.preventDefault(),["Enter","ArrowDown"].includes(e.key)&&(d.value=!0),["Escape"].includes(e.key)&&(d.value=!1),D.value&&["Enter","Tab"].includes(e.key)&&b(R.value[0]),e.key==="ArrowDown"&&D.value&&((p=B.value)==null||p.focus("next")),!!l.multiple){if(["Backspace","Delete"].includes(e.key)){if(i.value<0){e.key==="Backspace"&&!v.value&&(i.value=u-1);return}const r=i.value;H.value&&b(H.value),i.value=r>=u-1?u-2:r}if(e.key==="ArrowLeft"){if(i.value<0&&a>0)return;const r=i.value>-1?i.value-1:u-1;g.value[r]?i.value=r:(i.value=-1,f.value.setSelectionRange((n=v.value)==null?void 0:n.length,(s=v.value)==null?void 0:s.length))}if(e.key==="ArrowRight"){if(i.value<0)return;const r=i.value+1;g.value[r]?i.value=r:(i.value=-1,f.value.setSelectionRange(0,0))}}}function he(e){v.value=e.target.value}function ge(e){if(le(f.value,":autofill")||le(f.value,":-webkit-autofill")){const a=A.value.find(u=>u.title===e.target.value);a&&b(a)}}function Ve(){var e;V.value&&(y.value=!0,(e=f.value)==null||e.focus())}function ye(e){V.value=!0,setTimeout(()=>{P.value=!0})}function Ce(e){P.value=!1}function we(e){(e==null||e===""&&!l.multiple)&&(m.value=[])}const S=I(!1);function b(e){if(l.multiple){const a=O.value.findIndex(u=>l.valueComparator(u,e.value));if(a===-1)m.value=[...m.value,e];else{const u=[...m.value];u.splice(a,1),m.value=u}}else m.value=[e],S.value=!0,v.value=e.title,d.value=!1,y.value=!0,te(()=>S.value=!1)}return Z(V,(e,a)=>{var u,p;e!==a&&(e?(S.value=!0,v.value=l.multiple?"":String((p=(u=g.value.at(-1))==null?void 0:u.props.title)!=null?p:""),y.value=!0,te(()=>S.value=!1)):(!l.multiple&&!v.value?m.value=[]:D.value&&!P.value&&!g.value.some(n=>{let{value:s}=n;return s===k.value[0].value})&&b(k.value[0]),d.value=!1,v.value="",i.value=-1))}),Z(v,e=>{!V.value||S.value||(e&&(d.value=!0),y.value=!e)}),Ee(()=>{const e=!!(l.chips||t.chip),a=!!(!l.hideNoData||k.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),u=m.value.length>0,[p]=J.filterProps(l);return o(J,L({ref:f},p,{modelValue:v.value,"onUpdate:modelValue":we,focused:V.value,"onUpdate:focused":n=>V.value=n,validationValue:m.externalValue,dirty:u,onInput:he,onChange:ge,class:["v-autocomplete",`v-autocomplete--${l.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":d.value,"v-autocomplete--chips":!!l.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":i.value>-1},l.class],style:l.style,readonly:l.readonly,placeholder:u?void 0:l.placeholder,"onClick:clear":de,"onMousedown:control":fe,onKeydown:pe}),{...t,default:()=>o(E,null,[o(Ne,L({ref:z,modelValue:d.value,"onUpdate:modelValue":n=>d.value=n,activator:"parent",contentClass:"v-autocomplete__content",disabled:U.value,eager:l.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:l.transition,onAfterLeave:Ve},l.menuProps),{default:()=>{var n;return[a&&o(Oe,{ref:B,selected:O.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:s=>s.preventDefault(),onKeydown:ve,onFocusin:ye,onFocusout:Ce,onScrollPassive:ce,tabindex:"-1",color:(n=l.itemColor)!=null?n:l.color},{default:()=>{var s,r,C,x;return[(s=t["prepend-item"])==null?void 0:s.call(t),!k.value.length&&!l.hideNoData&&((C=(r=t["no-data"])==null?void 0:r.call(t))!=null?C:o(Q,{title:ae(l.noDataText)},null)),o(Ue,{renderless:!0,items:k.value},{default:_=>{var G,W;let{item:c,index:K,itemRef:ke}=_;const q=L(c.props,{ref:ke,key:K,active:D.value&&K===0?!0:void 0,onClick:()=>b(c)});return(W=(G=t.item)==null?void 0:G.call(t,{item:c,index:K,props:q}))!=null?W:o(Q,q,{prepend:M=>{let{isSelected:T}=M;return o(E,null,[l.multiple&&!l.hideSelected?o(Be,{key:c.value,modelValue:T,ripple:!1,tabindex:"-1"},null):void 0,c.props.prependIcon&&o(ee,{icon:c.props.prependIcon},null)])},title:()=>{var M,T,X;return y.value?c.title:Ge(c.title,(M=re(c))==null?void 0:M.title,(X=(T=v.value)==null?void 0:T.length)!=null?X:0)}})}}),(x=t["append-item"])==null?void 0:x.call(t)]}})]}}),g.value.map((n,s)=>{var x,_;function r(c){c.stopPropagation(),c.preventDefault(),b(n)}const C={"onClick:close":r,onMousedown(c){c.preventDefault(),c.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return o("div",{key:n.value,class:["v-autocomplete__selection",s===i.value&&["v-autocomplete__selection--selected",ie.value]],style:s===i.value?se.value:{}},[e?t.chip?o($e,{key:"chip-defaults",defaults:{VChip:{closable:l.closableChips,size:"small",text:n.title}}},{default:()=>{var c;return[(c=t.chip)==null?void 0:c.call(t,{item:n,index:s,props:C})]}}):o(Ke,L({key:"chip",closable:l.closableChips,size:"small",text:n.title},C),null):(_=(x=t.selection)==null?void 0:x.call(t,{item:n,index:s}))!=null?_:o("span",{class:"v-autocomplete__selection-text"},[n.title,l.multiple&&s<g.value.length-1&&o("span",{class:"v-autocomplete__selection-comma"},[je(",")])])])})]),"append-inner":function(){var C;for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return o(E,null,[(C=t["append-inner"])==null?void 0:C.call(t,...s),l.menuIcon?o(ee,{class:"v-autocomplete__menu-icon",icon:l.menuIcon,onMousedown:me,onClick:ze},null):void 0])}})}),He({isFocused:V,isPristine:y,menu:d,search:v,filteredItems:R,select:b},f)}});export{Ye as V};
