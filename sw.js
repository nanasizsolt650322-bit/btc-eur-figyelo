
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'BTC_ALERT') {
    self.registration.showNotification(
      event.data.title || 'BTC–EUR Figyelő',
      {
        body: event.data.body || 'Bitcoin árfolyamjelzés',
        icon: './icon-192.png',
        tag: 'btc-eur-alert',
        data: { url: './' }
      }
    );
  }
});

self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data.json();
  } catch (e) {}

  event.waitUntil(
    self.registration.showNotification(
      data.title || 'BTC–EUR Figyelő',
      {
        body: data.body || 'Új Bitcoin árfolyamjelzés',
        icon: './icon-192.png',
        data: { url: './' }
      }
    )
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(new URL('./', self.registration.scope).href)
  );
});
