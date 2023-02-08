<template>
  <div class="bg-indigo-600">
    <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex w-0 flex-1 items-center">
          <span class="flex rounded-lg bg-indigo-800 p-2">
            <span class="material-icons text-white md-36 hover:cursor-pointer hover:text-yellow-300">
              <router-link to="/">
                storefront
              </router-link>
            </span>
          </span>
          <CategoriesComponent></CategoriesComponent>
        </div>
        <div class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
          <input
            class="ml-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search" type="text" placeholder="O que você procura...?" />
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button type="button"
            class="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            @click="showCart(show)"
            >
            <span
              class="material-icons md-36 text-white hover:cursor-pointer hover:text-yellow-300">shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesComponent from "./Categories.vue";
export default {
  name: "HeaderComponent",
  components: {
    CategoriesComponent,
  },

  props: {
    showCart: Function
  },
};
</script>
