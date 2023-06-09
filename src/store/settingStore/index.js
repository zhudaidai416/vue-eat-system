import regionP from './regionP'
import regionC from './regionC'
import regionA from './regionA'
import { CreateTree, CreateBranch_city, CreateBranch_area } from './createTree'

export default {
  namespaced: true,
  state: {
    tabName: 'first',
    dataTotal: 0,
    option: [
      {
        name: '全部状态',
        value: '-1',
      },
      {
        name: '正常',
        value: '1',
      },
      {
        name: '已禁用',
        value: '0',
      },
    ],
    regionData: [],
    branchData: [],
  },
  getters: {},
  mutations: {
    // 切换保存在state中tab页状态值
    changeTabName(state, payLoad) {
      state.tabName = payLoad.tabName
    },
    // 变更分页组件total值
    changeDataTotal(state, payLoad) {
      state.dataTotal = payLoad.dataTotal
    },
    // 初始化region树
    getProvince(state) {
      // 获取省数据
      const _p = regionP()
      // 清除tree缓存
      state.regionData.length = 0
      // 生成region树
      _p.forEach((item) => {
        state.regionData.push(
          new CreateTree(item.pid, item.name, '', '', item.hasChildren),
        )
      })
    },
    // 懒加载branch分支
    getCityAndArea(state, payLoad) {
      // 获取城市数据
      const _c = regionC()
      // 获取区县数据
      const _a = regionA()
      // 清除branch缓存内容
      state.branchData.length = 0
      // 得到该省的下辖城市
      _c.forEach((item) => {
        if (item.pid == payLoad.pid) {
          state.branchData.push(new CreateBranch_city(item.cid, '', item.name, []))
          let city = state.branchData[state.branchData.length - 1]
          // 得到该市的下辖区县
          _a.forEach((item) => {
            if (item.cid == city.id) {
              state.branchData[state.branchData.length - 1].area.push(
                new CreateBranch_area(item.name, item.state),
              )
            }
          })
        }
      })
      // console.log('branch生成成功',state.branchData)
    },
  },
  actions: {
    // axios - 模拟
    axios_get({ commit }, payLoad) {
      if (payLoad.api == '/getRegionP') {
        // region树初始化
        return new Promise((resolve) => {
          commit('getProvince')
          resolve()
        })
      } else if (payLoad.api == '/getRegionCA') {
        // branch分支生成
        return new Promise((resolve) => {
          commit('getCityAndArea', payLoad)
          resolve()
        })
      }
    },
  },
}
