import type { Directive } from 'vue'

const directive: Directive = {
  mounted(el, binding) {
    if (typeof binding.value !== 'function') {
      return
    }

    let timer: NodeJS.Timeout | null = null
    const handleClick = () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 500)
    }
    el.addEventListener('click', handleClick)
    el.__handleClick = handleClick
  },
  beforeUnmount(el) {
    el.removeEventListener('click', el.__handleClick)
  }
}

export default directive
