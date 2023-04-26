import { lightTheme, darkTheme } from '../../common';
import { ConfigProvider } from 'ant-design-vue';
import { Theme } from '/#/common';
import dark from 'ant-design-vue/dist/antd.dark.css';

const changeTheme = (theme: string) => {
  const head = document.head;
  document.getElementById('theme')?.remove();
  const styleDom = document.createElement('style');
  styleDom.id = 'theme';
  styleDom.innerHTML = theme;
  head.appendChild(styleDom);
};

export const useThemeColor = (theme: Theme) => {
  const themeColor = theme === 'light' ? lightTheme : darkTheme;
  ConfigProvider.config({
    prefixCls: 'custom',
    theme: themeColor,
  });
  if (theme === 'light') {
    document.getElementById('theme')?.remove();
  } else {
    changeTheme(dark);
  }
};
