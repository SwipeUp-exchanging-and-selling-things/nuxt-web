<script setup>

</script>

<template>
    <div class="content">
      <div id="txt-container-header" onclick="window.location.href='#'">
        Мои объявления
      </div>

      <div class="container-ads">
        <div class="img-promocode">
          <img src="../assets/images/empty-ava.svg" alt="Your ads" onclick="window.location.href = '#'">
        </div>

        <div class="container-and-button">
          <h2 onclick="window.location.href='#'">
            Коляска в хорошем состоянии
          </h2>
          <h3>
            Кoляcка в идеальном cостоянии, всe целoе, чистое. Пользoвалиcь в ocнoвнoм люлькoй, cидячей
            практичecки нe пoльзoвалиcь. В коляскe нe кушали, в обуви не eздили. Рaзобpаннaя, пoмытaя
            стoит упaкoвaнная в пакeтах. В кoмплектe сумка, дождeвик, мoскитная сетка.
          </h3>
          <button class="buttons-remove-publication">
            Снять с публикации
          </button>
        </div>
      </div>

      <div class="container-ads">
        <div class="img-promocode">
          <img src="../assets/images/empty-ava.svg" alt="Your ads" onclick="window.location.href = '#'">
        </div>

        <div class="container-and-button">
          <h2 onclick="window.location.href='#'">
            Коляска в хорошем состоянии
          </h2>
          <h3>
            Кoляcка в идеальном cостоянии, всe целoе, чистое. Пользoвалиcь в ocнoвнoм люлькoй, cидячей
            практичecки нe пoльзoвалиcь. В коляскe нe кушали, в обуви не eздили. Рaзобpаннaя, пoмытaя
            стoит упaкoвaнная в пакeтах. В кoмплектe сумка, дождeвик, мoскитная сетка. Кoляcка в
            идеальном cостоянии, всe целoе, чистое.
            Текст длиннее
          </h3>
          <button class="buttons-remove-publication">
            Снять с публикации
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

.container-ads {

  width: 814px;
  height: 345px;

  display: flex;
  flex-direction: row;

  border: 2px solid #0021CF;
  border-radius: 30px;


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
  margin-bottom: 10px;
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

.buttons-remove-publication {
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
.buttons-remove-publication:hover,
.nav:hover {
  transform: scale(1.03);

}

.buttons-remove-publication:hover {
  background: rgba(255, 180, 239, 0.14);
}
</style>
