<template>
  <view v-if="isLoaded">
    <PlayerScoring :player="players[1]"/>
    <view class="line"></view>
    <PlayerScoring :player="players[0]"/>
    <ActionsMenu :players="players"/>
  </view>
</template>

<script>
import * as Font from 'expo-font';

import PlayerScoring from './components/PlayerScoring';
import ActionsMenu from './components/ActionsMenu';

export default {
  components: {
    PlayerScoring,
    ActionsMenu
  },
  data() {
    return {
      isLoaded: false,
      players: [
        {name: 'You', lifePoints: 20, poisonCounters: 0},
        {name: 'Opponent', lifePoints: 20, poisonCounters: 0}
      ]
    }
  },
  async mounted() {
    await Font.loadAsync({
      'beleren': require('./assets/fonts/Beleren-Bold.ttf')
    });

    this.isLoaded = true;
  }
}
</script>

<style>
.line {
  height: 1;
  width: 100%;
  background-color: #ADADAD;
}
</style>
