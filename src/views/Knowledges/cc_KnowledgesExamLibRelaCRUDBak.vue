<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <label
                id="lblCourseId_q"
                name="lblCourseId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >课程Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseId_q"
                v-model="courseId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrcc_Course" :key="index" :value="item.courseId">
                  {{ item.courseName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblKnowledgeModuleId_q"
                name="lblKnowledgeModuleId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点模块
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlKnowledgeModuleId_q"
                v-model="knowledgeModuleId_q"
                class="form-control form-control-sm"
                style="width: 120px"
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
            <td class="text-right">
              <label
                id="lblCourseChapterId_q"
                name="lblCourseChapterId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >课程章节ID
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseChapterId_q"
                v-model="courseChapterId_q"
                class="form-control form-control-sm"
                style="width: 120px"
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
            <td class="text-left">
              <button
                id="btnQuery"
                name="btnQuery"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnQuery_Click"
                >查询</button
              >
            </td>
          </tr>
          <tr>
            <td class="text-left">
              <button
                id="btnExportExcel"
                name="btnExportExcel"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnExportExcel_Click"
                >导出Excel</button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblcc_KnowledgesExamLibRelaList"
            name="lblcc_KnowledgesExamLibRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >知识点习题关系列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnCreate_Click"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnUpdate_Click"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnDelete_Click"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlbIsMain_SetFldValue"
              v-model="isMain_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option value="0">选择是/否</option>
              <option value="true">是</option>
              <option value="false">否</option></select
            >
            <button
              id="btnSetIsMain"
              name="btnSetIsMain"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetIsMain_Click"
              >设置是否主资源</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <cc_KnowledgesExamLibRela_ListCom
        ref="refcc_KnowledgesExamLibRela_List"
        :items="dataListcc_KnowledgesExamLibRela"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </cc_KnowledgesExamLibRela_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortcc_KnowledgesExamLibRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <cc_KnowledgesExamLibRela_EditCom
      ref="refcc_KnowledgesExamLibRela_Edit"
    ></cc_KnowledgesExamLibRela_EditCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import {
    GetCheckedKeyIdsInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refcc_KnowledgesExamLibRela_Edit,
    refcc_KnowledgesExamLibRela_List,
    showErrorMessage,
    dataListcc_KnowledgesExamLibRela,
    emptyRecNumInfo,
    CourseId_Session,
    QuestionId_Static,
    courseId_q,
    questionId_q,
    knowledgeModuleId_q,
    courseChapterId_q,
    isMain_f,
  } from '@/views/Knowledges/cc_KnowledgesExamLibRelaVueShare';
  import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
  import cc_KnowledgesExamLibRela_EditEx from '@/views/Knowledges/cc_KnowledgesExamLibRela_EditEx';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import cc_KnowledgesExamLibRelaCRUDEx from '@/views/Knowledges/cc_KnowledgesExamLibRelaCRUDEx';
  import cc_KnowledgesExamLibRela_EditCom from '@/views/Knowledges/cc_KnowledgesExamLibRela_Edit.vue';
  import cc_KnowledgesExamLibRela_ListCom from '@/views/Knowledges/cc_KnowledgesExamLibRela_List.vue';
  import { clscc_CourseEN } from 'share-stu-study-base-lib';
  import { clscc_KnowledgeModulesEN } from 'share-stu-study-base-lib';
  import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
  import { cc_Course_GetArrcc_Course } from 'share-stu-study-base-lib';
  import { cc_KnowledgeModules_GetArrcc_KnowledgeModulesByCourseId } from 'share-stu-study-base-lib';
  import { cc_CourseChapterEx_GetArrCourseChapterByParentIdCourseIdInDiv } from 'share-stu-study-base-lib';
  export default defineComponent({
    name: 'Cc_KnowledgesExamLibRelaCRUD',
    components: {
      // 组件注册
      cc_KnowledgesExamLibRela_EditCom,
      cc_KnowledgesExamLibRela_ListCom,
    },

    setup() {
      CourseId_Session.value = clsPubLocalStorage.courseId;
      QuestionId_Static.value = 0;
      const objPage = ref<cc_KnowledgesExamLibRelaCRUDEx>();
      const objPage_Edit = ref<cc_KnowledgesExamLibRela_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'Cc_KnowledgesExamLibRelaCRUD';

      const arrcc_Course = ref<clscc_CourseEN_T[] | null>([]);
      const arrcc_KnowledgeModules = ref<clscc_KnowledgeModulesEN_T[] | null>([]);
      const arrcc_CourseChapter = ref<clscc_CourseChapterEN_T[] | null>([]);

      /** 设置字段值-IsMain
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetIsMain_Click = async () => {
        const strThisFuncName = btnSetIsMain_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置是否主资源的${thisTabName}记录!`);
            return '';
          }
          const bolIsMain: boolean = $('#ddlbIsMain_SetFldValue').prop('checked');
          //console.log('bolIsMain=' + bolIsMain);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetIsMain(arrKeyIds, bolIsMain);
          await objPage.value.BindGv_cc_KnowledgesExamLibRela4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_cc_KnowledgesExamLibRela4Func(refDivList.value);
      };

      /** 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCreate_Click)
       **/
      const btnCreate_Click = async () => {
        const strThisFuncName = btnCreate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new cc_KnowledgesExamLibRela_EditEx(
          'cc_KnowledgesExamLibRela_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_cc_KnowledgesExamLibRela(
            opType.value,
          );
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clscc_KnowledgesExamLibRelaEN.PrimaryTypeId) > -1) {
            await objPage_Edit.value.AddNewRecordWithMaxId();
          } else {
            await objPage_Edit.value.AddNewRecord();
          }
        } catch (e) {
          const strMsg = Format(
            '添加新记录初始化不成功,{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 修改记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnUpdate_Click)
       **/
      const btnUpdate_Click = async () => {
        const strThisFuncName = btnUpdate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new cc_KnowledgesExamLibRela_EditEx(
          'cc_KnowledgesExamLibRela_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strFstKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        const lngmId = Number(strFstKeyId);
        if (lngmId == 0) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_cc_KnowledgesExamLibRela(
            opType.value,
          );
          if (bolIsSuccess == false) return;
          const lngKeyId = lngmId;
          const update = await objPage_Edit.value.UpdateRecord(lngKeyId);
          if (update == false) {
            const strMsg = Format('在修改记录时,显示记录数据不成功!');
            console.error(strMsg);
            alert(strMsg);
            return;
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clscc_KnowledgesExamLibRelaEN._CurrTabName;
      };

      /** 删除记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnDelete_Click)
       **/
      const btnDelete_Click = async () => {
        const strThisFuncName = btnDelete_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要删除的${thisTabName}记录!`);
            return '';
          }
          if (confirmDel(arrKeyIds.length) == false) {
            return;
          }
          await objPage.value.DelMultiRecord(arrKeyIds);
          await objPage.value.BindGv_cc_KnowledgesExamLibRela4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnExportExcel_Click)
       **/
      const btnExportExcel_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        await objPage.value.ExportExcel_cc_KnowledgesExamLibRelaCache();
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrcc_Course.value = await cc_Course_GetArrcc_Course(); //查询区域
        courseId_q.value = '0';

        arrcc_KnowledgeModules.value =
          await cc_KnowledgeModules_GetArrcc_KnowledgeModulesByCourseId(strCourseId); //查询区域
        knowledgeModuleId_q.value = '0';

        arrcc_CourseChapter.value =
          await cc_CourseChapterEx_GetArrCourseChapterByParentIdCourseIdInDiv(strCourseId); //查询区域
        courseChapterId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        // BindDdl_TrueAndFalseInDivObj(divVarSet.refDivFunction, 'ddlbIsMain');
        isMain_f.value = '0';
      }

      const strTitle = ref('知识点习题关系维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        cc_KnowledgesExamLibRelaCRUDEx.vuebtn_Click = btn_Click;
        cc_KnowledgesExamLibRelaCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new cc_KnowledgesExamLibRelaCRUDEx();
        await objPage.value.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          default:
            break;
        }
        cc_KnowledgesExamLibRelaCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListcc_KnowledgesExamLibRela,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refcc_KnowledgesExamLibRela_Edit,
        refcc_KnowledgesExamLibRela_List,
        courseId_q,
        questionId_q,
        knowledgeModuleId_q,
        courseChapterId_q,
        isMain_f,
        arrcc_Course,
        arrcc_KnowledgeModules,
        arrcc_CourseChapter,
        btnSetIsMain_Click,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},

    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editcc_KnowledgesExamLibRela', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new cc_KnowledgesExamLibRelaCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
