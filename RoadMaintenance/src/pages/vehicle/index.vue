<!--
 * @Author: Chen Wenhang
 * @Date: 2021-08-15 15:03:38
 * @LastEditTime: 2021-08-15 23:40:08
 * @Description: 
 * @Github: https://github.com/chenwenhang
-->
<template>
  <page header-title="车辆作业">
    <view class="vehicle">
      <panel
        :title="item.location"
        v-for="item in vehicleData"
        :key="item.location"
      >
        <example-item v-for="item in item.vehicles" :key="item.name">
          <picker mode="time" :value="item.timesel">
            <view class="demo-list-item">
              <view class="demo-list-item__label">{{ item.name }}</view>
              <view class="demo-list-item__value">
                {{ item.timesel }}
              </view>
            </view>
          </picker>
        </example-item>
      </panel>
    </view>
  </page>
</template>

<script>
import { ref } from "vue";
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import Taro from "@tarojs/taro";
import "./index.scss";

export default defineComponent({
  setup() {
    const vehicleData = [
      {
        location: "诚信大道",
        vehicles: [
          {
            name: "洒水车",
            timesel: "14:00",
          },
          {
            name: "垃圾收集车",
            timesel: "15:00",
          },
          {
            name: "路面清理车",
            timesel: "16:00",
          },
        ],
      },
      {
        location: "吉印大道",
        vehicles: [
          {
            name: "洒水车",
            timesel: "14:00",
          },
          {
            name: "垃圾收集车",
            timesel: "15:00",
          },
          {
            name: "路面清理车",
            timesel: "16:00",
          },
        ],
      },
    ];
    return {
      vehicleData,
    };
  },
});
</script>
