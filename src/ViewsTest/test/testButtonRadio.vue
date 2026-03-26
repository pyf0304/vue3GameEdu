<!-- ParentComponent.vue -->
<template>
  <div>
    <RadioButton :options="options" @optionSelected="handleOptionSelected" />
    <p>选中的选项：{{ selectedOption }}</p>
  </div>
</template>

<script setup lang="ts">
  import { clsCboObject } from '@/ts/PubFun/clsCboObject';
  import RadioButton from '@/ts/components/ButtonRadio.vue';
  import { ref } from 'vue';

  const options: Array<clsCboObject> = [
    { text: 'Option 1', value: '01' },
    { text: 'Option 2', value: '02' },
    { text: 'Option 3', value: '03' },
    { text: 'Option 4', value: '04' },
    { text: 'Option 5', value: '05' },
  ];
  const selectedOption = ref<string | null>(null);

  const handleOptionSelected = (option: string) => {
    selectedOption.value = option;
  };
</script>
