<template>
    <div>
        <vs-td class="whitespace-no-wrap">
            <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(params.value)"/>
            <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2"/>
        </vs-td>
    </div>
</template>

<script>
  export default {
    name: "Actions",
    mounted () {
      console.log('Actions Component' + this.params)
    },
    methods: {
      editData(data) {
        this.$events.fire('sidebar-data', data)
        this.$events.fire('toggle-data-sidebar', true)
      }
    }
  }
</script>

<style scoped>

</style>
