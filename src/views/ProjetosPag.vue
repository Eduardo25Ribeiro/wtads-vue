<template>
  <main>
    <h2>Projetos</h2>
    <div class="card" v-for="p in projetos" :key="p.nome">
      <h3>{{ p.nome }}</h3>
      <p>{{ p.integrantes }}</p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProjetosPage',
  data() {
    return {
      projetos: [
        { nome: 'Estudantes excelentes', integrantes: 'Eduardo1, Eduardo2, Eduardo3' },
        { nome: 'Professores', integrantes: 'dani, alexandre, felipao' },
        { nome: 'Resenha absurda', integrantes: 'Fafabs, gabs, pedrinho, jl, abrinha, emanu' }
      ]
    }
  }
}
</script>