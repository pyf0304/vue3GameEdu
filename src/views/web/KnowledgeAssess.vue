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
                >1vs1</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(2, $event)"
                >单人挑战赛</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(3, $event)"
                >协作模式</a
              >
            </li>
          </ul>
        </div>
        <div style="float: right; width: 74%; margin-right: 10px">
          <div class="title">
            <nav class="breadcrumb">
              <a class="breadcrumb-item" href="#/Index">首页</a>
              <a class="breadcrumb-item" href="#/KnowledgeAssess">知识测评</a>
              <span id="navTitle" class="breadcrumb-item active">1vs1</span>
            </nav>
          </div>
          <div class="content">
            <div class="tab-content">
              <div v-if="activeTabId === 'menu1'" id="menu1">
                <div id="1vs1List" style="padding-top: 150px; text-align: center">
                  <button
                    id="btnInviteFriends"
                    type="button"
                    class="layui-btn"
                    style="width: 50%; height: 80px"
                    @click="btnInviteFriends_Click()"
                    >邀请好友</button
                  >
                  <button
                    id="btnRandomMatch"
                    type="button"
                    class="layui-btn"
                    style="width: 50%; height: 80px; margin-top: 50px"
                    @click="btnRandomMatch_Click()"
                    >随机匹配</button
                  >
                </div>
                <div id="1vs1Details" style="display: none">
                  <div class="row">
                    <div class="col" style="text-align: right">张三</div>
                    <div class="col" style="text-align: center; line-height: 30px; height: 30px">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 40%"
                        >
                          <span class="sr-only">40% 完成</span>
                        </div>
                      </div>
                    </div>
                    <div class="col">李四</div>
                  </div>
                  <div class="rightDetails">
                    <div class="row">
                      <div class="col">
                        <a href="javascript:void(0)"
                          ><i
                            class="layui-icon layui-icon-console"
                            style="font-size: 30px; color: #1e9fff"
                          ></i
                        ></a>
                      </div>
                      <div class="col" style="text-align: right">
                        <a href="javascript:void(0)"
                          ><i
                            class="layui-icon layui-icon-rate"
                            style="font-size: 30px; color: #1e9fff"
                          ></i
                        ></a>
                      </div>
                    </div>
                    <div style="height: 350px">
                      大数据价值密度低是指( )<br />
                      a.大数据具有多元异构性<br />
                      b.大数据中有价值数据的比例小<br />
                      c.大数据的积累速度快<br />
                      d.大数据的变化速率高<br />
                    </div>
                    <div>
                      <a
                        id="btn1vs1Return"
                        class="layui-btn layui-btn-normal"
                        style="
                          color: white;
                          line-height: 1.6em;
                          margin-top: 3px;
                          float: right;
                          margin-right: 20px;
                        "
                        title="返回"
                        @click="btn1vs1Return_Click()"
                      >
                        <i class="layui-icon layui-icon-return" style="line-height: 30px"></i>返回
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="activeTabId === 'menu2'" id="menu2">
                <div id="SingleChallengeList" style="padding-top: 150px; text-align: center">
                  <button
                    id="btnSimple"
                    type="button"
                    class="layui-btn"
                    style="width: 50%; height: 80px"
                    @click="btnGradeSelection_Click(1)"
                    >简单</button
                  >
                  <button
                    id="btnSecondary"
                    type="button"
                    class="layui-btn"
                    style="width: 50%; height: 80px; margin-top: 30px"
                    @click="btnGradeSelection_Click(2)"
                    >中等</button
                  >
                  <button
                    id="btnComplex"
                    type="button"
                    class="layui-btn"
                    style="width: 50%; height: 80px; margin-top: 30px"
                    @click="btnGradeSelection_Click(3)"
                    >复杂</button
                  >
                </div>
                <div id="SingleChallengeDetails" style="display: none">
                  <div style="text-align: center; width: 100%">
                    <span id="DifficultyLevelTitle" style="font-size: 24px"></span>
                  </div>
                  <div style="text-align: center; width: 100%; margin-top: 10px">
                    <button type="button" class="btn btn-primary">1</button>
                    <button type="button" class="btn btn-primary">2</button>
                    <button type="button" class="btn btn-danger">3</button>
                    <button type="button" class="btn btn-outline-primary">4</button>
                    <button type="button" class="btn btn-outline-primary">5</button>
                    <button type="button" class="btn btn-outline-primary">6</button>
                  </div>
                  <div class="rightDetails">
                    <div class="row">
                      <div class="col">
                        <a href="javascript:void(0)"
                          ><i
                            class="layui-icon layui-icon-console"
                            style="font-size: 40px; color: #1e9fff"
                          ></i
                        ></a>
                      </div>
                      <div class="col" style="text-align: right">
                        <a href="javascript:void(0)"
                          ><i
                            class="layui-icon layui-icon-rate"
                            style="font-size: 40px; color: #1e9fff"
                          ></i
                        ></a>
                      </div>
                    </div>
                    <div style="height: 350px">
                      大数据价值密度低是指( )<br />
                      a.大数据具有多元异构性<br />
                      b.大数据中有价值数据的比例小<br />
                      c.大数据的积累速度快<br />
                      d.大数据的变化速率高<br />
                    </div>
                    <div>
                      <a
                        id="btnSingleChallengeReturn"
                        class="layui-btn layui-btn-normal"
                        style="
                          color: white;
                          line-height: 1.6em;
                          margin-top: 3px;
                          float: right;
                          margin-right: 20px;
                        "
                        title="返回"
                        @click="btnSingleChallengeReturn_Click()"
                      >
                        <i class="layui-icon layui-icon-return" style="line-height: 30px"></i>返回
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="activeTabId === 'menu3'" id="menu3">
                <div id="div_Cooperation" class="rightDetails">
                  <div class="row">
                    <div class="col">
                      <a href="javascript:void(0)"
                        ><i
                          class="layui-icon layui-icon-console"
                          style="font-size: 40px; color: #1e9fff"
                        ></i
                      ></a>
                    </div>
                    <div class="col" style="text-align: right">
                      <a href="javascript:void(0)"
                        ><i
                          class="layui-icon layui-icon-rate"
                          style="font-size: 40px; color: #1e9fff"
                        ></i
                      ></a>
                    </div>
                  </div>

                  <div style="height: 350px">
                    大数据价值密度低是指( )<br />
                    a.大数据具有多元异构性<br />
                    b.大数据中有价值数据的比例小<br />
                    c.大数据的积累速度快<br />
                    d.大数据的变化速率高<br />
                  </div>

                  <div>
                    <a
                      id="btnWrongTopicDiscussion"
                      class="layui-btn layui-btn-normal"
                      style="
                        color: white;
                        line-height: 1.6em;
                        margin-top: 3px;
                        float: right;
                        margin-right: 20px;
                      "
                      title="错题讨论"
                      @click="btnWrongTopicDiscussion_Click()"
                    >
                      <i class="layui-icon layui-icon-return" style="line-height: 30px"></i>错题讨论
                    </a>
                  </div>
                </div>

                <div id="div_CooperationDiscuss" style="display: none">
                  <div
                    style="
                      float: left;
                      width: 35%;
                      padding: 20px;
                      border-radius: 20px;
                      background-color: ghostwhite;
                      height: 500px;
                    "
                  >
                    <div style="text-align: right">
                      <a href="javascript:void(0)"
                        ><i
                          class="layui-icon layui-icon-rate"
                          style="font-size: 40px; color: #1e9fff"
                        ></i
                      ></a>
                    </div>

                    <div style="height: 350px">
                      大数据价值密度低是指( )<br />
                      a.大数据具有多元异构性<br />
                      b.大数据中有价值数据的比例小<br />
                      c.大数据的积累速度快<br />
                      d.大数据的变化速率高<br />
                    </div>
                    <div>
                      <a href="javascript:void(0)"
                        ><i
                          class="layui-icon layui-icon-notice"
                          style="font-size: 40px; color: #1e9fff"
                        ></i
                      ></a>
                      相关知识点：XXX（个性化建议）
                    </div>
                  </div>
                  <div style="float: right; width: 64%">
                    <div><h2>临时讨论区</h2></div>
                    <div style="height: 400px"> </div>
                    <div>
                      <table
                        style="width: 100%"
                        class="table table-bordered table-hover table td table-sm"
                      >
                        <tr>
                          <td style="width: 80%">
                            <textarea
                              id="txtDiscussContent"
                              name="txtDiscussContent"
                              placeholder="请输入讨论内容"
                              class="form-control"
                              style="width: 100%; height: 100px"
                            ></textarea>
                          </td>
                          <td style="width: 20%">
                            <button
                              id="btnDiscussSubmit"
                              type="button"
                              class="layui-btn"
                              style="width: 100%; height: 100px"
                              @click="DiscussSubmit_Click()"
                              >发布</button
                            >
                          </td>
                        </tr>
                      </table>
                    </div>
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
  import LoginCom from '@/viewsShare/web/Login.vue';
  import wfmRegisterStuCom from '@/viewsShare/web/wfmRegisterStu.vue';

  import router from '@/router';

  import MyDropButton from '@/ts/components/myDropButton.vue';
  import { Index } from '@/views/web/Index';
  import { message } from '@/utils/myMessage';
  import { SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { menu_SetActiveItemA } from '@/ts/FunClass/clsPubFun4Menu';
  import { refDivLayout } from '@/views/web/KnowledgeAssessVueShare';
  export default defineComponent({
    name: 'KnowledgeAssess',
    components: {
      // 组件注册
      LoginCom,
      wfmRegisterStuCom,
      MyDropButton, // Use the correct component name here
      PageEnd_Game,
      PageHead_Game,
    },
    setup() {
      const activeTabId = ref('menu1');
      const refPageHead = ref();
      const mySystemName = ref('知识测评-游戏化教育平台');

      const sysTitle = ref('首页-游戏化教育平台');

      const UserName = ref('pyf');

      onMounted(() => {
        Index.vuebtn_Click = btn_Click;

        window_onload();
      });

      function window_onload() {
        //        require(["../js/Web/Index.js"], function (index) {
        //   $('#indexTitle').html('基础知识');
        refPageHead.value.indexTitle = '知识测评';
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
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '1vs1');
            activeTabId.value = 'menu1';
            break;
          case 2:
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '单人挑战赛');
            activeTabId.value = 'menu2';
            break;
          case 3:
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '协作模式');
            activeTabId.value = 'menu3';
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

      //等级选择
      function btnGradeSelection_Click(key: number) {
        switch (key) {
          case 1:
            $('#DifficultyLevelTitle').html('难度：简单');
            break;
          case 2:
            $('#DifficultyLevelTitle').html('难度：中等');
            break;
          case 3:
            $('#DifficultyLevelTitle').html('难度：复杂');
            break;
        }

        $('#SingleChallengeDetails').show();
        $('#SingleChallengeList').hide();
      }

      //担任挑战返回
      function btnSingleChallengeReturn_Click() {
        $('#SingleChallengeDetails').hide();
        $('#SingleChallengeList').show();
      }

      //错题讨论
      function btnWrongTopicDiscussion_Click() {
        $('#div_Cooperation').hide();
        $('#div_CooperationDiscuss').show();
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
      function btnInviteFriends_Click() {
        message.warning('函数btnInviteFriends_Click没有实现！');
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
        btnInviteFriends_Click,
        btn1vs1Return_Click,
        btnRandomMatch_Click,
        btnGradeSelection_Click,
        btnSingleChallengeReturn_Click,
        btnWrongTopicDiscussion_Click,
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
    <link rel="stylesheet" href="@/assets/css/comment.css"> -->

<!-- <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script> -->
