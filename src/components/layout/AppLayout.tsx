import { defineComponent } from 'vue';
import TopBar from '/@/components/TopBar';
import Divider from '/@/components/antdVue/Divider';
import NavTab from '/@/components/NavTab/indexPage.vue';

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
      <NavTab />
    </div>
    );
  },
});
