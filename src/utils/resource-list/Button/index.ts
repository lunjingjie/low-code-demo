import { IMaterial } from '/#/common';
import { Button } from 'ant-design-vue';

const icon =
  '<svg t="1683342903782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5449" width="24" height="24"><path d="M960 128H64a32 32 0 0 0-32 32v576a32 32 0 0 0 32 32h265.792a32 32 0 1 0 0-64H96V192h832v512h-68.192a32 32 0 1 0 0 64H960a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32z" p-id="5450"></path><path d="M600.704 624.128a32 32 0 0 0-44.416-1.6l-61.792 55.392-12.576-239.84 237.408 28.288-48.352 45.088a32 32 0 1 0 43.616 46.816l98.784-92.128a32 32 0 0 0-18.016-55.2l-343.616-40.928a32 32 0 0 0-35.712 33.44l18.048 344.576a32 32 0 0 0 53.312 22.112l88.64-79.424 192.544 199.648a31.968 31.968 0 1 0 46.048-44.416l-213.92-221.824z" p-id="5451"></path></svg>';

export const ButtonResource: IMaterial = {
  name: '按钮',
  component: Button,
  panelIcon: icon,
  color: 'rgb(220, 163, 45)',
  resource: {
    modelValue: null,
    style: {
      top: 0,
      left: 0,
    },
    element: {
      children: '按钮',
      props: {
        type: 'primary',
      },
    },
  },
};
