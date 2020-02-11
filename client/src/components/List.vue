<template>
  <div class="list container">
    <Dish type="starter" :list="listStarter" @update="resetData()" @delete="resetData()"/>
    <Dish type="mainCourse" :list="listMainCourse"  @update="resetData()" @delete="resetData()"/>
    <Dish type="dessert" :list="listDessert"  @update="resetData()" @delete="resetData()"/>
    <div class="row">
      <v-btn color="red lighten-2" dark @click.prevent="openDialog()">Add</v-btn>
    </div>
    <FormDialog v-if="dialog" :showed="dialog" :list="categories" @close="dialog = false" @save="save" method="add"/>
  </div>
</template>

<script>
import Dish from '@/components/Dish'
import FormDialog from '@/components/FormDialog'
import DishService from '@/services/DishService'
import CategoryService from '@/services/CategoryService'

export default {
  name: 'List',
  components: {Dish, FormDialog},

  data: () => ({
    dialog: false,
    categories: [],
    list: []
  }),

  computed: {
    listStarter() {
      return this.list && this.list.filter(item => item.categoryId === 1)
    },
    listMainCourse() {
      return this.list && this.list.filter(item => item.categoryId === 2)
    },
    listDessert() {
      return this.list && this.list.filter(item => item.categoryId === 3)
    }
  },

  async created() {
    this.fetchList()
  },

  methods: {
    async openDialog() {
      await this.fetchCategories()
      this.dialog = true
      this.submitSuccess = false
    },

    async resetData() {
      this.list = []
      this.fetchList()
    },

    async fetchList() {
      this.list = await DishService.getAll()
        .catch(err => console.log(err))
    },

    async fetchCategories() {
      this.categories = await CategoryService.getAll()
        .catch(err => console.log(err))
    },

    async save(e) {
      e && await this.addDish(e.name, e.select)
      await this.resetData()
      this.dialog = false
    },
  
    async addDish(name, categoryId) {
      await DishService.addDish(name, categoryId)
        .catch(err => console.log(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.list {
  margin:0 auto;
  padding: 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.row {
  justify-content: center;
}

.title {
  font-weight: bold;
  text-align: center;
}

.pagination {
  display: flex;
  justify-content: center;
}

.page-item {
  min-width: 100px;
  text-align: center;
}
</style>
