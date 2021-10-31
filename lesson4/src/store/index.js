import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const listPages = {
  page1: [
	{ id: 1, date: '20.03.2020', category: 'Food', value: 169 },
	{ id: 2, date: '21.03.2020', category: 'Navigation', value: 50 },
	{ id: 3, date: '22.03.2020', category: 'Sport', value: 450 }
  ],
  page2: [
	{ id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969 },
	{ id: 5, date: '24.03.2020', category: 'Education', value: 1500 },
	{ id: 6, date: '25.03.2020', category: 'Food', value: 200 }
  ],
  page3: [
	{ id: 7, date: '23.03.2020', category: 'Entertaiment3', value: 969 },
	{ id: 8, date: '24.03.2020', category: 'Education3', value: 1500 },
	{ id: 9, date: '25.03.2020', category: 'Food3', value: 200 }
  ]
}   

export default new Vuex.Store({
  state: {
    paymentsList: [],
    paymentsListIDS: []
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymentsList = payload;
    },
    addPaymentsListData(state, data) {
      const payload = data[0];
      const page = data[1];

      const newUniqObjs = payload.filter(obj => {
        return state.paymentsListIDS.indexOf(obj.id) < 0
      })

      const uniqIDS = newUniqObjs.map(obj => obj.id)
      state.paymentsListIDS.push(...uniqIDS)
      newUniqObjs.forEach((el, index) => { el.ordernum = (page - 1) * 3 + index; })
      state.paymentsList.push(...newUniqObjs)
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList
  },

  actions: {
    fetchData({ commit }, page) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const difrendPage = listPages[`page${page}`];
          resolve(difrendPage)
        }, 2000);
      }).then(res => {
        commit('addPaymentsListData', [res, page]);
      });
    }
  }
})