<template>
  <div id="divLayout_KnowledgeMaster" ref="refDivLayout">
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          data-bs-toggle="tab"
          role="tab"
          href="#KnowledgeModulesGoal"
          @click="KnowledgeModulesGoal_Click()"
          >模块目标</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-bs-toggle="tab"
          role="tab"
          href="#KnowledgeModulesSelfPerc"
          @click="KnowledgeModulesSelfPerc_Click()"
          >模块自认值</a
        >
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          data-bs-toggle="tab"
          role="tab"
          href="#KnowledgeGoal"
          @click="loadKnowledgeGoal"
          >知识点目标</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-bs-toggle="tab"
          role="tab"
          href="#Knowledge_User"
          @click="loadKnowledge_User"
          >个人知识点状况</a
        >
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          data-bs-toggle="tab"
          role="tab"
          href="#Knowledge_Cls"
          @click="loadKnowledge_Cls"
          >全班知识点</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-bs-toggle="tab"
          role="tab"
          href="#KnowledgeRadarChart"
          @click="KnowledgeMasterChart_Click()"
          >个人知识点逻辑图</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-bs-toggle="tab"
          role="tab"
          href="#KnowledgeSocialComparisonChart"
          @click="KnowledgeMasterSocialComparisonChart_Click()"
          >社会比较图</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-bs-toggle="tab"
          role="tab"
          href="#KnowledgeReflectLog"
          @click="KnowledgeReflectLog_Click()"
          >反思</a
        >
      </li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <div id="KnowledgeModulesGoal" class="tab-pane fade show active">
        <ge_KMLearningGoalsCRUD_EditCom
          ref="refge_KMLearningGoalsCRUD_Edit"
          :dimensions="dimensions"
          :edit-fld-name="editFldName_Goal"
        ></ge_KMLearningGoalsCRUD_EditCom>
      </div>

      <div id="KnowledgeModulesSelfPerc" class="tab-pane fade show">
        <ge_KMLearningGoalsCRUD_SelfPerceivedCom
          ref="refge_KMLearningGoalsCRUD"
          :dimensions="dimensions"
          :edit-fld-name="editFldName_SelfPerc"
        ></ge_KMLearningGoalsCRUD_SelfPerceivedCom>
      </div>
      <div id="KnowledgeGoal" class="tab-pane fade show">
        <ge_KnowledgesUserMasterCRUD_EditCom
          ref="refge_KnowledgesUserMasterCRUD_Edit"
          :dimensions="dimensions"
        ></ge_KnowledgesUserMasterCRUD_EditCom>
      </div>
      <div id="Knowledge_User" class="tab-pane fade show">
        <ge_KnowledgesUserMasterCRUDCom
          ref="refge_KnowledgesUserMasterCRUD"
          :dimensions="dimensions"
        ></ge_KnowledgesUserMasterCRUDCom>
      </div>

      <div id="Knowledge_Cls" class="tab-pane fade show">
        <div id="tabLayout" class="tab_layout">
          <!-- 查询层  -->
          <div id="divQuery" ref="refDivQuery" class="div_query">
            <table
              id="tabEdit"
              style="width: 800px"
              class="table table-bordered table-hover table td table-sm"
            >
              <tbody>
                <tr>
                  <td class="text-right" style="width: 80px">
                    <label
                      id="lblMasterLevelId_q"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      掌握度
                    </label>
                  </td>
                  <td class="text-left" style="width: 120px">
                    <select
                      id="ddlMasterLevelId_q_Cls"
                      v-model="masterLevelId_q_Cls"
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
                  <td class="text-right">
                    <label
                      v-show="isTeacher == true"
                      id="lblQuestionTypeId_q"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      题型
                    </label>
                  </td>
                  <td class="text-left">
                    <select
                      id="ddlQuestionTypeId_q_Cls"
                      v-model="questionTypeId_q_Cls"
                      class="form-control"
                      style="width: 70px"
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
                  <td>
                    <button
                      v-show="isTeacher == true"
                      id="btnRecommendTopics"
                      class="btn btn-outline-info btn-sm text-nowrap"
                      @click="btn_Click('RecommendTopics_Cls', '')"
                      >教师推荐</button
                    >
                  </td>
                  <td>
                    <button
                      id="btnQuery"
                      class="btn btn-outline-info btn-sm text-nowrap"
                      @click="btn_Click('Query_Cls', '')"
                      >查询</button
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 列表层  -->
          <div id="divList_Cls" ref="refDivList_Cls" class="div_List">
            <div id="divDataLst" class="div_List"> </div>
            <div id="divPager" class="pager"> </div>
          </div>
        </div>
      </div>
      <div id="KnowledgeRadarChart" class="tab-pane fade">
        <table
          v-show="isTeacher == true"
          id="tabChart"
          style="width: 800px"
          class="table table-bordered table-hover table td table-sm"
        >
          <tbody>
            <tr>
              <td class="text-right" style="width: 80px">
                <label
                  id="lblMasterLevelId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  学生
                </label>
              </td>
              <td class="text-left" style="width: 120px">
                <select
                  v-model="idStudentInfo"
                  ref="refddlIdStu_q"
                  id="ddlIdStu_q"
                  class="form-control-sm"
                  style="width: 120px"
                ></select>
              </td>

              <td>
                <button
                  id="btnQuery"
                  class="btn btn-outline-info btn-sm text-nowrap"
                  @click="btn_Click('Query_Chart', '')"
                  >查询</button
                >
              </td>
              <td>
                <button
                  v-show="isTeacher == true"
                  id="btnRecommendTopics"
                  class="btn btn-outline-info btn-sm text-nowrap"
                  @click="btn_Click('RecommendTopics_Cls', '')"
                  >教师推荐</button
                >
              </td>
            </tr>
          </tbody></table
        >

        <GeKnowledgesUserMaster_RadarChartCom
          ref="refGeKnowledgesUserMaster_RadarChart"
          :dimensions="dimensions"
        ></GeKnowledgesUserMaster_RadarChartCom>
      </div>
      <div id="KnowledgeSocialComparisonChart" class="tab-pane fade">
        <GeKnowledgesUserMaster_SocialComparisonChartCom
          ref="refGeKnowledgesUserMaster_SocialComparisonChart"
          :dimensions="dimensions"
        ></GeKnowledgesUserMaster_SocialComparisonChartCom>
      </div>

      <!-- <div id="KnowledgeReflectLog" class="tab-pane fade">
        <gs_ReflectLogCRUDCom
          ref="refgs_ReflectLogCRUD"
          :inPassGame="'true'"
        ></gs_ReflectLogCRUDCom>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import { defineComponent, onMounted, ref } from 'vue';

  import router from '@/router';

  import {
    CourseId_Session,
    refDivQuery,
    refDivLayout,
    refDivFunction,
    refDivList,
  } from '@/views/Knowledges/ge_KnowledgesUserMasterVueShare';

  import { PassGame_KnowledgeMaster } from '@/views/web/PassGame_KnowledgeMaster';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { clsge_KMLearningGoalsEN } from '@/ts/L0Entity/Knowledges/clsge_KMLearningGoalsEN';
  import { message } from '@/utils/myMessage';
  import { useUserStore } from '@/store/modulesShare/user';

  import { enumQxRoles } from 'share-gen-plat-base/src/ts/L0Entity/UserManage_GP/clsQxRolesEN';
  import ge_KMLearningGoalsCRUD_EditCom from '@/views/Knowledges/ge_KMLearningGoalsCRUD_Edit.vue';
  import ge_KMLearningGoalsCRUD_SelfPerceivedCom from '@/views/Knowledges/ge_KMLearningGoalsCRUD_SelfPerceived.vue';

  import ge_KnowledgesUserMasterCRUD_EditCom from '@/views/Knowledges/ge_KnowledgesUserMasterCRUD_Edit.vue';
  import ge_KnowledgesUserMasterCRUDCom from '@/views/Knowledges/ge_KnowledgesUserMasterCRUD.vue';
  // import gs_ReflectLogCRUDCom from '@/viewsShare/GradEduTopic/gs_ReflectLogCRUD.vue';
  import GeKnowledgesUserMaster_RadarChartCom from '@/views/Knowledges/ge_KnowledgesUserMaster_RadarChart.vue';
  import GeKnowledgesUserMaster_SocialComparisonChartCom from '@/views/Knowledges/ge_KnowledgesUserMaster_SocialComparisonChart.vue';
  import {
    questionTypeId_q_Cls,
    refDivList_Cls,
  } from '@/views/web/PassGame_KnowledgeMasterVueShare';
  import { clsKnowledgeMasterLevelEN } from 'share-stu-study-base-lib';
  import { masterLevelId_q_Cls } from '@/views/web/BasicknowledgeVueShare';
  import { KnowledgeMasterLevel_GetArrKnowledgeMasterLevel } from 'share-stu-study-base-lib';
  import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { QuestionTypeEx_GetDdlDataCacheEx } from '@/ts/L3ForWApiEx/SystemSet/clsQuestionTypeExWApi';

  export default defineComponent({
    name: 'PassGame_KnowledgeMaster',
    components: {
      // 组件注册
      ge_KMLearningGoalsCRUD_EditCom,
      ge_KMLearningGoalsCRUD_SelfPerceivedCom,
      ge_KnowledgesUserMasterCRUD_EditCom,
      ge_KnowledgesUserMasterCRUDCom,

      // gs_ReflectLogCRUDCom,
      GeKnowledgesUserMaster_RadarChartCom,
      GeKnowledgesUserMaster_SocialComparisonChartCom,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const userStore = useUserStore();
      CourseId_Session.value = clsPubLocalStorage.courseId;

      const arrKnowledgeMasterLevel = ref<clsKnowledgeMasterLevelEN_T[] | null>([]);
      const arrQuestionType = ref<clsQuestionTypeEN[] | null>([]);

      const idStudentInfo = ref('');
      const isTeacher = ref(false);
      const isForCls = ref(''); //是否针对整个班级
      const refddlIdStu_q = ref();
      const refSpiderChart = ref();
      const refge_KMLearningGoalsCRUD = ref();
      const refge_KMLearningGoalsCRUD_Edit = ref();
      const refge_KnowledgesUserMasterCRUD_Edit = ref();
      const refge_KnowledgesUserMasterCRUD = ref();
      const questionTypeId_q = ref('');
      const refKnowledgeMasterChart = ref();
      const refGeKnowledgesUserMaster_RadarChart = ref();
      const refGeKnowledgesUserMaster_SocialComparisonChart = ref();
      const editFldName_Goal = ref('goalValue');
      const editFldName_SelfPerc = ref('selfPerceivedValue');
      const dimensions = ref([
        { name: '计算机软件', value: 80 },
        { name: '计算机组成', value: 60 },
        { name: '二进制', value: 55 },
        { name: '数字编码', value: 87 },
        { name: '文件夹', value: 95 },
      ]);
      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        // arrKnowledgeMasterType.value = await KnowledgeMasterType_GetArrKnowledgeMasterType(); //查询区域
        // masterTypeId_q.value = '0';

        arrKnowledgeMasterLevel.value = await KnowledgeMasterLevel_GetArrKnowledgeMasterLevel(); //查询区域
        masterLevelId_q_Cls.value = '0';

        arrQuestionType.value = await QuestionTypeEx_GetDdlDataCacheEx(); //查询区域
        questionTypeId_q_Cls.value = '0';
      }

      async function getUserMasterKnowledgeBak() {
        const objPage = new PassGame_KnowledgeMaster();
        // ge_UserCreditsLogCRUD.divList = refDivList.value;
        await objPage.btnQuery_Click();

        await objPage.btnQuery_Cls_Click();

        const dimensions0 = await objPage.getUserMasterKnowledge();
        if (dimensions0 == null) return;
        // dimensions = dimensions0;
        dimensions.value.splice(0, dimensions.value.length);
        for (const objDimension of dimensions0) {
          dimensions.value.push(objDimension);
        }
        // refSpiderChart.value.drawRadarChart0(dimensions.value);
      }
      function KnowledgeModulesGoal_Click() {
        editFldName_Goal.value = clsge_KMLearningGoalsEN.con_GoalValue;
        refge_KMLearningGoalsCRUD_Edit.value.loadData('KnowledgeGoal');
      }
      function KnowledgeModulesSelfPerc_Click() {
        editFldName_SelfPerc.value = clsge_KMLearningGoalsEN.con_SelfPerceivedValue;
      }
      //知识点掌握逻辑图
      function KnowledgeMasterChart_Click() {
        refGeKnowledgesUserMaster_RadarChart.value.showRadar();
      }
      function KnowledgeMasterSocialComparisonChart_Click() {
        refGeKnowledgesUserMaster_SocialComparisonChart.value.showRadar();
      }

      function KnowledgeReflectLog_Click() {
        // refgs_ReflectLogCRUD.value.showList();
      }
      async function getUserMasterKnowledgeByIdStudentInfo() {
        if (idStudentInfo.value == '' || idStudentInfo.value == '0') {
          const ddlIdStu_q = refddlIdStu_q.value as HTMLSelectElement;
          ddlIdStu_q.focus();
          message.warning('请选择一个学生！');
          return;
        }
        const objPage = new PassGame_KnowledgeMaster();
        // objPage.btnQuery_Click();
        const dimensions0 = await objPage.getUserMasterKnowledgeByIdStudentInfo(
          idStudentInfo.value,
        );
        if (dimensions0 == null) return;
        // dimensions = dimensions0;
        dimensions.value.splice(0, dimensions.value.length);
        for (const objDimension of dimensions0) {
          dimensions.value.push(objDimension);
        }
        refSpiderChart.value.drawRadarChart0(dimensions.value);
      }
      // const refKnowledgeMasterChart = ref();
      onMounted(async () => {
        BindDdl4QryRegion();
        if (
          userStore.getRoleId == enumQxRoles.Regular_Student_00620003 ||
          userStore.getRoleId == enumQxRoles.High_School_Student_00620017
        ) {
          isTeacher.value = false;
        } else {
          isTeacher.value = true;
        }
        PassGame_KnowledgeMaster.vuebtn_Click = btn_Click;
        PassGame_KnowledgeMaster.GetPropValue = GetPropValue;
        await KnowledgeModulesGoal_Click();
        // const objPage = new PassGame_KnowledgeMaster();
        // objPage.PageLoad();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'title':
            return props.title;
          case 'questionTypeId_q':
            return questionTypeId_q.value;
          case 'isForCls':
            return isForCls.value;
          default:
            return '';
        }
        return '';
      }
      function btnQuery() {
        isForCls.value = 'false';
        const objPage = new PassGame_KnowledgeMaster();
        objPage.btnQuery_Click();
      }
      function loadKnowledgeGoal() {
        refge_KnowledgesUserMasterCRUD_Edit.value.loadData('KnowledgeGoal');
      }
      function loadKnowledge_User() {
        refge_KnowledgesUserMasterCRUD.value.loadData('Knowledge_User');
      }
      function loadKnowledge_Cls() {
        console.log('loadKnowledge_Cls');
        const objPage: PassGame_KnowledgeMaster = new PassGame_KnowledgeMaster();
        objPage.btnQuery_Cls_Click();
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'Query_Chart':
            getUserMasterKnowledgeByIdStudentInfo();
            return;
          case 'Query_Cls':
            isForCls.value = 'true';
            // PassGameEx.divList_Cls = refDivList_Cls.value;
            break;
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;

          case 'liPaper':
            router.push('/about');
            console.log("router.push('/about');");
            // router.push({ name: 'myabout' });
            // console.log("router.push({ name: 'myabout' });");
            break;
          default:
            break;
        }
        PassGame_KnowledgeMaster.btn_Click(strCommandName, strKeyId);
      }
      //展示习题信息

      return {
        isTeacher,
        idStudentInfo,
        questionTypeId_q,
        refddlIdStu_q,
        editFldName_Goal,
        editFldName_SelfPerc,
        refSpiderChart,
        refge_KMLearningGoalsCRUD,
        refge_KMLearningGoalsCRUD_Edit,
        refge_KnowledgesUserMasterCRUD,
        refge_KnowledgesUserMasterCRUD_Edit,
        dimensions,
        isForCls,
        refKnowledgeMasterChart,
        refGeKnowledgesUserMaster_RadarChart,
        refGeKnowledgesUserMaster_SocialComparisonChart,
        KnowledgeModulesGoal_Click,
        KnowledgeModulesSelfPerc_Click,
        KnowledgeMasterChart_Click,
        KnowledgeMasterSocialComparisonChart_Click,

        KnowledgeReflectLog_Click,
        getUserMasterKnowledgeBak,
        btn_Click,
        refDivList,
        refDivLayout,
        refDivList_Cls,
        loadKnowledgeGoal,
        loadKnowledge_User,
        loadKnowledge_Cls,
        arrKnowledgeMasterLevel,
        masterLevelId_q_Cls,
        arrQuestionType,
        questionTypeId_q_Cls,
      };
    },
    methods: {},
  });
</script>

<style lang="less" scoped>
  .myTitle {
    font-size: 1.05rem; /* 设置标题字体大小 */
    font-weight: bold; /* 设置标题字体粗细 */
    line-height: 1.5; /*设置内容行高 */
    color: #333; /* 设置标题字体颜色 */
    /* 其他标题样式 */
  }

  .myContent {
    font-size: 1.05rem; /* 设置内容字体大小 */
    line-height: 1.5; /*设置内容行高 */
    margin-top: 2px;
    color: #666; /* 设置内容字体颜色 */
    /* 其他内容样式 */
  }
  .subDiv {
    margin-bottom: 10px !important; /* 设置子层之间的下边距为 10px */
    margin-top: 10px;
  }
  .box1 {
    margin-bottom: 10px;
  }

  .box4 {
    padding: 10px 10px 0px 10px;
    background-color: white;
    border-left: solid 1px #dbdcde;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-radius: 7px 4px 4px 2px;
    margin-bottom: 8px;
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0px;
    margin-left: 0px;
    padding-top: 5px;
    background-color: white;
    border-radius: 4px 4px 4px 2px;
    line-height: 3;
  }

  .alert {
    position: relative;
    padding: 0.55rem 1.25rem;
    margin-bottom: 0.5rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }

  .carousel-inner img {
    width: 1000px;
    height: 300px;
  }

  .slider {
    width: 100%;
    min-width: 1000px;
    height: 305px;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  #demo {
    width: 1000px;
    height: 305px;
    margin: 0 auto;
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: red;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    font-weight: bold;
    font-size: 15px;
  }
  /********************************左边导航********************************/
  .leftNav {
    padding: 20px;
    width: 200px;
    height: 650px;
    overflow: hidden;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-top: solid 1px #dededf;
    border-left: solid 1px #dbdcde;
    /*border-radius: 7px 4px 4px 2px;*/
    border-radius: 2px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: left;
    background: #fff;
    font-size: 16px;
  }
  /********************************右边内容********************************/
  .rightContent {
    /*width: 690px;*/
    width: calc(100% - 210px);
    background: #fff;
    min-height: 650px;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-bottom: solid 1px #dbdcde;
    border-top: solid 1px #dededf;
    border-left: solid 1px #dbdcde;
    border-radius: 7px 4px 4px 2px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: right;
  }

  .divTree {
    /*margin-left: 10px;*/
    padding-top: 10px;
    width: 24%;
    font-size: 17px;
    min-height: 300px;
    overflow: hidden;
    /*overflow-y:scroll;*/
    overflow-y: auto;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-radius: 10px 8px 8px 4px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: left;
    background: #fff;
    font-family: 'Microsoft YaHei';
  }

  .divTree3 {
    border: solid 1px #fff;
    margin: 10px;
    /*bottom: 5%;*/
    z-index: 999;
    background: whitesmoke;
  }

  .MeetingTree {
    margin-top: 10px;
    width: 100%;
    min-height: 200px;
    border-radius: 10px 8px 8px 4px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    background-color: whitesmoke;
  }

  .breadcrumb {
    padding: 8px 15px;
    margin-bottom: 0px;
    list-style: none;
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  .rightContent .content {
    overflow: hidden;
    width: 100%;
    /* height: 580px; */
    padding: 0px;
    font-size: 15px;
  }

  .divQuestionPager {
    width: 650px;
    float: right;
  }
  /*分页样式*/
  .page_list1 {
    /*position: fixed;
                  right: 200px;
                  top: 203px;*/
    z-index: 999;
    width: 100%;
    text-align: right;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background-color: white;
    /*border: 1px solid #ddd;*/
    padding-left: 10px;
  }

  .page_list2 {
    position: fixed;
    right: 200px;
    top: 0px;
    z-index: 999;
    width: 700px;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background-color: white;
    padding-left: 10px;
  }
  .divParent {
    display: flex;
    flex-direction: column;
  }
  .modal {
    display: none;
  }

  .modal.show {
    display: block;
  }
</style>
