<template>
  <a-config-provider :locale="zhCN">
    <div style="width: 100%; height: 100%">
      <Layout />
    </div>
  </a-config-provider>
</template>
<script setup>
  import Layout from '/@/components/layout/AppLayout';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import { useThemeColor } from '/@/utils/hooks';

  useThemeColor('light');
</script>
