export const state = () => ({
  token: null,
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state, token) {
    state.token = null;
  },
};

export const actions = {
  nuxtServerInit({dispatch}) {
    console.log('nuxtServerInit');
  },
  async login({commit}) {
    commit('setToken', 'truetoken');
  },
  async logout({commit}) {
    commit('clearToken');
  },
};

export const getters = {
  hasToken: state => !!state.token,
};
