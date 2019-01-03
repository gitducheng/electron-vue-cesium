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
        //创建viewer实例
        this.viewer = new Cesium.Viewer('cesiumContainer');
        const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        handler.setInputAction( click => {
            this.viewer.entities.add({
                position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
                billboard :{
                    image : '../static/imgs/logo.png',
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

