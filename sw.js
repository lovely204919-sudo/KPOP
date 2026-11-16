/* KPOP SOUND DB v2.1 — network-first same-origin PWA cache; no AI/API tokens cached */
const CACHE_NAME='kpop-lead-studio-2026-11-13-v3';
const APP_SHELL=['./','./index.html','./upgrade.css','./lead-hub.js','./midi-studio.js','./market-update.js','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const uri=new URL(req.url);
  if(uri.origin!==self.location.origin)return;
  event.respondWith(fetch(req).then(response=>{
    if(response.ok&&response.type==='basic'){
      const clone=response.clone();
      event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.put(req,clone)));
    }
    return response;
  }).catch(()=>caches.match(req)));
});
