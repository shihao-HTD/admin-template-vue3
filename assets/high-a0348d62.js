import{_ as p}from"./VTable.vue_vue_type_script_setup_true_lang-7f81ba3c.js";import"./index-ef8b8a62.js";const g=Vue.defineComponent({__name:"high",setup(V){const e=Vue.ref("1"),r=Vue.ref([{prop:"date",label:"Date"},{prop:"name",label:"Name"},{prop:"address",label:"Address"},{prop:"number",label:"Num"}]),l=Vue.ref([{prop:"date",label:"Date"},{prop:"name",label:"Name"},{prop:"address",label:"Address"},{prop:"number",label:"Num"}]),s=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",number:123},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",number:333},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",number:999}],a=Vue.ref([...s]),n=Vue.ref({align:"right",small:!1,background:!1,layout:"total, sizes, prev, pager, next, jumper",pagerCount:7,pageSizes:[10,20,30,40,50,100],total:100});return(i,u)=>{const t=p,o=Vue.resolveComponent("el-tab-pane"),m=Vue.resolveComponent("el-tabs");return Vue.openBlock(),Vue.createBlock(m,{modelValue:Vue.unref(e),"onUpdate:modelValue":u[0]||(u[0]=d=>Vue.isRef(e)?e.value=d:null)},{default:Vue.withCtx(()=>[Vue.createVNode(o,{label:"自适应高度",name:"1"},{default:Vue.withCtx(()=>[Vue.createVNode(t,{data:Vue.unref(a),columns:Vue.unref(l),"highlight-current-row":"",pagination:Vue.unref(n),adaptive:""},null,8,["data","columns","pagination"])]),_:1}),Vue.createVNode(o,{label:"列拖拽",name:"2"},{default:Vue.withCtx(()=>[Vue.createVNode(t,{data:Vue.unref(a),columns:Vue.unref(l),"highlight-current-row":"",pagination:Vue.unref(n),draggableCol:""},null,8,["data","columns","pagination"])]),_:1}),Vue.createVNode(o,{label:"行拖拽",name:"3"},{default:Vue.withCtx(()=>[Vue.createVNode(t,{data:Vue.unref(a),columns:Vue.unref(r),"highlight-current-row":"",pagination:Vue.unref(n),"draggable-row":""},null,8,["data","columns","pagination"])]),_:1})]),_:1},8,["modelValue"])}}});export{g as default};
