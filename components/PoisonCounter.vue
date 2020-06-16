<template>
  <view class="poison-counter">
    <MTGButton
      :custom="{
        type: 'icon',
        style: 'circle',
        size: 'small',
        icon: poisonDecreaseDisabled ? 'remove-disabled' : 'remove',
        propagate: true,
        disabled: poisonDecreaseDisabled
      }"
      v-on:buttonPressed="poisonDecrease"
    />

    <view class="poison-counter-data">
      <view :style="{ width: 20, height: 20 }">
        <SVGImage name="poison"/>
      </view>

      <text class="poison-counters">{{ player.poisonCounters }}</text>
    </view>

    <MTGButton
      :custom="{
        type: 'icon',
        style: 'circle',
        size: 'small',
        icon: 'add',
        propagate: true
      }"
      v-on:buttonPressed="poisonIncrease"
    />
  </view>
</template>

<script>
import SVGImage from '../assets/mtg-icons';
import MTGButton from './elements/MTGButton';

export default {
  props: [
    'player'
  ],
  data() {
    return {
      poisonDecreaseDisabled: true
    }
  },
  components: {
    MTGButton,
    SVGImage
  },
  methods: {
    poisonIncrease() {
      this.player.poisonCounters += 1;

      if (this.poisonDecreaseDisabled)
        this.poisonDecreaseDisabled = false;
    },
    poisonDecrease() {
      if (!this.player.poisonCounters) {
        this.poisonDecreaseDisabled = true;
      } else {
        this.player.poisonCounters -= 1;
      }
    },
  },
  updated() {
    if (!this.player.poisonCounters)
      this.poisonDecreaseDisabled = true;
  }
}
</script>

<style>
.poison-counter {
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
}

.poison-counter-data {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 32;
  margin-left: 16;
  margin-right: 16;
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
