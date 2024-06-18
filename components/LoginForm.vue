<script>
  import Cookies from 'js-cookie'
  import request from 'superagent';
  import crypto from "crypto";

export default {
  methods: {
    async emitCloseEvent() {
      this.$emit('closeForm');
    },
    async emitOpenEvent() {
      this.$emit('openButtonReg');
    },
    async submitData() {
      try {
        const url = 'http://localhost:8080/authentication';

        const data = {
          userName: document.getElementById('numberAndEmail').value,
          password: crypto.createHash('sha256').update(document.getElementById('password').value).digest('hex')
        };
        console.log(data);
        const response = await request.post(url)
          .send(data);
        Cookies.set('tokenJwt', response.body.jwtToken);
        console.log(response.body.jwtToken)
        this.$emit('closeForm');
        await this.$router.push('/auth');
      }catch (error) {
        await alert("Неверный логин или пароль. Пожалуйста, проверьте правильность введенных данных и повторите попытку позже. Если у вас возникли проблемы с доступом к личному кабинету, обратитесь в техническую поддержку.");
        console.error('Ошибка при выполнении запроса:', error);
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitData" class="container">
    <div class="close-button">
      <img src="../assets/images/close-ico.svg" alt="close" @click="emitCloseEvent">
    </div>
    <div id="login">
      <h1>
        Войти
      </h1>
    </div>
    <input id="numberAndEmail" name="username" type="login" placeholder="Телефон или почта"
           pattern="^[+]?[0-9]{9,}$|.*[^@]+@[^@]+.*"
           title="Введите существующий ваш адрес электронной почты или номер телефона"
           oninvalid="this.setCustomValidity('Введите существующий адрес электронной почты')"
           oninput="this.setCustomValidity('')" required>
    <input id="password" name="password" type="password" placeholder="Пароль"
           pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
           title="Пароль должен состоять как минимум из 8 символов и содержать хотя бы одну заглавную букву, одну строчную букву и одну цифру или специальный символ (?![.\n]). Используйте только латинские буквы, цифры или специальные символы"
           required>

    <div id="registration">
      Нет аккаунта?
    </div>
    <div id="regAndLog">
      <button id="ButtonReg" type="button" @click="emitOpenEvent">
        Регистрация
      </button>
      <button id="ButtonLog" type="submit">
        Войти
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
  padding-right: 64px;
  padding-top: 43px;

  width: 670px;
  height: 594px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 1px solid #0021CF;
  background: #FFF;
  box-shadow: 18px 18px 30px -7px rgba(0, 0, 0, 0.25);
}

#login {
  width: 100%;
  margin-bottom: 70px;
}

#login h1 {
  color: #000;
  font-feature-settings: 'liga' off;
  font-family: Comfortaa, serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  text-align: start;
}

#numberAndEmail,
#password {
  height: 60px;
  width: 100%;

  flex-shrink: 0;
  border-radius: 25px;
  border: 3px solid #D9D9D9;
  background: #FFF;
  margin-bottom: 34px;
  color: rgba(0, 0, 0, 0.50);
  font-family: Geologica, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  padding-inline: 13px;
}

#password {
  margin-bottom: 41px;
}

#registration {
  color: #000;
  font-family: Geologica, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  margin-bottom: 17px;

  text-align: start;
}

#regAndLog {
  margin-bottom: 70px;
  display: flex;
  justify-content: space-between;
}

#regAndLog #ButtonReg {
  width: 202px;
  height: 49px;
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

#regAndLog #ButtonLog {
  width: 146px;
  height: 49px;
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

/* Adaptation for mobile devices */

@media (max-width: 769px) {
  .container {
    display: flex;
    flex-direction: column;
    padding-left: 35px;
    padding-right: 41px;
    padding-top: 43px;

    width: 400px;
    height: 594px;
    flex-shrink: 0;
    border-radius: 25px;
    border: 1px solid #0021CF;
    background: #FFF;
    box-shadow: 18px 18px 30px -7px rgba(0, 0, 0, 0.25);
  }

  #regAndLog #ButtonReg {
    width: 150px;
    height: 49px;
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

  #regAndLog #ButtonLog {
    width: 120px;
    height: 49px;
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
