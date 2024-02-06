<script>
import { store } from '../store';

export default {
    props: {
        cocktail: Object,
        ingredients: {
            type: Array,

        }
    },
    data() {
        return {
            store,


        }
    }
}

</script>

<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ cocktail.nome }}</h5>
            <h4 class="card-subtitle mb-2 text-muted"> Alcolico: {{ cocktail.e_alcolico ? 'sì' : 'no' }} </h4>
            <div class="card-body">
                <p class="card-text"> <strong>Prezzo: </strong> {{ cocktail.prezzo }}</p>
                <p class="card-text" style="background-color: {{ cocktail.colore }}"> <strong>Colore: </strong> {{ cocktail.colore }}</p>
                
            </div>
            
            
             <router-link class="btn btn-success"
                :to="{ name: 'show-cocktail', params: { id: cocktail.id } }">Dettagli</router-link>

            
        </div>
    </div>

</template>

<style lang="scss"></style>