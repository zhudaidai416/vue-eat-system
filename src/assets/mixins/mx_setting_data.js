const setting_data_mixin = {
  data() {
    return {}
  },
  methods: {
    // 渲染分发
    mx_selectTableData() {
      // 更改store中的tabName - 改变tableCpn子组件中的表头内容
      //   this.changeTabName({ tabName: this.tabName })
      // 请求分发
      switch (this.tabName) {
        case 'first':
          this.mx_getTableData('/PlatformDistribution').then((res) => {
            console.log(res.data)
            this.tableData = res.data.records
            // this.changeDataTotal({ dataTotal: res.data.total })
            this.pageStatus.total = res.data.total
          })
          break
        case 'second':
          this.mx_getTableData('/queryBadWeatherList').then((res) => {
            console.log(res.data)
            this.tableData = res.data.records
            // this.changeDataTotal({ dataTotal: res.data.total })
            this.pageStatus.total = res.data.total
          })
          break
        case 'third':
          this.mx_getTableData('/queryHorsemanSalaryList').then((res) => {
            console.log(res)
            this.tableData = res.data.horsemanSalaryList
            // this.changeDataTotal({ dataTotal: parseInt(res.message) })
            this.pageStatus.total = parseInt(res.message)
          })
          break
        default:
          break
      }
    },
    // axios - 数据初始化
    mx_getTableData(api) {
      return this.$axios.get(api, {
        params: {
          currentPage: this.pageStatus.pageNum,
          pageSize: this.pageStatus.pageSize,
        },
      })
    },
  },
}

export default setting_data_mixin
