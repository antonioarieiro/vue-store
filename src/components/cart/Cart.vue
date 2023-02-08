<template>

  <div
    class="fixed top-0 flex items-center justify-center z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    v-if="showCartState">
    <div class="relative w-full h-full max-w-2xl md:h-auto">

      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex items-start justify-between p-4 border-b rounded-t">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white title">
            Cart
          </h3>
          <button @click="showCart()"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div v-if="itemsInCart.length < 1">
          <h3 class="text-xl font-semibold text-gray-900  title-empity text-center p-4">
            Carrinho Vazio
          </h3>
        </div>
        <div class="p-6 space-y-6 max-h-[500px] overflow-y-auto" v-if="itemsInCart.length > 0">
          <div
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
            v-for="(product, i) in itemsInCart" :key="i">
            <img
              class="object-cover w-full rounded-t-lg h-96 ml-4 md:h-auto md:w-48 p-2 md:rounded-none md:rounded-l-lg"
              :src="product.image" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal truncate">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate">{{ product.title }}</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">{{ product.title }}</p>
              <div class="flex items-center">
                <p class="p-2 bg-blue-700 w-20 text-white  items-center flex text-center justify-center">RS: {{
                  product.price
                }}</p>

                <button class="ml-4 border w-25 p-2 bg-red-300 text-white font-bold hover:bg-red-500"
                  @click="removeItemFromCart(product)">Remover</button>
                <div class="w-full flex items-end justify-end">
                  Quantidade: {{ product.qty || 1 }}
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <div class="w-36 border p-4 font-bold text-center" v-if="itemsInCart.length > 0">
            Total: {{ itemsInCart.totalPrice.toFixed(2) }}
          </div>
          <button v-if="itemsInCart.length > 0" @click="resetCart()"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Finalizar Compra
          </button>
          <button @click="showCart()"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "CartComponent",
  props: {
    showCartState: Boolean,
    showCart: Function,
    removeItemFromCart: Function,
    resetCart: Function,
    itemsInCart: []
  },
};
</script>

<style>
.title {
  color: #213547;
  font-size: 34px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;

}

.title-empity {
  color: #213547;
  font-size: 44px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;

}
</style>