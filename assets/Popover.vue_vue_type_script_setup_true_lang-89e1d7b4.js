const u=Vue.defineComponent({__name:"Popover",props:{row:{type:Object,default:()=>({})}},setup(e){return(n,r)=>{const t=Vue.resolveComponent("el-tag"),o=Vue.resolveComponent("el-popover");return e.row&&Object.keys(e.row).length?(Vue.openBlock(),Vue.createBlock(o,{key:0,effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",null,"name: "+Vue.toDisplayString(e.row.name),1),Vue.createElementVNode("div",null,"address: "+Vue.toDisplayString(e.row.address),1)]),reference:Vue.withCtx(()=>[Vue.createVNode(t,null,{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(e.row.name),1)]),_:1})]),_:1})):Vue.createCommentVNode("",!0)}}});export{u as _};
