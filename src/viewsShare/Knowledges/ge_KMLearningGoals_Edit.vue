<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trUserId">
            <td class="text-right">
              <label
                id="lblUserId"
                name="lblUserId"
                class="col-form-label text-right"
                style="width: 90px"
                >用户
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUserId"
                v-model="userId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option v-for="(item, index) in arrvQxUsersSim" :key="index" :value="item.userId">
                  {{ item.userName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trKnowledgeModuleId">
            <td class="text-right">
              <label
                id="lblKnowledgeModuleId"
                name="lblKnowledgeModuleId"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点模块
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlKnowledgeModuleId"
                v-model="knowledgeModuleId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrcc_KnowledgeModules"
                  :key="index"
                  :value="item.knowledgeModuleId"
                >
                  {{ item.knowledgeModuleName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trGoalValue">
            <td class="text-right">
              <label
                id="lblGoalValue"
                name="lblGoalValue"
                class="col-form-label text-right"
                style="width: 90px"
                >目标值
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtGoalValue"
                v-model.number="goalValue"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trMasteryValue">
            <td class="text-right">
              <label
                id="lblMasteryValue"
                name="lblMasteryValue"
                class="col-form-label text-right"
                style="width: 90px"
                >掌握度
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMasteryValue"
                v-model.number="masteryValue"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label text-right"
                style="width: 90px"
                >备注
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelge_KMLearningGoals" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitge_KMLearningGoals"
        type="primary"
        @click="btnge_KMLearningGoals_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { ge_KMLearningGoals_EditEx } from '@/views/Knowledges/ge_KMLearningGoals_EditEx';
  import { clsge_KMLearningGoalsEN } from '@/ts/L0Entity/Knowledges/clsge_KMLearningGoalsEN';
  import { clsvQxUsersSimEN } from 'share-gen-plat-base-lib';
  import { clscc_KnowledgeModulesEN } from 'share-stu-study-base-lib';
  import { vQxUsersSim_GetObjLstCache } from 'share-gen-plat-base-lib';
  import { cc_KnowledgeModules_GetObjLstCache } from 'share-stu-study-base-lib';
  import { refDivEdit, CourseId_Session } from '@/views/Knowledges/ge_KMLearningGoalsVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'GeKMLearningGoalsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const userId = ref('');
      const knowledgeModuleId = ref('');
      const goalValue = ref(0);
      const masteryValue = ref(0);
      const courseId = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      const arrvQxUsersSim = ref<clsvQxUsersSimEN_T[]>([]);
      const arrcc_KnowledgeModules = ref<clscc_KnowledgeModulesEN_T[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框

  */
      async function getArrvQxUsersSim() {
        const arrObjLstSel = await vQxUsersSim_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrvQxUsersSim.value.length = 0;
        const obj0 = new clsvQxUsersSimEN();
        obj0.userId = '0';
        obj0.userName = '请选择vQxUsersSim...';
        arrvQxUsersSim.value.push(obj0);
        arrObjLstSel.forEach((x) => arrvQxUsersSim.value.push(x));
        userId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框

   * @param strCourseId:
  */
      async function getArrcc_KnowledgeModules(strCourseId: string) {
        let arrObjLstSel = await cc_KnowledgeModules_GetObjLstCache(strCourseId);
        if (arrObjLstSel == null) return;
        arrcc_KnowledgeModules.value.length = 0;
        const obj0 = new clscc_KnowledgeModulesEN();
        obj0.knowledgeModuleId = '0';
        obj0.knowledgeModuleName = '请选择知识点模块...';
        arrcc_KnowledgeModules.value.push(obj0);
        arrObjLstSel = arrObjLstSel.filter((x) => x.courseId == strCourseId);
        arrObjLstSel.forEach((x) => arrcc_KnowledgeModules.value.push(x));
        knowledgeModuleId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        await getArrvQxUsersSim(); //编辑区域

        await getArrcc_KnowledgeModules(strCourseId); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjge_KMLearningGoalsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatage_KMLearningGoalsObj() {
        const pobjge_KMLearningGoalsEN = new clsge_KMLearningGoalsEN();
        pobjge_KMLearningGoalsEN.SetUserId(userId.value); // 用户
        pobjge_KMLearningGoalsEN.SetKnowledgeModuleId(knowledgeModuleId.value); // 知识点模块
        pobjge_KMLearningGoalsEN.SetGoalValue(Number(goalValue.value)); // 目标值
        pobjge_KMLearningGoalsEN.SetMasteryValue(Number(masteryValue.value)); // 掌握度
        pobjge_KMLearningGoalsEN.SetCourseId(CourseId_Session.value); // 课程Id
        pobjge_KMLearningGoalsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjge_KMLearningGoalsEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjge_KMLearningGoalsEN.SetMemo(memo.value); // 备注
        return pobjge_KMLearningGoalsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjge_KMLearningGoalsEN">表实体类对象</param>
       **/
      async function ShowDataFromge_KMLearningGoalsObj(
        pobjge_KMLearningGoalsEN: clsge_KMLearningGoalsEN,
      ) {
        userId.value = pobjge_KMLearningGoalsEN.userId; // 用户
        knowledgeModuleId.value = pobjge_KMLearningGoalsEN.knowledgeModuleId; // 知识点模块
        goalValue.value = pobjge_KMLearningGoalsEN.goalValue; // 目标值
        masteryValue.value = pobjge_KMLearningGoalsEN.masteryValue; // 掌握度
        memo.value = pobjge_KMLearningGoalsEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        userId.value = '0';
        knowledgeModuleId.value = '0';
        goalValue.value = 0;
        masteryValue.value = 0;
        memo.value = '';
      }
      const strTitle = ref('知识点模块学习目标编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDatage_KMLearningGoalsObj,
        ShowDataFromge_KMLearningGoalsObj,
        Clear,
        userId,
        knowledgeModuleId,
        goalValue,
        masteryValue,
        courseId,
        updDate,
        updUser,
        memo,
        arrvQxUsersSim,
        arrcc_KnowledgeModules,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnge_KMLearningGoals_Edit_Click(strCommandName: string, strKeyId: string) {
        ge_KMLearningGoals_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
