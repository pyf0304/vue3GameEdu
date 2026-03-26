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
                id="lblUserId_Throw_q"
                name="lblUserId_Throw_q"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserId_Throw_q"
                v-model="userId_Throw_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblUserName_Throw_q"
                name="lblUserName_Throw_q"
                class="col-form-label text-right"
                style="width: 90px"
                >用户名_扔
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserName_Throw_q"
                v-model="userName_Throw_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblUserId_PickUp_q"
                name="lblUserId_PickUp_q"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserId_PickUp_q"
                v-model="userId_PickUp_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblUserName_PickUp_q"
                name="lblUserName_PickUp_q"
                class="col-form-label text-right"
                style="width: 90px"
                >用户名_捞
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserName_PickUp_q"
                v-model="userName_PickUp_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblBottleStateId_q"
                name="lblBottleStateId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >操作方式Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlBottleStateId_q"
                v-model="bottleStateId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrBottleState"
                  :key="index"
                  :value="item.bottleStateId"
                >
                  {{ item.bottleStateName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblQuestionTypeId_q"
                name="lblQuestionTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >题目类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlQuestionTypeId_q"
                v-model="questionTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrQuestionType"
                  :key="index"
                  :value="item.questionTypeId"
                >
                  {{ item.questionTypeName }}
                </option></select
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
            id="lblGameBottleList"
            name="lblGameBottleList"
            class="col-form-label text-info"
            style="width: 250px"
            >游戏瓶列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnQuery"
            name="btnQuery"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnQuery_Click"
            >查询</button
          >
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
          <button
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btnExportExcel_Click"
            >导出Excel</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <GameBottle_ListCom
        ref="refGameBottle_List"
        :items="dataListGameBottle"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </GameBottle_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortGameBottleBy" type="hidden" />
    </div>
    <!--编辑层-->
    <GameBottle_EditCom ref="refGameBottle_Edit"></GameBottle_EditCom>
    <!--详细信息层-->
    <GameBottle_DetailCom ref="refGameBottle_Detail"></GameBottle_DetailCom>
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
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refGameBottle_Edit,
    refGameBottle_Detail,
    refGameBottle_List,
    showErrorMessage,
    dataListGameBottle,
    emptyRecNumInfo,
    CourseId_Session,
    IsUse_Static,
    userId_Throw_q,
    userName_Throw_q,
    userId_PickUp_q,
    userName_PickUp_q,
    bottleStateId_q,
    questionTypeId_q,
  } from '@/views/GameLearn/GameBottleVueShare';
  import { GameBottleCRUDEx } from '@/views/GameLearn/GameBottleCRUDEx';
  import GameBottle_EditCom from '@/views/GameLearn/GameBottle_Edit.vue';
  import GameBottle_DetailCom from '@/views/GameLearn/GameBottle_Detail.vue';
  import GameBottle_ListCom from '@/views/GameLearn/GameBottle_List.vue';
  import {
    GetCheckedKeyIdsInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import { GameBottle_EditEx } from './GameBottle_EditEx';
  import { clsGameBottleEN } from '@/ts/L0Entity/GameLearn/clsGameBottleEN';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { clsBottleStateEN } from '@/ts/L0Entity/SysPara/clsBottleStateEN';
  import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { BottleState_GetArrBottleState } from '@/ts/L3ForWApi/SysPara/clsBottleStateWApi';
  import { QuestionType_GetArrQuestionTypeByIsUse } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
  export default defineComponent({
    name: 'GameBottleCRUD',
    components: {
      // 组件注册
      GameBottle_EditCom,
      GameBottle_DetailCom,
      GameBottle_ListCom,
    },

    setup() {
      CourseId_Session.value = clsPubLocalStorage.courseId;
      IsUse_Static.value = true;
      const objPage = ref<GameBottleCRUDEx>();
      const objPage_Edit = ref<GameBottle_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'GameBottleCRUD';

      const arrBottleState = ref<clsBottleStateEN[] | null>([]);
      const arrQuestionType = ref<clsQuestionTypeEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_GameBottle4Func(refDivList.value);
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
        objPage_Edit.value = new GameBottle_EditEx('GameBottle_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_GameBottle(opType.value);
          if (bolIsSuccess == false) return;
          // objPage_Edit.value.SetEventFunc();
          if (['02', '03', '06'].indexOf(clsGameBottleEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new GameBottle_EditEx('GameBottle_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strFstKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        const lngBottleId = Number(strFstKeyId);
        if (lngBottleId == 0) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_GameBottle(opType.value);
          if (bolIsSuccess == false) return;

          const lngKeyId = lngBottleId;
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
        return clsGameBottleEN._CurrTabName;
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
          await objPage.value.BindGv_GameBottle4Func(divVarSet.refDivList);
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
        await objPage.value.ExportExcel_GameBottle4Func();
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const bolIsUse_Static = IsUse_Static.value; //静态变量;//静态变量

        arrBottleState.value = await BottleState_GetArrBottleState(); //查询区域

        arrQuestionType.value = await QuestionType_GetArrQuestionTypeByIsUse(bolIsUse_Static); //查询区域
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('游戏瓶维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        GameBottleCRUDEx.vuebtn_Click = btn_Click;
        GameBottleCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new GameBottleCRUDEx();
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
        GameBottleCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListGameBottle,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refGameBottle_Edit,
        refGameBottle_Detail,
        refGameBottle_List,
        userId_Throw_q,
        userName_Throw_q,
        userId_PickUp_q,
        userName_PickUp_q,
        bottleStateId_q,
        questionTypeId_q,
        arrBottleState,
        arrQuestionType,
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
        router.push({ name: 'editGameBottle', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new GameBottleCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
