<template>
  <div id="app">
    <div class="item1">
        <img src="./assets/logo.png" id="logo" style="height: 100px; margin-left: 2%;">
        <button class="botoes-topbar" v-on:click="acao_botao">
            <heroicon name="home" fill="#6D6A6B"></heroicon>
            Início
        </button>
        <button class="botoes-topbar">
            <heroicon name="user" fill="#6D6A6B"></heroicon>
            Alunos
        </button>
        <button class="botoes-topbar">
            Almoço
        </button>
        <button class="botoes-topbar">
            <heroicon name="book" fill="white"></heroicon>
            Relatórios
            <hr style="border: 2px solid white; vertical-align: top"> 
        </button>
    </div>
    <Tela v-if="estado == 0"/>
    <Alunos v-else/>
  </div>
</template>

<script>

import Tela from './components/Tela.vue'
import Alunos from './components/Alunos.vue'

export default {
  name: 'App',
  components: {
    Tela,
    Alunos
  },
  data () {
      return {
          estado: 1,
      }
  },
  methods: {
      acao_botao: function () {
          this.estado = this.estado === 0 ? 1 : 0
      }
  }
}
</script>

<style scoped>

.item1{
    width: 100%;
    background-color: #363740;
    color: white;
    display: inline-block;
    border-color: red;
    border-style:solid;
}
.botoes-topbar{
    font-size: 30px;
    margin-left: 4%;
    background-color: rgba(0, 0, 0, 0);
    border: 0px solid rgba(0, 0, 0, 0);
}
</style>
