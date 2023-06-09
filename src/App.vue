<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
.background-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  width: 375px;
  height: 200px;
  background-color: #f5f5f5;
}
.background-uploader .el-upload:hover {
  border-color: #409eff;
}
i.background-uploader-icon {
  font-size: 18px;
  color: #8c939d;
  line-height: 200px;
}
.background {
  width: 375px;
  height: 200px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  width: 90px;
  height: 90px;
  background-color: #f5f5f5;
  margin-left: 10px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
i.avatar-uploader-icon {
  font-size: 18px;
  color: #8c939d;
  width: 90px;
  height: 90px;
  line-height: 90px;
  text-align: center;
}
.avatar {
  width: 90px;
  height: 90px;
  display: block;
}
.effect-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  width: 375px;
  height: 350px;
  background-color: #f5f5f5;
  margin-left: 10px;
}
.effect-uploader .el-upload:hover {
  border-color: #409eff;
}
i.effect-uploader-icon {
  font-size: 18px;
  color: #8c939d;
  width: 375px;
  height: 350px;
  line-height: 350px;
  text-align: center;
}
.effect {
  width: 375px;
  height: 350px;
  display: block;
}
</style>
