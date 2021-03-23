<template>
    <div>
        <div id='menu-principal' style="align-itens: center;">
            <img src="./images/logo.png" id="logo">
            <button id="button" name="dashboard" value="dashboard">
                <i class="glyphicon glyphicon-home" style="color: orange;"></i>
                Dashboard
            </button>
            <button id="button" name="almoco" value="almoço">
                <i class="glyphicon glyphicon-apple" style="color:red;"></i>
                Almoço
            </button>
            <button id="button" name="cadastro" value="cadastro">
                <i class="glyphicon glyphicon-user" style="color: blue;"></i>
                Cadastro
            </button>

        </div>
    </div>
</template>

<script>
export default {
        
}
/*
var dash = window.document.getElementsByName('dashboard')
function entrou(){
    dash.style.background = 'black';
}
*/
</script>

<style scoped>
    #menu-principal{
        background: aqua;
        width: 20%;
        height: 100%;
        padding-bottom: 4%;
        margin: 0%;
        float: left;
    }
    #logo{
        width: 70%;
        padding-left: 32.5%;
        padding-top: 5%;   
    }
    #button{
    padding:10%;
    border: 1px solid aqua;
    width: 100%;
    height: 0; 
    padding-bottom: 20%; 
    margin-top:25%;
    text-align: center;
    font-size: 230%;
    font:italic;
    color: rgb(1, 100, 100);
    background:aqua;
    font-style: bold;
    font-weight: bold;
}
</style>