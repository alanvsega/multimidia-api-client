export default {
    name: 'Row',
    props: {
      person: {
        type: Object,
        required: true
      }
    },
    template: `
    <ul class="row">
      <li class="col-m">{{ aluno.nome }}</li>
      <li class="col-l">{{ aluno.matriculado }}</li>
      <li class="col-l">{{ aluno.idade }}</li>
      <li class="col-m">{{ aluno.time }}</li>
    </ul>
    `
  }