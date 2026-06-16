<template>
    <h2 class="tab-heading">
        {{ heading }}
    </h2>
</template>

<script>
export default {
    name: 'TabHeading',
    props: {
        heading: String
    },
}
</script>

<style lang="scss" scoped>
.tab-heading {
  color: var(--Global-Black, #000);
  font-family: var(--Wayfinding-Font, Bitter);
  font-size: var(--800, 24px);
  font-weight: 600;
  line-height: 130%;
}
</style>