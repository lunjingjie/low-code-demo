<template>
  <a-layout-header
    style="
      background: #fff;
      padding: 0 20px;
      height: 55px;
      z-index: 1000;
      border-bottom: 1px solid rgb(219, 220, 221);
    "
  >
    <div class="header-total">
      <div style="display: flex; align-items: center">
        <menu-unfold-outlined
          v-if="store.collapsed"
          class="trigger"
          @click="store.setCollapsed()"
        />
        <menu-fold-outlined v-else class="trigger" @click="store.setCollapsed()" />
        <div style="font-size: 18px; padding-left: 20px; font-weight: 700"> title </div>
      </div>
      <div style="margin-right: 10px; box-sizing: border-box">
        <a-dropdown :trigger="['click']" placement="bottom">
          <div>
            <a-avatar style="background-color: #87d068" :size="30" class="user-admin">
              <template #icon>
                <UserOutlined />
              </template>
            </a-avatar>
            <span class="user-admin" style="padding-left: 10px; font-weight: 700">{{
              userName
            }}</span>
          </div>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="amendPw"> 更改密码 </a-menu-item>
              <a-menu-item @click="loginOut"> 退出登录 </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
</template>
<script setup>
  import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons-vue';
  import { useCollapsedStore } from '@/stores/collapsed/index.js';
  import { useLoginStore } from '../../stores/login';
  import { getSessionValue } from '@/utils/hooks/system/useStorage';
  import { ref } from 'vue';

  const store = useCollapsedStore();
  const { loginOut, amendPw } = useLoginStore();
  const userName = ref(getSessionValue('userName'));
</script>

<style lang="scss" scoped>
  .header-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    bottom: 5px;
  }
  .user-admin:hover {
    cursor: pointer;
  }
</style>
