<template>
  <v-app id="inspire">
    <div class="text-center">
      <v-dialog :value="showed" persistent @keydown.esc="$emit('hide')" lazy-validation width="500">
        <v-card>
          <template>
            <v-card-title class="headline grey lighten-2" primary-title>
              {{title}}
            </v-card-title>
          </template>
          <v-card-text>
            <v-text-field v-model="name" name="name" ref="name" :error="nameErrors" :rules="rules" label="Name" :placeholder="dish ? dish.name : 'name'" required></v-text-field>
            <v-select
              name="category"
              ref="category"
              :items="itemsList"
              v-model="selected"
              :rules="rules"
              :error="categoryErrors"
              item-text="name"
              item-value="id"
              menu-props="auto"
              label="Category"
              hide-details
              single-line
              required
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <template>
              <v-btn color="blue darken-1" text @click="close()">Close</v-btn>
              <v-btn color="blue darken-1" text @click.stop="save()">Save</v-btn>
            </template>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'FormDialog',

  mixins: [validationMixin],

  validations: {
    name: { required },
    category: { required }
  },

  props: {
    method: {type: String, default: 'add'},
    showed: {type: Boolean, default: false},
    dish: {type: Object, default: () => ({})},
    list: {type: Array, default: () => ([])}
  },

  data: () => ({
    rules: [
      v => !!v || 'Field is required'
    ]
  }),

  computed: {
    name: {
      get () {
        return this.dish && this.dish.name ? this.dish.name : ''
      },
      set (newValue) {
        this.dish.name = newValue
      }
    },
    title () {
      return this.method === "add" ? 'Add' : 'Update'
    },
    nameErrors () {
      return (this.$v.name.$dirty && (!this.$v.name.required)) || this.error
    },
    categoryErrors () {
      return (this.$v.category.$dirty && (!this.$v.category.required)) || this.error
    },
    selected: {
      // getter
      get: function () {
        const select = this.list.find(item => item.id === this.dish.categoryId)
        return select ? select : null
      },
      set: function (newValue) {
        this.dish.categoryId = newValue
      }
    },
    itemsList() {
      return this.list && this.list
        .map(e => {
          return {
            id: e.id,
            name: e.name
          }
        }) 
    }
  },

  methods: {
    save() {
      this.$v.$touch()
      if (this.$refs.name.validate() && this.$refs.category.validate()) {
        this.$emit('save', {name: this.dish.name, select: this.dish.categoryId})
      }
    },

    close() {
      this.$emit('close')
    }
  }
}
</script>
