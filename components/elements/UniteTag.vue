<template>
  <touchable-opacity
    class="u-tag"
    :style="{
      backgroundColor: (tagColor == 'W') ? '#FFFBD5' :
                       (tagColor == 'U') ? '#AAE0FA' :
                       (tagColor == 'B') ? '#CBC2BF' :
                       (tagColor == 'R') ? '#F9AA8F' :
                       (tagColor == 'G') ? '#9BD3AE' :
                       (tagColor == 'C') ? '#CCC2C0' : null
    }"
    v-bind:onPress="emitTagPressed"
  >
    <image
      class="u-tag-icon"
      :source="iconPath[icon]"
    />
  </touchable-opacity>
</template>

<script>
export default {
  props: [
    'tagColor',
    'icon'
  ],
  data() {
    return {
      iconPath: {
        'W': require('../../assets/mtg-icons/mtg-w.png'),
        'U': require('../../assets/mtg-icons/mtg-u.png'),
        'B': require('../../assets/mtg-icons/mtg-b.png'),
        'R': require('../../assets/mtg-icons/mtg-r.png'),
        'G': require('../../assets/mtg-icons/mtg-g.png'),
        'C': require('../../assets/mtg-icons/mtg-c.png')
      }
    }
  },
  methods: {
    emitTagPressed() {
      this.$emit('tagPressed');
    }
  }
}
</script>

<style>
.u-tag {
  align-items: center;
  justify-content: center;
  height: 40;
  width: 40;
  border-radius: 20;
}

.u-tag-icon {
  height: 40;
  width: 40;
}
</style>
