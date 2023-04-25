<template>
  <a-layout-sider
    v-model:collapsed="storeCollapsed.collapsed"
    :trigger="null"
    collapsible
    style="padding-top: 10px; overflow-y: auto"
  >
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <template v-for="item in menuList" :key="item.name">
        <a-menu-item
          v-if="!item.children || item.children.length === 0"
          :key="item.name"
          @click="redirectPage(item.url)"
        >
          <component :is="$antdVueIcons[item.icon]" />
          <span>{{ item.name }}</span>
        </a-menu-item>
        <a-sub-menu v-else :key="`sub${item.name}`">
          <template #icon>
            <component :is="$antdVueIcons[item.icon]" />
          </template>
          <template #title>{{ item.name }}</template>
          <a-menu-item
            v-for="sub in item.children"
            :key="sub.name"
            @click="redirectPage(sub.url)"
            >{{ sub.name }}</a-menu-item
          >
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
  import { useCollapsedStore } from '@/stores/collapsed/index.js';
  import { ref } from 'vue';
  import { router } from '../../plugins/router';
  // import { menu } from './tempMenu';
  import { getSessionValue } from '@/utils/hooks/system/useStorage';
  // import { menuUserApi } from '@/api/system-manage/menu.js';

  const storeCollapsed = useCollapsedStore();
  const selectedKeys = ref(['数据汇总']);
  const menuList = ref(JSON.parse(getSessionValue('menuList')));

  // onMounted(async () => {
  //   const { data } = await menuUserApi();
  //   menuList.value = data.data;
  // });

  const redirectPage = (path) => {
    router.push({ path });
  };
</script>

<style lang="scss" scoped>
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #e5e3e3;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #bcb9b9;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #869494;
  }
</style>
