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

    <div id="divLayout0" ref="refDivLayout" class="div_layout">
      <div id="tabLayout" class="tab_layout">
        <!-- -- 标题层 -- -->
        <div class="x-nav">
          <span class="layui-breadcrumb">
            <a href="">首页</a>
            <a href="">题目</a>
            <a>
              <cite>
                <span id="lbltitle" name="lbltitle">题目选项</span>
              </cite>
            </a>
            <label id="lblMsg_List" name="lblMsg_List"></label>
          </span>
          <a
            class="layui-btn layui-btn-small"
            style="line-height: 1.6em; margin-top: 3px; float: right"
            @click="Refresh_Click()"
            title="刷新"
          >
            <i class="layui-icon layui-icon-refresh" style="line-height: 30px"></i>
          </a>
        </div>
        <!-- -- 查询层 -- -->

        <div id="divQuery" class="div_query" style="display: none">
          <table
            id="tabEdit"
            style="width: 10%"
            class="table table-bordered table-hover table td table-sm"
          >
            <tbody>
              <tr>
                <td class="text-left">
                  <input
                    id="txtOptionName_q"
                    placeholder="题目选项名称"
                    class="layui-input"
                    style="width: 200px"
                  />
                </td>
              </tr> </tbody
          ></table>
        </div>
        <!-- -- 功能区 -- -->

        <div id="divFunction" class="table table-bordered table-hover">
          <ul class="nav">
            <li class="nav-item">
              <label
                id="lblQuestionOptionsList"
                class="col-form-label text-info"
                style="width: 150px"
              >
                题目选项列表
              </label>
            </li>
            <li class="nav-item ml-3">
              <button
                id="btnCopyRecord"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('Clone', '')"
                >复制记录</button
              >
            </li>
            <li class="nav-item ml-3">
              <div class="btn-group" role="group" aria-label="Basic example">
                <select
                  id="ddlQuestionID_OrderNum"
                  class="form-control-sm"
                  style="width: 60px; display: none"
                ></select>
                <button
                  id="btnGoTop"
                  class="btn btn-outline-info btn-sm text-nowrap"
                  @click="btn_Click('GoTop', '')"
                  >移顶</button
                >
                <button
                  id="btnUpMove"
                  class="btn btn-outline-info btn-sm text-nowrap"
                  @click="btn_Click('UpMove', '')"
                  >上移</button
                >
                <button
                  id="btnDownMove"
                  class="btn btn-outline-info btn-sm text-nowrap"
                  @click="btn_Click('DownMove', '')"
                  >下移</button
                >
                <button
                  id="btnGoBottum"
                  class="btn btn-outline-info btn-sm text-nowrap"
                  @click="btn_Click('GoBottum', '')"
                  >移底</button
                >
                <button
                  id="btnReOrder"
                  class="btn btn-outline-info btn-sm text-nowrap"
                  @click="btn_Click('ReOrder', '')"
                  >重序</button
                >
              </div>
            </li>

            <li class="nav-item ml-3">
              <button
                id="btnAddNewRecordWithMaxId"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('AddNewRecordWithMaxId', '')"
                >添加-关键字自增</button
              >
            </li>
            <li class="nav-item ml-3">
              <button
                id="btnUpdateRecord"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('Update', '')"
                >修改</button
              >
            </li>
            <li class="nav-item ml-3">
              <button
                id="btnDelRecord"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('Delete', '')"
                >删除</button
              >
            </li>
            <li class="nav-item ml-3">
              <button
                id="btnAddPic"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('AddPic', '')"
                >添加图片</button
              >
            </li>
            <li class="nav-item ml-3">
              <button
                id="btnExportExcel"
                class="btn btn-outline-warning btn-sm text-nowrap"
                @click="btn_Click('ExportExcel', '')"
                >导出Excel</button
              >
            </li>
          </ul>
        </div>
        <!-- -- 列表层 -- -->
        <div id="divList_options" ref="refDivList" class="div_List">
          <div id="divDataLst" class="div_List"> </div>
          <div id="divPager" class="pager" style="display: none"> </div>
        </div>
        <!-- -- 编辑层 -- -->
        <div id="divEdit" value="1"></div>
      </div>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="hidCurrPageIndex" type="hidden" value="1" />
      <input id="hidSortQuestionOptionsBy" type="hidden" value="" />
      <input id="hidQuestionId" type="hidden" />
      <!--编辑层-->
      <QuestionOptions_EditCom ref="refQuestionOptions_Edit"></QuestionOptions_EditCom>
      <tz_ContentAttachmentListCom
        ref="reftz_ContentAttachmentList"
        :question-id="0"
        :question-option-id="questionOptionId"
        :content-type-id="'0006'"
        :title="attachmentTitle"
      ></tz_ContentAttachmentListCom>
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
  import $ from 'jquery';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { QuestionOptionsCRUDEx } from '@/views/QuestionaireEdit/QuestionOptionsCRUDEx';
  import { QuestionOptionsCRUD } from '@/viewsBase/QuestionaireEdit/QuestionOptionsCRUD';
  import QuestionOptions_EditCom from '@/views/QuestionaireEdit/QuestionOptions_Edit.vue';
  import { QuestionOptions_Edit } from '@/viewsBase/QuestionaireEdit/QuestionOptions_Edit';
  import tz_ContentAttachmentListCom from '@/viewsShare/ResourceMan/tz_ContentAttachmentList.vue';
  import { useRoute } from 'vue-router';
  import {
    GetCheckedKeyIdsInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { useQuestionOptionsStore } from '@/store/modules/questionOptions';
  import { tz_ContentAttachmentListEx } from '@/viewsShare/ResourceMan/tz_ContentAttachmentListEx';
  import {
    refQuestionOptions_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    QuestionId_Static,
    CourseId_Session,
  } from './QuestionOptionsVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  export default defineComponent({
    name: 'QuestionOptionsCRUD',
    components: {
      // 组件注册
      QuestionOptions_EditCom,
      tz_ContentAttachmentListCom,
    },
    props: {
      questionId: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      QuestionId_Static.value = props.questionId;
      CourseId_Session.value = clsPubLocalStorage.courseId;
      const questionOptionsStore = useQuestionOptionsStore();
      const attachmentTitle = ref('');
      const reftz_ContentAttachmentList = ref();
      const questionOptionId = ref('');
      const dialogVisible = ref(false);
      const dialogWidth = ref('1000px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');

            QuestionOptionsCRUDEx.vuebtn_Click = btn_Click;
            QuestionOptionsCRUDEx.GetPropValue = GetPropValue;
            window_onload();
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
      const strTitle = ref('题目选项维护');

      onMounted(() => {
        QuestionOptionsCRUDEx.vuebtn_Click = btn_Click;
        QuestionOptionsCRUDEx.GetPropValue = GetPropValue;
        // window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'questionId':
            QuestionId_Static.value = props.questionId;
            return props.questionId.toString();
          default:
            return '';
        }
      }

      /*
       页面导入-在导入页面后运行的函数
      (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
      */
      function window_onload() {
        //获取题目ID
        GetQuestionID();

        const strQuestionId = $('#hidQuestionId').val();
        if (strQuestionId == 0) {
          $('#btnAddNewRecordWithMaxId').hide();
        }

        const objPage = new QuestionOptionsCRUDEx();
        objPage.PageLoad();
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'AddPic':
            btnAddPic_Click();
            return;
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
        QuestionOptionsCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      function GetQuestionID() {
        const strQuestionId: number = props.questionId;
        //传递的问题Id
        $('#hidQuestionId').val(strQuestionId);
        $('#hidKeyId').val(strQuestionId);
      }
      function Refresh_Click() {
        alert(`Refresh_Click`);
      }
      //显示附件
      async function btnAddPic_Click() {
        //xadmin1_open('附件详情', '../ResourceMan/tz_ContentAttachmentList?str1QuestionId=' + strKeyId + '&strContentTypeId=0001', '', '', true);
        // tz_ContentAttachmentListEx.vuebtn_Click_Parent = btn_ClickV2;
        const strQuestionOptionId = GetFirstCheckedKeyIdInDivObj(refDivList.value);
        if (IsNullOrEmpty(strQuestionOptionId) == true) {
          const strMsg = '请选择需要添加图片的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        questionOptionId.value = strQuestionOptionId;
        const strOptionName = await questionOptionsStore.getOptionName(strQuestionOptionId);
        attachmentTitle.value = `题目选项内容编辑:[${strOptionName}]`;
        tz_ContentAttachmentListEx.vuebtn_Click_Parent = btn_Click;
        reftz_ContentAttachmentList.value.showDialog();
      }
      return {
        strTitle,
        btn_Click,
        refQuestionOptions_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        Refresh_Click,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        reftz_ContentAttachmentList,
        questionOptionId,
        attachmentTitle,
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
