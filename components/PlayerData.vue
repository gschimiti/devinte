<template>
  <view class="player-data">
    <view class="player-info">
      <text
        v-if="player.playFirst"
        class="player-info-playfirst"
      >
        Play First
      </text>

      <text class="player-info-name">{{ player.name }}</text>

      <view class="player-info-deckcolor">
        <image
          v-for="color in mtgColors"
          v-if="player.deckColor.includes(color)"
          class="deckcolor"
          :style="{ height: 24, width: 24 }"
          :source="iconsPath[color]"
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
      iconsPath: {
        'W': require('../assets/mtg-icons/mtg-w-filled.png'),
        'U': require('../assets/mtg-icons/mtg-u-filled.png'),
        'B': require('../assets/mtg-icons/mtg-b-filled.png'),
        'R': require('../assets/mtg-icons/mtg-r-filled.png'),
        'G': require('../assets/mtg-icons/mtg-g-filled.png'),
        'C': require('../assets/mtg-icons/mtg-c-filled.png')
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

.player-info-playfirst {
  position: absolute;
  top: 48;
  left: 0;
  padding-top: 4;
  padding-right: 4;
  padding-bottom: 4;
  padding-left: 16;
  font-family: beleren;
  font-size: 12;
  background-color: #333333;
  color: #FFFFFF;
  border-top-left-radius: 0;
  border-top-right-radius: 12;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 12;
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
