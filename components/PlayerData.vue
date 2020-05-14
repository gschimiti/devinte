<template>
  <view class="player-data">
    <view class="player-info">
      <text class="player-info-name">{{ player.name }}</text>

      <view class="player-info-deckcolor">
        <image
          v-for="color in mtgColors"
          v-if="player.deckColor.includes(color)"
          class="deckcolor"
          :style="{ height: 24, width: 24 }"
          :source="imagePath[color]"
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
  ],
  data () {
    return {
      mtgColors: [ 'W', 'U', 'B', 'R', 'G', 'C' ],
      imagePath: {
        'W': require('../assets/w-filled.png'),
        'U': require('../assets/u-filled.png'),
        'B': require('../assets/b-filled.png'),
        'R': require('../assets/r-filled.png'),
        'G': require('../assets/g-filled.png'),
        'C': require('../assets/c-filled.png')
      }
    }
  }
}
</script>

<style>
.player-data {
  display: flex;
  height: 50%;
  width: 100%;
}

.player-info {
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 35%;
  width: 100%;
}

.player-info-name {
  width: 100%;
  font-family: beleren;
  font-size: 26;
  text-align: center;
  color: #333333;
}

.player-info-deckcolor {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 24;
  width: 100%;
  margin-top: 16;
}

.deckcolor {
  margin-left: 4;
  margin-right: 4;
}
</style>
