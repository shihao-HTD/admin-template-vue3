import type { Ref } from 'vue'

export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase()
  })
}

export function forwardEventsUtils(emits: any, arr: string[], prefix?: string) {
  const forwardEvents: Record<string, (...args: any) => void> = {}

  arr.forEach((eventName) => {
    const name = kebabToCamel(eventName)
    forwardEvents[name] = (...args: any[]) => emits(prefix + eventName, ...args)
  })
  return forwardEvents
}

export function exposeEventsUtils(ref: Ref<any>, arr: string[]) {
  const exposeMethods: Record<string, Function> = {}

  arr.forEach((exposeName) => {
    // e.g.
    // tableRef.value.clearSelection()
    // obj = { clearSelection: () => tableRef.value.clearSelection()}
    exposeMethods[exposeName] = (...args: any[]) => {
      if (ref.value && typeof ref.value[exposeName] === 'function') {
        return ref.value[exposeName](...args)
      }
    }
  })

  return exposeMethods
}
