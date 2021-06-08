<template>

<div>
    <v-data-table
      :headers="headers"
      :items="movies"
      v-bind:server-items-length="tamanho_movies"
      :items-per-page="per_page"
      hide-action
      item-key="title">
      <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
          <td>{{ props.item.title }}</td>
          <td>{{ format(props.item.premiere) }}</td>
          <td>{{ props.item.rating }}</td>
        </tr>
      </template>
      <template slot="expand" slot-scope="props">
        <v-card flat>
          <v-card-title
            class="headline">
            {{ props.item.title }}
          </v-card-title>
          <v-card-text>
            <v-layout row>
              {{ props.item.description}}
              <v-spacer></v-spacer>
              <v-img 
                :src="props.item.poster"
                :lazy-src="lazy">
                <v-layout>
                </v-layout>
              </v-img>
            </v-layout>
          </v-card-text>
        </v-card>
      </template>
    </v-data-table>
</div>

</template>
<script>

    
export default {
    data () {
        return {
            per_page: 5,
            headers: [
            {
                text: 'Title',
                value: 'title',
                align: 'left',
                sortable: false
            },
            { text: 'Premiere', value: 'premiere' },
            { text: 'Rating', value: 'rating' }
            ],
            movies: [
            {
                title: 'Star Wars: A new Hope',
                premiere: new Date('1977-11-18'),
                rating: 9.5,
                poster: `https://goo.gl/dfqeUe`,
                description: `Em uma galáxia muito muito distante...`
            },
            {
                title: 'Star Wars: The Empire Strike back',
                premiere: new Date('1980-07-21'),
                rating: 8.2,
                poster: `https://goo.gl/kV2VGr`,
                description: `The empire strikes back the resistence force in huth`
            },
            {
                title: 'Star Wars: The Return of Jedi',
                premiere: new Date('1983-10-06'),
                rating: 8.1,
                poster: `https://goo.gl/exb9B9`,
                description: `The final conclusion of this awesome story.`
            },
            {
                title: 'Star Wars: The Phanton Menace',
                premiere: new Date('1999-06-24'),
                rating: 6.5,
                poster: `https://goo.gl/G2wPeX`,
                description: 'The story that happend before everything'
            },
            {
                title: 'Star Wars: Attack of the Clones',
                premiere: new Date('2002-05-16'),
                rating: 7.0,
                poster: `https://goo.gl/mYG7zQ`,
                description: 'The galatic war flashpoint'
            },
            {
                title: 'Star Wars: The Revenge of the Sith',
                premiere: new Date('2005-05-19'),
                rating: 8.2,
                poster: `https://goo.gl/uTcLKC`,
                description: 'The fall of the Jedi order'
            }
            ],
            lazy: `https://goo.gl/jbJWmK`
        }
    },
    methods: {
        format (date) {
            date = new Date(date)
            const day = `${date.getUTCDate()}`.padStart(2, '0')
            const month = `${date.getUTCMonth() + 1}`.padStart(2, '0')
            const year = date.getFullYear()
            return `${month}/${day}/${year}`
        }
    },
    computed: {
        // a computed getter
        tamanho_movies: function () {
        // `this` points to the vm instance
        return this.movies.length
        }
    }
}
</script>

<style scoped>
</style>