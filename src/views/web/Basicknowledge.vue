<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <PageHead_Game ref="refPageHead" :title="''"></PageHead_Game>
    <!-- 网页图片切换 -->

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
                >评分标准</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(2, $event)"
                >章节课件</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(3, $event)"
                >讨论区</a
              >
            </li>
          </ul>
        </div>
        <div style="float: right; width: 74%; margin-right: 10px">
          <div class="title">
            <nav class="breadcrumb">
              <a class="breadcrumb-item" href="#/Index">首页</a>
              <a class="breadcrumb-item" href="#/Basicknowledge">基础知识</a>
              <span id="navTitle" class="breadcrumb-item active">评分标准</span>
            </nav>
          </div>
          <div class="content">
            <div class="tab-content">
              <div v-if="activeTabId === 'menu1'" id="menu1">
                <br />

                <p>
                  总成绩组成：章节测试、游戏闯关战绩、小组项目得分。
                  其中：游戏闯关，不限时间，个人作业依据游戏闯关中得分情况智能推送题目；小组项目期末上传，共计100分。
                  总成绩60分-79分可得合格证书，80分以上可得优秀证书。
                </p>
              </div>

              <div v-if="activeTabId === 'menu2'" id="menu2">
                <br />

                <div class="layui-collapse" lay-accordion="">
                  <div class="layui-colla-item">
                    <h2 class="layui-colla-title">第一章</h2>
                    <div class="layui-colla-content layui-show newList">
                      <ul>
                        <li><a href="Video">认识DW界面</a></li>
                        <li><a href="Video">添加按钮</a></li>
                        <li><a href="PracticeOperation">实践操作</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="layui-colla-item">
                    <h2 class="layui-colla-title">第二章</h2>
                    <div class="layui-colla-content">
                      <p>第一节</p>
                    </div>
                  </div>
                  <div class="layui-colla-item">
                    <h2 class="layui-colla-title">第三章</h2>
                    <div class="layui-colla-content">
                      <p>第一节</p>
                    </div>
                  </div>
                  <div class="layui-colla-item">
                    <h2 class="layui-colla-title">第四章</h2>
                    <div class="layui-colla-content">
                      <p>第一节</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="activeTabId === 'menu3'" id="menu3">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#Discuss1" role="tab"
                      >教师答疑</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#Discuss2" role="tab"
                      >综合讨论</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#Discuss3" role="tab"
                      >小组讨论</a
                    >
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div id="Discuss1" class="tab-pane fade show active">
                    <div class="divComment" style="margin: 10px">
                      <div class="comment-short" id="J_Short_TeaQA">
                        <div style="text-align: right; margin-right: 20px"
                          ><button title="添加问题" class="layui-btn layui-btn-normal layui-btn-xs">
                            <i class="layui-icon"></i>添加问题</button
                          ></div
                        ><div class="comment-title" style="margin-top: 5px"
                          ><p class="comment-all" id="Questions_Name"
                            >1、教师提出的问题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button
                              title="解答"
                              class="layui-btn layui-btn layui-btn-xs"
                              ><i class="layui-icon"></i></button
                            ></p
                          ></div
                        ><div id="J_ShortComment"
                          ><div class="comment"
                            ><div class="common-avatar J_User"
                              ><img
                                src="@/assets/img/avatar5.png"
                                style="width: 100%; height: 100%" /></div
                            ><div class="comment-block"
                              ><p class="comment-user"
                                ><span class="comment-username J_User">s1</span
                                ><span class="comment-time">2020-10-22 23:59:24</span
                                >&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User"
                                  >1楼</span
                                ></p
                              ><div class="comment-content J_CommentContent"
                                >为扎实做好常态化疫情防控工作，切实保障教职工安全和身体健康，保证医疗理赔工作有序进行，经校工会与新华人寿上海分公司协商，本学期每月理赔时间暂不固定，具体时间以每月通知为准。九月门急诊、意外医疗和住院医疗保险理赔工作的具体安排如下：</div
                              ><div class="comment-operate J_CommentOperate clearfix"
                                ><span
                                  class="J_Vote comment-operate-item comment-operate-up operate-visited"
                                  >赞<i>0</i></span
                                ></div
                              ></div
                            ></div
                          ><div class="comment"
                            ><div class="common-avatar J_User"
                              ><img
                                src="@/assets/img/avatar5.png"
                                style="width: 100%; height: 100%" /></div
                            ><div class="comment-block"
                              ><p class="comment-user"
                                ><span class="comment-username J_User">李玉龙</span
                                ><span class="comment-time">2020-10-22 15:58:31</span
                                >&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User"
                                  >2楼</span
                                ></p
                              ><div class="comment-content J_CommentContent">这是另外一个组的哦</div
                              ><div class="comment-operate J_CommentOperate clearfix"
                                ><span
                                  class="J_Vote comment-operate-item comment-operate-up operate-visited"
                                  >赞<i>0</i></span
                                ></div
                              ></div
                            ></div
                          > </div
                        ><div class="comment-title" style="margin-top: 5px"
                          ><p class="comment-all" id="Questions_Name"
                            >2、pyf的问题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button
                              title="解答"
                              class="layui-btn layui-btn layui-btn-xs"
                              ><i class="layui-icon"></i></button
                            ></p
                          ></div
                        ><div id="J_ShortComment"
                          ><div class="comment"
                            ><div class="common-avatar J_User"
                              ><img
                                src="@/assets/img/avatar5.png"
                                style="width: 100%; height: 100%" /></div
                            ><div class="comment-block"
                              ><p class="comment-user"
                                ><span class="comment-username J_User">测试教师1</span
                                ><span class="comment-time">2020-10-30 13:18:09</span
                                >&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User"
                                  >1楼</span
                                ></p
                              ><div class="comment-content J_CommentContent"
                                ><span style="color: #0066ff" name="t1"
                                  ><p>测试pyf的问题答案</p></span
                                ></div
                              ><div class="comment-operate J_CommentOperate clearfix"
                                ><span
                                  class="J_Vote comment-operate-item comment-operate-up operate-visited"
                                  >赞<i>0</i></span
                                ></div
                              ></div
                            ></div
                          > </div
                        ><div class="comment-title" style="margin-top: 5px"
                          ><p class="comment-all" id="Questions_Name"
                            >3、问题2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button
                              title="解答"
                              class="layui-btn layui-btn layui-btn-xs"
                              ><i class="layui-icon"></i></button
                            ></p
                          ></div
                        ><div id="J_ShortComment">
                          <div class="comment"
                            ><div class="common-avatar J_User"
                              ><img
                                src="@/assets/img/avatar5.png"
                                style="width: 100%; height: 100%" /></div
                            ><div class="comment-block"
                              ><p class="comment-user"
                                ><span class="comment-username J_User">测试教师1</span
                                ><span class="comment-time">2020-10-30 11:06:48</span
                                >&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User"
                                  >1楼</span
                                ></p
                              ><div class="comment-content J_CommentContent"
                                ><span style="color: #0066ff" name="t1"
                                  ><p>这是一条测试数据</p></span
                                ></div
                              ><div class="comment-operate J_CommentOperate clearfix"
                                ><span
                                  class="J_Vote comment-operate-item comment-operate-up operate-visited"
                                  >赞<i>0</i></span
                                ></div
                              ></div
                            ></div
                          ><div class="comment"
                            ><div class="common-avatar J_User"
                              ><img
                                src="@/assets/img/avatar5.png"
                                style="width: 100%; height: 100%" /></div
                            ><div class="comment-block"
                              ><p class="comment-user"
                                ><span class="comment-username J_User">测试教师1</span
                                ><span class="comment-time">2020-10-29 14:29:24</span
                                >&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User"
                                  >2楼</span
                                ></p
                              ><div class="comment-content J_CommentContent"
                                ><span style="color: #ff0000"
                                  >各学院、各单位：具体内容<span style="color: #0066ff"
                                    >，小组答案修正，</span
                                  >&nbsp;
                                  2021年鉴工作即将启动。请将本单位年鉴负责人和撰稿人名单填入“附件”报送学校办公室。
                                  特此通知。</span
                                ></div
                              ><div class="comment-operate J_CommentOperate clearfix"
                                ><span
                                  class="J_Vote comment-operate-item comment-operate-up operate-visited"
                                  >赞<i>0</i></span
                                ></div
                              ></div
                            ></div
                          ><div class="comment">
                            <div class="common-avatar J_User"
                              ><img
                                src="@/assets/img/avatar5.png"
                                style="width: 100%; height: 100%" /></div
                            ><div class="comment-block">
                              <p class="comment-user"
                                ><span class="comment-username J_User">潘以锋</span
                                ><span class="comment-time">2020-10-23 14:50:24</span
                                >&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User"
                                  >3楼</span
                                ></p
                              ><div class="comment-content J_CommentContent">
                                各学院、各单位：
                                2021年鉴工作即将启动。请将本单位年鉴负责人和撰稿人名单填入“附件”报送学校办公室。
                                特此通知。 </div
                              ><div class="comment-operate J_CommentOperate clearfix"
                                ><span
                                  class="J_Vote comment-operate-item comment-operate-up operate-visited"
                                  >赞<i>0</i></span
                                ></div
                              >
                            </div>
                          </div>
                        </div>
                        <div class="comment-title" style="margin-top: 5px"
                          ><p class="comment-all" id="Questions_Name"
                            >4、这篇论文的创新点是什么？&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button
                              title="解答"
                              class="layui-btn layui-btn layui-btn-xs"
                              ><i class="layui-icon"></i></button
                            ></p
                          ></div
                        ><div id="J_ShortComment"> </div>
                      </div>
                    </div>
                    <table
                      style="width: 100%"
                      class="table table-bordered table-hover table td table-sm"
                    >
                      <tr>
                        <td style="width: 90%">
                          <textarea
                            id="txtDiscussContent"
                            name="txtDiscussContent"
                            placeholder="请输入讨论内容"
                            class="form-control"
                            style="width: 100%; height: 100px"
                          ></textarea>
                        </td>
                        <td style="width: 10%">
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
                  <div id="Discuss2" class="tab-pane fade">
                    <br />
                    <h3>综合讨论</h3>
                  </div>
                  <div id="Discuss3" class="tab-pane fade">
                    <br />
                    <h3>小组讨论</h3>
                    <p></p>
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
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/index/css/index.css';
  import '@/assets/css/index/css/slider.css';

  import { defineComponent, onMounted, ref } from 'vue';

  import PageEnd_Game from '@/views/Shared/PageEnd_Game.vue';
  import PageHead_Game from '@/views/Shared/PageHead_Game.vue';

  import router from '@/router';

  import { Index } from '@/views/web/Index';
  // import { messagePushUsersRelationEx_ConstructorName } from '@/ts/L3ForWApiExShare/NewsAnn/clsMessagePushUsersRelationExWApi';
  import { message } from '@/utils/myMessage';
  import { SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { menu_SetActiveItemA } from '@/ts/FunClass/clsPubFun4Menu';
  import { refDivLayout } from '@/views/web/BasicknowledgeVueShare';
  export default defineComponent({
    name: 'Basicknowledge',
    components: {
      // 组件注册

      PageEnd_Game,
      PageHead_Game,
    },
    setup() {
      const activeTabId = ref('menu1');
      const refPageHead = ref();
      const mySystemName = ref('基础知识-游戏化教育平台');

      const sysTitle = ref('首页-游戏化教育平台');

      const UserName = ref('pyf');

      onMounted(() => {
        Index.divLayout = refDivLayout.value;
        Index.vuebtn_Click = btn_Click;

        window_onload();

        // setRoles();
      });

      function window_onload() {
        //        require(["../js/Web/Index.js"], function (index) {
        //   $('#indexTitle').html('基础知识');
        refPageHead.value.indexTitle = '基础知识';
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
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '评分标准');
            activeTabId.value = 'menu1';
            break;
          case 2:
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '章节课件');
            activeTabId.value = 'menu2';
            break;
          case 3:
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '讨论区');
            activeTabId.value = 'menu3';
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
        btn_Click,
        sysTitle,
        UserName,
        mySystemName,
        refPageHead,
        Menu_Click,
        DiscussSubmit_Click,
        refDivLayout,
        activeTabId,
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
    <link rel="stylesheet" href="@/assets/css/comment.css"> -->

<!-- <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script> -->
