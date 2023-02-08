<template>
  <div class="w-full rounded overflow-hidden shadow-lg mb-4 ">
    <img class="w-full h-[186px]" :src="product.image" :alt="product.category" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p class="text-gray-700 h-[80px] text-base truncate">
       {{product.description}}
      </p>
    </div>
    <div class="flex justify-center flex-wrap wrap">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#{{product.category}}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >R${{product.price}}</span
      >
    </div>
  </div>
  
</template>

<script>
export default {
  name: "ProductComponent",
  props: {
    product: [],
  },
};
</script>
