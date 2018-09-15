import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import contacts from './contacts'

Vue.use(Vuex)

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default new Vuex.Store({
  modules: {
    auth, contacts
  },
  state: {
    
  },
  mutations: {
    
  },
  actions: {
    
  },
  getters: {
    
  }
})
