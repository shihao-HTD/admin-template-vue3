import type { Directive } from 'vue'

const directive: Directive = {
  mounted(el, binding) {
    if (typeof binding.value !== 'function') {
      return
    }

    const handleClick = () => {
      if (!el.__disabled) {
        el.__disabled = true
        binding.value()
        setTimeout(() => {
          el.__disabled = false
        }, 500)
      }
    }
    el.addEventListener('click', handleClick)
    el.__handleClick = handleClick
  },
  beforeUnmount(el) {
    el.removeEventListener('click')
  }
}

export default directive
