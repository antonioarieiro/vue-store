<template>
  <HeaderComponent></HeaderComponent>
  <HomePage></HomePage>
</template>

<script>
import HeaderComponent from "./components/header/Header.vue";
import HomePage from "./pages/Home/Home.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    HomePage,
  },
};
</script>
