
// {commit, state, rootState, dispatch, getters, rootGetters}
const contacts = {
  namespaced: true,
  state: { 
    contacts: [
      {id: 1, name: 'contact1', description: 'contact 1 description',
        more: {info: 'additional info 1'}
      },
      {id: 2, name: 'contact2', description: 'contact 2 description',
        more: {info: 'additional info 2'}
      },
      {id: 3, name: 'contact3', description: 'contact 3 description',
        more: {info: 'additional info 3'}
      },
    ],
    shownContact: 1
  },
  mutations: {
    showInfo(state, id) {
      state.shownContact = state.contacts.find(c => c.id === id).id;
    }
  },  
  actions: {
    showInfo({commit}, {id}) {
      commit('showInfo', id)
    }
  },
  getters: {
    contacts: state => state.contacts,
    shownContact: state => state.contacts.find(c => c.id === state.shownContact)
  }
}

export default contacts;