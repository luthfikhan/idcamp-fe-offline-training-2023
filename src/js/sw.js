import { precacheAndRoute } from "workbox-precaching";
import { registerRoute, Route } from "workbox-routing";
import { NetworkFirst, StaleWhileRevalidate, CacheFirst } from "workbox-strategies";
import {CacheableResponsePlugin} from 'workbox-cacheable-response';

const apiRoute = new Route(({url}) => {
  return url.origin === 'https://notes-api.idcamp.dicoding.dev';
}, new StaleWhileRevalidate({
  cacheName: 'api-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [200]
    })
  ]
}))

registerRoute(apiRoute);

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("push", (event) => {
  console.log(event.data)
  console.log("Service Worker: Pushed");
  
  const dataJson = event.data.json();
  const notification = {
    title: dataJson.title,
    options: {
      body: dataJson.options.body,
      icon: dataJson.options.icon,
      image: dataJson.options.image,
    },
  };

  event.waitUntil(self.registration.showNotification(notification.title, notification.options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const openDicodingPage = async () => {
    console.log('Notification has been clicked');
    await self.clients.openWindow('https://www.dicoding.com/');
  };

  event.waitUntil(openDicodingPage());
});

