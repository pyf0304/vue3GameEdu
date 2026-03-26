<template>
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

    <div id="divLayout" ref="refDivLayout" class="divComContainer">
      <PageHead_Game ref="refPageHead" :title="''"></PageHead_Game>
      <!-- 网页内容信息 -->
      <div class="content">
        <div class="box1">
          <div class="title" style="height: 45px; line-height: 30px; padding-bottom: 55px">
            <div style="width: 40%; float: left; margin-top: 0px; height: 30px; line-height: 30px">
              <nav class="breadcrumb">
                <a class="breadcrumb-item" href="#/Index">首页</a>
                <a class="breadcrumb-item" href="#/PassGame">冲关游戏</a>

                <span id="LevelName" class="breadcrumb-item active"></span>
                <span id="btnQuestonExport" class="breadcrumb-item active">
                  <button
                    class="btn btn-outline-info text-nowrap"
                    id="btnExportWord"
                    name="btnExportWord"
                    title="导出数据"
                    >导出数据</button
                  >
                </span>
              </nav>
            </div>
            <div style="width: 60%; margin-top: 0px; height: 30px; line-height: 30px; float: right">
              <div
                id="page_list"
                style="
                  float: right;
                  width: 100%;
                  text-align: right;
                  padding-right: 5px;
                  margin-top: 0px;
                "
              >
                题目：
              </div>
            </div>
          </div>

          <div class="alert alert-success" style="min-height: 310px">
            <div style="float: left; width: 49%; height: 300px; overflow: auto">
              <label
                id="ContentHtmlText"
                style="font-size: 16px; float: left; color: dodgerblue"
              ></label>
            </div>
            <div style="float: right; width: 50%" id="Oldcode">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="tab" role="tab" href="#Score1"
                    >题目源代码</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" role="tab" href="#Score2">操作代码</a>
                </li>
              </ul>

              <div class="tab-content">
                <div
                  id="Score1"
                  class="tab-pane fade show active"
                  style="float: left; width: 100%; height: 265px"
                >
                  <pre>
                        <textarea id="ContentHtmlCode" rows="12" cols="88" style="background-color:lightgray;margin-top:-25px;" disabled="true"></textarea>
                        </pre>
                </div>

                <div id="Score2" class="tab-pane fade">
                  <pre>
                        <textarea id="ContentCode" rows="12" cols="88" style="background-color:lightgray;margin-top:-25px;" disabled="true"></textarea>
                        </pre>
                </div>
              </div>
            </div>
          </div>
          <div style="width: 100%">
            <div style="width: 50%; float: left">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <div class="row">
                    <div class="col-xs-6">
                      <button type="button" class="btn btn-default"
                        >源代码 <small></small>：</button
                      >
                    </div>
                    <div class="col-xs-6 text-right">
                      <button
                        type="button"
                        class="btn btn-success"
                        id="submitBTN"
                        @click="rundata()"
                        title="点击后可以去操作代码tab中查看组合代码"
                      >
                        测试运行
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button id="Checkrundata" @click="Checkrundata()" class="btn btn-success"
                        >检查</button
                      >

                      &nbsp;&nbsp;&nbsp;
                      <button
                        id="QuestionSubmit"
                        @click="QuestionSubmitClick()"
                        class="btn btn-success"
                        >提交</button
                      >
                    </div>
                    <div class="col-xs-6 text-right"
                      ><label
                        id="lblmsgtext"
                        style="margin-left: 20px; float: right; color: red"
                      ></label
                    ></div>
                  </div>
                </div>
                <div class="panel-body" style="height: 365px">
                  <textarea
                    id="textareaCode"
                    name="textareaCode"
                    placeholder="编辑代码"
                    class="layui-input"
                    style="width: 100%; height: 365px"
                  ></textarea>
                </div>
              </div>
            </div>

            <div style="width: 50%; float: right">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <button type="button" class="btn btn-default">运行结果</button>
                  <button
                    id="btnMsg"
                    type="button"
                    class="btn btn-success"
                    @click="ShowMsgClick($event)"
                    style="display: none"
                    >帮助</button
                  >
                  <div id="reg_div" style="left: 8px; top: 28px; display: none">
                    <div class="ps_div"
                      ><span style="float: right" @click="oo('reg_div').style.display = 'none'"
                        >关闭</span
                      >代码提示:</div
                    >
                    <div id="">
                      <pre>
                                <textarea id="DivMsg" name="textareaCode" placeholder="编辑代码" class="layui-input" style="width:100%; height:105px;"></textarea>
                                    </pre>
                    </div>
                  </div>

                  <button
                    id="QuestionAllSubmit"
                    @click="QuestionAllSubmitClick()"
                    class="btn btn-success"
                    style="float: right"
                    >全部提交</button
                  >
                </div>
                <div class="panel-body">
                  <div id="iframewrapper" style="height: 50%; width: 100%">
                    <iframe
                      ref="iframeResultRef"
                      frameborder="0"
                      id="iframeResult"
                      style="min-height: 200px; width: 98%"
                    ></iframe>
                  </div>

                  <div style="height: 49%; width: 100%; height: 160px; overflow: auto">
                    <label
                      id="lblmsgResult"
                      style="margin-left: 20px; float: left; color: red"
                    ></label>

                    <table
                      id="tabwucScore"
                      name="tabwucScore"
                      style="
                        width: 100%;
                        width: 100%;
                        border-collapse: separate;
                        border-spacing: 0px 5px;
                      "
                    ></table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 导出题目信息； -->
        <div id="QuestionDetail" class="div_List" style="display: none"> </div>
      </div>

      <!-- 存放标准表主键； -->
      <input id="hidCriteriaId" type="hidden" />
      <!-- 存放标准检查类型； -->
      <input id="hidExaminationTypeId" type="hidden" />
      <!-- 存放闯关批次； -->
      <input id="hidExamBatchNo" type="hidden" />
      <!-- 存放题目ID； -->
      <input id="hidQuestionId" type="hidden" />

      <!-- 存放控件ID； -->
      <input id="hidControlID" type="hidden" />'

      <!-- 存放控件类型ID； -->
      <input id="hidControlTypeID" type="hidden" />'

      <!-- 存放题目数； -->
      <input id="hidarrQuestionID" type="hidden" />
      <!-- 数据数量； -->
      <input id="hidRecCount" type="hidden" value="0" />
      <!-- 接收传值； -->
      <input id="hidDifficultyLevelId" type="hidden" />

      <input id="hidQuestionNum" type="hidden" />
      <input id="hidGameLevelId" type="hidden" value="" />

      <!-- 关卡模式； -->
      <input id="hidLevelModeTypeId" type="hidden" />

      <!-- 数据分页； -->
      <input id="hidCurrPageIndex" type="hidden" value="1" />
      <input id="hidSortQuestionnaireBy" type="hidden" />

      <!-- 算法题检查是否正确； -->
      <input id="hidCheckIsRight" type="hidden" />

      <PageEnd_Game :title="''"></PageEnd_Game>
    </div>
  </el-dialog>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/index/css/index.css';
  import '@/assets/css/index/css/slider.css';

  import $ from 'jquery';
  import { defineComponent, onMounted, ref } from 'vue';

  import PageEnd_Game from '@/views/Shared/PageEnd_Game.vue';
  import PageHead_Game from '@/views/Shared/PageHead_Game.vue';

  import router from '@/router';

  // import { messagePushUsersRelationEx_ConstructorName } from '@/ts/L3ForWApiExShare/NewsAnn/clsMessagePushUsersRelationExWApi';
  import { message } from '@/utils/myMessage';
  import {
    GetDivObjInDivObj,
    GetInputValueInDivObjN,
    GetTextAreaValueInDivObj,
    SetSpanHtmlInDivObj,
    SetTextAreaValueInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { CheckOperationQuestion } from '@/views/web/CheckOperationQuestion';
  import { refDivLayout } from './CheckOperationQuestionNewVueShare';
  export default defineComponent({
    name: 'CheckOperationQuestionNew',
    components: {
      // 组件注册

      PageEnd_Game,
      PageHead_Game,
    },
    props: {
      gameLevelId: {
        type: String,
        required: true,
        // default: '',
      },
      questionId: {
        type: Number,
        required: true,
        // default: '',
      },
    },
    setup(props) {
      const questionTypeId = ref('');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');

            CheckOperationQuestion.vuebtn_Click = btn_Click;
            CheckOperationQuestion.GetPropValue = GetPropValue;

            jQuery_ready();

            window_onload();
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

      const iframeResultRef = ref<HTMLIFrameElement | null>(null);
      const activeTabId = ref('menu1');
      const refPageHead = ref();
      const mySystemName = ref('操作类型题目检查');

      const sysTitle = ref('首页-游戏化教育平台');
      const strTitle = ref('首页-游戏化教育平台');

      const UserName = ref('pyf');

      onMounted(() => {
        CheckOperationQuestion.vuebtn_Click = btn_Click;
        CheckOperationQuestion.GetPropValue = GetPropValue;

        // jQuery_ready();

        // window_onload();
        // setRoles();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'questionId':
            return props.questionId.toString();
          case 'gameLevelId':
            return props.gameLevelId;
          case 'questionTypeId':
            return questionTypeId.value;
          default:
            return '';
        }
      }
      function window_onload() {
        //        require(["../js/Web/Index.js"], function (index) {
        //   $('#indexTitle').html('基础知识');
        //   require(["../js/Web/CheckOperationQuestion.js"], function (index) {
        refPageHead.value.indexTitle = '操作题目';
        //传递临时ID；
        GetQuestionID();

        const objPage = new CheckOperationQuestion();
        objPage.PageLoad();

        //首次加载时候，检查按钮是置灰
        $('#Checkrundata').attr('disabled', 'disabled');
        //首次加载时候，提交按钮是置灰
        $('#QuestionSubmit').attr('disabled', 'disabled');

        const iframe = iframeResultRef.value;
        if (iframe != null) {
          if (iframe.contentWindow != null) {
            iframe.contentWindow.document.body.innerText = '';
          }
          if (iframe.contentDocument != null) {
            iframe.contentDocument.write("<div id='Test'></div>");
          }
        }
      }

      function ShowHtmlcode() {
        const iframe = iframeResultRef.value;
        if (iframe != null) {
          if (iframe.contentWindow != null) {
            iframe.contentWindow.document.body.innerText = '';
          }
          if (iframe.contentDocument != null) {
            iframe.contentDocument.write("<div id='Test'></div>");
          }
        }

        //判断题目是否有自带的html代码，如果有则把它存放到js文本框，用于后期操作；
        if (GetTextAreaValueInDivObj(refDivLayout.value, 'ContentHtmlCode') != '') {
          const text = GetTextAreaValueInDivObj(refDivLayout.value, 'ContentHtmlCode');

          if (iframe != null) {
            if (iframe.contentDocument != null) {
              iframe.contentDocument.write(text);
            }
          }
        }
      }

      //运行文本域内容按钮
      function rundata() {
        //获取输入框内的数据
        const text = GetTextAreaValueInDivObj(refDivLayout.value, 'textareaCode');
        // 先清空iframe

        const iframe = iframeResultRef.value;
        if (iframe != null) {
          if (iframe.contentWindow != null) {
            iframe.contentWindow.document.body.innerText = '';
          }
        }

        if (text == '') {
          alert('请编写指定要求代码再运行！');
        } else {
          //判断题目是否有自带的html代码，如果有则把它存放到js文本框，用于后期操作；
          if (GetTextAreaValueInDivObj(refDivLayout.value, 'ContentHtmlCode') != '') {
            //将输入框内的数据传给iframe
            const iframe = iframeResultRef.value;
            if (iframe != null) {
              if (iframe.contentWindow != null) {
                iframe.contentWindow.document.body.innerText = '';
              }
            }
            const texthtml = GetTextAreaValueInDivObj(refDivLayout.value, 'ContentHtmlCode');
            if (iframe != null) {
              if (iframe.contentDocument != null) {
                iframe.contentDocument.write(texthtml);
              }
            }
          }

          //将输入框内的数据传给iframe

          if (iframe != null) {
            if (iframe.contentDocument != null) {
              iframe.contentDocument.write(text);
            }
          }

          //首次运行加载时候，检查提交按钮去掉置灰
          $('#Checkrundata').attr('disabled', 'false');

          //获取用户编辑代码和源代码 然后组合替换更新到操作代码中；
          //提供源代码 ContentHtmlCode
          const strContentHtmlCode = GetTextAreaValueInDivObj(
            refDivLayout.value,
            'ContentHtmlCode',
          );

          const strNewText = '<head>' + text;
          //用户自己编写代码
          const str = strContentHtmlCode;
          const pattern = '<head>';
          const Newstr = str.replace(pattern, strNewText);
          //用户操作后的组合代码  ContentCode
          $('#ContentCode').val(Newstr);
          console.log(Newstr);

          //清空2个提示label标签；
          $('#lblmsgtext').html('');
          $('#lblmsgResult').html('');
        }
      }

      //检查事件得到子iframe框架控件属性值；
      function Checkrundata() {
        $('#tabwucScore').empty();

        const objPage = new CheckOperationQuestion();
        objPage.Checkrundata();
      }

      //提交事件
      function QuestionSubmitClick() {
        //判断题目类型 16算法题；
        const strQuestionTypeId = questionTypeId.value;

        //操作题；

        const objPage = new CheckOperationQuestion();
        objPage.SubmitClick();

        //提交事件完成后，运行、检查、提交 按钮置灰
        $('#Checkrundata').attr('disabled', 'true');
        $('#QuestionSubmit').attr('disabled', 'true');
        $('#submitBTN').attr('disabled', 'true');

        //显示提示；
        $('#btnMsg').attr('disabled', 'false');
      }

      //全部问题提交 ，提交后不可再操作；
      function QuestionAllSubmitClick() {
        //判断题目类型 16算法题；
        const strQuestionTypeId = questionTypeId.value;

        const gnl = confirm('你确定要提交吗?,提交后不可作答未答题目！');
        if (gnl == true) {
          const objPage = new CheckOperationQuestion();
          objPage.SubmitAllClick();

          //提交事件完成后，检查、按钮置灰
          $('#Checkrundata').attr('disabled', 'true');
          //提交
          $('#QuestionSubmit').attr('disabled', 'true');
          //运行
          $('#submitBTN').attr('disabled', 'true');

          //显示提示；
          $('#btnMsg').attr('disabled', 'false');
        } else {
          return false;
        }
      }

      //信息提示

      function ShowMsgClick(event: MouseEvent) {
        let e = oo(event);
        let et = e.offsetTop;
        let el = e.offsetLeft;
        while ((e = e.offsetParent)) {
          et += e.offsetTop;
          el += e.offsetLeft;
        }

        oo('reg_div').style.left = el + 'px';
        oo('reg_div').style.top = et + 20 + 'px';
        oo('reg_div').style.display = '';

        //    if (document.activeElement.id != "input_01") {
        //        //    alert("dd")
        //        oo(reg_div).style.display = 'none';
        //    }

        //window.document.@click = Object_Onclick;

        const objPage = new CheckOperationQuestion();
        objPage.ShowMsgClick();
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

        //点击分页按钮时候 清空源代码页面控件值

        SetTextAreaValueInDivObj(refDivLayout.value, 'ContentHtmlCode', '');
        //清空编辑代码的页面值

        SetTextAreaValueInDivObj(refDivLayout.value, 'textareaCode', '');
        //清空frame框架内容

        const iframe = iframeResultRef.value;
        if (iframe != null) {
          if (iframe.contentWindow != null) {
            iframe.contentWindow.document.body.innerText = '';
          }
        }

        const objPage = new CheckOperationQuestion();
        // objPage.ShowStructureChartQuestion();
        objPage.GetQuestionList();
      }

      function ShowPageList() {
        const RecCount = GetInputValueInDivObjN(refDivLayout.value, 'hidRecCount');
        for (let i = 1; i < RecCount + 1; i++) {
          const button = document.createElement('button');
          //div.innerText = strTagsContent;
          //div.href = "#Q" + strQuestionsId;
          button.className = 'btn btn-outline-primary';
          button.id = 'page_' + i;
          button.type = 'button';
          button.innerHTML = '' + i + '';

          button.setAttribute('onclick', 'Page_Click(' + i + ')');
          const page_list = GetDivObjInDivObj(refDivLayout.value, 'page_list');
          page_list.appendChild(button);
        }
      }

      function oo(obj: any) {
        return typeof obj == 'string' ? document.getElementById(obj) : obj;
      }

      function allt(id: string) {
        let e = oo(id);
        let et = e.offsetTop;
        let el = e.offsetLeft;
        while ((e = e.offsetParent)) {
          et += e.offsetTop;
          el += e.offsetLeft;
        }

        oo('reg_div').style.left = el + 'px';
        oo('reg_div').style.top = et + 20 + 'px';
        oo('reg_div').style.display = '';
        //                oo("reg_div2").innerHTML=id;    //    添加提示信息(根据id判断)

        //     oo("reg_div").style.display='none';
      }
      function bllt(id: string) {
        // oo("input_01").value=oo(id).innerHTML
        oo('reg_div').style.display = 'none';
      }

      //执行函数作为变量的js函数方法；
      function BtnFuncton(Func: string) {
        //Func(value)
        // eval(Func);
        //  eval('($("#iframeResult").contents().Func)');
        eval(Func);
      }

      function jQuery_ready() {
        const btn = document.getElementById('btn');
        const Preview = $('#QuestionDetail').attr('id');
        //   if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        //     $('#btnExportWord').onclick = function () {
        //       const Preview = $('#QuestionDetail').attr('id');
        //       //AllAreaWordTwo(document.getElementById('test'), '^')
        //       AllAreaWordTwo(Preview, '^');
        //     };
        //   } else {
        //     $('#btnExportWord').click(function () {
        //       $('#QuestionDetail').show(); //显示为了导出
        //       $('#QuestionDetail').wordExport('题目信息');

        //       $('#QuestionDetail').hide(); //导出后隐藏；
        //     });
        //   }
      }

      //  {Object} cont  要导出的html元素内容的id,注意不要加双引号@param {Object} key   分页关键字
      function AllAreaWordTwoBak(cont: string, key: string) {
        const oWD: any = new Object(); // ActiveXObject('Word.Application');
        //默认为页面视图
        const oDC = oWD.Documents.Add('', 0, 0);
        const oRange = oDC.Range(0, 1);
        //const oRange1 = oDC.Range(0,2);
        // const sel = document.body.createTextRange();
        // //参数为html元素id
        // sel.moveToElementText(cont);
        // sel.select();
        // sel.execCommand('Copy');
        // oRange.Paste();
        // oWD.Application.Visible = true;
        // //得到打开后word的selection对象
        // const selection = oWD.Selection;
        // //设置字体大小
        // selection.Font.Size = 10;
        // //ctrl+A 全选操作
        // selection.WholeStory();
        // //清除格式
        // selection.Find.ClearFormatting();
        // //指定查找关键字
        // selection.Find.Text = key;
        // //^m为手动分页符标记
        // //向下查找
        // selection.Find.Forward = true;
        // selection.Find.Wrap = 1;
        // //不区分大小写
        // selection.Find.MatchCase = false;
        // //不匹配整个单词
        // selection.Find.MatchWholeWord = false;
        // //如果找到指定字符串返回真,否则返回false
        // while (selection.Find.Execute()) {
        //   //插入分页符,分页符常量为7,具体可查word api
        //   selection.InsertBreak(7);
        // }
      }
      function AllAreaWordTwo(cont: string, key: string): void {
        // 创建一个新的 Blob 对象，内容为要写入 Word 文档的文本
        const blob = new Blob([cont], { type: 'text/plain' });

        // 创建一个超链接元素，并设置它的 download 和 href 属性
        const link = document.createElement('a');
        link.download = 'document.txt'; // 设置下载文件的文件名
        link.href = URL.createObjectURL(blob);

        // 模拟点击超链接进行下载
        link.click();
      }
      //   function rgb2hex(rgb: string) {
      //     rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

      //     function hex(x: string) {
      //       return ('0' + parseInt(x).toString(16)).slice(-2);
      //     }

      //     return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
      //   }
      // function rgb2hex(rgb: string): string {
      //   const matchResult = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

      //   if (matchResult === null) {
      //     throw new Error('Invalid RGB format');
      //   }

      //   const [, r, g, b] = matchResult;

      //   function hex(x: string) {
      //     return ('0' + parseInt(x).toString(16)).slice(-2);
      //   }

      //   return '#' + hex(r) + hex(g) + hex(b);
      // }
      //  function GetRequest() {
      //  const url = location.search; //获取url中"?"符后的字串
      //  const theRequest = new Object();
      //  if (url.indexOf("?") != -1) {
      //      const str = url.substr(1);
      //   const   strs = str.split("&");
      //      for (let i = 0; i < strs.length; i++) {
      //          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      //      }
      //  }
      //  return theRequest;
      //  }
      function GetQuestionID() {
        //  const Request = new Object();
        //  Request = GetRequest();

        const strGameLevelId = props.gameLevelId; // Request['strGameLevelId'];

        $('#hidGameLevelId').val(strGameLevelId);
      }

      function btn_Click(strCommandName: string, strKeyId: string): string {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'SetQuestionTypeId':
            questionTypeId.value = strKeyId;
            return '';
          case 'ShowHtmlcode':
            ShowHtmlcode();
            return '';
          case 'ShowPageList':
            ShowPageList();
            return '';
          case 'getFontSize':
            return getFontSize(strKeyId);
          case 'getFontColor':
            return getFontColor(strKeyId);
          case 'isControlExist':
            return isControlExist(strKeyId);
          case 'getElementId':
            return getElementId(strKeyId);
          case 'getControlValue':
            return getControlValue(strKeyId);
          case 'getControlHtml':
            return getControlHtml(strKeyId);

          case 'Bind_EduClsList':
            refPageHead.value.Bind_EduClsList();
            return '';
          case 'setRoles':
            refPageHead.value.setRoles();
            return '';
          case 'setEduClss':
            refPageHead.value.setEduClss();
            return '';
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
        CheckOperationQuestion.btn_Click(strCommandName, strKeyId);
        return '';
      }
      function DiscussSubmit_Click() {
        message.warning('函数DiscussSubmit_Click没有实现！');
      }
      function getStyle(controlId: string) {
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其样式属性
            const style = iframeDoc.getElementById(controlId)?.style.fontSize;
            if (style) {
              // 返回获取到的 font-size 属性值
              return style;
            }
          }
        }
        return null;
        // const strtt = $('#iframeResult')
        //   .contents()
        //   .find('#' + controlId)
        //   .attr('style');
        // strvalue = strtt.match(/(?:font-size:)s*(\d+.{0,2}\d*)/)[0].replace(/font-size:/, '');
      }
      function getFontSize(controlId: string): string {
        // 使用 ref 创建 iframe 元素的引用

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其样式属性
            const element = iframeDoc.getElementById(controlId);
            if (element) {
              // 返回获取到的 font-size 属性值
              const computedStyle = window.getComputedStyle(element);
              return computedStyle.getPropertyValue('font-size');
            }
          }
        }
        return '';
      }
      function getFontColor(controlId: string): string {
        // 使用 ref 创建 iframe 元素的引用

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其样式属性
            const element = iframeDoc.getElementById(controlId);
            if (element) {
              // 返回获取到的 font-size 属性值
              const computedStyle = window.getComputedStyle(element);
              return computedStyle.getPropertyValue('color');
            }
          }
        }
        return '';
      }
      function getDisplay(controlId: string): string {
        // 使用 ref 创建 iframe 元素的引用

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其样式属性
            const element = iframeDoc.getElementById(controlId);
            if (element) {
              // 返回获取到的 font-size 属性值
              const computedStyle = window.getComputedStyle(element);
              return computedStyle.getPropertyValue('display');
            }
          }
        }
        return '';
      }
      function getControlHeight(controlId: string): string {
        // 使用 ref 创建 iframe 元素的引用

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其样式属性
            const element = iframeDoc.getElementById(controlId);
            if (element) {
              // 返回获取到的 font-size 属性值
              const computedStyle = window.getComputedStyle(element);
              return computedStyle.getPropertyValue('height');
            }
          }
        }
        return '';
      }

      function getControlWidth(controlId: string): string {
        // 使用 ref 创建 iframe 元素的引用

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其样式属性
            const element = iframeDoc.getElementById(controlId);
            if (element) {
              // 返回获取到的 font-size 属性值
              const computedStyle = window.getComputedStyle(element);
              return computedStyle.getPropertyValue('width');
            }
          }
        }
        return '';
      }
      function getOptionCount(controlId: string): number {
        // 使用 ref 创建 iframe 元素的引用
        const iframeRef = ref<HTMLIFrameElement | null>(null);
        // 使用 ref 创建存储选项数量的变量
        const optionCount = ref<number>(0);

        // 获取 iframe 元素
        const iframe = iframeRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其选项数量
            const selectElement = iframeDoc.getElementById(controlId) as HTMLSelectElement;
            if (selectElement) {
              // 更新存储选项数量的变量
              optionCount.value = selectElement.options.length;
            }
          }
        }

        // 返回选项数量
        return optionCount.value;
      }

      function getControlSize(controlId: string): number {
        // 使用 ref 创建 iframe 元素的引用
        const iframeRef = ref<HTMLIFrameElement | null>(null);
        // 使用 ref 创建存储控件数量的变量
        const controlSize = ref<number>(0);

        // 使用 onMounted 钩子在组件挂载后执行代码

        // 获取 iframe 元素
        const iframe = iframeRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其数量
            const element = iframeDoc.getElementById(controlId);
            if (element) {
              // 更新存储控件数量的变量
              controlSize.value = 1; // 如果存在，设为1，代表找到了一个元素
            }
          }
        }

        // 返回控件数量
        return controlSize.value;
      }
      function isControlExist(controlId: string): string {
        // 使用 ref 创建 iframe 元素的引用
        const iframeRef = ref<HTMLIFrameElement | null>(null);
        // 使用 ref 创建控件是否存在的标志位
        const controlExist = ref(false);

        // 使用 onMounted 钩子在组件挂载后执行代码

        // 获取 iframe 元素
        const iframe = iframeRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素
            const element = iframeDoc.getElementById(controlId);
            // 更新控件是否存在的标志位
            controlExist.value = !!element;
          }
        }

        // 返回控件是否存在的标志位
        return controlExist.value.toString();
      }

      function getElementId(controlId: string): string {
        // 使用 ref 创建 iframe 元素的引用

        // 使用 ref 创建存储元素 id 的变量
        const elementId = ref<string>('');

        // 使用 onMounted 钩子在组件挂载后执行代码

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其 id 属性值
            const element = iframeDoc.getElementById(controlId);
            if (element) {
              // 更新存储元素 id 的变量
              elementId.value = element.id;
            }
          }
        }

        // 返回元素 id
        return elementId.value;
      }
      function getElementClass(controlId: string): string | null {
        // 使用 ref 创建 iframe 元素的引用

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其样式属性
            const element = iframeDoc.getElementById(controlId);
            if (element) {
              // 返回获取到的 font-size 属性值
              const computedStyle = window.getComputedStyle(element);
              return computedStyle.getPropertyValue('class');
            }
          }
        }
        return null;
      }
      function getElementName(controlId: string): string | null {
        // 使用 ref 创建 iframe 元素的引用

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其样式属性
            const element = iframeDoc.getElementById(controlId);
            if (element) {
              // 返回获取到的 font-size 属性值
              const computedStyle = window.getComputedStyle(element);
              return computedStyle.getPropertyValue('name');
            }
          }
        }
        return null;
      }
      function getElementType(controlId: string): string | null {
        // 使用 ref 创建 iframe 元素的引用

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其样式属性
            const element = iframeDoc.getElementById(controlId);
            if (element) {
              // 返回获取到的 font-size 属性值
              const computedStyle = window.getComputedStyle(element);
              return computedStyle.getPropertyValue('type');
            }
          }
        }
        return null;
      }
      function getElementAlt(controlId: string): string | null {
        // 使用 ref 创建 iframe 元素的引用

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其样式属性
            const element = iframeDoc.getElementById(controlId);
            if (element) {
              // 返回获取到的 font-size 属性值
              const computedStyle = window.getComputedStyle(element);
              return computedStyle.getPropertyValue('alt');
            }
          }
        }
        return null;
      }
      function getElementArc(controlId: string): string | null {
        // 使用 ref 创建 iframe 元素的引用

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其样式属性
            const element = iframeDoc.getElementById(controlId);
            if (element) {
              // 返回获取到的 font-size 属性值
              const computedStyle = window.getComputedStyle(element);
              return computedStyle.getPropertyValue('src');
            }
          }
        }
        return null;
      }
      function getElementChecked(controlId: string): string | null {
        // 使用 ref 创建 iframe 元素的引用

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其样式属性
            const element = iframeDoc.getElementById(controlId);
            if (element) {
              // 返回获取到的 font-size 属性值
              const computedStyle = window.getComputedStyle(element);
              return computedStyle.getPropertyValue('checked');
            }
          }
        }
        return null;
      }

      function getControlValue(controlId: string): string {
        // 使用 ref 创建存储控件值的变量
        const controlValue = ref<string>('');

        // 使用 onMounted 钩子在组件挂载后执行代码

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其值
            const element = iframeDoc.getElementById(controlId) as HTMLInputElement;
            if (element) {
              // 更新存储控件值的变量
              controlValue.value = element.value;
            }
          }
        }

        // 返回控件值
        return controlValue.value;
      }
      function getControlHtml(controlId: string): string {
        // 使用 ref 创建存储控件值的变量
        const controlValue = ref<string>('');

        // 使用 onMounted 钩子在组件挂载后执行代码

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其值
            const element = iframeDoc.getElementById(controlId) as HTMLSpanElement;
            if (element) {
              // 更新存储控件值的变量
              controlValue.value = element.innerHTML;
            }
          }
        }

        // 返回控件值
        return controlValue.value;
      }

      function getControlText(controlId: string): string | null {
        // 使用 ref 创建 iframe 元素的引用
        const controlValue = ref<string | null>(null);

        // 获取 iframe 元素
        const iframe = iframeResultRef.value;
        if (iframe) {
          // 使用 contentWindow.document 获取 iframe 中的文档对象
          const iframeDoc = iframe.contentWindow?.document;
          if (iframeDoc) {
            // 查找指定 id 的元素并获取其样式属性
            const element = iframeDoc.getElementById(controlId) as HTMLTextAreaElement;
            if (element) {
              // 更新存储控件值的变量
              controlValue.value = element.textContent;
            }
          }
        }
        return null;
      }
      return {
        btn_Click,
        sysTitle,
        strTitle,
        UserName,
        mySystemName,
        refPageHead,

        DiscussSubmit_Click,
        refDivLayout,
        activeTabId,
        iframeResultRef,
        rundata,
        Checkrundata,
        QuestionSubmitClick,
        ShowMsgClick,
        oo,
        QuestionAllSubmitClick,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
      };
    },
  });
</script>
<style scoped>
  .box1 {
    padding: 3px 10px 10px 10px;
    background-color: white;
    border-left: solid 1px #dbdcde;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-radius: 7px 4px 4px 2px;
    margin-bottom: 10px;
    background-color: white;
  }

  .alert {
    position: relative;
    padding: 0.55rem 1.25rem;
    margin-bottom: 0.5rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    font-size: 16px;
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

  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    filter: alpha(opacity=0);
    opacity: 0;
    background: #ffffff;
  }

  BODY {
    background: #fff;
    font: 76%/1.5 Arial, sans-serif;
    color: #333;
  }

  input {
    width: 200px;
    border: 1px solid #86b9d6;
  }

  #reg_div {
    color: #154ba0;
    border: 1px solid #86b9d6;
    background: #d9eef9;
    position: absolute;
    z-index: 30;
    height: 180px;
    width: 400px;
  }

  .city {
    width: 80px;
    float: left;
    padding: 8px;
    text-align: center;
  }

  .ps_div {
    padding: 10px 10px 2px 10px;
    border-bottom: 1px dotted #ccc;
  }
</style>

<!-- 
    <script type="text/javascript" src="../lib/jquery-1.6.min.js"></script>
    -- 导出wordjs
    <script src="~/lib/FileSaver.js"></script>
    <script src="~/lib/jquery.wordexport.js"></script>

    <link rel="stylesheet" type="text/css" href="@/assets/css/index/css/index.css" />
    
    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">
    <link rel="stylesheet" href="@/assets/css/comment.css">

    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script> -->
