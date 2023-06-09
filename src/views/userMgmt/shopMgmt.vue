<template>
  <div class="home">
    <div class="container">
      <div class="sub_container">
        <el-tabs v-model="activeName" @tab-click="handleTabsClick">
          <el-tab-pane label="开店申请审核" name="first">
            <el-form :inline="true" class="demo-form-inline">
              <!-- 搜索栏1 -->
              <div class="searchContainer1">
                <el-form-item>
                  <el-input placeholder="请输入ID">
                    <template v-slot:prepend>店铺ID</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入店铺名称">
                    <template v-slot:prepend>店铺名称</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入负责人/法人姓名">
                    <template v-slot:prepend>真实姓名</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入联系手机">
                    <template v-slot:prepend>手机号码</template>
                  </el-input>
                </el-form-item>
              </div>
              <!-- 搜索栏2 -->
              <div class="searchContainer2">
                <!-- 级联选择框 -->
                <locationSelect></locationSelect>

                <el-form-item label="提交时间">
                  <el-select v-model="tableData.submitTime">
                    <el-option value="time_all">全部时间</el-option>
                    <el-option value="time_threeMonth">近三个月</el-option>
                    <el-option value="type_thisYear">今年年内</el-option>
                    <el-option value="type_year2021">2021年</el-option>
                    <el-option value="type_year2020">2020年</el-option>
                    <el-option value="type_before2020">2020年以前</el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="审核时间">
                  <el-date-picker v-model="date" type="date" placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>

                <el-form-item label="审核状态">
                  <el-select v-model="tableData.state">
                    <el-option value="state_all">全部状态</el-option>
                    <el-option value="state_wait">线上审核中</el-option>
                    <el-option value="state_on">待线下审核</el-option>
                    <el-option value="state_pass">线下审核中</el-option>
                    <el-option value="state_fail">待签订合同</el-option>
                    <el-option value="state_pass">待最终审核</el-option>
                    <el-option value="state_fail">最终审核中</el-option>
                    <el-option value="state_pass">审核通过</el-option>
                    <el-option value="state_fail">审核失败</el-option>
                  </el-select>
                </el-form-item>
              </div>

              <div class="searchContainer3">
                <el-form-item>
                  <el-input placeholder="请输入审核人">
                    <template v-slot:prepend>审核人</template>
                  </el-input>
                </el-form-item>
              </div>

              <!-- 按键 -->
              <el-form-item class="btn">
                <el-button type="warning">重置</el-button>
                <el-button type="primary">搜索</el-button>
              </el-form-item>
            </el-form>
            <!-- 渲染表 -->
            <el-table :data="openShopVerifyTable" style="width: 100%" :header-cell-style="{'text-align':'center'}"
              :cell-style="{'text-align':'center'}">
              <el-table-column prop="ID" label="ID" width="180">
                <template slot-scope="scope">
                  <!-- 注意：这个地方要传参数进去才能进行操作  函数名称(scope.row) -->
                  <div @click="goOpenShopRequest(scope.row.ID)" style="color:#4E73DF;cursor: pointer;">{{ scope.row.ID
                  }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="shopOwner" label="负责人" width="180">
                <template slot-scope="scope">
                  <!-- 注意：这个地方要传参数进去才能进行操作  函数名称(scope.row) -->
                  <div>{{ scope.row.shopOwner +'店长' }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="shopOwnerContact" label="联系手机号">
              </el-table-column>
              <el-table-column prop="shopName" label="店铺名称">
              </el-table-column>
              <el-table-column prop="shopLocation" label="所在地"> </el-table-column>
              <el-table-column prop="shopJuridicalPerson" label="法人"> </el-table-column>
              <el-table-column prop="latestSubmitTime" label="最近提交时间">
              </el-table-column>
              <el-table-column prop="latestVerifyTime" label="最近审核时间">
              </el-table-column>
              <el-table-column prop="shopState" label="状态"> </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-tooltip placement="bottom" effect="light">
                    <div slot="content">
                      <p class="goDetail hoverBlue" v-on:click="goOpenShopRequest(scope.row.ID)">
                        <i class="el-icon-edit-outline" style="color: blue"></i>
                        查看并处理
                      </p>
                    </div>
                    <i class="el-icon-more"></i>
                  </el-tooltip>
                </template>
              </el-table-column>
            </el-table>
            <!-- 页码 -->
            <div class="block">
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[10, 15, 20]" :page-size="10"
                layout="prev, pager, next, sizes, total" :total="tableData.length" :pagerCount="11" prev-text="上一页"
                next-text="下一页">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="店铺信息审核" name="second">
            <el-form :inline="true" class="demo-form-inline">
              <!-- 搜索栏1 -->
              <div class="searchContainer1">
                <el-form-item>
                  <el-input placeholder="请输入流水号">
                    <template v-slot:prepend>流水号</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入ID">
                    <template v-slot:prepend>店铺ID</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入店铺名称">
                    <template v-slot:prepend>店铺名称</template>
                  </el-input>
                </el-form-item>

                <el-form-item label="审核类型">
                  <el-select v-model="tableData.submitTime">
                    <el-option value="time_all">全部类型</el-option>
                    <el-option value="time_threeMonth">店铺名称</el-option>
                    <el-option value="type_thisYear">店铺LOGO</el-option>
                    <el-option value="type_year2021">经营品类</el-option>
                    <el-option value="type_year2020">店铺门面图</el-option>
                    <el-option value="type_before2020">店内环境图</el-option>
                    <el-option value="type_year2021">店铺公告</el-option>
                    <el-option value="type_year2020">外卖店招</el-option>
                    <el-option value="type_before2020">团购店招</el-option>
                  </el-select>
                </el-form-item>
              </div>
              <!-- 搜索栏2 -->
              <div class="searchContainer2">

                <el-form-item label="提交时间">
                  <el-select v-model="tableData.submitTime">
                    <el-option value="time_all">全部时间</el-option>
                    <el-option value="time_threeMonth">近三个月</el-option>
                    <el-option value="type_thisYear">今年年内</el-option>
                    <el-option value="type_year2021">2021年</el-option>
                    <el-option value="type_year2020">2020年</el-option>
                    <el-option value="type_before2020">2020年以前</el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="审核状态">
                  <el-select v-model="tableData.state">
                    <el-option value="state_all">全部状态</el-option>
                    <el-option value="state_wait">待审核</el-option>
                    <el-option value="state_on">审核中</el-option>
                    <el-option value="state_pass">审核通过</el-option>
                    <el-option value="state_fail">审核失败</el-option>
                  </el-select>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入审核人">
                    <template v-slot:prepend>审核人</template>
                  </el-input>
                </el-form-item>
              </div>


              <!-- 按键 -->
              <el-form-item class="btn">
                <el-button type="warning">重置</el-button>
                <el-button type="primary">搜索</el-button>
              </el-form-item>
            </el-form>
            <!-- 渲染表 -->
            <el-table :data="shopInfoTable" style="width: 100%" :header-cell-style="{'text-align':'center'}"
              :cell-style="{'text-align':'center'}">
              <el-table-column prop="serialNum" label="流水号" width="180">
                <template slot-scope="scope">
                  <!-- 注意：这个地方要传参数进去才能进行操作  函数名称(scope.row) -->
                  <div @click="goShopInfoDetail(scope.row.serialNum)" style="color:#4E73DF;cursor: pointer;">{{
                  scope.row.serialNum }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="shoprId" label="店铺ID" width="180">
              </el-table-column>
              <el-table-column prop="shopName" label="店铺名称">
              </el-table-column>
              <el-table-column prop="verifyData.verifyType" label="审核类型"></el-table-column>
              <el-table-column prop="verifyData" label="新信息" width="200">
                <template slot-scope="scope">
                  <template v-if="scope.row.verifyData.verifyType=='店铺名称'">
                    <div>{{scope.row.verifyData.verifyNewInfo }}</div>
                  </template>
                  <template v-else-if="scope.row.verifyData.verifyType=='店铺LOGO'"><img
                      :src="scope.row.verifyData.verifyNewInfo" alt="图片加载失败"></template>
                  <template v-else-if="scope.row.verifyData.verifyType=='经营品类'">
                    <div>{{scope.row.verifyData.verifyNewInfo }}</div>
                  </template>
                  <template v-else-if="scope.row.verifyData.verifyType=='店铺门面图'"><img
                      :src="scope.row.verifyData.verifyNewInfo" alt="图片加载失败"></template>
                  <template v-else-if="scope.row.verifyData.verifyType=='店内环境图'"><img
                      :src="scope.row.verifyData.verifyNewInfo" alt="图片加载失败"></template>
                  <template v-else-if="scope.row.verifyData.verifyType=='店铺公告'">
                    <div>{{scope.row.verifyData.verifyNewInfo }}</div>
                  </template>
                  <template v-else-if="scope.row.verifyData.verifyType=='外卖店招'"><img
                      :src="scope.row.verifyData.verifyNewInfo" alt="图片加载失败"></template>
                  <template v-else-if="scope.row.verifyData.verifyType=='团购店招'"><img
                      :src="scope.row.verifyData.verifyNewInfo" alt="图片加载失败"></template>
                </template>
              </el-table-column>
              <el-table-column prop="verifyData" label="旧信息" width="200">
                <template slot-scope="scope">
                  <template v-if="scope.row.verifyData.verifyType=='店铺名称'">
                    <div>{{scope.row.verifyData.verifyOldInfo }}</div>
                  </template>
                  <template v-else-if="scope.row.verifyData.verifyType=='店铺LOGO'"><img
                      :src="scope.row.verifyData.verifyOldInfo" alt="图片加载失败"></template>
                  <template v-else-if="scope.row.verifyData.verifyType=='经营品类'">
                    <div>{{scope.row.verifyData.verifyOldInfo }}</div>
                  </template>
                  <template v-else-if="scope.row.verifyData.verifyType=='店铺门面图'"><img
                      :src="scope.row.verifyData.verifyOldInfo" alt="图片加载失败"></template>
                  <template v-else-if="scope.row.verifyData.verifyType=='店内环境图'"><img
                      :src="scope.row.verifyData.verifyOldInfo" alt="图片加载失败"></template>
                  <template v-else-if="scope.row.verifyData.verifyType=='店铺公告'">
                    <div>{{scope.row.verifyData.verifyOldInfo }}</div>
                  </template>
                  <template v-else-if="scope.row.verifyData.verifyType=='外卖店招'"><img
                      :src="scope.row.verifyData.verifyOldInfo" alt="图片加载失败"></template>
                  <template v-else-if="scope.row.verifyData.verifyType=='团购店招'"><img
                      :src="scope.row.verifyData.verifyOldInfo" alt="图片加载失败"></template>
                </template>
              </el-table-column>
              <el-table-column prop="verifySubmitTime" label="提交时间">
              </el-table-column>
              <el-table-column prop="state" label="状态"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-tooltip placement="bottom" effect="light">
                    <div slot="content" class="tipContent">
                      <p class="goDetail hoverBlue" v-on:click="goShopInfoDetail(scope.row.serialNum)">
                        <i class="el-icon-edit-outline" style="color: blue"></i>
                        查看并处理
                      </p>
                    </div>
                    <i class="el-icon-more"></i>
                  </el-tooltip>
                </template>
              </el-table-column>
            </el-table>
            <!-- 页码 -->
            <div class="block">
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[10, 15, 20]" :page-size="10"
                layout="prev, pager, next, sizes, total" :total="shopInfoTable.length" :pagerCount="11" prev-text="上一页"
                next-text="下一页">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="已入驻店铺" name="third">
            <el-form :inline="true" class="demo-form-inline">
              <!-- 搜索栏1 -->
              <div class="searchContainer1">
                <el-form-item>
                  <el-input placeholder="请输入ID">
                    <template v-slot:prepend>店铺ID</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入店铺名称">
                    <template v-slot:prepend>店铺名称</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入手机号码">
                    <template v-slot:prepend>接单手机</template>
                  </el-input>
                </el-form-item>

                <el-form-item label="主营品类">
                  <el-select v-model="tableData.submitTime">
                    <el-option value="time_all">全部品类</el-option>
                    <el-option value="time_threeMonth">品类一</el-option>
                    <el-option value="type_thisYear">品类二</el-option>
                    <el-option value="type_year2021">品类三</el-option>
                    <el-option value="type_year2020">品类四</el-option>
                    <el-option value="type_before2020">品类五</el-option>
                    <el-option value="type_year2021">品类六</el-option>
                    <el-option value="type_year2020">品类七</el-option>
                    <el-option value="type_before2020">品类八</el-option>
                    <el-option value="type_year2020">品类九</el-option>
                    <el-option value="type_before2020">品类十</el-option>
                  </el-select>
                </el-form-item>
              </div>
              <!-- 搜索栏2 -->
              <div class="searchContainer2">

                <!-- 级联选择框 -->
                <locationSelect></locationSelect>

                <el-form-item label="配送方式">
                  <el-select v-model="tableData.state">
                    <el-option value="state_all">全部配送</el-option>
                    <el-option value="state_wait">平台配送</el-option>
                    <el-option value="state_on">商家配送</el-option>
                  </el-select>
                </el-form-item>

                <el-form-item>评分
                  <el-input placeholder="最小" style="width:30%"></el-input>
                  <span>&nbsp;至&nbsp;</span>
                  <el-input placeholder="最大" style="width:30%"></el-input>
                </el-form-item>

                <el-form-item label="开店时间">
                  <el-select v-model="tableData.state">
                    <el-option value="state_all">近三个月</el-option>
                    <el-option value="state_wait">今年年内</el-option>
                    <el-option value="state_on">2021年</el-option>
                    <el-option value="state_on">2020年</el-option>
                    <el-option value="state_on">2020年以前</el-option>
                  </el-select>
                </el-form-item>
              </div>

              <div class="searchContainer3">
                <el-form-item label="店铺状态">
                  <el-select v-model="tableData.state">
                    <el-option value="state_all">全部状态</el-option>
                    <el-option value="state_wait">待营业</el-option>
                    <el-option value="state_on">营业中</el-option>
                    <el-option value="state_on">休息中</el-option>
                    <el-option value="state_on">已禁用</el-option>
                    <el-option value="state_on">已注销</el-option>
                  </el-select>
                </el-form-item>
              </div>

              <!-- 按键 -->
              <el-form-item class="btn">
                <el-button type="warning">重置</el-button>
                <el-button type="primary">搜索</el-button>
              </el-form-item>
            </el-form>
            <!-- 渲染表 -->
            <el-table :data="settledShopTable" style="width: 100%" :header-cell-style="{'text-align':'center'}"
              :cell-style="{'text-align':'center'}">
              <el-table-column prop="settledShopId" label="ID" width="180">
                <template slot-scope="scope">
                  <!-- 注意：这个地方要传参数进去才能进行操作  函数名称(scope.row) -->
                  <div @click="goShopDetail(scope.row.settledShopId)" style="color:#4E73DF;cursor: pointer;">{{
                  scope.row.settledShopId }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="settledShopName" label="店铺名称" width="180">
              </el-table-column>
              <el-table-column prop="settledShopContact" label="接单手机">
              </el-table-column>
              <el-table-column prop="settledShopMainSupBus" label="主营/辅营">
              </el-table-column>
              <el-table-column prop="settledShopLocation" label="所在地"> </el-table-column>
              <el-table-column prop="settledShopDeliverWay" label="配送方式"> </el-table-column>
              <el-table-column prop="settledShopRate" label="评分">
                <template slot-scope="scope">
                  <div @click="goShopRateDetail(scope.row.settledShopRate)" style="color:#4E73DF;cursor: pointer;">{{
                  scope.row.settledShopRate }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="settledShopGoods" label="商品">
                <template slot-scope="scope">
                  <div @click="goOtherLink('/goodsManagement')" style="color:#4E73DF;cursor: pointer;">{{
                  scope.row.settledShopGoods }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="settledShopOpenTime" label="开店时间"> </el-table-column>
              <el-table-column prop="state" label="状态">
              </el-table-column>
              <el-table-column label="操作">
                <el-tooltip placement="bottom" effect="light">
                  <div slot="content">
                    <p class="lock hoverBlue" @click="lockVisible = true"><i class="el-icon-remove-outline"
                        style="color:red"></i>
                      锁定店铺</p>
                    <br>
                    <p class="unlock hoverBlue" @click="unlockVisible = true"><i class="el-icon-circle-check"
                        style="color:lightgreen"></i> 解锁店铺</p>
                    <br>
                    <p class="lock hoverBlue" @click="lockAccountVisible = true"><i class="el-icon-lock"
                        style="color:yellow"></i>
                      冻结账户</p>
                    <br>
                    <p class="unlock hoverBlue" @click="unlockAccountVisible = true"><i class="el-icon-unlock"
                        style="color:lightblue"></i>
                      解冻账户</p>
                  </div>
                  <i class="el-icon-more"></i>
                </el-tooltip>
              </el-table-column>
            </el-table>
            <!-- 页码 -->
            <div class="block">
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[10, 15, 20]" :page-size="10"
                layout="prev, pager, next, sizes, total" :total="tableData.length" :pagerCount="11" prev-text="上一页"
                next-text="下一页">
              </el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <!-- 锁定模态框 -->
      <el-dialog title="确定锁定该账户？" :visible.sync="lockVisible">
        <div class="modalHint">店铺账户被冻结后将无法提现、充值，请慎重操作！</div>
        <el-form :model="form">
          <el-form-item label="冻结原因" :label-width="formLabelWidth">
            <el-select v-model="value" placeholder="请选择原因">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="中文补充说明" :label-width="formLabelWidth">
            <el-input type="text" placeholder="请输入中文补充说明" v-model="CNtext" maxlength="200" show-word-limit>
            </el-input>
          </el-form-item>
          <el-form-item label="英文补充说明" :label-width="formLabelWidth">
            <el-input type="text" placeholder="请输入英文补充说明" v-model="ENtext" maxlength="500" show-word-limit>
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="lockVisible = false">取 消</el-button>
          <el-button type="primary" @click="lockVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 解锁模态框 -->
      <el-dialog title="确定解锁该账户？" :visible.sync="unlockVisible">
        <div class="modalHint">店铺账户被解冻后将恢复提现、充值，请慎重操作！</div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="unlockVisible = false">取 消</el-button>
          <el-button type="primary" @click="unlockVisible = false">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 锁定账户模态框 -->
      <el-dialog title="确定锁定该账号？" :visible.sync="lockAccountVisible">
        <div class="modalHint">店铺帐号被锁定后将无法营业接单，请慎重操作！</div>
        <el-form :model="form">
          <el-form-item label="锁定原因" :label-width="formLabelWidth">
            <el-select v-model="value" placeholder="请选择原因">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="中文补充说明" :label-width="formLabelWidth">
            <el-input type="text" placeholder="请输入中文补充说明" v-model="CNtext" maxlength="200" show-word-limit>
            </el-input>
          </el-form-item>
          <el-form-item label="英文补充说明" :label-width="formLabelWidth">
            <el-input type="text" placeholder="请输入英文补充说明" v-model="ENtext" maxlength="500" show-word-limit>
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="lockAccountVisible = false">取 消</el-button>
          <el-button type="primary" @click="lockAccountVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 解锁账户模态框 -->
      <el-dialog title="确定解锁该账号？" :visible.sync="unlockAccountVisible">
        <div class="modalHint">店铺帐号被解锁后将恢复可营业接单，请慎重操作！</div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="unlockAccountVisible = false">取 消</el-button>
          <el-button type="primary" @click="unlockAccountVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import locationSelect from '../../components/userMgnt/locationSelect.vue'
export default {
  name: "shopMgmt",
  components: {
    locationSelect
  },
  data() {
    return {
      activeName: "first",
      date: '',
      openShopVerifyTable: [],
      shopInfoTable: [],
      settledShopTable: [],
      tableData: {
        submitTime: '',
        state: '',
      },
      currentPage: 1,
      CNtext: '',
      ENtext: '',
      data: {

      },
      options: [
        {
          value: '选项1',
          label: "原因一"
        }
      ],
      value: '',
      form: {
      },
      formLabelWidth: '120px',
      ownedBusinessTable: [{}],
      lockVisible: false,
      unlockVisible: false,
      lockAccountVisible: false,
      unlockAccountVisible: false,
    };
  },
  created() {
    this.$axios({
      method: 'GET',
      url: 'http://127.0.0.1:4523/m1/1680117-0-default/shopMgmt/allOpenShopRequest',
      params: {
        currentPage: 1,
        pageSize: 5
      }
    })
      .then(res => {
        this.openShopVerifyTable = res.data
      })
      .catch(err => {
        console.log("请求失败", err)
      })
  },
  methods: {
    // tabs切换发起数据请求
    handleTabsClick(tab) {
      if (tab.name == "first") {
        this.$axios({
          method: 'GET',
          url: 'http://127.0.0.1:4523/m1/1680117-0-default/shopMgmt/allOpenShopRequest',
          params: {
            currentPage: 1,
            pageSize: 5
          }
        })
          .then(res => {
            this.openShopVerifyTable = res.data
          })
          .catch(err => {
            console.log("请求失败", err)
          })
      }
      else if (tab.name == "second") {
        this.$axios({
          method: 'GET',
          url: 'http://127.0.0.1:4523/m1/1680117-0-default/shopMgmt/shopInfoVerify',
          params: {
            currentPage: 1,
            pageSize: 5
          }
        })
          .then(res => {
            this.shopInfoTable = res.data
          })
          .catch(err => {
            console.log("请求失败", err)
          })
      }
      else if (tab.name == "third") {
        this.$axios({
          method: 'GET',
          url: 'http://127.0.0.1:4523/m1/1680117-0-default/shopMgmt/allSettledShop',
          params: {
            currentPage: 1,
            pageSize: 5
          }
        })
          .then(res => {
            this.settledShopTable = res.data
          })
          .catch(err => {
            console.log("请求失败", err)
          })
      }
    },
    // 开店申请审核详情
    goOpenShopRequest(param) {
      console.log(param);
      this.$router.push({ path: 'storeManagement/openShopRequestDetail/' + param })
    },

    // 店铺信息审核详情
    goShopInfoDetail(param) {
      console.log(param);
      this.$router.push({ path: 'storeManagement/shopInfoDetail/' + param })
    },

    // 店铺详情
    goShopDetail(param) {
      console.log(param)
      this.$router.push({ path: 'storeManagement/shopDetail/' + param })
    },

    // 店铺评分详情
    goShopRateDetail(param) {
      console.log(param)
      this.$router.push({ path: 'storeManagement/shopRateDetail/' + param })
    },

    // 页面条数改变
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    // 当前页面改变
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    // 跳转页面
    goOtherLink(url){
      console.log('跳转成功，下面的报错有啥BUG我不管哈')
      this.$router.push(url)
    }
  },
};
</script>

<style scoped>
.home {
  background-color: #f5f5f5;
}

.pageName {
  height: 60px;
  font-size: 18px;
  line-height: 60px;
  margin-left: 50px;
}

.sub_container {
  margin-left: 50px;
  margin-right: 50px;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}

.searchContainer1 {
  display: flex;
  align-items: flex-end;
}

.searchContainer1>* {
  width: 24%;
}

.searchContainer2 {
  display: flex;
  align-items: flex-end;
}

.searchContainer2>* {
  width: 24%;
}

.searchContainer3 {
  display: flex;
  align-items: flex-end;
}

.searchContainer3>* {
  width: 24%;
}

.el-icon-more:hover {
  cursor: pointer;
}

.btn {
  margin: 10px 10px;
}

.block {
  margin-top: 10px;
  text-align: center;
}

.placeSelect {
  width: 25%;
}

.hoverBlue:hover {
  cursor: pointer;
  color: #4E73DF
}
</style>
