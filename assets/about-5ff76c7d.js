import{R as r}from"./index-ef8b8a62.js";import{b as c}from"./route-block-83d24a4e.js";const a=Vue.defineComponent({__name:"NetIcon",props:{url:{default:""},prefix:{default:"iconfont-"},fontFamily:{default:"iconfont"},type:{default:""}},setup(n){const e=n;Vue.onBeforeMount(()=>{if(!document.querySelector(`link[href="${e.url}"]`)&&e.url){const o=document.createElement("link");o.href=e.url,o.rel="stylesheet",document.head.appendChild(o)}});const t=Vue.computed(()=>`${e.fontFamily} ${e.prefix}${e.type}`);return(u,o)=>(Vue.openBlock(),Vue.createElementBlock("i",{class:Vue.normalizeClass(Vue.unref(t))},null,2))}}),l=Vue.defineComponent({__name:"IconfontIcon",props:{url:{default:"/font_4821237_or03y9sxpf.css"},prefix:{default:"iconfont-"},fontFamily:{default:"iconfont"},type:{default:""}},setup(n){const e=n;return(t,u)=>{const o=a;return Vue.openBlock(),Vue.createBlock(o,Vue.normalizeProps(Vue.guardReactiveProps(e)),null,16)}}}),s={class:"about"},f=Vue.defineComponent({__name:"about",setup(n){return(e,t)=>{const u=l;return Vue.openBlock(),Vue.createElementBlock("div",s,[Vue.createVNode(Vue.unref(r),{to:"/"},{default:Vue.withCtx(()=>t[0]||(t[0]=[Vue.createTextVNode("home")])),_:1}),Vue.createVNode(Vue.unref(r),{to:"/about"},{default:Vue.withCtx(()=>t[1]||(t[1]=[Vue.createTextVNode("about")])),_:1}),t[2]||(t[2]=Vue.createElementVNode("h1",null,"This is an about page",-1)),Vue.createVNode(u,{type:"chaiquan"})])}}});typeof c=="function"&&c(f);export{f as default};
