import type { Directive } from 'vue'
import { ElMessage } from 'element-plus'

const directive: Directive = {
  mounted(el, binding) {
    console.log('mounted binding', binding)
    const { copy } = useClipboard({ source: binding.value })
    el.__copyData = binding.value
    const handleClick = () => {
      copy(el.__copyData)
      const { modifiers } = binding
      !modifiers.mute && ElMessage.success('复制成功')
    }
    el.addEventListener('click', handleClick)
    el.__handleClick = handleClick
  },
  updated(el, binding) {
    el.__copyData = binding.value
  },
  beforeUnmount(el) {
    el.removeEventListener('click', el.__handleClick)
  }
}

export default directive
