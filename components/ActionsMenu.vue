<template>
  <view class="actions-menu">
    <MTGButton
      class="actions-menu-button"
      :custom="{
        type: 'icon',
        size: 'big',
        icon: 'settings'
      }"
      v-on:buttonPressed="emitSettingsOpen"
    />

    <MTGButton
      class="actions-menu-button"
      :custom="{
        type: 'icon',
        size: 'big',
        icon: 'dices'
      }"
      v-on:buttonPressed="emitDicesOpen"
    />

    <MTGButton
      class="actions-menu-button"
      :custom="{
        type: 'icon',
        size: 'big',
        icon: 'reload'
      }"
      v-on:buttonPressed="scoringReset"
    />
  </view>
</template>

<script>
import MTGButton from './elements/MTGButton';

export default {
  components: {
    MTGButton
  },
  props: [
    'mode',
    'players'
  ],
  methods: {
    scoringReset() {
      for (let i = 0, len = this.players.length; i < len; i++) {
        this.players[i].lifePoints = this.mode ? 40 : 20;
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
