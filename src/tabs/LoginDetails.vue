<template>
  <TabView
    customClass="login-details-tab"
    tabTitle="Login Details"
    :isEditMode="isEditMode"
    :hasHeadingButton="true"
    headingButtonLabel="Edit"
    @heading-button-click="isEditMode = true"
  >
    <DetailsForm
      v-if="isEditMode"
      :details="loginDetails"
      cancelBtnLabel="Cancel"
      submitBtnLabel="Save"
      @cancel="cancelProgress"
      @submit="submitChanges"
    />
    <div v-else class="d-flex flex-column h-100">
      <DetailsTable :details="loginDetails" />
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
  name: 'LoginDetails',
  components: {
    DetailsForm,
    DetailsTable,
    NavPanel,
    TabView
  },
  props: {
    loginDetails: Array
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap');
.login-details-tab {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .heading-btn {
    @media screen and (max-width:768px) {
      display: none
    }
  }
  .content {
    flex: 1
  }
  .nav-panel {
    display: none;
    
    @media screen and (max-width:768px) {
      display: flex
    }
  }
}
.details-table {
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.3s ease;
  &-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;

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
.details-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  transition: all 0.3s ease;
  .form-control {
    display: flex;
    flex-direction: column;
    gap: 5px;
    label {
      color: var(--Input-Label-Color, #232323);
      font-family: var(--UI-Font, "Libre Franklin");
      font-size: var(--300, 16px);
      font-weight: 400;
    }
    input {
      height: 40px;
      padding: var(--200, 5px) var(--300, 10px);
      border-radius: var(--2, 2px);
      border: 1px solid var(--border-form, #E6E6E9);
      color: var(--Global-Slate, #333);
      font-family: var(--UI-Font, "Libre Franklin");
      font-size: var(--400-base, 17px);
      font-weight: 400;
    }
  }
  .control-panel {
    display: flex;
    padding: var(--300, 10px) 0;
    justify-content: flex-end;
    align-items: center;
    gap: var(--300, 10px);
    margin-top: 30px;
  }
  .buttons-group {
    display: none;

    @media screen and (max-width:768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>

