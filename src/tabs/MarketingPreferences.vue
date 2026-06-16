<template>
  <TabView
    customClass="marketing-preferences-tab"
    tabTitle="Marketing Preferences"
    :hasHeadingButton="false"
  >
    <div class="tab-content-body">
      <CheckboxInputControl
        v-for="checkbox in marketingPreferencesCheckboxes"
        :key="checkbox.id"
        :checkboxInput="checkbox"
      />
    </div>
    <NavPanel backBtnLabel="< Back" nextBtnLabel="Edit" @back="this.$emit('back-to-nav-menu')"
      @next="console.log('next btn clicked')" />
  </TabView>
</template>

<script>
import CheckboxInputControl from '@/components/UI/CheckboxInputControl.vue';
import NavPanel from '@/components/NavPanel.vue';
import TabView from '@/components/UI/TabView.vue';

export default {
  name: 'MarketingPreferences',
  components: {
    CheckboxInputControl,
    NavPanel,
    TabView
  },
  props: {
    marketingPreferencesCheckboxes: Array
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap');
.marketing-preferences-tab {
  .tab-content-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--700, 30px);
  }
}
</style>

