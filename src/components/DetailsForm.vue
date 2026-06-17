<template>
  <div class="details-form">
    <div class="details-form-fields">
      <FormControl
        v-for="item in details"
        :key="item.id"
        :formControl="item"
      />
    </div>
    <div class="control-panel">
      <ControlButton @click="$emit('cancel')" :label="cancelBtnLabel" />
      <ControlButton @click="$emit('submit')" accent :label="submitBtnLabel" />
    </div>
  </div>
</template>

<script>
import ControlButton from '@/components/UI/ControlButton.vue';
import FormControl from './UI/FormControl.vue';
export default {
  name: 'DetailsForm',
  components: {
    ControlButton,
    FormControl
  },
  props: {
    details: Array,
    cancelBtnLabel: String,
    submitBtnLabel: String
  }
}
</script>

<style lang="scss" scoped>
.details-form {
  display: flex;
  flex-direction: column;
  height: 100%;
  &-fields {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 1;
  }
  .control-panel {
    display: flex;
    padding: var(--300, 10px) 0;
    justify-content: flex-end;
    align-items: center;
    gap: var(--300, 10px);
    margin-top: 30px;
  }
  .buttons-group {
    display: none;

    @media screen and (max-width:768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>