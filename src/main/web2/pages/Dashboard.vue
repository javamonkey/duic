<template>
  <div>
    <top/>

    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Top from "./Top";

  export default {
    name: "Main",
    components: {Top}
  }
</script>

<style scoped>

</style>
