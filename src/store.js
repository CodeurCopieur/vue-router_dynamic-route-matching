import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userlist : [
      {id: 1, name: 'Messi', role: 'admin'},
      {id: 2, name: 'Fati', role: 'leader'}
    ]
  },
  getters : {
    userlist: state => {
      return state.userlist;
    }, 
    user: state => id => {
      return state.userlist.find(user => user.id === id );
    }
  }
})