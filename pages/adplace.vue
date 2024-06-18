<template>
  <div>
    <client-only>
      <HeaderReg></HeaderReg>
      <adPlaceForm></adPlaceForm>
    </client-only>
    <server-only>
      <Footer></Footer>
    </server-only>
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/footer.vue";
import HeaderReg from "../components/headerReg.vue";
import adPlaceForm from "../components/adPlaceForm.vue"
</script>

<style scoped>

</style>
