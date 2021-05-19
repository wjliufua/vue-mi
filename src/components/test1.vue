<template>
  <div>
    <div :class="['test1', { test2: isTest2 }]"></div>
    <a class="aaa" @mouseenter="divIsShow(true)" @mouseleave="divIsShow(false)"
      >移动</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTest2: false
    }
  },
  methods: {
    divIsShow(isShow) {
      this.isTest2 = isShow
    }
  }
}
</script>

<style lang="less" scoped>
.test1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 0;
  opacity: 0;
  transition: all 0.5s;
  background-color: #000;
}

.test2 {
  height: 200px;
  opacity: 1;
}

.aaa {
  display: block;
  margin: 0 auto;
  // padding: 10px 20px;
  height: 20px;
  line-height: 20px;
  width: 30px;
  color: #fff;
  background-color: #000;
}
</style>
