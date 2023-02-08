<template>
  <div class="mt-8">
    <div class="flex items-center wrap flex-wrap">
      <div
        v-for="(product, i) in products"
        :key="i"
        class="max-w-[19%] flex-wrap wrap ml-2 hover:translate-y-1 ease-in duration-300"
      >
        <ProductComponent :product="product" />
      </div>
    </div>
  </div>
  <PaginationComponent
    :changePage="changePage"
    :isFetch="isFetch"
  ></PaginationComponent>
</template>

<script>
import ProductComponent from "../../components/product/Product.vue";
import PaginationComponent from "../../components/pagination/Pagination.vue";
import api from "@/services/api";
import { onMounted, ref } from "@vue/runtime-core";
export default {
  name: "HomePage",
  components: {
    ProductComponent,
    PaginationComponent,
  },
  setup() {
    const products = ref([]);
    const currentPage = ref(1);
    const isFetch = ref(false);
    const changePage = () => {
      currentPage.value += 1;
      fetchCategories();
    };
    const fetchCategories = async () => {
      isFetch.value = true;
      await api.get(`products?limit=${currentPage.value * 10}`).then((res) => {
        products.value = res.data;
        return (isFetch.value = false);
      });
    };
    onMounted(fetchCategories);

    console.log(isFetch, "xablau");
    return { products, changePage, isFetch };
  },
};
</script>
