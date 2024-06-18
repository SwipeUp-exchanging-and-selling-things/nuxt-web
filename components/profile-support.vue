<script setup>

</script>

<template>

  <div class="content">
    <div id="txt-container-header" onclick="window.location.href='#'">
      Настройки
    </div>
    <div class="settings-items">
      <h2>Имя</h2>
      <h3>Иван Иванов</h3>
      <button class="change" id="change-userName">
        Изменить
      </button>
    </div>
    <div class="settings-items">
      <h2>Фото</h2>
      <h3><img src="../assets/images/ava-settings.svg" alt="Ваше фото профиля"></h3>
      <button class="change" id="change-userPhoto">
        Изменить
      </button>
    </div>
    <div class="settings-items">
      <h2>Телефон</h2>
      <h3>+7 (999) 000 00-00</h3>
      <button class="change" id="change-userPhone">
        Изменить
      </button>
    </div>
    <div class="settings-items">
      <h2>Город</h2>
      <h3>Ростов-на-Дону</h3>
      <button class="change" id="change-userCity">
        Изменить
      </button>
    </div>
    <div class="settings-items">
      <h2>Email</h2>
      <h3>example@email.ru</h3>
      <button class="change" id="change-userEmail">
        Изменить
      </button>
    </div>
    <div class="settings-items">
      <h2>Соц. сеть</h2>
      <h3>https://vk.com/brand</h3>
      <button class="change" id="change-userSocialNetwork">
        Изменить
      </button>
    </div>
    <div class="buttons-save-delete">
      <button id="log-out">
        Выйти
      </button>
      <button id="delete-an-account">
        Удалить аккаунт
      </button>
      <button id="save-changes">
        Сохранить изменения
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

.settings-items {

  width: 100%;
  height: 46px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 31px;
  margin-right: 57px;



}

h2 {
  width: 150px;

  color: #000;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;

  line-height: normal;
}

h3 {
  width: 100%;

  color: #000;
  font-family: Manrope-Light;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;

  font-weight: Light;
}


.change {
  width: fit-content;

  color: #0021CF;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}



.buttons-save-delete {
  width: 100%;
  height: fit-content;
  display: flex;

  flex-direction: row;
  justify-content: end;

  margin-top: 40px;

  color: #000;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

#log-out {
  width: 114px;
  height: 40px;

  flex-shrink: 0;
  border-radius: 25px;
  border: 3px solid #0021CF;
  margin-right: 20px;
}

#delete-an-account {
  width: 218px;
  height: 40px;

  flex-shrink: 0;
  border-radius: 25px;
  border: 3px solid #0021CF;
  margin-right: 20px;
}

#save-changes {
  width: 254px;
  height: 40px;

  color: #FFF;

  flex-shrink: 0;
  border-radius: 25px;
  border: 3px;
  background-color: #0021CF;
}

/* Zoom for all */
#delete-an-account:hover,
#log-out:hover,
#save-changes:hover,
.nav:hover {
  transform: scale(1.03);

}

#delete-an-account:hover,
#log-out:hover {
  background: rgba(255, 180, 239, 0.14);
}
</style>
