<template>
  <div class="nav-panel">
    <ControlButton @click="$emit('back')" :label="backBtnLabel" />
    <ControlButton @click="$emit('next')" dark :label="nextBtnLabel" />
  </div>
</template>

<script>
import ControlButton from '@/components/UI/ControlButton.vue';
export default {
  name: 'NavPanel',
  components: {
    ControlButton
  },
  props: {
    backBtnLabel: String,
    nextBtnLabel: String
  }
}
</script>

<style lang="scss" scoped>
.nav-panel {
  display: none;
  
  @media screen and (max-width:768px) {
    display: flex;
    justify-content: space-between;
  }
}
</style>