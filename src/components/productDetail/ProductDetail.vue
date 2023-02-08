<template>
  <div class="flex justify-center items-center">
    <div
      class=" max-w-[70%] justify-center items-center bg-white shadow mb-10 flex flex-wrap wrap border border-gray-200 rounded-lg">
      <span class="w-[40%]">
        <img class="p-8 rounded-t-lg" :src="product.image" alt="product image" />
      </span>
      <div class="px-5 pb-5 w-[60%]">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h5>
        </a>
        <div>
          {{ product.description }}
        </div>
        <div class="flex items-center mb-5 ml-2 mt-2">
          <div>
            Rating: {{ product.rating ? product.rating.rate : 0 }}
          </div>
          <div v-if="product.rating" class="flex items-center mb-5 ml-2 mt-5">
            <div v-for="(_val, i) in parseInt(product.rating.rate)" :key="i">
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
            </div>
          </div>

        </div>
        <div>
          <span class="border rounded-full flex items-center justify-center text-white bg-blue-700  mb-2 mt-2">
            Categoria: {{ product.category }}
          </span>
        </div>
        <div class="flex items-center justify-between flex-wrap wrap">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">R${{ product.price }}</span>
          <input placeholder="Quantidade" type="number"
            class="w-36 border mb-4 mt-2 flex items-center justify-center text-center" @change="addQuantity()" />
          <button href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
          " @click="addProduct(product, quantity)">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { inject, ref } from '@vue/runtime-core';



export default {
  name: "ProductDetailComponent",
  props: {
    product: {}
  },
  setup() {
    const quantity = ref(0)
    const addProduct = inject('addCart')
    const addQuantity = () => {

      quantity.value = event.target.value
    }
    return { addProduct, addQuantity, quantity }
  }
};
</script>
