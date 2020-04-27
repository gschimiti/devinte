<template>
  <view>
    <status-bar hidden></status-bar>
    <Scoring/>
    <view class="line"></view>
    <Scoring/>
  </view>
</template>

<script>
import Scoring from './components/Scoring';

export default {
  components: {
    Scoring
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
