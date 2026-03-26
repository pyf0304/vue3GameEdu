<template>
  <div class="selection-container">
    <h2 v-if="showTitle">选择知识点</h2>
    <div class="tabs">
      <ul>
        <li
          v-for="(module, index) in knowledgeModules"
          :key="index"
          @click="selectTab(index)"
          :class="{ active: selectedTab === index }"
        >
          {{ module.name }}
        </li>
      </ul>
    </div>
    <div class="knowledge-content">
      <ul>
        <li
          v-for="(knowledge, index) in knowledgeModules[selectedTab].knowledges"
          :key="index"
          @click="selectKnowledge(knowledge.id)"
          :class="{ selected: selectedKnowledgeId === knowledge.id }"
        >
          {{ knowledge.name }}
        </li>
      </ul>
    </div>
    <div class="difficulty-select">
      <label for="difficulty">选择难度:</label>
      <!-- <select id="difficulty" v-model="selectedDifficulty">
        <option value="easy">简单</option>
        <option value="medium">中等</option>
        <option value="hard">困难</option>
      </select> -->
      <select
        id="ddlDifficultyLevelId_q"
        v-model="selectedDifficulty"
        class="form-control form-control-sm"
        style="width: 120px"
      >
        <option
          v-for="(item, index) in arrge_DifficultyLevel"
          :key="index"
          :value="item.difficultyLevelId"
        >
          {{ item.difficultyLevelName }}
        </option></select
      >
    </div>
    <div class="modal-footer">
      <button @click="startPreTest">进入前测</button>
    </div>

    <!-- 知识点前测弹出窗 -->
    <div v-if="showPreTestModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>知识点前测</h2>
          <span class="close" @click="closePreTestModal">&times;</span>
        </div>
        <div class="modal-body">
          <KnowledgePreTest
            @close="closePreTestModal"
            :moduleName="moduleName"
            :courseKnowledgeId="courseKnowledgeId"
            :difficultyLevelId="selectedDifficulty"
            :showTitle="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, PropType, onMounted } from 'vue';
  import KnowledgePreTest from './KnowledgePreTest.vue';
  import { cc_KnowledgeModules_GetObjLstCache } from 'share-stu-study-base-lib';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import {
    cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache,
    cc_CourseKnowledges_GetObjLstCache,
  } from 'share-stu-study-base-lib';
  import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
  import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
  import { ge_DifficultyLevel_GetArrge_DifficultyLevel } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
  import { cc_Course_GetNameByCourseIdCache } from 'share-stu-study-base-lib';
  import { cc_CourseKnowledgesEx_CopyToEx } from 'share-stu-study-base-lib';
  import {
    cc_CourseKnowledgesEx_FuncMapCourseName,
    cc_CourseKnowledgesEx_FuncMapNameWithQuestionNum,
  } from 'share-stu-study-base-lib';
  import { clscc_CourseKnowledgesENEx } from 'share-stu-study-base-lib';
  import { UserExamBatchRelaEx_CheckPreTest } from '@/ts/L3ForWApiEx/UserManage/clsUserExamBatchRelaExWApi';
  import { useUserStore } from '@/store/modulesShare/user';
  import { enumBatchType } from '@/ts/L0Entity/SysPara/clsBatchTypeEN';
  interface Knowledge {
    id: string;
    name: string;
    knowledgeModuleId: string;
  }

  interface KnowledgeModule {
    id: string;
    name: string;
    knowledges: Knowledge[];
  }
  function mapToKnowledge(courseKnowledge: clscc_CourseKnowledgesEN_T): Knowledge {
    return {
      id: courseKnowledge.courseKnowledgeId,
      name: courseKnowledge.knowledgeName,
      knowledgeModuleId: courseKnowledge.knowledgeModuleId,
    };
  }
  function mapToKnowledgeEx(courseKnowledge: clscc_CourseKnowledgesENEx): Knowledge {
    return {
      id: courseKnowledge.courseKnowledgeId,
      name: courseKnowledge.knowledgeNameEx,
      knowledgeModuleId: courseKnowledge.knowledgeModuleId,
    };
  }
  export default defineComponent({
    name: 'KnowledgeSelection',
    components: {
      KnowledgePreTest,
    },
    props: {
      showTitle: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
    },
    setup(props) {
      const userStore = useUserStore();
      const userId = userStore.userId;
      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const courseId = clsPubLocalStorage.courseId;
      const arrge_DifficultyLevel = ref<clsge_DifficultyLevelEN[] | null>([]);
      const { showTitle } = props;
      const selectedTab = ref(0);
      const selectedKnowledgeId = ref('');
      const selectedDifficulty = ref('easy');
      const showPreTestModal = ref(false);
      const moduleName = ref('');
      const courseKnowledgeId = ref('');
      // const knowledgeModules = ref([
      //   { name: '模块1', knowledges: ['知识点1-1', '知识点1-2', '知识点1-3'] },
      //   { name: '模块2', knowledges: ['知识点2-1', '知识点2-2', '知识点2-3'] },
      //   { name: '模块3', knowledges: ['知识点3-1', '知识点3-2', '知识点3-3'] },
      // ]);
      const knowledgeModules = ref<KnowledgeModule[]>([
        {
          id: '1',
          name: '模块1',
          knowledges: [
            { id: '1', name: '知识点1-1', knowledgeModuleId: '' },
            { id: '1', name: '知识点1-2', knowledgeModuleId: '' },
            { id: '1', name: '知识点1-3', knowledgeModuleId: '' },
          ],
        },
        {
          id: '2',
          name: '模块2',
          knowledges: [
            { id: '1', name: '知识点2-1', knowledgeModuleId: '' },
            { id: '1', name: '知识点2-2', knowledgeModuleId: '' },
            { id: '1', name: '知识点2-3', knowledgeModuleId: '' },
          ],
        },
        {
          id: '3',
          name: '模块3',
          knowledges: [
            { id: '1', name: '知识点3-1', knowledgeModuleId: '' },
            { id: '1', name: '知识点3-2', knowledgeModuleId: '' },
            { id: '1', name: '知识点3-3', knowledgeModuleId: '' },
          ],
        },
      ]);
      const selectTab = (index: number) => {
        selectedTab.value = index;
        selectedKnowledgeId.value = ''; // 重置选中的知识点
      };

      const selectKnowledge = (index: string) => {
        selectedKnowledgeId.value = index;
      };

      async function startPreTest() {
        if (selectedKnowledgeId.value === '') {
          alert('请选择一个知识点!');
          return;
        }
        moduleName.value = knowledgeModules.value[selectedTab.value].name;
        courseKnowledgeId.value = selectedKnowledgeId.value;
        const strBatchTypeId = enumBatchType.PreTest_01;
        const bolSuccess = await UserExamBatchRelaEx_CheckPreTest(
          userId,
          idCurrEduCls,
          strBatchTypeId,
          courseKnowledgeId.value,
          selectedDifficulty.value,
        );
        if (bolSuccess === false) {
          const strKnowledgeName = await cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache(
            courseKnowledgeId.value,
            courseId,
          );
          if (strKnowledgeName === '') {
            const strMsg = `知识点:${courseKnowledgeId.value}不存在，请检查！`;
            console.error(strMsg);
            alert(strMsg);
            return;
          }
          if (arrge_DifficultyLevel.value === null) {
            const strMsg = '没有难度，请先添加难度！';
            console.error(strMsg);
            alert(strMsg);
            return;
          }
          const strDifficultyName = arrge_DifficultyLevel.value.find(
            (item) => item.difficultyLevelId === selectedDifficulty.value,
          )?.difficultyLevelName;
          const strMsg = `'知识点：[${strKnowledgeName}], 难度:[${strDifficultyName}]的前测已经完成，不能再次进行前测！`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        showPreTestModal.value = true;
      }

      function closePreTestModal() {
        showPreTestModal.value = false;
        console.log('closePreTestModal:', showPreTestModal.value);
      }
      async function LoadData() {
        // 获取知识点
        const arrcc_KnowledgeModules = await cc_KnowledgeModules_GetObjLstCache(
          clsPubLocalStorage.courseId,
        );
        if (arrcc_KnowledgeModules.length === 0) {
          const strCourseName = await cc_Course_GetNameByCourseIdCache(clsPubLocalStorage.courseId);
          const strMsg = `课程:${strCourseName}(${clsPubLocalStorage.courseId})没有知识点，请先添加知识点！`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        const arrcc_CourseKnowledge = await cc_CourseKnowledges_GetObjLstCache(
          clsPubLocalStorage.courseId,
        );
        const arrcc_CourseKnowledgeEx = arrcc_CourseKnowledge.map(cc_CourseKnowledgesEx_CopyToEx);
        for (const cc_CourseKnowledge of arrcc_CourseKnowledgeEx) {
          await cc_CourseKnowledgesEx_FuncMapNameWithQuestionNum(cc_CourseKnowledge);
        }
        const arrKnowledge = arrcc_CourseKnowledgeEx.map(mapToKnowledgeEx);
        knowledgeModules.value.length = 0;
        for (const cc_CourseKnowledgeModule of arrcc_KnowledgeModules) {
          const arrKnowledge_Sel = arrKnowledge.filter(
            (item) => item.knowledgeModuleId === cc_CourseKnowledgeModule.knowledgeModuleId,
          );

          const module = {
            id: cc_CourseKnowledgeModule.knowledgeModuleId,
            name: cc_CourseKnowledgeModule.knowledgeModuleName,
            knowledges: arrKnowledge_Sel,
          };
          knowledgeModules.value.push(module);
        }
      }
      async function BindDdl4QryRegion() {
        arrge_DifficultyLevel.value = await ge_DifficultyLevel_GetArrge_DifficultyLevel(); //查询区域
        selectedDifficulty.value = '0';
      }
      // 生命周期钩子
      onMounted(async () => {
        BindDdl4QryRegion();
        LoadData();
      });
      return {
        showTitle,
        selectedTab,
        selectedKnowledgeId,
        selectedDifficulty,
        showPreTestModal,
        moduleName,

        courseKnowledgeId,
        knowledgeModules,
        selectTab,
        selectKnowledge,
        startPreTest,
        closePreTestModal,
        LoadData,
        arrge_DifficultyLevel,
      };
    },
  });
</script>

<style scoped>
  .selection-container {
    max-width: 900px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .tabs ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    border-bottom: 1px solid #ccc;
  }

  .tabs li {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #e0e0e0; /* Tab 页背景色 */
    margin-right: 5px;
    border-radius: 5px 5px 0 0;
  }

  .tabs li.active {
    font-weight: bold;
    background-color: #007bff; /* 选中Tab页背景色 */
    color: white;
    border-bottom: 2px solid #007bff;
  }

  .knowledge-content {
    max-height: 300px;
    overflow-y: auto;
    margin-top: 20px;
  }

  .knowledge-content ul {
    padding: 0;
    list-style-type: none;
  }

  .knowledge-content li {
    padding: 10px;
    cursor: pointer;
  }

  .knowledge-content li.selected {
    background-color: #3399ff; /* 更淡的选中知识点背景色 */
    color: white;
  }

  .difficulty-select {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end; /* 将难度选择框放在右边 */
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #c8e8f5; /* 更明显的弹出窗背景色 */
    padding: 20px;
    border-radius: 5px;
    width: 1000px; /* 弹出窗宽度 */
    height: 700px; /* 弹出窗高度 */
    overflow-y: auto;
  }

  .modal-header,
  .modal-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-header {
    border-bottom: 1px solid #ccc;
  }

  .modal-footer {
    border-top: 1px solid #ccc;
    justify-content: flex-end; /* 将按钮放在右下角 */
  }

  .close {
    cursor: pointer;
    font-size: 24px;
  }
</style>
