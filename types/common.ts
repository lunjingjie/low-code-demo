/* eslint-disable @typescript-eslint/no-explicit-any */
export type Theme = 'light' | 'dark';
export type FlexJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type Language = 'en' | 'cn';

export type IMaterial = {
  id?: string;
  name: string;
  panelIcon?: string;
  component: any;
  color?: string;
  resource: {
    style?: {
      top?: number;
      left?: number;
    };
    [key: string]: any;
  };
};

export type MaterialGroup = {
  titleKey: string;
  items: IMaterial[];
};
