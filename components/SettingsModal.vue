<template>
  <view class="settings-modal">
    <view class="settings-modal-header">
      <touchable-opacity v-bind:onPress="close">
        <view class="modal-header-button">
          <image
            :style="{width: 32, height: 32}"
            :source="require('../assets/icons/back.png')"
          />
        </view>
      </touchable-opacity>

      <text class="modal-header-title">Settings</text>
    </view>

    <view class="settings-modal-body">
      <view class="player-settings">
        <text class="player-setting-title">You</text>

        <view class="text-input">
          <text class="text-input-label">Name</text>
          <text-input
            class="text-input-field"
            v-model="playersSettings[0].name"
          />
        </view>

        <!--text>Deck Color</text-->
      </view>

      <view class="player-settings">
        <text class="player-setting-title">Opponent</text>

        <view class="text-input">
          <text class="text-input-label">Name</text>
          <text-input
            class="text-input-field"
            v-model="playersSettings[1].name"
          />
        </view>
      </view>
    </view>

    <view class="modal-controls">
      <touchable-opacity v-bind:onPress="saveSettings">
        <view class="modal-controls-button">
          <text class="modal-controls-button-label">SAVE</text>
        </view>
      </touchable-opacity>
    </view>
  </view>
</template>

<script>
export default {
  props: [
    'players',
  ],
  data() {
    return {
      playersSettings: [
        {name: this.players[0].name},
        {name: this.players[1].name},
      ]
    }
  },
  methods: {
    saveSettings() {
      this.players[0].name = this.playersSettings[0].name;
      this.players[1].name = this.playersSettings[1].name;

      this.$emit('settingsClose');
    },
    close() {
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

.modal-header-button {
  justify-content: center;
  align-items: center;
  height: 48;
  width: 48;
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

.player-setting-title {
  font-family: beleren;
  font-size: 20;
  color: #333333;
  margin-bottom: 24;
}

.text-input {
  width: 100%;
  padding-left: 8;
  padding-right: 8;
  border-radius: 8;
  margin-bottom: 24;
  border-color: #ADADAD;
  border-width: 1;
}

.text-input-label {
  font-family: beleren;
  font-size: 12;
  color: #ADADAD;
  position: absolute;
  left: 4;
  padding-left: 4;
  padding-right: 4;
  background-color: #FFFFFF;
  top: -8;
}

.text-input-field {
  font-size: 16;
  height: 48;
}

.modal-controls {
  width: 100%;
  padding: 16;
}

.modal-controls-button {
  height: 48;
  background-color: #333333;
  border-radius: 8;
  align-items: center;
  justify-content: center;
}

.modal-controls-button-label {
  font-family: beleren;
  font-size: 16;
  color: #FFFFFF;
}
</style>
