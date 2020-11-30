<template>
  <div class="pr-BaseLoadIndicator">

  </div>
</template>

<script>
export default {
name: "BaseLoadIndicator"
}
</script>

<style>
@keyframes spinner-border {
  0% {
    transform:rotate(0deg);
  }
  100% {
    transform:rotate(360deg);
  }
}

.pr-BaseLoadIndicator {
  width: 5rem;
  height: 5rem;
  color: #28a745;
  border: .25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner-border .75s linear infinite;
}

</style>
