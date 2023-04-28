<template>
  <div @drop="handleDrop" @dragenter.prevent @dragover.prevent> editor </div>
</template>
<script lang="ts" setup name="Editor">
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const index = e.dataTransfer.getData('index');
    console.log(index);
  };
</script>
