import Taro from '@tarojs/taro'

const log = Taro.getRealtimeLogManager()
const isDev = process.env.NODE_ENV === 'development'

export default {
  info(...args: any[]) {
    if (isDev) {
      return console.info(...args)
    }
    if (!log) {
      return
    }
    log.info(...args)
  },
  warn(...args: any[]) {
    if (isDev) {
      return console.warn(...args)
    }
    if (!log) {
      return
    }
    log.warn(...args)
  },
  error(...args: any[]) {
    if (isDev) {
      return console.error(...args)
    }
    if (!log) {
      return
    }
    log.error(...args)
  },
  setFilterMsg(msg: string) {
    if (!log || !log.setFilterMsg || isDev) {
      return
    }
    log.setFilterMsg(msg)
  },
  addFilterMsg(msg: string) {
    if (!log || !log.addFilterMsg || isDev) {
      return
    }
    log.addFilterMsg(msg)
  },
}
