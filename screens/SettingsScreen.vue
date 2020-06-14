<template>
  <view class="settings-modal">
    <view class="settings-modal-header">
      <MTGButton
        :custom="{
          type: 'icon',
          style: 'transparent',
          size: 'big',
          icon: 'arrow-back'
        }"
        v-on:buttonPressed="gotoHome"
      />

      <text class="modal-header-title">Settings</text>
    </view>

    <view class="settings-modal-body">
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
      />
    </view>
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
.settings-modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #FFFFFF;
  width: 100%;
  height: 100%;
  z-index: 8;
}

.settings-modal-header {
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: 8;
}

.modal-header-title {
  font-family: beleren;
  font-size: 26;
  color: #333333;
  margin-left: 8;
}

.settings-modal-body {
  padding-left: 16;
  padding-right: 16;
  padding-top: 24;
  width: 100%;
}
</style>
