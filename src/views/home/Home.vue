<template>
  <div id="home">
    <nav-bar class="hove-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      class="tbl-control"
      @tabClick="tabClick"
      :titles="['流行', '新款', '精选']"
    ></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    <ul>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
      <li>123123123</li>
    </ul>
  </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import { getHomeMultidata, getGooddata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentTagType: "pop",
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGood("pop");
    this.getHomeGood("new");
    this.getHomeGood("sell");
  },
  methods: {
    //流行tab切换
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentTagType = "pop";
          break;
        case 1:
          this.currentTagType = "new";
          break;
        case 2:
          this.currentTagType = "sell";
          break;
      }
    },

    //网络监听
    getHomeMultidata() {
      //函数函数一旦执行完毕 会被内存回收释放 局部变量
      //函数调用->压入函数栈（保存函数调用过程中产生的所有变量）
      //函数调用结束 -> 弹出函数变量（释放函数中所有变量）
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGood(type) {
      const page = this.goods[type].page + 1;
      getGooddata(type, page).then((res) => {
        console.log(res);
        if (res.data.list != null) {
          //会将数组进行结构
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        }
      });
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentTagType].list;
    },
  },
};
</script>
<style>
#home {
  padding-top: 44px;
  overflow: auto;
}
.hove-nav {
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tbl-control {
  position: static;
  top: 44px;
}
</style>