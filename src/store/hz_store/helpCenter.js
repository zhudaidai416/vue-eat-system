const helpCenter= [{
    number: 110,
    name: '账号问题',
    client: '外卖APP',
    problems:5,
    order:1,
    time:'近三个月',
    status:'正常',
    operation:'删除'
  }, 
  {
   number: 111,
    name: '密码问题',
    client: '商家APP',
    problems:5,
    order:1,
    time:'今年内',
    status:'已禁用',
    operation:'删除'
  }, {
    number: 112,
    name: '网络问题',
    client: '外卖APP',
    problems:5,
    order:1,
    time:'2021年',
    status:'正常',
    operation:'删除'
  }, {
    number: 113,
    name: '网络问题',
    client: '骑手APP',
    problems:5,
    order:1,
    time:'2020年',
    status:'已禁用',
    operation:'删除'
  }, 
  {
    number: 114,
    name: '密码问题',
    client: '商家APP',
    problems:5,
    order:1,
    time:'2022年以前',
    status:'正常',
    operation:'删除'
  }, 
  {
    number: 115,
    name: '网络问题',
    client: '外卖APP',
    problems:5,
    order:1,
    time:'近三个月',
    status:'已禁用',
    operation:'删除'
  },
   {
    number: 116,
    name: '账号问题',
    client: '骑手APP',
    problems:5,
    order:1,
    time:'今年内',
    status:'正常',
    operation:'删除'
  }]

  //模拟请求
  export const getData=()=>{
    return Promise.resolve(helpCenter)
  }