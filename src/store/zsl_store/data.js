// 共用类型    1.近三个月 2.今年内   3.2021年   4.2020年 5.2020年以前
// 1.会员 2.VIP会员 3.商家店铺  4.配送站  5.配送员
// 1.支付中   2.支付成功 3.支付失败
// 订单类型 1.外卖订单   2.到店自取   3.团购订单  4.商家报名活动   5.配送员服装   6.配送餐箱   7.配送员押金
// 配送类型 1.平台转送 2.商家配送 3.无
// 分润状态 1.结算中 2.已入账
// 支付记录数据 
const zhifutableData = [
    {
        jiaoyihao:'13232964103510',
        dingdanleixing:2,
        dingdanhao:'12232964103521',
        leixing:'0',
        name:'芜湖123',
        shouji:'+8613612345679',
        yinfukuan:'₱910.00',
        zhifufangshi:'微信',
        bizhong:'CNY',
        shifukuan:'￥109.98',
        huilv:'1元=8.196298P',
        createtime:'2022-09-10 18:22:40',
        outtime:'2022-09-11 18:22:40',
        state:'1'
    },
    {
        jiaoyihao:'13232964103511',
        dingdanleixing:1,
        dingdanhao:'12232964103521',
        leixing:'1',
        name:'大司马',
        shouji:'+8613612345677',
        yinfukuan:'₱800.00',
        zhifufangshi:'微信',
        bizhong:'CNY',
        shifukuan:'￥109.98',
        huilv:'1元=8.196298P',
        createtime:'2022-09-10 18:22:40',
        outtime:'2022-09-11 18:22:40',
        state:'2'
    },
    {
        jiaoyihao:'13232964103512',
        dingdanleixing:3,
        dingdanhao:'12232964103521',
        leixing:'2',
        name:'仙女兽',
        shouji:'+8613612345676',
        yinfukuan:'₱950.00',
        zhifufangshi:'微信',
        bizhong:'CNY',
        shifukuan:'￥109.98',
        huilv:'1元=8.196298P',
        createtime:'2022-09-10 18:22:40',
        outtime:'2022-09-11 18:22:40',
        state:'3'
    },
    {
        jiaoyihao:'13232964103513',
        dingdanleixing:4,
        dingdanhao:'12232964103521',
        leixing:'3',
        name:'迪迦',
        shouji:'+8613612345675',
        yinfukuan:'₱999.00',
        zhifufangshi:'微信',
        bizhong:'CNY',
        shifukuan:'￥109.98',
        huilv:'1元=8.196298P',
        createtime:'2022-09-10 18:22:40',
        outtime:'2022-09-11 18:22:40',
        state:'3'
    },
    {
        jiaoyihao:'13232964103514',
        dingdanleixing:5,
        dingdanhao:'12232964103521',
        leixing:'4',
        name:'游乐瓦子',
        shouji:'+8613612345674',
        yinfukuan:'₱510.00',
        zhifufangshi:'微信',
        bizhong:'CNY',
        shifukuan:'￥109.98',
        huilv:'1元=8.196298P',
        createtime:'2022-09-10 18:22:40',
        outtime:'2022-09-11 18:22:40',
        state:'1'
    }
]

// 支付记录详细数据
const zhifuxiangxitableData = [
    {
        jiaoyihao:'13232964103510',
        state:'0',
        leixing:'0',
        name:'芜湖123',
        shouji:'+8613612345679',
        dingdanhao:'12232964103521',
        dingdanleixing:'到店自取',
        dingdanjine:'₱900.00',
        youhuijine:'₱60.00',
        yinfukuan:'₱910.00',
        zhifufangshi:'微信',
        bizhong:'CNY',
        zhifuUUID:'12134343413612345678',
        huilv:'1元=8.196298P',
        shifukuan:'￥109.98',
        createtime:'2022-09-10 18:22:40',
        outtime:'2022-09-11 18:22:40',
    },
    {
        jiaoyihao:'13232964103511',
        dingdanleixing:'外卖订单',
        dingdanhao:'12232964103521',
        leixing:'1',
        name:'大司马',
        shouji:'+8613612345677',
        yinfukuan:'₱800.00',
        zhifufangshi:'微信',
        bizhong:'CNY',
        shifukuan:'￥109.98',
        huilv:'1元=8.196298P',
        createtime:'2022-09-10 18:22:40',
        outtime:'2022-09-11 18:22:40',
        state:'1',
        dingdanjine:'₱920.00',
        youhuijine:'₱60.00',
        zhifuUUID:'12134343413612345677',
    },
    {
        jiaoyihao:'13232964103512',
        dingdanleixing:'团购订单',
        dingdanhao:'12232964103521',
        leixing:'2',
        name:'仙女兽',
        shouji:'+8613612345676',
        yinfukuan:'₱950.00',
        zhifufangshi:'微信',
        bizhong:'CNY',
        shifukuan:'￥109.98',
        huilv:'1元=8.196298P',
        createtime:'2022-09-10 18:22:40',
        outtime:'2022-09-11 18:22:40',
        state:'2',
        dingdanjine:'₱901.00',
        youhuijine:'₱60.00',
        zhifuUUID:'12134343413612345676',
    },
    {
        jiaoyihao:'13232964103513',
        dingdanleixing:'商家报名活动',
        dingdanhao:'12232964103521',
        leixing:'3',
        name:'迪迦',
        shouji:'+8613612345675',
        yinfukuan:'₱999.00',
        zhifufangshi:'微信',
        bizhong:'CNY',
        shifukuan:'￥109.98',
        huilv:'1元=8.196298P',
        createtime:'2022-09-10 18:22:40',
        outtime:'2022-09-11 18:22:40',
        state:'2',
        dingdanjine:'₱600.00',
        youhuijine:'₱60.00',
        zhifuUUID:'12134343413612345675',
    },
    {
        jiaoyihao:'13232964103514',
        dingdanleixing:'配送员服装',
        dingdanhao:'12232964103521',
        leixing:'4',
        name:'游乐瓦子',
        shouji:'+8613612345674',
        yinfukuan:'₱510.00',
        zhifufangshi:'微信',
        bizhong:'CNY',
        shifukuan:'￥109.98',
        huilv:'1元=8.196298P',
        createtime:'2022-09-10 18:22:40',
        outtime:'2022-09-11 18:22:40',
        state:'0',
        dingdanjine:'₱902.00',
        youhuijine:'₱60.00',
        zhifuUUID:'12134343413612345674',
    }
]

const shangjiafenruntableData = [
    {
        dingdanhao:'13232964103510',
        dingdanleixing:'1',
        dianpuname:'张老泉便利店(人民广场店)',
        shouji:'+8613612345678',
        dingdanjine:'₱520.00',
        peisongleixing:'1',
        peisongfei:'₱30.00',
        fuwufei:'₱73.50',
        youhui:'₱5.00/单',
        pingtaibutie:'₱20.00',
        shangjiashouru:'₱441.50',
        chengjiaotime:'2022-09-10 18:22:40',
        ruzhangtime:'2022-09-11 18:22:40',
        state:'1'
    },
    {
        dingdanhao:'13232964103511',
        dingdanleixing:'2',
        dianpuname:'张老泉便利店(人民广场店)',
        shouji:'+8613612345678',
        dingdanjine:'₱520.00',
        peisongleixing:'2',
        peisongfei:'₱30.00',
        fuwufei:'₱73.50',
        youhui:'₱5.00/单',
        pingtaibutie:'₱20.00',
        shangjiashouru:'₱441.50',
        chengjiaotime:'2022-09-10 18:22:40',
        ruzhangtime:'2022-09-11 18:22:40',
        state:'2'
    },
    {
        dingdanhao:'13232964103512',
        dingdanleixing:'3',
        dianpuname:'张老泉便利店(人民广场店)',
        shouji:'+8613612345678',
        dingdanjine:'₱520.00',
        peisongleixing:'3',
        peisongfei:'₱30.00',
        fuwufei:'₱73.50',
        youhui:'₱5.00/单',
        pingtaibutie:'₱20.00',
        shangjiashouru:'₱441.50',
        chengjiaotime:'2022-09-10 18:22:40',
        ruzhangtime:'2022-09-11 18:22:40',
        state:'2'
    },
    {
        dingdanhao:'13232964103513',
        dingdanleixing:'4',
        dianpuname:'张老泉便利店(人民广场店)',
        shouji:'+8613612345678',
        dingdanjine:'₱520.00',
        peisongleixing:'1',
        peisongfei:'₱30.00',
        fuwufei:'₱73.50',
        youhui:'₱5.00/单',
        pingtaibutie:'₱20.00',
        shangjiashouru:'₱441.50',
        chengjiaotime:'2022-09-10 18:22:40',
        ruzhangtime:'2022-09-11 18:22:40',
        state:'1'
    },
    {
        dingdanhao:'13232964103514',
        dingdanleixing:'5',
        dianpuname:'张老泉便利店(人民广场店)',
        shouji:'+8613612345678',
        dingdanjine:'₱520.00',
        peisongleixing:'1',
        peisongfei:'₱30.00',
        fuwufei:'₱73.50',
        youhui:'₱5.00/单',
        pingtaibutie:'₱20.00',
        shangjiashouru:'₱441.50',
        chengjiaotime:'2022-09-10 18:22:40',
        ruzhangtime:'2022-09-11 18:22:40',
        state:'2'
    },
]

const pingtaifenruntableData = [
    {
        dingdanhao:'13232964103520',
        dingdanleixing:'1',
        dingdanjine:'₱520.00',
        peisongleixing:'1',
        peisongfei:'₱30.00',
        bili:'15.00%',
        fuwufei:'₱73.50',
        youhui:'₱5.00/单',
        butie:'₱20.00',
        shouru:'₱48.50',
        chengjiaotime:'2022-09-10 18:22:40',
        ruzhangtime:'2022-09-11 18:22:40',
        state:'1'
    },
    {
        dingdanhao:'13232964103521',
        dingdanleixing:'2',
        dingdanjine:'₱520.00',
        peisongleixing:'1',
        peisongfei:'₱30.00',
        bili:'15.00%',
        fuwufei:'₱73.50',
        youhui:'₱5.00/单',
        butie:'₱20.00',
        shouru:'₱48.50',
        chengjiaotime:'2022-09-10 18:22:40',
        ruzhangtime:'2022-09-11 18:22:40',
        state:'1'
    },
    {
        dingdanhao:'13232964103212',
        dingdanleixing:'3',
        dingdanjine:'₱520.00',
        peisongleixing:'2',
        peisongfei:'₱30.00',
        bili:'15.00%',
        fuwufei:'₱73.50',
        youhui:'₱5.00/单',
        butie:'₱20.00',
        shouru:'₱48.50',
        chengjiaotime:'2022-09-10 18:22:40',
        ruzhangtime:'2022-09-11 18:22:40',
        state:'2'
    },
    {
        dingdanhao:'13232964203513',
        dingdanleixing:'4',
        dingdanjine:'₱520.00',
        peisongleixing:'2',
        peisongfei:'₱30.00',
        bili:'15.00%',
        fuwufei:'₱73.50',
        youhui:'₱5.00/单',
        butie:'₱20.00',
        shouru:'₱48.50',
        chengjiaotime:'2022-09-10 18:22:40',
        ruzhangtime:'2022-09-11 18:22:40',
        state:'2'
    },
    {
        dingdanhao:'13232264103514',
        dingdanleixing:'5',
        dingdanjine:'₱520.00',
        peisongleixing:'3',
        peisongfei:'₱30.00',
        bili:'15.00%',
        fuwufei:'₱73.50',
        youhui:'₱5.00/单',
        butie:'₱20.00',
        shouru:'₱48.50',
        chengjiaotime:'2022-09-10 18:22:40',
        ruzhangtime:'2022-09-11 18:22:40',
        state:'2'
    },
]

export const zhifuData = () =>{
    return new Promise(resole=>{
        resole(zhifutableData)
    })
}

export const zhifuxiangxiData = () =>{
    return new Promise(resole=>{
        resole(zhifuxiangxitableData)
    })
}

export const shangjiafenrunData = () =>{
    return new Promise(resole=>{
        resole(shangjiafenruntableData)
    })
}

export const pingtaifenrunData = () =>{
    return new Promise(resole=>{
        resole(pingtaifenruntableData)
    })
}

