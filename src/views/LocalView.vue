<template>
  <div>
    <h1 class="title">Alunos</h1>
  
    <div class="container">
      <div v-for="aluno in alunos" :key="aluno.id">
        <card-local :aluno="aluno"></card-local>
      </div>
    </div>
  </div>
</template>

<script>
import CardLocal from '@/components/CardLocal.vue'

const API_URL = `http://localhost:3333/alunos`

export default {
  data: () => ({
    alunos: []
  }),
  methods: {
    async getAlunos () {
      const response = await fetch(API_URL)
      const data = await response.json()
      
      this.alunos = data
    }
  },
  created() {
    this.getAlunos()
  },
  components: {
    CardLocal
  }
}
</script>
