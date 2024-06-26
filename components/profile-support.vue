<script setup>
import { ref } from 'vue';

//реактивный массив вопросов и ответов
const faqs = ref([
  { question: 'Вопрос 1', answer: '', isOpen: false },
  { question: 'Вопрос 2', answer: '', isOpen: false },
  { question: 'Вопрос 3', answer: 'Ответ на вопрос\nОтвет на вопрос\nОтвет на вопрос\nОтвет на вопрос', isOpen: false },
  { question: 'Вопрос 4', answer: '', isOpen: false },
]);

//функция для переключения состояния (открыт/закрыт) для вопросов
function toggleFaq(index) {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
}
</script>

<template>
  <div class="content">
    <div class="top-content">
      <div id="txt-container-header">
        Поддержка
      </div>
      <div class="faq">
        <h2>F.A.Q.</h2>
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item"> <!-- Цикл v-for для отображения всех вопросов из массива faqs. -->
          <div class="faq-question" @click="toggleFaq(index)">
            <span>{{ faq.question }}</span>
            <button :class="['faq-button', faq.isOpen ? 'faq-button-open' : '']">{{ faq.isOpen ? '-' : '+' }}</button>
          </div>
          <div v-if="faq.isOpen" class="faq-answer" v-html="faq.answer"></div>
        </div>
      </div>
    </div>
    <div class="contact">
      <p>Остались вопросы?</p>
      <p>Напишите нам на почту и мы ответим в течение суток</p>
      <a href="mailto:swipe-up@yandex.ru">swipe-up@yandex.ru</a>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 876px;
  padding: 4vw;
  font-family: 'Comfortaa', sans-serif;
  width: 100%;
}

.top-content {
  flex-grow: 1;
}

#txt-container-header {
  color: #000;
  font-size: 40px;
  font-weight: 100;
  margin-bottom: 20px;
}

.faq {
  margin-bottom: 20px;
}

.faq h2 {
  margin-bottom: 10px;
}

.faq-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
}

.faq-answer {
  margin-top: 10px;
  white-space: pre-line;
}

.contact {
  border: 1px solid #0000ff;
  padding: 10px;
  border-radius: 8px;
  font-size: 18px;
  line-height: 1.5;
}

.contact a {
  color: #0000ff;
  text-decoration: none;
}

.faq-button {
  font-size: 24px;
  font-weight: bold;
  height: 40px;
  background-color: #0021CF;
  width: 40px;
  border-radius: 16px;
  color: white;
  border: 3px solid #0021CF;
  cursor: pointer;
}

.faq-button-open {
  height: 40px;
  width: 40px;
  border-radius: 16px;
  background-color: white;
  border: 3px solid #0021CF;
  color: #0021CF;
}

@media (max-width: 880px) { 
  #txt-container-header {
    text-align: center;
  }
}
</style>
