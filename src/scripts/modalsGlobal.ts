import Modals from 'src/modules/modals/modals'
import { scrollControllerGlobal } from 'src/scripts/scrollControllerGlobal.ts'

export const modalsGlobal = new Modals({
  hooks: {
    beforeOpen() {
      if (this.parameters.all.length === 0) scrollControllerGlobal.update()
    },
    open() {
      scrollControllerGlobal.lock()
      if (this.parameters.all.length === 0) scrollControllerGlobal.update()
    },
    // beforeClose() {
    //   if (this.parameters.all.length === 0) globalScrollController.update()
    // },
    close() {
      if (this.parameters.all.length === 0) {
        scrollControllerGlobal.unlock()
        scrollControllerGlobal.update()
      }
    },
  },
})
