<template>
  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!-- 使用头部插槽来自定义对话框的标题 -->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>

    <div id="divLayout" ref="refDivLayout" class="div_layout">
      <!--标题层-->

      <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
        <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
        <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
        </label>
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
                  id="lblControlTypeId_q"
                  name="lblControlTypeId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >控件
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlControlTypeId_q"
                  name="ddlControlTypeId_q"
                  class="form-control form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="text-right">
                <label
                  id="lblEventTypeId_q"
                  name="lblEventTypeId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >事件
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlEventTypeId_q"
                  name="ddlEventTypeId_q"
                  class="form-control form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
            </tr> </tbody
        ></table>
      </div>
      <!--功能区-->

      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblge_ExaminationCriteriaList"
              name="lblge_ExaminationCriteriaList"
              class="col-form-label text-info"
              style="width: 250px"
              >题目检查标准表列表
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
              id="btnCreateWithMaxId"
              name="btnCreateWithMaxId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('CreateWithMaxId', '')"
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
          <li class="nav-item ml-3">
            <button
              id="btnClone"
              name="btnClone"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Clone', '')"
              >复制</button
            >
          </li>
          <li class="nav-item ml-3">
            <div class="btn-group" role="group" aria-label="Basic example">
              <select
                id="ddlQuestionId_OrderNum"
                name="ddlQuestionId_OrderNum"
                class="form-control form-control-sm"
                style="width: 60px"
              ></select>
              <button
                id="btnGoTop"
                name="btnGoTop"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('GoTop', '')"
                >移顶</button
              >
              <button
                id="btnUpMove"
                name="btnUpMove"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('UpMove', '')"
                >上移</button
              >
              <button
                id="btnDownMove"
                name="btnDownMove"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('DownMove', '')"
                >下移</button
              >
              <button
                id="btnGoBottum"
                name="btnGoBottum"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('GoBottum', '')"
                >移底</button
              >
              <button
                id="btnReOrder"
                name="btnReOrder"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('ReOrder', '')"
                >重序</button
              >
            </div>
          </li>
        </ul>
      </div>
      <!--列表层-->
      <div id="divList" ref="refDivList" class="div_List">
        <div id="divDataLst" class="div_List"> </div>
        <div id="divPager" class="pager"> </div>
        <input id="hidSortge_ExaminationCriteriaBy" type="hidden" />
      </div>
      <!--编辑层-->
      <ge_ExaminationCriteria_EditCom
        ref="refge_ExaminationCriteria_Edit"
      ></ge_ExaminationCriteria_EditCom>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
  </el-dialog>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { ge_ExaminationCriteriaCRUDEx } from '@/views/GameLearn/ge_ExaminationCriteriaCRUDEx';
  import { ge_ExaminationCriteriaCRUD } from '@/viewsBase/GameLearn/ge_ExaminationCriteriaCRUD';
  import ge_ExaminationCriteria_EditCom from '@/views/GameLearn/ge_ExaminationCriteria_Edit.vue';
  import { ge_ExaminationCriteria_Edit } from '@/viewsBase/GameLearn/ge_ExaminationCriteria_Edit';
  import {
    divVarSet,
    refge_ExaminationCriteria_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/views/GameLearn/ge_ExaminationCriteriaVueShare';
  export default defineComponent({
    name: 'GeExaminationCriteriaCRUD',
    components: {
      // 组件注册
      ge_ExaminationCriteria_EditCom,
    },
    setup() {
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');

            ge_ExaminationCriteriaCRUDEx.vuebtn_Click = btn_Click;
            ge_ExaminationCriteriaCRUDEx.GetPropValue = GetPropValue;
            const objPage = new ge_ExaminationCriteriaCRUDEx();
            objPage.PageLoad();
          }, 1000);
        });
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      const strTitle = ref('题目检查标准表维护');

      onMounted(() => {
        ge_ExaminationCriteriaCRUDEx.vuebtn_Click = btn_Click;
        ge_ExaminationCriteriaCRUDEx.GetPropValue = GetPropValue;
        // const objPage = new ge_ExaminationCriteriaCRUDEx();
        // objPage.PageLoad();
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
        ge_ExaminationCriteriaCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refge_ExaminationCriteria_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
