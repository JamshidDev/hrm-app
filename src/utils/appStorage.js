// utils/storage.js
import { Preferences } from '@capacitor/preferences'
import { Capacitor } from '@capacitor/core'

export const secureStorage = {
  async set(key, value) {
    try {
      if (Capacitor.isNativePlatform()) {
        await Preferences.set({ key, value })
      } else {
        localStorage.setItem(key, value)
      }
    } catch (e) {
      console.error('Storage set error:', e)
    }
  },

  async get(key) {
    try {
      if (Capacitor.isNativePlatform()) {
        const { value } = await Preferences.get({ key })
        return value
      }
      return localStorage.getItem(key)
    } catch (e) {
      console.error('Storage get error:', e)
      return null
    }
  },

  async remove(key) {
    try {
      if (Capacitor.isNativePlatform()) {
        await Preferences.remove({ key })
      } else {
        localStorage.removeItem(key)
      }
    } catch (e) {
      console.error('Storage remove error:', e)
    }
  }
}
