import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Divider',
  setup() {
    return () => <a-divider style={{margin: '5px 0px'}}/>;
  },
});
