<template>
  <div style="width: 100%; height: 100%">
    <img :src="bgImage" class="back-img" />
    <div class="login-total">
      <template v-if="!showRegister">
        <div class="title">
          <span style="margin-bottom: 50px">企业突发环境风险智能评估系统</span>
        </div>
        <div class="login-content">
          <div style="" class="login-back">
            <a-form
              style="width: 380px"
              :model="formState"
              name="normal_login"
              class="login-form"
              :rules="rules"
            >
              <div style="display: flex">
                <div style="display: inline-block; margin-top: 4px">
                  <img
                    src="/@/assets/images/login/user.png"
                    height="23"
                    width="23"
                    style="vertical-align: top"
                  />
                  <span class="user-style">账号</span>
                </div>
                <a-form-item name="name">
                  <a-input
                    @keyup.enter="login"
                    style="display: inline-block; width: 292px"
                    v-model:value="formState.name"
                  ></a-input>
                </a-form-item>
              </div>
              <div style="display: flex">
                <div style="display: inline-block; margin-top: 4px">
                  <img
                    src="/@/assets/images/login/password.png"
                    height="23"
                    width="23"
                    style="vertical-align: top"
                  />
                  <span class="user-style">密码</span>
                </div>
                <a-form-item name="password">
                  <a-input-password
                    @keyup.enter="login"
                    style="display: inlin-block; width: 292px"
                    v-model:value="formState.password"
                  ></a-input-password>
                </a-form-item>
              </div>
            </a-form>
            <div
              style="display: flex; justify-content: space-between; width: 380px; font-size: 14px"
            >
              <div style="display: flex; align-items: center">
                <a-checkbox class="login-checkbox" v-model:checked="rememberPsw">
                  <span style="color: #fff"> 记住密码 </span>
                </a-checkbox>
              </div>
              <div @click="register">用户注册</div>
            </div>
          </div>
        </div>
        <div style="flex: 1">
          <img
            src="/@/assets/images/login/sign.png"
            height="70"
            width="250"
            alt=""
            @click="login"
            style="padding-top: 5px"
          />
        </div>
      </template>
      <template v-else>
        <register-page @return-login="returnLogin"></register-page>
      </template>
    </div>
  </div>
</template>
<script setup name="login">
  import { loginApi } from '/@/api/login';
  import { reactive, ref, onMounted } from 'vue';
  import { message } from 'ant-design-vue';
  import { router } from '/@/plugins/router';
  import bgImage from '/@/assets/images/backgroundImage.png';
  import { setSessionValue } from '/@/utils/hooks/system/useStorage';
  import { setTokenInHeader } from '/@/plugins/axios';
  import { useLoginStore } from '/@/stores/login/index.js';
  import { passwordVerify } from '/@/utils';
  import { useLayoutStore } from '/@/stores/layout/index.js';
  import registerPage from '/@/components/register/registerPage.vue';
  // import { menuUserApi } from '@/api/system-manage/menu.js';

  const storeLogini = useLoginStore();
  const showRegister = ref(false);

  const formState = reactive({
    name: '',
    password: '',
  });
  const storeLayout = useLayoutStore();
  const rememberPsw = ref(false);
  const rules = {
    name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  };
  const login = async () => {
    try {
      if (formState.name === '' && formState.password === '') {
        message.warning('请输入账号和密码！');
        return;
      } else if (formState.name === '') {
        message.warning('请输入账号！');
        return;
      } else if (formState.password === '') {
        message.warning('请输入密码！');
        return;
      }
      const { data } = await loginApi(formState);
      if (data.data && data.code === 200) {
        setSessionValue('token', data.data);
        setSessionValue('userName', formState.name);
        setSessionValue('userPassword', formState.password);
        setTokenInHeader(data.data);
        storeLogini.setToken(data.data);
        storeLogini.setUserName(formState.name);
        // const { data: menu } = await menuUserApi();
        const menu = {
          data: [
            {
              url: '/template',
              name: 'template',
              children: [],
            },
            {
              url: '/systemAmendPw',
              name: 'systemAmendPw',
              children: [],
            },
          ],
        };
        setSessionValue('menuList', JSON.stringify(menu.data));
        let path = '';
        if (menu.data.length > 0) {
          if (menu.data[0].children.length > 0) {
            path = menu.data[0].children[0].url;
          } else {
            path = menu.data[0].url;
          }
        }
        if (path !== '') {
          router.push({ path });
        } else {
          message.error('菜单获取失败，请检查');
        }

        if (rememberPsw.value) {
          window.localStorage.setItem('rememberPsw', 'true');
          window.localStorage.setItem('reName', formState.name);
          window.localStorage.setItem('rePassword', formState.password);
        } else {
          window.localStorage.setItem('rememberPsw', 'false');
          window.localStorage.removeItem('reName');
          window.localStorage.removeItem('rePassword');
        }
        if (!passwordVerify(formState.password)) {
          setTimeout(() => {
            storeLayout.showModel = true;
          }, 1000);
        }
      }
    } catch (e) {
      message.error(e.message);
    }
  };
  onMounted(async () => {
    rememberPsw.value = window.localStorage.getItem('rememberPsw') == 'true' ? true : false;
    if (rememberPsw.value) {
      formState.name = window.localStorage.getItem('reName');
      formState.password = window.localStorage.getItem('rePassword');
    }
  });
  const register = async () => {
    showRegister.value = true;
  };
  const returnLogin = (e) => {
    showRegister.value = e;
  };
</script>
<style scoped lang="scss">
  .back-img {
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  .login-content {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    height: 300px;
  }
  .login-back {
    background-image: url('@/assets/images/login/login-back.png');
    background-size: 100% 100%;
    padding: 15px 20px;
    color: #fff;
    width: 550px;
    height: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .user-style {
    width: 50px;
    text-align: center;
    font-size: 15px;
    letter-spacing: 2px;
    margin: 0 15px 0 5px;
    color: #fff;
  }
  .login-total {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 3000;
  }

  .title {
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 5px;
    flex: 1;
    display: flex;
    align-items: flex-end;
    text-shadow: 0px 0px 4px #bacbdd;
  }
  :deep(.ant-checkbox-inner) {
    background-color: #091140 !important;
    border: 1px solid #35b5e6;
    width: 20px;
    height: 20px;
    box-shadow: 0px 0px 2px #35b5e6;
  }
</style>
