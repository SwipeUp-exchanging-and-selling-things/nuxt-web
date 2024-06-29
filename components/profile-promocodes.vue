<script setup>

</script>

<template>

  <div class="content">
    <div id="txt-container-header" onclick="window.location.href='#'">
      Мои промокоды
    </div>

    <div class="container-promocode">
      <div class="img-promocode">
        <img src="../assets/images/test_promocode_ava.svg" alt="Your proomocode"
             onclick="window.location.href = '#'">
      </div>

      <div class="container-and-button">
        <h2 onclick="window.location.href='#'">
          Промокод на скидку 15% при покупке от 3000 руб
        </h2>
        <h3>
          Покажите продавцу на кассе QR-код или назовите номер: 6J57ER
        </h3>
        <button class="buttons-open-qr">
          Открыть QR
        </button>
      </div>
    </div>

    <div class="container-promocode">
      <div class="img-promocode">
        <img src="../assets/images/test_promocode_ava_2.svg" alt="Your proomocode"
             onclick="window.location.href = '#'">
      </div>

      <div class="container-and-button">
        <h2 onclick="window.location.href='#'">
          Промокод на скидку 500 рублей при покупке от 1500 руб
        </h2>
        <h3>
          Покажите продавцу на кассе QR-код или назовите номер: 8Р10KQ
        </h3>
        <button class="buttons-open-qr">
          Открыть QR
        </button>
      </div>
    </div>
  </div>

</template>

<style scoped>
.content {
  flex: 869;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-top: 38px;
  padding-left: 47px;
  padding-right: 190.27px;
}

#txt-container-header {
  height: fit-content;
  width: fit-content;
  color: #000;
  font-family: Comfortaa;
  font-size: 40px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  padding-bottom: 27px;
}

.container-promocode {
  width: 814px;
  height: 257px;
  display: flex;
  flex-direction: row;
  border: 2px solid #0021CF;
  border-radius: 30px;
  width: 814px;
  height: 257px;
  padding-top: 23px;
  padding-left: 26px;
  margin-bottom: 36px;
}

.img-promocode {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: baseline;
  width: 190px;
  height: 190px;
}

.container-and-button {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: end;
  width: 100%;
  height: 100%;
  padding-top: 2px;
  padding-left: 25px;
  padding-right: 17px;
  padding-bottom: 19px;
}

.img-promocode:hover,
.container-and-button h2:hover {
  cursor: pointer;
}

h2 {
  width: 100%;
  height: fit-content;
  color: #000;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  padding-right: 35px;
  margin-bottom: 13px;
}

h3 {
  width: 100%;
  height: 100%;
  color: #000;
  font-family: Manrope-Light;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  font-weight: Light;
  padding-right: 80px;
}

.buttons-open-qr {
  width: 262.71px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 3px solid #0021CF;
  margin-right: 20px;
  color: #000;
  font-family: Manrope-Light;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

/* Zoom for all */
.buttons-open-qr:hover,
.nav:hover {
  transform: scale(1.03);
}

.buttons-open-qr:hover {
  background: rgba(255, 180, 239, 0.14);
}

@media (max-width: 880px) { 
  #txt-container-header {
    text-align: center;
    width: 100%;
  }

  .content {
    padding: 0;
    padding-top: 38px;
    width: 100vw;
    padding-left: 7vw;
    padding-right: 7vw;
  }

  .container-promocode {
    width: auto;
    height: auto;
  }
}

@media (min-width: 880px) and (max-width: 1250px) {
  .content {
    padding-left: 4vw;
    padding-right: 4vw;
    width: 50vw;
  }

  .container-promocode {
    width: 55vw;
    height: auto;
  }
}
</style>
