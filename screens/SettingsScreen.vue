<template>
  <view class="settings-screen">
    <status-bar/>

    <view class="settings-screen-header">
      <MTGButton
        :custom="{
          type: 'icon',
          style: 'transparent',
          size: 'big',
          icon: 'arrow-back'
        }"
        v-on:buttonPressed="gotoHome"
      />

      <text class="settings-screen-header-title">Settings</text>
    </view>

    <scroll-view class="settings-screen-body">
      <MTGSwitch
        :custom="{
          label: 'Commander Mode',
          active: options.commanderMode
        }"
        :style="{ marginBottom: 32 }"
        v-on:switchToggled="changeGameMode"
      />

      <PlayerSettings
        :player="players[1]"
        :playerLabel="'Opponent'"
      />

      <PlayerSettings
        :player="players[0]"
        :playerLabel="'You'"
        :style="{ marginBottom: 24 }"
      />
    </scroll-view>
  </view>
</template>

<script>
import MTGButton from '../components/elements/MTGButton';
import MTGSwitch from '../components/elements/MTGSwitch';
import PlayerSettings from '../components/PlayerSettings';

export default {
  props: {
    options: Object,
    players: Array,
    navigation: Object
  },
  components: {
    MTGButton,
    MTGSwitch,
    PlayerSettings
  },
  methods: {
    gotoHome() {
      this.navigation.goBack();
    },
    changeGameMode() {
      this.options.commanderMode = !this.options.commanderMode;

      for (let index in this.players)
        this.players[index]['lifePoints'] += this.options.commanderMode ? 20 : -20;
    }
  },
  created() {
    this.options = this.navigation.state.params.options;
    this.players = this.navigation.state.params.players;
  }
}
</script>

<style>
.settings-screen {
  flex: 1;
}

.settings-screen-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 8;
  border-bottom-width: 1;
  border-color: #ADADAD;
}

.settings-screen-header-title {
  font-family: beleren;
  font-size: 26;
  color: #333333;
  margin-left: 8;
}

.settings-screen-body {
  flex: 1;
  padding-left: 16;
  padding-right: 16;
  padding-top: 24;
  padding-bottom: 24;
  margin-top: 64;
}
</style>
