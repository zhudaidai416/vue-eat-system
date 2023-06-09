<template>
  <div>
    <!-- <el-row>
      <el-col :span="24"><div class="header">广告投放</div></el-col>
    </el-row> -->

    <div class="content">
      <el-row class="content-2" :gutter="20">

        <el-col :span="6">
          <div class="content-div">广告类型</div>
          <template>
            <el-select style="width: 60%;" v-model="value" placeholder="全部类型">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-col>

        <el-col :span="6">
          <div>
            <el-input placeholder="请输入通知标题" v-model="input1">
              <template slot="prepend">广告标题</template>
            </el-input>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="content-div">客户端</div>
          <template>
            <el-select style="width: 60%;" v-model="value2" placeholder="全部客户端">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-col>

        <el-col :span="6">
          <div class="content-div">语言类型</div>
          <template>
            <el-select style="width: 60%;" v-model="value3" placeholder="全部">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-col>
      </el-row>

      <el-row class="content-3" :gutter="20">
        <el-col :span="6">
          <div class="content-div">创建时间</div>
          <template>
            <el-select style="width: 60%;" v-model="value4" placeholder="全部">
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-col>

        <el-col :span="6">
          <div class="content-div">状态</div>
          <template>
            <el-select style="width: 60%;" v-model="value5" placeholder="全部状态">
              <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-col>
      </el-row>

      <el-row class="content-4">
        <el-col :span="24">
          <el-button type="warning" @click="reset">重置</el-button>
          <el-button type="primary" @click="search">搜索</el-button>
        </el-col>
      </el-row>

      <el-row class="content-5">
        <el-col :span="24">
          <el-button round @click="advertising">+发布广告</el-button>
        </el-col>
      </el-row>

      <template>
        <el-table
          :header-cell-style="{ background: '#eef1fc' }"
          :data="tableData"
          style="width: 100%;">
          <el-table-column prop="id" label="编号" width="80">
            <template slot-scope="scope">
              <span @click="AdvertisingDetails(scope.row)" style="cursor: pointer; color: red;">
                {{ scope.row.id }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="adType" label="广告类型" width="120"></el-table-column>
          <el-table-column prop="adTitle" label="广告标题" width="180"></el-table-column>
          <el-table-column prop="clientSide" label="客户端" width="160"></el-table-column>
          <el-table-column prop="language" label="语言" width="80"></el-table-column>
          <el-table-column prop="startTime" label="生效日期" width="180"></el-table-column>
          <el-table-column prop="creationTime" label="创建时间" width="180"></el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            width="170">
             <template slot-scope="scope">
                {{ statusToChinese( scope.row.status) }}
            </template>
          </el-table-column>

          <el-table-column prop="operation" label="操作" width="80">
            <template slot-scope="scope">
              <el-popover
                v-if="scope.row.status == 0"
                placement="bottom"
                width="150"
                trigger="click"
              >
                <div slot="reference" style="cursor: pointer;">···</div>
                <div>
                  <div style="cursor: pointer;text-align: center;margin-bottom: 5px;" @click="EditAD(scope.row.id)">
                    <i class="el-icon-edit" style="margin-right: 10px;"></i>
                    编辑广告
                  </div>
                  <div style="cursor: pointer;text-align: center;margin-bottom: 5px;" @click="edit(scope.row.id)">
                    <i class="el-icon-s-promotion" style="margin-right: 10px;"></i>
                    立即推送
                  </div>
                  <div style=" cursor: pointer;text-align: center;margin-bottom: 5px;" @click="edit(scope.row.id)">
                    <i class="el-icon-remove" style="margin-right: 10px; color: red;"></i>
                    停用广告
                  </div>
                </div>
              </el-popover>

              <el-popover v-if="scope.row.status == 1" placement="bottom" width="150" trigger="click">
                <div slot="reference" style="cursor: pointer;">···</div>
                <div>
                  <div style="cursor: pointer;text-align: center;margin-bottom: 5px;" @click="edit(scope.row.id)">
                    <i class="el-icon-remove" style="margin-right: 10px; color: red;"></i>
                    停用广告
                  </div>
                </div>
              </el-popover>

              <el-popover v-if="scope.row.status == 2 || scope.row.status == 3" placement="bottom" width="150" trigger="click">
                <div slot="reference" style="cursor: pointer;">···</div>
                <div>
                  <div style="cursor: pointer;text-align: center;margin-bottom: 5px;" @click="edit(scope.row.id)">
                    <i class="el-icon-refresh-right" style="margin-right: 10px; color: red;"></i>
                    重新发布
                  </div>
                </div>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </template>

 <!-- 页码渲染区 -->
      <el-pagination
        style="margin: 50px auto;"
        background
        layout="prev, pager, next, sizes, total" 
        :total="pageNumLength"
        :current-page='pageNum'
        :page-sizes="[2, 5, 10, 20]"
        :page-size="sizeChange"
         @size-change='handleSizeChange'
         @prev-click="prevPage" @current-change='currentPage' @next-click='nextPage' 
      ></el-pagination>
 <!-- 页码渲染区 -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ClassView',
  data() {
    return {
      options: [
        { value: '全部类型', label: '全部类型' },
        { value: '启动页广告', label: '启动页广告' },
        { value: '首页弹窗广告', label: '首页弹窗广告' },
      ],
      value: '',

      options2: [
        { value: '全部客户端', label: '全部客户端' },
        { value: '外卖APP', label: '外卖APP' },
        { value: '商家APP', label: '商家APP' },
        { value: '骑手APP', label: '骑手APP' },
        { value: '众包APP', label: '众包APP' },
      ],
      value2: '',

      options3: [
        { value: '全部', label: '全部' },
        { value: '中文', label: '中文' },
        { value: 'English', label: 'English' },
      ],
      value3: '',

      options4: [
        { value: '全部',     label: '全部' },
        { value: '近三个月', label: '近三个月' },
        { value: '今年内',   label: '今年内' },
        { value: '2021年',   label: '2021年' },
        { value: '2020年',   label: '2020年' },
        { value: '2020年以前', label: '2020年以前' },
      ],
      value4: '',

      options5: [
        { value: '0', label: '全部状态' },
        { value: '1', label: '待推送' },
        { value: '2', label: '生效中' },
        { value: '3', label: '已过期' },
        // { value: '4', label: '已停用' },
      ],
      value5: '',

      input1: '',


       tableData:[
        {
            "id": 1,
            "adType": "启动页广告",
            "adTitle": "这是一条广告标题，这是一条广告标题，这是一条广告标题",
            "clientSide": "外卖APP",
            "language": "中文",
            "startTime": "2022-08-03T00:00:00.000+00:00",
            "creationTime": "2022-10-29T00:00:00.000+00:00",
            "status": 0,
            "showCover": "img",
            "jumpUrl": "www.7k7k.com",
            "delStatus": 0,
            "operation": null,
            "startTimeFlag": null,
            "endTimeFlag": null
        },
        {
            "id": 2,
            "adType": "启动页广告",
            "adTitle": "这是一条广告标题，这是一条广告标题，这是一条广告标题",
            "clientSide": "外卖APP",
            "language": "中文",
            "startTime": "2022-08-11T00:00:00.000+00:00",
            "creationTime": "2022-10-12T00:00:00.000+00:00",
            "status": 1,
            "showCover": "img",
            "jumpUrl": "www.7k7k.com",
            "delStatus": 0,
            "operation": null,
            "startTimeFlag": null,
            "endTimeFlag": null
        },
        {
            "id": 3,
            "adType": "启动页广告",
            "adTitle": "这是一条广告标题，这是一条广告标题，这是一条广告标题",
            "clientSide": "外卖APP",
            "language": "English",
            "startTime": "2022-03-24T18:54:22.000+00:00",
            "creationTime": "2022-09-10T18:54:46.000+00:00",
            "status": 2,
            "showCover": "img",
            "jumpUrl": "www.7k7k.com",
            "delStatus": 0,
            "operation": null,
            "startTimeFlag": null,
            "endTimeFlag": null
        },
        {
            "id": 4,
            "adType": "首页弹窗广告",
            "adTitle": "这是一条广告标题，这是一条广告标题，这是一条广告标题",
            "clientSide": "商家APP",
            "language": "English",
            "startTime": "2022-03-23T00:00:00.000+00:00",
            "creationTime": "2022-08-11T18:54:54.000+00:00",
            "status": 3,
            "showCover": "img",
            "jumpUrl": "www.7k7k.com",
            "delStatus": 0,
            "operation": null,
            "startTimeFlag": null,
            "endTimeFlag": null
        },
        {
            "id": 5,
            "adType": "首页弹窗广告",
            "adTitle": "这是一条广告标题，这是一条广告标题，这是一条广告标题",
            "clientSide": "商家APP",
            "language": "English",
            "startTime": "2022-06-15T00:00:00.000+00:00",
            "creationTime": "2022-09-22T18:54:59.000+00:00",
            "status": 0,
            "showCover": "img",
            "jumpUrl": "www.7k7k.com",
            "delStatus": 0,
            "operation": null,
            "startTimeFlag": null,
            "endTimeFlag": null
        },
        {
            "id": 6,
            "adType": "首页弹窗广告",
            "adTitle": "这是一条广告标题，这是一条广告标题，这是一条广告标题",
            "clientSide": "骑手APP",
            "language": "中文",
            "startTime": "2022-04-12T18:54:35.000+00:00",
            "creationTime": "2022-07-21T18:55:02.000+00:00",
            "status": 1,
            "showCover": "img",
            "jumpUrl": "www.7k7k.com",
            "delStatus": 0,
            "operation": null,
            "startTimeFlag": null,
            "endTimeFlag": null
        },
        {
            "id": 7,
            "adType": "首页弹窗广告",
            "adTitle": "这是一条广告标题，这是一条广告标题，这是一条广告标题",
            "clientSide": "骑手APP",
            "language": "中文",
            "startTime": "2022-04-14T18:54:39.000+00:00",
            "creationTime": "2022-08-17T18:55:11.000+00:00",
            "status": 2,
            "showCover": "img",
            "jumpUrl": "www.7k7k.com",
            "delStatus": 0,
            "operation": null,
            "startTimeFlag": null,
            "endTimeFlag": null
        }
        ],

      // tableData: [   //初始加载渲染列表数据
      //   {
      //     number: 110,
      //     adType: '启动页广告',
      //     headline: '这是一条广告标题，这是一条广告标题，这是一条广告标题',
      //     client: '外卖APP',
      //     language: '中文',
      //     effectTime: '2022-10-01 00:00:00 至 2022-10-07 23:59:59',
      //     creationTime: '2022-08-10 18:20:40',
      //     status: '待推送',
      //     operation: '',
      //   },
      //   {
      //     number: 110,
      //     adType: '启动页广告',
      //     headline: '这是一条广告标题，这是一条广告标题，这是一条广告标题',
      //     client: '外卖APP',
      //     language: '中文',
      //     effectTime: '2022-10-01 00:00:00 至 2022-10-07 23:59:59',
      //     creationTime: '2022-08-10 18:20:40',
      //     status: '生效中',
      //     operation: '',
      //   },
      //   {
      //     number: 110,
      //     adType: '启动页广告',
      //     headline: '这是一条广告标题，这是一条广告标题，这是一条广告标题',
      //     client: '外卖APP',
      //     language: '中文',
      //     effectTime: '2022-10-01 00:00:00 至 2022-10-07 23:59:59',
      //     creationTime: '2022-08-10 18:20:40',
      //     status: '已过期',
      //     operation: '',
      //   },
      //   {
      //     number: 110,
      //     adType: '启动页广告',
      //     headline: '这是一条广告标题，这是一条广告标题，这是一条广告标题',
      //     client: '外卖APP',
      //     language: '中文',
      //     effectTime: '2022-10-01 00:00:00 至 2022-10-07 23:59:59',
      //     creationTime: '2022-08-10 18:20:40',
      //     status: '已停用',
      //     operation: '',
      //   },
      //   {
      //     number: 110,
      //     adType: '启动页广告',
      //     headline: '这是一条广告标题，这是一条广告标题，这是一条广告标题',
      //     client: '外卖APP',
      //     language: '中文',
      //     effectTime: '2022-10-01 00:00:00 至 2022-10-07 23:59:59',
      //     creationTime: '2022-08-10 18:20:40',
      //     status: '待推送',
      //     operation: '',
      //   },
      //   {
      //     number: 110,
      //     adType: '启动页广告',
      //     headline: '这是一条广告标题，这是一条广告标题，这是一条广告标题',
      //     client: '外卖APP',
      //     language: '中文',
      //     effectTime: '2022-10-01 00:00:00 至 2022-10-07 23:59:59',
      //     creationTime: '2022-08-10 18:20:40',
      //     status: '待推送',
      //     operation: '',
      //   },
      // ],
      middleData:[],  //中间中转数据
      searchData:[],  //搜索数据

      pageNumLength:0, //总页码
      pageNum:1,       //当前页
      sizeChange:2     //每页多少条数据

    }
  },
  methods: {
    ...mapActions({
      loadingData_actions:'hz_store/loadingData_actions',
      search_Action:'hz_store/search_Action',
      }),

    loading(){             //初始加载请求数据方法
        this.loadingData_actions()
         .then(()=>{
          this.pageNum=1  
          this.sizeChange=2
          this.middleData=this.$store.state.hz_store.loadingData
          // this.pageNumLength=JSON.parse(JSON.stringify(this.middleData)).length
          this.pageNumLength=this.middleData.length
          // this.tableData=this.middleData.slice((this.pageNum-1)*2,(this.pageNum-1)*2+2)
          this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
          // this.searchData=this.$store.state.hz_store.loadingData
          // console.log(this.tableData);
      })
    },
    search() {             //搜索按钮
      let aaa=this.transFrom(this.value4)
      // console.log(aaa);
      this.search_Action({
        adType: this.value,
        adTitle: this.input1,
        clientSide: this.value2,
        language: this.value3,
        startTimeFlag: aaa,
        status: this.value5,
      }).then(() => {
        this.middleData=this.$store.state.hz_store.searchData
        this.pageNumLength=this.middleData.length
        this.pageNum=1  
        this.sizeChange=2
        this.tableData=this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
 
      })
    },
    transFrom(key){
       switch (key) {
        case '全部':
          return  1
        case '近三个月':
          return  3
        case '今年内':
          return  12
        default:
          return  '';
      }
    },

    reset() {              //重置按钮
      this.value='';
      this.value2='';
      this.value3='';
      this.value4='';
      this.value5='';
      this.input1='';
      this.loading()
    },

    prevPage(e){    //上一页
          this.pageNum=e
          this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
      },

    currentPage(e){   //当前页
        this.pageNum=e;
        this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
    },
    nextPage(e){     //下一页
        this.pageNum=e;
        this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
    },
    handleSizeChange(val){   //每页显示多少条
        // console.log(`每页 ${val} 条`);
        this.sizeChange=val
        this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
    },
   
    advertising() {         //发布广告
      this.$router.push('/publishAdvertisement')
    },
    EditAD(id) {          //编辑广告
    // console.log(data);
      this.$router.push({
        path: '/editAdvertisement',
        query: {
          id,
        },
        // query: data
      })
    },
    AdvertisingDetails(data) {     //广告详情
      this.$router.push({
        path:'/advertisingDetails',
        // name:'advertisingDetails',
        query:{
          data
        }
        // params:data
      })
      // this.$router.push('/advertisingDetails')
    }, 
    
    
    statusToChinese(key){
      switch (key) {
        case 0:
          return  '生效中'
        case 1:
          return  '待推送'
        case 2:
          return  '已过期'
        case 3:
          return  '已停用'
        default:
          break;
      }
    },

  },


  
  created() {
      //生命周期函数
      this.loading()
    },
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: #f8f8f8;
  /* text-align: center; */
  line-height: 50px;
  font-size: 18px;
}
.content {
  width: 100%;
  /* height: 100vh; */
  padding: 20px;
}
.content-div {
  display: inline-block;
  width: 95px;
  height: 38px;
  border: 1px solid #dcdfe6;
  background-color: #f5f7fa;
  border-radius: 3px;
  line-height: 35px;
  text-align: center;
  color: #909399;
  font-size: 14px;
}
.content > .el-row {
  margin-bottom: 20px;
}
.content-1 {
  padding-bottom: 10px;
  border-bottom: 1px solid #e4e4e4;
}
.content-4 {
  padding-bottom: 20px;
  border-bottom: 1px solid #e4e4e4;
}
</style>
