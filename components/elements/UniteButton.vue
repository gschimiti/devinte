<template>
  <touchable-opacity
    class="u-button"
    :style="{
      height: (buttonSize == 'small') ? 32 : 48,
      width: (buttonSize == 'small') ? 32 : 48,
      borderRadius: (buttonStyle == 'circle') ? 24 : 8,
      backgroundColor: (buttonColor == 'transparent') ? null : '#333333'
    }"
    v-bind:onPress="emitButtonPressed"
  >
    <image
      class="u-button-icon"
      :source="iconPath[icon]"
    />
  </touchable-opacity>
</template>

<script>
export default {
  props: [
    'buttonColor',
    'buttonSize',
    'buttonStyle',
    'icon'
  ],
  data() {
    return {
      iconPath: {
        'add': require('../../assets/icons/add.png'),
        'arrow-back': require('../../assets/icons/arrow-back.png'),
        'chevron-down': require('../../assets/icons/chevron-down.png'),
        'chevron-up': require('../../assets/icons/chevron-up.png'),
        'dices': require('../../assets/icons/dices.png'),
        'reload': require('../../assets/icons/reload.png'),
        'remove': require('../../assets/icons/remove.png'),
        'settings': require('../../assets/icons/settings.png')
      }
    }
  },
  methods: {
    emitButtonPressed() {
      this.$emit('buttonPressed');
    }
  }
}
</script>

<style>
.u-button {
  align-items: center;
  justify-content: center;
}

.u-button-icon {
  height: 26;
  width: 26;
}
</style>
