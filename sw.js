/* 작룡투 서비스 워커: 한 번 열면 오프라인에서도 실행됩니다. 파일을 고치면 VERSION 값을 올리세요. */
const VERSION = 'jakryongtu-v2';
const CORE = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'assets/sprites.json',
  'assets/pieces.png',
  'assets/board.png',
  'assets/tray-blue-h.png',
  'assets/tray-blue-v.png',
  'assets/tray-red-h.png',
  'assets/tray-red-v.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req)
        .then((res) => {
          if (res && (res.ok || res.type === 'opaque')) {
            const copy = res.clone();
            caches.open(VERSION).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => hit || (req.mode === 'navigate' ? caches.match('index.html') : undefined));
      return hit || net;
    })
  );
});
