<template>
  <view
    class="poison-scoring"
    v-bind:style="{marginBottom: !poisonDecreaseButton ? 32 : 0}"
  >
    <touchable-opacity
      v-bind:onPress="poisonIncrease"
    >
      <view class="poison-scoring-button">
        <image
          class="scoring-button-image"
          :style="{width: 26, height: 26}"
          :source="require('../assets/icons/up.png')"
        />
      </view>
    </touchable-opacity>

    <view class="poison-scoring-data">
      <image
        class="poison-scoring-icon"
        :style="{width: 20, height: 20}"
        :source="require('../assets/icons/skull.png')"
      />

      <text class="poison-scoring-counters">{{ player.poisonCounters }}</text>
    </view>

    <touchable-opacity
      v-bind:class="{hidden: !poisonDecreaseButton}"
      v-bind:onPress="poisonDecrease"
    >
      <view class="poison-scoring-button">
        <image
          class="scoring-button-image"
          :style="{width: 26, height: 26}"
          :source="require('../assets/icons/down.png')"
        />
      </view>
    </touchable-opacity>
  </view>
</template>

<script>
export default {
  props: [
    'player'
  ],
  data() {
    return {
      poisonDecreaseButton: false
    }
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
  updated: function() {
    if (!this.player.poisonCounters)
      this.poisonDecreaseButton = false;
  }
}
</script>

<style>
.poison-scoring {
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  left: 0;
  bottom: 40;
}

.poison-scoring-button {
  align-items: center;
  justify-content: center;
  height: 32;
  width: 32;
}

.poison-scoring-data {
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.poison-scoring-counters {
  width: 24;
  margin-left: 8;
  font-family: beleren;
  font-size: 20;
  text-align: center;
}

.hidden {
  display: none;
}
</style>
