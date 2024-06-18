<template>
  <div>
    <client-only>
      <HeaderReg></HeaderReg>
    </client-only>
    <server-only>
      <Post></Post>
    </server-only>
<!--    <client-only>-->
<!--      <MainNotReg></MainNotReg>-->
<!--    </client-only>-->
    <server-only>
      <Footer></Footer>
    </server-only>
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/footer.vue";
import MainNotReg from "../components/mainNotReg.vue";
import HeaderReg from "../components/headerReg.vue";
import Post from "../components/post.vue";
import headerReg from "../components/headerReg.vue";
</script>
