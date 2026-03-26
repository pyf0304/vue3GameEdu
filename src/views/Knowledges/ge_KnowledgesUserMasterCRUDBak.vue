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
                id="lblMasterTypeId_q"
                name="lblMasterTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >掌握类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlMasterTypeId_q"
                v-model="masterTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrKnowledgeMasterType"
                  :key="index"
                  :value="item.masterTypeId"
                >
                  {{ item.masterTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblMasterLevelId_q"
                name="lblMasterLevelId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >结构Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlMasterLevelId_q"
                v-model="masterLevelId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrKnowledgeMasterLevel"
                  :key="index"
                  :value="item.masterLevelId"
                >
                  {{ item.masterLevelName }}
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
            id="lblge_KnowledgesUserMasterList"
            name="lblge_KnowledgesUserMasterList"
            class="col-form-label text-info"
            style="width: 250px"
            >知识点用户掌握列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <ge_KnowledgesUserMaster_List_2Com
        ref="refge_KnowledgesUserMaster_List_2"
        :items="dataListge_KnowledgesUserMaster"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </ge_KnowledgesUserMaster_List_2Com>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortge_KnowledgesUserMasterBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ge_KnowledgesUserMaster_EditCom
      ref="refge_KnowledgesUserMaster_Edit"
    ></ge_KnowledgesUserMaster_EditCom>
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
    refge_KnowledgesUserMaster_Edit,
    refge_KnowledgesUserMaster_List_2,
    showErrorMessage,
    dataListge_KnowledgesUserMaster,
    emptyRecNumInfo,
    CourseId_Session,
    masterTypeId_q,
    masterLevelId_q,
  } from '@/views/Knowledges/ge_KnowledgesUserMasterVueShare';
  import { clsge_KnowledgesUserMasterEN } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesUserMasterEN';
  import ge_KnowledgesUserMaster_EditEx from '@/views/Knowledges/ge_KnowledgesUserMaster_EditEx';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import ge_KnowledgesUserMasterCRUDEx from '@/views/Knowledges/ge_KnowledgesUserMasterCRUDEx';
  import ge_KnowledgesUserMaster_EditCom from '@/views/Knowledges/ge_KnowledgesUserMaster_Edit.vue';
  import ge_KnowledgesUserMaster_List_2Com from '@/views/Knowledges/ge_KnowledgesUserMaster_List_2.vue';
  import { clsKnowledgeMasterTypeEN } from 'share-stu-study-base-lib';
  import { clsKnowledgeMasterLevelEN } from 'share-stu-study-base-lib';
  import { KnowledgeMasterType_GetArrKnowledgeMasterType } from 'share-stu-study-base-lib';
  import { KnowledgeMasterLevel_GetArrKnowledgeMasterLevel } from 'share-stu-study-base-lib';
  export default defineComponent({
    name: 'Ge_KnowledgesUserMasterCRUD',
    components: {
      // 组件注册
      ge_KnowledgesUserMaster_EditCom,
      ge_KnowledgesUserMaster_List_2Com,
    },

    setup() {
      CourseId_Session.value = clsPubLocalStorage.courseId;
      const objPage = ref<ge_KnowledgesUserMasterCRUDEx>();
      const objPage_Edit = ref<ge_KnowledgesUserMaster_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'Ge_KnowledgesUserMasterCRUD';

      const arrKnowledgeMasterType = ref<clsKnowledgeMasterTypeEN_T[] | null>([]);
      const arrKnowledgeMasterLevel = ref<clsKnowledgeMasterLevelEN_T[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_ge_KnowledgesUserMaster4Func(refDivList.value);
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
        objPage_Edit.value = new ge_KnowledgesUserMaster_EditEx(
          'ge_KnowledgesUserMaster_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_ge_KnowledgesUserMaster(
            opType.value,
          );
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsge_KnowledgesUserMasterEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new ge_KnowledgesUserMaster_EditEx(
          'ge_KnowledgesUserMaster_EditEx',
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
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_ge_KnowledgesUserMaster(
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
        return clsge_KnowledgesUserMasterEN._CurrTabName;
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
          await objPage.value.BindGv_ge_KnowledgesUserMaster4Func(divVarSet.refDivList);
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
        await objPage.value.ExportExcel_ge_KnowledgesUserMaster();
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrKnowledgeMasterType.value = await KnowledgeMasterType_GetArrKnowledgeMasterType(); //查询区域
        masterTypeId_q.value = '0';

        arrKnowledgeMasterLevel.value = await KnowledgeMasterLevel_GetArrKnowledgeMasterLevel(); //查询区域
        masterLevelId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('知识点用户掌握维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        ge_KnowledgesUserMasterCRUDEx.vuebtn_Click = btn_Click;
        ge_KnowledgesUserMasterCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new ge_KnowledgesUserMasterCRUDEx();
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
        ge_KnowledgesUserMasterCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListge_KnowledgesUserMaster,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refge_KnowledgesUserMaster_Edit,
        refge_KnowledgesUserMaster_List_2,
        masterTypeId_q,
        masterLevelId_q,
        arrKnowledgeMasterType,
        arrKnowledgeMasterLevel,
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
        router.push({ name: 'editge_KnowledgesUserMaster', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new ge_KnowledgesUserMasterCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
