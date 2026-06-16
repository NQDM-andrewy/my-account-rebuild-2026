<template>
  <TabView
    customClass="subscriptions-tab"
    tabTitle="Subscriptions & billing"
    :hasHeadingButton="false"
  >
    <div class="subscriptions-frame">
      {subscriptions-frame}
    </div>
    <NavPanel
      backBtnLabel="< Back"
      nextBtnLabel="Edit"
      @back="this.$emit('back-to-nav-menu')"
      @next="console.log('next btn clicked')"
    />
  </TabView>
</template>

<script>
import NavPanel from '@/components/NavPanel.vue';
import TabView from '@/components/UI/TabView.vue';

export default {
  name: 'Subscriptions',
  components: {
    NavPanel,
    TabView
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap');
.subscriptions-tab {
  .tab-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .subscriptions-frame {
      flex: 1;
      background: #ccc;
      padding: 1rem;
      min-height: 200px;
    }
  }
}
</style>