<template>
  <TabView
    customClass="account-details-tab"
    tabTitle="Account Details"
    :isEditMode="isEditMode"
    :hasHeadingButton="true"
    headingButtonLabel="Edit"
    @heading-button-click="isEditMode = true"
  >
    <DetailsForm
      v-if="isEditMode"
      :details="accountDetails"
      cancelBtnLabel="Cancel"
      submitBtnLabel="Save"
      @cancel="cancelProgress"
      @submit="submitChanges"
    />
    <div v-else class="d-flex flex-column h-100">
      <DetailsTable :details="accountDetails" />
      <NavPanel
        backBtnLabel="< Back"
        nextBtnLabel="Edit"
        @back="backToNavMenu"
        @next="isEditMode = true"
      />
    </div>
  </TabView>
</template>

<script>
import DetailsForm from '@/components/DetailsForm.vue';
import DetailsTable from '@/components/DetailsTable.vue';
import NavPanel from '@/components/NavPanel.vue';
import TabView from '@/components/UI/TabView.vue';

export default {
  name: 'AccountDetails',
  components: {
    DetailsForm,
    DetailsTable,
    NavPanel,
    TabView
  },
  props: {
    accountDetails: Array
  },
  data() {
    return {
      isEditMode: false
    }
  },
  methods: {
    cancelProgress() {
      this.isEditMode = false
    },
    submitChanges() {
      console.log('submitChanges')
    },
    backToNavMenu() {
      this.$emit('back-to-nav-menu')
    }
  }
}
</script>

<style lang="scss"></style>

