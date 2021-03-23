<template>
    <div>
        <div id="barra-pesquisa">
            <button type="submit" id="botao-pesquisa">
                <i class="glyphicon glyphicon-search" style="color: grey; font-size: 30pt;" ></i>
            </button>
            <input type="text" name="pesquisa" id="campo-pesquisa" placeholder="NOME A PESQUISAR">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #barra-pesquisa{
    width: 125%;
    height: 0; 
    padding-bottom: 20%; 
    background-image: url("images/barra-pesquisa.jpg");
    background-repeat: no-repeat;
    background-size: 100% 370%;
}
#botao-pesquisa{
    height:0;
    width: 5%;
    padding-bottom:3%;
    float:right;
    margin-right:3%;
    margin-top:9%;
    border-radius: 30%;
    margin-left: 1%;
}
#campo-pesquisa{
    background: white;
    float: right;
    width: 50%;
    height: 0;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    margin-right:10px auto;
    margin-top: 9%; 
    text-align: center;
    font-size: 20pt;   
}
</style>