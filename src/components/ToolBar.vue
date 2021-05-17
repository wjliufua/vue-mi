<template>
  <div class="tool-bar">
    <a href="#">
      <div class="icon">
        <img
          class="mouseDefault"
          src="https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png"
          alt=""
        />
        <img
          class="mouseHover"
          src="https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png"
          alt=""
        />
      </div>
      <span class="text">手机App</span>
      <div class="pop-content">
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png"
          alt=""
        />
        <span>扫码领取新人百元红包</span>
      </div>
    </a>
    <a href="#">
      <div class="icon">
        <img
          class="mouseDefault"
          src="https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png"
          alt=""
        />
        <img
          class="mouseHover"
          src="https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png"
          alt=""
        />
      </div>
      <span class="text">个人中心</span>
    </a>
    <a href="#">
      <div class="icon">
        <img
          class="mouseDefault"
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png"
          alt=""
        />
        <img
          class="mouseHover"
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png"
          alt=""
        />
      </div>
      <span class="text">售后服务</span>
    </a>
    <a href="#">
      <div class="icon">
        <img
          class="mouseDefault"
          src="https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png"
          alt=""
        />
        <img
          class="mouseHover"
          src="https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png"
          alt=""
        />
      </div>
      <span class="text">人工客服</span>
    </a>
    <a href="#">
      <div class="icon">
        <img
          class="mouseDefault"
          src="https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png"
          alt=""
        />
        <img
          class="mouseHover"
          src="https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png"
          alt=""
        />
      </div>
      <span class="text">购物车</span>
    </a>
    <a href="#">
      <div class="icon">
        <img
          class="mouseDefault"
          src="//i1.mifile.cn/f/i/2018/home/totop.png"
          alt=""
        />
        <img
          class="mouseHover"
          src="//i1.mifile.cn/f/i/2018/home/totop_hover.png"
          alt=""
        />
      </div>
      <span class="text">回顶部</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.tool-bar {
  position: fixed;
  bottom: 70px;
  right: 0;
  z-index: 99;
  a {
    position: relative;
    display: block;
    width: 82px;
    height: 90px;
    margin-top: -1px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;
    .icon {
      position: relative;
      width: 30px;
      height: 30px;
      margin: 0 auto 8px;
      padding-top: 18px;
      img {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 30px;
        height: 30px;
        transition: opacity 0.3s;
      }
      .mouseHover {
        display: none;
      }
    }
    .text {
      color: #757575;
    }
    .pop-content {
      position: absolute;
      left: 0;
      top: 0;
      padding: 14px;
      background: #fff;
      border: 1px solid #f5f5f5;
      transition: opacity 0.3s;
      transform: translateZ(0);
      opacity: 0;
      visibility: hidden;
      img {
        display: block;
        width: 100px;
        height: 100px;
        margin: 6px auto;
      }
      span {
        display: block;
        width: 82px;
        margin: 14px auto 0;
        color: #757575;
        text-align: center;
      }
    }
  }
  a:last-child {
    margin-top: 14px;
    border-top: 1px solid #f5f5f5;
  }
  a:hover .mouseHover {
    display: none !important;
  }
  a:hover .pop-content {
    visibility: visible;
  }
}
</style>
