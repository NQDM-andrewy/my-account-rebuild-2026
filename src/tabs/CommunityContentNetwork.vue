<template>
  <TabView
    customClass="community-content-network-tab"
    tabTitle="Community Content Network"
    :hasHeadingButton="!showFAQSection"
    headingButtonLabel="Help and FAQs"
    @heading-button-click="showFAQSection = true"
  >
    <div class="tab-content-body">
      <section v-if="showFAQSection" class="tab-section faq-section">
        <h3 class="section-heading">FAQ</h3>
        <AccordionItem
          v-for="item in faqItems"
          :key="item.heading"
          :accordionContent="item"
        />
        <div class="control-panel">
          <ControlButton @click="showFAQSection = false" label="< Back to article list" />
        </div>
      </section>
      <div v-else style="height:100%">
        <section class="tab-section start-section">
          <p>
            You've just taken your first step towards getting your stories published. We're really glad you've signed up and we can't wait to see the things you're going to send to us - whether that's a report from your local history group, a photo of something you love, a review of a restaurant you've visited, a recipe for your granny's best flapjack or something else entirely, we want to see the great articles you're going to create. 
          </p>
          <p>
            There are just two more things we need from you before you can get started. Firstly, we'll need a contact phone number (so we can contact you quickly and easily if we have any questions about something you've sent to us), and you need to read and accept our terms and conditions. Once you've done those things, please click on the button below to get started now! 
          </p>
          <FormControl :formControl="ccnPhoneInput" />
          <CheckboxInputControl :checkboxInput="termsAndConditionsCheckbox" />
          <p>
            Any contribution you make must be your own original work - that means you must have written the text and taken the picture yourself. If someone else did, you need their written permission for us to use it on our terms. You are also responsible for getting the facts right, keeping within the law and complying with the Editors' Code of Practice. If in doubt about anything, tell us and we will help. 
          </p>
          <div class="control-panel">
            <ControlButton @click="getStarted" dark label="Get started" />
          </div>
        </section>
        <section class="tab-section articles-section">
          <h3 class="section-heading">Your articles</h3>
          <div>
            <ControlButton @click="startNewArticle" dark label="Write a new article +" />
          </div>
          <ul class="articles-list">
            <li class="articles-list-item">
              <h2>
                Talking animals are infiltrating our local council meetings
              </h2>
              <p>
                In a bizarre turn of events, the local council meetings have been disrupted by an unexpected cohort: talking animals. Residents and officials report creatures ranging from a loquacious  Labrador advocating for more dog parks to a persuasive squirrel  demanding acorn-based urban planning. The meetings, once dominated by  zoning debates, now feature heated interspecies dialogues, with animals  using speech devices or—inexplicably—speaking outright.
              </p>
              <p class="stats">
                <b>Status:</b> Sent to knowledge
              </p>
              <p class="stats">
                <b>Site:</b> The National
              </p>
              <p class="stats">
                <b>Submitted:</b> 17th Feb 2025
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
    <NavPanel backBtnLabel="< Back" nextBtnLabel="Edit" @back="this.$emit('back-to-nav-menu')"
      @next="console.log('next btn clicked')" />
  </TabView>
</template>

<script>
import AccordionItem from '@/components/UI/AccordionItem.vue';
import CheckboxInputControl from '@/components/UI/CheckboxInputControl.vue';
import ControlButton from '@/components/UI/ControlButton.vue';
import FormControl from '@/components/UI/FormControl.vue';
import NavPanel from '@/components/NavPanel.vue';
import TabView from '@/components/UI/TabView.vue';

export default {
  name: 'CommunityContentNetwork',
  components: {
    AccordionItem,
    CheckboxInputControl,
    ControlButton,
    FormControl,
    NavPanel,
    TabView
  },
  props: {
    faqItems: Array,
    ccnPhoneInput: Object,
    termsAndConditionsCheckbox: Object,
  },
  data() {
    return {
      showFAQSection: false,
    }
  },
  methods: {
    getStarted() {
      console.log('getStarted method works')
    },
    startNewArticle() {
      console.log('startNewArticle method works')
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap');
.community-content-network-tab {
  .tab-content-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--700, 30px);
    .section-heading {
      color: var(--Heading, #222);
      font-family: var(--Wayfinding-Font, Bitter);
      font-size: var(--700, 22px);
      font-weight: 600;
      line-height: 120%;
    }
    .faq-section {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    .tab-section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-height: 100%;
      p {
        color: #000;
        font-family: var(--Body-Font, Bitter);
        font-size: var(--400-base, 17px);
        font-weight: 400;
        line-height: 150%; 
      }
      .control-panel {
        margin-top: auto;
        display: flex;
        justify-content: flex-end;
      }
      .form-control {
        max-width: 335px;
      }
    }
  }

  .articles-list {
    &-item {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px;
      border-radius: 10px;
      border: 1px solid var(--Global-Grey-4, #E6E6E9);
      margin-bottom: 20px;
      h2 {
        color: #000;
        font-family: var(--Article-Heading-Font, Bitter);
        font-size: var(--600, 20px);
        font-weight: 600;
        line-height: 130%;
      }
      p {
        color: #000;
        font-family: var(--Body-Font, Bitter);
        font-size: var(--400-base, 17px);
        font-weight: 400;
        line-height: 150%;
        &.stats {
          font-family: var(--Body-Font, "Noto Sans");
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>

