// plugins/vue-cyrillic-mask.js
import Vue from 'vue';

Vue.directive('cyrillic-mask', {
  bind(el) {
    let composing = false;

    el.addEventListener('compositionstart', () => {
      composing = true;
    });

    el.addEventListener('compositionend', () => {
      composing = false;
      triggerInputEvent();
    });

    el.addEventListener('input', triggerInputEvent);

    function triggerInputEvent() {
      if (!composing) {
        const value = el.value.replace(/[^А-Яа-яЁё]/g, '');
        if (el.value !== value) {
          el.value = value;
          el.dispatchEvent(new Event('input'));
        }
      }
    }
  }
});
