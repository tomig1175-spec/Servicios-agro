// v25: cache offline deshabilitada temporalmente para evitar versiones mezcladas.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.registration.unregister().then(()=>self.clients.claim())));
