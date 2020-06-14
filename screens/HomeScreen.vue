<template>
  <view v-if="isLoaded">
    <PlayerData :player="players[1]"/>
    <PlayerData :player="players[0]"/>

    <ActionsMenu
      :navigation="this.props.navigation"
      :options="gameOptions"
      :players="players"
      v-on:settingsOpen="settingsActive = true"
      v-on:dicesOpen="dicesActive = true"
    />
  </view>
</template>

<script>
import * as Font from 'expo-font';
import PlayerData from '../components/PlayerData';
import ActionsMenu from '../components/ActionsMenu';

export default {
  components: {
    PlayerData,
    ActionsMenu
  },
  data() {
    return {
      isLoaded: false,
      gameOptions: {
        commanderMode: false
      },
      players: [
        {name: 'You', deckColor: [], lifePoints: 20, poisonCounters: 0, diceValue: 1, playFirst: false},
        {name: 'Opponent', deckColor: [], lifePoints: 20, poisonCounters: 0, diceValue: 1, playFirst: false}
      ],
      settingsActive: false,
      dicesActive: false
    }
  },
  async mounted() {
    await Font.loadAsync({
      'beleren': require('../assets/fonts/Beleren-Bold.ttf')
    });

    this.isLoaded = true;
  }
}
</script>

<style>
</style>
