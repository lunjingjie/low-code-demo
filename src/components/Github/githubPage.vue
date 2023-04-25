<template>
  <div>
    <a-button shape="circle" @click="openGithub">
      <template #icon>
        <github-outlined />
      </template>
    </a-button>
  </div>
</template>
<script setup lang="ts" name="Github">
  const openGithub = () => {
    window.open('https://github.com', '_blank');
  };
</script>
