// 此处为module示例，根据需要创建你的store  登录

import axios from '../../config/axios'

export default {
  namespaced : true,
  state: {
    username: '',
    token: ''
  },
  getters: {

  },
  mutations: {
    loginMutation(state) {
      state.username = sessionStorage.getItem('uesrname');
      state.token = sessionStorage.getItem('token');
    },
    removeToken(state) {
      state.token = '';
      state.username = '';
    }
  },
  actions: {
    loginAction(context, data) {
      return new Promise((resolve, reject) => 
        axios({
          method: 'GET',
          url: 'http://1.14.106.61:7101/login',
          params:{
            ...data
          }
        })
        .then(res => {
          console.log('登录请求成功：', res.data)
          console.log(context)
          sessionStorage.setItem("token",'restoken')
          sessionStorage.setItem("username",res.data.phone)
          context.commit('loginMutation') 
          resolve();
        }) 
        .catch(err => {
          console.log('请求错误：', err)
          reject()
        })
      )
    }
  },
  modules: {
    
  }
}


