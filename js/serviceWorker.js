const staticDevCache = "tag-printer-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/logo.png",
  "/js/BrowserPrint-Zebra-1.1.250.min.js",
  "/js/PapaParse-5.0.2/papaparse.min.js"

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCache).then(cache => {
      cache.addAll(assets)
    })
  )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  });