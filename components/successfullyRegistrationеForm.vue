<script>

export default {
  methods: {
    emitCloseEvent() {
      this.$emit('closeFormSuccesReg');
    }
  }
}
</script>

<template>
  <form class="container">
    <div class="close-button">
      <img src="../assets/images/close-ico.svg" alt="close" @click="emitCloseEvent">
    </div>
    <div class="checkMark">
      <img src="../assets/images/checkMark.svg" alt="Вы успешно прошли регистрацию!">
    </div>
    <h1 class="succes"> Вы успешно прошли регистрацию </h1>
    <p class="auth"> Авторизуйтесь через логин и пароль</p>
  </form>
</template>

<style scoped>
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.container {
  display: flex;
  flex-direction: column;
  padding-top: 16px;

  width: 670px;
  height: 470px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 1px solid #0021CF;
  background: #FFF;
  box-shadow: 18px 18px 30px -7px rgba(0, 0, 0, 0.25);
}

.checkMark {
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
}

.checkMark img {
  width: 116px;
  height: 116px;
}

.succes {
  width: 100%;
  height: fit-content;

  margin-top: 20px;

  text-align: center;
  padding-left: 109px;
  padding-right: 114px;

  color: #000;
  font-feature-settings: 'liga' off;
  font-family: Comfortaa, serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

}

.auth {
  width: 100%;
  height: fit-content;

  margin-top: 33px;

  font-family: Manrope, serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  text-align: center;
}

button:hover {
  flex-shrink: 0;
  border-radius: 25px;
  transform: scale(1.03);
  background: rgba(255, 180, 239, 0.14);
}

.close-button {
  width: 90%;
  height: 20px;

  display: flex;
  justify-content: flex-end;

  cursor: pointer;

  margin-bottom: 36px;
}

.close-button img {
  width: 46px;
  height: 46px;
}

.close-button,
.close-button img:hover {
  transform: scale(1.12);
  cursor: pointer;
}
</style>
