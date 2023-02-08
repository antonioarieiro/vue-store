<template>
  <div class="mt-8" v-if="isFetch">
    <Loading />
  </div>
  <h1 class="categori-title mb-2 mt-2 ml-5"> {{ product.title }}</h1>
  <div class="flex w-full items-center justify-center mt-8" v-if="!isFetch">
    <ProductComponent :product="product" />
  </div>
</template>

<script>
import api from "@/services/api";
import Loading from "../../components/loading/Loading.vue";
import ProductComponent from "../../components/productDetail/ProductDetail.vue";
import { ref } from '@vue/reactivity';
import { useRoute } from "vue-router";
import { onMounted } from '@vue/runtime-core';
export default {
  name: "ProductDetailView",
  components: {
    Loading,
    ProductComponent
  },

  setup() {
    const route = useRoute()
    const isFetch = ref(false)
    const product = ref([])
    const fetchProduct = async () => {
      isFetch.value = true
      await api.get(`products/${route.params.id}`).then((res) => {
        product.value = res.data
        isFetch.value = false;
      });
    };

    onMounted(fetchProduct)
    return { product, isFetch }

  }

};
</script>

<style>
.categori-title {
  font-size: 56px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
