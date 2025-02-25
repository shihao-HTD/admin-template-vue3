import type { Directive } from 'vue'
import useUserStore from '@/store/user'

const directive: Directive = {
  mounted(el: HTMLElement, binding) {
    const store = useUserStore()
    const values = binding.value

    const { modifiers } = binding

    const not = modifiers.not

    const checkPermission = () => {
      if (typeof values === 'string') {
        const flag = not ? store.roles.includes(values) : !store.roles.includes(values)
        if (flag) {
          el.style.display = 'none'
        } else {
          el.style.display = ''
        }
      }
      if (Array.isArray(values)) {
        const flag = not
          ? values.some((item) => store.roles.includes(item))
          : !values.some((item) => store.roles.includes(item))

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
        console.log('=>(has.ts:48) mutation', mutation)
        if ((mutation.events as any).key === 'roles') {
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
