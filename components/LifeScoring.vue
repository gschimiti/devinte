<template>
  <view class="life-scoring">
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

    <text class="scoring-score">{{ player.lifePoints }}</text>

    <touchable-opacity v-bind:onPress="scoreIncrease">
      <view class="scoring-button scoring-button-increase">
        <image
          class="scoring-button-image"
          :style="{width: 16, height: 16}"
          :source="require('../assets/icons/plus.png')"
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
  methods: {
    scoreDecrease() {
      this.player.lifePoints -= 1;
    },
    scoreIncrease() {
      this.player.lifePoints += 1;
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

.life-scoring {
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
}

.scoring-score {
  color: #333333;
  font-family: beleren;
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
