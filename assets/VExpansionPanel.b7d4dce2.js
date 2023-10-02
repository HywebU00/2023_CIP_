import{p,bo as z,aX as U,bp as q,w as b,aa as K,bq as H,e as J,c as u,E as m,br as M,bs as E,b3 as C,G as l,K as I,m as f,bb as N,q as T,t as O,bc as X,a0 as Q,af as A,y as h,bj as w,i as _,bl as W,H as B,J as Y,aK as Z,I as S,ay as ee,x as R,aF as ae,V as ne,a5 as le,bi as se,n as te,bk as oe,a7 as ie,z as ce,d as de}from"./index.9ecabb71.js";const ue=p({...z(),...U(q(),["inline"])},"VCheckbox"),Pe=b()({name:"VCheckbox",inheritAttrs:!1,props:ue(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,i){let{attrs:n,slots:a}=i;const s=K(e,"modelValue"),{isFocused:d,focus:c,blur:r}=H(e),P=J(),V=u(()=>e.id||`checkbox-${P}`);return m(()=>{const[y,k]=M(n),[o,t]=E.filterProps(e),[v,Ve]=C.filterProps(e);return l(E,I({class:["v-checkbox",e.class]},y,o,{modelValue:s.value,"onUpdate:modelValue":g=>s.value=g,id:V.value,focused:d.value,style:e.style}),{...a,default:g=>{let{id:D,messagesId:F,isDisabled:G,isReadonly:L}=g;return l(C,I(v,{id:D.value,"aria-describedby":F.value,disabled:G.value,readonly:L.value},k,{modelValue:s.value,"onUpdate:modelValue":j=>s.value=j,onFocus:c,onBlur:r}),a)}})}),{}}});const x=Symbol.for("vuetify:v-expansion-panel"),re=["default","accordion","inset","popout"],ve=p({color:String,variant:{type:String,default:"default",validator:e=>re.includes(e)},readonly:Boolean,...f(),...N(),...T(),...O()},"VExpansionPanels"),ye=b()({name:"VExpansionPanels",props:ve(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:n}=i;X(e,x);const{themeClasses:a}=Q(e),s=u(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return A({VExpansionPanel:{color:h(e,"color")},VExpansionPanelTitle:{readonly:h(e,"readonly")}}),m(()=>l(e.tag,{class:["v-expansion-panels",a.value,s.value,e.class],style:e.style},n)),{}}}),xe=p({...f(),...w()},"VExpansionPanelText"),pe=b()({name:"VExpansionPanelText",props:xe(),setup(e,i){let{slots:n}=i;const a=_(x);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:s,onAfterLeave:d}=W(e,a.isSelected);return m(()=>l(Z,{onAfterLeave:d},{default:()=>{var c;return[B(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&s.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(c=n.default)==null?void 0:c.call(n)])]),[[Y,a.isSelected.value]])]}})),{}}}),$=p({color:String,expandIcon:{type:S,default:"$expand"},collapseIcon:{type:S,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...f()},"VExpansionPanelTitle"),be=b()({name:"VExpansionPanelTitle",directives:{Ripple:ee},props:$(),setup(e,i){let{slots:n}=i;const a=_(x);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:d}=R(e,"color"),c=u(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return m(()=>{var r;return B(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},s.value,e.class],style:[d.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(r=n.default)==null?void 0:r.call(n,c.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(c.value):l(ne,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[ae("ripple"),e.ripple]])}),{}}}),me=p({title:String,text:String,bgColor:String,...f(),...le(),...se(),...w(),...te(),...T(),...$()},"VExpansionPanel"),ke=b()({name:"VExpansionPanel",props:me(),emits:{"group:selected":e=>!0},setup(e,i){let{slots:n}=i;const a=oe(e,x),{backgroundColorClasses:s,backgroundColorStyles:d}=R(e,"bgColor"),{elevationClasses:c}=ie(e),{roundedClasses:r}=ce(e),P=u(()=>(a==null?void 0:a.disabled.value)||e.disabled),V=u(()=>a.group.items.value.reduce((o,t,v)=>(a.group.selected.value.includes(t.id)&&o.push(v),o),[])),y=u(()=>{const o=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&V.value.some(t=>t-o===1)}),k=u(()=>{const o=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&V.value.some(t=>t-o===-1)});return de(x,a),A({VExpansionPanelText:{eager:h(e,"eager")}}),m(()=>{const o=!!(n.text||e.text),t=!!(n.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":y.value,"v-expansion-panel--after-active":k.value,"v-expansion-panel--disabled":P.value},r.value,s.value,e.class],style:[d.value,e.style]},{default:()=>{var v;return[l("div",{class:["v-expansion-panel__shadow",...c.value]},null),t&&l(be,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),o&&l(pe,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(v=n.default)==null?void 0:v.call(n)]}})}),{}}});export{ye as V,ke as a,be as b,pe as c,Pe as d};