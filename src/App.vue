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
  import { ConfigProvider } from 'ant-design-vue';

  ConfigProvider.config({
    theme: {
      primaryColor: 'red',
      errorColor: '#ff4d4f',
      warningColor: '#faad14',
      successColor: '#52c41a',
      infoColor: '#1890ff',
    },
  });
</script>
