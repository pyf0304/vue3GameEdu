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

    <div id="divLayout0" ref="refDivLayout" class="div_layout">
      <!-- 网页内容信息 -->
      <div class="content">
        <div class="box1">
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
                  <a class="nav-link active" data-toggle="tab" href="#Score1">题目源代码</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#Score2">操作代码</a>
                </li>
              </ul>

              <div class="tab-content">
                <div
                  id="Score1"
                  class="tab-pane active"
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
                        onclick="rundata()"
                      >
                        测试运行
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button id="Checkrundata" onclick="Checkrundata()" class="btn btn-success"
                        >检查</button
                      >

                      &nbsp;&nbsp;&nbsp;
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
                  <form class="form-inline">
                    <button type="button" class="btn btn-default">运行结果</button>
                    <button
                      id="btnMsg"
                      type="button"
                      class="btn btn-success"
                      onclick="ShowMsgClick(this)"
                      style="display: none; float: right"
                      >帮助</button
                    >
                    <div id="reg_div" style="left: 8px; top: 28px; display: none">
                      <div class="ps_div"
                        ><span style="float: right" onclick="oo('reg_div').style.display='none'"
                          >关闭</span
                        >代码提示:</div
                      >
                      <div id="">
                        <pre>
                                    <textarea id="DivMsg"  placeholder="编辑代码" class="layui-input" style="width:100%; height:105px;"></textarea>
                                    </pre>
                      </div>
                    </div>
                  </form>
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
                    <table
                      id="tabwucScore"
                      style="width: 100%; padding: 1px"
                      class="table table-bordered table-hover table td"
                    ></table>

                    <label
                      id="lblmsgResult"
                      style="margin-left: 20px; float: left; color: red"
                    ></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 存放标准表主键； -->
      <input id="hidCriteriaId" type="hidden" />
      <!-- 存放标准检查类型； -->
      <input id="hidExaminationTypeId" type="hidden" />
      <!-- 存放闯关批次； -->
      <input id="hidExamBatchNo" type="hidden" />
      <!-- 存放题目ID； -->
      <input id="hidQuestionID" type="hidden" />

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
      <input id="hidQuestionTypeId" type="hidden" />
      <input id="hidQuestionNum" type="hidden" />
      <input id="hidGameLevelId" type="hidden" />

      <!-- 关卡模式； -->
      <input id="hidLevelModeTypeId" type="hidden" />

      <!-- 数据分页； -->
      <input id="hidCurrPageIndex" type="hidden" value="1" />
      <input id="hidSortQuestionnaireBy" type="hidden" />

      <!-- 算法题检查是否正确； -->
      <input id="hidCheckIsRight" type="hidden" />
    </div>
  </el-dialog>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import $ from 'jquery';
  import QuestionOptions_EditCom from '@/views/QuestionaireEdit/QuestionOptions_Edit.vue';

  import { useRoute } from 'vue-router';
  import { TestQuestionName } from '@/views/QuestionaireEdit/TestQuestionName';
  import {
    GetDivObjInDivObj,
    GetInputValueInDivObjN,
    GetTextAreaValueInDivObj,
    SetTextAreaValueInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    refQuestionOptions_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from './QuestionOptionsVueShare';

  export default defineComponent({
    name: 'TestQuestionName',
    components: {
      // 组件注册
      QuestionOptions_EditCom,
    },
    props: {
      questionId: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const iframeResultRef = ref<HTMLIFrameElement | null>(null);

      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');

            TestQuestionName.vuebtn_Click = btn_Click;
            TestQuestionName.GetPropValue = GetPropValue;
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

      const route = useRoute(); // 获取当前路由信息
      const strTitle = ref('操作类型题目检查');

      onMounted(() => {
        TestQuestionName.vuebtn_Click = btn_Click;
        TestQuestionName.GetPropValue = GetPropValue;
        // window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'questionId':
            return props.questionId.toString();
          default:
            return '';
        }
      }

      function btn_Click(strCommandName: string, strKeyId: any): string {
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
        TestQuestionName.btn_Click(strCommandName, strKeyId);
        return '';
      }

      function Refresh_Click() {
        alert(`Refresh_Click`);
      }

      function GetQuestionID() {
        const strQuestionId = props.questionId;
        //传递的问题Id
        $('#hidQuestionID').val(strQuestionId);
      }

      //刷新父节点页面
      function RefreshParent() {
        // window.parent.RefreshPage();
      }

      function window_onload() {
        //传递临时ID；
        GetQuestionID();

        $('#indexTitle').html('操作题目');
        const objPage = new TestQuestionName();
        objPage.PageLoad();

        //首次加载时候，检查按钮是置灰
        $('#Checkrundata').attr('disabled', 'disabled');
        //首次加载时候，提交按钮是置灰
        //   $('#QuestionSubmit').attr("disabled", "disabled");

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

          //直接运行检查事件
          // Checkrundata();
        }
      }

      //检查事件得到子iframe框架控件属性值；
      function Checkrundata() {
        $('#tabwucScore').empty();

        const objPage = new TestQuestionName();
        objPage.Checkrundata();
      }

      //提交事件
      function QuestionSubmitClick() {
        //判断题目类型 16算法题；
        const strQuestionTypeId = $('#hidQuestionTypeId').val();

        const objPage = new TestQuestionName();
        objPage.SubmitClick();

        //提交事件完成后，运行、检查、提交 按钮置灰
        $('#Checkrundata').attr('disabled', 'true');
        // $('#QuestionSubmit').attr("disabled", true);
        $('#submitBTN').attr('disabled', 'true');

        //显示提示；
        $('#btnMsg').attr('disabled', 'false');
      }

      //信息提示

      function ShowMsgClick(id: string) {
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

        const objPage = new TestQuestionName();
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
        const objPage = new TestQuestionName();
        objPage.ShowStructureChartQuestion();
      }
      function ShowPageList() {
        const RecCount = GetInputValueInDivObjN(refDivList.value, 'hidRecCount');
        for (let i = 1; i < RecCount + 1; i++) {
          const button = document.createElement('button');
          //div.innerText = strTagsContent;
          //div.href = "#Q" + strQuestionsId;
          button.className = 'btn btn-outline-primary';
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

          const page_list = GetDivObjInDivObj(refDivLayout.value, 'page_list');
          page_list.appendChild(button);
        }
      }

      function oo(obj: any) {
        return typeof obj == 'string' ? document.getElementById(obj) : obj;
      }

      function allt(id: any) {
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
      function bllt(id: any) {
        // oo("input_01").value=oo(id).innerHTML
        oo('reg_div').style.display = 'none';
      }

      //执行函数作为变量的js函数方法；
      function BtnFuncton(Func: any) {
        //Func(value)
        // eval(Func);
        //  eval('($("#iframeResult").contents().Func)');
        eval(Func);
      }

      return {
        strTitle,
        btn_Click,
        refQuestionOptions_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        Refresh_Click,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
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
    Layout = "~/Pages/Shared/_Layout_TestQuestion.cshtml";
    ViewData["Title"] = "操作类型题目检查";

    <link rel="stylesheet" type="text/css" href="~/css/index/css/index.css" />
    
    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">
    <link rel="stylesheet" href="~/css/comment.css">

    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script>
    <script src="../lib/jquery/dist/jquery.js"></script>
    <script src="../lib/bootstrap/dist/js/bootstrap.js"></script>
    <script src="~/lib/bootstrap/dist/js/bootstrap.min.js"></script>

    <script src="../lib/require/require.js" data-main="../js/src/config"></script>



 -->
