<template>
  <div id="myAccountController" class="my-account-controller">
    <div class="container">
      <div class="nav-col" :class="{'is-mob-hidden': isTabColumnActive}">
        <NavMenu
          :greeting="localGreeting"
          :userName="navMenu.userName"
          :navList="navMenu.linkList"
          @switch-tab="showTabColumn"
        />
        <div>
          <ControlButton @click="signOut" label="Sign out" />
        </div>
      </div>
      <div class="tabs-col" :class="{'is-mob-active': isTabColumnActive}">
        <router-view v-slot="{ Component, route }">
          <Transition name="fade" mode="out-in">
            <component
              :is="Component"
              :key="route.fullPath"
              @back-to-nav-menu="isTabColumnActive = false"
              @disconnect-account="disconnectSocialAccount"
              @connect-account="connectSocialAccount"
              @remove-newsletter="removeNewsletter"
              @add-newsletter="addNewsletter"
              :accountDetails="accountDetails"
              :loginDetails="loginDetails"
              :socialDetails="socialDetails"
              :newsletterCards="newsletterCards"
              :commentingAliasInput="commentingAliasInput"
              :marketingPreferencesCheckboxes="marketingPreferencesCheckboxes"
              :faqItems="faqItems"
              :ccnPhoneInput="ccnPhoneInput"
              :termsAndConditionsCheckbox="termsAndConditionsCheckbox"
            />
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ControlButton from './UI/ControlButton.vue';
import NavMenu from './NavMenu.vue';
export default {
  name: 'MyAccountController',
  components: {
    ControlButton,
    NavMenu
  },
  data() {
    return {
      navMenu: {
        userName: 'Andrew',
        linkList: [
          {
            link: '/user/account/account-details/',
            name: 'Account Details'
          },
          {
            link: '/user/account/login-details/',
            name: 'Login Details'
          },
          {
            link: '/user/account/social/',
            name: 'Social Accounts'
          },
          {
            link: '/user/account/subscriptions/',
            name: 'Subscriptions & billing'
          },
          {
            link: '/user/account/newsletters/',
            name: 'Newsletters'
          },
          {
            link: '/user/account/commenting/',
            name: 'Commenting Alias'
          },
          {
            link: '/user/account/marketing-preferences/',
            name: 'Marketing preferences'
          },
          {
            link: '/user/account/ccn/',
            name: 'Community Content Network'
          },
        ]
      },
      accountDetails: [
        {
          id: 'firstName',
          label: 'First Name',
          value: 'Bartholomew',
          type: 'text',
          isRequired: true,
          visible: true,
          hasError: ''
        },
        {
          id: 'lastName',
          label: 'Last Name',
          value: 'Simpson',
          type: 'text',
          isRequired: true,
          visible: true,
          hasError: ''
        },
        {
          id: 'postcode',
          label: 'Postcode',
          value: 'E8 1DP',
          type: 'text',
          isRequired: false,
          visible: true,
          hasError: ''
        },
        {
          id: 'yearOfBirth',
          label: 'Year of Birth',
          value: '-',
          type: 'text',
          isRequired: false,
          visible: true,
          hasError: ''
        },
        {
          id: 'gender',
          label: 'Gender',
          value: 'Male',
          type: 'text',
          isRequired: false,
          visible: true,
          hasError: ''
        },
        {
          id: 'country',
          label: 'Country',
          value: 'United Kingdom',
          type: 'text',
          isRequired: false,
          visible: true,
          hasError: ''
        },
      ],
      loginDetails: [
        {
          id: 'email',
          label: 'Email',
          value: 'Bartholomew@simpson.com',
          type: 'text',
          isRequired: true,
          visible: true,
          hasError: ''
        },
        {
          id: 'password',
          label: 'Password',
          value: '**********',
          type: 'password',
          isRequired: true,
          visible: true,
          hasError: ''
        },
        {
          id: 'confirm_password',
          label: 'Confirm Password',
          value: '**********',
          type: 'password',
          isRequired: true,
          visible: false,
          hasError: ''
        },
      ],
      socialDetails: [
        {
          title: 'Google',
          img: '../images/google.svg',
          isConnected: false
        },
        {
          title: 'Facebook',
          img: '../images/facebook.svg',
          isConnected: true
        },
      ],
      newsletterCards: [
        {
          id: '001',
          image: '',
          recurrence: 'AS IT HAPPENS',
          isSelected: true,
          title: 'Unspun: Your politics briefing',
          description: 'Get email notifications for major news stories.'
        },
        {
          id: '002',
          image: '',
          recurrence: 'AS IT HAPPENS',
          isSelected: false,
          title: 'Unspun: Your politics briefingUnspun: Your politics briefingUnspun: Your politics briefingUnspun: Your politics briefingUnspun: Your politics briefing',
          description: 'Get email notifications for major news stories.'
        },
        {
          id: '003',
          image: '',
          recurrence: 'AS IT HAPPENS',
          isSelected: false,
          title: 'Unspun: Your politics briefing',
          description: 'Get email notifications for major news stories.Get email notifications for major news stories.Get email notifications for major news stories.'
        },
        {
          id: '004',
          image: '',
          recurrence: 'AS IT HAPPENS',
          isSelected: true,
          title: 'Unspun: Your politics briefing',
          description: 'Get email notifications for major news stories.'
        },
      ],
      marketingPreferencesCheckboxes: [
        {
          id: 'current_site_updates',
          label: 'I would like to receive information about updates, events, subscriptions and offers from this site.'
        },
        {
          id: 'newsquest_media_updates',
          label: 'I would like to receive information about updates, events, subscriptions and offers from Newsquest Media Brands.'
        },
        {
          id: 'current_site_third_parties',
          label: 'I would like to receive offers and promotions from third parties, delivered by this site.'
        },
        {
          id: 'selected_third_parties',
          label: 'I would like to receive offers and promotions directly from carefully selected third parties'
        },
      ],
      commentingAliasInput: {
        id: 'commenting_alias',
        label: 'Alias',
        type: 'text',
        value: 'El Barto',
        placeholder: '',
        isRequired: true,
        hasError: ''
      },
      ccnPhoneInput: {
        id: 'ccn_phone_number',
        label: 'Add your contact telephone number',
        type: 'tel',
        value: '',
        placeholder: 'Enter your phone number',
        isRequired: true,
        hasError: ''
      },
      termsAndConditionsCheckbox: {
        id: 'terms_and_conditions',
        label: `I have read and agreed to Newsquest's terms & conditions. `
      },
      faqItems: [
        {
          heading: 'What is the Community Content Network (CCN)?',
          body: 'The Community Content Network (CCN) is a platform where community members can share their unique perspectives and expertise by creating and submitting content. It has been created by Newsquest, the company which own more than 150 local papers across the UK.'
        },
        {
          heading: 'What types of content do you accept?',
          body: 'placeholder'
        },
        {
          heading: 'Will my content be moderated by editors?',
          body: 'placeholder'
        },
      ],
      isTabColumnActive: null
    }
  },
  computed: {
    localGreeting() {
      const hour = new Date().getHours()
      if (hour < 12) return 'Good morning'
      if (hour < 18) return 'Good afternoon'
      return 'Good evening'
    }
  },
  methods: {
    showTabColumn() {
      this.isTabColumnActive = true
    },
    signOut() {
      console.log('Sign Out!')
    },
    disconnectSocialAccount(social) {
      console.log(`disconnectSocialAccount :: ${social}`)
    },
    connectSocialAccount(social) {
      console.log(`connectSocialAccount :: ${social}`)
    },
    removeNewsletter(id) {
      console.log(`removeNewsletter :: ${id}`)
    },
    addNewsletter(id) {
      console.log(`addNewsletter :: ${id}`)
    },
  }
}

</script>

<style lang="scss">
.my-account-controller {
  flex: 1;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    gap: 40px;
    height: 100%;
    flex: 1;

    @media screen and (max-width:768px) {
      overflow-x: hidden;
      gap: 0;
      position: relative;
    }
    .nav-col {
      width: 40%;
      max-width: 300px;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      opacity: 1;
      transition: all 0.4s ease;

      @media screen and (max-width:768px) {
        padding: 0 0;
        width: 100%;
        height: 100%;
        max-width: unset;
        position: absolute;
        top: 0;
        left: 0;
      }

      &.is-mob-hidden {
        @media screen and (max-width:768px) {
          opacity: 0;
          left: -100%;
        }
      }

      .nav-menu {
        flex: 1
      }
    }
    .tabs-col {
      border-left: 1px solid var(--Global-Grey-3, #CCCFD6);
      padding: 0 40px;
      flex: 1;
      transition: all 0.4s ease;

      @media screen and (max-width:768px) {
        border-left: none;
        padding: 0 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 100%;
        flex: unset;
      }

      &.is-mob-active {
        @media screen and (max-width:768px) {
          left: 0;
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>