export default class ColumnChart {
  constructor({
    data = [],
    label = '',
    link = '',
    value = 0,
    formatHeading = (data) => data,
  } = {}) {
    this.data = data
    this.label = label
    this.link = link
    this.value = formatHeading(value)
    this.render()
  }

  chartHeight = 50
  subElements = {}

  getColumns() {
    const maxValue = Math.max(...this.data)
    const scale = 50 / maxValue

    return this.data
      .map((item) => {
        const percent = ((item / maxValue) * 100).toFixed(0) + '%'
        const value = String(Math.floor(item * scale))
        return `<div style="--value: ${value}" data-tooltip="${percent}"></div>`
      })
      .join('')
  }

  getLink() {
    return this.link
      ? `<a class="column-chart__link" href="${this.link}">View all</a>`
      : ''
  }

  render() {
    const tempWrapper = document.createElement('div')

    tempWrapper.innerHTML = `
        <div
            class="column-chart column-chart_loading"
            style="--chart-height: ${this.chartHeight}"
        >
            <div class="column-chart__title">
                Total ${this.label}
                ${this.getLink()}
            </div>
            <div class="column-chart__container">
                <div data-element="header" class="column-chart__header">
                    ${this.value}
                </div>
                <div data-element="body" class="column-chart__chart">
                    ${this.getColumns()}
                </div>
            </div>
        </div>`

    this.element = tempWrapper.firstElementChild

    if (this.data.length) {
      this.element.classList.remove('column-chart_loading')
    }

    this.subElements = this.getSubElements()
  }

  getSubElements() {
    const result = {}
    const elements = this.element.querySelectorAll('[data-element]')

    for (const subElement of elements) {
      const name = subElement.dataset.element

      result[name] = subElement
    }

    return result
  }

  update(data = []) {
    if (!data.length) {
      this.element.classList.add('column-chart_loading')
    }

    this.data = data

    this.subElements.body.innerHTML = this.getColumns()
  }

  remove() {
    if (this.element) {
      this.element.remove()
    }
  }

  destroy() {
    this.remove()
    this.element = {}
    this.subElements = {}
  }
}
