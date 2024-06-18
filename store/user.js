const crypto = require('crypto');

export const state = () => ({
  firstName: '',
  userName: '',
  phoneNumber: '',
  email: '',
  password: '',
  token: ''
});


export const mutations = {
  setFirstName(state, value) {
    state.firstName = value;
  },
  setUserName(state, value) {
    state.userName = value;
  },
  setPhoneNumber(state, value) {
    state.phoneNumber = value;
  },
  setEmail(state, value) {
    state.email = value;
  },
  setPassword(state, value) {
    const hash = crypto.createHash('sha256');
    hash.update(value + 'SwipeUp');
    state.password = hash.digest('hex');
  },
  setToken(state, value) {
    state.token = value;
  }
};

export const actions = {
  setServerReg({ state }) {

  },
  setServerLogin({ state }) {

  }
};
