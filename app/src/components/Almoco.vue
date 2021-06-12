<template>

<div id="app">
  <v-app id="inspire">
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="idAlunos"
      class="elevation-1"
    >
      <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.idAluno" label="id aluno"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.nome" label="nome"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.diabetico" label="diabetico"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.datSemana" label="dias da semana"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.almoco" label="almoco"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
      </template>
      <template v-slot:no-data>
        <v-progress-circular
          indeterminate
          color="gray"
        ></v-progress-circular>
      </template>
    </v-data-table>
  </v-app>
</div>

</template>
<script>

export default {
    data () {
        return {
            dialog: false,
            headers: [
            { text: 'N° MATRÍCULA', value: 'idAluno' },
            {
                text: 'NOME',
                align: 'start',
                sortable: false,
                value: 'nome',
            },
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

</style>