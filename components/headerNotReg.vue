<script>
import LoginForm from '../components/LoginForm.vue';
import RegistrationForm from '../components/RegistrationForm.vue';
import ConfirmationNumber from '../components/ConfirmationNumber.vue';
import SuccessfullyRegistrationеForm from "../components/successfullyRegistrationеForm.vue";

// noinspection ES6ShorthandObjectProperty
export default {
  components: {
    SuccessfullyRegistrationеForm,
    LoginForm,
    RegistrationForm,
    ConfirmationNumber
  },
  data() {
    return {
      showOverlay: false,
      showForm: false,
      showOverlayReg: false,
      showFormReg: false,
      showOverlayConfNumb: false,
      showFormConfNumb: false,
      showOverlaySuccesReg: false,
      showSuccesReg: false

    };
  },
  methods: {
    toggleLoginForm() {
      this.showOverlay = !this.showOverlay;
      this.showForm = !this.showForm;
    },
    toggleRegForm() {
      this.showOverlayReg = !this.showOverlayReg;
      this.showFormReg = !this.showFormReg;
    },
    toggleConfNumbForm() {
      this.showOverlayConfNumb = !this.showOverlayConfNumb;
      this.showFormConfNumb = !this.showFormConfNumb;
    },
    toggleSuccesRegForm(){
      this.showOverlaySuccesReg = !this.showOverlaySuccesReg;
      this.showSuccesReg = !this.showSuccesReg;
    }
  }
}
</script>

<template>

  <header class="scroll">
    <a @click="$router.push('/')" class="logo">Swipe Up</a>
    <form class="search">
      <input id="search_text" type="text" placeholder="Найти...">
      <button id="search_button" type="submit"></button>
    </form>
    <div class="buttons">
      <div class="dropdown">
        <button class="button-catalog" id="main-category">
          Категории
        </button>
        <div class="dropdown-content" id="dropdown-content">

          <div class="dropdown-mini" id="dropdown-mini-4">
            <a href="#" id="chapter-4">Для детей</a>
            <div class="dropdown-content-mini" id="dropdown-content-mini">
              <a href="#" id="chapter-min-1">Одежда</a>
              <a href="#" id="chapter-min-2">Обувь</a>
              <a href="#" id="chapter-min-3">Мебель</a>
              <a href="#" id="chapter-min-4">Игрушки</a>
              <a href="#" id="chapter-min-5">Коляски</a>
              <a href="#" id="chapter-min-6">Спорт</a>
              <a href="#" id="chapter-min-7">Электроника</a>
              <a href="#" id="chapter-min-8">Автокресла и стульчики</a>
              <a href="#" id="chapter-min-9">Косметика и гигиена</a>
            </div>
          </div>

          <div class="dropdown-mini" id="dropdown-mini-1">
            <a href="#" id="chapter-1">Одежда, обувь, аксессуары</a>
            <div class="dropdown-content-mini" id="dropdown-content-mini">
              <a href="#" id="chapter-min-1">Скоро</a>
            </div>
          </div>

          <div class="dropdown-mini" id="dropdown-mini-2">
            <a href="#" id="chapter-2">Хобби и отдых</a>
            <div class="dropdown-content-mini" id="dropdown-content-mini">
              <a href="#" id="chapter-min-1">Скоро</a>
            </div>
          </div>

          <div class="dropdown-mini" id="dropdown-mini-3">
            <a href="#" id="chapter-3">Красота и здоровье</a>
            <div class="dropdown-content-mini" id="dropdown-content-mini">
              <a href="#" id="chapter-min-1">Скоро</a>
            </div>
          </div>

          <div class="dropdown-mini" id="dropdown-mini-5">
            <a href="#" id="chapter-5">Для дома и дачи</a>
            <div class="dropdown-content-mini" id="dropdown-content-mini">
              <a href="#" id="chapter-min-1">Скоро</a>
            </div>
          </div>

          <div class="dropdown-mini" id="dropdown-mini-6">
            <a href="#" id="chapter-6">Электроника</a>
            <div class="dropdown-content-mini" id="dropdown-content-mini">
              <a href="#" id="chapter-min-1">Скоро</a>
            </div>
          </div>
        </div>
      </div>
      <button class="button-login" @click="toggleLoginForm">
        Войти
      </button>

      <div class="overlay" v-if="showOverlay" @click="toggleLoginForm"></div>
      <LoginForm v-if="showForm" @closeForm="toggleLoginForm"
                 @openButtonReg="() => {toggleLoginForm(); toggleRegForm();}"></LoginForm>

      <button class="button-register" @click="toggleRegForm">
        Регистрация
      </button>

      <div class="overlay" v-if="showOverlayReg" @click="toggleRegForm"></div>

      <RegistrationForm v-if="showFormReg" @closeFormRegistration="toggleRegForm"
                        @openButtonLog="() => {toggleRegForm(); toggleLoginForm();}"
                        @openButtonConfNumb="() => {toggleRegForm(); toggleConfNumbForm();}"></RegistrationForm>

      <div class="overlay" v-if="showOverlayConfNumb" @click="toggleConfNumbForm"></div>
      <ConfirmationNumber v-if="showFormConfNumb" @closeFormConfNumb="toggleConfNumbForm"
                          @openButtonRegChangeData="() => {toggleConfNumbForm(); toggleRegForm();}"
                          @doneReg="toggleConfNumbForm"
                          @openSuccesReg="toggleSuccesRegForm"></ConfirmationNumber>


      <div class="overlay" v-if="showOverlaySuccesReg" @click="toggleSuccesRegForm"></div>
      <SuccessfullyRegistrationеForm v-if="showSuccesReg" @click="toggleSuccesRegForm" @closeFormSuccesReg="toggleSuccesRegForm"></SuccessfullyRegistrationеForm>


    </div>
  </header>
</template>

<style scoped>
header {
  height: 112px;
  width: 100%;

  border-bottom: 1px solid #c1c1c2;


  background: rgba(255, 255, 255, 1);

  display: flex;
  flex-direction: row;
  justify-content: space-between;


  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: top 0.3s;
}

.logo {
  height: fit-content;
  width: fit-content;

  color: #000;
  font-family: Comfortaa, serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;

  margin-top: 20px;
  margin-left: 65px;

  cursor: pointer;
}

.logo:hover {
  transform: scale(1.01);

}

.search {
  display: flex;
  justify-content: end;
  align-items: center;


  width: 27.375rem;
  height: 3.75rem;
  margin-top: 28px;
  margin-left: 5vw;

}


.search input {
  width: 27.375rem;
  height: 3.75rem;

  outline: none;

  border-radius: 1.5625rem;
  border: 3px solid #D9D9D9;
  background: #FFF;

  color: #000;
  font-family: Manrope, serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  padding-inline: 1.31rem;
}

.search button {
  width: 2.875rem;
  height: 2.875rem;
  flex-shrink: 0;
  background-image: url(../assets/images/search_logo.svg);
  background-size: 100% 100%;
  cursor: pointer;
  outline: none;

  fill: #0021CF;
  stroke-width: 3px;
  stroke: #0021CF;
  border-radius: 1rem;

  position: absolute;
  margin-right: 0.5vw;
}

.search button:before {
  height: 26px;
  width: 26px;
  top: 8px;
  right: 8px;
  background: #F15B42;
  cursor: pointer
}

.buttons {
  height: fit-content;
  width: fit-content;

  color: #000;
  text-align: center;
  font-family: Geologica, serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;

  display: flex;
  flex-direction: row;

  margin-top: 28px;
}

.button-catalog:hover,
.button-login:hover,
.button-register:hover {
  flex-shrink: 0;
  border-radius: 25px;
  transform: scale(1.03);
  background: rgba(255, 180, 239, 0.14);
}


.button-catalog {
  width: 100px;
  height: 58px;

  margin-right: 20px;
}

.dropdown {
  height: 58px;
  width: fit-content;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  z-index: 1;

  margin-right: 10px;
}

.dropdown-content {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.dropdown-content-mini {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;

  margin-top: -36px;
  margin-left: -298px;
}

.dropdown-mini:hover {
  background-color: #FFDAF7;
}

.button-login {
  width: 69px;

  margin-right: 45px;
}

.button-register {
  height: 58px;
  width: 193px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 3px solid #0021CF;

  margin-right: 74px;
}

/* for form & modal windows */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1; /* Make sure this is below your login form in z-index */
}
</style>
