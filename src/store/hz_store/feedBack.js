const feedBack= [{
  number: 123,
  OpinionType: '功能体验',
  feedback: '这是一条功能建议，这是一条功能建议，这是一条功能建议，这是一条功能建议，这是一条功能建议，…',
  phone:"13612345678",
  source:"外卖APP",
  FeedbackTime:'近三个月',
  processingTime:'2021年',
  status:'待处理',
  operation:'',
 }, 
  {
  number: 124,
  OpinionType: '配送服务',
  feedback: '这是一条功能建议，这是一条功能建议，这是一条功能建议，这是一条功能建议，这是一条功能建议，…',
  phone:"13600000000",
  source:"商家APP",
  FeedbackTime:'今年内',
  processingTime:'近三个月',
  status:'跟进中',
  operation:'',
 }, 
  {
  number: 125,
  OpinionType: '商家服务',
  feedback: '这是一条功能建议，这是一条功能建议，这是一条功能建议，这是一条功能建议，这是一条功能建议，…',
  phone:"13611111111",
  source:"骑手APP",
  FeedbackTime:'2021年',
  processingTime:'今年内',
  status:'已完结',
  operation:'',
 }, 
  {
  number: 126,
  OpinionType: '功能体验',
  feedback: '这是一条功能建议，这是一条功能建议，这是一条功能建议，这是一条功能建议，这是一条功能建议，…',
  phone:"13622222222",
  source:"外卖APP",
  FeedbackTime:'2021年',
  processingTime:'近三个月',
  status:'已完结',
  operation:'',
 }, 
  {
  number: 127,
  OpinionType: '商家服务',
  feedback: '这是一条功能建议，这是一条功能建议，这是一条功能建议，这是一条功能建议，这是一条功能建议，…',
  phone:"13633333333",
  source:"商家APP",
  FeedbackTime:'近三个月',
  processingTime:'今年内',
  status:'跟进中',
  operation:'',
 }, 
  {
  number: 128,
  OpinionType: '配送服务',
  feedback: '这是一条功能建议，这是一条功能建议，这是一条功能建议，这是一条功能建议，这是一条功能建议，…',
  phone:"13644444444",
  source:"骑手APP",
  FeedbackTime:'今年内',
  processingTime:'2021年',
  status:'待处理',
  operation:'',
 }]

  //模拟请求
  export const getData=()=>{
    return Promise.resolve(feedBack)
  }