<template>
  <div class="nav-menu">
    <h1>
      {{greeting}}, <br>
      {{ userName }}
    </h1>
    <nav>
      <router-link
        v-for="item in navList"
        :key="item.name"
        :to="item.link"
        @click="$emit('switch-tab', item.link)"
      >
        <span>{{item.name}}</span>
        <span class="nav-link-arrow">></span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    greeting: String,
    userName: String,
    navList: Array
  }
}
</script>

<style lang="scss" scoped>
.nav-menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
  h1 {
    color: var(--Global-Black, #000);
    font-size: var(--900, 28px);
    font-weight: 600;
    line-height: 130%;
    padding-bottom: 20px;

    @media screen and (max-width:768px) {
      font-size: var(--800, 24px);
    }  
  }
  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--Headline, #302F2F);
      font-size: var(--600, 20px);
      font-weight: 400;
      line-height: 130%;
      text-decoration: none;
      transition: all 0.2s ease;

      @media screen and (max-width:768px) {
        height: 40px;
      }

      &.router-link-active {
          font-weight: 700;
      }
      & .nav-link-arrow {
        display: none;

        @media screen and (max-width:768px) {
          display: inline-block;
        }
      }
    }
  }
}
</style>