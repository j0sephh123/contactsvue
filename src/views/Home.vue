<template>
  <div class="columns section">
    <div class="column is-6">
      <div class="columns is-multiline">

        <div 
          v-for="c in contacts" :key="c.id"
          class="column is-12">
          <div class="box">
            <p
              @click="showInfo({id: c.id})" 
              class="title is-5">{{c.name}}</p>
            <p class="subtitle">{{c.description}}</p>
          </div>
        </div>

      </div>
    </div>

    <div 
      v-show="show"
      class="column is-6">
      <div class="box">
        <p class="title is-5">{{shownContact.more.info}}</p>
        <p class="subtitle">subtitle</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    ...mapActions({showInfo: 'contacts/showInfo'})
  },
  computed: {
    ...mapGetters({
      contacts: 'contacts/contacts',
      shownContact: 'contacts/shownContact'
    })
  }
}
</script>
