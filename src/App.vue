<template>
  <HeaderComponent :showCart="showCart" />
  <Cart :showCartState="showCartState" :showCart="showCart" :itemsInCart="itemsInCart"
    :removeItemFromCart="removeItemFromCart"  :resetCart="resetCart"/>
  <div v-bind:class="{ 'opacity-20': showCartState }">
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, provide } from "vue";
import HeaderComponent from "./components/header/Header.vue";
import Cart from "./components/cart/Cart.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    Cart
  },
  setup() {
    const showCartState = ref(false);
    const itemsInCart = ref([]);

    const addItemInCart = (item, qty) => {
      itemsInCart.value.totalPrice = 0
      if (itemsInCart.value.includes(item)) {
        itemsInCart.value.filter(value => value.id == item.id ? value.qty += qty ? parseInt(qty) : 1 : '')
      } else {
        qty ? item.qty = parseInt(qty) : item.qty = 1
        itemsInCart.value.push(item)
      }
      itemsInCart.value.map((item) => {
        if (item.qty) {
          itemsInCart.value.totalPrice += item.qty * item.price
        } else {
          itemsInCart.value.totalPrice += item.price
        }
      })

    }

    const removeItemFromCart = (item) => {
      itemsInCart.value = itemsInCart.value.filter(value => value !== item)
      itemsInCart.value.totalPrice = 0
      itemsInCart.value.map((item) => {
        if (item.qty) {
          itemsInCart.value.totalPrice += item.qty * item.price
        } else {
          itemsInCart.value.totalPrice += item.price
        }
      })
    }

    const resetCart = () => {
      itemsInCart.value = []
      itemsInCart.value.totalPrice = 0
      showCartState.value = false;
    }
    const showCart = () => {
      return showCartState.value = !showCartState.value
    }

    provide('addCart', addItemInCart);
    provide('removeCart', removeItemFromCart);
    return {
      showCart,
      showCartState,
      addItemInCart,
      removeItemFromCart,
      resetCart,
      itemsInCart
    }
  }


};
</script>
