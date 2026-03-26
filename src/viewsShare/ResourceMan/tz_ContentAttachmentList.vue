<template>
  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!-- 使用头部插槽来自定义对话框的标题 -->
    <template #header>
      <div class="custom-header">
        <h4>{{ strTitle }}</h4>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>

    <div id="divLayout" ref="refDivLayout" class="div_layout">
      <div id="tabLayout" class="tab_layout">
        <!-- -- 标题层 -- -->

        <div id="divQuestionAttachmentShow" ref="divQuestionAttachmentShow" style="width: 98%">
        </div>
        <!-- -- 查询层 -- -->

        <div id="divQuery" ref="refDivQuery" class="div_query" style="display: none">
          <table
            id="tabEdit"
            style="width: 900px"
            class="table table-bordered table-hover table td table-sm"
          >
            <tbody>
              <tr>
                <td class="text-right">
                  <label
                    id="lblid_ResourceType_q"
                    class="col-form-label text-right"
                    style="width: 90px"
                  >
                    资源类型
                  </label>
                </td>
                <td class="text-left">
                  <select
                    id="ddlIdResourceType_q"
                    class="form-control-sm"
                    style="width: 120px"
                  ></select>
                </td>
                <td class="nav-item ml-3">
                  <button
                    id="btnQuery"
                    class="btn btn-outline-info btn-sm text-nowrap"
                    @click="btn_Click('Query', '')"
                    >查询</button
                  >
                </td>
              </tr>
            </tbody></table
          >
        </div>
        <!-- -- 功能区 -- -->

        <div id="divFunction" class="table table-bordered table-hover" style="float: left">
          <ul class="nav">
            <li class="nav-item">
              <label
                id="lbltz_ContentAttachmentList"
                class="col-form-label text-info"
                style="width: 250px"
              >
                内容附件列表
              </label>
            </li>
            <li class="nav-item ml-3">
              <div class="btn-group" role="group" aria-label="Basic example">
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
                id="btnAddNewRecord"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('Create', '')"
                >添加</button
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
          </ul>
        </div>
        <!-- -- 列表层 -- -->
        <div id="divList" ref="refDivList" class="div_List">
          <div id="divDataLst" class="div_List"> </div>
          <div id="divPager" class="pager"> </div>
        </div>
        <!-- -- 编辑层 -- -->
        <div id="divEdit" value="1"></div>
      </div>
      <input id="hidOpType" type="hidden" />

      <input id="hidCurrPageIndex" type="hidden" value="1" />
      <input id="hidSorttz_ContentAttachmentBy" type="hidden" value="" />

      <!-- -- 问题ID，问题类型参数传递 -- -->
      <!--编辑层-->
      <tz_ContentAttachment_EditCom
        ref="reftz_ContentAttachment_Edit"
        :content-type-id="contentTypeId"
        :question-id="questionId"
        :question-option-id="questionOptionId"
      ></tz_ContentAttachment_EditCom>
    </div>
  </el-dialog>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import $ from 'jquery';
  import tz_ContentAttachment_EditCom from '@/viewsShare/ResourceMan/tz_ContentAttachment_Edit.vue';
  import { useRoute } from 'vue-router';
  import { tz_ContentAttachmentListEx } from '@/viewsShare/ResourceMan/tz_ContentAttachmentListEx';
  import {
    reftz_ContentAttachment_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from './tz_ContentAttachmentVueShare';
  import { divQuestionAttachmentShow } from '@/viewsShare/ResourceMan/tz_ContentAttachmentListVueShare';
  export default defineComponent({
    name: 'TzContentAttachmentCRUD',
    components: {
      // 组件注册
      tz_ContentAttachment_EditCom,
    },
    //   const strQuestionId: number = route.params.strQuestionId?.toString();
    //     const strContentTypeId = route.params.strContentTypeId?.toString();
    props: {
      questionId: {
        type: Number,
        required: true,
        // default: '',
      },
      questionOptionId: {
        type: String,
        required: true,
        // default: '',
      },

      contentTypeId: {
        type: String,
        required: true,
        default: '',
      },
      title: {
        type: String,
        required: true,
        default: '内容附件',
      },
    },
    setup(props) {
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!' + props.questionId);

            strTitle.value = props.title;
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
      const strTitle = ref('内容附件维护-List');

      onMounted(() => {
        tz_ContentAttachmentListEx.vuebtn_Click = btn_Click;
        tz_ContentAttachmentListEx.GetPropValue = GetPropValue;
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'questionId':
            return props.questionId.toString();
          case 'questionOptionId':
            return props.questionOptionId;
          case 'contentTypeId':
            return props.contentTypeId;
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
        tz_ContentAttachmentListEx.btn_Click(strCommandName, strKeyId);
      }

      //刷新父节点页面
      function RefreshParent() {
        // window.parent.RefreshPage();
      }

      function CloseWindow() {
        try {
          // window.parent.onload();
          // }
        } catch (e) {
          window.opener.location = '父页面地址';
          window.opener = null;

          window.close();
        }
      }

      /*
       页面导入-在导入页面后运行的函数
      (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
      */
      function window_onload() {
        const strQuestionId = props.questionId;
        const strQuestionOptionId = props.questionOptionId;

        switch (props.contentTypeId) {
          case '0001':
            if (strQuestionId == 0) {
              $('#btnAddNewRecord').hide();
            }
            break;
          case '0006':
            if (strQuestionOptionId == '') {
              $('#btnAddNewRecord').hide();
            }

            break;
        }

        const objPage = new tz_ContentAttachmentListEx();
        objPage.PageLoad();
      }

      return {
        strTitle,
        btn_Click,
        reftz_ContentAttachment_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        divQuestionAttachmentShow,
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
  .modal-dialog {
    max-width: 1200px;
    margin: 1.75rem auto;
  }
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

<!-- Layout = "~/Pages/Shared/_Layout_PC.cshtml";
    ViewData["Title"] = "内容附件维护";

<link rel="stylesheet" href="../lib/bootstrap/dist/css/bootstrap.css" />
<link rel="stylesheet" href="../css/site.css" />
<link rel="shortcut icon" href="~/images/favicon.ico" type="image/x-icon" />

<link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
<link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">

<link rel="stylesheet" type="text/css" href="../css/SimpleTree.css">
<link rel="stylesheet" type="text/css" href="../css/public.css">



<script src="../lib/jquery/dist/jquery.js"></script>
<script src="~/lib/xlsx.core.min.js" type="text/javascript"></script>
<script src="~/lib/xlsx.full.min.js" type="text/javascript"></script>

<script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
<script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script> -->
