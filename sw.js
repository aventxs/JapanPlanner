const CACHE  = “japan26-v4”;
const ASSETS = [
“index.html”,
“style.css”,
“script.js”,
“manifest.json”,
“apple-touch-icon.png”,
“icon-192.svg”,
“icon-512.svg”
];

self.addEventListener(“install”, function(e) {
e.waitUntil(
caches.open(CACHE)
.then(function(c) { return c.addAll(ASSETS); })
.then(function() { return self.skipWaiting(); })
);
});

self.addEventListener(“activate”, function(e) {
e.waitUntil(
caches.keys().then(function(keys) {
return Promise.all(
keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); })
);
}).then(function(){ return self.clients.claim(); })
);
});

self.addEventListener(“fetch”, function(e) {
var url = e.request.url;
if (url.indexOf(“fonts.g”) > -1) {
e.respondWith(
fetch(e.request)
.then(function(r){ caches.open(CACHE).then(function(c){ c.put(e.request,r.clone()); }); return r; })
.catch(function(){ return caches.match(e.request); })
);
} else {
e.respondWith(
caches.match(e.request).then(function(cached) {
return cached || fetch(e.request)
.then(function(r) {
if (r && r.ok) { caches.open(CACHE).then(function(c){ c.put(e.request,r.clone()); }); }
return r;
})
.catch(function(){ return caches.match(“index.html”); });
})
);
}
});