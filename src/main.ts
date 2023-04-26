import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Antd from 'ant-design-vue';
import '/@/assets/modified.css';
import { initRouter } from '/@/plugins/router';
import * as antdVueIcons from '@ant-design/icons-vue';
import '/@/assets/ui.css';
import 'animate.css';
import '/@/mock';

function bootstrap() {
  const app = createApp(App);
  initRouter(app);
  app.use(createPinia());
  registerIconComponent(app);
  app.use(Antd);
  app.mount('#app');
}

/**
 * 注册icon组件
 */
function registerIconComponent(app) {
  Object.keys(antdVueIcons).forEach((key) => {
    app.component(key, antdVueIcons[key]);
  });
  app.config.globalProperties.$antdVueIcons = antdVueIcons;
}

bootstrap();
