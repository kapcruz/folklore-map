if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,r)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=r(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0b7b90cd.71129a5e4ef3148753a4.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/chunks/12.9593a7c3c435a0287773.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/chunks/2dd8024639213757075864c624e37c2da904a9c5.24f12a6f9816d548f1d0.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/chunks/commons.892032f9635273038f1b.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/chunks/framework.3c03fe246d0abf8812e5.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/chunks/main-bf3902f5870578584d26.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/chunks/pages/%5Bslug%5D-10181499f3cb75030eb9.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/chunks/pages/_app-888fec0602c060eae54e.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/chunks/pages/_error-4ea7eb61781778ed8b4c.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/chunks/pages/index-cf30ddae4670e9314788.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/chunks/pages/place/%5Bslug%5D-9bcd05e757a808c59d0e.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/chunks/polyfills-8a95e710217664a42390.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/chunks/webpack-e2f76681d64de01d71cf.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/msezAezFZxm1XsA-pjJUl/_buildManifest.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/_next/static/msezAezFZxm1XsA-pjJUl/_ssgManifest.js",revision:"msezAezFZxm1XsA-pjJUl"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/illustration.svg",revision:"486dc921aca53979e98a687f417416e5"},{url:"/img/logo.svg",revision:"37ec18e21a0e84e78077565dd634314d"},{url:"/manifest.json",revision:"83367d597e53a8fffbfc51baaec09ae9"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
