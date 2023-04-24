import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { deleteSession, setSessionValue } from '/@/utils/hooks/system/useStorage';
import { router } from '/@/plugins/router';
import { deleteTokenInHeader } from '/@/plugins/axios';

export const useLoginStore = defineStore('login', () => {
  const token = ref(null);
  const isLogin = computed(() => (token.value ? true : false));
  const userName = ref('');

  function setToken(value) {
    token.value = value;
  }

  const setUserName = (name) => {
    setSessionValue('userName', name);
    userName.value = name;
  };
  const amendPw = () => {
    router.push({ path: '/systemAmendPw' });
  };

  const loginOut = () => {
    setToken(null);
    deleteSession('token');
    deleteTokenInHeader();
    deleteSession('username');
    deleteSession('userPassword');
    deleteSession('menuList');
    router.push({ path: '/login' });
  };

  return { token, isLogin, userName, setUserName, setToken, loginOut, amendPw };
});
