if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3e8df8c8"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-a44b2dad.js",revision:null},{url:"assets/_commonjsHelpers-725317a4.js",revision:null},{url:"assets/404-53885029.js",revision:null},{url:"assets/about-5ff76c7d.js",revision:null},{url:"assets/about-e3b0c442.css",revision:null},{url:"assets/audio-92781081.js",revision:null},{url:"assets/audio-d9c9fe9c.css",revision:null},{url:"assets/components-60ac1d3f.js",revision:null},{url:"assets/copy-02f6cc6c.js",revision:null},{url:"assets/debounce_throttle-4684f7c4.js",revision:null},{url:"assets/directives-8f703a9b.js",revision:null},{url:"assets/draggable-85402e9d.css",revision:null},{url:"assets/draggable-945eed9c.js",revision:null},{url:"assets/Editor-4158aece.css",revision:null},{url:"assets/Editor.vue_vue_type_script_setup_true_lang-a11213cd.js",revision:null},{url:"assets/editors-3b9f17d3.js",revision:null},{url:"assets/en-b8114ede.js",revision:null},{url:"assets/en-e051703f.js",revision:null},{url:"assets/ep-icon-list-7fcdf913.js",revision:null},{url:"assets/ep-icon-picker-232709ad.js",revision:null},{url:"assets/ep-icon-picker-268fdfd8.css",revision:null},{url:"assets/flash-32b93c8f.js",revision:null},{url:"assets/form-4767a468.js",revision:null},{url:"assets/high-a0348d62.js",revision:null},{url:"assets/icon-f99d3146.js",revision:null},{url:"assets/IconList.vue_vue_type_script_setup_true_lang-51f5099d.js",revision:null},{url:"assets/index-037a587c.js",revision:null},{url:"assets/index-0497a2e1.css",revision:null},{url:"assets/index-48df6268.js",revision:null},{url:"assets/index-c7955c85.css",revision:null},{url:"assets/index-e7ea683d.js",revision:null},{url:"assets/index-ef8b8a62.js",revision:null},{url:"assets/login-2f5e1b3c.js",revision:null},{url:"assets/long-press-fd8ccf4d.js",revision:null},{url:"assets/notice-4b360c5b.js",revision:null},{url:"assets/notice-message-406e29d1.js",revision:null},{url:"assets/notice-message-70ff09d4.css",revision:null},{url:"assets/players-811a5b6b.js",revision:null},{url:"assets/Popover-8e086f8e.js",revision:null},{url:"assets/Popover.vue_vue_type_script_setup_true_lang-89e1d7b4.js",revision:null},{url:"assets/route-block-83d24a4e.js",revision:null},{url:"assets/scrollText-0a3d7cdf.js",revision:null},{url:"assets/select-15e582f4.js",revision:null},{url:"assets/singe-page-ccff2594.js",revision:null},{url:"assets/table-6d783743.js",revision:null},{url:"assets/VForm.vue_vue_type_script_setup_true_lang-f3e21859.js",revision:null},{url:"assets/video-4cf95a49.js",revision:null},{url:"assets/video-799c8d33.css",revision:null},{url:"assets/VTable.vue_vue_type_script_setup_true_lang-7f81ba3c.js",revision:null},{url:"assets/watermark-a6c96f3a.js",revision:null},{url:"assets/workbox-window.prod.es5-5ffdab76.js",revision:null},{url:"assets/zh-cn-7f7d48de.js",revision:null},{url:"assets/zh-CN-e7372e8f.js",revision:null},{url:"font_4821237_or03y9sxpf.css",revision:"36faee5211b6fc6929c39501748febfb"},{url:"index.html",revision:"793c13798cfa87fff0f387a2871a6256"},{url:"manifest.webmanifest",revision:"68e1b34dfb49a33d70685b32bd3de1a2"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
