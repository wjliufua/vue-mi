<template>
  <div>
    <div class="header">
      <!-- 顶部横幅广告 -->
      <div class="TopBannerPosters"></div>
      <!-- 顶部导航条 -->
      <div class="site_topbar">
        <div class="container">
          <!-- 顶部导航条左 -->
          <div class="topbar_nav">
            <a href="#">小米商城</a>
            <span>|</span>
            <a href="#">MIUI</a>
            <span>|</span>
            <a href="#">IoT</a>
            <span>|</span>
            <a href="#">云服务</a>
            <span>|</span>
            <a href="#">天星科技</a>
            <span>|</span>
            <a href="#">有品</a>
            <span>|</span>
            <a href="#">小爱开放平台</a>
            <span>|</span>
            <a href="#">企业团购</a>
            <span>|</span>
            <a href="#">资质证照</a>
            <span>|</span>
            <a href="#">协议规则</a>
            <span>|</span>
            <a href="#">下载app</a>
            <span>|</span>
            <a href="#">智能生活</a>
            <span>|</span>
            <a href="#">Select Location</a>
          </div>
          <div class="miniCartTrigger">
            <a href="#">
              <em class="iconfont_cart"></em>
              <em class="cart_text">购物车</em>
              <span>(0)</span>
            </a>
            <div class="cart_list"></div>
          </div>
          <div class="navUserInfo">
            <a href="#">登录</a>
            <span>|</span>
            <a href="#">注册</a>
            <span>|</span>
            <a href="#">消息通知</a>
          </div>
        </div>
      </div>
      <!-- 头部搜索分类 -->
      <div class="site_header">
        <div class="container">
          <div class="header_logo">
            <a href="#"></a>
          </div>
          <!-- 头部分类导航 -->
          <div class="header_nav">
            <ul>
              <!-- 侧边分类导航 -->
              <li class="nav_category">
                <a href="#" class="link_category">
                  <span class="category_text">全部商品分类</span>
                </a>
                <div class="category_list"></div>
              </li>
              <!-- 头部分类导航子项 -->
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">小米手机</span>
                </a>
                <!-- 分类商品推荐列表 -->
                <div class="item_children">
                  <div class="container">
                    <ul>
                      <li>
                        <a href="#">
                          <div class="nav_item_goodsBox">
                            <img
                              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a359e9346e3c6ee8c9d8389e3fd9458.png?thumb=1&w=160&h=110&f=webp&q=90"
                              alt="小米11 Ultra"
                            />
                          </div>
                          <div class="title">小米11 Ultra</div>
                          <div class="price">5999起</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">Redmi 红米</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">电视</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">笔记本</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">家电</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">路由器</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">智能硬件</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">服务</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">社区</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- 头部商品搜索框 -->
          <div class="header_search">
            <form action="#">
              <a href="#" class="search_input">
                <input type="text" placeholder="手机">
              </a>
              <a href="#" class="search_submit">
                <input type="submit" class="iconfont icon-search" value="">
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped></style>
