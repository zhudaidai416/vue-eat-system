<template>
  <div :style="{width:'500px',height:'300px'}">
    <div id="container1"></div> 
  </div>
</template>

<script>
// import { BMPGL } from "./bmp.js";

export default {
  name: "container1",
  data() {
    return {};
  },
  method:{
    initMap(){
        let map = new window.BMapGL.Map("container1");
        let point = new window.BMapGL.Point(116.404, 39.915);
        map.centerAndZoom(point, 15); 
    }
  },
  updated(){
    this.initMap()
  },
};
</script>
<style scoped>
    html{height:100%}    
    body{height:100%;margin:0px;padding:0px}    
    #container{height:100%}    
</style> 