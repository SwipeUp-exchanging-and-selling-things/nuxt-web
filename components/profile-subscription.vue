<script setup>

</script>

<template>
  <div class="content">
    <div id="txt-container-header" onclick="window.location.href='#'">
      Подписка
    </div>

    <h3 id="txt_1">
      Подписка позволяет получать контакты пользователей
      для совершения сделок неограниченное количество раз
    </h3>
    <h3 id="txt_2">
      • Подписка на 1 месяц – 299 рублей
      <br />
      • Подписка на 6 месяцев – 1490 рублей
      <br />
      • Подписка на 12 месяцев – 2490 рублей
      <br />
      • Вечный доступ к платформе – 4990 рублей
    </h3>

    <div class="automatic-renewal">
      <input type="checkbox" name="automatic-renewal_check" id="automatic-renewal_">
      <h3>
        Автоматическое продление
        <br />
        (после окончания подписки она будет автоматически продлена)
      </h3>
    </div>
    <div class="container-button-subscripe">
      <button id="button-subscripe">
        Подписаться
      </button>
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
  height: fit-content;
  color: #000;
  font-family: Manrope-Light;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  font-weight: Light;
  padding-right: 80px;
}

#txt_1 {
  margin-bottom: 43px;
}

#txt_2 {
  line-height: 40px;
}

.automatic-renewal {
  width: 732px;
  height: 54px;
  display: flex;
  flex-direction: row;
  align-self: baseline;
  justify-content: baseline;
  margin-top: 32px;
}

#automatic-renewal_ {
  width: 25px;
  height: 25px;
  margin-top: 3px;
  margin-right: 9px;
}

.container-button-subscripe {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  margin-top: 59px;
}

#button-subscripe {
  width: 205.56px;
  height: 40px;
  background-color: #0021CF;
  border: 2px solid #0021CF;
  border-radius: 30px;
  color: #ffffff;
  font-family: Comfortaa;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

.buttons-open-qr:hover,
.nav:hover {
  transform: scale(1.03);
}

/* Скрываем стандартный чекбокс */
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  position: relative;
}

/* Стилизация чекбокса при его отметке */
input[type="checkbox"]:checked {
  background-color: #0021CF;
  border: 2px solid #0021CF;
}

/* Добавляем галочку при отметке */
input[type="checkbox"]:checked::after {
  content: "";
  position: absolute;
  top: 40%;
  left: 50%;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -50%) rotate(45deg);
}

@media (max-width: 880px) { 
  .content{
    padding: 0;
    padding-top: 38px;
    width: 100vw;
    padding-left: 7vw;
    padding-right: 7vw;
  }

  #txt-container-header {
    text-align: center;
    width: 100%;
  }

  h3 {
    padding: 0;
    font-size: 16px;
  }

  #txt_1 {
    margin-bottom: 10px;
  }

  #txt_2 {
    font-size: 15px;
  }

  .automatic-renewal {
    width: auto;
    font-size: 14px;
  }

  #button-subscripe {
    width: 50vw;
  }

  .container-button-subscripe {
    margin-top: 40px;
  }
}

@media (max-width: 550px) {
  #button-subscripe {
    width: 90vw;
  }
}

@media (min-width: 880px) and (max-width: 1250px) {
  .content{
    padding-left: 4vw;
    padding-right: 4vw;
    width: 50vw;
  }

  h3 {
    width: 64vw;
  }
}
</style>
