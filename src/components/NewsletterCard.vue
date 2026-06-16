<template>
  <div class="newsletter-card">
    <div v-if="card.image" class="newsletter-card-image" :style="`background: #999 url(${card.image}) no-repeat center / cover;`"></div>
    <div class="newsletter-card-body">
      <div class="card-heading">
        <div class="recurrence">{{card.recurrence}}</div>
        <img v-if="card.isSelected" src="../images/toggle-minus.svg" @click="$emit('remove-newsletter', card.id)" width="25" height="25" alt="Toggle Icon" class="toggle-icon" loading="lazy">
        <img v-else src="../images/toggle-plus.svg" @click="$emit('add-newsletter', card.id)" width="25" height="25" alt="Toggle Icon" class="toggle-icon" loading="lazy">
      </div>
      <div class="card-content">
        <h4 class="title">{{card.title}}</h4>
        <p class="description">{{card.description}}</p>
        <ControlButton @click="$emit('preview', card.id)" label="Preview" />
      </div>
    </div>
  </div>
</template>

<script>
import ControlButton from '@/components/UI/ControlButton.vue';
export default {
  name: 'NewsletterCard',
  components: {
    ControlButton
  },
  props: {
    card: Object
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap');
.newsletter-card {
  border-radius: 2px;
  border: 1px solid var(--Global-Grey-4, #E6E6E9);
  background: var(--Global-White, #FFF);
  overflow: hidden;
  &-image {
    display: block;
    width: 100%;
    aspect-ratio: 286/150;
    overflow: hidden;
  }
  &-body {
    display: flex;
    flex-direction: column;
    padding: var(--400-base, 15px);
    gap: var(--300, 10px);
    .card-heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .recurrence {
        color: var(--Palette-1-Alt, #0F192D);
        font-family: var(--Taxonomy, "Libre Franklin");
        font-size: var(--100, 12px);
        font-weight: 400;
      }
      .toggle-icon {
        cursor: pointer;
      }
    }
    .card-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--300, 10px);
      .title {
        color: var(--Palette-1-Alt, #0F192D);
        font-family: var(--Brand-Font, "Roboto Slab");
        font-size: var(--500, 18px);
        font-weight: 700;
        line-height: 120%;
        max-height: 44px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .description {
        color: var(--Body, #424242);
        font-family: var(--Body-Font, Bitter);
        font-size: var(--200, 14px);
        font-weight: 400;
        line-height: 120%;
        max-height: 34px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .control-btn {
        span {
          font-size: var(--200, 14px);
        }
      }
    }
  }

}
</style>