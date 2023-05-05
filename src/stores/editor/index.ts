import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useEditorStore = defineStore('editor', () => {
  const componentList = ref([]);

  const addComponent = (component, index: string) => {
    if (index !== undefined) {
      componentList.value.splice(Number(index), 0, component);
    } else {
      componentList.value.push(component);
    }
  };

  return {
    componentList,
    addComponent,
  };
});
