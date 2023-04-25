import { lightTheme, darkTheme } from '../../common';
import { ConfigProvider } from 'ant-design-vue';
import { Theme } from '/#/common';

export const useThemeColor = (theme: Theme) => {
  const themeColor = theme === 'light' ? lightTheme : darkTheme;
  ConfigProvider.config({
    theme: themeColor,
  });
};
