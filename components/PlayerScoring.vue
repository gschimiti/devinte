<template>
  <view class="player-scoring">
    <text class="player-name">{{ player.name }}</text>
    <LifeScoring :player="player" :lifePoints="player.lifePoints"/>
    <PoisonScoring :player="player" :poisonCounters="player.poisonCounters"/>
  </view>
</template>

<script>
import LifeScoring from './LifeScoring';
import PoisonScoring from './PoisonScoring';

export default {
  components: {
    LifeScoring,
    PoisonScoring
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

.player-name {
  position: absolute;
  top: 56;
  left: 0;
  width: 100%;
  font-family: beleren;
  font-size: 26;
  text-align: center;
}
</style>
