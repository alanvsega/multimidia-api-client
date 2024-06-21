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
      <ul class="row">
        <li class="col-m">{{ person.name }}</li>
        <li class="col-l">{{ person.height }}</li>
        <li class="col-l">{{ person.mass }}</li>
        <li class="col-m">{{ person.hair_color }}</li>
        <li class="col-l">{{ person.skin_color }}</li>
        <li class="col-m">{{ person.eye_color }}</li>
        <li class="col-l">{{ person.birth_year }}</li>
      </ul>
    </div>
  
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
import Card from '@/components/Card.vue'
import Row from '@/components/Row.vue'

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
    Card,
    Row
  }
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/star-wars');

body {
  background-color: black;
}

.title {
  color: #FFE807;
  font-family: 'Star Wars', sans-serif;
  font-size: 40px;
  font-weight: normal;
  padding: 20px;
  text-align: center;
}

.type {
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
}

.row {
  text-align: start;
  align-content: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 0;
}

.header {
  color: #FFE807;
  font-weight: bold;
  font-size: 14px;
  background-color: #121212 !important;
}

.row li {
  background-color: white;
  display: inline-block;
  padding: 10px;
  border: 1px solid black;
}

.col-l {
  width: 100px;
}

.col-m {
  width: 200px;
}

.col-g {
  width: 250px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.card {
  background-color: white;
  border-radius: 10px;
  margin: 20px;
  height: 250px;
  width: 250px;
  text-align: center;
  align-content: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.card-title {
  color: #FFE807;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 1px 1px 5px black;
}

.card-description {
  font-size: 14px;
  text-align: start;
  padding-left: 50px;
}</style>