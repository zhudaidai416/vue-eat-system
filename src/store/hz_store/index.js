import axios from "../../config/axios"; 
export default {
  namespaced: true,
  state: {
    loadingData:[],  //广告投放页面 初始加载请求数据
    searchData:[],   //广告投放页面 搜索请求数据
    number:'',       
    
  },
  getters: {},
  mutations: {
    loadingData_mutations(state,data){     //广告投放页面 初始加载修改数据方法
      state.loadingData=data
    },
    searchData_mutations(state,data){      //广告投放页面 搜索数据方法
      state.searchData=data
    },
    Data_mutations(state,data){      //意见反馈详情存储number
      state.number=data
    },

  },
  actions: { 
    loadingData_actions(context){     //广告投放页面 初始加载请求
      return axios({
        method:'POST',
        url:'/adPut/selectAdPutAll',
      })
      .then((res) => {
        if (res.status == 200) {
          // console.log(res);
            context.commit('loadingData_mutations',res.data.data
          //   {
          //   // token:res.token,
          //   // username:data.username,
          //   // tableData:res.tableData
          //   data:res.data, 
          // }
          )
          return Promise.resolve()
        }
      })
      .catch((err) => {
        console.log('请求错误',err)
      })
    },
    
    search_Action(context,data){    //广告投放页面 查询请求
      return   axios({
        method:'POST',
        url:'/adPut/selectAdPutByCondition',
        data:data
      })
      .then(res=>{
        if (res.status==200) {
          // console.log(res);
          context.commit('searchData_mutations',res.data.data)
            return  Promise.resolve();
          }
      })
      .catch(err=>{
          console.log('请求错误',err);
      })
    },


  }
}
