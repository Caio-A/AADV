<template>

<div id="app">
  <v-app id="inspire">
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="alunos_id"
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
                      <v-text-field v-model="editedItem.idAluno" label="id aluno" color='primary' class="text-green"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.nome" label="nome"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.cidade" label="cidade"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.diabetico" label="diabetico"></v-text-field>
                    </v-col> 
                    <v-col>
                      <v-text-field v-model="editedItem.freq_seg" label="freq_seg"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="editedItem.freq_ter" label="freq_ter"></v-text-field>
                    </v-col>
                    <v-col>
                       <v-text-field v-model="editedItem.freq_qua" label="freq_qua"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="editedItem.alm_qui" label="freq_qui"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="editedItem.alm_sex" label="freq_sex"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="editedItem.alm_seg" label="alm_seg"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="editedItem.alm_ter" label="alm_ter"></v-text-field>
                    </v-col>
                    <v-col>
                       <v-text-field v-model="editedItem.alm_qua" label="alm_qua"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="editedItem.alm_qui" label="alm_qui"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="editedItem.alm_sex" label="alm_sex"></v-text-field>
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
            {text: 'NOME',align: 'start',sortable: false,value: 'nome',},
            {text: 'CIDADE',value: 'cidade'},
            { text: 'DIABÉTICO', value: 'diabetico' },
            { text: 'Seg', value: 'freq_seg' },
            { text: 'Ter', value: 'freq_ter' },
            { text: 'Qua', value: 'freq_qua' },
            { text: 'Qui', value: 'freq_qui' },
            { text: 'Sex', value: 'freq_sex' },
            { text: 'Seg', value: 'alm_seg' },
            { text: 'Ter', value: 'alm_ter' },
            { text: 'Qua', value: 'alm_qua' },
            { text: 'Qui', value: 'alm_qui' },
            { text: 'Sex', value: 'alm_sex' },
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
        fetch('http://localhost:3000/api/almocos', {
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
          this.desserts = result.map((almoco) => {
            return {
              'nome': almoco.nome,
              'idAluno': almoco.alunos_id,
              'diabetico': almoco.diabeticos,
              'freq_seg': almoco.freq_seg,
              'freq_ter' : almoco.freq_ter,
              'freq_qua' : almoco.freq_qua,
              'freq_qui' : almoco.freq_qui,
              'freq_sex' : almoco.freq_sex,
              'alm_seg': almoco.alm_seg,
              'alm_ter' : almoco.alm_ter,
              'alm_qua' : almoco.alm_qua,
              'alm_qui' : almoco.alm_qui,
              'alm_sex' : almoco.alm_sex,
              'cidade' : almoco.cidade,
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
  .text-green{
    color: green;
  }
</style>