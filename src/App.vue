<template>
  <div id="app">
    <AppHeader class="pr-App__AppHeader"/>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <div class="pr-App__content">
      <router-view/>
    </div>
    <AppFooter/>
  </div>
</template>

<style>
body {
  margin: 0;
  line-height: 1.5;
  text-align: left;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
}

.pr-App__AppHeader {
  position: absolute;
}
.pr-App__content {
  padding-top: 91px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  components: {AppFooter, AppHeader}
}
</script>
