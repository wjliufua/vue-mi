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
                <a
                  :href="(index = true ? 'javascript:;' : '#')"
                  class="link_category"
                  :class="(index = true ? 'mouse_default' : '')"
                >
                  <span class="category_text" v-show="index">全部商品分类</span>
                  <div class="side_category">
                    <ul>
                      <li>
                        <a href="#" :mousemove="changeSideBox()">
                          手机 电话卡
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                        <div class="category_box">
                          <!-- list1 -->
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米MIX FOLD"
                                />
                                <span>小米MIX FOLD</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1241b5a94ba1739e85f72d46592af0e.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米11 Ultra"
                                />
                                <span>小米11 Ultra</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cf44dfe89111cb35e1a2211481ff546.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米11 Pro"
                                />
                                <span>小米11 Pro</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72bd70039670d29610569421f753fcb6.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米11 青春"
                                />
                                <span>小米11 青春</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c89e7b3a3495acaa0a4df271d9da59ea.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米10S"
                                />
                                <span>小米10S</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米11"
                                />
                                <span>小米11</span>
                              </a>
                            </li>
                          </ul>
                          <!-- list2 -->
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米10"
                                />
                                <span>小米10</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0dfda044e0ddcfb3ef63e7e2b87daea3.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="黑鲨4 Pro"
                                />
                                <span>黑鲨4 Pro</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="黑鲨4"
                                />
                                <span>黑鲨4</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69a0df49cff71107977bbe3b48af15fa.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi K30S 至尊纪念版"
                                />
                                <span>Redmi K30S 至尊纪念版</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg?thumb=1&w=40&h=40"
                                  alt="小米云服务"
                                />
                                <span>小米云服务</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e5aa3cab478f5eeba1c7d4cf25cba9a.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="K40 Pro 系列"
                                />
                                <span>K40 Pro 系列</span>
                              </a>
                            </li>
                          </ul>
                          <!-- list3 -->
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92fdd051100722d25323e9bd188befc5.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi K40"
                                />
                                <span>Redmi K40</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0803dc7125ffa3447b04b1ae60f57a2b.jpg?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi K30 至尊纪念版"
                                />
                                <span>Redmi K30 至尊纪念版</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f774ef8332f2204a7c8fbf1b92f29e8a.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 10X 5G"
                                />
                                <span>Redmi 10X 5G</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi Note 9 Pro"
                                />
                                <span>Redmi Note 9 Pro</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/970c6b287eb89620f5ee8e2b347f6f3d.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi Note 9 5G"
                                />
                                <span>Redmi Note 9 5G</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/947721c8bc4a4ecc3bca17237ee64dea.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi Note 9  4G"
                                />
                                <span>Redmi Note 9 4G</span>
                              </a>
                            </li>
                          </ul>
                          <!-- list4 -->
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cba27e53367b74271a38a4515a692816.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi Note 8 Pro"
                                />
                                <span>Redmi Note 8 Pro</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/84e19ece0125992449a6276e2ba333e9.png?thumb=1&w=40&h=40"
                                  alt="手机上门维修"
                                />
                                <span>手机上门维修</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 9"
                                />
                                <span>Redmi 9</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 9A"
                                />
                                <span>Redmi 9A</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47057d897ee2c05c9215e059e1308dc6.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 8"
                                />
                                <span>Redmi 8</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 8A"
                                />
                                <span>Redmi 8A</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          电视 盒子
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          笔记本 显示器
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          家电 插线板
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          出行 穿戴
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          智能 路由器
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          电源 配件
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          健康 儿童
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          耳机 音箱
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          生活 箱包
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                    </ul>
                  </div>
                </a>
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
            <form action="#" class="search_form">
              <a href="#" class="search_input">
                <input type="text" placeholder="手机" />
              </a>
              <a href="#" class="search_submit">
                <!-- <input type="submit" class="iconfont icon-youjiantou1" value="" /> -->
                <button type="submit" class="iconfont"></button>
              </a>
            </form>
          </div>
        </div>
        <div class="navMenu">
          <div class="container">
            <ul>
              <li>
                <a href="#">
                  <div class="menu_img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85e44ea2405ff8414148bbde7446b137.png?thumb=1&w=160&h=110&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <div class="text">小米MIX FOLD</div>
                  <p class="price">9999元起</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu_img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a359e9346e3c6ee8c9d8389e3fd9458.png?thumb=1&w=160&h=110&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <div class="text">小米11 Ultra</div>
                  <p class="price">5999元起</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu_img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1c45eadcedeb27b1cafca0359422da9.png?thumb=1&w=160&h=110&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <div class="text">小米11 Pro</div>
                  <p class="price">4999元起</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu_img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56e3379b5422cb06e5c8a0c546445606.png?thumb=1&w=160&h=110&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <div class="text">小米11 青春版</div>
                  <p class="price">2299元起</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu_img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f9149ef3ba2c9025a4a21c98ae793808.png?thumb=1&w=160&h=110&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <div class="text">小米10S</div>
                  <p class="price">3299元起</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu_img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/963679eaf3937351e154600ab3448460.png?thumb=1&w=160&h=110&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <div class="text">小米11</div>
                  <p class="price">3999元起</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 页面是否处于首页
      index: false
    }
  },
  created() {
    this.navCategoryShow()
  },
  methods: {
    // 全部分类商品文本是否显示
    navCategoryShow() {
      this.$route.path === '/' ? (this.index = true) : (this.index = false)
    },
    // 控制侧边商品分类盒子展开
    changeSideBox() {
      console.log(123)
    }
  }
}
</script>
<style lang="less" scoped></style>
