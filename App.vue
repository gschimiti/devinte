<template>
  <view>
    <LifeScoring/>
    <view class="line"></view>
    <LifeScoring/>
  </view>
</template>

<script>
import LifeScoring from './components/LifeScoring';

export default {
  components: {
    LifeScoring
  }
}
</script>

<style>
.line {
  height: 1;
  width: 100%;
  background-color: #ADADAD;
}
</style>
