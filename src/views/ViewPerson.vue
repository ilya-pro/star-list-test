<template>
  <div class="pr-ViewPerson">
    Страница пользователя
    <router-link :to="{ name: 'ViewUserList'}"
                 class="btn btn-sm btn-success">Back to List</router-link>
  </div>
</template>

<script>
export default {
name: "ViewPerson"
}
</script>

<style scoped>

</style>
