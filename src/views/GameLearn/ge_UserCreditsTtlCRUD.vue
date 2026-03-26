"
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
                id="lblUserId_q"
                name="lblUserId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUserId_q"
                v-model="userId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrvge_UserCreditsLog_MaxCredits"
                  :key="index"
                  :value="item.userId"
                >
                  {{ item.userName }}
                </option></select
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
            id="lblge_UserCreditsTtlList"
            name="lblge_UserCreditsTtlList"
            class="col-form-label text-info"
            style="width: 250px"
            >用户积分汇总列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnQuery"
            name="btnQuery"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Query', '')"
            >查询</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('ExportExcel', '')"
            >导出Excel</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <ge_UserCreditsTtl_ListCom
        ref="refge_UserCreditsTtl_List"
        :items="dataListge_UserCreditsTtl"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </ge_UserCreditsTtl_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortge_UserCreditsTtlBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ge_UserCreditsTtl_EditCom ref="refge_UserCreditsTtl_Edit"></ge_UserCreditsTtl_EditCom>
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
  import { vge_UserCreditsLog_MaxCreditsEx_CopyToEx } from '@/ts/L3ForWApiEx/GameLearn/clsvge_UserCreditsLog_MaxCreditsExWApi';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refge_UserCreditsTtl_Edit,
    showErrorMessage,
    dataListge_UserCreditsTtl,
    emptyRecNumInfo,
    IdCurrEduCls_Session,
    userId_q,
    refge_UserCreditsTtl_List,
  } from '@/views/GameLearn/ge_UserCreditsTtlVueShare';
  import { ge_UserCreditsTtlCRUDEx } from '@/views/GameLearn/ge_UserCreditsTtlCRUDEx';
  import ge_UserCreditsTtl_EditCom from '@/views/GameLearn/ge_UserCreditsTtl_Edit.vue';
  import ge_UserCreditsTtl_ListCom from '@/views/GameLearn/ge_UserCreditsTtl_List.vue';
  import { clsvge_UserCreditsLog_MaxCreditsENEx } from '@/ts/L0Entity/GameLearn/clsvge_UserCreditsLog_MaxCreditsENEx';
  import { vge_UserCreditsLog_MaxCredits_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsvge_UserCreditsLog_MaxCreditsWApi';
  export default defineComponent({
    name: 'GeUserCreditsTtlCRUD',
    components: {
      // 组件注册
      ge_UserCreditsTtl_EditCom,
      ge_UserCreditsTtl_ListCom,
    },

    setup() {
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;

      const arrvge_UserCreditsLog_MaxCredits = ref<clsvge_UserCreditsLog_MaxCreditsENEx[]>([]);
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
      async function getArrvge_UserCreditsLog_MaxCredits(strIdCurrEduCls: string) {
        let arrObjLstSel = await vge_UserCreditsLog_MaxCredits_GetObjLstCache(strIdCurrEduCls);
        if (arrObjLstSel == null) return;
        let arrObjExLstSel = arrObjLstSel.map(vge_UserCreditsLog_MaxCreditsEx_CopyToEx);
        arrvge_UserCreditsLog_MaxCredits.value.length = 0;
        const obj0 = new clsvge_UserCreditsLog_MaxCreditsENEx();
        obj0.userId = '0';
        obj0.userName = '请选择v用户积分日志_最高分...';
        arrvge_UserCreditsLog_MaxCredits.value.push(obj0);
        arrObjExLstSel = arrObjExLstSel.filter((x) => x.idCurrEduCls == strIdCurrEduCls);
        arrObjExLstSel.forEach((x) => arrvge_UserCreditsLog_MaxCredits.value.push(x));
        userId_q.value = '0';
      }

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strIdCurrEduCls_Session = IdCurrEduCls_Session.value; //缓存分类变量;//在switch中未找到相关类型: tsCache(in AGC.PureClassEx.FuncParaType:GetTsTypeStr)

        await getArrvge_UserCreditsLog_MaxCredits(strIdCurrEduCls_Session); //查询区域
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('用户积分汇总维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        ge_UserCreditsTtlCRUDEx.vuebtn_Click = btn_Click;
        ge_UserCreditsTtlCRUDEx.GetPropValue = GetPropValue;
        const objPage = new ge_UserCreditsTtlCRUDEx();
        objPage.PageLoadCache();
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
        ge_UserCreditsTtlCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListge_UserCreditsTtl,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refge_UserCreditsTtl_Edit,
        userId_q,
        arrvge_UserCreditsLog_MaxCredits,
        refge_UserCreditsTtl_List,
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
        router.push({ name: 'editge_UserCreditsTtl', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new ge_UserCreditsTtlCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
