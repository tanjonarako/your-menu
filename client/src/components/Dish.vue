<template>
  <div class="row mb-4" v-if="list.length > 0">
    <p class="title col-xs-12 col-sm-12">{{title}}</p>
    <Item v-for="element in list" :key="element.id" :dish="element" @update="$emit('update')" @delete="$emit('delete')"/>
  </div>
</template>
<script>
import Item from '@/components/Item'

export default {
  name: "Dish",

  components: {Item},

  data: () => ({
  }),

  props: {
    type: {type: String},
    list: {type: Array, default: () => ([])},
  },

  computed: {
    title() {
      return this.type === 'starter' ? 'Starters' : 
              this.type === 'mainCourse' ? 'Main Courses' : 'Desserts'
    }
  },
}
</script>