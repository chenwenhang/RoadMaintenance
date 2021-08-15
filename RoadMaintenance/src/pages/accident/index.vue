<!--
 * @Author: Chen Wenhang
 * @Date: 2021-08-15 15:04:28
 * @LastEditTime: 2021-08-15 23:00:09
 * @Description: 
 * @Github: https://github.com/chenwenhang
-->
<template>
  <page header-title="突发状况">
    <view class="accident">
      <AtList>
        <AtListItem
          v-for="item in accidentData"
          :key="item.name"
          :title="item.name"
          arrow="right"
          :iconInfo="{ size: 25, color: '#FF0000', value: 'alert-circle', }"
          @click="handleClick"
        />
      </AtList>
    </view>
  </page>
</template>

<script>
import { ref } from "vue";
import "./index.scss";

export default {
  setup() {
    const accidentData = ref([
      {
        name: "吉印大道南段-垃圾堆砌",
        type: "warn"
      },
      {
        name: "长亭街南段-路面有积石",
        type: "warn"
      },
      {
        name: "诚信大道-洒水车发生故障",
        type: "warn"
      },
    ]);
    return {
      accidentData
    };
  },
};
</script>
