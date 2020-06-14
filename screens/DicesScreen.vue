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

        <view :style="{height: 72, width: 72}">
          <SVGImage :name="players[1].diceValue"/>
        </view>
      </view>

      <view class="player-dice">
        <text class="player-dice-label">{{ players[0].name }}</text>

        <view :style="{height: 72, width: 72}">
          <SVGImage :name="players[0].diceValue"/>
        </view>
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
        <MTGButton
          class="dices-button"
          :custom="{
            type: 'label',
            size: 'big',
            label: 'Play First'
          }"
          v-on:buttonPressed="() => updatePlayFirst(true)"
        />

        <MTGButton
          class="dices-button"
          :custom="{
            type: 'label',
            size: 'big',
            label: 'Draw First'
          }"
          v-on:buttonPressed="() => updatePlayFirst(false)"
        />
      </view>
    </view>
  </view>
</template>

<script>
import SVGImage from '../assets/dices';
import MTGButton from '../components/elements/MTGButton';

export default {
  props: {
    players: Array,
    navigation: Object
  },
  components: {
    MTGButton,
    SVGImage
  },
  data() {
    return {
      isRolling: true
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

      this.navigation.goBack();
    }
  },
  created() {
    this.players = this.navigation.state.params.players;
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
  width: 112;
  margin-right: 8;
  margin-left: 8;
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
