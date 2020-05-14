<template>
  <view class="player-settings">
    <text class="player-setting-title">{{ playerLabel }}</text>

    <view class="text-input">
      <text class="text-input-label">Name</text>
      <text-input
        class="text-input-field"
        v-model="player.name"
      />
    </view>

    <view class="tags-select">
      <text class="tags-select-label">Deck Color</text>

      <view class="tag-list">
        <touchable-opacity v-bind:onPress="() => toggleDeckColor(player, 'W')">
          <view
            class="tag"
            :class="player.deckColor.includes('W') ? 'tag-filled-white' : null"
          >
            <image
              :style="{width: 40, height: 40}"
              :source="require('../assets/w-outline.png')"
            />
          </view>
        </touchable-opacity>

        <touchable-opacity v-bind:onPress="() => toggleDeckColor(player, 'U')">
          <view
            class="tag"
            :class="player.deckColor.includes('U') ? 'tag-filled-blue' : null"
          >
            <image
              :style="{width: 32, height: 32}"
              :source="require('../assets/u-outline.png')"
            />
          </view>
        </touchable-opacity>

        <touchable-opacity v-bind:onPress="() => toggleDeckColor(player, 'B')">
          <view
            class="tag"
            :class="player.deckColor.includes('B') ? 'tag-filled-black' : null"
          >
            <image
              :style="{width: 32, height: 32}"
              :source="require('../assets/b-outline.png')"
            />
          </view>
        </touchable-opacity>

        <touchable-opacity v-bind:onPress="() => toggleDeckColor(player, 'R')">
          <view
            class="tag"
            :class="player.deckColor.includes('R') ? 'tag-filled-red' : null"
          >
            <image
              :style="{width: 32, height: 32}"
              :source="require('../assets/r-outline.png')"
            />
          </view>
        </touchable-opacity>

        <touchable-opacity v-bind:onPress="() => toggleDeckColor(player, 'G')">
          <view
            class="tag"
            :class="player.deckColor.includes('G') ? 'tag-filled-green' : null"
          >
            <image
              :style="{width: 32, height: 32}"
              :source="require('../assets/g-outline.png')"
            />
          </view>
        </touchable-opacity>

        <touchable-opacity v-bind:onPress="() => toggleDeckColor(player, 'C')">
          <view
            class="tag"
            :class="player.deckColor.includes('C') ? 'tag-filled-colorless' : null"
          >
            <image
              :style="{width: 32, height: 32}"
              :source="require('../assets/c-outline.png')"
            />
          </view>
        </touchable-opacity>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: [
    'player',
    'playerLabel'
  ],
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

.tags-select {
  margin-bottom: 32;
}

.tags-select-label {
  font-family: beleren;
  font-size: 12;
  color: #ADADAD;
}

.tag-list {
  flex-direction: row;
}

.tag {
  align-items: center;
  justify-content: center;
  width: 40;
  height: 40;
  border-radius: 20;
  margin-top: 12;
  margin-right: 8;
}

.tag-filled-white { background-color: #FFFBD5; }

.tag-filled-blue { background-color: #AAE0FA; }

.tag-filled-black { background-color: #CBC2BF; }

.tag-filled-red { background-color: #F9AA8F; }

.tag-filled-green { background-color: #9BD3AE; }

.tag-filled-colorless { background-color: #CCC2C0; }
</style>
