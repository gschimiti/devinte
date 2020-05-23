<template>
  <view class="actions-menu">
    <UniteButton
      class="actions-menu-button"
      :icon="'settings'"
      v-on:buttonPressed="emitSettingsOpen"
    />

    <UniteButton
      class="actions-menu-button"
      :icon="'dices'"
      v-on:buttonPressed="emitDicesOpen"
    />

    <UniteButton
      class="actions-menu-button"
      :icon="'reload'"
      v-on:buttonPressed="scoringReset"
    />
  </view>
</template>

<script>
import UniteButton from './elements/UniteButton';

export default {
  components: {
    UniteButton,
  },
  props: [
    'players'
  ],
  methods: {
    scoringReset() {
      for (let i = 0, len = this.players.length; i < len; i++) {
        this.players[i].lifePoints = 20;
        this.players[i].poisonCounters = 0;
        this.players[i].playFirst = false;
      }
    },
    emitSettingsOpen() {
      this.$emit('settingsOpen');
    },
    emitDicesOpen() {
      this.$emit('dicesOpen');
    }
  }
}
</script>

<style>
.actions-menu {
  position: absolute;
  top: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -24;
}

.actions-menu-button {
  margin-left: 8;
  margin-right: 8;
}
</style>
