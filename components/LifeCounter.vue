<template>
  <view class="life-counter">
    <UniteButton
      :buttonStyle="'circle'"
      :icon="'remove'"
      v-on:buttonPressed="lifeDecrease"
    />

    <text class="life-counter-points">{{ player.lifePoints }}</text>

    <UniteButton
      :buttonStyle="'circle'"
      :icon="'add'"
      v-on:buttonPressed="lifeIncrease"
    />
  </view>
</template>

<script>
import UniteButton from './elements/UniteButton';

export default {
  props: [
    'player'
  ],
  components: {
    UniteButton
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
  justify-content: space-evenly;
  height: 30%;
  width: 100%;
}

.life-counter-points {
  width: 88;
  color: #333333;
  font-family: beleren;
  font-size: 44;
  text-align: center;
}
</style>
