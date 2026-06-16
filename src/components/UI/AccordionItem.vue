<template>
  <div class="accordion-item" :class="{ 'is-open': isOpen }">
    <div class="accordion-item-header" @click="toggle">
      <h4>{{ accordionContent.heading }}</h4>
      <img
        src="../../images/caret.svg"
        width="24"
        height="24"
        alt="Caret"
        class="caret-icon"
        loading="lazy"
      >
    </div>

    <div class="accordion-item-body">
      <p>{{ accordionContent.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionItem',
  props: {
    accordionContent: Object
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap');
.accordion-item {
  &-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    cursor: pointer;
    position: relative;
    z-index: 3;
    h4 {
      color: #000;
      font-family: "Noto Sans";
      font-size: 17px;
      font-weight: 600;
      line-height: 130%;
      position: relative;
      z-index: 2;
    }
    .caret-icon {
      transition: all ease 0.3s;
    }
  }
  &-body {
    padding-top: 0;
    transition: all ease 0.3s;
    p {
      color: #000;
      font-family: var(--Body-Font, Bitter);
      font-size: var(--400-base, 17px);
      font-weight: 400;
      line-height: 150%;
      opacity: 0;
      max-height: 0;
      transition: all ease 0.3s;
    }
  }
  &.is-open {
    .accordion-item-header {
      .caret-icon {
        transform: rotateZ(180deg);
      }
    }
    .accordion-item-body {
      padding-top: 10px;
      p {
        opacity: 1;
        max-height: unset;
      }
    }
  }
}
</style>