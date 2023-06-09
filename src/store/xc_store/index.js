import axios from "../../config/axios"; 
export default {
  namespaced: true,
  state: {
    tableData : [],
    // searchData : []

  },
  getters: {},
  mutations: {
    set_tableData(state,options) {
        state.tableData = options
    },
    // searchTableData(state,options){
    //   state.searchData = options
    // }
  },
  actions: {
    //商品管理
    getTableDataAction(context){
      return axios.get('/product/findAllProductReview',{
        params : {
          currentPage:1,
          pageSize:5
          

        }
      })
      .then(res=>{
          console.log('商品管理',res.data);
          if (res.code==200) {
            context.commit('set_tableData',res.data)//调用mutations
            return  Promise.resolve();
          }
    
      })
      .catch(err=>{
          console.log('请求错误',err);
      })
  
    },
    //商品分类
    getTableDataActionA(context){
        return axios.get("ProductClassify/findProductClassify",{
            params:{
              currentPage:1,
              pageSize:5
            }
        })
        .then(res=>{
          // console.log("商品分类",res.data);

          if(res.code === 200){
            context.commit('set_tableData',res.data)
            return Promise.resolve();
          }
        })
        .catch(err=>{
          console.log('请求错误',err);
        })
    },
    //商品管理搜索
    // shopSearch(context,data){
    //   console.log('输入框的值', data.ID,data.chineseName,data.goodType);
    //   return axios.get("/product/findAllProductReview",{
    //     params:data
    //   })
    //   .then((res)=>{
    //     if(res.code == 200){
    //       console.log('筛选的数据',res.data);
    //       context.commit('searchTableData',res.data)
    //       return Promise.resolve();
    //     }
    //   })
    //   .catch((err)=>{
    //     console.log('请求失败',err);
    //   })

    //   }
    }
  }

