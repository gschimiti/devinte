<template>
  <view class="player-settings">
    <text class="player-settings-label">{{ playerLabel }}</text>

    <MTGInput
      :inputLabel="'Name'"
      :jsonKey="'name'"
      :jsonObject="player"
    />

    <view class="tags-select">
      <text class="tags-select-label">Deck Color</text>

      <view class="tags-select-list">
        <MTGTag
          v-for="color in mtgColors"
          class="tag"
          :custom="{
            type: 'select',
            keyword: color,
            color: player.deckColor.includes(color) ? color : null,
            icon: color
          }"
          v-on:tagPressed="() => toggleDeckColor(player, color)"
        />
      </view>
    </view>
  </view>
</template>

<script>
import MTGInput from './elements/MTGInput';
import MTGTag from './elements/MTGTag';

export default {
  props: [
    'player',
    'playerLabel'
  ],
  data () {
    return {
      mtgColors: [ 'white', 'blue', 'black', 'red', 'green', 'colorless' ],
    }
  },
  components: {
    MTGInput,
    MTGTag
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
