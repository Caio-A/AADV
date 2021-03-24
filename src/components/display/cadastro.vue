<template>
    <div id="cadastro">
        <div id="barra-pesquisa">
            <button type="submit" id="botao-pesquisa">
                <i class="glyphicon glyphicon-search" style="color: grey; font-size: 30pt;" ></i>
            </button>
            <input type="text" name="pesquisa" id="campo-pesquisa" placeholder="NOME A PESQUISAR">
            <div id="tela">
                <div id="nome">NOME</div>
                <div id="cpf">CPF</div>
                <div id="legenda">ACOES</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #cadastro{
        width: 100%;
        height: 100%;
    }
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
#nome{
    width: 50%;
    height: 0%;
    padding-bottom: 42%;
    background: white;
    float:left;
    text-align: center;
    font-size: 30px;
    font:italic;
    color:#5593c5;
    font-weight: bold;
    border: 1px solid black;
    margin-top: 3.7%;
}
#cpf{
    width: 30%;
    height: 0;
    padding-bottom: 44.7%;
    float:left;
    background: white;
    text-align: center;
    font-size: 30px;
    font:italic;
    color:#5593c5;
    font-weight: bold;
    border: 1px solid black;
    margin-top: 3.7%;
}
#legenda{
    width: 20%;
    height: 0;
    padding-bottom: 44.7%;
    float:left;
    background: white;
    text-align: center;
    font-size: 30px;
    font:italic;
    color:#5593c5;
    font-weight: bold;
    border: 1px solid black;
    margin-top: 3.7%;
}
</style>