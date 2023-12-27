import{aG as I,a5 as M,a9 as S,Q as G,r as c,s as V,x as o,D as f,aJ as l,o as t,z as a,aK as N,A as E,aL as P,aM as r,C as d,w as U,v as z,aN as A,q as T,B as $,E as j,F as W,ad as q,ab as _,G as J,aO as y}from"./index.43172cc1.js";import{a as K}from"./axios.3560a3fb.js";import{m as O,p as Q}from"./storage.da723e7c.js";import{D as R}from"./dataTableComponent.8cd874ab.js";import{c as B}from"./common.1eb19fe3.js";import{V as k,a as H}from"./VContainer.1870c701.js";import{V as F,a as X}from"./VCard.00c59203.js";import{V as x,a as p}from"./VRow.70a9a851.js";import{V as h}from"./VAutocomplete.418863ed.js";import{V as Y,a as Z}from"./VTabs.88525eff.js";import{V as ee,a as g}from"./VWindowItem.43236a60.js";const e=I({pageID:"",pageTitle:{main:"",sub:""},subPageTitle:"",actBtnList:[],actFuncList:{},curTab:null,condition:{},searchForm:{expand:!1,listType:"T",pageSize:10,currentPage:1,sortBy:[]},dataTable:{sortBy:[],loading:!1,"loading-text":"Loading... Please wait",hover:!0,"show-select":!1,"item-selectable":"selectable","item-value":"","select-strategy":"page",headers:[],items:[],selected:[],"items-per-page":10,"items-length":0,page:1}}),te={class:"page"},ae={class:"title"},se=o("div",{class:"d-flex pageLinkBtn"},null,-1),le={class:"pageContent"},oe={class:"functionGrp"},ne={class:"searchGrp",style:{width:"90%"}},ie={class:"searchList"},re={class:"searchMoreContent"},de={class:"d-flex formGrp"},ue=o("label",{class:"formTitle",for:""},"\u5E74\u5EA6 : ",-1),ce=o("span",{class:"tilde"},"~",-1),me={class:"d-flex formGrp"},pe=o("label",{class:"formTitle",for:""},"\u985E\u5225 :",-1),fe={class:"d-flex btnList"},_e=o("span",{class:"material-icons-round"}," expand_less ",-1),he={class:""},ge={class:"btnGroup left"},be=o("h4",null,"v-data-table-server",-1),Me={__name:"Account",setup(ve){const b=O(),L=Q();M(()=>{e.pageID="account-list",e.pageTitle={main:"\u5E33\u865F\u7BA1\u7406",sub:"\u5E33\u865F\u6E05\u55AE"},L.setTopNavPageTiltle(e.pageTitle.main),e.searchForm={fkeyword:"",fstatus:null},e.dataTable.sortBy=[{key:"userID",order:"asc"}],e.dataTable["item-value"]="userID",e.dataTable["show-select"]=!0,e.dataTable.headers=[{title:"\u5E33\u865F",align:"start",key:"userID",sortable:!0},{title:"\u59D3\u540D",align:"start",key:"userName",sortable:!0},{title:"\u90E8\u9580",align:"start",key:"userDept",sortable:!0},{title:"Email",align:"start",key:"userEmail",sortable:!0},{title:"\u72C0\u614B",align:"end",key:"userStatus",sortable:!0},{title:"\u52D5\u4F5C",align:"center",key:"action",sortable:!1}],e.actBtnList.length=0,e.actBtnList.push({name:"\u4FEE\u6539",to:"doModify",atype:"func"}),e.actBtnList.push({name:"\u505C\u7528",to:"doDel",atype:"func"}),e.actBtnList.push({name:"\u522A\u9664",to:"doBan",atype:"func"}),e.actFuncList={doModify:()=>{S.push({name:"account-form",params:{userid:"luelue123"}})},doDel:()=>{alert("delete")},doBan:()=>{alert("doBan")}},w(),console.log("onBeforeMount:"+e.pageID)}),G(()=>{console.log("onMounted:"+e.pageID)});const w=()=>{b.doMask(!0);let u="/account/init.json";v.fetch(u,{}).then(s=>{e.condition.statusList=s.statusList,b.doMask(!1),B.doLog("pageInfo.condition",e.condition)})},D=({page:u,itemsPerPage:s,sortBy:n})=>{e.dataTable.page=u,e.dataTable.sortBy=n,e.dataTable["items-per-page"]=s,e.dataTable.loading=!0,e.searchForm.currentPage=u,e.searchForm.pageSize=s,e.searchForm.sortBy=e.dataTable.sortBy;let i="/account/list.json";v.fetch(i,e.searchForm).then(m=>{e.dataTable.items=m.list,e.dataTable["items-length"]=m.totalItems,e.dataTable.loading=!1,B.doLog("loadItems ",e)})},v={async fetch(u,s){return new Promise(n=>{setTimeout(()=>{K.post("/api"+u,s).then(function(i){n(i.data)}).catch(function(i){console.log(i)})},500)})}},C=u=>{e.actFuncList[u]()};return(u,s)=>(c(),V("div",te,[o("h2",ae,f(l(e).pageTitle),1),se,o("div",le,[o("div",oe,[o("div",ne,[o("div",ie,[t(k,null,{default:a(()=>[t(x,null,{default:a(()=>[t(p,{cols:"4"},{default:a(()=>[t(E,{label:"\u5E33\u865F\u3001\u59D3\u540D\u6216E-mail",variant:"outlined",modelValue:l(e).searchForm.fkeyword,"onUpdate:modelValue":s[0]||(s[0]=n=>l(e).searchForm.fkeyword=n)},null,8,["modelValue"])]),_:1}),t(p,{cols:"4"},{default:a(()=>[t(P,{label:"\u72C0\u614B",variant:"outlined",modelValue:l(e).searchForm.fstatus,"onUpdate:modelValue":s[1]||(s[1]=n=>l(e).searchForm.fstatus=n),items:l(e).condition.statusList,"item-title":"text","item-value":"value"},null,8,["modelValue","items"])]),_:1}),t(p,{cols:"4"},{default:a(()=>[t(r,{elevation:"0"},{default:a(()=>[d("\u67E5\u8A62")]),_:1}),t(r,{class:"searchMoreBtn",elevation:"0",onClick:s[2]||(s[2]=n=>l(e).searchForm.expand=!l(e).searchForm.expand)},{default:a(()=>[d("\u9032\u968E\u641C\u5C0B")]),_:1})]),_:1})]),_:1})]),_:1})]),o("div",re,[t(N,null,{default:a(()=>[U(t(F,{class:""},{default:a(()=>[t(H,null,{default:a(()=>[t(k,null,{default:a(()=>[t(x,null,{default:a(()=>[t(p,{cols:"12",md:"6"},{default:a(()=>[o("div",de,[ue,t(h,{variant:"solo","single-line":"","hide-details":"",density:"compact",items:["1990","1991","1992"]}),ce,t(h,{variant:"solo",density:"compact","single-line":"","hide-details":"",items:["1990","1991","1992"]})]),o("div",me,[pe,t(h,{variant:"solo","single-line":"",density:"compact","hide-details":"",items:["\u4E3B\u7BA1\u6703\u5831","\u4E3B\u7BA1\u6703\u5831","\u4E3B\u7BA1\u6703\u5831"]})])]),_:1})]),_:1})]),_:1})]),_:1}),o("div",fe,[t(r,{elevation:"0"},{default:a(()=>[d("\u67E5\u8A62")]),_:1}),t(r,{class:"searchMoreBtn",elevation:"0"},{default:a(()=>[d("\u9032\u968E\u641C\u5C0B")]),_:1})]),t(r,{class:"closeSearchMoreBtn",elevation:"0",onClick:s[3]||(s[3]=n=>l(e).searchForm.expand=!l(e).searchForm.expand)},{default:a(()=>[_e]),_:1})]),_:1},512),[[z,l(e).searchForm.expand]])]),_:1})])])]),t(F,{class:"scrollContent"},{default:a(()=>[o("div",he,[t(Y,{modelValue:l(e).curTab,"onUpdate:modelValue":s[4]||(s[4]=n=>l(e).curTab=n),color:"light","show-arrows":""},{default:a(()=>[t(Z,{value:"tb1"},{default:a(()=>[d("\u5E33\u865F\u6E05\u55AE")]),_:1})]),_:1},8,["modelValue"]),t(X,null,{default:a(()=>[t(ee,{modelValue:l(e).curTab,"onUpdate:modelValue":s[6]||(s[6]=n=>l(e).curTab=n)},{default:a(()=>[t(g,{value:"tb1"},{default:a(()=>[o("div",ge,[t(r,{elevation:"0"},{default:a(()=>[d("\u65B0\u589E")]),_:1}),t(r,{elevation:"0"},{default:a(()=>[d("\u505C\u7528")]),_:1})]),t(l(A),T(l(e).dataTable,{modelValue:l(e).dataTable.selected,"onUpdate:modelValue":s[5]||(s[5]=n=>l(e).dataTable.selected=n),"onUpdate:options":D}),{"item.action":a(({item:n})=>[t($,{"open-on-hover":""},{activator:a(({props:i})=>[t(r,T({density:"compact",icon:"smi-file-document-edit",size:"small",color:"success"},i),null,16)]),default:a(()=>[t(j,null,{default:a(()=>[(c(!0),V(W,null,q(l(e).actBtnList,(i,m)=>(c(),_(J,{key:m},{default:a(()=>[i.atype=="link"?(c(),_(r,{key:0,to:i.to},{default:a(()=>[d(f(i.name),1)]),_:2},1032,["to"])):y("",!0),i.atype=="func"?(c(),_(r,{key:1,onClick:Ve=>C(i.to)},{default:a(()=>[d(f(i.name),1)]),_:2},1032,["onClick"])):y("",!0)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:1},16,["modelValue"])]),_:1}),t(g,{value:"tb2"},{default:a(()=>[be,t(R)]),_:1}),t(g,{value:"tb3"},{default:a(()=>[d(" Three ")]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),_:1})])]))}};export{Me as default};