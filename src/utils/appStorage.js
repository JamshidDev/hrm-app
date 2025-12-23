
import { Preferences } from '@capacitor/preferences'
import { Capacitor } from '@capacitor/core'

const isNative = Capacitor.isNativePlatform()

export const secureStorage = {
  async set(key, value) {
    const data = typeof value === 'string' ? value : JSON.stringify(value)

    if (isNative) {
      await Preferences.set({ key, value: data })
    } else {
      localStorage.setItem(key, data)
    }
  },

  async get(key, parse = true) {
    let value

    if (isNative) {
      const result = await Preferences.get({ key })
      value = result.value
    } else {
      value = localStorage.getItem(key)
    }

    if (!value) return null

    if (parse) {
      try {
        return JSON.parse(value)
      } catch {
        return value
      }
    }
    return value
  },

  async remove(key) {
    if (isNative) {
      await Preferences.remove({ key })
    } else {
      localStorage.removeItem(key)
    }
  },

  async clear() {
    if (isNative) {
      await Preferences.clear()
    } else {
      localStorage.clear()
    }
  }
}
