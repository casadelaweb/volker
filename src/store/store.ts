import { createStore } from 'vuex'
import { database } from 'src/store/db'

export default createStore({
  state: () => {
    return {
      main: {
        site_url: 'https://volker-group.ru',
        site_name: 'Volker Group - тротуарная плитка premium качества',
        site_tel: ' +7 922 628 7911',
        site_currency: '₽',
      },
      promos: database.promos,
      theme: 'light',
      catalog: database.catalog,
      categories: database.catalog,
      database: database,
    }
  },
  getters: {},
  mutations: {},
  actions: {},
})
