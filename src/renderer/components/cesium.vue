<template>
    <div id="wrapper">
        <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
        <router-link to='/'>home</router-link>
        <div id="cesiumContainer">
            <div class="menu">
                <input type="checkbox" value="1">
                <input type="checkbox" value="2">
            </div>
        </div>
    </div>
</template>

<script>
import Cesium from "cesium/Source/Cesium";
import buildModuleUrl from "cesium/Source/Core/buildModuleUrl"
import "cesium/Source/Widgets/widgets.css";

export default {
    name: 'cesium',
    data() {
        return {
            'viewer': null
        }
    },
    mounted:function () {
        //设置静态资源目录
        buildModuleUrl.setBaseUrl('../static/Cesium/')
        //Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwOWJhNjJhYS1iZWIwLTQzNWEtYTY1NS01NTIwNjgzNjc5ZjMiLCJpZCI6ODIwOSwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU1MTQyODk0N30.sx4gUIpMAfFrGXN2R_4gDALS_wsyb4z79hn3TIbAj9Y';
        //创建viewer实例
        this.viewer = new Cesium.Viewer('cesiumContainer', {
            animation: false,  //是否显示动画控件
            baseLayerPicker: false, //是否显示图层选择控件
            geocoder: true, //是否显示地名查找控件
            timeline: false, //是否显示时间线控件
            sceneModePicker: false, //是否显示投影方式控件
            navigationHelpButton: false, //是否显示帮助信息控件
            infoBox: true,  //是否显示点击要素之后显示的信息
            // imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
            //     url:'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
            //     layer: "tdtBasicLayer",
            //     style: "default",
            //     format: "image/jpeg",
            //     tileMatrixSetID: "GoogleMapsCompatible",
            //     show: false
            // })
            imageryProvider:new Cesium.UrlTemplateImageryProvider({
                url:"http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali"
            })

        });

        const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        handler.setInputAction( cartesian => {
            console.log(cartesian);
            this.viewer.entities.add({
                position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
                billboard :{
                    image : '../static/imgs/gugong.jpg',
                    width: 200,
                    height: 100
                }
            });
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK );
    },
    created() {
        
    },
    methods: {
            
    },
}
</script>

<style scoped>
#cesiumContainer{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
}
.menu{
    position: absolute;
    top: 5px;
    z-index: 99;
}
</style>

