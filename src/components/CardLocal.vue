<template>
    <div class="card">
        <p class="card-title">{{ aluno.nome }}</p>
        <ul class="card-description">
            <li>Idade: {{ aluno.idade }}</li>
            <li>Matriculado: {{ aluno.matriculado }}</li>
            <li>Time: {{ aluno.time }}</li>
        </ul>
    </div>
</template>

<script>
export default {
name: 'CardLocal',
props: {
    aluno: {
        type: Object,
        required: true
    }
}
}
</script>

<style>

</style>