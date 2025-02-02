const actions = {
};
const mutations = {
  remember_dev_account: (state, payload) => {
    state.account.username = payload.username;
    state.account.password = payload.password;
  },
  set_remember_me: (state, payload) => {
    state.rememberMe = payload;
  },
  set_guest_account: (state, payload) => {
    state.guestAccount = payload;
  },
};
const getters = {
  account: state => state.account,
  guestAccount: state => state.guestAccount,
  rememberMe: state => state.rememberMe,
};

export default {
  actions,
  mutations,
  getters,
  state: {
    account: {
      username: '',
      password: '',
    },
    guestAccount: false,
    rememberMe: false,
  },
};
