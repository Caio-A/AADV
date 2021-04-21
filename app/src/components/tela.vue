<template>
    <div>
        <div class="grid-container">
            <div class="item1">
                <img src="./logo.png" id="logo" style="height: 100px; margin-left: 2%;">
                <button class="botoes-topbar">
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
            <div class="item3">
                <div id="dadospessoais">
                    1-Dados Pessoais
                    <div id='nome' style="font-size: 11pt; text-align: left; margin-left: 2%;">
                         NOME 
                         <input type="text" style=" width: 80%; margin-top: 2%; margin-left: 9.3%;" class="input-text">
                    </div >
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        NASCIMENTO
                        <input type="date" style=" width: 19%; margin-top: 2%; margin-left: 1%; margin-right: 3%; text-align: center;" class="input-text">
                        MATRÍCULA
                        <input type="text" style=" width: 30%; margin-top: 2%; margin-left: 1%;" class="input-text">
                    </div>
                    <div id='nome'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        ESCOLA 
                        <input type="text" style=" width: 80%; margin-top: 2%; margin-left: 7%;" class="input-text">
                    </div>
                    <div id='nome'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        CEP 
                        <input type="text" style=" width: 10%; margin-top: 2%; margin-left: 11.5%;" class="input-text" placeholder="*****-***">
                    </div>
                    <div id='nome'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        ENDEREÇO 
                        <input type="text" style=" width: 80%; margin-top: 2%; margin-left: 3%;" class="input-text">
                    </div>
                    <div id='nome'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        BAIRRO 
                        <input type="text" style=" width: 80%; margin-top: 2%; margin-left: 7%;" class="input-text">
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        CIDADE
                        <input type="text" style=" width: 30%; margin-top: 2%; margin-left: 7%; margin-right: 3%;" class="input-text">
                        ESTADO
                        <input type="text" style=" width: 25%; margin-top: 2%; margin-left: 1%;" class="input-text">
                    </div>
                    <div id='nome'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        INGRESSO
                        <input type="date" style=" width: 19%; margin-top: 2%; margin-left: 4%; margin-right: 3%; text-align: center; margin-bottom: 2%;" class="input-text">
                    </div>
                </div>
                <div id="documentos">
                    2-Documentos
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        RG
                        <input type="text" style=" width: 30%; margin-top: 2%; margin-left: 11%; margin-right: 6%;" class="input-text">
                        CPF
                        <input type="text" placeholder="123.456.789-10" style=" width: 32%; margin-top: 2%; margin-left: 1%;" class="input-text">
                    </div>
                    <div id='responsavel'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        CNS/SUS 
                        <input type="text" style=" width: 75%; margin-top: 2%; margin-left: 4%;" class="input-text">
                    </div>
                    <div id='responsavel'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        BENEFÍCIO 
                        <input type="text" style=" width: 75%; margin-top: 2%; margin-left: 2%;" class="input-text">
                    </div>
                    <div id='passe' style="font-size: 11pt; text-align: left; margin-left: 2%; margin-top: 2%;">
                        PASSE LIVRE 
                        <select name="passe" id="1" class="select" style="margin-left: 2%; margin-right:2%;">
                            <option value="sim">SIM</option>
                            <option value="nao">NAO</option>
                        </select>
                    </div>
                    <div id='cad_estadual'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        CADASTRO ESTADUAL 
                        <input type="text" style=" width: 66%; margin-top: 2%; margin-left: 2%;" class="input-text">
                    </div>
                    <div id='responsavel'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        RESPONSÁVEL 
                        <input type="text" style=" width: 74.5%; margin-top: 2%; margin-left: 2%;" class="input-text">
                    </div>
                    <div id='telefone'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        TELEFONES 
                        <input type="text" style=" width: 74%; margin-top: 2%; margin-left: 6%; margin-bottom: 2%" class="input-text">
                    </div>
                </div>
            </div>  
            <div class="item4">
                <div id="dadosobg">
                    3-Dados Obrigatórios
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%; margin-top: 2%;">
                        FREQUENTA ENSINO REGULAR
                        <select name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:4%;">
                            <option value="sim">SIM</option>
                            <option value="nao">NAO</option>
                        </select>
                        ALMOÇO
                        <select name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:2%;">
                            <option value="sim">SIM</option>
                            <option value="nao">NAO</option>
                        </select>
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%; margin-top: 2%;">
                        ALFABETIZADO
                        <select name="ensino" id="1" class="select" style="margin-left: 5%; margin-right:17.3%;">
                            <option value="sim">SIM</option>
                            <option value="nao">NAO</option>
                        </select>
                        RESIDENTE EM POÇOS
                        <select name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:2%;">
                            <option value="sim">SIM</option>
                            <option value="nao">NAO</option>
                        </select>
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%; margin-top: 2%;">
                        TIPO DE LEITURA
                        <select name="ensino" id="1" class="select" style="margin-left: 3%; margin-right: 11%;">
                            <option value="braille">BRAILLE</option>
                            <option value="ampliado">AMPLIADO</option>
                            <option value="definir">DEFINIR</option>
                        </select>
                        FAIXA ETÁRIA
                        <select name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:2%;">
                            <option value="crianca">CRIANÇA</option>
                            <option value="adulto">ADULTO</option>
                        </select>
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%; margin-top: 2%;">
                        FONTE
                        <input type="text" style=" width: 10%; margin-right: 24%; margin-left: 5%;" class="input-text">
                        SEXO
                        <select name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:2%;">
                            <option value="feminino">FEMININO</option>
                            <option value="masculino">MASCULINO</option>
                        </select>
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%; margin-top: 2%;">
                        MULTIPLO
                        <select name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:26%;">
                            <option value="sim">SIM</option>
                            <option value="nao">NAO</option>
                        </select>
                        PERIODO
                        <select name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:2%;">
                            <option value="manha">MANHA</option>
                            <option value="tarde">TARDE</option>
                            <option value="integral">INTEGRAL</option>
                        </select>
                    </div>
                    <div id='nome'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        SITUAÇÃO
                        <select name="ensino" id="1" class="select" style="margin:2%;">
                            <option value="afastado">AFASTADO</option>
                            <option value="desligado">DESLIGADO</option>
                            <option value="frequente">FREQUENTE</option>
                        </select>
                    </div>
                </div>
                <div id="saude">
                    4-Saúde
                    <div id='deficiencia'  style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        DEFICIÊNCIA VISUAL <br>
                        <input type="text" style="width: 95%; height: 50px; margin-bottom: 2%; margin-top: 1%;" class="input-text">
                    </div>
                    <div id='patologia'  style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        OUTRAS PATOLOGIAS <br>
                        <input type="text" style=" width: 95%; height: 50px; margin-bottom: 2%; margin-top: 1%;" class="input-text">
                    </div>
                    <div id='medicamentos'  style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        MEDICAMENTOS <br>
                        <input type="text" style=" width: 95%; height: 50px; margin-bottom: 2%; margin-top: 1%;" class="input-text">
                    </div>
                    <div id='alergia'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        ALERGIAS 
                        <input type="text" style=" width: 75%; margin-top: 2%; margin-left: 4%;" class="input-text">
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        PLANOS DE SAÚDE
                        <input type="text" style=" width: 20%; margin-top: 2%; margin-left: 2%; margin-right: 3%;" class="input-text">
                        OBSERVAÇÃO
                        <input type="text" style=" width: 20%; margin-top: 2%; margin-left: 1%;" class="input-text">
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        PATOLOGIA
                        <input type="text" style=" width: 20%; margin-top: 2%; margin-left: 10%; margin-right: 3.5%" class="input-text">
                        DIABÉTICO
                        <select name="diabetico" id="1" class="select" style="margin-left: 4%; margin-right:25%;">
                            <option value="sim">SIM</option>
                            <option value="nao">NAO</option>
                        </select>
                    </div>
                    <div id='medicos'  style="font-size: 11pt; text-align: left; margin-left: 2%; margin-bottom: 2%">
                        MÉDICOS 
                        <input type="text" style=" width: 75%; margin-top: 2%; margin-left: 5%;" class="input-text">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    
export default {
    
}
</script>

<style scoped>
.item1 { grid-area: header; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }


.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header'
    ' main main right right';

  grid-gap: px;
}

.grid-container > div {

  padding: 20px 0;
  font-size: 30px;
}
.item1{
    background-color: #363740;
    color: white;
    height: 100%;
    display: inline-block;
}
.item3, .item4{
    text-align: center;
    width: 100%;
}
#dadospessoais{
    background-color: #FEFFF4;
    height: 50%;
}
#documentos{
    background-color: #EEF6FF;
    height: 50%;
}
#dadosobg{
    background-color: #FFF6F6 ;
}
#saude{
    background-color: #E2FFEA;
}
#dadospessoais, #dadosobg, #saude, #documentos{
    border: 1px solid white;
}
.botoes-topbar{
    font-size: 30px;
    margin-left: 4%;
    background-color: rgba(0, 0, 0, 0);
    border: 0px solid rgba(0, 0, 0, 0);
}
.input-text{
    border-radius: 15px;
    border: 1px solid #9DA993;
}
.select{
    border: 1px solid #9DA993;
    border-radius: 15px; 
}


</style>