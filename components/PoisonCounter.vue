<template>
  <view
    class="poison-counter"
    v-bind:style="{ marginBottom: !poisonDecreaseButton ? 32 : 0 }"
  >
    <UniteButton
      :buttonColor="'transparent'"
      :buttonSize="'small'"
      :icon="'chevron-up'"
      v-on:buttonPressed="poisonIncrease"
    />

    <view class="poison-counter-data">
      <image
        :style="{ width: 20, height: 20 }"
        :source="require('../assets/poison.png')"
      />

      <text class="poison-counters">{{ player.poisonCounters }}</text>
    </view>

    <UniteButton
      v-bind:class="{ hidden: !poisonDecreaseButton }"
      :buttonColor="'transparent'"
      :buttonSize="'small'"
      :icon="'chevron-down'"
      v-on:buttonPressed="poisonDecrease"
    />
  </view>
</template>

<script>
import UniteButton from './elements/UniteButton';

export default {
  props: [
    'player'
  ],
  data() {
    return {
      poisonDecreaseButton: false
    }
  },
  components: {
    UniteButton
  },
  methods: {
    poisonIncrease() {
      this.player.poisonCounters += 1;

      if (!this.poisonDecreaseButton)
        this.poisonDecreaseButton = true;
    },
    poisonDecrease() {
      if (!this.player.poisonCounters) {
        this.poisonDecreaseButton = false;
      } else {
        this.player.poisonCounters -= 1;
      }
    },
  },
  updated() {
    if (!this.player.poisonCounters)
      this.poisonDecreaseButton = false;
  }
}
</script>

<style>
.poison-counter {
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 35%;
  width: 100%;
}

.poison-counter-data {
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.poison-counters {
  width: 24;
  margin-left: 8;
  font-family: beleren;
  font-size: 20;
  text-align: center;
}

.hidden { display: none; }
</style>
