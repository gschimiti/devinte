<template>
  <view class="actions-menu">
    <MTGButton
      class="actions-menu-button"
      :custom="{
        type: 'icon',
        style: 'transparent',
        icon: 'settings'
      }"
      v-on:buttonPressed="gotoSettings"
    />

    <MTGButton
      class="actions-menu-button"
      :custom="{
        type: 'icon',
        style: 'transparent',
        icon: 'dices'
      }"
      v-on:buttonPressed="gotoDices"
    />

    <MTGButton
      class="actions-menu-button"
      :custom="{
        type: 'icon',
        style: 'transparent',
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
  z-index: 8;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 8;
  padding-right: 8;
  margin-top: -20;
  background-color: #FFFFFF;
}

.actions-menu-button {
  margin-left: 8;
  margin-right: 8;
}
</style>
