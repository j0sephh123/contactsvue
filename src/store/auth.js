
// {commit, state, rootState, dispatch, getters, rootGetters}
const auth = {
  namespaced: true,
  state: { 
    users: [
      {id: 'user1', name: 'sandking'},
      {id: 'user2', name: 'es'},
      {id: 'user3', name: 'lina'},
    ],
    isAuthenticated: true, 
    currentUser: {id: 'user1', name: 'sandking'},
    redirect: false
  },
  mutations: {
    login(state, userArg) {
      const foundUser = state.users.find(user => user.name === userArg)
      if(foundUser !== undefined) {
        state.currentUser = foundUser;
        state.isAuthenticated = true;
        state.redirect = true;
      }
    },
    logout(state) {
      state.currentUser = {};
      state.isAuthenticated = false;
      state.redirect = false;
    },
  },
  actions: {
    login({commit}, {user}) {
      commit('login', user)
    },
    logout({commit}) {
      commit('logout')
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    currentUser: state => state.currentUser
  }
}

export default auth;