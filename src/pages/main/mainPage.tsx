import { computed, defineComponent } from 'vue';
import FlexBox from '/@/components/FlexBox';
import NavTab from '/@/components/NavTab/indexPage.vue';
import Editor from './editorPage.vue';
import Attrs from './attrsPage.vue';
import { useWindowSize } from '@vueuse/core';

export default defineComponent({
  name: 'MainPage',
  setup() {
    const { height } = useWindowSize();

    const navHeight = computed(() => {
      return height.value - 60 + 'px';
    });

    return () => (
      <FlexBox justifyContent="space-around" flexDirection="row">
        <NavTab style={{ width: '600px' }} />
        <a-divider type="vertical" style={{height: navHeight.value}}></a-divider>
        <Editor style={{ width: '100%' }} />
        <a-divider type="vertical" style={{height: navHeight.value}}></a-divider>
        <Attrs style={{ width: '450px' }} />
      </FlexBox>
    );
  },
});
