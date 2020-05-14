<template>
  <view class="player-scoring">
    <view class="player-settings">
      <text class="player-name">{{ player.name }}</text>

      <view class="player-deckcolor">
        <image
          v-if="player.deckColor.includes('W')"
          class="deckcolor"
          :style="{width: 24, height: 24}"
          :source="require('../assets/w-filled.png')"
        />

        <image
          v-if="player.deckColor.includes('U')"
          class="deckcolor"
          :style="{width: 24, height: 24}"
          :source="require('../assets/u-filled.png')"
        />

        <image
          v-if="player.deckColor.includes('B')"
          class="deckcolor"
          :style="{width: 24, height: 24}"
          :source="require('../assets/b-filled.png')"
        />

        <image
          v-if="player.deckColor.includes('R')"
          class="deckcolor"
          :style="{width: 24, height: 24}"
          :source="require('../assets/r-filled.png')"
        />

        <image
          v-if="player.deckColor.includes('G')"
          class="deckcolor"
          :style="{width: 24, height: 24}"
          :source="require('../assets/g-filled.png')"
        />

        <image
          v-if="player.deckColor.includes('C')"
          class="deckcolor"
          :style="{width: 24, height: 24}"
          :source="require('../assets/c-filled.png')"
        />
      </view>
    </view>

    <LifeCounter :player="player" :lifePoints="player.lifePoints"/>
    <PoisonCounter :player="player" :poisonCounters="player.poisonCounters"/>
  </view>
</template>

<script>
import LifeCounter from './LifeCounter';
import PoisonCounter from './PoisonCounter';

export default {
  components: {
    LifeCounter,
    PoisonCounter
  },
  props: [
    'player'
  ]
}
</script>

<style>
.player-scoring {
  display: flex;
  width: 100%;
  height: 50%;
}

.player-settings {
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 35%;
  width: 100%;
}

.player-name {
  width: 100%;
  font-family: beleren;
  font-size: 26;
  text-align: center;
  color: #333333;
}

.player-deckcolor {
  flex-direction: row;
  width: 100%;
  height: 24;
  margin-top: 16;
  align-items: center;
  justify-content: center;
}

.deckcolor {
  margin-left: 4;
  margin-right: 4;
}
</style>
