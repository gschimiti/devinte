<template>
  <touchable-opacity
    :class="customClass"
    :onPressIn="emitButtonPressed"
    :onPressOut="custom.propagate ? stopButtonPressed : null"
    :activeOpacity="custom.disabled ? 1 : 0.4"
  >
    <view
      v-if="custom.type == 'icon'"
      class="mtg-button-icon"
      :style="{
        height: (custom.size == 'small') ? 18 :
                (custom.size == 'big') ? 34 : 28,
        width: (custom.size == 'small') ? 18 :
               (custom.size == 'big') ? 34 : 28,
      }"
    >
      <SVGImage :name="custom.icon"/>
    </view>

    <text
      v-if="custom.type == 'label'"
      class="mtg-button-label"
    >
      {{ custom.label }}
    </text>
  </touchable-opacity>
</template>

<script>
import SVGImage from '../../assets/icons';

export default {
  props: {
    custom: Object
  },
  components: {
    SVGImage
  },
  data() {
    return {
      customClass: ['mtg-button'],
      timer: null
    }
  },
  methods: {
    emitButtonPressed() {
      this.$emit('buttonPressed');

      if (this.custom.propagate)
        this.timer = setTimeout(this.emitButtonPressed, 400);
    },
    stopButtonPressed() {
      clearTimeout(this.timer);
    }
  },
  mounted() {
    if (this.custom.type) {
      this.customClass.push('is-' + this.custom.type);

      if (this.custom.type == 'icon')
        this.customClass.push('no-padding');
    }

    if (this.custom.style) {
      this.customClass.push('is-' + this.custom.style);

      if (this.custom.style == 'transparent')
        this.customClass.push('no-background');
    }

    if (this.custom.size)
      this.customClass.push('is-' + this.custom.size);
  },
  updated() {
    const index = this.customClass.indexOf('is-disabled');

    if (!this.custom.disabled && index > -1)
      this.customClass.splice(index, 1);

    if (this.custom.disabled && index < 0)
      this.customClass.push('is-disabled');
  }
}
</script>

<style>
.mtg-button {
  align-items: center;
  justify-content: center;
  height: 40;
  min-width: 40;
  padding-left: 16;
  padding-right: 16;
  border-radius: 8;
  font-size: 16;
  background-color: #333333;
}

.mtg-button-label {
  color: #FFFFFF;
  font-family: beleren;
  font-size: 16;
}

.is-circle {
  border-radius: 24;
}

.is-small {
  height: 32;
  min-width: 32;
}

.is-big {
  height: 48;
  min-width: 48;
}

.is-disabled {
  background-color: #ADADAD;
}

.no-padding {
  padding-left: 0;
  padding-right: 0;
}

.no-background {
  background-color: #FFFFFF;
}
</style>
