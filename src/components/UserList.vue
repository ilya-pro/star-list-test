<template>
  <div class="pr-UserList">
    Список
    <UserCard name="Boba Fett"
              gender="male"
              height="183"
              mass="78.2"
              :starships="['super', 'flower']"/>
    <BaseLoadIndicator/>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";
import BaseLoadIndicator from "@/components/BaseLoadIndicator";
export default {
  name: "UserList",
  components: {BaseLoadIndicator, UserCard}

}
</script>

<style>

</style>
