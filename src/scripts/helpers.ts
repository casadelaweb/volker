/** Dispatches custom event with given name and detail object */
export function throwEvent(element: HTMLElement, name: string, detail?: object) {
  const event: CustomEvent = new CustomEvent(name, {
    bubbles: true,
    detail: detail,
  })
  element.dispatchEvent(event)
}

export function isMediaAboveLaptop(): boolean {
  return window.matchMedia('(min-width: 1280px)').matches
}

type currentMedia = 'mobile' | 'tablet' | 'tabletBg' | 'laptop' | 'desktop'

/** Определяет текущий медиа брейкпоинт  */
export function getCurrentMedia(): currentMedia {
  const { matchMedia, } = window
  let result: currentMedia = 'mobile'

  if (matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {
    result = 'tablet'
  } else if (matchMedia('(min-width: 1024px) and (max-width: 1279px)').matches) {
    result = 'tabletBg'
  } else if (matchMedia('(min-width: 1280px) and (max-width: 1919px)').matches) {
    result = 'laptop'
  } else if (matchMedia('(min-width: 1920px)').matches) {
    result = 'desktop'
  }

  return result
}

/** Определяет есть ли мышь или другое устройство наведения */
export function isDeviceHoverable(): boolean {
  return window.matchMedia('(any-hover: hover)').matches
}

type iOSName = 'Mac OS' | 'iOS' | 'Windows' | 'Android' | 'Linux' | null

export function getOS(): iOSName {
  const userAgent = window.navigator.userAgent
  // @ts-ignore
  const platform = window.navigator?.userAgentData?.platform || window.navigator.platform
  const macosPlatforms = [
    'macOS',
    'Macintosh',
    'MacIntel',
    'MacPPC',
    'Mac68K',
  ]
  const windowsPlatforms = [
    'Win32',
    'Win64',
    'Windows',
    'WinCE',
  ]
  const iosPlatforms = ['iPhone', 'iPad', 'iPod',]
  let os: iOSName = null

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS'
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS'
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows'
  } else if (/Android/.test(userAgent)) {
    os = 'Android'
  } else if (/Linux/.test(platform)) {
    os = 'Linux'
  }

  return os
}

