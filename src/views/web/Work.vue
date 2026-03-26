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
                >个人作业</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(2, $event)"
                >小组项目</a
              >
            </li>
          </ul>
        </div>
        <div style="float: right; width: 74%; margin-right: 10px">
          <div class="title">
            <nav class="breadcrumb">
              <a class="breadcrumb-item" href="#/Index">首页</a>
              <a class="breadcrumb-item" href="#/Work">作业</a>
              <span id="navTitle" class="breadcrumb-item active">个人作业</span>
            </nav>
          </div>
          <div class="content">
            <div class="tab-content">
              <div id="menu1" class="tab-pane fade show active">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      role="tab"
                      href="#PersonalWork1"
                    >
                      作业历史
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" role="tab" href="#PersonalWork2">
                      本周作业
                    </a>
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div id="PersonalWork1" class="tab-pane fade show active">
                    <br />
                    <div id="WorkList">
                      <ul class="list_ul4">
                        <li>
                          <a href="javascript:void(0)" class="icon-9" @click="WorkDetails_Click(1)">
                            <label>第一周作业</label>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" class="icon-9" @click="WorkDetails_Click(2)">
                            <label>第二周作业</label>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" class="icon-9" @click="WorkDetails_Click(3)">
                            <label>第三周作业</label>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" class="icon-9" @click="WorkDetails_Click(4)">
                            <label>第四周作业</label>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" class="icon-9" @click="WorkDetails_Click(5)">
                            <label>第五周作业</label>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" class="icon-9" @click="WorkDetails_Click(6)">
                            <label>第六周作业</label>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" class="icon-9" @click="WorkDetails_Click(7)">
                            <label>第七周作业</label>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" class="icon-9" @click="WorkDetails_Click(8)">
                            <label>第八周作业</label>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" class="icon-9" @click="WorkDetails_Click(9)">
                            <label>第九周作业</label>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-9"
                            @click="WorkDetails_Click(10)"
                          >
                            <label>第十周作业</label>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-9"
                            @click="WorkDetails_Click(11)"
                          >
                            <label>第十一周作业</label>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-9"
                            @click="WorkDetails_Click(12)"
                          >
                            <label>第十二周作业</label>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div id="WorkDetails" style="display: none">
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
                          题目：xxxx
                          <br />
                          答案：xxxx
                        </div>
                        <div>
                          <a
                            id="btnReturn"
                            class="layui-btn layui-btn-normal"
                            style="
                              color: white;
                              line-height: 1.6em;
                              margin-top: 3px;
                              float: right;
                              margin-right: 20px;
                            "
                            title="返回"
                            @click="WorkReturn_Click()"
                          >
                            <i class="layui-icon layui-icon-return" style="line-height: 30px"></i
                            >返回
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="PersonalWork2" class="tab-pane fade">
                    <br />
                    <div id="ThisWeekWork">
                      <div class="rightDetails">
                        <div style="height: 480px">
                          题目：xxxx
                          <br />
                          答案：xxxx
                        </div>
                        <div>
                          <a
                            id="btnToFinish"
                            class="layui-btn layui-btn-normal"
                            style="
                              font-size: 16px;
                              color: white;
                              line-height: 1.6em;
                              float: right;
                              margin-right: 20px;
                            "
                            title="去完成"
                            href="FinishWork"
                          >
                            去完成<i
                              class="layui-icon layui-icon-next"
                              style="line-height: 36px"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="menu2" class="tab-pane fade">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      role="tab"
                      href="#GroupProject1"
                    >
                      进度汇报
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" role="tab" href="#GroupProject2">
                      成果展示
                    </a>
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div id="GroupProject1" class="tab-pane fade show active">
                    <br />
                    <div id="ReportList">
                      <ul class="list_ul4">
                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-11"
                            @click="ReportDetails_Click(1)"
                          >
                            <label>第一次汇报</label>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-11"
                            @click="ReportDetails_Click(2)"
                          >
                            <label>第二次汇报</label>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-11"
                            @click="ReportDetails_Click(3)"
                          >
                            <label>第三次汇报</label>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-11"
                            @click="ReportDetails_Click(4)"
                          >
                            <label>第四次汇报</label>
                          </a>
                        </li>

                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-11"
                            @click="ReportDetails_Click(5)"
                          >
                            <label>第五次汇报</label>
                          </a>
                        </li>

                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-11"
                            @click="ReportDetails_Click(6)"
                          >
                            <label>第六次汇报</label>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-11"
                            @click="ReportDetails_Click(7)"
                          >
                            <label>第七次汇报</label>
                          </a>
                        </li>

                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-11"
                            @click="ReportDetails_Click(8)"
                          >
                            <label>第八次汇报</label>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-11"
                            @click="ReportDetails_Click(9)"
                          >
                            <label>第九次汇报</label>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-11"
                            @click="ReportDetails_Click(10)"
                          >
                            <label>第十次汇报</label>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-11"
                            @click="ReportDetails_Click(11)"
                          >
                            <label>第十一次汇报</label>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            class="icon-11"
                            @click="ReportDetails_Click(12)"
                          >
                            <label>第十二次汇报</label>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div id="ReportDetails" style="display: none">
                      <div>
                        <span
                          id="spanReportTitle"
                          style="
                            background-color: dodgerblue;
                            color: white;
                            padding: 5px;
                            margin-left: 10px;
                          "
                          >第1次汇报</span
                        >
                      </div>
                      <div class="rightDetails">
                        <div style="height: 480px">
                          汇报内容：。。。
                          <br />
                          未来计划：。。。
                          <br />
                          分工安排：。。。
                        </div>
                        <div>
                          <a
                            id="btnReturn"
                            class="layui-btn layui-btn-normal"
                            style="
                              color: white;
                              line-height: 1.6em;
                              margin-top: 3px;
                              float: right;
                              margin-right: 20px;
                            "
                            title="返回"
                            @click="ReportReturn_Click()"
                          >
                            <i class="layui-icon layui-icon-return" style="line-height: 30px"></i
                            >返回
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="GroupProject2" class="tab-pane fade">
                    <br />
                    <div id="AchievementDisplay">
                      <div class="rightDetails">
                        <div style="height: 480px">
                          期末成果提交
                          <br />
                        </div>
                      </div>
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
  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import '@/assets/css/comment.css';

  import { defineComponent, onMounted, ref } from 'vue';

  import PageEnd_Game from '@/views/Shared/PageEnd_Game.vue';
  import PageHead_Game from '@/views/Shared/PageHead_Game.vue';

  import router from '@/router';

  import { Index } from '@/views/web/Index';
  // import { messagePushUsersRelationEx_ConstructorName } from '@/ts/L3ForWApiExShare/NewsAnn/clsMessagePushUsersRelationExWApi';
  import { message } from '@/utils/myMessage';
  import { SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { menu_SetActiveItemA } from '@/ts/FunClass/clsPubFun4Menu';
  import { refDivLayout } from './WorkVueShare';
  export default defineComponent({
    name: 'Work',
    components: {
      // 组件注册

      PageEnd_Game,
      PageHead_Game,
    },
    setup() {
      const activeTabId = ref('menu1');
      const refPageHead = ref();
      const mySystemName = ref('作业-游戏化教育平台');

      const sysTitle = ref('首页-游戏化教育平台');

      const UserName = ref('pyf');

      onMounted(() => {
        Index.vuebtn_Click = btn_Click;

        window_onload();

        // setRoles();
      });

      function window_onload() {
        //        require(["../js/Web/Index.js"], function (index) {
        //   $('#indexTitle').html('基础知识');
        refPageHead.value.indexTitle = '作业';
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
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '个人作业');
            break;
          case 2:
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '小组项目');
            break;
        }
      }

      //工作详情
      function WorkDetails_Click(key: number) {
        $('#WorkList').hide();
        $('#WorkDetails').show();
        const strWeekWork = '第' + key + '周作业';
        $('#spanWeekWork').html(strWeekWork);
      }

      //工作返回
      function WorkReturn_Click() {
        $('#WorkDetails').hide();
        $('#WorkList').show();
      }

      //小组汇报详情
      function ReportDetails_Click(key: number) {
        $('#ReportList').hide();
        $('#ReportDetails').show();
        const strWeekWork = '第' + key + '次汇报';
        $('#spanReportTitle').html(strWeekWork);
      }
      //返回汇报
      function ReportReturn_Click() {
        $('#ReportDetails').hide();
        $('#ReportList').show();
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

          default:
            break;
        }
        Index.btn_Click(strCommandName, strKeyId);
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
        WorkDetails_Click,
        WorkReturn_Click,
        ReportDetails_Click,
        ReportReturn_Click,
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
    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script> -->
