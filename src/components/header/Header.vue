<template>
    <div class="flex between items-center ml-10">
        <div class="flex items-center w-full">
            <CategoriesComponent></CategoriesComponent>
        </div>
        <div class="box-search flex justify-center w-full mt-2">
           <div>
            <input class="ml-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="O que procura...?">
           </div>
        </div>

        <div>
            <span class="material-icons md-36 hover:cursor-pointer hover:text-blue-500 mr-4 mt-4">shopping_cart</span>
        </div>
    </div>
</template>

<script>
import CategoriesComponent from './Categories.vue'
    export default {
        name: 'HeaderComponent',
        components: {
            CategoriesComponent
        }
    }
</script>