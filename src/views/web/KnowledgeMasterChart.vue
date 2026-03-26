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
      <div>
        <div class="leftNav" style="width: 18%; padding: 2px; height: 800px">
          <div class="layui-tab" style="margin: 1px 0">
            <ul class="layui-tab-title">
              <li class="layui-this">
                知识图谱
                <i
                  id="i_AddGraph"
                  title="添加知识图谱"
                  @click="btn_Click('AddNewRecordWithMaxId', '')"
                  class="layui-icon layui-icon-add-1"
                  style="font-size: 20px; color: #24998d"
                ></i>
              </li>
              <li id="TabGraph2_Menu">知识点</li>
            </ul>
            <div class="layui-tab-content" style="padding: 1px">
              <div class="layui-tab-item layui-show">
                <ul id="ulGraph" class="nav nav-pills flex-column" role="tablist"></ul>
              </div>
              <div class="layui-tab-item">
                <div class="device" style="margin: 0px">
                  <div id="deviceLeft" class="deviceLeft" style="width: 100%">
                    <div id="KnowledgesNode" class="deviceLeft_box"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rightContent" style="width: 82%">
          <div style="color: white">
            <a
              id="btn3"
              class="layui-btn layui-btn-danger"
              style="float: right; margin-right: 10px"
              title="熟练掌握"
            >
              <i class="layui-icon layui-icon-star-fill"></i>熟练掌握
            </a>
            <a
              id="btn2"
              class="layui-btn layui-btn-warm"
              style="float: right; margin-right: 10px"
              title="初步掌握"
            >
              <i class="layui-icon layui-icon-star"></i>初步掌握
            </a>
            <a
              id="btn4"
              class="layui-btn layui-btn-normal"
              style="float: right; margin-right: 10px"
              title="初步掌握"
            >
              <i class="layui-icon layui-icon-circle"></i>未掌握
            </a>
          </div>
          <div class="device">
            <div id="deviceRight" class="deviceRight3">
              <div id="main" class="main"></div>
            </div>
          </div>
        </div>
      </div>
      @*<div class="device">
        <div id="deviceLeft" class="deviceLeft">
          <h3>知识图谱</h3>
          <ul id="ulGraph" class="nav nav-pills flex-column" role="tablist"></ul>
        </div>
        <div id="deviceRight" class="deviceRight">
          <div id="main"></div>
        </div> </div
      >*@ @*-- 编辑层 --*@
      <div id="divEdit" value="1"></div>

      <input id="hidOpType" type="hidden" value="1" />
      <input id="hidKeyId" type="hidden" />

      <input id="hidLogicNodeJson" type="hidden" />
      <input id="hidLogicRelaJson" type="hidden" />

      <input id="hidKnowledgeGraphId" type="hidden" />

      <input id="hidKnowledge_Id" type="hidden" />

      <input id="hidBgColor" type="hidden" />
      <input id="hidMasterNum" type="hidden" />

      <input id="hidGraphMenu" type="hidden" value="1" />
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
  import { QuestionnaireHistory } from '@/views/web/QuestionnaireHistory';
  import { message } from '@/utils/myMessage';
  import { KnowledgeGraph } from '@/viewsShare/LearnChart/KnowledgeGraph';
  import {
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from './KnowledgeMasterChartVueShare';
  export default defineComponent({
    name: 'QuestionnaireHistory',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('知识点掌握度图谱-游戏化教育平台');
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

      function LoadKnowledge() {
        // Load_Knowledge()
      }

      function LoadjsPlumb() {
        // Load_jsPlumb()
      }

      //function DragDeviceLeft() {
      //    Drag_deviceLeft()
      //}

      function window_onload() {
        //$('#hidKnowledgeGraphId').val("0000000001");
        //$('#indexTitle').html("知识图谱");
        //$("#navTitle").html("课程知识图谱");
        //$("#hidGraphMenu").val(1);
        const objPage = new KnowledgeGraph();
        objPage.PageLoad();
      }

      //重新加载
      function Reload() {
        //$('#hidKnowledgeGraphId').val("0000000001");
        $('#main').html('');
        LoadjsPlumb();
        $('#hidLogicNodeJson').val('');
        $('#hidLogicRelaJson').val('');
        $('#hidKnowledgeGraphId').val('');
        $('#indexTitle').html('知识图谱');
        const objPage = new KnowledgeGraph();
        objPage.PageLoad();
      }

      //点击图列表显示图谱详情
      function GraphMenu_Click(strKey: string, strName: string) {
        $('#hidKnowledgeGraphId').val(strKey);
        $('#navGraphName').html(strName);
        //先清除背景色
        $('#ulGraph li a').removeClass('active');
        //添加背景色
        strKey = 'Graph' + strKey;
        $('#' + strKey).addClass('active');
        $('#main').html('');
        LoadjsPlumb();
        //让图谱面板清空

        const objPage = new KnowledgeGraph();
        objPage.BindAllLogicGraph();
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
        KnowledgeGraph.btn_Click(strCommandName, strKeyId);
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

  .layui-nav {
    position: relative;
    padding: 0 20px;
    background-color: #24998d;
    color: #fff;
    border-radius: 2px;
    font-size: 0;
    box-sizing: border-box;
  }

  #ulGraph li {
    list-style: none;
    line-height: 18px;
  }

  .layui-tab-title .layui-this {
    /*color: #000;*/
    color: #24998d;
    font-size: 16px;
    font-weight: bold;
  }

  .device .deviceLeft .deviceLeft_box .node {
    user-select: none;
    /* width: 98px; */
    height: 40px;
    line-height: 20px;
    float: none;
    /* float: left; */
    margin: 5px;
  }
</style>

<!-- Layout = "~/Pages/Shared/_Layout_PC.cshtml";
    ViewData["Title"] = "知识点掌握度图谱-游戏化教育平台"; -->

<!-- 
    <link rel="stylesheet" href="../lib/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="@/assets/css/index/css/index.css" />
    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">

    <link rel="stylesheet" href="@/assets/css/comment.css">

    <link rel="stylesheet" type="text/css" href="~/lib/jsPlumb/css/jquery-ui.min.css">
    <link rel="stylesheet" type="text/css" href="~/lib/jsPlumb/css/style.css">


    <script src="../lib/require/require.js" data-main="../js/src/config"></script>
    <script src="../lib/jquery/dist/jquery.js"></script>

    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script>

    <script type="text/javascript" src="~/lib/jsPlumb/js/jquery-ui.min.js"></script>

    潘以锋
<script type="text/javascript" src="~/lib/jsPlumb/js/jsplumb.js"></script>

    <script type="text/javascript" src="~/lib/jsPlumb/js/index.js"></script>

 -->
