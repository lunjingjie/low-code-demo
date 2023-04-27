<template>
  <a-dropdown>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1"> 简体中文 </a-menu-item>
        <a-menu-item key="2"> English </a-menu-item>
      </a-menu>
    </template>
    <a-button shape="circle" style="width: 33px">
      <template #icon>
        <translation-outlined />
      </template>
    </a-button>
  </a-dropdown>
</template>
<script setup lang="ts" name="Language">
  const handleMenuClick = (e) => {
    console.log(e);
  };
</script>
