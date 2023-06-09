// import { getDate , getReportDate } from "./data";
import { getReportDate, getIssuesData, searchData ,searchReportDate} from "./data";
import axios from "../../config/axios";
export default {
      
  /* 获取所有table表格数据 */
  getTableAction({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .post("/platformNotice/selectAll")
        .then((res) => {
          /* console.log(res.data); */
          if (res.code == 200) {
            let arr = res.data.filter((item) => item.delStatus != 1);
            commit("getTableMutation", arr);
            resolve(res);
          }
        })
        .catch((err) => {
          console.log("请求错误：", err);
          reject(err);
        });
    });
  },
  /* 条件查询table数据 */
  searchTableAction({ commit }, options) {
    return new Promise((resolve, reject) => {
      axios
        .post("/platformNotice/selectPlatFormNoticeCondition", options)
        .then((res) => {
          if (res.code == 200) {
            let arr = res.data.filter((item) => item.delStatus != 1);
            commit("getTableMutation", arr);
            resolve(res);
          }
        })
        .catch((err) => {
          console.log("请求错误：", err);
          reject(err);
        });
    });
  },
  

  /* ----------举报管理-------- */

  /* 获取举报管理table 数据 */
  reportDataAction({ commit }) {
    return new Promise((resolve, reject) => {
      
      /* 发送axios请求 */
      /* axios
        .get("/reportManagement/selectReportAll")
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            let arr = res.data.filter((item) => item.delStatus != 1);
            commit("reportDataMutation", arr);
            resolve(arr);
          }
        }) */
        getReportDate()
        .then(res => {
          console.log(res);
          commit("reportDataMutation", res);
          resolve(res);
        })
        .catch((err) => {
          console.log("请求错误：", err);
          reject(err);
        });
    });
  },
  /* 条件查询 */
  searchReportAction({commit},options) {
    let data = searchReportDate(options)
    commit("reportDataMutation",data)
  },


  /* ---------问题列表-------- */

  /* 获取问题列表数据 */
  issuesDataAction({ commit }) {
    getIssuesData().then((res) => {
      commit("issuesDataMutation", res);
    });
  },
  /* 条件查询 */
  searchDataAction({commit},options) {
    let data = searchData(options)
    commit("issuesDataMutation",data)
  }
};
