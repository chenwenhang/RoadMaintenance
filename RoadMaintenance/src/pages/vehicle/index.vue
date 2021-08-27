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
        v-for="(item, index) in vehicleData"
        :key="item.location"
      >
        <example-item v-for="(item, idx) in item.vehicles" :key="idx">
          <picker mode="time" :value="item.timesel">
            <view class="demo-list-item">
              <view class="demo-list-item__label">{{ item.name }}</view>
              <view class="demo-list-item__value">
                {{ item.timesel }}
              </view>
              <AtIcon value="close" size="10" color="#F00"></AtIcon>
            </view>
          </picker>
        </example-item>
        <view>
          <AtButton type="secondary" size="small" v-on:click="addVehicle(index)"
            >添加作业车辆</AtButton
          >
        </view>
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
    const state = reactive({
      vehicleData: [
        {
          location: "诚信大道 - 防护等级：3级",
          vehicles: [
            {
              name: "路面洒水车",
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
          location: "吉印大道 - 防护等级：2级",
          vehicles: [
            {
              name: "路面洒水车",
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
      ],
    });
    return {
      ...toRefs(state),
    };
  },
  methods: {
    deleteVehicle(index) {
      console.log(index);
    },
    addVehicle(index) {
      // console.log(index);
      // console.log(this.vehicleData[index].vehicles);

      this.vehicleData[index].vehicles.push({
        name: "路面洒水车",
        timesel: "14:00",
      });
      console.log(this.vehicleData[index].vehicles);
    },
  },
});
</script>
