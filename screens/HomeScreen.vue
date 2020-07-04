<template>
  <view
    v-if="isLoaded"
    class="home-screen"
  >
    <status-bar/>

    <PlayerData
      :class="gameOptions.flipOpponent ? 'is-flipped' : 'opponent-data'"
      :player="players[1]"
      :key="gameOptions.flipOpponent"
    />

    <view class="home-screen-divider"></view>

    <ActionsMenu
      :navigation="this.props.navigation"
      :options="gameOptions"
      :players="players"
      v-on:settingsOpen="settingsActive = true"
      v-on:dicesOpen="dicesActive = true"
    />

    <PlayerData
      :class="'player-data'"
      :player="players[0]"
    />
  </view>
</template>

<script>
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
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
        commanderMode: false,
        flipOpponent: false
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
      'beleren': require('../assets/fonts/Beleren-Bold.ttf'),
      'inter': require('../assets/fonts/Inter-Regular.ttf')
    });

    this.isLoaded = true;

    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 1500);
  }
}
</script>

<style>
.home-screen {
  flex-direction: column;
  align-items: center;
}

.is-flipped {
  height: 50%;
  padding-top: 12;
  transform: rotate(180deg);
}

.opponent-data {
  height: 50%;
  padding-bottom: 12;
}

.player-data {
  height: 50%;
  padding-top: 12;
}

.home-screen-divider {
  position: absolute;
  top: 50%;
  left: 5%;
  width: 90%;
  border-width: .8;
  border-color: #333333;
}
</style>
