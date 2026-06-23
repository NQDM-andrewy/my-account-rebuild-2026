<template>
  <div class="checkbox-input-control">
    <label :for="checkboxInput.id" @click="$emit('input', !checkboxInput.checked)">
      <input
        type="checkbox"
        :id="checkboxInput.id"
        :name="checkboxInput.id"
        :checked="checkboxInput.checked"
        :disabled="checkboxInput.disabled"
      >
      {{checkboxInput.label}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'CheckboxInputControl',
  props: {
    checkboxInput: Object
  },
  emits: ['input']
}
</script>

<style lang="scss" scoped>
.checkbox-input-control {
  label {
    display: grid;
    grid-template-columns: 18px auto;
    gap: 10px;
    color: var(--Input-Label-Color, #232323);
    font-family: var(--UI-Font, "Libre Franklin");
    font-size: var(--300, 16px);
    font-weight: 400;
    line-height: 140%;
  }
  input {
    appearance: none;
    &::before {
      content: '';
      display: block;
      width: 18px;
      height: 18px;
      border-radius: var(--3, 3px);
      border: 1px solid var(--border-form, #E6E6E9);
      background: var(--Monoscale-100, #FFF);
    }
    &:checked::before {
      background: url('/src/images/checkbox_checked.svg') no-repeat center / contain;
    }
  }
}
</style>