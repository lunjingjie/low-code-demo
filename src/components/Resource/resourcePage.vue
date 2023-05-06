<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <div style="font-weight: 600; font-size: 16px">组件资源</div>
    <Divider />
    <div v-for="(item, index) in resourceList" :key="index" @dragstart="handleDragstart">
      <div>{{ item.titleKey }}</div>
      <div
        v-for="(resource, rIndex) in item.items"
        :key="resource.name"
        :data-index="rIndex"
        style="
          display: inline-block;
          margin-top: 10px;
          width: 33%;
          text-align: center;
          user-select: none;
        "
      >
        <!-- <div :style="{ background: store.theme === 'dark' ? '#313031' : '#F1F3F4' }">
        </div> -->
        <div
          draggable="true"
          :data-index="rIndex"
          :style="{ fill: resource.color }"
          v-html="resource.panelIcon"
        ></div>
        <div>{{ resource.name }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="Resource">
  import { resourceList } from '/@/utils/resource-list';
  import Divider from '/@/components/antdVue/Divider';
  // import { useSystemStore } from '/@/stores/system';

  // const store = useSystemStore();
  const handleDragstart = (e) => {
    e.dataTransfer.setData('index', e.target.dataset.index);
  };
</script>
<style>
  svg .icon {
    margin: 0 auto;
  }
</style>
