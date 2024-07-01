<template>
  <div>
    <client-only>
      <HeaderReg></HeaderReg>
      <main>
        <div class="container">
          <Profile_nav></Profile_nav>
          <Profile_exchange_promocode></Profile_exchange_promocode>
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
import Profile_exchange_promocode from  "../../components/profile-exchange-promocode.vue"
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
  height: auto;
  width: 1224px;
  border: 2px solid #D9D9D9;
  border-radius: 25px;
  margin-top: 57px;
  margin-bottom: 9vh;
  display: flex;
  flex-direction: row;
}

@media (max-width: 880px) { 
  .container {
    display: flex;
    flex-direction: column;
    border: none;
    margin-bottom: 3vh;
    height: auto;
  }

  main {
    padding-top: 30px;
  }
}
</style>
