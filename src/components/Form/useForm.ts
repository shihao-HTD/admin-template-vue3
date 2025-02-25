import type { FormSchema } from './type.d.ts'

export function useForm(schema: FormSchema) {
  const model = ref<any>()

  onBeforeMount(() => {
    model.value = setForm(schema || [])
  })
  function setForm(arr: any[], level = 0) {
    const obj = {}
    let i = 0
    arr.forEach((item) => {
      if (!item.prop) {
        item.prop = `form${level}-${i}`
      }
      if (item.value) {
        obj[item.prop] = item.value
      } else if (item.schema && item.schema.length) {
        obj[item.prop] = setForm(item.schema, level + 1)
        i++
      } else {
        obj[item.prop] = undefined
      }
    })
    return obj
  }

  function flatObj(obj) {
    let result = {}
    if (typeof obj !== 'object') return result
    for (const key in obj) {
      if (
        typeof obj[key] === 'object' &&
        !Array.isArray(obj[key]) &&
        Object.keys(obj[key]).length
      ) {
        result = { ...result, ...flatObj(obj[key]) }
      } else {
        if (!key.startsWith('form')) {
          result[key] = obj[key]
        }
      }
    }

    return result
  }

  return {
    model,
    setForm,
    formValue: computed(() => flatObj(model.value))
  }
}
