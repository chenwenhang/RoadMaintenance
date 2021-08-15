<!--
 * @Author: Chen Wenhang
 * @Date: 2021-08-15 14:57:52
 * @LastEditTime: 2021-08-15 22:21:30
 * @Description: 
 * @Github: https://github.com/chenwenhang
-->
<template>
  <page header-title="道路情况">
    <view class="road">
      <map
        id="map"
        style="width: 100%; height: 600px"
        longitude="118.8399"
        latitude="31.95263"
        scale="13"
        :markers="markers"
        :show-location="true"
        :setting="setting"
        @regionchange="regionchange"
        @markertap="markertap"
        @tap="tap"
      />
    </view>
  </page>
</template>

<script>
import { ref } from "vue";
import "./index.scss";
import chacha from "@/assets/images/chacha.jpg";

export default {
  setup() {
    return {
      setting: {
        skew: 0,
        rotate: 0,
        showLocation: true,
        showScale: true,
        subKey: "",
        layerStyle: 1,
        enableZoom: true,
        enableScroll: true,
        enableRotate: false,
        showCompass: false,
        enable3D: false,
        enableOverlooking: false,
        enableSatellite: false,
        enableTraffic: true,
        enablePoi: false,
        enableBuilding: false,
      },
      markers: [
        {
          iconPath:
            "https://avatars2.githubusercontent.com/u/1782542?s=460&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4",
          id: 0,
          longitude: 118.8259,
          latitude: 31.952,
          width: 35,
          height: 35,
        },
        {
          iconPath:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201912%2F03%2F20191203213916_agxzn.thumb.1000_0.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631612622&t=36803e0db0408a1fe511ea1376df892f",
          id: 1,
          longitude: 118.8659,
          latitude: 31.94003,
          width: 35,
          height: 35,
        },
        {
          iconPath: chacha,
          id: 2,
          longitude: 118.84184181690216,
          latitude: 31.931243175239327,
          width: 35,
          height: 35,
        },
      ],
    };
  },
  methods: {
    regionchange(e) {
      // console.log(e.type);
    },
    markertap(e) {
      // console.log("markertap:", e.detail);
    },
    tap(e) {
      console.log(e.detail);
    },
  },
};
</script>
