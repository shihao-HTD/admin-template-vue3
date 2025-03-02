import{h as y}from"./index-ef8b8a62.js";const c=Vue.defineComponent({__name:"VFormItem",props:Vue.mergeModels({prop:{},type:{},events:{},attrs:{},span:{},colProps:{},value:{},children:{},schema:{},rules:{},defaultSlot:{},labelSlot:{},errorSlot:{},prefixSlot:{},suffixSlot:{},itemRef:{},childRef:{},label:{},labelWidth:{default:""},labelPosition:{},required:{type:Boolean,default:void 0},error:{},validateStatus:{},for:{},inlineMessage:{default:""},showMessage:{type:Boolean,default:!0},size:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const l=s,r=Vue.useModel(s,"modelValue");return Vue.onBeforeMount(()=>{l.type==="select"&&l.value===""?r.value=void 0:r.value=l.value}),(u,n)=>{const V=Vue.resolveComponent("el-option"),t=Vue.resolveComponent("el-select"),a=Vue.resolveComponent("el-checkbox-group"),o=Vue.resolveComponent("el-radio-group"),p=Vue.resolveComponent("el-form-item");return Vue.openBlock(),Vue.createBlock(p,Vue.mergeProps(l,{ref:e=>(l==null?void 0:l.itemRef)&&l.itemRef(e)}),Vue.createSlots({default:Vue.withCtx(()=>[l!=null&&l.prefixSlot?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(l.prefixSlot),Vue.normalizeProps(Vue.mergeProps({key:0},l)),null,16)):Vue.createCommentVNode("",!0),l!=null&&l.suffixSlot?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(l.suffixSlot),Vue.normalizeProps(Vue.mergeProps({key:1},l)),null,16)):Vue.createCommentVNode("",!0)]),_:2},[l!=null&&l.defaultSlot?{name:"default",fn:Vue.withCtx(()=>[(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(l.defaultSlot),Vue.normalizeProps(Vue.guardReactiveProps(l)),null,16))]),key:"0"}:{name:"default",fn:Vue.withCtx(()=>[u.type==="select"?(Vue.openBlock(),Vue.createBlock(t,Vue.mergeProps({key:0,modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e)},u.attrs,Vue.toHandlers(u.events)),{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(u.children,(e,d)=>(Vue.openBlock(),Vue.createBlock(V,Vue.mergeProps({label:e.label,value:e.value,ref_for:!0},e,{key:d}),null,16,["label","value"]))),128))]),_:1},16,["modelValue"])):u.type==="checkbox"||u.type==="checkbox-group"?(Vue.openBlock(),Vue.createBlock(a,Vue.mergeProps({key:1,modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=e=>r.value=e)},u.attrs),{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(u.children,(e,d)=>(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent("el-"+e.type),Vue.mergeProps({label:e.label,value:e.value,ref_for:!0},e,Vue.toHandlers(u.events),{key:d}),null,16,["label","value"]))),128))]),_:1},16,["modelValue"])):u.type==="radio"||u.type==="radio-group"?(Vue.openBlock(),Vue.createBlock(o,Vue.mergeProps({key:2,modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=e=>r.value=e)},u.attrs,Vue.toHandlers(u.events)),{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(u.children,(e,d)=>(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent("el-"+e.type),{key:d,label:e.value},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},16,["modelValue"])):!["checkbox","radio","select"].includes(u.type)&&typeof u.type<"u"&&u.type!==""?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent("el-"+u.type),Vue.mergeProps({key:3,modelValue:r.value,"onUpdate:modelValue":n[3]||(n[3]=e=>r.value=e)},u.attrs,Vue.toHandlers(u.events),{ref:e=>l.childRef&&l.childRef(e)}),null,16,["modelValue"])):(Vue.openBlock(),Vue.createElementBlock("span",Vue.normalizeProps(Vue.mergeProps({key:4},u.attrs)),Vue.toDisplayString(u.value),17))]),key:"1"},l!=null&&l.labelSlot?{name:"label",fn:Vue.withCtx(e=>[(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(l.labelSlot),Vue.normalizeProps(Vue.guardReactiveProps(e)),null,16))]),key:"2"}:void 0,l.errorSlot?{name:"error",fn:Vue.withCtx(e=>[(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(l.errorSlot),Vue.normalizeProps(Vue.guardReactiveProps(e)),null,16))]),key:"3"}:void 0]),1040)}}}),B=Vue.defineComponent({__name:"VFormLayout",props:Vue.mergeModels({prop:{},type:{},events:{},attrs:{},span:{},colProps:{},value:{},children:{},schema:{},rules:{},defaultSlot:{},labelSlot:{},errorSlot:{},prefixSlot:{},suffixSlot:{},itemRef:{},childRef:{},label:{},labelWidth:{default:""},labelPosition:{},required:{type:Boolean,default:void 0},error:{},validateStatus:{},for:{},inlineMessage:{default:""},showMessage:{type:Boolean,default:!0},size:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const l=s,r=Vue.useModel(s,"modelValue");return(u,n)=>{var a;const V=Vue.resolveComponent("el-col"),t=Vue.resolveComponent("el-form-item");return u.schema&&u.schema.length?(Vue.openBlock(),Vue.createBlock(t,Vue.normalizeProps(Vue.mergeProps({key:0},l)),{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(u.schema,(o,p)=>(Vue.openBlock(),Vue.createBlock(V,Vue.mergeProps({ref_for:!0},o.colProps,{span:o.span,key:p}),{default:Vue.withCtx(()=>[Vue.createVNode(c,Vue.mergeProps({ref_for:!0},o,{modelValue:r.value[o==null?void 0:o.prop],"onUpdate:modelValue":e=>r.value[o==null?void 0:o.prop]=e}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1040,["span"]))),128))]),_:1},16)):u.colProps||u.span?(Vue.openBlock(),Vue.createBlock(V,Vue.mergeProps({key:1,span:((a=u.colProps)==null?void 0:a.span)||u.span},u.colProps),{default:Vue.withCtx(()=>[Vue.createVNode(c,Vue.mergeProps(l,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=o=>r.value=o)}),null,16,["modelValue"])]),_:1},16,["span"])):(Vue.openBlock(),Vue.createBlock(c,Vue.mergeProps({key:2},l,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=o=>r.value=o)}),null,16,["modelValue"]))}}});function h(s){const l=Vue.ref(),r=Vue.ref();Vue.onBeforeMount(()=>{l.value=u(s||[]),r.value=n(s||[])});function u(t,a=0){const o={};let p=0;return t.forEach(e=>{e.prop||(e.prop=`form${a}-${p}`),e.value?o[e.prop]=e.value:e.schema&&e.schema.length?(o[e.prop]=u(e.schema,a+1),p++):o[e.prop]=void 0}),o}function n(t){let a={};return t.forEach(o=>{o.prop&&o.rules&&(a[o.prop]=o.rules),o.schema&&o.schema.length&&(a={...a,...n(o.schema)})}),a}function V(t){let a={};if(typeof t!="object")return a;for(const o in t)typeof t[o]=="object"&&!Array.isArray(t[o])&&Object.keys(t[o]).length?a={...a,...V(t[o])}:o.startsWith("form")||(a[o]=t[o]);return a}return{model:l,rules:r,setForm:u,formValue:Vue.computed(()=>V(l.value))}}const C=Vue.defineComponent({__name:"VForm",props:{schema:{},rowClass:{},rowStyle:{},model:{},rules:{},labelPosition:{default:"right"},requireAsteriskPosition:{default:"left"},labelWidth:{},labelSuffix:{},inline:{type:Boolean,default:!1},inlineMessage:{type:Boolean,default:!1},statusIcon:{type:Boolean,default:!1},showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:{type:Boolean,default:!1},scrollIntoViewOptions:{},size:{},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","validate"],setup(s,{expose:l,emit:r}){const u=s,n=r,V=["validate","validateField","resetFields","clearValidate","scrollToField"],{model:t,rules:a}=h(u.schema||[]),o=Vue.ref(),p=y(o,V);return l({...p}),Vue.watch(t,()=>{n("update:modelValue",t.value)},{deep:!0}),(e,d)=>{const f=Vue.resolveComponent("el-row"),i=Vue.resolveComponent("el-form");return Vue.openBlock(),Vue.createBlock(i,Vue.mergeProps({ref_key:"formRef",ref:o},u,{rules:Vue.unref(a),model:Vue.unref(t)}),{default:Vue.withCtx(()=>[Vue.renderSlot(e.$slots,"default",{},()=>[Vue.createVNode(f,{class:Vue.normalizeClass(e.rowClass),style:Vue.normalizeStyle(e.rowStyle)},{default:Vue.withCtx(()=>[e.schema&&e.schema.length?(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,{key:0},Vue.renderList(e.schema,(m,k)=>(Vue.openBlock(),Vue.createBlock(B,Vue.mergeProps({key:k,ref_for:!0},m,{modelValue:Vue.unref(t)[m.prop],"onUpdate:modelValue":v=>Vue.unref(t)[m.prop]=v}),null,16,["modelValue","onUpdate:modelValue"]))),128)):Vue.createCommentVNode("",!0)]),_:1},8,["class","style"])]),Vue.renderSlot(e.$slots,"actions")]),_:3},16,["rules","model"])}}});export{C as _,h as u};
