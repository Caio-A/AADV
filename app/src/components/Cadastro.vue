<template>

    <div>
        <div class="grid-container">
            <div class="item3">
              <v-btn @click="acao_botao"
                color="warning"
                dark
              >
                Cadastrar
              </v-btn>
                <div id="dadospessoais">
                    1-Dados Pessoais
                    <div id='nome' style="font-size: 11pt; text-align: left; margin-left: 2%;">
                         NOME 
                         <input v-model="form.nome" type="text" style=" width: 80%; margin-top: 2%; margin-left: 9.3%;" class="input-text">
                    </div >
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        NASCIMENTO
                        <input v-model="form.nascimento" type="date" style=" width: 19%; margin-top: 2%; margin-left: 1%; margin-right: 3%; text-align: center;" class="input-text">
                        MATRÍCULA
                        <input v-model="form.matricula" type="text" style=" width: 30%; margin-top: 2%; margin-left: 1%;" class="input-text">
                    </div>
                    <div id='nome'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        ESCOLA 
                        <input  v-model="form.escola" type="text" style=" width: 80%; margin-top: 2%; margin-left: 7%;" class="input-text">
                    </div>
                    <div id='nome'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        CEP 
                        <input  v-model="form.cep" type="text" style=" width: 10%; margin-top: 2%; margin-left: 11.5%;" class="input-text" placeholder="*****-***">
                    </div>
                    <div id='nome'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        ENDEREÇO 
                        <input  v-model="form.endereco" type="text" style=" width: 80%; margin-top: 2%; margin-left: 3%;" class="input-text">
                    </div>
                    <div id='nome'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        BAIRRO 
                        <input  v-model="form.bairro" type="text" style=" width: 80%; margin-top: 2%; margin-left: 7%;" class="input-text">
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        CIDADE
                        <input  v-model="form.cidade" type="text" style=" width: 30%; margin-top: 2%; margin-left: 7%; margin-right: 3%;" class="input-text">
                        ESTADO
                        <input  v-model="form.estado" type="text" style=" width: 25%; margin-top: 2%; margin-left: 1%;" class="input-text">
                    </div>
                    <div id='nome'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        INGRESSO
                        <input  v-model="form.ingresso" type="date" style=" width: 19%; margin-top: 2%; margin-left: 4%; margin-right: 3%; text-align: center; margin-bottom: 2%;" class="input-text">
                    </div>
                </div>
                <div id="documentos">
                    2-Documentos
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        RG
                        <input v-model="form.rg" type="text" style=" width: 30%; margin-top: 2%; margin-left: 11%; margin-right: 6%;" class="input-text">
                        CPF
                        <input v-model="form.cpf" type="text" placeholder="123.456.789-10" style=" width: 32%; margin-top: 2%; margin-left: 1%;" class="input-text">
                    </div>
                    <div id='responsavel'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        CNS/SUS 
                        <input v-model="form.cnssus" type="text" style=" width: 75%; margin-top: 2%; margin-left: 4%;" class="input-text">
                    </div>
                    <div id='responsavel'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        BENEFÍCIO 
                        <input v-model="form.beneficio" type="text" style=" width: 75%; margin-top: 2%; margin-left: 2%;" class="input-text">
                    </div>
                    <div id='passe' style="font-size: 11pt; text-align: left; margin-left: 2%; margin-top: 2%;">
                        PASSE LIVRE 
                        <select v-model="form.passe_livre" name="passe" id="1" class="select" style="margin-left: 2%; margin-right:2%;">
                            <option value="SIM">SIM</option>
                            <option value="NAO">NAO</option>
                        </select>
                    </div>
                    <div id='cad_estadual'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        CADASTRO ESTADUAL 
                        <input v-model="form.cadastro_estadual" type="text" style=" width: 66%; margin-top: 2%; margin-left: 2%;" class="input-text">
                    </div>
                    <div id='responsavel'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        RESPONSÁVEL 
                        <input v-model="form.responsavel" type="text" style=" width: 74.5%; margin-top: 2%; margin-left: 2%;" class="input-text">
                    </div>
                    <div id='telefone'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        TELEFONES 
                        <input v-model="form.telefone" type="text" style=" width: 74%; margin-top: 2%; margin-left: 6%; margin-bottom: 2%" class="input-text">
                    </div>
                </div>
            </div>  
            <div class="item4">
                <div id="dadosobg">
                    3-Dados Obrigatórios
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%; margin-top: 2%;">
                        FREQUENTA ENSINO REGULAR
                        <select v-model="form.freq_ensino_regular" name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:4%;">
                            <option value="SIM">SIM</option>
                            <option value="NÃO">NAO</option>
                        </select>
                        ALMOÇO
                        <select v-model="form.almoco" name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:2%;">
                            <option value="SIM">SIM</option>
                            <option value="NÃO">NAO</option>
                        </select>
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%; margin-top: 2%;">
                        ALFABETIZADO
                        <select v-model="form.alfabetizado" name="ensino" id="1" class="select" style="margin-left: 5%; margin-right:17.3%;">
                            <option value="SIM">SIM</option>
                            <option value="NAO">NAO</option>
                        </select>
                        RESIDENTE EM POÇOS
                        <select v-model="form.residente_em_poços" name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:2%;">
                            <option value="SIM">SIM</option>
                            <option value="NÃO">NAO</option>
                        </select>
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%; margin-top: 2%;">
                        TIPO DE LEITURA
                        <select v-model="form.tipo_leitura" name="ensino" id="1" class="select" style="margin-left: 3%; margin-right: 11%;">
                            <option value="BRAILLE">BRAILLE</option>
                            <option value="AMPLIADO">AMPLIADO</option>
                            <option value="DEFINIR">DEFINIR</option>
                        </select>
                        FAIXA ETÁRIA
                        <select v-model="form.faixa_etaria" name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:2%;">
                            <option value="CRIANÇA">CRIANÇA</option>
                            <option value="ADULTO">ADULTO</option>
                        </select>
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%; margin-top: 2%;">
                        FONTE
                        <input v-model="form.fonte" type="text" style=" width: 10%; margin-right: 24%; margin-left: 5%;" class="input-text">
                        SEXO
                        <select v-model="form.sexo" name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:2%;">
                            <option value="FEMININO">FEMININO</option>
                            <option value="MASCULINO">MASCULINO</option>
                        </select>
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%; margin-top: 2%;">
                        MULTIPLO
                        <select v-model="form.multiplo" name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:26%;">
                            <option value="SIM">SIM</option>
                            <option value="NÃO">NAO</option>
                        </select>
                        PERIODO
                        <select v-model="form.periodo" name="ensino" id="1" class="select" style="margin-left: 2%; margin-right:2%;">
                            <option value="MANHA">MANHA</option>
                            <option value="TARDE">TARDE</option>
                            <option value="INTEGRAL">INTEGRAL</option>
                        </select>
                    </div>
                    <div id='nome'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        SITUAÇÃO
                        <select v-model="form.situacao" name="ensino" id="1" class="select" style="margin:2%;">
                            <option value="AFASTADO">AFASTADO</option>
                            <option value="DESLIGADO">DESLIGADO</option>
                            <option value="FREQUENTE">FREQUENTE</option>
                        </select>
                    </div>
                </div>
                <div id="saude">
                    4-Saúde
                    <div id='deficiencia'  style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        DEFICIÊNCIA VISUAL <br>
                        <input v-model="form.deficiencia_visual" type="text" style="width: 95%; height: 50px; margin-bottom: 2%; margin-top: 1%;" class="input-text">
                    </div>
                    <div id='patologia'  style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        OUTRAS PATOLOGIAS <br>
                        <input v-model="form.outras_patologias" type="text" style=" width: 95%; height: 50px; margin-bottom: 2%; margin-top: 1%;" class="input-text">
                    </div>
                    <div id='medicamentos'  style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        MEDICAMENTOS <br>
                        <input v-model="form.medicamentos" type="text" style=" width: 95%; height: 50px; margin-bottom: 2%; margin-top: 1%;" class="input-text">
                    </div>
                    <div id='alergia'  style="font-size: 11pt; text-align: left; margin-left: 2%; ">
                        ALERGIAS 
                        <input v-model="form.alergias" type="text" style=" width: 75%; margin-top: 2%; margin-left: 4%;" class="input-text">
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        PLANOS DE SAÚDE
                        <input v-model="form.planos_de_saude" type="text" style=" width: 20%; margin-top: 2%; margin-left: 2%; margin-right: 3%;" class="input-text">
                        OBSERVAÇÃO
                        <input v-model="form.observação" type="text" style=" width: 20%; margin-top: 2%; margin-left: 1%;" class="input-text">
                    </div>
                    <div style="font-size: 11pt; text-align: left; margin-left: 2%;">
                        PATOLOGIA
                        <input v-model="form.patologia" type="text" style=" width: 20%; margin-top: 2%; margin-left: 10%; margin-right: 3.5%" class="input-text">
                        DIABÉTICO
                        <select  v-model="form.diabetico" name="diabetico" id="1" class="select" style="margin-left: 4%; margin-right:25%;">
                            <option value="SIM">SIM</option>
                            <option value="NÃO">NAO</option>
                        </select>
                    </div>
                    <div id='medicos'  style="font-size: 11pt; text-align: left; margin-left: 2%; margin-bottom: 2%">
                        MÉDICOS 
                        <input v-model="form.medicos" type="text" style=" width: 75%; margin-top: 2%; margin-left: 5%;" class="input-text">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    
export default {
    data () {
        return {
            form: {
                alergias: '',
                alfabetizado: '',
                almoco: '',
                bairro: '',
                beneficio: '',
                cadastro_estadual: '',
                cep: '',
                cidade: '',
                cnssus: '',
                cpf: '',
                deficiencia_visual: '',
                diabetico: '',
                endereco: '',
                escola: '',
                estado: '',
                faixa_etaria: '',
                fonte: '',
                freq_ensino_regular: '',
                ingresso: '',
                matricula: '',
                medicamentos: '',
                medicos: '',
                multiplo: '',
                nascimento: '',
                nome: '',
                observação: '',
                outras_patologias: '',
                passe_livre: '',
                patologia: '',
                periodo: '',
                planos_de_saude: '',
                residente_em_poços: '',
                responsavel: '',
                rg: '',
                sexo: '',
                situacao: '',
                telefone: '',
                tipo_leitura: '',
            },
        }
    },
    created () {
        let _this = this
        fetch('http://localhost:3000/api/alunos/1', {
            method: 'get'
        })
        .then(function(response) {
            response.json()
            .then(function(result) {
            console.log(result)
            _this.insere_data_no_form(result)
            })
        })
        .catch(function(err) { 
            console.error(err);
        })
    },
    methods: {
        acao_botao () {
            console.log(this.form);
        },
        insere_data_no_form (result) {
                result = result[0];
                this.form.alergias = result.alergias;
                this.form.alfabetizado = result.aluno_alfabetizado;
                this.form.almoco = result.alunos_almoco;
                this.form.bairro = result.bairro;
                this.form.beneficio = result.beneficio;
                this.form.cadastro_estadual = result.cadastro_estadual;
                this.form.cep = result.cep;
                this.form.cidade = result.cidade;
                this.form.cnssus = result.cns_sus;
                this.form.cpf = result.cpf;
                this.form.deficiencia_visual = result.deficiencia_visual;
                this.form.diabetico = result.diabetico;
                this.form.endereco = result.endereco;
                this.form.escola = result.escola;
                this.form.estado = result.estado;
                this.form.faixa_etaria = result.faixa_etaria;
                this.form.fonte = result.fonte;
                this.form.freq_ensino_regular = result.aluno_ensino_regular;
                this.form.ingresso = result.ingresso;
                this.form.matricula = result.matricula;
                this.form.medicamentos = result.medicamentos;
                this.form.medicos = result.medicos;
                this.form.multiplo = result.multiplo;
                this.form.nascimento = result.nascimento;
                this.form.nome = result.nome;
                this.form.observação = result.observacao;
                this.form.outras_patologias = result.outras_patologias;
                this.form.passe_livre = result.passe_livre;
                this.form.patologia = result.patologia_deficiencia_visual;
                this.form.periodo = result.periodo;
                this.form.planos_de_saude = result.planos_de_saude;
                this.form.residente_em_poços = result.residente_pocos;
                this.form.responsavel = result.responsavel;
                this.form.rg = result.rg;
                this.form.sexo = result.sexo;
                this.form.situacao = result.situacao;
                this.form.telefone = result.telefones;
                this.form.tipo_leitura = result.tipo_de_leitura;
        }
    }
}
</script>

<style scoped>
.item1 { grid-area: header; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }


.grid-container {
  display: grid;
  grid-template-areas:
    ' main main right right';

  grid-gap: px;
}

.grid-container > div {

  padding: 20px 0;
  font-size: 30px;
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
.input-text{
    border-radius: 15px;
    border: 1px solid #9DA993;
}
.select{
    border: 1px solid #9DA993;
    border-radius: 15px; 
}


</style>