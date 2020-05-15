<template>
  <view class="player-settings">
    <text class="player-settings-label">{{ playerLabel }}</text>

    <view class="text-input">
      <text class="text-input-label">Name</text>
      <text-input
        class="text-input-field"
        v-model="player.name"
      />
    </view>

    <view class="tags-select">
      <text class="tags-select-label">Deck Color</text>

      <view class="tags-select-list">
        <UniteTag
          v-for="color in mtgColors"
          class="tag"
          :tagColor="player.deckColor.includes(color) ? color : null"
          :icon="color"
          v-on:tagPressed="() => toggleDeckColor(player, color)"
        />
      </view>
    </view>
  </view>
</template>

<script>
import UniteTag from './elements/UniteTag'

export default {
  props: [
    'player',
    'playerLabel'
  ],
  data () {
    return {
      mtgColors: [ 'W', 'U', 'B', 'R', 'G', 'C' ],
    }
  },
  components: {
    UniteTag
  },
  methods: {
    toggleDeckColor(player, color) {
      if (!player.deckColor.includes(color)) {
        player.deckColor.push(color);
      } else {
        let index = player.deckColor.indexOf(color);
        player.deckColor.splice(index, 1);
      }
    }
  }
}
</script>

<style>
.player-settings-label {
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

.tags-select {
  margin-bottom: 32;
}

.tags-select-label {
  font-family: beleren;
  font-size: 12;
  color: #ADADAD;
}

.tags-select-list {
  flex-direction: row;
}

.tag {
  margin-top: 12;
  margin-right: 8;
}
</style>
