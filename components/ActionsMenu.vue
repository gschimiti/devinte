<template>
  <view class="menu">
    <touchable-opacity v-bind:onPress="scoringSettings">
      <view class="menu-button">
        <image
          class="menu-button-image"
          :style="{width: 26, height: 26}"
          :source="require('../assets/icons/settings.png')"
        />
      </view>
    </touchable-opacity>

    <touchable-opacity v-bind:onPress="scoringReset">
      <view class="menu-button">
        <image
          class="menu-button-image"
          :style="{width: 26, height: 26}"
          :source="require('../assets/icons/reload.png')"
        />
      </view>
    </touchable-opacity>
  </view>
</template>

<script>
export default {
  props: [
    'players'
  ],
  methods: {
    scoringReset() {
      for (let i = 0, len = this.players.length; i < len; i++) {
        this.players[i].lifePoints = 20;
        this.players[i].poisonCounters = 0;
      }
    },
    scoringSettings() {
      this.$emit('settingsOpen');
    }
  }
}
</script>

<style>
.menu {
  position: absolute;
  top: 50%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: -24;
}

.menu-button {
  align-items: center;
  justify-content: center;
  border-radius: 8;
  height: 48;
  width: 48;
  margin-left: 8;
  margin-right: 8;
  background-color: #333333;
}
</style>
