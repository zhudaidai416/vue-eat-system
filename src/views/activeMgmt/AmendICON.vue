<template>
  <div class="amend-icon">
    <!-- <div class="header">
      <p>编辑外卖首页ICON设置</p>
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
        <div class="keys k1">
          <span>编号:</span>
        </div>
        <div class="key-values">
          <span class="values">1010</span>
        </div>
      </div>
      <div class="content-row">
        <div class="keys">
          <span>外卖首页背景图:</span>
          <span>(2倍图)</span>
        </div>
        <div class="key-values">
          <div v-if="isImg1">
            <div>
              <i class="el-icon-close close-btn" @click="closeImg1"></i>
            </div>
            <img
              class="img1"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-10-10%2F5f811198933b7.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667798707&t=ef87728cb279fb860e584026f85761d2"
              alt=""
            />
          </div>
          <div v-if="!isImg1">
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
          </div>
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
          <div v-if="isImg2">
            <div>
              <i class="el-icon-close close-btn" @click="closeImg2"></i>
            </div>
            <img
              class="img1"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-10-10%2F5f811198933b7.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667798707&t=ef87728cb279fb860e584026f85761d2"
              alt=""
            />
          </div>
          <div v-if="!isImg2">
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
          </div>
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
          <div class="div-img-1" v-if="isImg3">
            <i class="el-icon-close close-btn" @click="closeImg3"></i>
            <img
              class="img2"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-2.tts8.com%2F2020%2F1201%2F99838c6fe6ee4df3a1719a6176626e85.png&refer=http%3A%2F%2Fi-2.tts8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667801344&t=bf7572fe0404049e141e9623c63e5554"
              alt=""
            />
          </div>
          <div v-if="!isImg3">
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
          </div>

          <div class="div-img-1" v-if="isImg4">
            <i class="el-icon-close close-btn" @click="closeImg4"></i>
            <img
              class="img2"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-2.tts8.com%2F2020%2F1201%2F99838c6fe6ee4df3a1719a6176626e85.png&refer=http%3A%2F%2Fi-2.tts8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667801344&t=bf7572fe0404049e141e9623c63e5554"
              alt=""
            />
          </div>
          <div v-if="!isImg4">
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
          </div>

          <div class="div-img-1" v-if="isImg5">
            <i class="el-icon-close close-btn" @click="closeImg5"></i>
            <img
              class="img2"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-2.tts8.com%2F2020%2F1201%2F99838c6fe6ee4df3a1719a6176626e85.png&refer=http%3A%2F%2Fi-2.tts8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667801344&t=bf7572fe0404049e141e9623c63e5554"
              alt=""
            />
          </div>
          <div v-if="!isImg5">
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
          </div>

          <div class="div-img-1" v-if="isImg6">
            <i class="el-icon-close close-btn" @click="closeImg6"></i>
            <img
              class="img2"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-2.tts8.com%2F2020%2F1201%2F99838c6fe6ee4df3a1719a6176626e85.png&refer=http%3A%2F%2Fi-2.tts8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667801344&t=bf7572fe0404049e141e9623c63e5554"
              alt=""
            />
          </div>
          <div v-if="!isImg6">
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
          </div>

          <div class="div-img-1" v-if="isImg7">
            <i class="el-icon-close close-btn" @click="closeImg7"></i>
            <img
              class="img2"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-2.tts8.com%2F2020%2F1201%2F99838c6fe6ee4df3a1719a6176626e85.png&refer=http%3A%2F%2Fi-2.tts8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667801344&t=bf7572fe0404049e141e9623c63e5554"
              alt=""
            />
          </div>
          <div v-if="!isImg7">
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
          </div>

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
          <div class="div-img-1" v-if="isImg8">
            <i class="el-icon-close close-btn" @click="closeImg8"></i>
            <img
              class="img2"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-2.tts8.com%2F2020%2F1201%2F99838c6fe6ee4df3a1719a6176626e85.png&refer=http%3A%2F%2Fi-2.tts8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667801344&t=bf7572fe0404049e141e9623c63e5554"
              alt=""
            />
          </div>
          <div v-if="!isImg8">
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
          </div>

          <div class="div-img-1" v-if="isImg9">
            <i class="el-icon-close close-btn" @click="closeImg9"></i>
            <img
              class="img2"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-2.tts8.com%2F2020%2F1201%2F99838c6fe6ee4df3a1719a6176626e85.png&refer=http%3A%2F%2Fi-2.tts8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667801344&t=bf7572fe0404049e141e9623c63e5554"
              alt=""
            />
          </div>
          <div v-if="!isImg9">
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
          </div>

          <div class="div-img-1" v-if="isImg10">
            <i class="el-icon-close close-btn" @click="closeImg10"></i>
            <img
              class="img2"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-2.tts8.com%2F2020%2F1201%2F99838c6fe6ee4df3a1719a6176626e85.png&refer=http%3A%2F%2Fi-2.tts8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667801344&t=bf7572fe0404049e141e9623c63e5554"
              alt=""
            />
          </div>
          <div v-if="!isImg10">
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
          </div>

          <div class="div-img-1" v-if="isImg11">
            <i class="el-icon-close close-btn" @click="closeImg11"></i>
            <img
              class="img2"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-2.tts8.com%2F2020%2F1201%2F99838c6fe6ee4df3a1719a6176626e85.png&refer=http%3A%2F%2Fi-2.tts8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667801344&t=bf7572fe0404049e141e9623c63e5554"
              alt=""
            />
          </div>
          <div v-if="!isImg11">
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
          </div>

          <div class="div-img-1" v-if="isImg12">
            <i class="el-icon-close close-btn" @click="closeImg12"></i>
            <img
              class="img2"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-2.tts8.com%2F2020%2F1201%2F99838c6fe6ee4df3a1719a6176626e85.png&refer=http%3A%2F%2Fi-2.tts8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667801344&t=bf7572fe0404049e141e9623c63e5554"
              alt=""
            />
          </div>
          <div v-if="!isImg12">
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
          </div>
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
          <div v-if="isImg13">
            <i class="el-icon-close close-btn" @click="closeImg13"></i>
            <img
              class="img3"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.139y.com%2Farticle%2Fimage%2F201706%2F10%2Fe7e9179134.jpg&refer=http%3A%2F%2Fimg.139y.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667804663&t=b4222726b0a38f2e1d010a995e0fba04"
              alt=""
            />
          </div>
          <div v-if="!isImg13">
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
          </div>

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
        <div class="keys special-keys3">
          <span>状态:</span>
        </div>
        <div class="key-values">
          <span class="values">未生效</span>
        </div>
      </div>
      <div class="content-row">
        <div class="keys special-keys2">
          <span>创建时间:</span>
        </div>
        <div class="key-values">
          <span class="values">2022-05-28 16:45:16</span>
        </div>
      </div>
      <div class="content-row">
        <div class="keys special-keys2">
          <span>修改时间:</span>
        </div>
        <div class="key-values">
          <span class="values">2022-05-28 16:45:16</span>
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
  name: "AmendICON",
  data() {
    return {
      imageUrl: "",
      startDate: "2022-06-01",
      finaleDate: "2022-06-01",
      note: "2022年618年中大促活动",
      isImg1: true,
      isImg2: true,
      isImg3: true,
      isImg4: true,
      isImg5: true,
      isImg6: true,
      isImg7: true,
      isImg8: true,
      isImg9: true,
      isImg10: true,
      isImg11: true,
      isImg12: true,
      isImg13: true,
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
    closeImg1() {
      this.isImg1 = false;
    },
    closeImg2() {
      this.isImg2 = false;
    },
    closeImg3() {
      this.isImg3 = false;
    },
    closeImg4() {
      this.isImg4 = false;
    },
    closeImg5() {
      this.isImg5 = false;
    },
    closeImg6() {
      this.isImg6 = false;
    },
    closeImg7() {
      this.isImg7 = false;
    },
    closeImg8() {
      this.isImg8 = false;
    },
    closeImg9() {
      this.isImg9 = false;
    },
    closeImg10() {
      this.isImg10 = false;
    },
    closeImg11() {
      this.isImg11 = false;
    },
    closeImg12() {
      this.isImg12 = false;
    },
    closeImg13() {
      this.isImg13 = false;
    },
  },
};
</script>

<style scoped>
.amend-icon {
  background-color: #f5f5f5;
}
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
}
.back-btn {
  font-size: 13px;
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
.k1 {
  margin-right: 95px;
}
.values {
  font-size: 13px;
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
.img1 {
  width: 375px;
  height: 200px;
}
.img2 {
  width: 90x;
  height: 90px;
}
.img3 {
  width: 375px;
  height: 350px;
}
.div-img-1 {
  margin-left: 10px;
}
.close-btn {
  cursor: pointer;
  position: absolute;
}
</style>