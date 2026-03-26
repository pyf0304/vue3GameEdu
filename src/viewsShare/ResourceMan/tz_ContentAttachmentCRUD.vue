<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <div id="tabLayout" class="tab_layout">
      <!-- -- 标题层 -- -->
      <!-- -- 查询层 -- -->

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
                  id="lblid_ResourceType_q"
                  name="lblid_ResourceType_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  资源类型
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlIdResourceType_q"
                  name="ddlIdResourceType_q"
                  class="form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="nav-item ml-3">
                <button
                  id="btnQuery"
                  name="btnQuery"
                  class="btn btn-outline-info btn-sm text-nowrap"
                  @click="btn_Click('Query', '')"
                  >查询</button
                >
              </td>
              <td class="nav-item ml-3">
                <button
                  id="btnExportExcel"
                  name="btnExportExcel"
                  class="btn btn-outline-warning btn-sm text-nowrap"
                  @click="btn_Click('ExportExcel', '')"
                  >导出Excel</button
                >
              </td>
            </tr>
          </tbody></table
        >
      </div>
      <!-- -- 功能区 -- -->

      <div id="divFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lbltz_ContentAttachmentList"
              name="lbltz_ContentAttachmentList"
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

          <li class="nav-item ml-3">
            <button
              id="btnAddNewRecord"
              name="btnAddNewRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Create', '')"
              >添加</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnUpdateRecord"
              name="btnUpdateRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Update', '')"
              >修改</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnDelRecord"
              name="btnDelRecord"
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
    <!--编辑层-->
    <tz_ContentAttachment_EditCom
      ref="reftz_ContentAttachment_Edit"
      :question-id="questionId"
      :question-option-id="''"
      :content-type-id="'0001'"
      :title="attachmentTitle"
    ></tz_ContentAttachment_EditCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { tz_ContentAttachmentCRUDEx } from '@/viewsShare/ResourceMan/tz_ContentAttachmentCRUDEx';
  import tz_ContentAttachment_EditCom from '@/viewsShare/ResourceMan/tz_ContentAttachment_Edit.vue';
  import {
    reftz_ContentAttachment_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/viewsShare/ResourceMan/tz_ContentAttachmentVueShare';
  export default defineComponent({
    name: 'TzContentAttachmentCRUD',
    components: {
      // 组件注册
      tz_ContentAttachment_EditCom,
    },
    setup() {
      const strTitle = ref('内容附件维护');
      const questionId = ref(0);
      const attachmentTitle = ref('');
      onMounted(() => {
        tz_ContentAttachmentCRUDEx.vuebtn_Click = btn_Click;
        tz_ContentAttachmentCRUDEx.GetPropValue = GetPropValue;
        const objPage = new tz_ContentAttachmentCRUDEx();
        objPage.PageLoad();
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
        tz_ContentAttachmentCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        reftz_ContentAttachment_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        questionId,
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
<style scoped></style>
