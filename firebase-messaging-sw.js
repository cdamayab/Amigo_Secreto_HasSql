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

messaging.onBackgroundMessage(function(payload) {
  const notif = payload.notification || {};
  self.registration.showNotification(notif.title || 'Notification', {
    body: notif.body || '',
    icon: notif.icon || '/assets/icon.png'
  });
});
