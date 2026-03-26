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
          <tr id="trIsShow">
            <td class="text-right">
              <label
                id="lblExamPaperName"
                name="lblExamPaperName"
                class="col-form-label text-right"
                style="width: 90px"
                >考卷名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtExamPaperName"
                v-model="examPaperName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsShow" v-model="isShow" type="checkbox" Text="是否启用" /><label
                  for="chkIsShow"
                  >是否启用</label
                ></span
              >
            </td>
          </tr>
          <tr id="trCourseChapterId">
            <td class="text-right">
              <label
                id="lblCourseId"
                name="lblCourseId"
                class="col-form-label text-right"
                style="width: 90px"
                >课程Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseId"
                v-model="courseId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrcc_Course" :key="index" :value="item.courseId">
                  {{ item.courseName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblCourseChapterId"
                name="lblCourseChapterId"
                class="col-form-label text-right"
                style="width: 90px"
                >课程章节
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseChapterId"
                v-model="courseChapterId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrcc_CourseChapter"
                  :key="index"
                  :value="item.courseChapterId"
                >
                  {{ item.courseChapterName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trExamPaperTypeId">
            <td class="text-right">
              <label
                id="lblPaperIndex"
                name="lblPaperIndex"
                class="col-form-label text-right"
                style="width: 90px"
                >试卷序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPaperIndex"
                v-model="paperIndex"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblExamPaperTypeId"
                name="lblExamPaperTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >试卷类型
              </label>
            </td>
            <td class="text-left"> </td>
          </tr>
          <tr id="trIdXzMajor">
            <td class="text-right">
              <label
                id="lblPaperTime"
                name="lblPaperTime"
                class="col-form-label text-right"
                style="width: 90px"
                >考试时间（分钟）
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPaperTime"
                v-model="paperTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblIdXzMajor"
                name="lblIdXzMajor"
                class="col-form-label text-right"
                style="width: 90px"
                >专业
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdXzMajor"
                v-model="idXzMajor"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrXzMajor" :key="index" :value="item.idXzMajor">
                  {{ item.majorName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trExamCreateTime">
            <td class="text-right">
              <label
                id="lblPaperDispModeId"
                name="lblPaperDispModeId"
                class="col-form-label text-right"
                style="width: 90px"
                >试卷显示模式Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlPaperDispModeId"
                v-model="paperDispModeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrcc_PaperDispMode"
                  :key="index"
                  :value="item.paperDispModeId"
                >
                  {{ item.paperDispModeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblExamCreateTime"
                name="lblExamCreateTime"
                class="col-form-label text-right"
                style="width: 90px"
                >考卷建立时间
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtExamCreateTime"
                v-model="examCreateTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIsOpenToAllStu">
            <td class="text-right">
              <label
                id="lblCreateUserID"
                name="lblCreateUserID"
                class="col-form-label text-right"
                style="width: 90px"
                >建立用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCreateUserID"
                v-model="createUserID"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsOpenToAllStu"
                  v-model="isOpenToAllStu"
                  type="checkbox"
                  Text="全校师生"
                /><label for="chkIsOpenToAllStu">全校师生</label></span
              >
            </td>
          </tr>
          <tr id="trIsOpenToSocial">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsOpenToSchool"
                  v-model="isOpenToSchool"
                  type="checkbox"
                  Text="全校师生公开"
                /><label for="chkIsOpenToSchool">全校师生公开</label></span
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsOpenToSocial"
                  v-model="isOpenToSocial"
                  type="checkbox"
                  Text="社会公众"
                /><label for="chkIsOpenToSocial">社会公众</label></span
              >
            </td>
          </tr>
          <tr id="trIsCanMultiDo">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsAutoGeneQuestion"
                  v-model="isAutoGeneQuestion"
                  type="checkbox"
                  Text="是否自动生成题目"
                /><label for="chkIsAutoGeneQuestion">是否自动生成题目</label></span
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsCanMultiDo"
                  v-model="isCanMultiDo"
                  type="checkbox"
                  Text="是否可以做多次"
                /><label for="chkIsCanMultiDo">是否可以做多次</label></span
              >
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
            <td class="text-left" ColSpan="3">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelcc_CourseExamPaper" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitcc_CourseExamPaper"
        type="primary"
        @click="btncc_CourseExamPaper_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { cc_CourseExamPaper_EditEx } from '@/views/Knowledges/cc_CourseExamPaper_EditEx';
  import { clscc_CourseExamPaperEN } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperEN';
  import { clscc_CourseEN } from 'share-stu-study-base-lib';
  import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
  import { clsXzMajorEN as clsXzMajorENS } from 'share-stu-study-base-lib';
  import { clscc_PaperDispModeEN } from '@/ts/L0Entity/Knowledges/clscc_PaperDispModeEN';
  import { cc_Course_GetObjLstCache } from 'share-stu-study-base-lib';
  import { cc_CourseChapter_GetObjLstCache } from 'share-stu-study-base-lib';
  import { XzMajor_GetObjLstCache } from 'share-stu-study-base-lib';
  import { cc_PaperDispMode_GetObjLstCache } from '@/ts/L3ForWApi/Knowledges/clscc_PaperDispModeWApi';
  import { CourseId_Session, refDivEdit } from '@/viewsShare/Knowledges/cc_CourseExamPaperVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'CcCourseExamPaperEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const examPaperName = ref('');
      const isShow = ref(true);
      const courseId = ref('0');
      const courseChapterId = ref('0');
      const paperIndex = ref(0);
      const examPaperTypeId = ref('');
      const paperTime = ref(0);
      const idXzMajor = ref('0');
      const paperDispModeId = ref('0');
      const examCreateTime = ref('');
      const createUserID = ref('');
      const isOpenToAllStu = ref(true);
      const isOpenToSchool = ref(true);
      const isOpenToSocial = ref(true);
      const isAutoGeneQuestion = ref(true);
      const isCanMultiDo = ref(true);
      const memo = ref('');
      const updDate = ref('');
      const updUserId = ref('');

      const arrcc_Course = ref<clscc_CourseEN_T[]>([]);
      const arrcc_CourseChapter = ref<clscc_CourseChapterEN_T[]>([]);
      const arrXzMajor = ref<clsXzMajorEN_T[]>([]);
      const arrcc_PaperDispMode = ref<clscc_PaperDispModeEN[]>([]);
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
      async function getArrcc_Course() {
        const arrObjLstSel = await cc_Course_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrcc_Course.value.length = 0;
        const obj0 = new clscc_CourseEN();
        obj0.courseId = '0';
        obj0.courseName = '请选择课程...';
        arrcc_Course.value.push(obj0);
        arrObjLstSel.forEach((x) => arrcc_Course.value.push(x));
        courseId.value = '0';
      }
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
      async function getArrcc_CourseChapter(strCourseId: string) {
        let arrObjLstSel = await cc_CourseChapter_GetObjLstCache(strCourseId);
        if (arrObjLstSel == null) return;
        arrcc_CourseChapter.value.length = 0;
        const obj0 = new clscc_CourseChapterEN();
        obj0.courseChapterId = '0';
        obj0.courseChapterName = '请选择课程章节...';
        arrcc_CourseChapter.value.push(obj0);
        arrObjLstSel = arrObjLstSel.filter((x) => x.courseId == strCourseId);
        arrObjLstSel.forEach((x) => arrcc_CourseChapter.value.push(x));
        courseChapterId.value = '0';
      }
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
      async function getArrXzMajor() {
        const arrObjLstSel = await XzMajor_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrXzMajor.value.length = 0;
        const obj0 = new clsXzMajorENS();
        obj0.idXzMajor = '0';
        obj0.majorName = '请选择专业...';
        arrXzMajor.value.push(obj0);
        arrObjLstSel.forEach((x) => arrXzMajor.value.push(x));
        idXzMajor.value = '0';
      }
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
      async function getArrcc_PaperDispMode() {
        const arrObjLstSel = await cc_PaperDispMode_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrcc_PaperDispMode.value.length = 0;
        const obj0 = new clscc_PaperDispModeEN();
        obj0.paperDispModeId = '0';
        obj0.paperDispModeName = '请选择试卷显示模式...';
        arrcc_PaperDispMode.value.push(obj0);
        arrObjLstSel.forEach((x) => arrcc_PaperDispMode.value.push(x));
        paperDispModeId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        await getArrcc_Course(); //编辑区域

        await getArrcc_CourseChapter(strCourseId); //编辑区域

        await getArrXzMajor(); //编辑区域

        await getArrcc_PaperDispMode(); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjcc_CourseExamPaperEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatacc_CourseExamPaperObj() {
        const pobjcc_CourseExamPaperEN = new clscc_CourseExamPaperEN();
        pobjcc_CourseExamPaperEN.SetExamPaperName(examPaperName.value); // 考卷名称
        pobjcc_CourseExamPaperEN.SetIsShow(isShow.value); // 是否启用
        pobjcc_CourseExamPaperEN.SetCourseId(courseId.value); // 课程Id
        pobjcc_CourseExamPaperEN.SetCourseChapterId(courseChapterId.value); // 课程章节
        pobjcc_CourseExamPaperEN.SetPaperIndex(paperIndex.value); // 试卷序号
        pobjcc_CourseExamPaperEN.SetExamPaperTypeId(examPaperTypeId.value); // 试卷类型
        pobjcc_CourseExamPaperEN.SetPaperTime(paperTime.value); // 考试时间（分钟）
        pobjcc_CourseExamPaperEN.SetIdXzMajor(idXzMajor.value); // 专业
        pobjcc_CourseExamPaperEN.SetPaperDispModeId(paperDispModeId.value); // 试卷显示模式Id
        pobjcc_CourseExamPaperEN.SetExamCreateTime(examCreateTime.value); // 考卷建立时间
        pobjcc_CourseExamPaperEN.SetCreateUserID(createUserID.value); // 建立用户ID
        pobjcc_CourseExamPaperEN.SetIsOpenToAllStu(isOpenToAllStu.value); // 全校师生
        pobjcc_CourseExamPaperEN.SetIsOpenToSchool(isOpenToSchool.value); // 全校师生公开
        pobjcc_CourseExamPaperEN.SetIsOpenToSocial(isOpenToSocial.value); // 社会公众
        pobjcc_CourseExamPaperEN.SetIsAutoGeneQuestion(isAutoGeneQuestion.value); // 是否自动生成题目
        pobjcc_CourseExamPaperEN.SetIsCanMultiDo(isCanMultiDo.value); // 是否可以做多次
        pobjcc_CourseExamPaperEN.SetMemo(memo.value); // 备注
        pobjcc_CourseExamPaperEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjcc_CourseExamPaperEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        return pobjcc_CourseExamPaperEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjcc_CourseExamPaperEN">表实体类对象</param>
       **/
      async function ShowDataFromcc_CourseExamPaperObj(
        pobjcc_CourseExamPaperEN: clscc_CourseExamPaperEN,
      ) {
        examPaperName.value = pobjcc_CourseExamPaperEN.examPaperName; // 考卷名称
        isShow.value = pobjcc_CourseExamPaperEN.isShow; // 是否启用
        courseId.value = pobjcc_CourseExamPaperEN.courseId; // 课程Id
        courseChapterId.value = pobjcc_CourseExamPaperEN.courseChapterId; // 课程章节
        paperIndex.value = pobjcc_CourseExamPaperEN.paperIndex; // 试卷序号
        examPaperTypeId.value = pobjcc_CourseExamPaperEN.examPaperTypeId; // 试卷类型
        paperTime.value = pobjcc_CourseExamPaperEN.paperTime; // 考试时间（分钟）
        idXzMajor.value = pobjcc_CourseExamPaperEN.idXzMajor; // 专业
        paperDispModeId.value = pobjcc_CourseExamPaperEN.paperDispModeId; // 试卷显示模式Id
        examCreateTime.value = pobjcc_CourseExamPaperEN.examCreateTime; // 考卷建立时间
        createUserID.value = pobjcc_CourseExamPaperEN.createUserID; // 建立用户ID
        isOpenToAllStu.value = pobjcc_CourseExamPaperEN.isOpenToAllStu; // 全校师生
        isOpenToSchool.value = pobjcc_CourseExamPaperEN.isOpenToSchool; // 全校师生公开
        isOpenToSocial.value = pobjcc_CourseExamPaperEN.isOpenToSocial; // 社会公众
        isAutoGeneQuestion.value = pobjcc_CourseExamPaperEN.isAutoGeneQuestion; // 是否自动生成题目
        isCanMultiDo.value = pobjcc_CourseExamPaperEN.isCanMultiDo; // 是否可以做多次
        memo.value = pobjcc_CourseExamPaperEN.memo; // 备注
      }
      const strTitle = ref('考卷编辑');
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
        GetEditDatacc_CourseExamPaperObj,
        ShowDataFromcc_CourseExamPaperObj,
        examPaperName,
        isShow,
        courseId,
        courseChapterId,
        paperIndex,
        examPaperTypeId,
        paperTime,
        idXzMajor,
        paperDispModeId,
        examCreateTime,
        createUserID,
        isOpenToAllStu,
        isOpenToSchool,
        isOpenToSocial,
        isAutoGeneQuestion,
        isCanMultiDo,
        memo,
        updDate,
        updUserId,
        arrcc_Course,
        arrcc_CourseChapter,
        arrXzMajor,
        arrcc_PaperDispMode,
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
      btncc_CourseExamPaper_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_CourseExamPaper_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
