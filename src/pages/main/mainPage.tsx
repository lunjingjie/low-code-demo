import { computed, defineComponent } from 'vue';
import FlexBox from '/@/components/FlexBox';
import NavTab from '/@/components/NavTab/indexPage.vue';
import Editor from './editorPage.vue';
import Attrs from './attrsPage.vue';
import { useWindowSize } from '@vueuse/core';
import Divider from '/@/components/antdVue/Divider';

export default defineComponent({
  name: 'MainPage',
  setup() {
    const { height } = useWindowSize();

    const navHeight = computed(() => {
      return height.value - 60 + 'px';
    });

    return () => (
      <FlexBox justifyContent="space-around" flexDirection="row">
        <NavTab style={{ width: '600px', marginRight: '15px' }} />
        <Divider type="vertical" style={{ height: navHeight.value }}></Divider>
        <Editor style={{ width: '100%' }} />
        <Divider type="vertical" style={{ height: navHeight.value }}></Divider>
        <Attrs style={{ width: '450px' }} />
      </FlexBox>
    );
  },
});
