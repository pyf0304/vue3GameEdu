<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <PageHead_Game ref="refPageHead" :title="''"></PageHead_Game>

    <!-- 网页内容信息 -->
    <div class="content">
      <div class="box1" style="background-color: white; padding: 5px; border-radius: 5px">
        <ul id="ul_Menu" class="nav nav-pills" role="tablist">
          <li class="nav-item">
            <a
              id="li_menu1"
              href="javascript:void(0)"
              class="nav-link active"
              data-toggle="pill"
              @click="Menu_Click(1, $event)"
              >课程知识图谱</a
            >
          </li>
          <li class="nav-item">
            <a
              id="li_menu2"
              href="javascript:void(0)"
              class="nav-link"
              data-toggle="pill"
              @click="Menu_Click(2, $event)"
              >个人知识图谱</a
            >
          </li>
          <li class="nav-item">
            <a
              id="li_menu3"
              href="javascript:void(0)"
              class="nav-link"
              data-toggle="pill"
              @click="Menu_Click(3, $event)"
              >个性化学习路径</a
            >
          </li>
        </ul>
      </div>
      <div class="box1">
        <div class="leftNav" style="width: 15%; padding: 2px; height: 800px">
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

          <!-- <script>
            //注意：选项卡 依赖 element 模块，否则无法进行功能性操作
            layui.use('element', function () {
              const element = layui.element;

              //…
            });
          </script> -->
        </div>
        <div class="rightContent" style="width: 84%">
          <div class="title">
            <nav class="breadcrumb" style="background-color: white; border: solid 1px #dededf">
              <a class="breadcrumb-item" href="#/Index">首页</a>
              <a class="breadcrumb-item" href="#/KnowledgeGraph">知识图谱</a>
              <a id="navTitle" class="breadcrumb-item">知识图谱</a>
              <span id="navGraphName" class="breadcrumb-item active">图谱详情</span>
            </nav>
          </div>
          <div class="content" style="padding: 2px">
            <iframe
              id="KnowledgeGraph_IFrame"
              width="1500"
              height="1200"
              frameborder="0"
              border="0"
              marginwidth="0"
              marginheight="0"
              scrolling="yes"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- 编辑层  -->
    <div id="divEdit" value="1"></div>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />

    <input id="hidLogicNodeJson" type="hidden" />
    <input id="hidLogicRelaJson" type="hidden" />

    <input id="hidKnowledgeGraphId" type="hidden" />

    <input id="hidKnowledge_Id" type="hidden" />

    <input id="hidBgColor" type="hidden" />
    <input id="hidMasterNum" type="hidden" />

    <input id="hidGraphMenu" type="hidden" />
    <PageEnd_Game :title="''"></PageEnd_Game>
    <!--编辑层-->
    <gs_KnowledgesGraph_EditCom ref="refgs_KnowledgesGraph_Edit"></gs_KnowledgesGraph_EditCom>
  </div>
</template>
<script lang="ts">
  import $ from 'jquery';
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/index/css/index.css';
  import '@/assets/css/index/css/slider.css';

  import { defineComponent, onMounted, ref } from 'vue';

  import PageEnd_Game from '@/views/Shared/PageEnd_Game.vue';
  import PageHead_Game from '@/views/Shared/PageHead_Game.vue';

  import router from '@/router';

  //   import { messagePushUsersRelationEx_ConstructorName } from '@/ts/L3ForWApiExShare/NewsAnn/clsMessagePushUsersRelationExWApi';
  import { message } from '@/utils/myMessage';
  import { KnowledgeGraph } from './KnowledgeGraph';
  import { SetAHtmlInDivObj, SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { KnowledgeLogicChart } from '@/viewsShare/LearnChart/KnowledgeLogicChart';
  import { menu_SetActiveItemA } from '@/ts/FunClass/clsPubFun4Menu';
  import { Index } from '@/views/web/Index';
  import { refDivLayout, refgs_KnowledgesGraph_Edit } from './KnowledgeGraphVueShare';
  import { knowledgesMap } from 'share-stu-study-base-lib';

  export default defineComponent({
    name: 'KnowledgeGraph',
    components: {
      // 组件注册
      gs_KnowledgesGraph_EditCom: (knowledgesMap as GlobalComponentMap)['gs_KnowledgesGraph_Edit'],
      PageEnd_Game,
      PageHead_Game,
    },
    setup() {
      const objPage = ref<KnowledgeGraph>();
      const activeTabId = ref('menu1');
      const refPageHead = ref();
      const mySystemName = ref('知识图谱-游戏化教育平台');

      const sysTitle = ref('首页-游戏化教育平台');

      const UserName = ref('pyf');

      onMounted(() => {
        objPage.value = new KnowledgeGraph();
        KnowledgeGraph.vuebtn_Click = btn_Click;
        KnowledgeLogicChart.vuebtn_Click = btn_Click;
        Index.vuebtn_Click = btn_Click;
        window_onload();
      });

      function window_onload() {
        //   $('#indexTitle').html('基础知识');
        refPageHead.value.indexTitle = '知识图谱';
        //   require(["../js/Web/KnowledgeGraph.js"], function (KnowledgeGraph) {
        //$('#hidKnowledgeGraphId').val("0000000001");

        SetAHtmlInDivObj(refDivLayout.value, 'navTitle', '课程知识图谱');
        $('#hidGraphMenu').val(1);
        const objPage0 = new Index();
        objPage0.PageLoad();
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.PageLoad();
      }

      //重新加载
      function Reload() {
        $('#main').html('');
        LoadjsPlumb();
        $('#hidLogicNodeJson').val('');
        $('#hidLogicRelaJson').val('');
        $('#hidKnowledgeGraphId').val('');
        $('#indexTitle').html('知识图谱');
        const objPage = new KnowledgeGraph();
        objPage.PageLoad();
      }

      //菜单事件
      function Menu_Click(key: number, event: MouseEvent) {
        const clickedElement = event.target as HTMLElement;
        console.log('当前被单击的控件：', clickedElement);
        menu_SetActiveItemA(clickedElement as HTMLAnchorElement);
        switch (key) {
          case 1:
            $('#ul_Menu li a').removeClass('active');

            $('#li_menu1').addClass('active');

            $('#btn1').hide();
            $('#btn2').hide();
            $('#btn3').hide();
            $('#btn4').hide();
            $('#btn5').hide();
            //$("#deviceLeft").hide();

            //$("#deviceRight").removeClass("deviceRight2");
            //$("#deviceRight").addClass("deviceRight3");

            SetAHtmlInDivObj(refDivLayout.value, 'navTitle', '课程知识图谱');
            $('#hidGraphMenu').val(key);
            $('#i_AddGraph').hide();

            break;
          case 2:
            //$("#li_menu1").removeClass("active");
            //$("#li_menu3").removeClass("active");
            $('#ul_Menu li a').removeClass('active');
            $('#li_menu2').addClass('active');

            $('#btn1').show();
            $('#btn2').show();
            $('#btn3').show();
            $('#btn4').show();
            $('#btn5').hide();

            //$("#deviceLeft").show();
            //$("#deviceRight").removeClass("deviceRight3");
            //$("#deviceRight").addClass("deviceRight2");

            SetAHtmlInDivObj(refDivLayout.value, 'navTitle', '个人知识图谱');
            $('#hidGraphMenu').val(key);
            $('#i_AddGraph').show();
            break;
          case 3:
            //$("#li_menu1").removeClass("active");
            //$("#li_menu2").removeClass("active");
            $('#ul_Menu li a').removeClass('active');
            $('#li_menu3').addClass('active');

            $('#btn1').show();
            $('#btn2').hide();
            $('#btn3').hide();
            $('#btn4').hide();
            $('#btn5').show();
            //$("#deviceLeft").hide();

            //$("#deviceRight").removeClass("deviceRight2");
            //$("#deviceRight").addClass("deviceRight3");

            SetAHtmlInDivObj(refDivLayout.value, 'navTitle', '个性化学习路径');
            $('#hidGraphMenu').val(key);
            $('#i_AddGraph').hide();
            break;
        }

        $('#hidKnowledgeGraphId').val('');
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.ShowKnowledgeGraph();
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
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }

        objPage.value.BindAllLogicGraph();
      }

      //添加背景色
      function ChangeBg_Click(key: string) {
        $('#lblKnowledgesTitle').show();
        $('#hidKnowledge_Id').val(key);

        const strKnowledgesTitle = $('#' + key).html();
        $('#lblKnowledgesTitle').html('知识点：' + strKnowledgesTitle);
      }

      //掌握熟练度
      function Master_Click(stataKey: number) {
        const key = $('#hidKnowledge_Id').val();
        $('#' + key).removeClass();
        const strBgColor =
          'node node' + stataKey + 'css server ui-draggable ui-droppable _jsPlumb_endpoint_anchor_';
        $('#hidBgColor').val(strBgColor);

        $('#hidMasterNum').val(stataKey);

        switch (stataKey) {
          case 1:
            $('#' + key).addClass(strBgColor);
            break;
          case 2:
            $('#' + key).addClass(strBgColor);
            break;
          case 3:
            //熟练掌握
            $('#' + key).addClass(strBgColor);
            break;
          case 4:
            //准备学习
            $('#' + key).addClass(strBgColor);
            break;
        }
        //$("#lblKnowledgesTitle").hide();

        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.btnSaveGraph_User_Click();
      }

      //保存逻辑关系
      function SaveLogicRela(ojson: string) {
        console.log('保存关系json');

        // if (ojson.server.length == 0) {
        //   message.warning('请建立关系连接然后再保存!');
        // } else {
        //   const objPage = new KnowledgeGraph();
        //   objPage.btnSaveLogicRela_Click(ojson);
        // }
      }

      //保存逻辑关系
      function BindDdl_RelaTypeId() {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }

        objPage.value.SetDdl_RelaTypeId();
      }

      function LoadKnowledge() {
        // Load_Knowledge();
      }

      function LoadjsPlumb() {
        // Load_jsPlumb();
      }

      function DragDeviceLeft() {
        // Drag_deviceLeft();
      }

      async function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'LoadKnowledge':
            LoadKnowledge();
            return;
          case 'DragDeviceLeft':
            DragDeviceLeft();
            return;
          case 'Bind_EduClsList':
            refPageHead.value.Bind_EduClsList();
            return;
          case 'setRoles':
            refPageHead.value.setRoles();
            return;
          case 'setEduClss':
            refPageHead.value.setEduClss();
            return;
          // case 'setRoles':
          //   setRoles();
          //   return;
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
            if (objPage.value == null) {
              alert('页面初始化不成功,请联系管理员!');
              return;
            }
            await refgs_KnowledgesGraph_Edit.value.btnAddNewRecord_Click(objPage.value);
            return;
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            if (objPage.value == null) {
              alert('页面初始化不成功,请联系管理员!');
              return;
            }
            await refgs_KnowledgesGraph_Edit.value.btnUpdateRecordInTab_Click(
              objPage.value,
              strKeyId,
            );
            return;

          case 'liPaper':
            router.push('/about');
            console.log("router.push('/about');");
            // router.push({ name: 'myabout' });
            // console.log("router.push({ name: 'myabout' });");
            break;
          default:
            break;
        }
        KnowledgeGraph.btn_Click(strCommandName, strKeyId);
      }
      function DiscussSubmit_Click() {
        message.warning('函数DiscussSubmit_Click没有实现！');
      }
      return {
        refDivLayout,
        activeTabId,
        btn_Click,
        sysTitle,
        UserName,
        mySystemName,
        refPageHead,
        Menu_Click,
        DiscussSubmit_Click,
        refgs_KnowledgesGraph_Edit,
      };
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

<!-- <link rel="stylesheet" type="text/css" href="@/assets/css/index/css/index.css" />    
    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">
    <link rel="stylesheet" href="@/assets/css/comment.css">
    <link href="~/lib/layui/css/layui.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="~/lib/jsPlumb/css/style.css"> -->

<!-- <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
<script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script>
<script type="text/javascript" src="~/lib/jsPlumb/js/jsplumb.js"></script>
<script type="text/javascript" src="~/lib/jsPlumb/js/index.js"></script> -->
