import type { Directive } from 'vue'

const blinkAnimationStyle = `
@keyframes blink {
  to {
    visibility: hidden
  }
}

.cursor1:after {
  -webkit-animation: blink 1s steps(5, start) infinite;
  animation: blink 1s steps(5, start) infinite;
  content: "_";
  margin-left: .25rem;
  vertical-align: baseline
}
`

function addStylesOnce(css: string, id: string) {
  if (!document.head.querySelector(`#${id}`)) {
    const style = document.createElement('style')
    style.id = id
    style.appendChild(document.createTextNode(css))
    document.head.appendChild(style)
  }
}
const directive: Directive = {
  mounted() {



  }
}

export default directive
