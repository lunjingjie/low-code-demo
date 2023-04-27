import { MaterialGroup } from '/#/common';
import { ButtonResource } from './Button';
import { SwitchResource } from './Switch';

export const resourceList: MaterialGroup[] = [
  {
    titleKey: '基础组件',
    items: [ButtonResource, SwitchResource],
  },
];
