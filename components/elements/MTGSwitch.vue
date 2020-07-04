<template>
  <view
    class="mtg-switch"
  >
    <text class="mtg-switch-label" v-if="custom.label">
      {{ custom.label }}
    </text>

    <touchable-opacity
      class="mtg-switch-button"
      :onPress="emitSwitchToggled"
      :activeOpacity="1"
    >
      <view
        class="mtg-switch-button-bar"
        :style="{
          justifyContent: isActive ? 'flex-end' : 'flex-start',
          backgroundColor: isActive ? '#322FFE' : '#ADADAD'
        }"
      >
        <view class="mtg-switch-button-pin"></view>
      </view>
    </touchable-opacity>
  </view>
</template>

<script>;
export default {
  props: {
    custom: Object
  },
  data() {
    return {
      isActive: this.custom.active
    }
  },
  methods: {
    emitSwitchToggled() {
      this.isActive = !this.isActive;

      this.$emit('switchToggled');
    }
  }
}
</script>

<style>
.mtg-switch {
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  height: 48;
}

.mtg-switch-label {
  width: 200;
  color: #333333;
  font-family: inter;
  font-size: 16;
}

.mtg-switch-button {
  align-items: center;
  justify-content: center;
  height: 48;
}

.mtg-switch-button-bar {
  flex-direction: row;
  height: 24;
  width: 48;
  padding: 4;
  border-radius: 12;
  margin-left: 8;
  margin-right: 8;
}

.mtg-switch-button-pin {
  height: 16;
  width: 16;
  border-radius: 8;
  background-color: #FFFFFF;
}
</style>
