<script setup>

</script>

<template>
  <footer>
    <div class="copyright">
      ООО “Свайп Ап”
    </div>
    <div class="navigation">
      <button class="buttons-navi" onclick="window.location.href='#'">
        Информация о проекте
      </button>
      <button class="buttons-navi" onclick="window.location.href='#'">
        Правила сервиса
      </button>
      <button class="buttons-navi" onclick="window.location.href='#'">
        Обратная связь
      </button>
      <button class="buttons-navi" onclick="window.location.href='#'">
        Конфиденциальность
      </button>
    </div>
  </footer>
</template>

<style scoped>
footer {
  height: 7.4375rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 4%;
  padding-right: 3.9%;
  padding-bottom: 0.5rem;

  border-top: 1px solid #c1c1c2;
}

footer .copyright {
  color: #000;
  font-family: Geologica, serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

footer .navigation {
  display: flex;
  flex-direction: row;
  align-items: center;

}

footer .buttons-navi {
  height: fit-content;
  width: fit-content;

  color: #000;
  font-family: Geologica, serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;

  margin-left: 2.8rem;
}

.buttons-navi:hover {
  transform: scale(1.03);
}

@media (max-width: 768px) {
  footer {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: auto;
    padding-left: 4%;
    padding-right: 4%;
    margin-left: 4vw;
  }

  footer .navigation {
    order: 1;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
  }

  footer .buttons-navi {
    margin: 0.5rem 0;
  }

  footer .copyright {
    order: 2;
    margin-top: 1rem;
    align-self: flex-start;
    font-size: 13px;
  }
}
</style>
