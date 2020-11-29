<template>
  <div class="pr-AppHeader">
    <img class="pr-AppHeader__logo" alt="logo" src="../assets/sw_logo.png">
  </div>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style>
.pr-AppHeader {
  background: #000 url(../assets/milkyway.jpg) 50% no-repeat;
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: center;
}
.pr-AppHeader__logo {
  height: 35px;
  display: block;
}

</style>
