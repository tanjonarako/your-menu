<template>
  <FormDialog :dish="dish" @update="emit('update')" method="update" @click.stop>
    <template v-slot:titleDialog>
      <v-card-title class="headline grey lighten-2" primary-title>
        Update
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
  name: "UpdateDialog",

  components: {FormDialog},

  props: {
    dish: {type: Object, default: () => ({})}
  }
}
</script>