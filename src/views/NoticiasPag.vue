<template>
    <div>
        <ul>
            <li v-for="item in noticias" :key="item.id">
                {{ item.titulo }} - {{ item.texto }}
            </li>
        </ul>
    </div>
</template>
<script setup>

import { ref } from 'vue'

const noticias = ref([
  { id: 1, titulo: 'HOMEM É VISTO FURANDO FILA NO LANCHE DO IFRN', texto: 'homem é visto comentendo UM CRIME!!!!!!!!!' },
  { id: 2, titulo: 'JOGADOR DE VALORANT GANHA CAMPEONATO MUNDIAL', texto: 'LOUD VENCE O CAMPEONATO MUNDIAL' },
  { id: 3, titulo: 'FURIA VENCE CAMPEONATO MUNDIAL TIER 1', texto: 'FURIA VENCEU CAMPEONATO DE COUNTER STRIKE 2 ' },
  { id: 4, titulo: 'fake!: MENINOS SAO JUBILADOS APOS JOGAR NA AULA', texto: 'MENINOS SAO EXPULSOS DA ESCOLA OTTO DE BRITO APOS JOGAREM DURANTE AS AULAS!' }
])

</script>