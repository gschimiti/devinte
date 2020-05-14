<template>
  <view v-if="isLoaded">
    <PlayerData :player="players[1]"/>
    <PlayerData :player="players[0]"/>

    <ActionsMenu
      :players="players"
      v-on:settingsOpen="settingsActive = true"
    />

    <SettingsModal
      v-if="settingsActive"
      :players="players"
      v-on:settingsClose="settingsActive = false"
    />
  </view>
</template>

<script>
import * as Font from 'expo-font';

import PlayerData from './components/PlayerData';
import ActionsMenu from './components/ActionsMenu';
import SettingsModal from './components/SettingsModal';

export default {
  components: {
    PlayerData,
    ActionsMenu,
    SettingsModal
  },
  data() {
    return {
      isLoaded: false,
      players: [
        {name: 'You', deckColor: [], lifePoints: 20, poisonCounters: 0},
        {name: 'Opponent', deckColor: [], lifePoints: 20, poisonCounters: 0}
      ],
      settingsActive: false,
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
