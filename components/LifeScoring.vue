<template>
  <view class="scoring">
    <view class="scoring-background">
      <image
        :style="{height: 128, width: 128}"
        :source="require('../assets/mtg.png')"
      />
    </view>

    <touchable-opacity v-bind:onPress="scoreDecrease">
      <view class="scoring-button scoring-button-decrease">
        <image
          class="scoring-button-image"
          :style="{width: 16, height: 16}"
          :source="require('../assets/icons/minus.png')"
        />
      </view>
    </touchable-opacity>

    <text class="scoring-score">{{ lifePoints }}</text>

    <touchable-opacity v-bind:onPress="scoreIncrease">
      <view class="scoring-button scoring-button-increase">
        <image
          class="scoring-button-image"
          :style="{width: 16, height: 16}"
          :source="require('../assets/icons/plus.png')"
        />
      </view>
    </touchable-opacity>

    <PoisonScoring/>
  </view>
</template>

<script>
import PoisonScoring from './PoisonScoring';

export default {
  components: {
    PoisonScoring
  },
  data() {
    return {
      lifePoints: 20
    }
  },
  methods: {
    scoreDecrease() {
      this.lifePoints -= 1;
    },
    scoreIncrease() {
      this.lifePoints += 1;
    }
  }
}
</script>

<style>
.scoring-background {
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 0;
}

.scoring {
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 50%;
}

.scoring-score {
  color: #333333;
  font-size: 44;
  width: 88;
  text-align: center;
}

.scoring-button {
  align-items: center;
  justify-content: center;
  border-radius: 24;
  height: 48;
  width: 48;
  background-color: #333333;
}
</style>
