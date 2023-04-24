<template>
  <aSwitch type="primary" v-model:checked="theme" checked-children="白天" un-checked-children="黑夜">
  </aSwitch>
</template>
<script setup lang="ts" name="ThemeSwitch">
import { Theme } from '/#/common';
import { ref } from 'vue';

const theme = ref<Theme>('light');
</script>