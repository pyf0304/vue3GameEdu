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

      <div style="position: relative; width: 648px; height: 27px; left: 0px; top: 0px"> </div>
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
                  id="lblAnswerContent_q"
                  name="lblAnswerContent_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >答案内容1
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtAnswerContent_q"
                  name="txtAnswerContent_q"
                  class="form-control form-control-sm"
                  style="width: 120px"
                />
              </td>
              <td class="text-left">
                <button
                  id="btnQuery"
                  name="btnQuery"
                  class="btn btn-outline-info btn-sm text-nowrap"
                  @click="btn_Click('Query', '')"
                  >查询</button
                >
              </td>
              <td class="text-left">
                <button
                  id="btnExportExcel"
                  name="btnExportExcel"
                  class="btn btn-outline-warning btn-sm text-nowrap"
                  @click="btn_Click('ExportExcel', '')"
                  >导出Excel</button
                >
              </td>
              <td class="text-left">
                <label
                  id="lblMsg_List"
                  name="lblMsg_List"
                  class="text-warning"
                  style="width: 100px"
                >
                </label>
              </td>
            </tr> </tbody
        ></table>
      </div>
      <!--功能区-->

      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblAnswerList"
              name="lblAnswerList"
              class="col-form-label text-info"
              style="width: 250px"
              >答案列表
            </label>
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
        <input id="hidSortAnswerBy" type="hidden" />
      </div>
      <!--编辑层-->
      <Answer_EditCom ref="refAnswer_Edit"></Answer_EditCom>
      <input id="hidOpType" type="hidden" />
    </div>
  </el-dialog>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { AnswerCRUDEx } from '@/views/QuestionaireEdit/AnswerCRUDEx';
  import { AnswerCRUD } from '@/viewsBase/QuestionaireEdit/AnswerCRUD';
  import Answer_EditCom from '@/views/QuestionaireEdit/Answer_Edit.vue';
  import { Answer_Edit } from '@/viewsBase/QuestionaireEdit/Answer_Edit';
  import { useRoute } from 'vue-router';
  import {
    refAnswer_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/views/QuestionaireEdit/AnswerVueShare';
  export default defineComponent({
    name: 'AnswerCRUD',
    components: {
      // 组件注册
      Answer_EditCom,
    },
    props: {
      questionId: {
        type: Number,
        required: true,
        // default: '',
      },

      questionTypeId: {
        type: String,
        required: true,
        default: '',
      },
    },
    setup(props) {
      const dialogVisible = ref(false);
      const dialogWidth = ref('1000px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('props.questionId', props.questionId);
            console.log('props.questionTypeId', props.questionTypeId);
            if (props.questionId == 0) {
              alert('相关问题Id为空，请检查！');
              return;
            }
            console.log('对话框已经显示!');

            AnswerCRUDEx.vuebtn_Click = btn_Click;
            AnswerCRUDEx.GetPropValue = GetPropValue;

            const objPage = new AnswerCRUDEx();
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

      const route = useRoute(); // 获取当前路由信息
      const strTitle = ref('答案维护');

      onMounted(() => {
        AnswerCRUDEx.vuebtn_Click = btn_Click;
        AnswerCRUDEx.GetPropValue = GetPropValue;
        // const objPage = new AnswerCRUDEx();
        // objPage.PageLoad();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'questionId':
            return props.questionId.toString();
          case 'questionTypeId':
            return props.questionTypeId;
          default:
            return '';
        }
      }
      //刷新父节点页面
      function RefreshParent() {
        // window.parent.RefreshPage();
      }
      function GetQuestionID() {
        const strQuestionId: number = Number(route.params.strQuestionId);
        const strQuestionTypeId = route.params.strQuestionTypeId?.toString();

        //传递的问题Id
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
        AnswerCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refAnswer_Edit,
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
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
