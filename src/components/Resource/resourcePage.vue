<template>
  <div>
    <div v-for="(item, index) in resourceList" :key="index">
      <div>{{ item.titleKey }}</div>
      <div v-for="resource in item.items" :key="resource.name" style="display: inline-block">
        <span>icon here</span>
        <span>{{ resource.name }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="Resource">
  import { resourceList } from '/@/utils/resource-list';
</script>
