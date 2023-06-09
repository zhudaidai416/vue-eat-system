export default {
    /* // 复杂运算，对 state 进行过滤处理 */
    /* doubleNum(state) { // 调用 getters 可以得到 num 的2倍值，但是 num 的值是没有改变的
        return state.num * 2
    } */

    /* 举报管理 根据id获取对应数据 */
    getDataIdGetters(state) { // 使用getters的getDataIdGetters返回一个函数达到传参的目的
        return (id) => {
            return state.reportData.filter(item => (item.id == id))
        }
    }
    
}