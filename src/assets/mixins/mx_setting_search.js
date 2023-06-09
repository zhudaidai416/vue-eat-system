const setting_search = {
  data() {
    return {
      tip: '用于封装的输入框与下拉菜单与父组件传值',
    }
  },
  methods: {
    // axios - 搜索 - 平台配送设置
    mx_searchP() {
      this.pageStatus.isSearch = true
      let obj = {}
      this.searchP.status != -1
        ? (obj = this.searchP)
        : (obj.scopeApplication = this.searchP.scopeApplication)
      this.$axios
        .get('/queryByScopeApplicationOrStatus', {
          params: obj,
        })
        .then((res) => {
          if (res.code == 200) {
            console.log(res)
            this.tableData = res.data
          }
        })
    },
    // axios - 搜索 - 天气设置
    mx_searchW() {
      this.pageStatus.isSearch = true
      this.$axios.post('/queryByConditions', this.searchW).then((res) => {
        if (res.code == 200) {
          console.log(res)
          this.tableData = res.data
        }
      })
    },
    // axios - 搜索 - 薪资设置
    mx_searchX() {
      this.pageStatus.isSearch = true
      let obj = {}
      this.searchX.status != -1
        ? (obj = this.searchX)
        : (obj.scope_application = this.searchX.scope_application)
      this.$axios
        .get('/queryHorseByScopeOrStatus', { params: obj })
        .then((res) => {
          if (res.code == 200) {
            console.log(res)
            this.tableData = res.data
          }
        })
    },
  },
}
export default setting_search
