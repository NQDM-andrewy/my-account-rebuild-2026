<template>
  <div class="details-table">
    <div v-for="item in details" :key="item.field" class="details-table-row" :class="{'is-hidden': !item.visible}">
      <div class="field">{{ item.label }}</div>
      <div class="value">{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsTable',
  props: {
    details: Array
  }
}
</script>

<style lang="scss" scoped>
.details-table {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
    &.is-hidden {
      display: none;
    }

    @media screen and (max-width:768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px
    }
    .field {
      width: 130px;
      color: var(--Monoscale-700, #333);
      font-family: var(--Wayfinding-Font, Bitter);
      font-size: var(--400-base, 17px);
      font-weight: 600;
    }
    .value {
      flex: 1;
      color: var(--Monoscale-700, #333);
      font-family: var(--Body-Font, Bitter);
      font-size: var(--500, 18px);
      font-weight: 400;
    }
  }
}
</style>