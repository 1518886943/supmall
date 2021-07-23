<template>
  <div class="good">
      <good-item v-for="item in goods" :good="item"></good-item>
  </div>
</template>
<script>
import GoodItem from './GoodItem.vue';

export default {
  components: { GoodItem },
  name: "GoodsList",
  props:{
      goods:{
          type:Array,
          default(){
              return []
          }
      }
  }
};
</script>
<style>
.good{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
}
</style>