import { defineComponent } from 'vue';
import { FlexDirection, FlexJustifyContent } from '/#/common';
import type { PropType } from 'vue';

const buttonProps = () => ({
  justifyContent: String as PropType<FlexJustifyContent>,
  flexDirection: String as PropType<FlexDirection>,
});

export default defineComponent({
  name: 'FlexBox',
  props: buttonProps(),
  setup(props, { slots }) {

    const centerStyle = props.flexDirection === 'row' ? {alignItems: 'center'} : {textAlign: 'center'};

    return () => (
      <div style={{ display: 'flex', justifyContent: props.justifyContent, flexDirection: props.flexDirection, ...centerStyle as any }}>
        {slots.default?.()}
      </div>
    );
  },
});
