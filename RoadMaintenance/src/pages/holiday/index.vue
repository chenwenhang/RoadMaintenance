<template>
  <page header-title="请假申请">
    <panel title="选择日期">
      <at-calendar :onSelectDate="clickDate" minDate="2021/8/25" />
    </panel>
    <at-modal
      :isOpened="isOpened"
      title="标题"
      cancelText="取消"
      confirmText="确定"
      :content="`确定提交请假申请吗？`"
      @confirm="closeModalConfirm('成功提交请假申请！')"
    />
  </page>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import Taro from "@tarojs/taro";
import "./index.scss";

export default defineComponent({
  setup() {
    const state = reactive({
      isOpened: false,
    });
    function closeModalConfirm(msg) {
      state[`isOpened`] = false;
      Taro.showToast({
        icon: "none",
        title: msg,
      });
    }
    return {
      ...toRefs(state),
      closeModalConfirm,
    };
  },
  methods: {
    clickDate() {
      this.isOpened = true;
    },
  },
});
</script>
