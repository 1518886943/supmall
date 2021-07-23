<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script scoped>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: {
        type: Object,
        default() {
          return null;
        },
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true,
      });
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }, 200);
  },
  methods: {
    Refresh() {
      //this.scroll.Refresh()
      console.log(this.scroll);
    },
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    //上拉加载更多
    finishPullUp() {
      //this.scroll.finishPullUp();
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 2000);
    },
  },
};
</script>
<style scoped>
</style>
