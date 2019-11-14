<template>
    <vs-td>
        <span class="flex items-center px-2 py-1 rounded" v-for="role in params.value"><div class="h-3 w-3 rounded-full bg-success mr-2"></div>{{ role.name }}</span>
    </vs-td>
</template>

<script>
  export default {
    name: "Roles",
    mounted () {
    }
  }
</script>

<style scoped>

</style>
