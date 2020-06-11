<template>
  <view class="mtg-input">
    <text class="mtg-input-label">{{ inputLabel }}</text>

    <text-input
      class="mtg-input-field"
      v-model="jsonObject[jsonKey]"
    />
  </view>
</template>

<script>
export default {
  props: [
    'inputLabel',
    'jsonKey',
    'jsonObject'
  ]
}
</script>

<style>
.mtg-input {
  width: 100%;
  padding-right: 8;
  padding-left: 8;
  border-color: #ADADAD;
  border-radius: 8;
  border-width: 1;
  margin-bottom: 24;
}

.mtg-input-label {
  position: absolute;
  top: -8;
  left: 4;
  padding-right: 4;
  padding-left: 4;
  background-color: #FFFFFF;
  color: #ADADAD;
  font-family: beleren;
  font-size: 12;
}

.mtg-input-field {
  height: 48;
  font-size: 16;
}
</style>
