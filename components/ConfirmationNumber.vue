<script src="../plugins/classes/User.js"></script>
<script>
import Cookies from 'js-cookie'
import request from 'superagent';

export default {
  methods: {
    async emitCloseEvent() {
      this.$emit('closeFormConfNumb');
    },
    async emitButtonRegChangeData() {
      this.$emit('openButtonRegChangeData');
    },
    async callConfirmationNumber() {
      const url = 'http://localhost:8080/authentication/flashCall';
      const phone = Cookies.get('number').slice(1); //доделать

      const data = {
        number: phone,
      };

      try {
        const response = await request.post(url)
          .send(data);
        let jsonObject = JSON.parse(response.text);
        let pincode = jsonObject.data.pincode;
        Cookies.set('pincode', pincode);

      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    },
    async submitData() {
      try {
        const url = 'http://localhost:8080/authentication/free';
        let email = '';

        if (Cookies.get('email') === "") {
          email = null;
        } else {
          email = Cookies.get('email');
        }

        const data = {
          name: Cookies.get('userFirstName'),
          number: Cookies.get('number'),
          email: email,
          password: Cookies.get('hashPassword'),
          photoUrl: '',
          region: 'Ростов-на-Дону',
          vkUrl: null,
          tgUrl: null,
          subscriptionsStatus: 0,
          subscriptionEndDate: '',
          subscriptionAutoRenewal: 0,
          swipeBalance: 0
        };

        const headers = {
          'requestRoute': 'users',
          'requestMethod': 'POST'
        };
        const response = await request.post(url)
          .set(headers)
          .send(data);
        return true;
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        return false;
      }
    },
    async mainForm() {
      if (document.getElementById('secretCode').value === Cookies.get('pincode')) {
        if(await this.submitData()){
          this.$emit('openSuccesReg');
        } else {
          alert('К сожалению, во время создания аккаунта произошла ошибка. Пожалуйста, проверьте правильность введенных данных и повторите попытку позже. Обратите внимание, возможно, аккаунт с указанной почтой или номером телефона уже существует. Если у вас возникли проблемы с доступом к личному кабинету, обратитесь в техническую поддержку.');
        }
        this.$emit('closeFormConfNumb');
      } else {
        alert('Неверный код проверки номера телефона! Попробуйте еще раз');
      }
    },
    async setPhoneNumber() {
      const phoneNumber = Cookies.get('number');
      document.getElementById('phone').textContent = `Вам поступит звонок на номер ${phoneNumber} в течение пяти минут. Укажите последние четыре цифры`;
    }
  },
  async mounted() {
    await this.setPhoneNumber();
    await this.callConfirmationNumber();
  }
}
</script>

<template>
  <form @submit.prevent="mainForm" class="container">
    <div class="close-button">
      <img src="../assets/images/close-ico.svg" alt="close" @click="emitCloseEvent">
    </div>
    <div id="login">
      <h1>
        Подтверждение номера
      </h1>
    </div>
    <p class="phone" id="phone"> Вам поступит звонок на номер +7 909 999 99 99 в течение пяти минут. Укажите последние четыре цифры</p>
    <input id="secretCode" name="secretCode" type="text" title="Попробуйте еще раз!"
           oninvalid="this.setCustomValidity('Неверный код, попробуйте еще раз!')"
           oninput="this.setCustomValidity('')">
    <div id="getNewCode">
    </div>
    <div id="regAndLog">
      <button id="ButtonChangeNumber" type="button" @click="emitButtonRegChangeData">
        Изменить информацию
      </button>
      <button id="ButtonConfirm" type="submit">
        Подтвердить
      </button>
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
  padding-right: 73px;
  padding-top: 41px;

  width: 684px;
  height: 439px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 1px solid #0021CF;
  background: #FFF;
  box-shadow: 18px 18px 30px -7px rgba(0, 0, 0, 0.25);
}

#login {
  width: 100%;
  margin-bottom: 47px;
}

#login h1 {
  color: #000;
  font-feature-settings: 'liga' off;
  font-family: Comfortaa,serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  text-align: start;
}

.phone {
  width: 539px;
  color: #000;
  font-family: Geologica,serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;

  margin-bottom: 29px;
  text-align: start;
}

#secretCode {
  padding-inline: 13px;

  width: 539px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 3px solid #D9D9D9;
  background: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;

  margin-bottom: 10px;
}

#getNewCode {
  color: rgba(0, 0, 0, 0.50);
  font-family: Geologica,serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;

  margin-bottom: 52px;

  text-align: start;
}


#regAndLog{
  display: flex;
  justify-content:space-between;
}

#regAndLog #ButtonChangeNumber {
  width: 291px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 3px solid #0021CF;

  color: #000;
  text-align: center;
  font-family: Geologica,serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

#regAndLog #ButtonConfirm {
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
