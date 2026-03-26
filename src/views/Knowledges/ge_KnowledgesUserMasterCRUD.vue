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
        style="width: 800px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-left" colspan="6">
              <RadioButton :options="options" @optionSelected="handleOptionSelected"
            /></td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblMasterLevelId_q"
                name="lblMasterLevelId_q"
                class="col-form-label text-right"
                style="width: 60px"
                >等级
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlMasterLevelId_q"
                name="ddlMasterLevelId_q"
                class="form-control form-control-sm"
                style="width: 80px"
              ></select>
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
              <label id="lblQuestionTypeId_q" class="col-form-label text-right" style="width: 60px">
                题型
              </label>
            </td>
            <td class="text-left">
              <select
                v-model="questionTypeId_q"
                id="ddlQuestionTypeId_q"
                class="form-control-sm"
                style="width: 80px"
              ></select>
            </td>
            <td>
              <button
                id="btnRecommendTopics"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('RecommendTopics', '')"
                >个人推荐</button
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
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortge_KnowledgesUserMasterBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ge_KnowledgesUserMaster_EditCom
      ref="refge_KnowledgesUserMaster_Edit"
    ></ge_KnowledgesUserMaster_EditCom>
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
  import ge_KnowledgesUserMasterCRUDEx from '@/views/Knowledges/ge_KnowledgesUserMasterCRUDEx';
  import ge_KnowledgesUserMaster_EditCom from '@/views/Knowledges/ge_KnowledgesUserMaster_Edit.vue';
  import {
    CourseId_Session,
    refDivQuery,
    refDivLayout,
    refDivFunction,
    refDivList,
    refge_KnowledgesUserMaster_Edit,
  } from '@/views/Knowledges/ge_KnowledgesUserMasterVueShare';

  import { clsCboObject } from '@/ts/PubFun/clsCboObject';
  import { cc_CourseKnowledgesEx_GetKeyIdLstByKnowledgeModuleIdCache } from 'share-stu-study-base-lib';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { clscc_KnowledgeModulesEN } from 'share-stu-study-base-lib';
  import { cc_KnowledgeModules_GetObjLstAsync } from 'share-stu-study-base-lib';
  import RadioButton from '@/ts/components/ButtonRadio.vue';
  import { useUserStore } from '@/store/modulesShare/user';
  import { enumQxRoles } from 'share-gen-plat-base/src/ts/L0Entity/UserManage_GP/clsQxRolesEN';
  export default defineComponent({
    name: 'GeKnowledgesUserMasterCRUD',
    components: {
      // 组件注册
      ge_KnowledgesUserMaster_EditCom,
      RadioButton,
    },
    setup() {
      const userStore = useUserStore();
      CourseId_Session.value = clsPubLocalStorage.courseId;
      const options = ref<Array<clsCboObject>>([
        { text: 'Option 1', value: '01' },
        { text: 'Option 2', value: '02' },
        { text: 'Option 3', value: '03' },
        { text: 'Option 4', value: '04' },
        { text: 'Option 5', value: '05' },
      ]);
      const selectedOption = ref<string | null>(null);

      const handleOptionSelected = (option: string) => {
        selectedOption.value = option;
        knowledgeModuleId.value = option;
        btn_Click('Query_SetSelfPerceived', '');
        console.log('handleOptionSelected');
      };
      const knowledgeModuleId = ref('');

      const questionTypeId_q = ref('');

      const strTitle = ref('知识点用户掌握维护');

      const strRoleId = userStore.roleId;
      const loadData = async () => {
        ge_KnowledgesUserMasterCRUDEx.divQuery_SelfPerceived = refDivQuery.value;
        ge_KnowledgesUserMasterCRUDEx.vuebtn_Click = btn_Click;
        ge_KnowledgesUserMasterCRUDEx.GetPropValue = GetPropValue;

        const objPage = new ge_KnowledgesUserMasterCRUDEx();
        if (
          strRoleId == enumQxRoles.Regular_Student_00620003 ||
          enumQxRoles.High_School_Student_00620017
        ) {
          await getKnowledgeModules();
          objPage.PageLoad_SelfPerceived();
        } else {
          objPage.PageLoad();
        }
      };
      onMounted(async () => {
        // await loadData();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'knowledgeModuleId':
            return knowledgeModuleId.value;
          case 'questionTypeId_q':
            return questionTypeId_q.value;
          default:
            return '';
        }
      }

      async function getKnowledgeModules() {
        const strCourseId = clsPubLocalStorage.courseId;
        const strWhere = `${clscc_KnowledgeModulesEN.con_CourseId} = '${strCourseId}'`;
        const arrcc_KnowledgeModules = await cc_KnowledgeModules_GetObjLstAsync(strWhere);
        if (arrcc_KnowledgeModules.length == 0) return;
        knowledgeModuleId.value = arrcc_KnowledgeModules[0].knowledgeModuleId;
        console.log('knowledgeModuleId:', knowledgeModuleId.value);
        // options.value.splice(0, options.value.length);
        const newOptions: Array<clsCboObject> = new Array<clsCboObject>();
        for (const obj of arrcc_KnowledgeModules) {
          const arrKeyId = await cc_CourseKnowledgesEx_GetKeyIdLstByKnowledgeModuleIdCache(
            obj.knowledgeModuleId,
            strCourseId,
          );

          const objCbo = new clsCboObject(
            obj.knowledgeModuleId,
            `${obj.knowledgeModuleName}(${arrKeyId.length})`,
          );
          newOptions.push(objCbo);
        }
        options.value = newOptions;
        // console.log('options.value', options.value);
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
        strTitle,
        btn_Click,
        refge_KnowledgesUserMaster_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        questionTypeId_q,
        options,
        selectedOption,
        handleOptionSelected,
        knowledgeModuleId,
        loadData,
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
