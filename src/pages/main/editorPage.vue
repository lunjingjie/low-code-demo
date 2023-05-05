<template>
  <div
    ref="editorRef"
    style="background-color: bisque"
    :style="{ height: navHeight }"
    @drop="handleDrop"
    @dragenter.prevent
    @dragover.prevent
  >
    <component
      :is="(item as any).component.name"
      v-for="item in editorStore.componentList"
      :key="(item as any).id"
      style="position: absolute"
    >
    </component>
  </div>
</template>
<script lang="ts" setup name="Editor">
  import { computed, ref } from 'vue';
  import { resourceList } from '/@/utils/resource-list';
  import { deepClone, generateID } from '/@/utils';
  import { useEditorStore } from '/@/stores/editor';
  import { useWindowSize } from '@vueuse/core';

  const { height } = useWindowSize();
  const navHeight = computed(() => {
    return height.value - 50 + 'px';
  });

  const editorRef = ref();
  const { addComponent } = useEditorStore();
  const editorStore = useEditorStore();

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const index = e.dataTransfer?.getData('index');
    const rectInfo = editorRef.value?.getBoundingClientRect();
    if (index) {
      const flatResourceList = resourceList.map((item) => item.items).flat();
      const component = deepClone(flatResourceList[index]);
      component.resource.style.top = e.clientY - rectInfo.y;
      component.resource.style.left = e.clientX - rectInfo.x;
      component.id = generateID();
      console.log('component', component);
      addComponent(component, index);
    }
  };
</script>
