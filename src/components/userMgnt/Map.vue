<!-- <template>
    <div :style="{width:'500px',height:'300px'}">
        <div id="container"></div>
    </div>
</template>
<script type="text/javascript"
    src="https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=v7xbWONxqi3QBM51NUTEal1ADCKEUuZ5">
</script>
<script>
export default{
    name:'Map',
    props:{
    },
    created(){
        // this.getMap()
            var map = new BMapGL.Map("container");
            var point = new BMapGL.Point(116.404, 39.915);
            map.centerAndZoom(point, 12);

            var geolocation = new BMapGL.Geolocation();
            geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var mk = new BMapGL.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                // 104.06714547278,30.554924820117
                alert('您的位置：' + r.point.lng + ',' + r.point.lat);

                var myGeo = new BMapGL.Geocoder();
                myGeo.getLocation(new BMapGL.Point(r.point.lng, r.point.lat), function (result) {
                if (result) {
                    alert('您当前所在的城市：' + result.address);
                }
                });
            }
            else {
                alert('failed' + this.getStatus());
            }
            });
    },
    method:{
        getMap(){
            
        }
    }
}
    
</script>
<style scoped>
/* html {
      height: 100%
    } */

    /* body {
      height: 100%;
      margin: 0px;
      padding: 0px
    } */

    #container {
      height: 100%
    }
</style> -->
<template>
    <div class="home">
    <!--创建地图容器-->
      <div id="admap" class="allmap"></div>
    </div>
</template>

  <script>
  import { BMPGL } from "./bmp.js"
  export default {
    name: "Map",
    data() {
      return {
        ak: "v7xbWONxqi3QBM51NUTEal1ADCKEUuZ5", // 百度的地图密钥
        myMap: null
      };
    },
    mounted() {
      this.initMap()
    },
    methods: {
      initMap() {
        // 传入密钥获取地图回调。
        BMPGL(this.ak).then((BMapGL) => {
          // 创建地图实例
          let map = new BMapGL.Map("admap");
          // 创建点坐标 axios => res 获取的初始化定位坐标
          let point = new BMapGL.Point(114.031761, 22.542826)
          // 初始化地图，设置中心点坐标和地图级别
          map.centerAndZoom(point, 19)
          //开启鼠标滚轮缩放
          map.enableScrollWheelZoom(true)
          map.setHeading(64.5)
          //map.setTilt(73)
          // 保存数据
          // this.myMap = map
        })
        .catch((err)=>{
          console.log(err)
        })
      },
    }
  };
  </script>
  <style scoped>
  .admap{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }
  .home{
    width:500px;
    height: 300px;
  }
  </style>
  