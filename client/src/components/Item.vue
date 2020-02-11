<template>
  <div class='item-details col-xs-12 col-sm-4 col-md-4 col-lg-4 px-0 py-2'>
    <button class="close mx-3" @click.stop.prevent="deleteItem()"><i class="fa fa-close"></i></button>
    <a href='#' @click.prevent="toggle" class="item-link">
      <h2 class='name'>{{ dish.name }}</h2>
      <div v-if="opened" class='more-info mb-4'>
        <div class='separator'></div>
        <v-btn text small color="primary" @click.prevent="openDialog()">Update</v-btn>
      </div>
    </a>
    <FormDialog v-if="dialog" :showed="dialog" :dish="dish" :list="list" @close="dialog = false" @save="save" method="update"/>
  </div>
</template>
<script>
import FormDialog from '@/components/FormDialog'
import CategoryService from '@/services/CategoryService'
import DishService from '@/services/DishService'

export default {
  name: "Item",

  components: {FormDialog},

  props: {
    dish: { type: Object, default: null }
  },

  data: () => ({
    opened: false,
    dialog: false,
    list: []
  }),

  methods: {
    toggle() {
      this.opened = !this.opened
    },
    async openDialog() {
      await this.fetchCategories()
      this.dialog = true
    },
    async fetchCategories() {
      this.list = await CategoryService.getAll()
        .catch(err => console.log(err))
    },
    async save(e) {
      e && await this.updateDish(this.dish.id, e.name, e.select)
      this.dialog = false
    },
    async updateDish(id, name, categoryId) {
      await DishService.updateDish(id, name, categoryId)
        .catch(err => console.log(err))
      this.$emit('update')
    },
    async deleteItem() {
      await DishService.deleteDish(this.dish.id)
        .catch(err => console.log(err))
      this.$emit('delete')
    }
  }
}
</script>
<style>
.item-details {
  min-height: 150px;
  border: 1px solid #ccc;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.item-details:hover {
  border: 1px solid #007bff;
}

.item-details:active, .item-details:visited {
  border: 1px solid #000;
}

.item-details a, .item-details a:hover, .item-details a:active, .item-details a:visited {
  text-decoration: none;
  color: black;
}

.item-link {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.item-details .btn {
  font-size: 12px
}

.name {
  font-size: 18px;
}

.img-thumbnail {
  width: 100px;
  display: flex;
  align-self: center;
  border: none;
}

.more-info {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.more-info p, .more-info ul {
  margin: 0;
  padding: 0 10px;
}

.item-details:hover .close {
  display: block;
}

.close {
  align-self: flex-end;
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
}

.fa.fa-close {
  font-size: 18px;
}

ul li {
  padding-left: 10px;
}

</style>
