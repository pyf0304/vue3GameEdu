<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <PageHead_Game ref="refPageHead" :title="''"></PageHead_Game>
    <!-- 网页内容信息 -->
    <div class="content">
      <div class="box1">
        <div class="title">
          <nav class="breadcrumb">
            <a class="breadcrumb-item" href="#/Index">首页</a>
            <a class="breadcrumb-item" href="#/LearningCommunity">学习社区</a>
            <span id="navTitle" class="breadcrumb-item active">战绩分享</span>
          </nav>
        </div>

        <div style="width: 100%">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                href="#Community1"
                @click="Menu_Click(1, $event)"
              >
                战绩分享
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                href="#Community2"
                @click="Menu_Click(2, $event)"
              >
                成果分享
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                href="#Community3"
                @click="Menu_Click(3, $event)"
              >
                帮助
              </a>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div id="Community1" class="tab-pane fade show active">
              <div
                style="
                  width: 100%;
                  line-height: 650px;
                  text-align: center;
                  background-color: white;
                  border-radius: 0px 0px 10px 10px;
                "
              >
                <img src="@/assets/css/index/img/add.png" />
                <span> 上传你的游戏战绩，跟小伙伴分享分享一下你的喜悦吧！ </span>
              </div>
            </div>
            <div id="Community2" class="tab-pane fade">
              <div class="ExpressLane5">
                <ul class="list_ul5">
                  <li>
                    <a href="javascript:void(0)" class="icon-0">
                      <i></i>
                      <label>第一小组</label>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="icon-0">
                      <i></i>
                      <label>第二小组</label>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)" class="icon-0">
                      <i></i>
                      <label>第三小组</label>
                    </a>
                  </li>
                </ul>
              </div>

              <div
                style="
                  width: 100%;
                  line-height: 400px;
                  text-align: center;
                  background-color: white;
                  border-radius: 0px 0px 10px 10px;
                "
              >
                <img src="@/assets/css/index/img/add.png" />
                <span> 上传小组成果，和大家一起分享一下吧！ </span>
              </div>
            </div>
            <div id="Community3" class="tab-pane fade">
              <div style="float: left; width: 25%">
                <ul class="nav nav-pills flex-column" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="pill" href="#menu1"> 常见问题 </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#menu2"> 基础知识 </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#menu3"> 冲关游戏 </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#menu4"> 小组项目 </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#menu5"> 学习社区 </a>
                  </li>
                </ul>
              </div>

              <div style="float: right; width: 74%; margin-right: 10px">
                <div class="title" style="text-align: right; float: right">
                  <table
                    id="tabQuery"
                    style="width: 500px"
                    class="table table-bordered table-hover table td"
                  >
                    <tr>
                      <td class="text-left">
                        <input
                          id="txtProblem_q"
                          name="txtProblem_q"
                          placeholder="请输入问题"
                          class="layui-input"
                          style="width: 400px"
                        />
                      </td>
                      <td>
                        <button
                          class="layui-btn"
                          lay-submit=""
                          lay-filter="sreach"
                          @click="btn_Click('Query', '')"
                        >
                          <font-awesome-icon icon="search" />
                        </button>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="content">
                  <div class="tab-content">
                    <div id="menu1" class="tab-pane fade show active newList">
                      <ul>
                        <li
                          ><a href="javascript:void(0)"
                            >我是否需要完成冲关游戏之后才能完成个人作业？</a
                          ></li
                        >
                        <li><a href="javascript:void(0)">如何上传小组作业？</a></li>
                        <li><a href="javascript:void(0)">冲关游戏获得成绩标准是什么？</a></li>
                      </ul>
                    </div>
                    <div id="menu2" class="tab-pane fade"> </div>
                    <div id="menu3" class="tab-pane fade"> </div>
                    <div id="menu4" class="tab-pane fade"> </div>
                    <div id="menu5" class="tab-pane fade"> </div>
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
  import { refDivLayout } from '@/views/web/LearningCommunityVueShare';
  export default defineComponent({
    name: 'LearningCommunity',
    components: {
      // 组件注册

      PageEnd_Game,
      PageHead_Game,
    },
    setup() {
      const activeTabId = ref('menu1');
      const refPageHead = ref();
      const mySystemName = ref('学习社区-游戏化教育平台');

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
        refPageHead.value.indexTitle = '学习社区';
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
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '战绩分享');
            break;
          case 2:
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '成果分享');
            break;
          case 3:
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '帮助');
            break;
        }
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
    font-size: 20px;
  }
</style>

<!-- <link rel="stylesheet" type="text/css" href="@/assets/css/index/css/index.css" />

    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">
    <link rel="stylesheet" href="@/assets/css/comment.css">

    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script> -->
