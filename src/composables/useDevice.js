import { Device } from '@capacitor/device'
import { Capacitor } from '@capacitor/core'

export async function useDevice () {
  const { identifier } = await Device.getId()
  const isNativeDevice = Capacitor.isNativePlatform()
  const info = await Device.getInfo()

  return {
    deviceId:identifier,
    isNativeDevice,
    model:info.model,
    platform:info.platform,
  }

}
