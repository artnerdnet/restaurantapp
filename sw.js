var staticCacheName = 'cache-v1';


this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll(
            '/',
            '/index.html',
            '/restaurant.html',
            '/sw.js',
            '/js/main.js',
            '/js/dbhelper.js',
            '/js/restaurant_info.js',
            '/js/idb.js',
            '/css/styles.css',
            '/css/responsive.css',
            '/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg', '/img/5.jpg', '/img/6.jpg', '/img/7.jpg', '/img/8.jpg', '/img/9.jpg', '/img/10.jpg');
        })
    );
});


this.addEventListener('activate', function(event) {
    var cacheWhitelist = ['v2'];

    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (cacheWhitelist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', function(event) {
event.respondWith(
    caches.match(event.request).then(function(response) {
        if (response) return response;
        return fetch(event.request);
    })
);
console.log('yay 2');
});
