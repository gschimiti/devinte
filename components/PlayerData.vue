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
        <MTGTag
          v-for="color in mtgColors"
          v-if="player.deckColor.includes(color)"
          class="deckcolor"
          :custom="{
            keyword: color,
            size: 'small',
            color: player.deckColor.includes(color) ? color : null,
            icon: color
          }"
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
import MTGTag from './elements/MTGTag';

export default {
  components: {
    LifeCounter,
    PoisonCounter,
    MTGTag
  },
  props: [
    'player'
  ],
  data () {
    return {
      mtgColors: [ 'white', 'blue', 'black', 'red', 'green', 'colorless' ],
    }
  }
}
</script>

<style>
.player-data {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
}

.player-info {
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
}

.player-info-playfirst {
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 4;
  padding-right: 4;
  padding-bottom: 4;
  padding-left: 16;
  font-family: beleren;
  font-size: 12;
  background-color: #322FFE;
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
