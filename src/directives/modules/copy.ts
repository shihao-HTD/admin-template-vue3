import type { Directive } from 'vue'

const directive: Directive = {
  mounted(el, binding) {
    console.log('mounted el', el)
    console.log('mounted binding', binding)
  }
}

export default directive
