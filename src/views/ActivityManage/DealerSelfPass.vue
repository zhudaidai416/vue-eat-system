<template>
  <div id="DealerSelfDetail">
    <!-- <div class="title">商家自建活动详情</div> -->
    <div class="DealerSelfDetailBody">
      <div class="PicHead">
        <div class="PicBox">
          <img src="../../assets/logo.png" alt="">
          <p class="tip">审核通过</p>
        </div>
        <div class="PicHeadText">
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">活动ID: </p>
            <span>100000004</span>
          </div>
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">活动类型：</p>
            <span>店铺代金券</span>
          </div>
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">活动状态：</p>
            <span>审核中</span>
          </div>
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">所属店铺：</p>
            <el-link type="primary">辣小龙小龙虾湘菜馆（凤凰广场）</el-link>
          </div>
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">所在地：</p>
            <span>广东 深圳 龙华</span>
          </div>
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">创建时间：</p>
            <span>2022-04-26 14:00:52</span>
          </div>
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">修改时间：</p>
            <span>2022-04-28 14:06:50</span>
          </div>
        </div>
      </div>
      <div class="BasicInfoTitle">
        <p class="BlueStyle">▶</p><p>基本信息</p>
      </div>
      <div class="BasicInfoBox">
        <div class="BasicInfo">
          <p class="BasicInfoDetailTitle">活动信息</p>
          <div class="BasicInfoDetailItem"><p>优惠金额：</p><span>50P</span></div>
          <div class="BasicInfoDetailItem"><p>达标金额：</p><span>500P</span></div>
          <div class="BasicInfoDetailItem"><p>使用条件：</p><span>500P</span></div>
          <div class="BasicInfoDetailItem"><p>发放总数量：</p><span>1000张</span></div>
          <div class="BasicInfoDetailItem"><p>已发放数量：</p><span>105张</span></div>
          <div class="BasicInfoDetailItem"><p>赠送数量：</p><span>每人1张</span></div>
          <div class="BasicInfoDetailItem"><p>用户类型：</p><span>店铺新用户</span></div>
          <div class="BasicInfoDetailItem"><p>活动日期：</p><span>2022-05-01 至 2022-05-31</span></div>
          <div class="BasicInfoDetailItem"><p>有效期：</p><span>7天</span></div>
          <div class="BasicInfoDetailItem"><p>使用方式：</p><span>移动端</span></div>
          <div class="BasicInfoDetailItem"><p>同享活动：</p><span>本活动与店铺满减同享</span></div>
        </div>
        <div class="BasicInfo">
          <p class="BasicInfoDetailTitle">审核意见</p>
          <div class="BasicInfoDetailItem"><p>提交时间：</p><span>2022-03-20 20:16:36</span></div>
          <div class="BasicInfoDetailItem"><p>审核人：</p><span>周审核</span></div>
          <div class="BasicInfoDetailItem"><p>审核结果：</p><span>拒绝</span></div>
          <div class="BasicInfoDetailItem"><p>拒绝原因：</p><span>活动信息不符合规格</span></div>
          <div class="BasicInfoDetailItem"><p>补充说明：</p><span>您的活动信息不符合规格，请修改后重新提交审核。
            The info does not meet the specifications, please revise and resubmit.</span></div>
          <div class="BasicInfoDetailItem"><p>审核时间：</p><span>2022-05-17 11:03:52</span></div>
          <div class="BasicInfoDetailItem"><p>提交时间：</p><span>2022-05-17 11:03:52</span></div>
          <div class="BasicInfoDetailItem"><p>审核人：</p><span>周审核</span></div>
          <div class="BasicInfoDetailItem"><p>审核结果：</p><span>同意</span></div>
          <div class="BasicInfoDetailItem"><p>审核时间：</p><span>2022-05-17 11:03:52</span></div>
        </div>
      </div>
      <div class="BasicInfoTitle">
        <p class="BlueStyle">▶</p><p>数据分析</p>
      </div>
      <div class="DataAnalysis">
        <div class="TabButton">
          <el-button type="text">今日</el-button>
          <el-button type="text">近7日</el-button>
          <el-button type="text">近30日</el-button>
          <el-button type="text">全部</el-button>
        </div>
        <div class="DataAnalysisBox">
          <div class="DataAnalysisItem">
            <p>活动订单数量</p>
            <p class="DataStyle">10</p>
            <p>昨日 <span>-</span></p>
          </div>
          <div class="DataAnalysisItem">
            <p>活动订单量占比</p>
            <p class="DataStyle">15.57%</p>
            <p>昨日 <span>-</span></p>
          </div>
          <div class="DataAnalysisItem">
            <p>活动订单净收入</p>
            <p class="DataStyle">2116.8</p>
            <p>昨日 <span>-</span></p>
          </div>
          <div class="DataAnalysisItem">
            <p>活动订单收入占比</p>
            <p class="DataStyle">9.8%</p>
            <p>昨日 <span>-</span></p>
          </div>
          <div class="DataAnalysisItem">
            <p>活动订单优惠总额</p>
            <p class="DataStyle">500</p>
            <p>昨日 <span>-</span></p>
          </div>
          <div class="DataAnalysisItem">
            <p>活动订单客单价</p>
            <p class="DataStyle">200.62</p>
            <p>昨日 <span>-</span></p>
          </div>
        </div>
        <div class="BottomTip">活动净收入=顾客参与此活动的预计收入之和，活动订单客单价=活动订单营业额/活动订单笔数</div>
      </div>
      <div class="BasicInfoTitle">
        <p class="BlueStyle">▶</p><p>使用记录</p>
      </div>
      <div id="TableBox">
        <el-table
          :data="tableData"
          style="width: 100%"
          :header-cell-style="{background:'#eef1fc',height:'45px', fontSize:'13px',color: '#000000',fontWeight:'400'}"
          :row-style="{height:'50px',fontSize:'13px',fontWeight:'400'}"
          >
          <el-table-column
            prop="num"
            label="序号"
            width="150"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="StoreName"
            label="订单编号"
            header-align="center"
            align="center">
            <template slot-scope="scope">
              <el-link type="primary">{{scope.row.StoreName}}</el-link>
            </template>
          </el-table-column>
          <el-table-column
            prop="OffPrice"
            label="优惠金额"
            width="180"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="AccountPayable"
            label="订单应付款"
            width="180"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="CustomerName"
            label="卖家昵称"
            header-align="center"
            align="center">
            <template slot-scope="scope">
              <el-link type="primary">{{scope.row.CustomerName}}</el-link>
            </template>
          </el-table-column>
          <el-table-column
            prop="TakeTime"
            label="下单时间"
            header-align="center"
            width="300"
            align="center">
            <template slot="header">
              下单时间<i class="el-icon-sort"></i>
            </template>
          </el-table-column>
        </el-table>
        <div class="paginationCenter">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            prev-text="上一页"
            next-text="下一页"
            :page-sizes="[100, 200, 300, 400]"
            layout="prev, pager, next, sizes, total"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name : 'DealerSelfPass',
  data(){
    return{
      tableData: [
        {
          num: '407',
          StoreName: '12232964103521',
          OffPrice: 'P50.00',
          AccountPayable: 'P520.00',
          CustomerName: '小默123',
          TakeTime: '2022-05-11 15:20:51',
        }, 
        {
          num: '407',
          StoreName: '12232964103521',
          OffPrice: 'P50.00',
          AccountPayable: 'P520.00',
          CustomerName: '小默123',
          TakeTime: '2022-05-11 15:20:51',
        }, 
        {
          num: '407',
          StoreName: '12232964103521',
          OffPrice: 'P50.00',
          AccountPayable: 'P520.00',
          CustomerName: '小默123',
          TakeTime: '2022-05-11 15:20:51',
        }, 
        {
          num: '407',
          StoreName: '12232964103521',
          OffPrice: 'P50.00',
          AccountPayable: 'P520.00',
          CustomerName: '小默123',
          TakeTime: '2022-05-11 15:20:51',
        }, 
        {
          num: '407',
          StoreName: '12232964103521',
          OffPrice: 'P50.00',
          AccountPayable: 'P520.00',
          CustomerName: '小默123',
          TakeTime: '2022-05-11 15:20:51',
        }, 
      ]
    }
  }
}
</script>

<style scoped>
#DealerSelfDetail{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
}
.title{
  width: calc(100% - 50px);
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  color: black;
  text-align: start;
  margin-left: 50px;
}
.DealerSelfDetailBody{
  width: calc(100% - 140px);
  height: calc(100% - 80px);
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin : 20px 50px 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}
.PicHead{
  padding: 20px;
  width: calc(100% - 40px);
  height: 100px;
  background: #f5f6fd;
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
}
.PicBox{
  width: 100px;
  height: 100px;
  position: relative;
  background: darkcyan;
}
.PicBox img{
  width: 100px;
  height: 100px;
}
.tip{
  width: 51px;
  height: 16px;
  background: #327f0a;
  color: #ffffff;
  text-align: center;
  line-height: 16px;
  position: absolute;
  right: -10px;
  top: 5px;
  font-size: 12px;
}
.PicHeadText{
  width: calc(100% - 160px);
  column-count: 3;
  padding-left: 60px;
  font-size: 13px;
}
.PicHeadTextItem{
  width: 100%;
  padding-bottom: 20px;
  display: flex;
}
.PicHeadTextItemTitle{
  width: 25%;
}
.BasicInfoTitle{
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  height: 25px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.BasicInfoTitle p{
  height: 20px;
  line-height: 20px;
}
.BlueStyle{
  color: #4e73df;
  padding-right: 5px;
  font-size: 13px;
}
.BasicInfoBox{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.BasicInfo{
  background: #fafafa;
  width: calc(49% - 40px);
  padding: 20px 20px 0 20px;
  font-size: 13px;
  border-radius: 10px;
}
.BasicInfoDetailItem p{
  color: #797979;
}
.BasicInfoDetailTitle{
  font-size: 13px;
  font-weight: 700;
  padding-bottom: 20px;
  padding-top: 10px;
}
.BasicInfoDetailItem{
  display: flex;
  width: 100%;
  padding-bottom: 20px;
}
.BasicInfoDetailItem p{
  width: 18%;
}
.BasicInfoDetailItem span{
  display: inline-block;
  width: 82%;
}
.DataAnalysis{
  width: calc(100% - 20px);
  padding: 10px;
  height: 180px;
  background-color: #fafafa;
  border-radius: 10px;
  margin-bottom: 20px;
}
.TabButton button{
  margin: 0 10px;
  color: #797979;
}
.TabButton{
  margin: 10px 0;
}
.DataAnalysisBox{
  width: calc(100% - 20px);
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
}
.DataAnalysisItem{
  width: 200px;
  height: 100px;
  padding: 15px;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid #e4e4e4;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #797979;
}
.DataStyle{
  font-size: 28px;
  color: #000000;
  font-weight: 400;
  margin-left: -3px;
}
.DataAnalysisItem span{
  margin-left:5px;
}
.BottomTip{
  padding: 5px 10px;
  width: calc(100% - 20px);
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  color: #797979;
  text-align: right;
}
#TableBox{
  width: 100%
}
.insideButton{
  width: 100%;
  padding-left: 30px;
}
.insideButton button{
  font-size: 14px;
  color: black;
}
.insideButton button:hover{
  color: #409eff;
}
.tableTip{
  font-size: 12px;
  color: #FFFFFF;
  background-color: #409eff;
  width: 40px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  margin-top: 5px;
}
.tableTipBox{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.paginationCenter{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
</style>