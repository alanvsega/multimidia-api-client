<template>
  <div>
    <h1 class="title">Personagens de Star Wars</h1>
  
    <h4 class="type">Tabela</h4>
  
    <ul class="row">
      <li class="col-m header">Nome:</li>
      <li class="col-l header">Altura:</li>
      <li class="col-l header">Peso:</li>
      <li class="col-m header">Cor do cabelo:</li>
      <li class="col-l header">Cor de pele:</li>
      <li class="col-m header">Cor dos olhos:</li>
      <li class="col-l header">Ano:</li>
    </ul>
  
    <div v-for="person in people" :key="person.id">
      <row :person="person"></row>
    </div>
  
    <h4 class="type">Cartões</h4>
  
    <div class="container">
      <div v-for="person in people" :key="person.id">
        <card :person="person"></card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/card.js'

const API_URL = `https://swapi.dev/api/people/`

export default {
  data: () => ({
    people: []
  }),
  methods: {
    async getPeople () {
      const response = await fetch(API_URL)
      const data = await response.json()
      
      this.people = data.results
    }
  },
  created() {
    this.getPeople()
  },
  components: {
    Card
  }
}
</script>
