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
  name: string;
  component: any;
  resource: {
    icon?: any;
    color?: string;
  };
}

export type MaterialGroup = {
  titleKey: string;
  items: IMaterial[];
};
