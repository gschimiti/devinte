<template>
  <touchable-opacity
    :class="customClass"
    v-bind:onPress="custom.type ? emitTagPressed : null"
    :activeOpacity="1"
  >
    <image
      class="mtg-tag-icon"
      :source="iconPath[custom.icon]"
    />
  </touchable-opacity>
</template>

<script>
import { MTGIcons } from '../../assets/mtg-icons';

export default {
  props: {
    custom: Object
  },
  data() {
    return {
      customClass: ['mtg-tag'],
      iconPath: MTGIcons
    }
  },
  methods: {
    emitTagPressed() {
      this.$emit('tagPressed');
    }
  },
  mounted() {
    if (this.custom.size)
      this.customClass.push('is-' + this.custom.size);

    if (this.custom.color)
      this.customClass.push('is-' + this.custom.color);
  },
  updated() {
    if (this.custom.type == 'select'){
      const keyword = this.custom.keyword;
      const index = this.customClass.indexOf('is-' + keyword);

      if (this.custom.color && index < 0)
        this.customClass.push('is-' + this.custom.color);

      if (!this.custom.color && index > -1)
        this.customClass.splice(index, 1);
    }
  }
}
</script>

<style>
.mtg-tag {
  align-items: center;
  justify-content: center;
  height: 40;
  width: 40;
  border-radius: 20;
}

.mtg-tag-icon {
  height: 100%;
  width: 100%;
}

.is-small {
  height: 24;
  width: 24;
}

.is-white {
  background-color: #FFFBD5;
}

.is-blue {
  background-color: #AAE0FA;
}

.is-black {
  background-color: #CBC2BF;
}

.is-red {
  background-color: #F9AA8F;
}

.is-green {
  background-color: #9BD3AE;
}

.is-colorless {
  background-color: #CCC2C0;
}
</style>
