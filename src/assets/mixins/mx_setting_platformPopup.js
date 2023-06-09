const setting_popup_platform = {
  data() {
    return {
      tips: '弹窗请求 - 配送相关设置',
    }
  },
  created() {},
  methods: {
    // 确认弹窗
    mx_popupOpen(data) {
      this.sendRow = data
      let e = window.event || arguments[0]
      switch (e.target.dataset.type) {
        case 'sTurnOn':
          this.mx_popupConfirm('确认启用该配置吗？', this.sTurn)
          break
        case 'sTurnOff':
          this.mx_popupConfirm('确认禁用该配置吗？', this.sTurn)
          break
        case 'wTurnOff':
          this.mx_popupConfirm('确认停用该天气吗？', this.wTurn)
          break
        case 'xTurnOn':
          this.mx_popupConfirm('确认启用该薪资设置吗？', this.xTurn)
          break
        case 'xTurnOff':
          this.mx_popupConfirm('确认禁用该薪资设置吗？', this.xTurn)
          break
        default:
          break
      }
    },
    // 弹窗流程
    async mx_popupConfirm(question, postRequest) {
      this.$confirm(question, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          postRequest().then((res) => {
            console.log(res)
            if (res.code == 200) {
              // 渲染分发
              this.mx_selectTableData()
              // 提示
              this.$message({
                type: 'success',
                message: '操作成功',
              })
            }
          })
        })
        .catch((err) => {
          this.$message({
            type: 'info',
            message: '已取消',
          })
          console.log(err)
        })
    },
    // axios - 配置启用状态修改
    sTurn() {
      let status = this.sendRow.status
      status == 1 ? (status = 0) : (status = 1)
      return this.$axios.get('/stopOrUse', {
        params: {
          platform_distribution_id: this.sendRow.platformDistributionId,
          isFlag: status,
        },
      })
    },
    // axios - 停用天气
    wTurn() {
      console.log(this.sendRow)
      return this.$axios.post('/stopBadWeather', {
        badweatherId: this.sendRow.badweatherId,
        scopeApplication: this.sendRow.scopeApplication,
        badweatherType: this.sendRow.badweatherType,
        status: 3,
      })
    },
    // axios - 薪资设置状态修改
    xTurn() {
      let status = this.sendRow.status
      status == 1 ? (status = 0) : (status = 1)
      return this.$axios.get('/stopOrUseForHorse', {
        params: {
          horseman_salary_id: this.sendRow.horsemanSalaryId,
          flag: status,
        },
      })
    },
  },
}

export default setting_popup_platform
