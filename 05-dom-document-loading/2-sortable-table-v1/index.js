export default class SortableTable {
  constructor(headerConfig = [], data = []) {
    this.headerConfig = headerConfig
    this.data = data

    this.render()
    this.initEventListeners()
  }

  getTemplate() {
    return `
      <div data-element="header" class="sortable-table__header sortable-table__row">
        <div class="sortable-table__cell" data-id="images" data-sortable="false" data-order="asc">
          <span>Image</span>
        </div>
        <div class="sortable-table__cell" data-id="title" data-sortable="true" data-order="asc">
          <span>Name</span>
          <span data-element="arrow" class="sortable-table__sort-arrow">
            <span class="sort-arrow"></span>
          </span>
        </div>
        <div class="sortable-table__cell" data-id="quantity" data-sortable="true" data-order="asc">
          <span>Quantity</span>
        </div>
        <div class="sortable-table__cell" data-id="price" data-sortable="true" data-order="asc">
          <span>Price</span>
        </div>
        <div class="sortable-table__cell" data-id="sales" data-sortable="true" data-order="asc">
          <span>Sales</span>
        </div>
      </div>
    `
  }

  render() {
    const element = document.createElement('div') // (*)

    element.innerHTML = this.getTemplate()

    // NOTE: в этой строке мы избавляемся от обертки-пустышки в виде `div`
    // который мы создали на строке (*)
    this.element = element.firstElementChild
  }

  initEventListeners() {
    // NOTE: в данном методе добавляем обработчики событий, если они есть
  }

  remove() {
    this.element.remove()
  }

  destroy() {
    this.remove()
    // NOTE: удаляем обработчики событий, если они есть
  }
}
