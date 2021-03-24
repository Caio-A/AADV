<template>
    <div id="dashboard">
            <div id="scroll">
                <div id="background-titulo" style="text-align: center; font-size: 30pt; color: #145DA0; font-weight: bold;">
                    <br> Estatísticas
               </div>
               <div id='levantamento-estatistico'></div>
               <div id="alunos" style="background: rgb(221, 221, 221);" align='center'>
                    <h1 align='center' style="font-size:200%;">Levantamento estatístico <br></h1> 
                    <div>oi</div>
                    <div align='center' style="display: inline-block">
                        <div>
                            <img src="./images/iconHomem.png" style="width: 2%;">
                            <img src="./images/iconMulher.png" style="width: 2%;">
                            <img src="./images/iconMenino.png" style="width: 2%;">
                            <img src="./images/iconMenina.png" style="width: 2%;">
                        </div>
                    </div>
               </div>
               <div id="almocoinfo">

               </div>
               <div id="patologias">
                   
               </div>
               <div id="dadosGerais">

               </div>
               <div id="multiplos">
                
                </div>
            </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style scoped>
#dashboard{
    width: 125%;
    height: 100%;
    padding-bottom: 46%;
    background: white;
    vertical-align: top;
    margin-bottom: 0%;
    margin-right: -25%;
}
#scroll{
    width: 100%;
    height: 0;
    padding-bottom: 60.8%;
    overflow-y: scroll;
    background: rgb(221, 221, 221);
    border: 1px solid rgb(94, 167, 185);
}
#background-titulo{
    width: 100%;
    height: 0;
    padding-bottom: 10%;
    background-image: url(https://www.mediapost.com.br/assets/uploads/2018/06/estatisticas-de-email-marketing.jpg);
}
#alunos{
    border: 1px solid black;
    text-align: left;
}
</style>