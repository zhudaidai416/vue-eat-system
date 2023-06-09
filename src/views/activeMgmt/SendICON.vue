<template>
  <div class="send-icon">
    <!-- <div class="header">
      <p>发布外卖首页ICON设置</p>
      <div class="back-btn">
        <router-link to="promoteActivity"
          ><i class="el-icon-back"></i> <span>返回</span></router-link
        >
      </div>
    </div> -->
    <div class="content">
      <div class="content-row">
        <span class="header-tips"
          ><i class="el-icon-info"></i>
          遇到重大节日或活动时，通过设置外卖首页ICON，可以短期内展现不同风格的外卖APP首页。</span
        >
      </div>
      <div class="content-row">
        <div class="keys">
          <span>外卖首页背景图:</span>
          <span>(2倍图)</span>
        </div>
        <div class="key-values">
          <el-upload
            class="background-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="background" />
            <i v-else class="el-icon-plus background-uploader-icon"></i>
          </el-upload>
          <span class="value-tip"
            >推荐尺寸750x400，格式仅支持PNG，大小限2MB内</span
          >
        </div>
      </div>
      <div class="content-row">
        <div class="keys">
          <span>外卖首页背景图:</span>
          <span>(3倍图)</span>
        </div>
        <div class="key-values">
          <el-upload
            class="background-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="background" />
            <i v-else class="el-icon-plus background-uploader-icon"></i>
          </el-upload>
          <span class="value-tip"
            >推荐尺寸1125x600，格式仅支持PNG，大小限2MB内 (选填)</span
          >
        </div>
      </div>
      <div class="content-row">
        <div class="keys">
          <span>外卖首页ICON:</span>
          <span>(2倍图)</span>
        </div>
        <div class="key-values">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span class="value-tip"
            >推荐尺寸90x90，格式仅支持PNG，大小限2MB内</span
          >
        </div>
      </div>
      <div class="content-row">
        <div class="keys">
          <span>外卖首页ICON:</span>
          <span>(3倍图)</span>
        </div>
        <div class="key-values">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span class="value-tip"
            >推荐尺寸135x135，格式仅支持PNG，大小限2MB内 (选填)</span
          >
        </div>
      </div>
      <div class="content-row">
        <div class="keys special-keys1">
          <span>效果缩略图:</span>
        </div>
        <div class="key-values">
          <el-upload
            class="effect-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="effect" />
            <i v-else class="el-icon-plus effect-uploader-icon"></i>
          </el-upload>
          <span class="value-tip"
            >推荐尺寸375x350，格式支持JPEG、PNG，大小限2MB内，仅用于后台展示</span
          >
        </div>
      </div>
      <div class="content-row special-row1">
        <div class="keys special-keys2">
          <span>生效日期:</span>
        </div>
        <div class="key-values special-values1">
          <el-date-picker
            v-model="startDate"
            type="date"
            placeholder="选择日期"
            size="small"
          >
          </el-date-picker>
          <span class="zhi">至</span>
          <el-date-picker
            v-model="finaleDate"
            type="date"
            placeholder="选择日期"
            size="small"
          >
          </el-date-picker>
        </div>
      </div>
      <div class="content-row special-row1">
        <div class="keys special-keys3">
          <span>备注:</span>
        </div>
        <div class="key-values special-values1">
          <el-input
            type="text"
            placeholder="请输入内容"
            v-model="note"
            maxlength="100"
            show-word-limit
            size="small"
            class="noteInput"
          >
          </el-input>
          <span class="value-tip">(选填)</span>
        </div>
      </div>
      <div class="content-row">
        <label>
          <button class="cancel-btn">取消</button>
          <button class="confirm-btn">保存</button>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SendICON",
  data() {
    return {
      imageUrl: "",
      startDate: "",
      finaleDate: "",
      note: "",
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style scoped>
.send-icon {
  background: #f5f5f5;
}
/* 头部 */
/* .header {
  height: 60px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  justify-content: space-between;
}
.header p {
  font-size: 18px;
} */
.content {
  /* margin-left: 50px;
  margin-right: 50px; */
  /* margin-bottom: 20px; */
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}
.header-tips {
  font-size: 12px;
  color: #ff9900;
}
.content-row {
  display: flex;
  margin: 10px 0;
}
.keys {
  display: flex;
  flex-direction: column;
  margin-right: 30px;
}
.special-keys1 {
  margin-right: 43px;
}
.special-keys2 {
  margin-right: 65px;
}
.special-keys3 {
  margin-right: 90px;
}
.keys :nth-child(1) {
  font-size: 13px;
}
.keys :nth-child(2) {
  font-size: 12px;
  color: #999999;
}
.key-values {
  display: flex;
  align-items: flex-end;
}
.value-tip {
  font-size: 12px;
  color: #999999;
  margin-left: 10px;
  margin-bottom: 5px;
}
.zhi {
  margin: 0 8px;
}
.special-row1 {
  display: flex;
  align-items: center;
}
.special-values1 {
  display: flex;
  align-items: center;
}
.noteInput {
  width: 472px;
}
.cancel-btn,
.confirm-btn {
  width: 70px;
  height: 30px;
  margin-left: 118px;
  outline: none;
  border: 1px solid #d7d7d7;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: #fff;
  font-size: 13px;
  cursor: pointer;
  color: black;
}
.confirm-btn {
  margin-left: 10px;
  background-color: #4e73df;
  border: 1px solid #4e73df;
  color: #fff;
}
.confirm-btn:hover {
  background-color: #6595e6;
}
</style>
