import{g as m,m as p}from"./index-ef8b8a62.js";const N={class:"flex justify-around"},k=Vue.defineComponent({__name:"LoginForm",props:{position:{},title:{default:"pages.login.welcome"},loginItems:{}},emits:["clickIcon","submit"],setup(V,{emit:i}){function u(o){return()=>Vue.createVNode(p,{icon:o},null)}const s=i,l=Vue.ref(),n=Vue.reactive({username:"",password:"",repassword:"",phone:"",email:"",code:"",remember:!1}),d=m((o,e,t)=>{if(e.trim()==="")t(new Error("请输入密码"));else if(e!==n.repassword)t("两次输入密码不一致");else{if(!l.value)return;l.value.validateField("repassword"),t()}},200),c=m((o,e,t)=>{if(e.trim()==="")t(new Error("请输入再次密码"));else if(e!==n.password)t(new Error("两次输入密码不一致"));else{if(!l.value)return;l.value.validateField("password"),t()}},300),f=Vue.ref({username:[{required:!0,message:"用户名未设置"},{min:6,max:16,message:"用户名格式不正确"}],password:[{min:6,max:32,message:"请输入密码"},{asyncValidator:d,trigger:["change","blur"]}],repassword:[{min:6,max:32,message:"请输入密码"},{asyncValidator:c,trigger:["change","blur"]}]});async function g(){l.value&&(await l.value.validate(),s("submit",n))}function w(o){s("clickIcon",o)}return(o,e)=>{const t=Vue.resolveComponent("el-input"),a=Vue.resolveComponent("el-form-item"),_=Vue.resolveComponent("el-checkbox"),x=Vue.resolveComponent("el-link"),v=Vue.resolveComponent("el-row"),C=Vue.resolveComponent("el-button"),b=Vue.resolveComponent("el-form"),h=Vue.resolveComponent("el-divider");return Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[Vue.createVNode(b,{ref_key:"formRef",ref:l,rules:Vue.unref(f),model:Vue.unref(n),class:"min-w-[450px]"},{default:Vue.withCtx(()=>[Vue.createVNode(a,{prop:"username"},{default:Vue.withCtx(()=>[Vue.createVNode(t,{modelValue:Vue.unref(n).username,"onUpdate:modelValue":e[0]||(e[0]=r=>Vue.unref(n).username=r),placeholder:o.$t("pages.login.username"),"prefix-icon":u("ep:user")},null,8,["modelValue","placeholder","prefix-icon"])]),_:1}),Vue.createVNode(a,{prop:"password"},{default:Vue.withCtx(()=>[Vue.createVNode(t,{type:"password",modelValue:Vue.unref(n).password,"onUpdate:modelValue":e[1]||(e[1]=r=>Vue.unref(n).password=r),placeholder:o.$t("pages.login.password"),"prefix-icon":u("ep:lock")},null,8,["modelValue","placeholder","prefix-icon"])]),_:1}),Vue.createVNode(a,{prop:"repassword"},{default:Vue.withCtx(()=>[Vue.createVNode(t,{type:"password",modelValue:Vue.unref(n).repassword,"onUpdate:modelValue":e[2]||(e[2]=r=>Vue.unref(n).repassword=r),placeholder:o.$t("pages.login.password"),"prefix-icon":u("ep:lock")},null,8,["modelValue","placeholder","prefix-icon"])]),_:1}),Vue.createVNode(v,{class:"items-center justify-between"},{default:Vue.withCtx(()=>[Vue.createVNode(a,null,{default:Vue.withCtx(()=>[Vue.createVNode(_,{label:o.$t("pages.login.remember"),modelValue:Vue.unref(n).remember,"onUpdate:modelValue":e[3]||(e[3]=r=>Vue.unref(n).remember=r),name:"type"},null,8,["label","modelValue"])]),_:1}),Vue.createVNode(x,{type:"primary"},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(o.$t("pages.login.sign-up")),1)]),_:1})]),_:1}),Vue.createVNode(a,null,{default:Vue.withCtx(()=>[Vue.createVNode(C,{type:"primary",onClick:g,class:"w-full mt-4"},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(o.$t("pages.login.submit")),1)]),_:1})]),_:1})]),_:1},8,["rules","model"]),Vue.createVNode(h,{direction:"horizontal",class:"mt-10"},{default:Vue.withCtx(()=>e[4]||(e[4]=[Vue.createElementVNode("span",{class:"text-gray-500"}," 其他登录方式 ",-1)])),_:1}),Vue.createElementVNode("div",N,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(o.loginItems,(r,y)=>(Vue.openBlock(),Vue.createBlock(p,{class:"text-2xl text-gray-400 cursor-pointer hover:text-[var(--el-color-primary)]",key:y,icon:r.icon,onClick:w},null,8,["icon"]))),128))])],64)}}}),B=Vue.defineComponent({__name:"login",setup(V){const i=Vue.ref([{icon:"ic:baseline-wechat",url:""},{icon:"cib:tencent-qq",url:""},{icon:"bi:sina-weibo",url:""},{icon:"mdi:github",url:""}]);function u(s){console.log("=>(login.vue:40) form",s)}return(s,l)=>(Vue.openBlock(),Vue.createBlock(k,{onSubmit:u,loginItems:Vue.unref(i)},null,8,["loginItems"]))}});export{B as default};
