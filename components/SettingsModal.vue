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
        v-on:buttonPressed="emitSettingsClose"
      />

      <text class="modal-header-title">Settings</text>
    </view>

    <view class="settings-modal-body">
      <MTGSwitch
        :custom="{
          label: 'Commander Mode',
          active: mode
        }"
        :style="{ marginBottom: 32 }"
        v-on:switchToggled="emitModeChanged"
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
import MTGButton from './elements/MTGButton';
import MTGSwitch from './elements/MTGSwitch';
import PlayerSettings from './PlayerSettings';

export default {
  props: [
    'mode',
    'players'
  ],
  components: {
    MTGButton,
    MTGSwitch,
    PlayerSettings
  },
  methods: {
    emitSettingsClose() {
      this.$emit('settingsClose');
    },
    emitModeChanged() {
      this.mode = !this.mode;

      for (let index in this.players)
        this.players[index]['lifePoints'] += this.mode ? 20 : -20;

      this.$emit('modeChanged');
    }
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
