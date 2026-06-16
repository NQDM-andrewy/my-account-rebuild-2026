<template>
  <div class="main-wrapper">
    <header class="header">
      Header
    </header>
    <main class="main">
      <MyAccountController />
    </main>
  </div>
</template>

<script>
import MyAccountController from './components/MyAccountController.vue';
export default {
  name: 'App',
  components: {
    MyAccountController
  },
  data() {
    return {}
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body {
  font-family: 'Bitter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 130%;
}
.container {
  width: 90%;
  margin: 0 auto;
  max-width: 940px;
}
.main-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  min-height: 60px;
  border-bottom: 1px solid var(--Global-Grey-4, #E6E6E9);
  background: var(--Global-White, #FFF);
  padding: 0 85px;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.d-flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.justify-space-between {
  justify-content: space-between;
}
.align-items-center {
  align-items: center;
}
.flex-1 {
  flex: 1
}
.w-100 {
  width: 100%;
}
.h-100 {
  height: 100%;
}
</style>