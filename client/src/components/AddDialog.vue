<template>
  <FormDialog @add="emit('add')" method="add">
    <template v-slot:titleDialog>
      <v-card-title class="headline grey lighten-2" primary-title>
        Add Dish
      </v-card-title>
    </template>
    <template v-slot:buttonDialog>
      <v-btn color="primary" text @click.stop="closeDialog()">
        Submit
      </v-btn>
    </template>
  </FormDialog>
</template>
<script>
import FormDialog from '@/components/FormDialog'

export default {
  name: "AddDialog",

  components: {FormDialog}
}
</script>