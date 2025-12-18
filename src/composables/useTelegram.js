
import { onMounted, ref } from 'vue';

export function useTelegram() {
  const tg = window.Telegram?.WebApp;
  const user = ref(null);
  const initData = ref('');

  onMounted(() => {
    if (tg) {
      tg.ready();
      tg.expand();

      user.value = tg.initDataUnsafe?.user;
      initData.value = tg.initData;

      // Theme ranglarini o'rnatish
      document.body.style.backgroundColor = tg.backgroundColor;
    }
  });

  return {
    tg,
    user,
    initData,
    showAlert: (msg) => tg?.showAlert(msg),
    close: () => tg?.close()
  };
}
