const state = {
  lang:'zh',
  sidebar:{
    isOpen:false
  }
}

const mutations = {
  TOGGLE_SIDEBAR_OPEN: state => {
    state.sidebar.isOpen = !state.sidebar.isOpen
  },
  TOGGLE_LANG:(state,lang) => {
    state.lang = lang
  }
}

const actions = {
  toggleSidebarOpen({ commit }) {
    commit('TOGGLE_SIDEBAR_OPEN')
  },
  toggleLang({commit},lang){
    commit('TOGGLE_LANG',lang)
  }
}

export default {
  state,
  mutations,
  actions
}