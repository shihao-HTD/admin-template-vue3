import type { Directive } from 'vue'
import useUserStore from '@/store/user'

const directive: Directive = {
  mounted(el: HTMLElement, binding) {
    const store = useUserStore()
    const values = binding.value

    const { modifiers } = binding

    const keys = Object.keys(modifiers)
    const attribute = keys.find((item) => item !== 'not') || 'roles'

    const checkPermission = () => {
      if (typeof values === 'string') {
        const flag = binding.modifiers.not
          ? store[attribute].includes(values)
          : !store[attribute].includes(values)
        if (flag) {
          el.style.display = 'none'
        } else {
          el.style.display = ''
        }
      }
      if (Array.isArray(values)) {
        const flag = binding.modifiers.not
          ? values.some((item) => store[attribute].includes(item))
          : !values.some((item) => store[attribute].includes(item))

        if (flag) {
          el.style.display = 'none'
        } else {
          el.style.display = ''
        }
      }
    }

    checkPermission()

    store.$subscribe(
      (mutation, state) => {
        if ((mutation.events as any).key === attribute) {
          checkPermission()
        }
      },
      {
        deep: true
      }
    )
  }
}

export default directive
