<template>
  <!-- 编辑层 -->

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

    <div id="tabLayout" ref="refDivLayout" class="tab_layout">
      <!-- 网页内容信息 -->

      <div class="box1">
        <div id="SingleChallengeDetails">
          <div style="width: 100%; margin-top: 0px; height: 50px; line-height: 50px">
            <div
              style="float: left; width: 60%; font-size: 20px; color: Highlight; padding-left: 20px"
            >
              <span id="QuestionTitle"></span>
            </div>
            <div id="page_list"> </div>
          </div>
          <div id="div_StructureChart" class="rightDetails"> </div>
        </div>
      </div>

      <input id="hidCurrPageIndex" type="hidden" value="1" />
      <input id="hidSortQuestionnaireBy" type="hidden" />

      <input id="hidRecCount" type="hidden" value="0" />

      <input id="hidDifficultyLevelId" type="hidden" />
      <input id="hidQuestionTypeId" type="hidden" />
      <input id="hidQuestionNum" type="hidden" />
      <input id="hidGameLevelId" type="hidden" />
      <input id="hidGameLevelName" type="hidden" />

      <input id="hidarrQuestionID" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelQuestionOptions" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { KnowledgeGraph } from '@/viewsShare/LearnChart/KnowledgeGraph';
  import { GetInputValueInDivObjN } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { StructureChartQuestion } from '@/viewsShare/LearnChart/StructureChartQuestion';
  import {
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from './StructureChartQuestionVueShare';
  export default defineComponent({
    name: 'QuestionnaireHistory',
    components: {
      // 组件注册
    },
    props: {
      difficultyLevelId: {
        type: String,
        required: true,
        // default: '',
      },

      questionTypeId: {
        type: String,
        required: true,
        default: '',
      },
      questionNum: {
        type: Number,
        required: true,
        // default: '',
      },
      gameLevelId: {
        type: String,
        required: true,
        default: '',
      },
      gameLevelName: {
        type: String,
        required: true,
        default: '',
      },
      levelModeTypeId: {
        type: String,
        required: true,
        default: '',
      },
    },
    setup(props) {
      const strTitle = ref('知识结构图题目-游戏化教育平台');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQuestionOptions':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitQuestionOptions':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQuestionOptions':
            return strCancelButtonText.value;
          case 'btnSubmitQuestionOptions':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
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
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'difficultyLevelId':
            return props.difficultyLevelId;
          case 'questionTypeId':
            return props.questionTypeId;
          case 'questionNum':
            return props.questionNum.toString();
          case 'gameLevelId':
            return props.gameLevelId;
          case 'gameLevelName':
            return props.gameLevelName;
          case 'levelModeTypeId':
            return props.levelModeTypeId;
          default:
            return '';
        }
      }

      function xadmin_open(
        para1: string,
        para2: string,
        para3: string = '',
        para4: string = '',
        para5: boolean = true,
      ) {
        console.log(para1, para2, para3, para4, para5);
      }

      function Refresh_Click() {}

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
        KnowledgeGraph.btn_Click(strCommandName, strKeyId);
      }
      function window_onload() {
        GetRequestId_PageLoad();
      }

      function GetRequestId_PageLoad() {
        const strDifficultyLevelId = props.difficultyLevelId;
        const strQuestionTypeId = props.questionTypeId;
        const strQuestionNum = props.questionNum;
        const strGameLevelId = props.gameLevelId;
        const strGameLevelName = props.gameLevelName;
        const strLevelModeTypeId = props.levelModeTypeId;

        $('#hidDifficultyLevelId').val(strDifficultyLevelId);
        $('#hidQuestionTypeId').val(strQuestionTypeId);
        $('#hidQuestionNum').val(strQuestionNum);
        $('#hidGameLevelId').val(strGameLevelId);
        $('#hidGameLevelName').val(strGameLevelName);
        $('#hidLevelModeTypeId').val(strLevelModeTypeId);

        const objPage = new StructureChartQuestion();
        objPage.PageLoad();
      }

      //分页事件
      function Page_Click(strKey: string) {
        $('#hidCurrPageIndex').val(strKey);
        //$("#navGraphName").html(strName);
        //先清除背景色
        $('#page_list button').removeClass();
        $('#page_list button').addClass('btn btn-outline-primary');

        //添加背景色
        strKey = 'page_' + strKey;
        $('#' + strKey).removeClass();
        $('#' + strKey).addClass('btn btn-primary');
        //让图谱面板清空
        const arr: string[] = [];
        const objPage = new StructureChartQuestion();
        objPage.ShowStructureChartQuestion(arr);
      }

      function ShowPageList() {
        const RecCount = GetInputValueInDivObjN(refDivLayout.value, 'hidRecCount');
        for (let i = 1; i < RecCount + 1; i++) {
          const button = document.createElement('button');
          //div.innerText = strTagsContent;
          //div.href = "#Q" + strQuestionsId;
          if (i == 1) {
            button.className = 'btn btn-primary';
          } else {
            button.className = 'btn btn-outline-primary';
          }

          //button.style.position = "absolute";
          //button.style.zIndex = "999";
          //button.title = strQuestionsContent;
          button.id = 'page_' + i;
          button.type = 'button';
          button.innerHTML = '' + i + '';
          //div.className = "layui-icon layui-icon-survey";//答疑图标
          //if (arrqa_QuestionsObjLst[i].UpdUser == strUserId) {
          //    div.setAttribute("onclick", "btnUpdateQuestions_Click('" + strQuestionsId + "')");
          //}
          button.setAttribute('onclick', 'Page_Click(' + i + ')');
          const page_list = document.getElementById('page_list') as HTMLDivElement;
          if (page_list != null) page_list.appendChild(button);
        }
      }

      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        Refresh_Click,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义
      btn_Click(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //QuestionOptions_Edit.btnClick(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped>
  .box1 {
    /*padding: 3px 10px 10px 10px;*/
    /*background-color: white;*/
    /*border-left: solid 1px #dbdcde;
            border-right: solid 1px #dededf;
            border-bottom: solid 1px #dbdcde;
            border-radius: 7px 4px 4px 2px;*/
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
    /*border-left: solid 1px #dbdcde;
            border-right: solid 1px #dededf;*/
    /*border-bottom: solid 1px #dbdcde;*/
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
    /*background: #fff;*/
    text-align: center;
  }

  #demo {
    width: 1000px;
    height: 305px;
    margin: 0 auto;
    /*margin-top: 2px;*/
    /*top: 10px;*/
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: red;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    font-weight: bold;
    font-size: 15px;
  }

  .rightDetails {
    margin: 1px;
    padding: 5px;
    width: 100%;
    background-color: ghostwhite;
    min-height: 550px;
    border: solid 1px #dededf;
    border-radius: 10px;
  }

  #page_list {
    float: right;
    width: 39%;
    text-align: right;
    padding-right: 20px;
  }

  #page_list button {
    margin-right: 6px;
  }
</style>

<!-- Layout = "~/Pages/Shared/_Layout_PC.cshtml";
    ViewData["Title"] = "知识结构图题目-游戏化教育平台"; -->

<!-- <link rel="stylesheet" type="text/css" href="~/css/index/css/index.css" />

    <link rel="stylesheet" href="../lib/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" />

    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">


    <script src="../lib/jquery/dist/jquery.js"></script>

    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="~/lib/Xadmin/js/xadmin.js"></script>

    <script src="../lib/bootstrap/dist/js/bootstrap.js"></script>
    <script src="~/lib/bootstrap.min.js"></script>

    <script src="../lib/require/require.js" data-main="../js/src/config"></script> -->
