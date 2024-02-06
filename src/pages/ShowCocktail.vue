<script>
import axios from 'axios';
import {store} from '../store';

export default{
    data(){
        return{
            currentCocktail: null,
            store,
            loading: false,
        };
    },
    created(){
        this.loading = true;

        axios.get(`${this.store.baseUrl}/api/cocktails/${this.$route.params.id}`)
        .then((resp) =>{
            console.log(resp);

            if(resp.data.success){
                this.currentCocktail = resp.data.result;
            }else{
                console.log('---ERROR ---Cocktail non trovato');
            }
        }).finally(() =>{
            this.loading = false;
        })
    }
}

</script>

<template>
    <h1>Show</h1>
</template>

<style lang="scss" scoped>
</style>