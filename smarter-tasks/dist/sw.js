if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const t=s=>n(s,r),u={module:{uri:r},exports:o,require:t};e[r]=Promise.all(i.map((s=>u[s]||t(s)))).then((s=>(l(...s),o)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/actions-BQJ2jxXy.js",revision:null},{url:"assets/actions-CuqEsQch.js",revision:null},{url:"assets/actions-h476_E-u.js",revision:null},{url:"assets/constants-qZa9FZnL.js",revision:null},{url:"assets/context-B7hdv15O.js",revision:null},{url:"assets/dialog-CxU_RTVD.js",revision:null},{url:"assets/index-_E0BoCY8.js",revision:null},{url:"assets/index-BOv9VXL6.css",revision:null},{url:"assets/index-BRnPnvLZ.js",revision:null},{url:"assets/index-BSR_cCbY.js",revision:null},{url:"assets/index-ChTJsbfD.js",revision:null},{url:"assets/index-D3dEqMHo.js",revision:null},{url:"assets/index-DcokY9iO.js",revision:null},{url:"assets/index-DcxroU3c.js",revision:null},{url:"assets/index-za_d9RbU.css",revision:null},{url:"assets/index.esm-CJkZBfoR.js",revision:null},{url:"assets/NewTask-C3gIZ8J4.js",revision:null},{url:"assets/ProjectContainer-C3jRmxCI.js",revision:null},{url:"assets/TaskDetailsContainer-B_yAD-w2.js",revision:null},{url:"index.html",revision:"13fe3bf4ccd785b8f0d6aefff0a59c8d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"049623897d2839a63961ac4b2d5794eb"},{url:"apple-touch-icon.png",revision:"2fa1e48c64f0d485dd2fc8425f9f2a21"},{url:"pwa-192x192.png",revision:"07f567f23f5f9ef9bbd4b996f5eb37ed"},{url:"pwa-512x512.png",revision:"6ce2f304dea8f64eeab2066f5a6b726a"},{url:"manifest.webmanifest",revision:"0841c6aea677d68142a4a3820a237acc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));