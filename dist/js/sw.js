self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('your-cache-name').then((cache) => {
        return cache.addAll([
          '/index.html',
          '/dist/css/adminlte.min.css',
          '/plugins/fontawesome-free/css/all.min.css',
          '/plugins/jquery/jquery.min.js',
          '/plugins/bootstrap/js/bootstrap.bundle.min.js',
          '/dist/js/adminlte.min.js',
          '/dist/js/demo.js',
          '/dist/img/GPS.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });