<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
    <router-link to='/'>home</router-link>
    <baidu-map class="map" :center="center" :minZoom="15" :maxZoom="18" :zoom="zoom" @ready="handler">
      <input type="text" v-model="content">
      <button @click="search">搜索</button>
      <!-- <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" @locationSuccess="dwSuccess" :showAddressBar="true" :autoLocation="true"></bm-geolocation> -->
    </baidu-map>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  const {ipcRenderer: ipc} = require('electron');
  export default {
    name: 'mapControll',
    data() {
        return {
            center: {lng: 114.40, lat: 30.49},
            zoom: 3,
            start: '',
            end: '',
            titleName: 'title!!',
            content: '中南民族大学'
        }
    },
    components: { SystemInformation },
    methods: {
        search() { 
          window.location.href = "http://api.map.baidu.com/geocoder?address="+this.content+"&output=html&src=webapp.baidu.openAPIdemo"
          //创建查询对象
          //var geolocation = new BMap.Geolocation();

          //调用getCurrentPosition函数
          //geolocation.getCurrentPosition(function (position) { 
            //console.log(position.latitude,position.longitude)
          //})
          //window.location.href = "http://api.map.baidu.com/marker?location=" + this.center.lat + "," + this.center.lng + "&title=" + this.titleName + "&content=" +this.content+ "&output=html"
        },
        dwSuccess(point, AddressComponent){
          console.log(point)
        },
        handler ({BMap, map}) {
            this.zoom = 15
            // 开启鼠标滚轮缩放      
            map.enableScrollWheelZoom(true);
            //比例尺控件
            var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
            map.addControl(ctrl_sca);
            //缩略图控件
            var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_TOP_LEFT});
            map.addControl(ctrl_ove);
            //地图定位
            // var ctrl_geo = new BMap.GeolocationControl({anchor:BMAP_ANCHOR_TOP_LEFT});
            // map.addControl(ctrl_geo);
            //地图类型控件
            var ctrl_map = new BMap.MapTypeControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT, mapTypes:[BMAP_NORMAL_MAP,BMAP_PERSPECTIVE_MAP,BMAP_SATELLITE_MAP]});
            map.addControl(ctrl_map);
           
        },
        open (link) {
            this.$electron.shell.openExternal(link)
        },
        close () {
            ipc.send('close')
        }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    /* -webkit-app-region: drag; */
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  /* main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; } */

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }

.map {
  width: 100%;
  height: 300px;
}
</style>
