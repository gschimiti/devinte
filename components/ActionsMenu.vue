<template>
  <view class="actions-menu">
    <MTGButton
      class="actions-menu-button"
      :custom="{
        type: 'icon',
        size: 'big',
        icon: 'settings'
      }"
      v-on:buttonPressed="gotoSettings"
    />

    <MTGButton
      class="actions-menu-button"
      :custom="{
        type: 'icon',
        size: 'big',
        icon: 'dices'
      }"
      v-on:buttonPressed="gotoDices"
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
  props: {
    options: Object,
    players: Array,
    navigation: Object,
  },
  methods: {
    scoringReset() {
      for (let i = 0, len = this.players.length; i < len; i++) {
        this.players[i].lifePoints = this.options.commanderMode ? 40 : 20;
        this.players[i].poisonCounters = 0;
        this.players[i].playFirst = false;
      }
    },
    gotoSettings() {
      this.navigation.navigate('Settings', {
        options: this.options,
        players: this.players
      });
    },
    gotoDices() {
      this.navigation.navigate('Dices', {
        players: this.players
      })
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
