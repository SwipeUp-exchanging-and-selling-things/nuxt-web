<script>
export default {
  mounted() {
    this.updateActiveButton();
  },
  watch: {
    // Просматриваем изменения пути для обновления стиля кнопки
    '$route.path': function(newVal, oldVal) {
      this.updateActiveButton();
    }
  },
  methods: {
    updateActiveButton() {
      // Определите ID элементов, соответствующих путям
      const routes = {
        '/profile/subscription': 'subscription',
        '/profile/my-ads': 'my-ads',
        '/profile/my-deals': 'my-deals',
        '/profile/my-promocodes': 'promocodes',
        '/profile/settings': 'settings',
        '/profile/support': 'support',
        '/profile/exchange-promocode': 'button-place-mini'
      };

      Object.values(routes).forEach(id => {
        const elem = document.getElementById(id);
        if (elem) {
          elem.style.color = '#000';
        }
      });

      const activeId = routes[this.$route.path];
      if (activeId) {
        const activeElement = document.getElementById(activeId);
        if (activeElement) {
          activeElement.style.color = '#0021CF'; // Цвет для активной кнопки
        }
      }
    }
  }
}
</script>


<template>
  <nav>
    <div class="image-container">
      <img src="../assets/images/ava.svg" alt="Ваша аватарка" class="zoomable-image">
    </div>
    <button id="userName" onclick="window.location.href='#'">
      Иван Иванов
    </button>
    <button id="status-subscripe" onclick="window.location.href='#'">
      Статус подписки: подключена
    </button>
    <button id="balance" onclick="window.location.href='#'">
      Баланс свопов: 5
    </button>
    <button class="button-place-mini" id="button-place-mini" @click="$router.push('/profile/exchange-promocode')">
      Обменять на скидку
    </button>
    <button class="nav" id="subscription" @click="$router.push('/profile/subscription')">
      Подписка
    </button>
    <button class="nav" id="my-ads"  @click="$router.push('/profile/my-ads')">
      Мои объявления
    </button>
    <button class="nav" id="my-deals" @click="$router.push('/profile/my-deals')">
      Мои сделки
    </button>
    <button class="nav" id="promocodes" @click="$router.push('/profile/my-promocodes')">
      Мои промокоды
    </button>
    <button class="nav" id="settings" @click="$router.push('/profile/settings')">
      Настройки
    </button>
    <button class="nav" id="support" @click="$router.push('/profile/support')">
      Поддержка
    </button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  border-right: 2px solid #D9D9D9;
  padding-left: 44px;
  padding-top: 38px;
  height: 876px;
  width: 326px;
}

#userName {
  width: 272px;
  text-align: left;
  color: #000;
  font-family: Comfortaa;
  font-size: 36px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  padding-top: 13.9px;
  padding-bottom: 14px;
}

.nav {
  color: #000;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  padding-bottom: 30px;
}

#status-subscripe,
#balance,
#button-place-mini {
  color: #000;
  font-family: Manrope-Light;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

#status-subscripe {
  text-align: start;
  padding-right: 9px;
  margin-bottom: 9px;
}

#button-place-mini {
  width: 213px;
  margin-top: 8px;
  margin-bottom: 29px;
}

#button-place-mini {
  color: #000;
  font-family: Manrope-Light;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

#button-place-mini {
  width: 213px;
  margin-top: 8px;
  margin-bottom: 29px;
}

.button-place-mini:hover {
  flex-shrink: 0;
  border-radius: 25px;
  transform: scale(1.03);
  background: rgba(255, 180, 239, 0.14);
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
}

.button-place-mini {
  height: 3.75rem;
  width: 16.1875rem;
  flex-shrink: 0;
  border-radius: 25px;
  border: 3px solid #0021CF;
  margin-right: 20px;
}

#delete-an-account:hover,
#log-out:hover,
#save-changes:hover,
.nav:hover {
  transform: scale(1.03);
}
</style>
