<template>
  <view class="settings-modal">
    <view class="dices-modal-header">
      <text
        v-if="isRolling"
        class="dices-modal-header-text"
      >
        {{ `Rolling dices to decide who\nPlay First or Draw First` }}
      </text>
    </view>

    <view class="dices-modal-body">
      <view class="player-dice">
        <text class="player-dice-label">{{ players[1].name }}</text>

        <image
          :source="iconPath[players[1].diceValue]"
          :style="{height: 72, width: 72}"
        />
      </view>

      <view class="player-dice">
        <text class="player-dice-label">{{ players[0].name }}</text>

        <image
          :source="iconPath[players[0].diceValue]"
          :style="{height: 72, width: 72}"
        />
      </view>
    </view>

    <view
      v-if="!isRolling"
      class="dices-modal-footer"
    >
      <text
        class="dices-modal-footer-text"
      >
        {{ `${(players[0].diceValue > players[1].diceValue) ?
                players[0].name :
                players[1].name} wins!\nWhat's the player's choice?` }}
      </text>

      <view class="dices-choose-menu">
        <touchable-opacity
          class="dices-button"
          :style="{
            height: 48,
            width: 112,
            borderRadius: 8,
            backgroundColor: '#333333'
          }"
          v-bind:onPress="() => updatePlayFirst(true)"
        >
          <text class="dices-button-text">Play First</text>
        </touchable-opacity>

        <touchable-opacity
          class="dices-button"
          :style="{
            height: 48,
            width: 112,
            borderRadius: 8,
            backgroundColor: '#333333'
          }"
          v-bind:onPress="() => updatePlayFirst(false)"
        >
          <text class="dices-button-text">Draw First</text>
        </touchable-opacity>
      </view>
    </view>
  </view>
</template>

<script>
import UniteButton from './elements/UniteButton';

export default {
  props: [
    'players'
  ],
  components: {
    UniteButton
  },
  data() {
    return {
      isRolling: true,
      iconPath: {
        1: require('../assets/dice-one.png'),
        2: require('../assets/dice-two.png'),
        3: require('../assets/dice-three.png'),
        4: require('../assets/dice-four.png'),
        5: require('../assets/dice-five.png'),
        6: require('../assets/dice-six.png')
      }
    }
  },
  methods: {
    updateDicesValues() {
      do {
        this.players[0].diceValue = Math.floor(Math.random() * 6) + 1;
        this.players[1].diceValue = Math.floor(Math.random() * 6) + 1;
      } while (this.players[0].diceValue == this.players[1].diceValue)
    },
    stopRolling() {
      this.isRolling = false;
    },
    updatePlayFirst(bool) {
      if (this.players[0].diceValue > this.players[1].diceValue) {
        this.players[0].playFirst = bool;
        this.players[1].playFirst = !bool;
      } else {
        this.players[0].playFirst = !bool;
        this.players[1].playFirst = bool;
      }

      this.$emit('dicesClose');
    }
  },
  mounted() {
    function timeout(updateDicesFunction, n, stop) {
      setTimeout(function() {
        if (n > 0) {
          updateDicesFunction();
          timeout(updateDicesFunction, n-1, stop);
        } else {
          stop();
        }
      }, 200);
    }

    timeout(this.updateDicesValues, 15, this.stopRolling);
  }
}
</script>

<style>
.dices-modal-header {
  align-items: center;
  justify-content: center;
  height: 15%;
  width: 100%;
  padding-left: 16;
  padding-right: 16;
}

.dices-modal-header-text {
  font-size: 16;
  line-height: 22;
  text-align: center;
}

.dices-button {
  align-items: center;
  justify-content: center;
  padding-left: 16;
  padding-right: 16;
  margin-right: 8;
  margin-left: 8;
}

.dices-button-text {
  font-family: beleren;
  color: #FFFFFF;
  font-size: 16;
}

.dices-modal-body {
  height: 50%;
  width: 100%;
  padding-left: 16;
  padding-right: 16;
}

.dices-modal-footer {
  align-items: center;
  justify-content: center;
  height: 35%;
  padding-left: 16;
  padding-right: 16;
}

.dices-modal-footer-text {
  margin-bottom: 32;
  font-size: 16;
  line-height: 22;
  text-align: center;
}

.dices-choose-menu {
  flex-direction: row;
}

.player-dice {
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
}

.player-dice-label {
  margin-bottom: 8;
  color: #333333;
  font-family: beleren;
  font-size: 20;
}

.settings-modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #FFFFFF;
  width: 100%;
  height: 100%;
  z-index: 8;
}
</style>
