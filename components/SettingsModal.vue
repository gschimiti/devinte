<template>
  <view class="settings-modal">
    <view class="settings-modal-header">
      <UniteButton
        :buttonColor="'transparent'"
        :icon="'arrow-back'"
        v-on:buttonPressed="emitSettingsClose"
      />

      <text class="modal-header-title">Settings</text>
    </view>

    <view class="settings-modal-body">
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
import UniteButton from './elements/UniteButton';
import PlayerSettings from './PlayerSettings';

export default {
  props: [
    'players',
  ],
  components: {
    UniteButton,
    PlayerSettings
  },
  methods: {
    emitSettingsClose() {
      this.$emit('settingsClose');
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
  padding-top: 32;
  width: 100%;
}
</style>
