
<template>
    <div class="flex w-full items-center text-white">
        <div class=" ml-2" v-for="(categorie, i) in categories" :key="i">
            <span class="hover:border-b-2 hover:cursor-pointer hover:text-yellow-500" v-bind:class="{'border-b-2 text-yellow-500': route.params.id == categorie}">
                <router-link :to="{ path: '/categorie/' + categorie }">
                    {{ categorie }}
                </router-link>
            </span>
        </div>
    </div>
</template>

<script>
import api from '@/services/api';
import { onMounted, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
export default {
    name: 'CategoriesComponent',
    setup() {
        const route = useRoute()
        const categories = ref([]);
        const fetchCategories = async () => {
            await api.get('products/categories').then((res) => {
                categories.value = res.data
            })
        }
        onMounted(fetchCategories)
        return { categories, route }
    },
}
</script>
