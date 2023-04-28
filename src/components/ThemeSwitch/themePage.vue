<template>
  <aSwitch
    v-model:checked="theme"
    type="primary"
    checked-children="黑夜"
    un-checked-children="白天"
    @change="changeValue"
  >
  </aSwitch>
</template>
<script setup lang="ts" name="ThemeSwitch">
  import { Theme } from '/#/common';
  import { ref } from 'vue';
  import { useThemeColor } from '/@/utils/hooks';
  import { useSystemStore } from '/@/stores/system';

  const theme = ref<Theme>('light');
  const { setTheme } = useSystemStore();
  const changeValue = (checked: boolean) => {
    if (checked) {
      useThemeColor('dark');
      setTheme('dark');
    } else {
      useThemeColor('light');
      setTheme('light');
    }
  };
</script>
