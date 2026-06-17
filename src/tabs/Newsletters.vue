<template>
  <TabView
    customClass="newsletters-tab"
    tabTitle="Newsletters"
    :hasHeadingButton="false"
  >
    <div class="newsletters-grid">
      <NewsletterCard
        v-for="card in newsletterCards"
        :key="card.id"
        :card="card"
        @remove-newsletter="$emit('remove-newsletter', card.id)"
        @add-newsletter="$emit('add-newsletter', card.id)"
      />
    </div>
    <NavPanel backBtnLabel="< Back" nextBtnLabel="Edit" @back="this.$emit('back-to-nav-menu')"
      @next="isEditMode = true" />
  </TabView>
</template>

<script>
import NavPanel from '@/components/NavPanel.vue';
import NewsletterCard from '@/components/NewsletterCard.vue';
import TabView from '@/components/UI/TabView.vue';

export default {
  name: 'Newsletters',
  components: {
    NavPanel,
    NewsletterCard,
    TabView
  },
  props: {
    newsletterCards: Array
  },
  emits: ['remove-newsletter', 'add-newsletter']
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap');

.newsletters-tab {
  .tab-content {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .newsletters-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;

      @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>