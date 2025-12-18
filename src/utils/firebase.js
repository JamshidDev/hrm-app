// utils/firebase.js
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  messagingSenderId: "...",
  appId: "..."
}

const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)

// Token olish
export async function getPushToken() {
  const permission = await Notification.requestPermission()
  if (permission === 'granted') {
    const token = await getToken(messaging, {
      vapidKey: 'YOUR_VAPID_KEY' // Firebase console'dan
    })
    return token
  }
  return null
}

// Notification kelganda
export function onPushMessage(callback) {
  onMessage(messaging, callback)
}
