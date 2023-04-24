import { defineComponent } from 'vue';
import logo from '/@/assets/common/logo.png';
import './style.scss';

export default defineComponent({
  name: 'Logo',
  setup() {
    return () => <img class="wrap" src={logo} alt="platform logo" />;
  },
});
