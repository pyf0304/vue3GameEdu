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
                id="lblStuName_q"
                name="lblStuName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >姓名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStuName_q"
                v-model="stuName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblStuId_q"
                name="lblStuId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >学号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStuId_q"
                v-model="stuId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblIdStudentInfo_q"
                name="lblIdStudentInfo_q"
                class="col-form-label text-right"
                style="width: 90px"
                >学生
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdStudentInfo_q"
                v-model="idStudentInfo_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrvStudentInfo_Sim"
                  :key="index"
                  :value="item.idStudentInfo"
                >
                  {{ item.stuName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblIdGrade_q"
                name="lblIdGrade_q"
                class="col-form-label text-right"
                style="width: 90px"
                >年级
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdGrade_q"
                v-model="idGrade_q"
                class="form-control form-control-sm"
                @change="ddlIdGradeq_SelectedIndexChanged($event)"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrXzGrade" :key="index" :value="item.idGrade">
                  {{ item.gradeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblIdAdminCls_q"
                name="lblIdAdminCls_q"
                class="col-form-label text-right"
                style="width: 90px"
                >行政班
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdAdminCls_q"
                v-model="idAdminCls_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrXzAdminCls"
                  :key="index"
                  :value="item.idAdminCls"
                >
                  {{ item.adminClsName }}
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
        </tbody></table
      >
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblStuPerfAnalysisList"
            name="lblStuPerfAnalysisList"
            class="col-form-label text-info"
            style="width: 250px"
            >学生问题分析列表
          </label>
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <StuPerfAnalysis_ListCom
        ref="refStuPerfAnalysis_List"
        :items="dataListStuPerfAnalysis"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </StuPerfAnalysis_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortStuPerfAnalysisBy" type="hidden" />
    </div>
    <!--详细信息层-->
    <StuPerfAnalysis_DetailCom ref="refStuPerfAnalysis_Detail"></StuPerfAnalysis_DetailCom>
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
    GetCheckedKeyLstsInDivObj,
    GetCheckedKeyIdsInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refStuPerfAnalysis_Detail,
    refStuPerfAnalysis_List,
    showErrorMessage,
    dataListStuPerfAnalysis,
    emptyRecNumInfo,
    IdCurrEduCls_Session,
    CourseId_Session,
    IdGrade_Static,
    stuName_q,
    stuId_q,
    idStudentInfo_q,
    idCurrEduCls_q,
    courseId_q,
    idGrade_q,
    idAdminCls_q,
  } from '@/views/QuestionnaireResult/StuPerfAnalysisVueShare';
  import { clsStuPerfAnalysisEN } from '@/ts/L0Entity/QuestionnaireResult/clsStuPerfAnalysisEN';
  import StuPerfAnalysis_DetailEx from '@/views/QuestionnaireResult/StuPerfAnalysis_DetailEx';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import StuPerfAnalysisCRUDEx from '@/views/QuestionnaireResult/StuPerfAnalysisCRUDEx';
  import StuPerfAnalysis_DetailCom from '@/views/QuestionnaireResult/StuPerfAnalysis_Detail.vue';
  import StuPerfAnalysis_ListCom from '@/views/QuestionnaireResult/StuPerfAnalysis_List.vue';
  // import { clsvStudentInfo_SimEN } from 'share-stu-study-base-lib';
  import { clsXzGradeEN } from 'share-stu-study-base-lib';
  import { clsXzAdminClsEN } from '@/ts/L0Entity/PeopleManage/clsXzAdminClsEN';
  import { vStudentInfo_Sim_GetArrvStudentInfo_Sim } from 'share-stu-study-base-lib';
  import { XzGrade_GetArrXzGrade } from 'share-stu-study-base-lib';
  import { XzAdminCls_GetArrXzAdminClsByIdGrade } from '@/ts/L3ForWApi/PeopleManage/clsXzAdminClsWApi';
  export default defineComponent({
    name: 'StuPerfAnalysisCRUD',
    components: {
      // 组件注册
      StuPerfAnalysis_DetailCom,
      StuPerfAnalysis_ListCom,
    },

    setup() {
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;
      CourseId_Session.value = clsPubLocalStorage.courseId;
      IdGrade_Static.value = '';
      const objPage = ref<StuPerfAnalysisCRUDEx>();
      const objPage_Detail = ref<StuPerfAnalysis_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'StuPerfAnalysisCRUD';

      const arrvStudentInfo_Sim = ref<clsvStudentInfo_SimEN_T[] | null>([]);
      const arrXzGrade = ref<clsXzGradeEN_T[] | null>([]);
      const arrXzAdminCls = ref<clsXzAdminClsEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_StuPerfAnalysis4Func(refDivList.value);
      };

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsStuPerfAnalysisEN._CurrTabName;
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
          const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
          if (arrKeyLsts.length == 0) {
            alert(`请选择需要删除的${thisTabName}记录!`);
            return '';
          }
          if (confirmDel(arrKeyLsts.length) == false) {
            return;
          }
          await objPage.value.DelMultiRecord_KeyLst(arrKeyLsts);
          await objPage.value.BindGv_StuPerfAnalysis4Func(divVarSet.refDivList);
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
        await objPage.value.ExportExcel_StuPerfAnalysis4Func();
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strIdCurrEduCls = IdCurrEduCls_Session.value; //静态变量;//Session存储、local存储
        const strIdGrade_Static = IdGrade_Static.value; //静态变量;//静态变量

        arrvStudentInfo_Sim.value = await vStudentInfo_Sim_GetArrvStudentInfo_Sim(strIdCurrEduCls); //查询区域
        idStudentInfo_q.value = '0';

        arrXzGrade.value = await XzGrade_GetArrXzGrade(); //查询区域
        idGrade_q.value = '0';

        arrXzAdminCls.value = await XzAdminCls_GetArrXzAdminClsByIdGrade(strIdGrade_Static); //查询区域
        idAdminCls_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('学生问题分析维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        StuPerfAnalysisCRUDEx.vuebtn_Click = btn_Click;
        StuPerfAnalysisCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new StuPerfAnalysisCRUDEx();
        objPage.value.PageLoadCache();
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
          case 'Detail':
            break;
          default:
            break;
        }
        StuPerfAnalysisCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListStuPerfAnalysis,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refStuPerfAnalysis_Detail,
        refStuPerfAnalysis_List,
        stuName_q,
        stuId_q,
        idStudentInfo_q,
        idCurrEduCls_q,
        courseId_q,
        idGrade_q,
        idAdminCls_q,
        arrvStudentInfo_Sim,
        arrXzGrade,
        arrXzAdminCls,
        btnQuery_Click,
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
        router.push({ name: 'editStuPerfAnalysis', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new StuPerfAnalysisCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      /** 函数功能:系统生成的Change事件函数
       * (AutoGCLib.Vue_ViewScript_TS4Html+<>c__DisplayClass76_0:<Gen_Vue_method_ts_GeneEventFuncEx>b__1)
       **/
      async ddlIdGradeq_SelectedIndexChanged(e: Event) {
        console.log(e);
        alert('请在当前函数中重写该函数!');
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
