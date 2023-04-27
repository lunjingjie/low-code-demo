import { defineComponent } from 'vue';
import TopBar from '/@/components/TopBar';
import Divider from '/@/components/antdVue/Divider';
import MainPage from '/@/pages/main/mainPage';

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
        {/* <NavTab /> */}
        <MainPage />
      </div>
    );
  },
});
