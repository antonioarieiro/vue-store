<template>
  <HeaderComponent/>
  <router-view></router-view>
</template>

<script>
import { ref } from "vue";
import HeaderComponent from "./components/header/Header.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
  },
  setup() {
    const currentCategory = ref([])

    return {
      currentCategory
    }
  }

};
</script>
