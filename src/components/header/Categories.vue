<template>
    <div class="flex w-full items-center text-white">
        <div class=" ml-2" v-for="(categorie, i) in categories" :key="i">
            <span class="hover:border-b-2 hover:cursor-pointer hover:text-yellow-500">
                {{categorie}}
            </span>
        </div>
    </div>
</template>

<script>
    import api from '@/services/api';
    import { onMounted, ref } from '@vue/runtime-core';
    export default {
        name: 'CategoriesComponent',
        setup() {
            const categories = ref([]);
            const fetchCategories = async () => {
               await api.get('products/categories').then((res) => {
                    categories.value = res.data
                })
            }
            onMounted(fetchCategories)

            return { categories }
        }
    }
</script>