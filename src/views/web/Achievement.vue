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
                >排行榜</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(2, $event)"
                >徽章</a
              >
            </li>
          </ul>
        </div>
        <div style="float: right; width: 74%; margin-right: 10px">
          <div class="title">
            <nav class="breadcrumb">
              <a class="breadcrumb-item" href="#/Index">首页</a>
              <a class="breadcrumb-item" href="#/KnowledgeGraph">成就激励</a>
              <span id="navTitle" class="breadcrumb-item active">排行榜</span>
            </nav>
          </div>
          <div class="content">
            <div class="tab-content">
              <div v-if="activeTabId === 'menu1'" id="menu1">
                <ul class="nav nav-tabs container" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#divContent1" role="tab"
                      >积分排行榜</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#divContent2" role="tab"
                      >徽章排行榜</a
                    >
                  </li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content">
                  <div id="divContent1" class="tab-pane fade show active">
                    <br />
                    <div id="divList1" ref="refDivList" class="div_List">
                      <div id="divDataLst" style="font-size: 20px">
                        <div class="alert alert-info" style="margin-top: 10px">
                          <strong>张三</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <i
                            class="layui-icon layui-icon-flag"
                            style="font-size: 30px; color: #666"
                          ></i>
                          122&nbsp;&nbsp;&nbsp;&nbsp;1/10&nbsp;&nbsp;&nbsp;&nbsp;
                          <i
                            class="layui-icon layui-icon-diamond"
                            style="font-size: 30px; color: #ffd800"
                          ></i>
                          1&nbsp;&nbsp;&nbsp;&nbsp;
                          <i
                            class="layui-icon layui-icon-diamond"
                            style="font-size: 30px; color: brown"
                          ></i>
                          2&nbsp;&nbsp;&nbsp;&nbsp;
                          <i
                            class="layui-icon layui-icon-diamond"
                            style="font-size: 30px; color: royalblue"
                          ></i>
                          3
                        </div>
                        <div class="alert alert-info">
                          <strong>李四</strong>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <i
                            class="layui-icon layui-icon-flag"
                            style="font-size: 30px; color: #666"
                          ></i>
                          120&nbsp;&nbsp;&nbsp;&nbsp;2/10&nbsp;&nbsp;&nbsp;&nbsp;
                          <i
                            class="layui-icon layui-icon-diamond"
                            style="font-size: 30px; color: #ffd800"
                          ></i>
                          1&nbsp;&nbsp;&nbsp;&nbsp;
                          <i
                            class="layui-icon layui-icon-diamond"
                            style="font-size: 30px; color: brown"
                          ></i>
                          2&nbsp;&nbsp;&nbsp;&nbsp;
                          <i
                            class="layui-icon layui-icon-diamond"
                            style="font-size: 30px; color: royalblue"
                          ></i>
                          1
                        </div>
                      </div>
                      <div id="divPager_CreditTtl" class="pager"> </div>
                    </div>
                  </div>

                  <div id="divContent2" class="tab-pane fade">
                    <div id="divList_BadgeTtl" ref="refDivList2" class="div_List">
                      <div id="divDataLst" style="font-size: 20px">
                        <br />
                      </div>
                      <div id="divPager_BadgeTtl" class="pager"> </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="activeTabId === 'menu2'" id="menu2">
                <br />
                <div style="font-size: 20px">
                  <div class="alert alert-success">
                    <strong> 积分徽章 </strong>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i
                      class="layui-icon layui-icon-diamond"
                      style="font-size: 30px; color: #ffd800"
                    ></i>
                    前5名玩家可以获得积分徽章
                  </div>
                  <div class="alert alert-success">
                    <strong> 进步徽章 </strong>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i
                      class="layui-icon layui-icon-diamond"
                      style="font-size: 30px; color: brown"
                    ></i>
                    积分排名名次变化最大的可以获得进步徽章
                  </div>
                  <div class="alert alert-success">
                    <strong> 答疑徽章 </strong>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i
                      class="layui-icon layui-icon-diamond"
                      style="font-size: 30px; color: royalblue"
                    ></i>
                    提问或者回答问题数最高的前5名获得答疑徽章
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
  import { AchievementEx } from '@/views/web/AchievementEx';
  import { ge_UserCreditsTtlCRUD } from '@/viewsBase/GameLearn/ge_UserCreditsTtlCRUD';
  import { menu_SetActiveItemA } from '@/ts/FunClass/clsPubFun4Menu';
  import { refDivLayout, refDivList } from './AchievementVueShare';
  export default defineComponent({
    name: 'Achievement',
    components: {
      // 组件注册

      PageEnd_Game,
      PageHead_Game,
    },
    setup() {
      const activeTabId = ref('menu1');
      const refPageHead = ref();
      const mySystemName = ref('成就激励-游戏化教育平台');

      const refDivList2 = ref();

      const sysTitle = ref('首页-游戏化教育平台');

      const UserName = ref('pyf');

      onMounted(() => {
        AchievementEx.divList2 = refDivList2.value;
        AchievementEx.vuebtn_Click = btn_Click;
        Index.vuebtn_Click = btn_Click;

        window_onload();

        // setRoles();
      });

      function window_onload() {
        //   $('#indexTitle').html('基础知识');
        refPageHead.value.indexTitle = '成就激励';
        // require(["../js/Web/Index.js"], function (index) {
        SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '课程知识图谱');

        const objPage = new Index();
        objPage.PageLoad();
        //   require(["../js/Web/AchievementEx.js"], function (index) {

        const objPage2 = new AchievementEx();
        objPage2.PageLoad();
        //answerCard();
        //showQuestion(0);
      }

      //菜单事件
      function Menu_Click(key: number, event: MouseEvent) {
        const clickedElement = event.target as HTMLElement;
        console.log('当前被单击的控件：', clickedElement);
        menu_SetActiveItemA(clickedElement as HTMLAnchorElement);
        switch (key) {
          case 1:
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '排行榜');
            activeTabId.value = 'menu1';
            setTimeout(() => {
              AchievementEx.divList2 = refDivList2.value;
              const objPage2 = new AchievementEx();
              objPage2.PageLoad();
            }, 500);
            break;
          case 2:
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '徽章');
            activeTabId.value = 'menu2';
            break;
        }
      }

      //随机匹配
      function btnRandomMatch_Click() {
        $('#1vs1Details').show();
        $('#1vs1List').hide();
      }

      //1vs1返回
      function btn1vs1Return_Click() {
        $('#1vs1Details').hide();
        $('#1vs1List').show();
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
          // case 'setRoles':
          //   setRoles();
          //   return;
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
        AchievementEx.btn_Click(strCommandName, strKeyId);
      }
      function DiscussSubmit_Click() {
        message.warning('函数DiscussSubmit_Click没有实现！');
      }
      return {
        refDivLayout,
        refDivList,
        refDivList2,
        activeTabId,
        btn_Click,
        sysTitle,
        UserName,
        mySystemName,
        refPageHead,
        Menu_Click,
        DiscussSubmit_Click,
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

<!-- <link rel="stylesheet" type="text/css" href="@/assets/css/index/css/index.css" />

    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">
    <link rel="stylesheet" href="@/assets/css/comment.css">
    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script>
 -->
