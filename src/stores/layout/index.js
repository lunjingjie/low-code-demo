import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', () => {
  const showLayout = ref(false);
  const showMode = ref(false);
  function setShowLayout(type) {
    showLayout.value = type;
  }

  return { showLayout, setShowLayout, showMode };
});
