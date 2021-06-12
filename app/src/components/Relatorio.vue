<template>
<div id="app">
  
    <div v-for="aluno in desserts" :key="aluno.id" class="teste">
      <v-row>
        <v-col>
          <div class="margin"></div>
          <h5><b>N° MATRÍCULA:</b> {{aluno.idAluno}}</h5>
          <h5><b>NOME:</b> {{aluno.nome}}</h5>
          <h5><b>ENDEREÇO:</b> {{aluno.endereco}}</h5>
          <h5><b>BAIRRO:</b> {{aluno.bairro}}</h5>
          <h5><b>CIDADE:</b> {{aluno.cidade}}</h5>
          <h5><b>CEP:</b> {{aluno.cep}}</h5>
          <h5><b>DATA DE NASCIMENTO:</b> {{aluno.nascimento}}</h5>
          <h5><b>DEFICIÊNCIA VISUAL:</b> {{aluno.patologia_deficiencia_visual}}</h5>
          <h5><b>OUTRAS PATOLOGIAS:</b> {{aluno.outras_patologias}}</h5>
          <h5><b>TELEFONE:</b> {{aluno.telefones}}</h5>
          <h5><b>SITUAÇÃO:</b> {{aluno.situacao}}</h5>
          <h5><b>OBSERVAÇÃO:</b> {{aluno.observacao}}</h5>
          <div class="margin"></div>
        </v-col>
        <v-col>
          <div class="foto"></div>
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
              'patologia_deficiencia_visual': aluno.patologia_deficiencia_visual,
              'outras_patologias': aluno.outras_patologias,
              'situacao': aluno.situacao,
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
  border: 2px solid white;
  background-color: #EEEDE7;
  padding: 2%;
  width: 80%;
  margin-left: 1%;
  margin-top: 1%;
}
.form{
  display: inline-block;
}
.foto{
  width: 40%;
  height: 60%;
  background-color: white;
  border: 2px solid #B9B7BD;
}
.margin{
  height: 10px;
  width: 100%;
  background-color: #B9B7BD;
}
</style>