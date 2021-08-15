<!--
 * @Author: Chen Wenhang
 * @Date: 2021-08-15 15:04:07
 * @LastEditTime: 2021-08-15 23:42:53
 * @Description: 
 * @Github: https://github.com/chenwenhang
-->
<template>
  <page header-title="人员管理">
    <panel title="选择日期">
      <AtCalendar />
    </panel>

    <panel title="值班安排">
      <AtForm v-for="item in personData" :key="item.type">
        <AtInput
          name="值班人员"
          :title="item.location"
          type="text"
          :value="item.person"
        />
      </AtForm>
    </panel>
  </page>
</template>

<script>
import { defineComponent, ref } from "vue";
import "./index.scss";

export default defineComponent({
  setup() {
    const personData = ref([
      {
        location: "吉印大道南",
        person: "Echo",
      },
      {
        location: "长亭街北",
        person: "Derrick",
      },
      {
        location: "长亭街南",
        person: "Betty",
      },
      {
        location: "吉印大道北",
        person: "Stephen",
      },
    ]);
    return {
      personData,
    };
  },
});
</script>
