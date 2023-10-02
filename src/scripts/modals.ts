export default class Modals {
  static events = {
    open: new Event('modalOpen', {
      bubbles: true,
    }),
    close: new Event('modalClose', {
      bubbles: true,
    }),
    beforeOpen: new Event('modalBeforeOpen', {
      bubbles: true,
    }),
    beforeClose: new Event('modalBeforeClose', {
      bubbles: true,
    }),
  }

  constructor() {
    // обнуляем очередь для текущего экземпляра класса
    this.queue = []

    document.addEventListener('click', (event) => {
      const {target,} = event
      const {body,} = document

      if(target.closest('[data-modal-open]')) {
        const button = target.closest('[data-modal-open]')
        const name = button.getAttribute('data-modal-open')
        const modal = body.querySelector('[data-modal=' + name + ']')

        if(modal) {
          this.openModal(modal)
        }
      }

      if(target.closest('[data-modal-close]')) {
        const button = target.closest('[data-modal-close]')
        const name = button.getAttribute('data-modal-close')
        let modal

        if(name) {
          modal = body.querySelector('[data-modal=' + name + ']')
        } else {
          modal = button.closest('[data-modal]')
        }

        if(modal) {
          this.closeModal(modal)
        }
      }
    })
    window.addEventListener('keyup', (event) => {
      if(event.code === 'Escape') {
        const modal = document.body.querySelector('[data-modal]')
        if(modal) {
          this.closeModal(modal)
        }
      }
    })
  }

  openModal(modal) {
    modal.dispatchEvent(Modals.events.beforeOpen)

    modal.classList.add('active')
    this.queue.push(modal)

    modal.dispatchEvent(Modals.events.open)
  }

  closeModal(modal) {
    modal.dispatchEvent(Modals.events.beforeClose)

    modal.classList.remove('active')

    modal.dispatchEvent(Modals.events.close)
  }
}
