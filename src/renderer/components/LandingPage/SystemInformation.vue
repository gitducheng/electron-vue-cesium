<template>
  <div>
    <div class="title">Information</div>
    <div class="items">
      <div class="item">
        <div class="name">百度地图:</div>
        <router-link to='/mapControll'>map</router-link>
      </div>
      <div class="item">
        <div class="name">Cesium3D地图:</div>
        <router-link to='/cesium'>cesium</router-link>
      </div>
      <div class="item">
        <div class="name">卡通地图:</div>
        <router-link to='/ktMap'>ktMap</router-link>
      </div>
      <div class="item">
        <div class="name">VR地图:</div>
        <div class="value"><a href="https://720yun.com/t/1d62cwauqbf?scene_id=32407">校园VR全景</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        electron: process.versions.electron,
        name: this.$route.name,
        node: process.versions.node,
        path: this.$route.path,
        platform: require('os').platform(),
        vue: require('vue/package.json').version
      }
    }
  }
</script>

<style scoped>
  .title {
    color: #888;
    font-size: 18px;
    font-weight: initial;
    letter-spacing: .25px;
    margin-top: 10px;
  }

  .items { margin-top: 8px; }

  .item {
    display: flex;
    margin-bottom: 6px;
  }

  .item .name {
    color: #6a6a6a;
    margin-right: 6px;
  }

  .item .value {
    color: #35495e;
    font-weight: bold;
  }
</style>
