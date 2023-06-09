import { timeFormatting } from "./data";
export default {
  /* 将平台通知table数据写进state */
  getTableMutation(state ,options) {
    console.log(options);
    state.tableData = options
  },
  /* 将问题列表数据写到state里面 */
  issuesDataMutation(state ,options) {
    state.issuesTableData = options
  },

  /* --------举报管理----------- */
  /* 将举报管理table数据写进state */
  reportDataMutation(state ,options) {
    state.reportData = options
  },
  /* 修改state的reportData里面status */
  changeStatusMutation(state ,options) {
    state.reportData.forEach(item => {
      if (item.id == options.id) {
        item.status = item.status == 0 ? 1:0
        item.dealTime = timeFormatting(new Date())
        item.handling = (options.handling_case == 1 ? '无法判定':'情况属实')
        item.replyContent = options.replyContent
      }
    })
  }
}