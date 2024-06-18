<script setup>

</script>

<template>
  <div class="content">
    <div id="txt-container-header" onclick="window.location.href='#'">
      Обменять на скидку
    </div>


    <div class="container_for_promocodes">

      <div class="container-promocode" onclick="window.location.href = '#'">
        <div class="photo-ava-promo">
          <img src="../assets/images/detskiy-mir_ava.svg" alt="ava">
        </div>
        <div class="txt-cont-promocode">
          <h2>
            Детский мир
          </h2>
          <h3>
            Скидка 15% при покупке от 3000 руб
          </h3>
        </div>
      </div>

      <div class="container-promocode" onclick="window.location.href = '#'">
        <div class="photo-ava-promo">
          <img src="../assets/images/detskiy-mir_ava-2.svg" alt="ava">
        </div>
        <div class="txt-cont-promocode">
          <h2>
            Crockid
          </h2>
          <h3>
            Скидка 15% при покупке от 3000 руб
          </h3>
        </div>
      </div>

      <div class="container-promocode" onclick="window.location.href = '#'">
        <div class="photo-ava-promo">
          <img src="../assets/images/detskiy-mir_ava-3.svg" alt="ava">
        </div>
        <div class="txt-cont-promocode">
          <h2>
            Много колясок
          </h2>
          <h3>
            Скидка 15% при покупке от 3000 руб
          </h3>
        </div>
      </div>

      <div class="container-promocode" onclick="window.location.href = '#'">
        <div class="photo-ava-promo">
          <img src="../assets/images/detskiy-mir_ava.svg" alt="ava">
        </div>
        <div class="txt-cont-promocode">
          <h2>
            Не Детский мир а что-то другое
          </h2>
          <h3>
            Скидка 15% при покупке от 3000 руб
          </h3>
        </div>
      </div>

      <div class="container-promocode" onclick="window.location.href = '#'">
        <div class="photo-ava-promo">
          <img src="../assets/images/detskiy-mir_ava-2.svg" alt="ava">
        </div>
        <div class="txt-cont-promocode">
          <h2>
            не Детский мир
          </h2>
          <h3>
            Скидка 15% при покупке от 3000 руб
          </h3>
        </div>
      </div>

      <div class="container-promocode" onclick="window.location.href = '#'">
        <div class="photo-ava-promo">
          <img src="../assets/images/detskiy-mir_ava-3.svg" alt="ava">
        </div>
        <div class="txt-cont-promocode">
          <h2>
            не Детский мир
          </h2>
          <h3>
            Скидка 15% при покупке от 3000 руб
          </h3>
        </div>
      </div>


      <div class="container-promocode" onclick="window.location.href = '#'">
        <div class="photo-ava-promo">
          <img src="../assets/images/detskiy-mir_ava.svg" alt="ava">
        </div>
        <div class="txt-cont-promocode">
          <h2>
            Детский мир
          </h2>
          <h3>
            Скидка 15% при покупке от 3000 руб
          </h3>
        </div>
      </div>

      <div class="container-promocode" onclick="window.location.href = '#'">
        <div class="photo-ava-promo">
          <img src="../assets/images/detskiy-mir_ava-2.svg" alt="ava">
        </div>
        <div class="txt-cont-promocode">
          <h2>
            Crockid
          </h2>
          <h3>
            Скидка 15% при покупке от 3000 руб
          </h3>
        </div>
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
  padding-left: 29px;
  padding-right: 28px;
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

.container_for_promocodes {
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;

}


.container-promocode {

  width: 246px;
  height: 349px;

  display: flex;
  flex-direction: column;

  border: 2px solid #0021CF;
  border-radius: 30px;

  cursor: pointer;
  margin-bottom: 36px;

  margin-inline-end: 0.8vw;
}

.photo-ava-promo {

  width: 100%;
  height: 208px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

}

.photo-ava-promo img {
  max-width: 100%;
  max-height: 100%;
  display: block;
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

  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 9px;
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

  padding-left: 10px;
  padding-right: 10px;

}


/* Zoom for all */
.buttons-open-qr:hover,
.nav:hover {
  transform: scale(1.03);
}

.buttons-open-qr:hover {
  background: rgba(255, 180, 239, 0.14);
}
</style>
