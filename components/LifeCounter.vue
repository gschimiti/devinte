<template>
  <view class="life-counter">
    <MTGButton
      :custom="{
        type: 'icon',
        style: 'circle',
        size: 'big',
        icon: 'remove',
        propagate: true
      }"
      v-on:buttonPressed="lifeDecrease"
    />

    <text class="life-counter-points">{{ player.lifePoints }}</text>

    <MTGButton
      :custom="{
        type: 'icon',
        style: 'circle',
        size: 'big',
        icon: 'add',
        propagate: true
      }"
      v-on:buttonPressed="lifeIncrease"
    />
  </view>
</template>

<script>
import MTGButton from './elements/MTGButton';

export default {
  props: [
    'player'
  ],
  components: {
    MTGButton
  },
  methods: {
    lifeDecrease() {
      this.player.lifePoints -= 1;
    },
    lifeIncrease() {
      this.player.lifePoints += 1;
    }
  }
}
</script>

<style>
.life-counter {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 30%;
  width: 100%;
}

.life-counter-points {
  width: 120;
  margin-left: 32;
  margin-right: 32;
  color: #333333;
  font-family: beleren;
  font-size: 44;
  text-align: center;
}
</style>
