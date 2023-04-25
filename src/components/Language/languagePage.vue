<template>
  <div>
    <a-radio-group v-model:value="language">
      <a-radio-button value="cn">中文</a-radio-button>
      <a-radio-button value="en">英文</a-radio-button>
    </a-radio-group>
  </div>
</template>
<script setup lang="ts" name="Language">
  import { ref } from 'vue';
  import { Language } from '/#/common';

  const language = ref<Language>('cn');
</script>
