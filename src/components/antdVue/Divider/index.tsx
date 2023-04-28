import { PropType, defineComponent } from 'vue';
import { useSystemStore } from '/@/stores/system';

const DividerProps = () => ({
  type: String as PropType<'horizontal' | 'vertical'>,
});

export default defineComponent({
  name: 'DividerComponent',
  props: DividerProps(),
  setup(props) {
    const store = useSystemStore();
    return () => (
      <a-divider
        type={!props.type ? 'horizontal' : props.type}
        style={{ margin: '5px 0px', backgroundColor: store.theme === 'dark' ? '#313131' : '' }}
      />
    );
  },
});
