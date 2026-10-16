<template>
  <main>
    <h2>Programação</h2>
    <table>
      <tr v-for="item in programacao" :key="item.titulo">
        <th>{{ item.titulo }}</th>
        <td>{{ item.local }}</td>
        <td>{{ item.horario }}</td>
      </tr>
    </table>
  </main>
</template>

<script>
export default {
  name: 'ProgramacaoPage',
  data() {
    return {
      programacao: [
        {titulo: 'Abertura', local: 'Mini Auditório - Bloco C', horario: '09h00 - 09h30' },
        {titulo: 'IdeAção: Transformando ideias em pesquisa - da concepção à apresentação - Viviane Nascimento', local: 'Mini Auditório - Bloco C', horario: '10h00 - 10h30' },
        {titulo: 'Projeto de Desenvolvimento de Software Distribuído - TADS', local: 'Audiovisual 1', horario: '11h00 - 11h30' },
        {titulo: 'Cajuínas / Técnica Eureca', local: 'Mini Auditório - Bloco C', horario: '13h00 - 13h30' },
        {titulo: 'Mesa Redonda - Mulheres na Tecnologia', local: 'Mini Auditório - Bloco C', horario: '14h00 - 14h30' },
        {titulo: 'Desafia: Desenvolvimento de uma Plataforma Educacional Gamificada', local: 'Mini Auditório - Bloco C', horario: '15h00 - 15h30' }
      ]
    }
  }
}
</script>