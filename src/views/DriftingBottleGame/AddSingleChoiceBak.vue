<template>
  <div>
    <div class="tabs">
      <button @click="activeTab = 0" :class="{ active: activeTab === 0 }">选择已有题目</button>
      <button @click="activeTab = 1" :class="{ active: activeTab === 1 }">新建题目</button>
    </div>

    <div v-if="activeTab === 0">
      <!-- 选择已有题目 -->
      <div class="form-group row">
        <label for="question-name" class="col-form-label col-sm-2">请选择题目:</label>
        <div class="col-sm-10">
          <select
            id="ddlQuestionId"
            v-model.number="questionId"
            class="form-control form-control-sm"
            placeholder="请选择题目"
            style="width: 150px"
          >
            <option
              v-for="(item, index) in arrvQuestionnaire_Sim"
              :key="index"
              :value="item.questionId"
            >
              {{ item.questionName }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 1">
      <!-- 新建题目 -->
      <div class="form-group row">
        <label for="question-name" class="col-form-label col-sm-2">题目名称:</label>
        <div class="col-sm-10">
          <input
            id="question-name"
            v-model="questionName"
            placeholder="请输入题目名称"
            class="form-control"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'AddSingleChoice',
    setup() {
      const activeTab = ref(0);
      const questionId = ref<number | null>(null);
      const questionName = ref('');
      const arrvQuestionnaire_Sim = ref([
        // 示例数据
        { questionId: 1, questionName: '题目1' },
        { questionId: 2, questionName: '题目2' },
      ]);

      return {
        activeTab,
        questionId,
        questionName,
        arrvQuestionnaire_Sim,
      };
    },
  });
</script>

<style scoped>
  .tabs {
    display: flex;
    margin-bottom: 1rem;
  }

  .tabs button {
    flex: 1;
    padding: 0.5rem;
    cursor: pointer;
    background: none;
    border: 1px solid #ccc;
    border-bottom: none;
  }

  .tabs button.active {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  .form-group {
    margin-bottom: 1rem;
  }
</style>
