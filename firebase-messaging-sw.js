// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyA9JTo5iNHrCxH2caYD2IZrPfYq1oB3L8c",
    authDomain: "webapp-amigo-secreto.firebaseapp.com",
    projectId: "webapp-amigo-secreto",
    storageBucket: "webapp-amigo-secreto.firebasestorage.app",
    messagingSenderId: "193359921823",
    appId: "1:193359921823:web:7804bad616fafc1f4618aa",
});

const messaging = firebase.messaging();

// Funcion to handle fcm notifs
messaging.onBackgroundMessage(function(payload) {
  const notif = payload.data || {};
  self.registration.showNotification(notif.title || 'Notification Amigo Secreto HasSql', {
    body: notif.body || '',
    icon: notif.icon || '/assets/icon.png'
  });
});

// Force new service worker to take control immediately
self.addEventListener("install", (event) => {
  self.skipWaiting(); // activate new SW right away
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Claim control of all open clients (tabs)
      await self.clients.claim();
    })()
  );
});

