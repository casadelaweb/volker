import { createStore } from 'vuex'
import { offers } from 'src/store/stores'
import { catalog } from 'src/store/db'

export default createStore({
  state: () => {
    return {
      main: {
        site_url: 'https://volker-group.ru',
        site_name: 'Volker Group - тротуарная плитка premium качества',
        site_tel: ' +7 922 628 7911',
        site_currency: '₽',
      },
      offers: offers,
      theme: 'light',
      catalog: catalog
    }
  },
  getters: {},
  mutations: {},
  actions: {},
})
