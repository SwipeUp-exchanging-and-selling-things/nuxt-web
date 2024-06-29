<script>
import Cookies from 'js-cookie'
import crypto from 'crypto';


export default {
  methods: {
    emitCloseEventReg() {
      this.$emit('closeFormRegistration');
    },
    emitOpenEvent() {
      this.$emit('openButtonLog');
    },
    checkConfirmationPassword(event){
      return document.getElementById('password').value === document.getElementById('confirmationPassword').value;
    },
    validateForm() {
      if (this.checkConfirmationPassword()) {
        let firstName = document.getElementById('first_name').value;
        let number = document.getElementById('number').value;
        let email = document.getElementById('email').value;
        let hashPassword = crypto.createHash('sha256').update(document.getElementById('password').value).digest('hex');

        Cookies.set('userFirstName', firstName);
        Cookies.set('number', number);
        Cookies.set('email', email);
        Cookies.set('hashPassword', hashPassword);

        this.$emit('openButtonConfNumb');
      } else {
        alert('Пароли не совпадают!');
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="validateForm"  class="container">
    <div class="close-button">
      <img src="../assets/images/close-ico.svg" alt="close" @click="emitCloseEventReg">
    </div>
    <div id="registration">
      <h1>
        Регистрация
      </h1>
    </div>
    <input class="inputs" id="first_name" name="first_name" type="text" placeholder="Ваше имя*" v-cyrillic-mask
           pattern="[а-яА-ЯёЁ]{2,}" title="Используйте только кириллицу" required>
    <input class="inputs" id="number" name="number" type="text" placeholder="Телефон*" pattern="^[+]?[0-9]{9,}$" v-mask="'+7##########'"
           title="Введите ваш номер телефона" required>
    <input class="inputs" id="email" name="email" type="email" placeholder="Почта" pattern=".*[^@]+@[^@]+.*"
           title="Введите существующий ваш адрес электронной почты"
           oninvalid="this.setCustomValidity('Введите существующий адрес электронной почты')"
           oninput="this.setCustomValidity('')">
    <input class="inputs" id="password" name="password" type="password" placeholder="Пароль*"
           pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
           title="Пароль должен состоять как минимум из 8 символов и содержать хотя бы одну заглавную букву, одну строчную букву и одну цифру или специальный символ (?![.\n]). Используйте только латинские буквы, цифры или специальные символы"
           required>
    <input class="inputs" id="confirmationPassword" name="password" type="password" placeholder="Подтвердите пароль*"
           pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
           title="Пароли должны совпадать!"
           required>
    <div id="login">
      Уже есть аккаунт?
    </div>
    <div id="regAndLog">
      <button id="ButtonLog" type="button" @click="emitOpenEvent">
        Войти
      </button>
      <button id="ButtonCont" type="submit">
        Продолжить
      </button>
    </div>
    <div id="privacyPolicy">
      При регистрации и входе вы соглашаетесь
      <a href="#" class="link">с условиями использования Swipe Up</a>
      <br>
      и
      <a href="#" class="link">политикой конфиденциальности</a>
    </div>
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
  padding-left: 58px;
  padding-right: 62px;
  padding-top: 38px;

  width: 670px;
  height: 700px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 1px solid #0021CF;
  background: #FFF;
  box-shadow: 18px 18px 30px -7px rgba(0, 0, 0, 0.25);
}

#registration {
  width: 100%;
  height: min-content;
  margin-bottom: 51px;
}

#registration h1 {
  color: #000;
  font-feature-settings: 'liga' off;
  font-family: Comfortaa, serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: start;
}

.inputs {
  margin-bottom: 25px;
  padding-inline: 13px;

  width: 550px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 3px solid #D9D9D9;
  background: #FFF;
  color: rgba(0, 0, 0, 0.50);
  font-family: Geologica, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

#confirmationPassword {
  margin-bottom: 25px;
}



#login {
  color: #000;
  font-family: Geologica, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  margin-bottom: 14px;
  text-align: start;
}

#regAndLog {
  margin-bottom: 61px;
  display: flex;
  justify-content: space-between;
}

#regAndLog #ButtonLog {
  width: 155px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 3px solid #0021CF;

  color: #000;
  text-align: center;
  font-family: Geologica, serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

#regAndLog #ButtonCont {
  width: 206px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 3px solid #0021CF;
  background: #0021CF;

  color: #FFF;
  text-align: center;
  font-family: Comfortaa, serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

#privacyPolicy {
  color: rgba(0, 0, 0, 0.50);
  text-align: center;
  font-family: Geologica, serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

a.link {
  color: rgba(0, 0, 0, 0.50);
  font-family: Geologica, serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  text-decoration-line: underline;
}

button:hover {
  flex-shrink: 0;
  border-radius: 25px;
  transform: scale(1.03);
  background: rgba(255, 180, 239, 0.14);
}

.close-button {
  width: 100%;
  height: 20px;

  display: flex;
  justify-content: flex-end;

  cursor: pointer;
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
