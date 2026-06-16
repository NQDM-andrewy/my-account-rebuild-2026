<template>
  <div class="tab-view" :class="customClass">
    <div class="tab-heading-section">
      <TabHeading :heading="tabTitle" />
      <div v-if="hasHeadingButton">
        <ControlButton v-if="!isEditMode" @click="$emit('heading-button-click')" :label="headingButtonLabel" class="heading-btn" />
      </div>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ControlButton from '@/components/UI/ControlButton.vue';
import TabHeading from '@/components/UI/TabHeading.vue';
export default {
  name: 'TabView',
  components: {
    ControlButton,
    TabHeading
  },
  props: {
    customClass: String,
    tabTitle: String,
    isEditMode: Boolean,
    hasHeadingButton: Boolean,
    headingButtonLabel: String
  },
}
</script>

<style lang="scss" scoped>
.tab-view {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .tab-heading-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    .heading-btn {
      @media screen and (max-width:768px) {
        display: none
      }
    }
  }
  .tab-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>