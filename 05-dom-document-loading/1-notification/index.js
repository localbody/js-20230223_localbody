export default class NotificationMessage {
  static activeNotification = null
  timerID = null

  constructor(message = '', { duration = 2000, type = 'success' } = {}) {
    this.type = type
    this.duration = duration
    this.message = message

    this.render()
    this.initEventListeners()
  }

  getTemplate() {
    return `
    <div class="notification ${this.type}" style="--value:${
      this.duration / 1000
    }s">
      <div class="timer"></div>
      <div class="inner-wrapper">
        <div class="notification-header">Notification</div>
        <div class="notification-body">
          ${this.message}
        </div>
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

  show(parent = document.body) {
    if (NotificationMessage.activeNotification) {
      NotificationMessage.activeNotification.remove()
    }

    parent.append(this.element)

    this.timerID = setTimeout(() => {
      this.remove()
    }, this.duration)

    NotificationMessage.activeNotification = this
  }

  initEventListeners() {
    // NOTE: в данном методе добавляем обработчики событий, если они есть
  }

  remove() {
    clearTimeout(this.timerID)

    if (this.element) {
      this.element.remove()
    }
  }

  destroy() {
    this.remove()
    this.element = null
    NotificationMessage.activeNotification = null
    // NOTE: удаляем обработчики событий, если они есть
  }
}
