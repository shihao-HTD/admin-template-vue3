export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase()
  })
}

export function forwardEventsUtils(emits: any, arr: string[]) {
  const forwardEvents: Record<string, (...args: any) => void> = {}

  arr.forEach((eventName) => {
    const name = kebabToCamel(eventName)
    forwardEvents[name] = (...args: any[]) => emits(eventName, ...args)
  })
  return forwardEvents
}
