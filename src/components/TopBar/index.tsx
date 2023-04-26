import { defineComponent } from 'vue';
import Logo from '/@/components/Logo';
import FlexBox from '../FlexBox';
import ThemeSwitch from '/@/components/ThemeSwitch/themePage.vue';
import Language from '/@/components/Language/languagePage.vue';
import Github from '/@/components/Github/githubPage.vue';

export default defineComponent({
  name: 'TopBar',
  setup() {
    return () => <FlexBox flexDirection='row' justifyContent='space-between' style={{margin: '0 10px', height: '48px'}}>
      <Logo></Logo>
      <FlexBox flexDirection='row' justifyContent='space-around' style={{width: '180px'}}>
        <ThemeSwitch></ThemeSwitch>
        <Language></Language>
        <Github></Github>
      </FlexBox>
    </FlexBox>;
  },
});
