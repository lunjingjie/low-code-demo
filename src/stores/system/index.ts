import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Theme } from '/#/common';

export const useSystemStore = defineStore('system', () => {
  const theme = ref<Theme>('light');

  const setTheme = (value: Theme) => {
    theme.value = value;
  };

  return {
    theme,
    setTheme,
  };
});
