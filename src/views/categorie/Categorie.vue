<template>
  <div class="mt-8" v-if="isFetch">
    <LoadingComponent />
  </div>

  <div v-if="!isFetch">
    <div class="flex items-center flex-wrap wrap">
      <h1 class="categori-title mb-2 mt-2 ml-5"> {{ route.params.id }}</h1>
      <div class="w-48 ml-20 mt-10">
        <label for="underline_select" class="sr-only">Underline select</label>
        <select id="countries" @change="sortItems()"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected disabled>Filtrar</option>
          <option value="aZ">Ordem Alfabetica A - Z</option>
          <option value="zA">Ordem Alfabetica Z - A</option>
          <option value="priceAsc">Maiores Preço</option>
          <option value="priceDesc">Menores Preço</option>
          <option value="rating">Avaliação</option>

        </select>
      </div>

    </div>
    <div class="mt-8">
      <div class="flex items-center wrap flex-wrap">
        <div v-for="(product, i) in products" :key="i"
          class="max-w-[19%] flex-wrap wrap ml-2 hover:translate-y-1 ease-in duration-300">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import LoadingComponent from '../../components/loading/Loading.vue'
import ProductComponent from '../../components/product/Product.vue'
import api from "@/services/api";
import { watch } from "vue";
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";

export default {
  name: "CategorieView",
  components: {
    LoadingComponent,
    ProductComponent
  },

  setup() {
    const route = useRoute();
    const products = ref([]);
    const isFetch = ref(false);
    const fetchCategories = async () => {
      isFetch.value = true
      await api.get(`products/category/${route.params.id}`).then((res) => {
        products.value = res.data
        isFetch.value = false;
      });
    };

    const sortItems = () => {
      event.target.value == 'priceAsc' ?
        products.value.sort(function (a, b) {
          return parseInt(a.price) > parseInt(b.price) ? -1 : parseInt(a.price) < parseInt(b.price) ? 1 : 0;
        })
        :
        event.target.value == 'priceDesc' ?
          products.value.sort(function (a, b) {
            return parseInt(a.price) < parseInt(b.price) ? -1 : parseInt(a.price) > parseInt(b.price) ? 1 : 0;
          })
        :
        event.target.value == 'aZ' ?
        products.value.sort(function (a, b) {
          return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      }) 
      : event.target.value == 'zA' ?
      products.value.sort(function (a, b) {
          return a.title > b.title ? -1 : a.title < b.title ? 1 : 0;
      }) 
      :  products.value.sort(function (a, b) {
            return parseFloat(a.rating.rate) > parseFloat(b.rating.rate) ? -1 : parseFloat(a.rating.rate) < parseFloat(b.rating.rate) ? 1 : 0;
          })

    }

    onMounted(fetchCategories);


    watch(
      () => route.fullPath,
      async () => {
        await fetchCategories()
      }
    );

    return { isFetch, products, route, sortItems };
  },
};
</script>

<style>
.categori-title {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

