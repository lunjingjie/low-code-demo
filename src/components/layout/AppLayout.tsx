import { defineComponent } from 'vue';
import TopBar from '/@/components/TopBar';
import Divider from '/@/components/antdVue/Divider';

export default defineComponent({
  name: 'Layout',
  components: {
    TopBar,
  },
  setup() {
    return () => (
      <div>
      <TopBar></TopBar>
      <Divider />
    </div>
    );
  },
});
