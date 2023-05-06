import { ref } from 'vue';
import { IMaterial } from '/#/common';
import { Switch } from 'ant-design-vue';

const icon =
  '<svg t="1683343024019" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5604" width="24" height="24"><path d="M704 224H320c-158.784 0-288 129.216-288 288 0 158.816 129.216 288 288 288h384c158.816 0 288-129.184 288-288 0-158.784-129.184-288-288-288z m0 512H320c-123.52 0-224-100.512-224-224 0-123.52 100.48-224 224-224h384c123.488 0 224 100.48 224 224 0 123.488-100.512 224-224 224z" p-id="5605"></path><path d="M320 320c-105.888 0-192 86.112-192 192s86.112 192 192 192 192-86.112 192-192-86.112-192-192-192z m0 320c-70.592 0-128-57.408-128-128s57.408-128 128-128 128 57.408 128 128-57.408 128-128 128z" p-id="5606"></path></svg>';
export const SwitchResource: IMaterial = {
  name: '开关按钮',
  component: Switch,
  panelIcon: icon,
  color: 'blue',
  resource: {
    style: {
      top: 0,
      left: 0,
    },
    modelValue: ref(false),
  },
};
