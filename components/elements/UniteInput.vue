<template>
  <view class="u-input">
    <text class="u-input-label">{{ inputLabel }}</text>

    <text-input
      class="u-input-field"
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
.u-input {
  width: 100%;
  padding-right: 8;
  padding-left: 8;
  border-color: #ADADAD;
  border-radius: 8;
  border-width: 1;
  margin-bottom: 24;
}

.u-input-label {
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

.u-input-field {
  height: 48;
  font-size: 16;
}
</style>
