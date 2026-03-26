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
          <tr id="trQuestionId">
            <td class="text-right">
              <label
                id="lblQuestionId"
                name="lblQuestionId"
                class="col-form-label text-right"
                style="width: 90px"
                >题目Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlQuestionId"
                v-model.number="questionId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrvQuestionnaire_Sim"
                  :key="index"
                  :value="item.questionId"
                >
                  {{ item.questionName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIdStudentInfo">
            <td class="text-right">
              <label
                id="lblIdStudentInfo"
                name="lblIdStudentInfo"
                class="col-form-label text-right"
                style="width: 90px"
                >学生流水号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdStudentInfo"
                v-model="idStudentInfo"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trTeachingLog">
            <td class="text-right">
              <label
                id="lblTeachingLog"
                name="lblTeachingLog"
                class="col-form-label text-right"
                style="width: 90px"
                >教学日志
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtTeachingLog"
                v-model="teachingLog"
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
      <el-button id="btnCancelcc_KnowledgeStuTeachLog" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitcc_KnowledgeStuTeachLog"
        type="primary"
        @click="btncc_KnowledgeStuTeachLog_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { cc_KnowledgeStuTeachLog_EditEx } from '@/views/Knowledges/cc_KnowledgeStuTeachLog_EditEx';
  import { clscc_KnowledgeStuTeachLogEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeStuTeachLogEN';
  import { clsvQuestionnaire_SimEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN';
  import { vQuestionnaire_Sim_GetObjLstCache } from '@/ts/L3ForWApi/QuestionaireEdit/clsvQuestionnaire_SimWApi';
  import { refDivEdit, CourseId_Session } from '@/views/Knowledges/cc_KnowledgeStuTeachLogVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'CcKnowledgeStuTeachLogEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const questionId = ref(0);
      const idStudentInfo = ref('');
      const teachingLog = ref('');
      const courseId = ref('');
      const memo = ref('');
      const updDate = ref('');
      const updUserId = ref('');

      const arrvQuestionnaire_Sim = ref<clsvQuestionnaire_SimEN[]>([]);
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
      async function getArrvQuestionnaire_Sim(strCourseId: string) {
        let arrObjLstSel = await vQuestionnaire_Sim_GetObjLstCache(strCourseId);
        if (arrObjLstSel == null) return;
        arrvQuestionnaire_Sim.value.length = 0;
        const obj0 = new clsvQuestionnaire_SimEN();
        obj0.questionId = 0;
        obj0.questionName = '请选择vQuestionnaire_Sim...';
        arrvQuestionnaire_Sim.value.push(obj0);
        arrObjLstSel = arrObjLstSel.filter((x) => x.courseId == strCourseId);
        arrObjLstSel.forEach((x) => arrvQuestionnaire_Sim.value.push(x));
        questionId.value = 0;
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        await getArrvQuestionnaire_Sim(strCourseId); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjcc_KnowledgeStuTeachLogEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatacc_KnowledgeStuTeachLogObj() {
        const pobjcc_KnowledgeStuTeachLogEN = new clscc_KnowledgeStuTeachLogEN();
        pobjcc_KnowledgeStuTeachLogEN.SetQuestionId(questionId.value); // 题目Id
        pobjcc_KnowledgeStuTeachLogEN.SetIdStudentInfo(idStudentInfo.value); // 学生流水号
        pobjcc_KnowledgeStuTeachLogEN.SetTeachingLog(teachingLog.value); // 教学日志
        pobjcc_KnowledgeStuTeachLogEN.SetCourseId(CourseId_Session.value); // 课程Id
        pobjcc_KnowledgeStuTeachLogEN.SetMemo(memo.value); // 备注
        pobjcc_KnowledgeStuTeachLogEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjcc_KnowledgeStuTeachLogEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        return pobjcc_KnowledgeStuTeachLogEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjcc_KnowledgeStuTeachLogEN">表实体类对象</param>
       **/
      async function ShowDataFromcc_KnowledgeStuTeachLogObj(
        pobjcc_KnowledgeStuTeachLogEN: clscc_KnowledgeStuTeachLogEN,
      ) {
        questionId.value = pobjcc_KnowledgeStuTeachLogEN.questionId; // 题目Id
        idStudentInfo.value = pobjcc_KnowledgeStuTeachLogEN.idStudentInfo; // 学生流水号
        teachingLog.value = pobjcc_KnowledgeStuTeachLogEN.teachingLog; // 教学日志
        memo.value = pobjcc_KnowledgeStuTeachLogEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        questionId.value = 0;
        idStudentInfo.value = '';
        teachingLog.value = '';
        memo.value = '';
      }
      const strTitle = ref('学生知识点教学日志编辑');
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
        GetEditDatacc_KnowledgeStuTeachLogObj,
        ShowDataFromcc_KnowledgeStuTeachLogObj,
        Clear,
        questionId,
        idStudentInfo,
        teachingLog,
        courseId,
        memo,
        updDate,
        updUserId,
        arrvQuestionnaire_Sim,
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
      btncc_KnowledgeStuTeachLog_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_KnowledgeStuTeachLog_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
