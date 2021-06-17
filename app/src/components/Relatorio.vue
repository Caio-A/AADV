<template>
<div id="app">
    <div v-for="aluno in desserts" :key="aluno.id" class="teste" id="imprimir">
      <v-row>
        <v-col>
          <div class="margin"></div> 
          <div class="top">
            <h3 style="font-weight: bold">FICHA CADASTRAL</h3>
            <h5>(AADV - POÇOS DE CALDAS)</h5>
            <div class="head">
              <h3><b>N°</b></h3>
              <h5><b>DATA DE INSCRIÇÃO:</b></h5>
            </div>
            <div class="head" style="margin-left: 12%">
              <h3><b>{{aluno.idAluno}}</b></h3>
              <h5>{{aluno.ingresso}}</h5>
            </div>
          </div>
          <div class="top">
            <div class="foto"></div>
          </div>
          <br>
          <h4><b><u>1 - DADOS PESSOAIS</u></b></h4>
          <div class="A" style="width: 30%"><b>NOME:</b></div>
          <div class="A" style="width: 50%; margin-left: 7%">{{aluno.nome}}</div>
          <div class="B" style="width: 30%"><b>ENDEREÇO:</b></div>
          <div class="B" style="width: 50%; margin-left: 7%">{{aluno.endereco}}</div>
          <div class="C" style="width: 30%"><b>BAIRRO:</b></div>
          <div class="C" style="width: 50%; margin-left: 7%">{{aluno.bairro}}</div>
          <div class="D" style="width: 30%"><b>CIDADE:</b></div>
          <div class="D" style="width: 50%; margin-left: 7%">{{aluno.cidade}}</div>
          <div class="E" style="width: 30%"><b>CEP:</b></div>
          <div class="E" style="width: 50%; margin-left: 7%">{{aluno.cep}}</div>
          <div class="F" style="width: 30%"><b>DATA DE NASCIMENTO:</b></div>
          <div class="F" style="width: 50%; margin-left: 7%">{{aluno.nascimento}}</div>
          <div class="G" style="width: 30%"><b>RESPONSÁVEL:</b></div>
          <div class="G" style="width: 50%; margin-left: 7%">{{aluno.responsavel}}</div>
          <div class="H" style="width: 30%; vertical-align: top"><b>TELEFONE:</b></div>
          <div class="H" style="width: 50%; margin-left: 7%;">{{aluno.telefones}}</div>
          <br>
          <br>
          <h4><b><u>2 - DOCUMENTOS</u></b></h4>
          <div class="A" style="width: 30%"><b>RG:</b></div>
          <div class="A" style="width: 50%; margin-left: 7%">{{aluno.rg}}</div>
          <div class="B" style="width: 30%"><b>CPF:</b></div>
          <div class="B" style="width: 50%; margin-left: 7%">{{aluno.cpf}}</div>
          <div class="C" style="width: 30%"><b>CNS/SUS:</b></div>
          <div class="C" style="width: 50%; margin-left: 7%">{{aluno.cns_sus}}</div>
          <div class="D" style="width: 30%"><b>BENEFÍCIOS:</b></div>
          <div class="D" style="width: 50%; margin-left: 7%">{{aluno.beneficio}}</div>
          <div class="E" style="width: 30%"><b>PASSE LIVRE:</b></div>
          <div class="E" style="width: 50%; margin-left: 7%">{{aluno.passe_livre}}</div>
          <div class="F" style="width: 30%"><b>CADASTRO ESTADUAL:</b></div>
          <div class="F" style="width: 50%; margin-left: 7%">{{aluno.cadastro_estadual}}</div>
          <br>
          <br>
          <h4><b><u>3 - SAÚDE</u></b></h4>
          <div class="A" style="width: 30%"><b>OBSERVAÇÕES:</b></div>        
          <div class="A" style="width: 50%; margin-left: 7%">{{aluno.observacao}}</div> 
          <div class="B" style="width: 30%"><b>MEDICAMENTOS:</b></div>       
          <div class="B" style="width: 50%; margin-left: 7%">{{aluno.medicamentos}}</div>
          <div class="C" style="width: 30%"><b>ALERGIA:</b></div>            
          <div class="C" style="width: 50%; margin-left: 7%">{{aluno.alergias}}</div>
          <div class="D" style="width: 30%"><b>PLANO DE SAUDE:</b></div>    
          <div class="D" style="width: 50%; margin-left: 7%">{{aluno.planos_de_saude}}</div>
          <div class="E" style="width: 30%"><b>MEDICOS:</b></div>            
          <div class="E" style="width: 50%; margin-left: 7%">{{aluno.medicos}}</div>
          <div class="F" style="width: 30%; vertical-align: top;"><b>OUTRAS PATOLOGIAS:</b></div>  
          <div class="F" style="width: 50%; margin-left: 7%">{{aluno.outras_patologias}}</div>
          <div class="G" style="width: 30%; vertical-align: top;"><b>PATOLOGIAS:</b></div>         
          <div class="G" style="width: 63%; margin-left: 7%">{{aluno.patologia_deficiencia_visual}}</div>
          <br>
          <br>
          <h5><b>OBSERVAÇÕES:</b></h5>
          <div class="linha"></div><br><div class="linha"></div><br>
          <div class="linha"></div><br><div class="linha"></div><br>
          <div class="linha"></div><br><div class="linha"></div><br>
          <div class="linha"></div><br><div class="linha"></div><br>
          <br>
          <div class="margin"></div>
        </v-col>       
      </v-row>
    </div>
</div>

</template>
<script>

export default {
    data () {
        return {
            dialog: false,
            headers: [
            { text: 'N° MATRÍCULA', value: 'idAluno' },
            { text: 'NOME', align: 'start',sortable: false, value: 'nome',},
            { text: 'DIABÉTICO', value: 'diabetico' },
            { text: 'DIAS DA SEMANA', value: 'datSemana' },
            { text: 'ALMOÇO', value: 'almoco' },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                idAluno: 0,
                nome: '',
                diabetico: 0,
                datSemana: 0,
                almoco: 0,
            },
            defaultItem: {
                idAluno: 0,
                nome: '',
                diabetico: 0,
                datSemana: 0,
                almoco: 0,
            },
        }
    },
    computed: {
        formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog (val) {
        val || this.close()
        },
    },

    created () {
        let _this = this
        fetch('http://localhost:3000/api/alunos', {
            method: 'get'
          })
          .then(function(response) {
            response.json()
            .then(function(result) {
              console.log(result)
              _this.initialize(result)
            })
          })
          .catch(function(err) { 
            console.error(err);
          })
    },

    methods: {
        initialize (result) {
          this.desserts = result.map((aluno) => {
            return {
              'nome': aluno.nome,
              'idAluno': aluno.matricula,
              'diabetico': aluno.diabetico,
              'datSemana': aluno.alunos_almoco,
              'almoco': aluno.alunos_almoco,
              'endereco': aluno.endereco,
              'bairro': aluno.bairro,
              'cidade': aluno.cidade,
              'cep': aluno.cep,
              'nascimento': aluno.nascimento,
              'telefones': aluno.telefones,
              'situacao': aluno.situacao,
              'ingresso': aluno.ingresso,
              'responsavel': aluno.responsavel,
              'rg': aluno.rg,
              'cpf': aluno.cpf,
              'cns_sus': aluno.cns_sus,
              'beneficio': aluno.beneficio,
              'passe_livre': aluno.passe_livre,
              'cadastro_estadual': aluno.cadastro_estadual,
              'patologia_deficiencia_visual': aluno.patologia_deficiencia_visual,
              'outras_patologias': aluno.outras_patologias,
              'medicamentos': aluno.medicamentos,
              'alergias': aluno.alergias,
              'planos_de_saude': aluno.planos_de_saude,
              'medicos': aluno.medicos,
              'observacao': aluno.observacao,
            }
          })
        },

        close () {
        this.dialog = false
        this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
        })
        },

        save () {
        if (this.editedIndex > -1) {
            Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
            this.desserts.push(this.editedItem)
        }
        this.close()
        },
    },
}
</script>

<style scoped>
.teste{
  border: 2px solid black;
  background-color: white;
  padding: 1%;
  width: 49%;
  margin-top: 2%;
  margin-left: 0.5%;
  margin-right: 0.5%;
  line-height: 100%;
  display: inline-block;
  vertical-align: top;
  height: 100%;
}
.foto{
  width: 50%;
  height: 160px;
  margin-top: 6%;
  margin-left: 50%;
  border: 1px solid black;
}
.margin{
  height: 10px;
  width: 100%;
  background-color: #B9B7BD;
}
.linha{
  background-color: black;
  width: 100%;
  height: 1px;
  display: block;
  margin-top: 2%;
}
.head{
  display: inline-block;
}
.top{
  display: inline-block;
  width: 50%;
  vertical-align: top;
}
.A{ display: inline-block; margin-top: 1%;}
.B{ display: inline-block; margin-top: 1%;}
.C{ display: inline-block; margin-top: 1%;}
.D{ display: inline-block; margin-top: 1%;}
.E{ display: inline-block; margin-top: 1%;}
.F{ display: inline-block; margin-top: 1%;}
.G{ display: inline-block; margin-top: 1%;}
.H{ display: inline-block; margin-top: 1%;}

</style>