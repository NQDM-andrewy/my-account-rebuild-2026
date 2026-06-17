<template>
  <TabView
    customClass="social-accounts-tab"
    tabTitle="Social Accounts"
    :hasHeadingButton="false"
  >
    <div class="social-details-table">
      <div class="social-details-table-row" v-for="row in socialDetails" :key="row.title">
        <div class="title">
          <img :src="row.img" width="20" height="20" :alt="`${row.title} Logo`" loading="lazy">
          <span>{{row.title}}</span>
        </div>
        <div class="control">
          <ControlButton v-if="row.isConnected" @click="$emit('disconnect-account', row.title)" label="Disconnect account" />
          <ControlButton v-else @click="$emit('connect-account', row.title)" label="Connect account" />
        </div>
      </div>
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
import ControlButton from '@/components/UI/ControlButton.vue';
import NavPanel from '@/components/NavPanel.vue';
import TabHeading from '@/components/UI/TabHeading.vue';
import TabView from '@/components/UI/TabView.vue';

export default {
  name: 'SocialAccounts',
  components: {
    ControlButton,
    NavPanel,
    TabHeading,
    TabView
  },
  props: {
    socialDetails: Array
  },
  emits: ['disconnect-account', 'connect-account']
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap');
.social-accounts-tab {
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  .tab-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .social-details-table {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
      &-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5px;
        .title {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--Monoscale-700, #333);
          font-family: var(--Body-Font, Bitter);
          font-size: var(--400-base, 17px);
          font-weight: 600;
        }
        .control {
          &-btn {
            span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>