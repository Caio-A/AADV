<template>
    <div>
        <div id='menu-principal' style="align-itens: center;">
            <img src="./images/logo.png" id="logo">
            <button id="button" name="dashboard" value="dashboard" @mouseover="mousesobre(1)"  @mouseleave="mousesaiu(1)">
                <i class="glyphicon glyphicon-home" style="color: orange;"></i>
                Dashboard
            </button>
            <button id="button" name="almoco" value="almoço" @mouseover="mousesobre(2)" @mouseleave="mousesaiu(2)">
                <i class="glyphicon glyphicon-apple" style="color:red;" ></i>
                Almoço
            </button>
            <button id="button" name="cadastro" value="cadastro" @mouseover="mousesobre(3)"  @mouseleave="mousesaiu(3)">
                <i class="glyphicon glyphicon-user" style="color: blue;" ></i>
                Cadastro
            </button>

        </div>
    </div>
</template>

<script>
export default {
        methods: {

        mousesobre(value){
            var a = window.document.getElementsByTagName('button')[0]
            var b = window.document.getElementsByTagName('button')[1]
            var c = window.document.getElementsByTagName('button')[2]
            
            if (value == 1){
                a.style.background = 'rgb(106, 145, 155)';
            }
            else if (value == 2){
                b.style.background = 'rgb(106, 145, 155)';
            }
            else if (value == 3){
                c.style.background = 'rgb(106, 145, 155)';
            }
        },
        mousesaiu(value){
            var a = window.document.getElementsByTagName('button')[0]
            var b = window.document.getElementsByTagName('button')[1]
            var c = window.document.getElementsByTagName('button')[2]
            
            if (value == 1){
                a.style.background = 'aqua'
            }
            else if (value == 2){
                b.style.background = 'aqua'
            }
            else{
                c.style.background = 'aqua'
            }
        }
    }
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