<template>
  <a-tabs
    v-model:activeKey="activeKey"
    tab-position="left"
    :style="{ height: navHeight, ...wrapStyle }"
  >
    <a-tab-pane :key="LeftNavType.components">
      <template #tab>
        <a-tooltip placement="rightTop">
          <template #title>
            <span>组件资源</span>
          </template>
          <appstore-outlined style="font-size: 20px" />
        </a-tooltip>
      </template>
      <Resource />
    </a-tab-pane>
    <a-tab-pane :key="LeftNavType.pages">
      <template #tab>
        <a-tooltip placement="rightTop">
          <template #title>
            <span>页面</span>
          </template>
          <tag-outlined style="font-size: 20px" />
        </a-tooltip>
      </template>
    </a-tab-pane>
    <a-tab-pane :key="LeftNavType.history">
      <template #tab>
        <a-tooltip placement="rightTop">
          <template #title>
            <span>历史记录</span>
          </template>
          <history-outlined style="font-size: 20px" />
        </a-tooltip>
      </template>
    </a-tab-pane>
    <a-tab-pane :key="LeftNavType.outline">
      <template #tab>
        <a-tooltip placement="rightTop">
          <template #title>
            <span>outline</span>
          </template>
          <apartment-outlined style="font-size: 20px" />
        </a-tooltip>
      </template>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts" setup name="NavTab">
  import { computed, ref } from 'vue';
  import { LeftNavType } from '/@/utils/common';
  import { useWindowSize } from '@vueuse/core';
  import Resource from '/@/components/Resource/resourcePage.vue';
  import { useSystemStore } from '/@/stores/system';

  const store = useSystemStore();
  const { height } = useWindowSize();

  const wrapStyle = computed(() => {
    return {
      color: store.theme === 'dark' ? '#ebebeb99' : '#000',
    };
  });

  const navHeight = computed(() => {
    return height.value - 60 + 'px';
  });

  const activeKey = ref(LeftNavType.components);
</script>
