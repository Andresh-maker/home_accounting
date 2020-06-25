<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "main") + "-layout";
    }
  },
  components: {
    DefaultLayout,
    MainLayout
  }
};
</script>

<style lang="less">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
