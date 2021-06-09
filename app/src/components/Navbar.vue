<template>
    <div class="item1">
        <p>{{current_route}}</p>
        <img src="../assets/logo.png" id="logo" style="height: 100px; margin-left: 2%;">

        <router-link to="/">
          <button class="botoes-topbar">
              <heroicon name="home" class="icon"></heroicon>
              Início
          </button>
        </router-link>
        
        <router-link to="/alunos">
            <button class="botoes-topbar">
                <heroicon name="user" class="icon"></heroicon>
                Alunos
            </button>
        </router-link>


        <router-link to="/almoco">
          <button class="botoes-topbar">
              <heroicon name="book" class="icon"></heroicon>
              Almoço
          </button>
        </router-link>
        <router-link to="/relatorios">
          <button class="botoes-topbar">
              <heroicon name="book" class="icon"></heroicon>
              Relatórios
          </button>
        </router-link>
    </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
      return {
        current_route: "/"
      }
  },
  watch: {
    current_route: function () {
      this.current_route = this.$router.currentRoute.path
    }
  }
}
</script>

<style>

.icon {
  fill:white;
}

.router-link-exact-active{
    color: white;
}

.item1{
    width: 100%;
    background-color: #363740;
    display: inline-block;
}
.botoes-topbar{
    font-size: 30px;
    margin-left: 4%;
    background-color: rgba(0, 0, 0, 0);
    border: 0px solid rgba(0, 0, 0, 0);
}

</style>