<template>
    <button class="control-btn" :class="{'dark': dark}" :disabled="disabled">
        <span>{{ label }}</span>
    </button>
</template>

<script>
export default {
    name: 'ControlButton',
    props: {
        label: String,
        dark: Boolean,
        disabled: Boolean
    },
}
</script>

<style lang="scss" scoped>
.control-btn {
  display: flex;
  height: 30px;
  padding: var(--200, 5px) var(--300, 10px);
  align-items: center;
  border-radius: var(--100, 100px);
  border: 1px solid var(--Monoscale-400, #CCCFD6);
  background: var(--Monoscale-80, rgba(255, 255, 255, 0.80));
  cursor: pointer;
  span {
    color: var(--Monoscale-800, #181818);
    font-family: var(--UI-Font, "Libre Franklin");
    font-size: var(--400-base, 17px);
    font-weight: 700;
    line-height: 100%;
  }
  &.dark {
    background: var(--Brand-colours-Brand-Accent, #BFCBF7);
  }
}
</style>