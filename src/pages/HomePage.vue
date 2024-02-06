<script>
import axios from 'axios';
import { store } from '../store.js';
import CocktailCard from '../components/CocktailCard.vue'
export default {
    data() {
        return {
            store,
            cocktails: [],
            isLoading: true,

        }
    },
    created(){
        axios.get(`${this.store.baseUrl}/api/cocktails`)
        .then((resp)=>{
            console.log(resp);
            console.log(this.store.baseUrl);
            this.cocktails = resp.data.results;
            this.isLoading = false;

        })
    },
    components: {
        CocktailCard
    }
}

</script>


<template>

    <div class="container">
        <h2> La lista dei cocktail</h2>
        <div v-if="isLoading" class="text-center mt-3">
            <p>Caricamento in corso</p>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div v-else class="row row-cols-3 gy-5 mt-2">
                <div class="col d-flex align-self-stretch" v-for="cocktail in cocktails" key="cocktail.id">
                    <CocktailCard :cocktail="cocktail" />

                </div>
            
            </div>
        
         
    </div>
    

</template>

<style lang="scss" scoped>

</style>