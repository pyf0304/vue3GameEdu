<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <div id="divLayout" class="div_layout">
      <!-- -- 标题层 -- -->

      <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
        <label id="lblViewTitle" name="lblViewTitle" class="h5"> 学生批次题目关系CRUD </label>
        <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
        </label>
      </div>
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
                  id="lblQuestionTypeId_q"
                  name="lblQuestionTypeId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  题型
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlQuestionTypeId_q"
                  name="ddlQuestionTypeId_q"
                  class="form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="text-right">
                <label
                  id="lblCourseChapterId_q"
                  name="lblCourseChapterId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  章节
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlCourseChapterId_q"
                  name="ddlCourseChapterId_q"
                  class="form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="text-right">
                <label
                  id="lblGameLevelId_q"
                  name="lblGameLevelId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  关卡
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlGameLevelId_q"
                  name="ddlGameLevelId_q"
                  class="form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="text-right">
                <label
                  id="lblUserId_q"
                  name="lblUserId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  用户ID
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtUserId_q"
                  name="txtUserId_q"
                  class="form-control-sm"
                  style="width: 120px"
                />
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <label
                  id="lblUserName_q"
                  name="lblUserName_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  用户名
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtUserName_q"
                  name="txtUserName_q"
                  class="form-control-sm"
                  style="width: 120px"
                />
              </td>
              <td class="text-right">
                <label
                  id="lblMarkerId_q"
                  name="lblMarkerId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  打分者
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtMarkerId_q"
                  name="txtMarkerId_q"
                  class="form-control-sm"
                  style="width: 120px"
                />
              </td>
              <td class="text-right">
                <label
                  id="lblIsSubmit_q"
                  name="lblIsSubmit_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  是否提交
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlbIsSubmit_q"
                  name="ddlbIsSubmit_q"
                  class="form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="text-right">
                <label
                  id="lblIsMarking_q"
                  name="lblIsMarking_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  是否批阅
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlbIsMarking_q"
                  name="ddlbIsMarking_q"
                  class="form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="text-right">
                <label
                  id="lblIsHasAnswer_q"
                  name="lblIsHasAnswer_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >有答案?
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlbIsHasAnswer_q"
                  name="ddlbIsHasAnswer_q"
                  class="form-control form-control-sm"
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

      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblge_StuBatchQuesRelaList"
              name="lblge_StuBatchQuesRelaList"
              class="col-form-label text-info"
              style="width: 250px"
            >
              学生批次题目关系列表
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
        </ul>
      </div>
      <!-- -- 列表层 -- -->
      <div id="divList" ref="refDivList" class="div_List">
        <div id="divDataLst" class="div_List"> </div>
        <div id="divPager" class="pager"> </div>
      </div>
      <!-- -- 编辑层 -- -->
      <div id="divEdit" value="1"></div>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <!--编辑层-->

    <ge_StuBatchQuesRela_EditCom ref="refge_StuBatchQuesRela_Edit"></ge_StuBatchQuesRela_EditCom>
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
  import { ge_StuBatchQuesRelaCRUDEx } from '@/views/InteractManage/ge_StuBatchQuesRelaCRUDEx';
  import { ge_StuBatchQuesRelaCRUD } from '@/viewsBase/InteractManage/ge_StuBatchQuesRelaCRUD';
  import ge_StuBatchQuesRela_EditCom from '@/views/InteractManage/ge_StuBatchQuesRela_Edit.vue';
  import { ge_StuBatchQuesRela_Edit } from '@/viewsBase/InteractManage/ge_StuBatchQuesRela_Edit';
  import {
    refge_StuBatchQuesRela_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from './ge_StuBatchQuesRelaVueShare';
  export default defineComponent({
    name: 'GeStuBatchQuesRelaCRUD',
    components: {
      // 组件注册
      ge_StuBatchQuesRela_EditCom,
    },
    setup() {
      const strTitle = ref('学生批次题目关系维护');

      onMounted(() => {
        ge_StuBatchQuesRelaCRUDEx.vuebtn_Click = btn_Click;
        ge_StuBatchQuesRelaCRUDEx.GetPropValue = GetPropValue;
        const objPage = new ge_StuBatchQuesRelaCRUDEx();
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
        ge_StuBatchQuesRelaCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refge_StuBatchQuesRela_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
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
