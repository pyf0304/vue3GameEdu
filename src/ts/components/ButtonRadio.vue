<!-- RadioButton.vue -->
<template>
  <div>
    <button
      v-for="(option, index) in options"
      :key="index"
      @click="selectOption(option.value)"
      :class="{ selected: option.value === selectedOption }"
    >
      {{ option.text }}
    </button>
  </div>
</template>

<script lang="ts">
  import { clsCboObject } from '@/ts/PubFun/clsCboObject';
  import { ref, defineComponent, onMounted, watch, PropType } from 'vue';

  export default defineComponent({
    name: 'ButtonRadio',
    components: {
      // 组件注册
    },
    props: {
      options: {
        type: Array as PropType<clsCboObject[]>,
        required: true,
      },
    },
    emits: ['optionSelected'],
    setup(props, { emit }) {
      const selectedOption = ref('');
      const selectOption = (option: string) => {
        selectedOption.value = option;
        emit('optionSelected', option);
      };

      onMounted(() => {
        if (props.options.length > 0) {
          selectedOption.value = props.options[0].value;
          console.log('selectedOption.value in onMounted', selectedOption.value);
        }
      });
      watch(
        () => props.options,
        (newOptions: any, oldOptions: any) => {
          console.log('Options changed:', newOptions, oldOptions);
          if (newOptions.length > 0) {
            selectedOption.value = newOptions[0].value;
          }
        },
      );
      function btn_Click(strCommandName: string, strKeyId: any) {
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
            break;
          default:
            break;
        }
        // PaperQAA.btn_Click(strCommandName, strKeyId);
      }

      /**
       * 页面导入-在导入页面后运行的函数
       **/
      function window_onload() {
        // $('#h1idOrderbyId').val('1');
      }

      return {
        btn_Click,

        window_onload,
        selectOption,
        selectedOption,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>

<style scoped>
  button {
    margin-right: 10px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
  }

  .selected {
    background-color: lightblue;
  }
</style>
