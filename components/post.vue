<script setup>

</script>

<template>
  <div>

    <div class="post">
      <div class="content">
        <p class="txt1">
          Накопилось много ненужных вещей?
        </p>
        <p class="txt2">
          Обменяй их на нужные со Swipe Up
        </p>
        <button class="button-place">
          Разместить объявление
        </button>
      </div>
      <hr class="hr-line">
    </div>

    <div class="how">
      <div class="txt">
        <p class="txt1">
          Как это работает?
        </p>
        <button class="button-more">
          Узнать больше →
        </button>
      </div>
      <div class="guide">
        <div class="container" id="container1">
          <p class="txt_guide">
            1. Создайте объявление
          </p>
        </div>
        <div class="container" id="container2">
          <p class="txt_guide">
            2. Дождитесь, когда вашей вешью заинтересуются
          </p>
        </div>
        <div class="container" id="container3">
          <p class="txt_guide">
            3. Обменяйтесь
          </p>
        </div>
      </div>

    </div>

    <hr class="hr-line">
  </div>
</template>

<style scoped>

.post {
  height: 100dvh;
  width: 100%;

  padding-top: 111.72px;
}

.content .txt1 {
  height: fit-content;
  width: fit-content;
  color: #000;
  text-align: center;
  font-feature-settings: 'ss01' on, 'salt' on;
  font-family: Comfortaa, serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 10.7rem;
}

.content .txt2 {
  height: fit-content;
  width: fit-content;
  color: #000;
  text-align: center;
  font-family: Geologica, serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  margin-top: 1.56rem;
}

.content .button-place {
  width: 19.8125rem;
  height: 4.0625rem;
  flex-shrink: 0;
  border-radius: 1.5625rem;
  border: 3px solid #0021CF;
  color: #000;
  text-align: center;
  font-family: Geologica, serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  margin-top: 3.37rem;
}

.content .button-place:hover {
  flex-shrink: 0;
  border-radius: 25px;
  transform: scale(1.03);
  background: rgba(255, 180, 239, 0.14);
}

.how {
  height: 38rem;
  width: 100%;
  flex-shrink: 0;
  background: #FFF;
  display: flex;
  flex-direction: column;
  padding-left: 4.25rem;
  padding-right: 4.37rem;
}

.how .txt {
  height: 2.25rem;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.how .txt .txt1 {
  color: #000;
  font-feature-settings: 'liga' off;
  font-family: Comfortaa, serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.how .button-more {
  color: #000;
  font-family: Geologica, serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

.how .button-more:hover {
  flex-shrink: 0;
  border-radius: 35px;
  transform: scale(1.06);
  background: rgba(255, 180, 239, 0.14);
}

.guide {
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 3.31rem;
}

.guide .container {
  flex-shrink: 0;
  border-radius: 1.5625rem;
  border: 1px solid #0021CF;
  background: #FFF;
  box-shadow: 6px 9px 16px -1px rgba(0, 0, 0, 0.05);
  margin-inline: auto;
}

.guide .txt_guide {
  height: 1.375rem;
  color: #000;
  text-align: center;
  font-family: Geologica, serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  margin-top: 18.12rem;
}

.hr-line {
  width: 100%;
  margin: 0 0;
  padding: 0;
  height: 0;
  border: none;
  border-top: 1px solid #c1c1c2;
}

@media (max-width: 768px) {
  .post .content{
    height: 80vh;
    width: 100%;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 1);
    background-image: url(../assets/images/background_group_3.png);
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .txt {
    text-align: center;
    justify-content: center;
  }
  
  .guide {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    margin-bottom: 45px;
    width: 90%;
    height: 350px;
  }

  #container3 {
    margin-bottom: 70px;
  }

  .how {
    height: auto;
    width: 80vw;
    margin: 0 auto;
    padding: 0;
  }

  .button-more {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    margin: 0;
    margin-top: 1250px;
  }

  .txt1 {
    font-size: 24px;
  }
}

@media (min-width: 768px) {
  .post .content{
    height: 80vh;
    width: 100%;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 1);
    background-image: url(../assets/images/background_group_2.png);
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    width: 26.25rem;
    height: 23.5625rem;
  }

  .button-more{
    margin-right: 2.31rem;
  }

  .txt1 {
    font-size: 2rem;
  }

  .how .txt {
    height: 2.25rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (min-width: 768px) and (max-width: 1450px) {
  .container {
    margin: 0 auto;
    display: block;
    margin-bottom: 45px;
  }
  .guide {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .how {
    height: auto;
    width: 80vw;
    margin: 0 auto;
    padding: 0;
  }
}
</style>
