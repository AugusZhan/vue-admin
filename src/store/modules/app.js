const state = {
  sidebar:{
    isOpen:false
  }
}

const mutations = {
  TOGGLE_SIDEBAR_OPEN: state => {
    state.sidebar.isOpen = !state.sidebar.isOpen
  }
}

const actions = {
  toggleSidebarOpen({ commit }) {
    commit('TOGGLE_SIDEBAR_OPEN')
  }
}

export default {
  state,
  mutations,
  actions
}