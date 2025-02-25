import type { Directive } from 'vue'
import useUserStore from '@/store/user'

const directive: Directive = {
  mounted(el: Element, binding) {
    const store = useUserStore()
    const values = binding.value

    const { modifiers } = binding

    const not = modifiers.not

    if (typeof values === 'string') {
      const flag = not ? store.roles.includes(values) : !store.roles.includes(values)
      if (flag) {
        el.remove()
      }
    }
    if (Array.isArray(values)) {
      const flag = not
        ? values.some((item) => store.roles.includes(item))
        : !values.some((item) => store.roles.includes(item))

      if (flag) {
        el.remove()
      }
    }
  }
}

export default directive
