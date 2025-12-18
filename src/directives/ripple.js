export const ripple = {
  mounted(el) {
    el.style.position = 'relative'
    el.style.overflow = 'hidden'
    el.style.cursor = 'pointer'

    el.addEventListener('click', (e) => {
      const rect = el.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const rippleEl = document.createElement('span')
      rippleEl.style.position = 'absolute'
      rippleEl.style.width = size + 'px'
      rippleEl.style.height = size + 'px'
      rippleEl.style.left = x - size / 2 + 'px'
      rippleEl.style.top = y - size / 2 + 'px'
      rippleEl.style.background = 'rgba(220,227,244,0.08)'
      rippleEl.style.borderRadius = '50%'
      rippleEl.style.transform = 'scale(0)'
      rippleEl.style.animation = 'ripple-effect 0.6s ease-out'
      rippleEl.style.pointerEvents = 'none'

      el.appendChild(rippleEl)

      setTimeout(() => {
        rippleEl.remove()
      }, 600)
    })
  }
}
