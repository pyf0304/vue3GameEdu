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
            id="lblge_InspectProcessList"
            name="lblge_InspectProcessList"
            class="col-form-label text-info"
            style="width: 250px"
            >检查过程表列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
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
          <button
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClone_Click"
            >复制</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              id="btnGoTop"
              name="btnGoTop"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnGoTop_Click"
              >移顶</button
            >
            <button
              id="btnUpMove"
              name="btnUpMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnUpMove_Click"
              >上移</button
            >
            <button
              id="btnDownMove"
              name="btnDownMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnDownMove_Click"
              >下移</button
            >
            <button
              id="btnGoBottum"
              name="btnGoBottum"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnGoBottum_Click"
              >移底</button
            >
            <button
              id="btnReOrder"
              name="btnReOrder"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnReOrder_Click"
              >重序</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <ge_InspectProcess_ListCom
        ref="refge_InspectProcess_List"
        :items="dataListge_InspectProcess"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </ge_InspectProcess_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortge_InspectProcessBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ge_InspectProcess_EditCom ref="refge_InspectProcess_Edit"></ge_InspectProcess_EditCom>
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
    QuestionId_Static,
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refge_InspectProcess_Edit,
    refge_InspectProcess_List,
    showErrorMessage,
    dataListge_InspectProcess,
    emptyRecNumInfo,
    CourseId_Session,
    questionId_f,
  } from '@/views/GameLearn/ge_InspectProcessVueShare';
  import {
    GetCheckedKeyIdsInDivObj,
    SetCheckedItem4KeyIdInDiv,
    GetDivObjInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    ge_InspectProcess_UpMoveAsync,
    ge_InspectProcess_DownMoveAsync,
    ge_InspectProcess_GoTopAsync,
    ge_InspectProcess_GoBottomAsync,
    ge_InspectProcess_ReOrderAsync,
  } from '@/ts/L3ForWApi/GameLearn/clsge_InspectProcessWApi';
  import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import { clsge_InspectProcessEN } from '@/ts/L0Entity/GameLearn/clsge_InspectProcessEN';
  import { ge_InspectProcess_EditEx } from '@/views/GameLearn/ge_InspectProcess_EditEx';
  import { ge_InspectProcessCRUDEx } from '@/views/GameLearn/ge_InspectProcessCRUDEx';
  import ge_InspectProcess_EditCom from '@/viewsShare/GameLearn/ge_InspectProcess_Edit.vue';
  import ge_InspectProcess_ListCom from '@/viewsShare/GameLearn/ge_InspectProcess_List.vue';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  export default defineComponent({
    name: 'Ge_InspectProcessCRUD',
    components: {
      // 组件注册
      ge_InspectProcess_EditCom,
      ge_InspectProcess_ListCom,
    },

    setup() {
      CourseId_Session.value = clsPubLocalStorage.courseId;
      QuestionId_Static.value = 0;
      const objPage = ref<ge_InspectProcessCRUDEx>();
      const objPage_Edit = ref<ge_InspectProcess_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'Ge_InspectProcessCRUD';

      /**
       * 上移
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnUpMove_Click)
       **/
      const btnUpMove_Click = async () => {
        const strThisFuncName = btnUpMove_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strQuestionId = QuestionId_Static.value;
        const lngQuestionId = Number(strQuestionId);
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要上移的${thisTabName}记录!`);
          return;
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            questionid: lngQuestionId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await ge_InspectProcess_UpMoveAsync(objOrderByData);
          //ge_InspectProcess_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `上移记录出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_ge_InspectProcess(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /**
       * 下移
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnDownMove_Click)
       **/
      const btnDownMove_Click = async () => {
        const strThisFuncName = btnDownMove_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strQuestionId = QuestionId_Static.value;
        const lngQuestionId = Number(strQuestionId);
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要下移的${thisTabName}记录!`);
          return;
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            questionid: lngQuestionId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await ge_InspectProcess_DownMoveAsync(objOrderByData);
          //ge_InspectProcess_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `下移记录出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_ge_InspectProcess(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /** 置顶
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnGoTop_Click)
       **/
      const btnGoTop_Click = async () => {
        const strThisFuncName = btnGoTop_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strQuestionId = QuestionId_Static.value;
        const lngQuestionId = Number(strQuestionId);
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要置顶的${thisTabName}记录!`);
          return '';
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            questionid: lngQuestionId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await ge_InspectProcess_GoTopAsync(objOrderByData);
          //ge_InspectProcess_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `置顶出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_ge_InspectProcess(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /**
       * 置底
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnGoBottum_Click)
       **/
      const btnGoBottum_Click = async () => {
        const strThisFuncName = btnGoBottum_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strQuestionId = QuestionId_Static.value;
        const lngQuestionId = Number(strQuestionId);
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要置底的${thisTabName}记录!`);
          return '';
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            questionid: lngQuestionId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await ge_InspectProcess_GoBottomAsync(objOrderByData);
          //ge_InspectProcess_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `置底出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_ge_InspectProcess(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /**
       * 重序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnReOrder_Click)
       **/
      const btnReOrder_Click = async () => {
        const strThisFuncName = btnReOrder_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strQuestionId = QuestionId_Static.value;
        const lngQuestionId = Number(strQuestionId);
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          const jsonObject = {
            questionid: lngQuestionId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await ge_InspectProcess_ReOrderAsync(objOrderByData);
          //ge_InspectProcess_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `重序出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_ge_InspectProcess(divVarSet.refDivList);
      };

      /**
       * 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCopyRecord_Click)
       **/
      const btnClone_Click = async () => {
        const strThisFuncName = btnClone_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要克隆的${thisTabName}记录!`);
            return '';
          }
          await objPage.value.CopyRecord(arrKeyIds);
          await objPage.value.BindGv_ge_InspectProcess(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `复制记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
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
        await objPage.value.BindGv_ge_InspectProcess(refDivList.value);
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
        objPage_Edit.value = new ge_InspectProcess_EditEx(
          'ge_InspectProcess_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_ge_InspectProcess(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsge_InspectProcessEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new ge_InspectProcess_EditEx(
          'ge_InspectProcess_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strInspectId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strInspectId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_ge_InspectProcess(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strInspectId);
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
        return clsge_InspectProcessEN._CurrTabName;
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
          await objPage.value.BindGv_ge_InspectProcess(divVarSet.refDivList);
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
        await objPage.value.ExportExcel_ge_InspectProcess();
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {}

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        questionId_f.value = 0;
      }

      const strTitle = ref('检查过程表维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        ge_InspectProcessCRUDEx.vuebtn_Click = btn_Click;
        ge_InspectProcessCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new ge_InspectProcessCRUDEx();
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
        ge_InspectProcessCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListge_InspectProcess,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refge_InspectProcess_Edit,
        refge_InspectProcess_List,
        questionId_f,
        btnUpMove_Click,
        btnDownMove_Click,
        btnGoTop_Click,
        btnGoBottum_Click,
        btnReOrder_Click,
        btnClone_Click,
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
        router.push({ name: 'editge_InspectProcess', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new ge_InspectProcessCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
