<template>
  <div class="pr-UserList">
    Список
    <UserCard v-for="(person, index) in $store.state.people"
              :key="index"
        :name="person.name"
              gender="male"
              height="183"
              mass="78.2"
              :starships="person.starships"/>
    <BaseLoadIndicator/>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";
import BaseLoadIndicator from "@/components/BaseLoadIndicator";
import {PEOPLE_LIST_LOAD} from "@/store/mutation-types";
export default {
  name: "UserList",
  components: {BaseLoadIndicator, UserCard},
  mounted() {
    this.$store.dispatch(PEOPLE_LIST_LOAD);
  }

}
</script>

<style>

</style>
