<template>
  <div class="form-control" :class="{'has-error': formControl.hasError}">
    <label :for="formControl.id">{{formControl.label}}</label>
    <input :id="formControl.id" :name="formControl.id" :type="formControl.type" v-model="formControl.value" :placeholder="formControl.placeholder" :required="formControl.isRequired">
    <div class="error-area">{{ formControl.hasError }}</div>
  </div>
</template>

<script>
export default {
  name: 'FormControl',
  props: {
    formControl: Object
  },
}
</script>

<style lang="scss" scoped>
.form-control {
  display: flex;
  flex-direction: column;
  gap: 5px;
  label {
    color: var(--Input-Label-Color, #232323);
    font-family: var(--UI-Font, "Libre Franklin");
    font-size: var(--300, 16px);
    font-weight: 400;
  }
  input {
    height: 40px;
    padding: var(--200, 5px) var(--300, 10px);
    border-radius: var(--2, 2px);
    border: 1px solid var(--border-form, #E6E6E9);
    color: var(--Global-Slate, #333);
    font-family: var(--UI-Font, "Libre Franklin");
    font-size: var(--400-base, 17px);
    font-weight: 400;
  }
  .error-area {
    opacity: 0;
    color: var(--Input-Error-Color, #890000);
    font-family: var(--UI-Font, "Libre Franklin");
    font-size: var(--200, 14px);
    font-weight: 400;
    line-height: 140%;
    transition: all ease 0.2s;
  }
  &.has-error {
    input {
      border: 2px solid var(--Input-Error-Color, #890000);
    }
    .error-area {
      opacity: 1;
    }
  }
}
</style>