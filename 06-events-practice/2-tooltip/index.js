class Tooltip {
  static instance

  element = null

  constructor() {
    if (Tooltip.instance) {
      return Tooltip.instance
    }

    Tooltip.instance = this
  }

  onPointerOver = (event) => {
    const element = event.target.closest('[data-tooltip]')

    if (element) {
      this.render(element.dataset.tooltip)
      document.addEventListener('pointermove', this.onPointerMove)
    }
  }

  onPointerOut = () => {
    this.remove()
    document.removeEventListener('pointermove', this.onPointerMove)
  }

  moveTooltip(event) {
    const shift = 10

    const left = event.clientX + shift
    const top = event.clientY + shift

    console.dir(getComputedStyle(this.element).width)

    this.element.style.left = `${left}px`
    this.element.style.top = `${top}px`
  }

  onPointerMove = (event) => {
    this.moveTooltip(event)
  }

  initEventListeners() {
    document.addEventListener('pointerover', this.onPointerOver)
    document.addEventListener('pointerout', this.onPointerOut)
  }

  initialize() {
    this.initEventListeners()
  }

  render(html) {
    this.element = document.createElement('div')
    this.element.className = 'tooltip'
    this.element.innerHTML = html

    document.body.append(this.element)
  }

  remove() {
    if (this.element) {
      this.element.remove()
    }
  }

  destroy() {
    document.removeEventListener('pointerover', this.onPointerOver)
    document.removeEventListener('pointerout', this.onPointerOut)
    document.removeEventListener('pointermove', this.onPointerMove)

    this.remove()
    this.element = null
  }
}

export default Tooltip
