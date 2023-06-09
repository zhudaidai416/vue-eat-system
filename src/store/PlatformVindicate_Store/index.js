import mutations from './mutations';
import actions from './actions';
import getters from './getters'
export default {
  namespaced: true,
  state: {
   /*  num : 1,
    username: '' || sessionStorage.getItem('username'),
    userId: '' || sessionStorage.getItem('userId'),
    token: '' || sessionStorage.getItem('token'),
    role: JSON.parse(sessionStorage.getItem('role') || '[]'), */

    tableData : [],
    reportData : [],
    issuesTableData: [],
  },
  getters,
  mutations,
  actions,
  modules: {
  }
}