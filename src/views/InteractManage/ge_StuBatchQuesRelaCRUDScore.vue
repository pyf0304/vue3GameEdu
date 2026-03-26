<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <div id="divLayout" class="div_layout">
      <!-- -- 标题层 -- -->

      <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
        <label id="lblViewTitle" name="lblViewTitle" class="h5"> 学生批次题目关系CRUD </label>
        <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
        </label>
      </div>
      <!-- -- 查询层 -- -->

      <div id="divQuery" ref="refDivQuery" class="div_query">
        <table
          id="tabEdit"
          style="width: 900px"
          class="table table-bordered table-hover table td table-sm"
        >
          <tbody>
            <tr>
              <td class="text-right">
                <label
                  id="lblQuestionTypeId_q"
                  name="lblQuestionTypeId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  题型
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlQuestionTypeId_q"
                  name="ddlQuestionTypeId_q"
                  class="form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="text-right">
                <label
                  id="lblCourseChapterId_q"
                  name="lblCourseChapterId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  章节
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlCourseChapterId_q"
                  name="ddlCourseChapterId_q"
                  class="form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="text-right">
                <label
                  id="lblGameLevelId_q"
                  name="lblGameLevelId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  关卡
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlGameLevelId_q"
                  name="ddlGameLevelId_q"
                  class="form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="text-right">
                <label
                  id="lblUserId_q"
                  name="lblUserId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  用户ID
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtUserId_q"
                  name="txtUserId_q"
                  class="form-control-sm"
                  style="width: 120px"
                />
              </td>
              <td class="text-right">
                <label
                  id="lblUserName_q"
                  name="lblUserName_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  用户名
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtUserName_q"
                  name="txtUserName_q"
                  class="form-control-sm"
                  style="width: 120px"
                />
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <label
                  id="lblMarkerId_q"
                  name="lblMarkerId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  打分者
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtMarkerId_q"
                  name="txtMarkerId_q"
                  class="form-control-sm"
                  style="width: 120px"
                />
              </td>
              <td class="text-right">
                <label
                  id="lblIsSubmit_q"
                  name="lblIsSubmit_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  是否提交
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlbIsSubmit_q"
                  name="ddlbIsSubmit_q"
                  class="form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="text-right">
                <label
                  id="lblIsMarking_q"
                  name="lblIsMarking_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  是否批阅
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlbIsMarking_q"
                  name="ddlbIsMarking_q"
                  class="form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="text-right">
                <label id="lblIsHasAnswer_q" class="col-form-label text-right" style="width: 90px"
                  >有答案?
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlbIsHasAnswer_q"
                  class="form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="nav-item ml-3">
                <button
                  id="btnQuery"
                  name="btnQuery"
                  class="btn btn-outline-info btn-sm text-nowrap"
                  @click="btn_Click('Query', '')"
                  >查询</button
                >
              </td>
              <td class="nav-item ml-3">
                <button
                  id="btnExportExcel"
                  name="btnExportExcel"
                  class="btn btn-outline-warning btn-sm text-nowrap"
                  @click="btn_Click('ExportExcel', '')"
                  >导出Excel</button
                >
              </td>
            </tr>
          </tbody></table
        >
      </div>
      <!-- -- 功能区 -- -->

      <div id="divFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblge_StuBatchQuesRelaList"
              name="lblge_StuBatchQuesRelaList"
              class="col-form-label text-info"
              style="width: 250px"
            >
              学生批次题目关系列表
            </label>
          </li>

          <li class="nav-item ml-3">
            <button
              id="btnCreate"
              name="btnCreate"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Create', '')"
              >添加</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnUpdate"
              name="btnUpdate"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Update', '')"
              >修改</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnDelete"
              name="btnDelete"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Delete', '')"
              >删除</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnScoreByUserQuestion"
              name="btnScoreByUserQuestion"
              class="btn btn-outline-info btn-sm text-nowrap"
              title="打分,并按被打分用户，题目次序依次打分"
              @click="btn_Click('ScoreByUserQuestion', '')"
              >打分按用户题目</button
            >
          </li>

          <li class="nav-item ml-3">
            <button
              id="btnSetIsHasAnswer"
              name="btnSetIsHasAnswer"
              class="btn btn-outline-info btn-sm text-nowrap"
              title="根据UserAnswerResult表中是否有答案，设置是否有答案"
              @click="btn_Click('SetIsHasAnswer', '')"
              >设置是否有答案</button
            >
          </li>
        </ul>
      </div>
      <!-- -- 列表层 -- -->
      <div id="divList" ref="refDivList" class="div_List">
        <div id="divDataLst" class="div_List"> </div>
        <div id="divPager" class="pager"> </div>
      </div>
      <!-- 单选题题目展示 -->
      <div id="divQuestionShow" style="display: none">
        <div id="answerCard">
          <button
            class="btn btn-success"
            style="float: right; margin-right: 28px"
            id="btnMarkQuestions"
            @click="btn_Click('MarkQuestions', '')"
            >批改提交</button
          >
          <div class="panel-body form-horizontal" style="padding: 0px; float: right">
            <ul class="list-unstyled"></ul>
          </div>
        </div>

        <div id="divQuestionContent" class="content">
          <div
            style="
              width: 100%;
              height: auto;
              display: inline-block;
              border: 1px solid white;
              position: relative;
              margin-top: 0px;
            "
          >
            <div style="width: 98%">
              <div style="width: 100%; margin: 0px auto">
                <div
                  style="
                    width: 100%;
                    height: 100px;
                    border: 1px solid #ccc;
                    border-bottom: none;
                    background: #fff;
                  "
                >
                  <div
                    class="middle-top"
                    style="
                      width: 100%;
                      height: 50px;
                      border-bottom: 1px solid #ccc;
                      background: #2d3339;
                      position: relative;
                    "
                  >
                    <div
                      class="middle-top-left pull-left"
                      style="height: 100%; padding-left: 20px; background: #232c31; color: #fff"
                    >
                      <div
                        class="pull-left"
                        style="
                          width: 135px;
                          line-height: 20px;
                          height: 20px;
                          margin: 15px;
                          font-size: 15px;
                        "
                      >
                        <!--已做答的数量和考题总数-->
                        当前第<span class="questioned"></span>题/共<span class="question_sum"></span
                        >题
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="
                    width: 100%;
                    height: auto;
                    display: inline-block;
                    border: 1px solid #ccc;
                    border-bottom: 1px dashed #ccc;
                    background: #fff;
                  "
                >
                  <div style="width: 100%; height: 90%; padding: 20px 20px 0px 20px">
                    <!--试题区域-->
                    <ul class="list-unstyled question" id="" name="">
                      <li class="question_title"></li>
                    </ul>
                    <!--考题的操作区域-->
                    <div class="operation" style="margin-top: 20px">
                      <div class="text-right" style="margin-right: 20px">
                        <div class="form-group" style="color: #fff">
                          <label style="color: red"
                            >提示：（点击上一题、下一题时会保存当前题目答案，点击答题卡序号不会保存）</label
                          >

                          <button
                            class="btn btn-info"
                            id="UpQuestion"
                            @click="btn_Click('UpQuestion', '')"
                            >上一题</button
                          >
                          <button
                            class="btn btn-info"
                            id="nextQuestion"
                            @click="btn_Click('nextQuestion', '')"
                            >下一题</button
                          >
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
      <!-- -- 编辑层 -- -->
      <div id="divEdit" value="1"></div>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <div id="hidRegion">
      <input id="hidCurrPageIndex" type="hidden" value="1" />

      <input id="hidRecCount" type="hidden" value="0" />

      <input id="hidSortge_UserCreditsLogBy" type="hidden" value="" />

      <input id="hidSortge_UserCreditsTtlBy" type="hidden" value="" />
      <!-- 存放json数据； -->
      <input id="hidJsonData" type="hidden" />
      <!-- 存放闯关批次； -->
      <input id="hidExamBatchNo" type="hidden" />

      <!-- 存放关卡等级数据； -->
      <input id="hidDifficultyLevelId" type="hidden" />
      <!-- 存放关卡题目类型； -->
      <input id="hidQuestionTypeId" type="hidden" />
      <!-- 存放关卡题目数； -->
      <input id="hidQuestionNum" type="hidden" />
      <!-- 存放关卡主键； -->
      <input id="hidGameLevelId" type="hidden" />
      <!-- 用户知识点掌握排序； -->
      <input id="hidSortge_KnowledgesUserMasterBy" type="hidden" value="" />
      <!-- 存放相关题目类型答案； -->
      <input id="hidArrayAnswer" type="hidden" value="" />

      <!-- 辨别是查看还是继续做题； -->
      <input id="hidIsHistory" type="hidden" />
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import { ge_StuBatchQuesRelaCRUD } from '@/viewsBase/InteractManage/ge_StuBatchQuesRelaCRUD';
  import ge_StuBatchQuesRela_EditCom from '@/views/InteractManage/ge_StuBatchQuesRela_Edit.vue';
  import { ge_StuBatchQuesRela_Edit } from '@/viewsBase/InteractManage/ge_StuBatchQuesRela_Edit';
  import ge_StuBatchQuesRelaCRUDScoreEx from '@/views/InteractManage/ge_StuBatchQuesRelaCRUDScoreEx';
  import {
    refge_StuBatchQuesRela_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from './ge_StuBatchQuesRelaVueShare';
  export default defineComponent({
    name: 'GeStuBatchQuesRelaCRUD',
    components: {
      // 组件注册
      ge_StuBatchQuesRela_EditCom,
    },
    setup() {
      const strTitle = ref('学生批次题目关系维护');

      const questioned = ref(0); //数组考题编号
      onMounted(() => {
        ge_StuBatchQuesRelaCRUDScoreEx.vuebtn_Click = btn_Click;
        ge_StuBatchQuesRelaCRUDScoreEx.GetPropValue = GetPropValue;
        const objPage = new ge_StuBatchQuesRelaCRUDScoreEx();
        objPage.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'setQuestioned':
            questioned.value = Number(strKeyId);
            return;
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
        ge_StuBatchQuesRelaCRUDScoreEx.btn_Click(strCommandName, strKeyId);
      }

      // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
      // function sheet2blob(sheet, sheetName)
      // {
      // sheetName = sheetName || 'sheet1';
      // const workbook = {
      // SheetNames: [sheetName],
      // Sheets: {}
      // }
      // workbook.Sheets[sheetName] = sheet;
      // // 生成excel的配置项
      // const wopts = {
      // bookType: 'xlsx', // 要生成的文件类型
      // bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
      // type: 'binary'
      // }
      // const wbout = XLSX.write(workbook, wopts);
      // const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
      // // 字符串转ArrayBuffer
      // function s2ab(s)
      // {
      // const buf = new ArrayBuffer(s.length);
      // const view = new Uint8Array(buf);
      // for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
      // return buf;
      // }
      // return blob;
      // }

      // function openDownloadDialog(url, saveName)
      // {
      // if (typeof url == 'object' && url instanceof Blob) {
      // url = URL.createObjectURL(url); // 创建blob地址
      // }
      // const aLink = document.createElement('a');
      // aLink.href = url;
      // aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
      // const event;
      // if (window.MouseEvent) event = new MouseEvent('click');
      // else {
      // event = document.createEvent('MouseEvents');
      // event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      // }
      // aLink.dispatchEvent(event);
      // }
      // //所有用户自定义的JS函数建议都放在这里
      // function exportSpecialExcel_pyf(arrData, strFileName)
      // {
      // const sheet = XLSX.utils.aoa_to_sheet(arrData);
      //     openDownloadDialog(sheet2blob(sheet), strFileName);
      // }

      return {
        strTitle,
        btn_Click,
        refge_StuBatchQuesRela_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        questioned,
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
    text-align: center;
  }

  #demo {
    width: 1000px;
    height: 305px;
    margin: 0 auto;
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: red;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    font-weight: bold;
    font-size: 15px;
  }
  /********************************左边导航********************************/
  .leftNav {
    padding: 20px;
    width: 200px;
    height: 650px;
    overflow: hidden;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-top: solid 1px #dededf;
    border-left: solid 1px #dbdcde;
    /*border-radius: 7px 4px 4px 2px;*/
    border-radius: 2px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: left;
    background: #fff;
    font-size: 16px;
  }
  /********************************右边内容********************************/
  .rightContent {
    /*width: 690px;*/
    width: calc(100% - 210px);
    background: #fff;
    min-height: 650px;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-bottom: solid 1px #dbdcde;
    border-top: solid 1px #dededf;
    border-left: solid 1px #dbdcde;
    border-radius: 7px 4px 4px 2px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: right;
  }

  .divTree {
    /*margin-left: 10px;*/
    padding-top: 10px;
    width: 24%;
    font-size: 17px;
    min-height: 300px;
    overflow: hidden;
    /*overflow-y:scroll;*/
    overflow-y: auto;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-radius: 10px 8px 8px 4px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: left;
    background: #fff;
    font-family: 'Microsoft YaHei';
  }

  .divTree3 {
    border: solid 1px #fff;
    margin: 10px;
    /*bottom: 5%;*/
    z-index: 999;
    background: whitesmoke;
  }

  .MeetingTree {
    margin-top: 10px;
    width: 100%;
    min-height: 200px;
    border-radius: 10px 8px 8px 4px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    background-color: whitesmoke;
  }

  .breadcrumb {
    padding: 8px 15px;
    margin-bottom: 0px;
    list-style: none;
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  .rightContent .content {
    overflow: hidden;
    width: 100%;
    /* height: 580px; */
    padding: 0px;
    font-size: 15px;
  }

  #divQuestionPager {
    width: 650px;
    float: right;
  }
  /*分页样式*/
  .page_list1 {
    /*position: fixed;
                  right: 200px;
                  top: 203px;*/
    z-index: 999;
    width: 100%;
    text-align: right;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background-color: white;
    /*border: 1px solid #ddd;*/
    padding-left: 10px;
  }

  .page_list2 {
    position: fixed;
    right: 200px;
    top: 0px;
    z-index: 999;
    width: 700px;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background-color: white;
    padding-left: 10px;
  }
</style>

<!-- Layout = "~/Pages/Shared/_Layout_PC.cshtml";
    ViewData["Title"] = "学生批次题目关系维护";
    
<link rel="stylesheet" type="text/css" href="~/css/index/css/index.css" />
<link href="~/css/indexQuestion.css" rel="stylesheet" type="text/css">

<link rel="stylesheet" type="text/css" href="../css/SimpleTree.css">
<link rel="stylesheet" type="text/css" href="../css/public.css">

<link rel="stylesheet" href="../lib/bootstrap/dist/css/bootstrap.css" />
<link rel="stylesheet" href="../css/site.css" />
<link rel="shortcut icon" href="~/images/favicon.ico" type="image/x-icon" />



<script src="~/lib/xlsx.core.min.js" type="text/javascript"></script>
<script src="~/lib/xlsx.full.min.js" type="text/javascript"></script> -->
