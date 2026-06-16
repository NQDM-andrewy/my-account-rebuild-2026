<template>
  <TabView
    customClass="commenting-alias-tab"
    tabTitle="Commenting alias"
    :hasHeadingButton="false"
  >
    <div class="description">
      <p>If you do not provide a commenting alias, your real name (first name and last name) will be shown against any comments you leave on the site.</p> 
      <p>Note: you can only change your commenting alias once every month.</p>
      <FormControl :formControl="commentingAliasInput" />
    </div>
    <NavPanel backBtnLabel="< Back" nextBtnLabel="Edit" @back="this.$emit('back-to-nav-menu')"
      @next="console.log('next btn clicked')" />
  </TabView>
</template>

<script>
import NavPanel from '@/components/NavPanel.vue';
import FormControl from '@/components/UI/FormControl.vue';
import TabView from '@/components/UI/TabView.vue';

export default {
  name: 'CommentingAlias',
  components: {
    NavPanel,
    FormControl,
    TabView
  },
  props: {
    commentingAliasInput: Object
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap');
.commenting-alias-tab {
  .description {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    p {
      color: #000;
      font-family: var(--Body-Font, Bitter);
      font-size: var(--400-base, 17px);
      font-weight: 400;
      line-height: 150%;
    }
    .form-control {
      max-width: 335px;
    }
  }
}
</style>

