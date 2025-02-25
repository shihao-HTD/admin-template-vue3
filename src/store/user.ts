import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state() {
    return {
      roles: ['user']
    }
  }
})

export default useUserStore
