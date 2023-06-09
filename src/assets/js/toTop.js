// 返回顶部
const toTop = function () {
  if (window.pageYOffset) {
    window.pageYOffset = 0
  } else if (document.documentElement.scrollTop) {
    document.documentElement.scrollTop = 0
  } else if (document.body.scrollTop) {
    document.body.scrollTop = 0
  }
}

export default toTop
