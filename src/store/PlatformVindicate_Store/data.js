/* 平台通知表数据 */
const tableData = [
    {
        ID : '110',
        inform_type : '系统通知',
        inform_title : '这是一条系统通知的标题，这是一条系统通知的标题',
        client_side : '外卖APP',
        language : '中文',
        issue_time : '2022-08-10 18:20:40',
        create_time : '2022-08-10 18:20:40',
        state : '待发布',
        operation : '...',
    },
    {
        ID : '109',
        inform_type : '系统通知',
        inform_title : '这是一条系统通知的标题，这是一条系统通知的标题',
        client_side : '外卖APP',
        language : '中文',
        issue_time : '2022-08-10 18:20:40',
        create_time : '2022-08-10 18:20:40',
        state : '已发布',
        operation : '...',
    },
    {
        ID : '108',
        inform_type : '系统通知',
        inform_title : '这是一条系统通知的标题，这是一条系统通知的标题',
        client_side : '外卖APP',
        language : '中文',
        issue_time : '2022-08-10 18:20:40',
        create_time : '2022-08-10 18:20:40',
        state : '已停用',
        operation : '...',
    },
    {
        ID : '107',
        inform_type : '系统通知',
        inform_title : '这是一条系统通知的标题，这是一条系统通知的标题',
        client_side : '外卖APP',
        language : '中文',
        issue_time : '2022-08-10 18:20:40',
        create_time : '2022-08-10 18:20:40',
        state : '待发布',
        operation : '...',
    },
    {
        ID : '106',
        inform_type : '系统通知',
        inform_title : '这是一条系统通知的标题，这是一条系统通知的标题',
        client_side : '外卖APP',
        language : '中文',
        issue_time : '2022-08-10 18:20:40',
        create_time : '2022-08-10 18:20:40',
        state : '待发布',
        operation : '...',
    },
    {
        ID : '105',
        inform_type : '系统通知',
        inform_title : '这是一条系统通知的标题，这是一条系统通知的标题',
        client_side : '外卖APP',
        language : '中文',
        issue_time : '2022-08-10 18:20:40',
        create_time : '2022-08-10 18:20:40',
        state : '待发布',
        operation : '...',
    },
    {
        ID : '104',
        inform_type : '系统通知',
        inform_title : '这是一条系统通知的标题，这是一条系统通知的标题',
        client_side : '外卖APP',
        language : '中文',
        issue_time : '2022-08-10 18:20:40',
        create_time : '2022-08-10 18:20:40',
        state : '待发布',
        operation : '...',
    },
    {
        ID : '103',
        inform_type : '系统通知',
        inform_title : '这是一条系统通知的标题，这是一条系统通知的标题',
        client_side : '外卖APP',
        language : '中文',
        issue_time : '2022-08-10 18:20:40',
        create_time : '2022-08-10 18:20:40',
        state : '待发布',
        operation : '...',
    }
]
/* 举报管理页面数据 */
const reportData = [
    {
        id: "10232964187883",
        reportType: "资质问题",
        relatedStore: "辣小龙小龙虾湘菜馆(凤凰广场店)",
        reportContent: "这是一条商家举报，这是一条商家举报.",
        replyContent : '',
        telephone: "+8613612345678",
        reportTime: "2022-06-27 08:00:00",
        dealTime: "",
        status: 1,
        source: "外卖APP",
        ipAddress: "waergbvdwer",
        reportName: "小李",
        ipLocation: "aevrfer",
        dealPeople: "小王",
        handling : ""

    },
    {
        id: "10232964187882",
        reportType: "超范围经营",
        relatedStore: "辣小龙小龙虾湘菜馆(凤凰广场店)",
        reportContent: "这是一条商家举报，这是一条商家举报.",
        replyContent:'对不起,实在抱歉，我们会尽快处理',
        telephone: "+8613612345678",
        reportTime: "2022-07-27 08:00:00",
        dealTime: "2022-07-30 08:00:00",
        status: 0,
        source: "商家APP",
        ipAddress: "waergbvdwer",
        reportName: "小李",
        ipLocation: "aevrfer",
        dealPeople: "小王",
        handling : "无法判定"
    },
    {
        id: "10232964187881",
        reportType: "违规商品",
        relatedStore: "辣小龙小龙虾湘菜馆(凤凰广场店)",
        reportContent: "这是一条商家举报，这是一条商家举报.",
        replyContent:'对不起,实在抱歉，我们会尽快处理',
        telephone: "+8613612345678",
        reportTime: "2022-08-01 08:00:00",
        dealTime: "2022-08-02 08:00:00",
        status: 0,
        source: "骑手APP",
        ipAddress: "waergbvdwer",
        reportName: "小李",
        ipLocation: "aevrfer",
        dealPeople: "小王",
        handling : "情况属实"
    },
    {
        id: "10232964187880",
        reportType: "品牌侵权",
        relatedStore: "辣小龙小龙虾湘菜馆(凤凰广场店)",
        reportContent: "这是一条商家举报，这是一条商家举报.",
        replyContent:'对不起,实在抱歉，我们会尽快处理',
        telephone: "+8613612345678",
        reportTime: "2022-09-01 08:00:00",
        dealTime: "2022-09-02 08:00:00",
        status: 0,
        source: "外卖APP",
        ipAddress: "waergbvdwer",
        reportName: "小李",
        ipLocation: "aevrfer",
        dealPeople: "小王",
        handling : "无法判定"
    },
    {
        id: "10232964187879",
        reportType: "虚假门店",
        relatedStore: "辣小龙小龙虾湘菜馆(凤凰广场店)",
        reportContent: "这是一条商家举报，这是一条商家举报.",
        replyContent:'',
        telephone: "+8613612345678",
        reportTime: "2022-10-01 08:00:00",
        dealTime: "",
        status: 1,
        source: "骑手APP",
        ipAddress: "waergbvdwer",
        reportName: "小李",
        ipLocation: "aevrfer",
        dealPeople: "小王",
        handling : ""
    },
    {
        id: "10232964187878",
        reportType: "虚假宣传",
        relatedStore: "辣小龙小龙虾湘菜馆(凤凰广场店)",
        reportContent: "这是一条商家举报，这是一条商家举报.",
        replyContent:'对不起,实在抱歉，我们会尽快处理',
        telephone: "+8613612345678",
        reportTime: "2022-11-01 08:00:00",
        dealTime: "2022-11-02 08:00:00",
        status: 0,
        source: "外卖APP",
        ipAddress: "waergbvdwer",
        reportName: "小李",
        ipLocation: "aevrfer",
        dealPeople: "小王",
        handling : "情况属实"
    },
    {
        id: "10232964187877",
        reportType: "其他",
        relatedStore: "辣小龙小龙虾湘菜馆(凤凰广场店)",
        reportContent: "这是一条商家举报，这是一条商家举报.",
        replyContent:'对不起,实在抱歉，我们会尽快处理',
        telephone: "+8613612345678",
        reportTime: "2022-12-01 08:00:00",
        dealTime: "2022-12-02 08:00:00",
        status: 0,
        source: "外卖APP",
        ipAddress: "waergbvdwer",
        reportName: "小李",
        ipLocation: "aevrfer",
        dealPeople: "小王",
        handling : "无法判定"
    },
    


]
/* 问题列表数据 */
const issuesTableData = [
    {
    number: 110,
    title: '如何设置登录密码',
    problem: '账号问题',
    click:'外卖APP',
    language:'中文',
    order:1,
    time:'2022-10-10 18:20:40',
    status:'正常',
    operation:'删除'
  }, 
  {
   number: 109,
    title: '如何设置登录密码',
    problem: '账号问题',
    click:'外卖APP',
    language:'English',
    order:1,
    time:'2022-09-9 18:20:40',
    status:'正常',
    operation:'删除'
  }, {
    number: 108,
    title: '如何设置登录密码',
    problem: '账号问题',
    click:'商家APP',
    language:'中文',
    order:1,
    time:'2022-06-8 18:20:40',
    status:'正常',
    operation:'删除'
  }, {
    number: 107,
    title: 'How to set the login password',
    problem: '账号问题',
    click:'外卖APP',
    language:'English',
    order:1,
    time:'2022-03-7 18:20:40',
    status:'正常',
    operation:'删除'
  }, 
  {
   number: 106,
    title: 'How to set the login password',
    problem: '账号问题',
    click:'商家APP',
    language:'中文',
    order:1,
    time:'2022-02-6 18:20:40',
    status:'正常',
    operation:'删除'
  }, 
  {
   number: 105,
    title: 'How to set the login password',
    problem: '账号问题',
    click:'外卖APP',
    language:'English',
    order:1,
    time:'2021-01-5 18:20:40',
    status:'正常',
    operation:'删除'
  },
   {
   number: 104,
    title: '如何设置支付密码',
    problem: '账号问题',
    click:'商家APP',
    language:'中文',
    order:1,
    time:'2021-02-4 18:20:40',
    status:'正常',
    operation:'删除'
  }
]

/* 时间格式化函数 */
export const timeFormatting = (value) => {
    var padDate = (value) => {return value < 10 ? '0' + value : value};
    var date = new Date(value);
    var year = date.getFullYear();
    var month = (date.getMonth() + 1)
    var day = padDate(date.getDate());
    var hour = padDate(date.getHours());
    var min = padDate(date.getMinutes());
    var sec = padDate(date.getSeconds());
    return  `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}
/* 时间比较函数 */
const CompareDate = (num ,time) => {
    let date1 = time.split(' ')[0]
    return (new Date().getTime() - new Date(time).getTime(date1))/(1000*60*60*24) < num
}

/* ----------平台通知-------------- */

/* 获取平台通知表格数据 */
export const getDate =() => {
    return new Promise((resolve) => {
        resolve(tableData)
    })
}
/* 获取平台通知一个用户的具体详情 */
export const getDetailsDate = (id) => {
    let arr = tableData.filter(item => item.ID == id)
    return Promise.resolve(arr[0])
}

/* -----------举报管理---------------- */

/* 获取举报管理页面数据 */
export const getReportDate =() => {
    return new Promise((resolve) => {
        resolve(reportData)
    })
}
/* 条件查询 */
export const searchReportDate =(options) => {
    var new_searchReportDate = reportData.filter(item => {
        let reportType = true; //举报类型
        let relatedStore = true; //相关店铺
        let reportContent = true; //举报类容
        let telephone = true; //联系方式
        let reportTime = true; //举报时间
        let dealTime = true; //处理时间
        let status = true; //处理状态
        let dealPeople = true; //处理人
        

        if(options.reportType) {
            // 将用户输入的字符一个个的拆开，然后将每一个字符与数据中的匹配
            const keys = options.reportType.toUpperCase().replace(/\s+/g,'').split('');
            //  匹配studentName 是否包含 keys 里面的所有字符
            reportType  = keys.every(key => item.reportType.toUpperCase().includes(key))
        }
        if(options.relatedStore) {
            const keys = options.relatedStore.toUpperCase().replace(/\s+/g,'').split('');
            relatedStore  = keys.every(key => item.relatedStore.toUpperCase().includes(key))
        }
        if(options.reportContent) {
            const keys = options.reportContent.toUpperCase().replace(/\s+/g,'').split('');
            reportContent  = keys.every(key => item.reportContent.toUpperCase().includes(key))
        }
        if(options.telephone) {
            telephone = (item.telephone == options.telephone)
        }
        // 时间处理 CompareDate
        if(options.reportTime) {
            reportTime = CompareDate(options.reportTime,item.reportTime)
        }
        if(options.dealTime) {
            dealTime = CompareDate(options.dealTime,item.dealTime)
        }

        if(options.status) {
            status = (item.status == options.status)
        }
        if(options.dealPeople) {
            const keys = options.dealPeople.toUpperCase().replace(/\s+/g,'').split('');
            dealPeople  = keys.every(key => item.dealPeople.toUpperCase().includes(key))
        }
        return reportType && relatedStore && reportContent 
        && telephone && reportTime && status && dealTime && status && dealPeople
    })
    return new_searchReportDate
}

/* -----------问题列表----------------- */

/* 获取问题table数据 */
export const getIssuesData =() => {
    return Promise.resolve(issuesTableData)
}
/* 条件查询 */
export const searchData =(options) => {
    var new_issuesTableData = issuesTableData.filter(item => {
        let problem_title = true; //问题标题
        let problem_classify = true; //问题分类
        let client = true; //客户端
        let language = true; //语言
        let create_time = true; //创建时间
        let status = true; //状态

        if(options.problem_title) {
            // 将用户输入的字符一个个的拆开，然后将每一个字符与数据中的匹配
            const keys = options.problem_title.toUpperCase().replace(/\s+/g,'').split('');
            //  匹配studentName 是否包含 keys 里面的所有字符
            problem_title  = keys.every(key => item.title.toUpperCase().includes(key))
        }
        if(options.problem_classify) {
            problem_classify = (item.problem == options.problem_classify)
        }
        if(options.client) {
            client = (item.click == options.client)
        }
        if(options.language) {
            language = (item.language == options.language)
        }
        if(options.create_time) {
            create_time = CompareDate(options.create_time,item.time)
        }
        if(options.status) {
            status = (item.status == options.status)
        }
        return problem_title && problem_classify && client && language && create_time && status
    })
    return new_issuesTableData
}

