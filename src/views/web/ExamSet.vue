<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <PageHead_Game ref="refPageHead" :title="''"></PageHead_Game>
    <!-- 网页内容信息 -->
    <div class="content">
      <div class="box1">
        <div style="float: left; width: 25%">
          <ul class="nav nav-pills flex-column" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(1, $event)"
                >答题历史</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(2, $event)"
                >我的收藏</a
              >
            </li>
          </ul>
        </div>
        <div style="float: right; width: 74%; margin-right: 10px">
          <div class="title">
            <nav class="breadcrumb">
              <a class="breadcrumb-item" href="#/Index">首页</a>
              <a class="breadcrumb-item" href="#/KnowledgeGraph">习题集</a>
              <span id="navTitle" class="breadcrumb-item active">答题历史</span>
            </nav>
          </div>
          <div class="content">
            <div class="tab-content">
              <div id="menu1" class="tab-pane fade show active">
                <br />
                <div id="KnowledgeList">
                  <ul class="list_ul4">
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="icon-9"
                        @click="KnowledgeDetails_Click(1)"
                      >
                        <label>知识点1</label>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="icon-9"
                        @click="KnowledgeDetails_Click(2)"
                      >
                        <label>知识点2</label>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="icon-9"
                        @click="KnowledgeDetails_Click(3)"
                      >
                        <label>知识点3</label>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="icon-9"
                        @click="KnowledgeDetails_Click(4)"
                      >
                        <label>知识点4</label>
                      </a>
                    </li>

                    <li>
                      <a
                        href="javascript:void(0)"
                        class="icon-9"
                        @click="KnowledgeDetails_Click(5)"
                      >
                        <label>知识点5</label>
                      </a>
                    </li>

                    <li>
                      <a
                        href="javascript:void(0)"
                        class="icon-9"
                        @click="KnowledgeDetails_Click(6)"
                      >
                        <label>知识点6</label>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="icon-9"
                        @click="KnowledgeDetails_Click(7)"
                      >
                        <label>知识点7</label>
                      </a>
                    </li>

                    <li>
                      <a
                        href="javascript:void(0)"
                        class="icon-9"
                        @click="KnowledgeDetails_Click(8)"
                      >
                        <label>知识点8</label>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="icon-9"
                        @click="KnowledgeDetails_Click(9)"
                      >
                        <label>知识点9</label>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="icon-9"
                        @click="KnowledgeDetails_Click(10)"
                      >
                        <label>知识点10</label>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="icon-9"
                        @click="KnowledgeDetails_Click(11)"
                      >
                        <label>知识点11</label>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        class="icon-9"
                        @click="KnowledgeDetails_Click(12)"
                      >
                        <label>知识点12</label>
                      </a>
                    </li>
                  </ul>
                </div>

                <div id="KnowledgeDetails" style="display: none">
                  <div>
                    <span
                      id="spanWeekWork"
                      style="
                        background-color: dodgerblue;
                        color: white;
                        padding: 5px;
                        margin-left: 10px;
                      "
                      >第1周作业</span
                    >
                  </div>
                  <div class="rightDetails">
                    <div style="height: 480px">
                      题目1：
                      <br />
                      答题时间：
                      <br />
                      答题情况及解析
                    </div>
                    <div>
                      <a
                        id="btnKnowledgeReturn"
                        class="layui-btn layui-btn-normal"
                        style="
                          color: white;
                          line-height: 1.6em;
                          margin-top: 3px;
                          float: right;
                          margin-right: 20px;
                        "
                        title="返回"
                        @click="KnowledgeReturn_Click()"
                      >
                        <i class="layui-icon layui-icon-return" style="line-height: 30px"></i>返回
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div id="menu2" class="tab-pane fade">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" role="tab" href="#Collection1"
                      >近一周</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" role="tab" href="#Collection2"
                      >近一月</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" role="tab" href="#Collection3">全部</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" role="tab" href="#Collection4"
                      >自动组卷</a
                    >
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div id="Collection1" class="tab-pane fade show active">
                    题目1：
                    <br />
                    答题情况及解析
                    <div>
                      <a
                        id="btnAddNotes"
                        class="layui-btn layui-icon-add-circle"
                        style="
                          color: white;
                          line-height: 1.6em;
                          margin-top: 3px;
                          float: right;
                          margin-right: 20px;
                        "
                        title="添加笔记"
                        @click="btnAddNotes_Click()"
                      >
                        <i class="layui-icon layui-icon-return" style="line-height: 30px"></i
                        >添加笔记
                      </a>
                    </div>
                  </div>
                  <div id="Collection2" class="tab-pane fade">
                    <br />
                  </div>
                  <div id="Collection3" class="tab-pane fade">
                    <br />
                  </div>
                  <div id="Collection4" class="tab-pane fade">
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PageEnd_Game :title="''"></PageEnd_Game>
  </div>
</template>
<script lang="ts">
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

  import { Index } from '@/views/web/Index';
  import { SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { menu_SetActiveItemA } from '@/ts/FunClass/clsPubFun4Menu';
  import { refDivLayout } from './ExamSetVueShare';
  export default defineComponent({
    name: 'ExamSet',
    components: {
      // 组件注册

      PageEnd_Game,
      PageHead_Game,
    },
    setup() {
      const activeTabId = ref('menu1');
      const refPageHead = ref();
      const mySystemName = ref('习题集-游戏化教育平台');

      const sysTitle = ref('首页-游戏化教育平台');

      const UserName = ref('pyf');

      onMounted(() => {
        Index.vuebtn_Click = btn_Click;

        window_onload();
      });

      function window_onload() {
        //   $('#indexTitle').html('基础知识');
        refPageHead.value.indexTitle = '习题集';

        // require(["../js/Web/Index.js"], function (index) {
        SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '课程知识图谱');

        const objPage = new Index();
        objPage.PageLoad();
      }

      //菜单事件
      function Menu_Click(key: number, event: MouseEvent) {
        const clickedElement = event.target as HTMLElement;
        console.log('当前被单击的控件：', clickedElement);
        menu_SetActiveItemA(clickedElement as HTMLAnchorElement);
        switch (key) {
          case 1:
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '答题历史');
            activeTabId.value = 'menu1';
            break;
          case 2:
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '我的收藏');
            activeTabId.value = 'menu2';
            break;
        }
      }

      //工作详情
      function KnowledgeDetails_Click(key: number) {
        $('#KnowledgeList').hide();
        $('#KnowledgeDetails').show();
        const strKnowledge = '知识点' + key;
        $('#spanWeekWork').html(strKnowledge);
      }

      //工作返回
      function KnowledgeReturn_Click() {
        $('#KnowledgeDetails').hide();
        $('#KnowledgeList').show();
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'Bind_EduClsList':
            refPageHead.value.Bind_EduClsList();
            return;
          case 'setRoles':
            refPageHead.value.setRoles();
            return;
          case 'setEduClss':
            refPageHead.value.setEduClss();
            return;

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
        Index.btn_Click(strCommandName, strKeyId);
      }
      function DiscussSubmit_Click() {
        message.warning('函数DiscussSubmit_Click没有实现！');
      }
      function btnAddNotes_Click() {
        message.warning('函数btnAddNotes_Click没有实现！');
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
        KnowledgeReturn_Click,
        KnowledgeDetails_Click,
        btnAddNotes_Click,
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
</style>

<!-- 
    <link rel="stylesheet" type="text/css" href="@/assets/css/index/css/index.css" />
    
    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">
    <link rel="stylesheet" href="@/assets/css/comment.css">

    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script> -->
