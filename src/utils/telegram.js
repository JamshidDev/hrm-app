import { initMiniApp, initViewport } from '@telegram-apps/sdk'

export const initTelegramApp = () => {
  try {
    const [miniApp] = initMiniApp()
    const [viewport] = initViewport()

    // Expand to full height
    viewport.expand()

    return {
      miniApp,
      viewport,
      user: miniApp.initDataRaw?.user || null,
      platform: miniApp.platform
    }
  } catch (error) {
    console.error('Telegram WebApp init failed:', error)
    return null
  }
}
