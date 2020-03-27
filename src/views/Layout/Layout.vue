<template>
  <div id="layout">
    <Header />
    <router-view id="container"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
#layout {
  @include flex(column, flex-start);
  height: 100%;
}
#container {
  width: 100%;
  flex: 1;
  overflow: auto;
}
</style>

