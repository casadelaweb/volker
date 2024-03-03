import { defineStore } from 'pinia'
import { iPageProduct, iPagePromo } from 'src/api/base.ts'
import axios from 'axios'

export const useStoreMain = defineStore('storeMain', {
  state() {
    return {
      isLoading: true,
      promos: [] as Array<iPagePromo>,
      products: [] as Array<iPageProduct>,
    }
  },
  getters: {
    getPromosQuantity() {
      return this.promos.length
    }
  },
  actions: {
    async getPromos() {
      this.isLoading = true
      let result: Array<iPagePromo> = []
      try {
        const response = await axios.get('/api/promos')
        result = response.data as Array<iPagePromo>
        this.promos = result
      } catch (error) {
        console.log(error)
      }

      this.promos = result
      this.isLoading = false
      //return result
    },
  }
})
