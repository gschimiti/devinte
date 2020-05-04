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
        <text class="player-setting-title">Opponent</text>

        <view class="text-input">
          <text class="text-input-label">Name</text>
          <text-input
            class="text-input-field"
            v-model="players[1].name"
          />
        </view>

        <view class="tags-select">
          <text class="tags-select-label">Deck Color</text>

          <view class="tag-list">
            <touchable-opacity v-bind:onPress="() => toggleDeckColor(players[1], 'W')">
              <view
                class="tag"
                :class="players[1].deckColor.includes('W') ? 'tag-filled-white' : null"
              >
                <image
                  :style="{width: 40, height: 40}"
                  :source="require('../assets/w-outline.png')"
                />
              </view>
            </touchable-opacity>

            <touchable-opacity v-bind:onPress="() => toggleDeckColor(players[1], 'U')">
              <view
                class="tag"
                :class="players[1].deckColor.includes('U') ? 'tag-filled-blue' : null"
              >
                <image
                  :style="{width: 32, height: 32}"
                  :source="require('../assets/u-outline.png')"
                />
              </view>
            </touchable-opacity>

            <touchable-opacity v-bind:onPress="() => toggleDeckColor(players[1], 'B')">
              <view
                class="tag"
                :class="players[1].deckColor.includes('B') ? 'tag-filled-black' : null"
              >
                <image
                  :style="{width: 32, height: 32}"
                  :source="require('../assets/b-outline.png')"
                />
              </view>
            </touchable-opacity>

            <touchable-opacity v-bind:onPress="() => toggleDeckColor(players[1], 'R')">
              <view
                class="tag"
                :class="players[1].deckColor.includes('R') ? 'tag-filled-red' : null"
              >
                <image
                  :style="{width: 32, height: 32}"
                  :source="require('../assets/r-outline.png')"
                />
              </view>
            </touchable-opacity>

            <touchable-opacity v-bind:onPress="() => toggleDeckColor(players[1], 'G')">
              <view
                class="tag"
                :class="players[1].deckColor.includes('G') ? 'tag-filled-green' : null"
              >
                <image
                  :style="{width: 32, height: 32}"
                  :source="require('../assets/g-outline.png')"
                />
              </view>
            </touchable-opacity>

            <touchable-opacity v-bind:onPress="() => toggleDeckColor(players[1], 'C')">
              <view
                class="tag"
                :class="players[1].deckColor.includes('C') ? 'tag-filled-colorless' : null"
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

      <view class="player-settings">
        <text class="player-setting-title">You</text>

        <view class="text-input">
          <text class="text-input-label">Name</text>
          <text-input
            class="text-input-field"
            v-model="players[0].name"
          />
        </view>

        <view class="tags-select">
          <text class="tags-select-label">Deck Color</text>

          <view class="tag-list">
            <touchable-opacity v-bind:onPress="() => toggleDeckColor(players[0], 'W')">
              <view
                class="tag"
                :class="players[0].deckColor.includes('W') ? 'tag-filled-white' : null"
              >
                <image
                  :style="{width: 40, height: 40}"
                  :source="require('../assets/w-outline.png')"
                />
              </view>
            </touchable-opacity>

            <touchable-opacity v-bind:onPress="() => toggleDeckColor(players[0], 'U')">
              <view
                class="tag"
                :class="players[0].deckColor.includes('U') ? 'tag-filled-blue' : null"
              >
                <image
                  :style="{width: 32, height: 32}"
                  :source="require('../assets/u-outline.png')"
                />
              </view>
            </touchable-opacity>

            <touchable-opacity v-bind:onPress="() => toggleDeckColor(players[0], 'B')">
              <view
                class="tag"
                :class="players[0].deckColor.includes('B') ? 'tag-filled-black' : null"
              >
                <image
                  :style="{width: 32, height: 32}"
                  :source="require('../assets/b-outline.png')"
                />
              </view>
            </touchable-opacity>

            <touchable-opacity v-bind:onPress="() => toggleDeckColor(players[0], 'R')">
              <view
                class="tag"
                :class="players[0].deckColor.includes('R') ? 'tag-filled-red' : null"
              >
                <image
                  :style="{width: 32, height: 32}"
                  :source="require('../assets/r-outline.png')"
                />
              </view>
            </touchable-opacity>

            <touchable-opacity v-bind:onPress="() => toggleDeckColor(players[0], 'G')">
              <view
                class="tag"
                :class="players[0].deckColor.includes('G') ? 'tag-filled-green' : null"
              >
                <image
                  :style="{width: 32, height: 32}"
                  :source="require('../assets/g-outline.png')"
                />
              </view>
            </touchable-opacity>

            <touchable-opacity v-bind:onPress="() => toggleDeckColor(players[0], 'C')">
              <view
                class="tag"
                :class="players[0].deckColor.includes('C') ? 'tag-filled-colorless' : null"
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
    </view>
  </view>
</template>

<script>
export default {
  props: [
    'players',
  ],
  methods: {
    toggleDeckColor(player, color) {
      if (!player.deckColor.includes(color)) {
        player.deckColor.push(color);
      } else {
        let index = player.deckColor.indexOf(color);
        player.deckColor.splice(index, 1);
      }
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
  font-size: 18;
  color: #FFFFFF;
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

.tag-filled-white {
  background-color: #FFFBD5;
}

.tag-filled-blue {
  background-color: #AAE0FA;
}

.tag-filled-black {
  background-color: #CBC2BF;
}

.tag-filled-red {
  background-color: #F9AA8F;
}

.tag-filled-green {
  background-color: #9BD3AE;
}

.tag-filled-colorless {
  background-color: #CCC2C0;
}
</style>
