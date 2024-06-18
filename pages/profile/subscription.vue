<template>
  <div>
    <client-only>
      <HeaderReg></HeaderReg>
      <main>
        <div class="container">
          <Profile_nav></Profile_nav>
          <Profile_subscription></Profile_subscription>
        </div>
      </main>
    </client-only>
    <server-only>
      <Footer></Footer>
    </server-only>
  </div>
</template>

<script setup lang="ts">
import Footer from "../../components/footer.vue";
import HeaderReg from "../../components/headerReg.vue";
import Profile_nav from "../../components/profile-nav.vue"
import Profile_subscription from "../../components/profile-subscription.vue"
</script>

<style scoped>
main {
  height: fit-content;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 112px;
}

.container {
  height: 876px;
  width: 1224px;

  border: 2px solid #D9D9D9;
  border-radius: 25px;

  margin-top: 57px;
  margin-bottom: 9vh;

  display: flex;
  flex-direction: row;
}

</style>
