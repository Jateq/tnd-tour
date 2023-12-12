// public/service-worker.js

import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { setCacheNameDetails } from 'workbox-core';
import { CacheableResponsePlugin } from 'workbox-cacheable-response'; // Import CacheableResponsePlugin
import { ExpirationPlugin } from 'workbox-expiration'; // Import ExpirationPlugin

setCacheNameDetails({ prefix: 'tndTour' });

// Precache assets
precacheAndRoute(self.__WB_MANIFEST);

// Cache stays.json
registerRoute(
    ({ request }) => request.destination === 'fetch' && request.url.endsWith('@/mockapi/stays.json'),
    new CacheFirst({
        cacheName: 'json-cache',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxEntries: 10,
                maxAgeSeconds: 60 * 60, // Cache for 1 hour
            }),
        ],
    })
);
