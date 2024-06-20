<template>
    <div class="card">
        <p class="card-title">{{ person.nome }}</p>
        <ul class="card-description">
            <li>Altura: {{ person.idade }}</li>
            <li>Peso: {{ person.matriculado }}</li>
            <li>Cor do cabelo: {{ person.time }}</li>
        </ul>
    </div>
</template>

<script>
export default {
name: 'Card',
props: {
    person: {
        type: Object,
        required: true
    }
}
}
</script>

<style>

</style>