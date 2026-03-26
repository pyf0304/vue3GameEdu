<template>
  <div id="divLayout_Chanllege" ref="refDivLayout">
    <div class="list_ul3 divParent" id="divGameLevelLst"> </div>

    <!-- 单选题题目展示 -->
    <div id="divQuestionShow" style="display: none">
      <div id="answerCard">
        <button
          class="btn btn-success"
          style="float: right; margin-right: 28px"
          id="submitQuestions"
          @click="btn_Click('submitQuestions', '')"
          >闯关提交</button
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
                      当前第<span id="spnQuestioned" class="questioned"></span>题/共<span
                        class="question_sum"
                      ></span
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
                  <ul class="list-unstyled question" id="">
                    <li class="liQuestion_title"></li>
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

    <!-- 操作题题目展示 -->
    <div id="divCaozuoQuestionList" style="display: none">
      <br />
      <ul class="list_ul3" id="CaozuotiList"> </ul>
    </div>

    <StructureChartQuestionCom
      ref="refStructureChartQuestion"
      :difficulty-level-id="difficultyLevelId"
      :question-type-id="questionTypeId"
      :question-num="questionNum"
      :game-level-id="gameLevelId"
      :game-level-name="gameLevelName"
      :level-mode-type-id="levelModeTypeId"
    ></StructureChartQuestionCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import { defineComponent, onMounted, ref } from 'vue';

  import router from '@/router';

  import { PassGame_Recommend } from '@/views/web/PassGame_Recommend';

  import StructureChartQuestionCom from '@/viewsShare/LearnChart/StructureChartQuestion.vue';
  import clsCheck, { getCheckValueInDivObj } from '@/ts/FunClass/clsCheck';
  import { clsQuestionnaireENEx } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireENEx';
  import { useQuestionOptionsStore } from '@/store/modules/questionOptions';
  import { GetInputValueInDivObj, SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { enumChallengeMode } from '@/ts/FunClass/enumChallengeMode';
  import { refDivLayout } from '@/views/GameLearn/ge_UserCreditsLogVueShare';

  export default defineComponent({
    name: 'PassGame_Recommend',
    components: {
      // 组件注册
      StructureChartQuestionCom,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      // isShowEduCls: {
      //   type: String,
      //   required: true,
      // },
      // isShowPaperIframe: {
      //   type: String,
      //   required: true,
      // },
      // isShowTopic: {
      //   type: String,
      //   required: true,
      // },
      // isShowMajor: {
      //   type: String,
      //   required: true,
      // },
      // isShowSearch: {
      //   type: String,
      //   required: true,
      // },
      // isShowAttention: {
      //   type: String,
      //   required: true,
      // },
      // paperId: {
      //   type: String,
      //   required: true,
      // },
      // headerHeight: {
      //   type: String,
      //   required: true,
      //   default: '60',
      // },
    },
    setup(props) {
      const questionOptionsStore = useQuestionOptionsStore();
      const examBatchNo = ref('');
      const challengeMode = ref('');
      const questions: Array<clsQuestionnaireENEx> = [];
      const itemList = ['A', 'B', 'C', 'D', 'E', 'F'];
      let activeQuestion = 0; //当前操作的考题编号

      let questioned = 0; //数组考题编号
      const checkQues: Array<clsCheck> = []; //已做答的题的集合
      let intQuestion: number = 0;
      const refStructureChartQuestion = ref();

      const difficultyLevelId = ref('');
      const questionTypeId = ref('');
      const questionNum = ref(0);
      const gameLevelId = ref('');
      const gameLevelName = ref('');
      const levelModeTypeId = ref('');
      const questionId = ref(0);
      const refKnowledgeMasterChart = ref();
      onMounted(() => {
        PassGame_Recommend.divLayout = refDivLayout.value;
        PassGame_Recommend.vuebtn_Click = btn_Click;
        PassGame_Recommend.GetPropValue = GetPropValue;

        // const objPage = new PassGame_Recommend();
        // objPage.PageLoad();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'title':
            return props.title;
          case 'examBatchNo':
            return examBatchNo.value;
          case 'challengeMode':
            return challengeMode.value;
          default:
            return '';
        }
        return '';
      }

      //点击闯关事件
      function ChallengeQuestionClick(
        strUserId: string,
        strid_CurrEducls: string,
        strDifficultyLevelId: string,
        strQuestionTypeId: string,
        strGameLevelId: string,
        strLevelModeTypeId: string,
        strGameLevelName: string,
        strQuestionNum: number,
        strChallengeMode: string,
        strExamBatchNo: string,
      ) {
        //把查看、继续做题、重新闯关参数，存入
        PassGame_Recommend.vuebtn_Click('SetChallengeMode', strChallengeMode);

        if (strQuestionNum == 0) {
          alert('请为关卡设置题目数');
        } else {
          let objPage;
          switch (strQuestionTypeId) {
            case '02':
              //单选题
              $('#divQuestionShow').show();
              $('#divGameLevelLst').hide();
              $('#divCaozuoQuestionList').hide();

              objPage = new PassGame_Recommend();
              objPage.ChallengeQuestionClick(
                strUserId,
                strid_CurrEducls,
                strDifficultyLevelId,
                strQuestionTypeId,
                strQuestionNum,
                strGameLevelId,
                strChallengeMode,
                strExamBatchNo,
              );

              break;
            case '01':
              //填空题
              $('#divQuestionShow').show();
              $('#divGameLevelLst').hide();
              $('#divCaozuoQuestionList').hide();

              objPage = new PassGame_Recommend();
              objPage.ChallengeQuestionClick(
                strUserId,
                strid_CurrEducls,
                strDifficultyLevelId,
                strQuestionTypeId,
                strQuestionNum,
                strGameLevelId,
                strChallengeMode,
                strExamBatchNo,
              );

              break;
            case '10':
              //简答题
              $('#divQuestionShow').show();
              $('#divGameLevelLst').hide();
              $('#divCaozuoQuestionList').hide();

              objPage = new PassGame_Recommend();
              objPage.ChallengeQuestionClick(
                strUserId,
                strid_CurrEducls,
                strDifficultyLevelId,
                strQuestionTypeId,
                strQuestionNum,
                strGameLevelId,
                strChallengeMode,
                strExamBatchNo,
              );

              break;
            case '11':
              //判断题
              $('#divQuestionShow').show();
              $('#divGameLevelLst').hide();
              $('#divCaozuoQuestionList').hide();

              objPage = new PassGame_Recommend();
              objPage.ChallengeQuestionClick(
                strUserId,
                strid_CurrEducls,
                strDifficultyLevelId,
                strQuestionTypeId,
                strQuestionNum,
                strGameLevelId,
                strChallengeMode,
                strExamBatchNo,
              );

              break;

            case '03':
              //多选题
              $('#divQuestionShow').show();
              $('#divGameLevelLst').hide();
              $('#divCaozuoQuestionList').hide();

              objPage = new PassGame_Recommend();
              objPage.ChallengeQuestionClick(
                strUserId,
                strid_CurrEducls,
                strDifficultyLevelId,
                strQuestionTypeId,
                strQuestionNum,
                strGameLevelId,
                strChallengeMode,
                strExamBatchNo,
              );

              break;

            case '17':
              //连连看多选题
              // xadmin1_open(
              //   '连连看多选题',
              //   '../Web/StructureChartQuestion?strDifficultyLevelId=' +
              //     strDifficultyLevelId +
              //     '&strQuestionTypeId=' +
              //     strQuestionTypeId +
              //     '&strGameLevelId=' +
              //     strGameLevelId +
              //     '&strLevelModeTypeId=' +
              //     strLevelModeTypeId +
              //     '&strGameLevelName=' +
              //     strGameLevelName +
              //     '&strQuestionNum=' +
              //     strQuestionNum +
              //     '',
              //   '',
              //   '',
              //   true,
              // );
              difficultyLevelId.value = strDifficultyLevelId;
              questionTypeId.value = strQuestionTypeId;
              gameLevelId.value = strGameLevelId;
              levelModeTypeId.value = strLevelModeTypeId;
              gameLevelName.value = strGameLevelName;
              questionNum.value = strQuestionNum;
              refStructureChartQuestion.value.showDialog();
              break;
            case '09':
              //操作题
              $('#divGameLevelLst').hide();
              $('#divQuestionShow').hide();
              $('#divCaozuoQuestionList').show();

              //require(["../js/Web/PassGame_Recommend.js"], function (index) {

              //    const objPage = new PassGame_Recommend();
              //    objPage.CaozuoQuestionClick(strUserId, strid_CurrEducls, strDifficultyLevelId, strQuestionTypeId, strQuestionNum);
              //});
              //if (strChallengeMode == "01") {
              //    //查看上一次
              //    window.location.href = '../Web/OperationQuestionHistory?strGameLevelId=' + strGameLevelId + '&strExamBatchNo=' + strExamBatchNo + '';
              //}
              //else {
              //    window.location.href = '../Web/CheckOperationQuestionNew?strGameLevelId=' + strGameLevelId + '';
              //}
              if (strChallengeMode == enumChallengeMode.ViewLast_01) {
                //查看上一次
                window.location.href =
                  '../Web/OperationQuestionHistory?strGameLevelId=' +
                  strGameLevelId +
                  '&strChallengeMode=1&strExamBatchNo=' +
                  strExamBatchNo +
                  '';
              } else if (strChallengeMode == enumChallengeMode.StartGame_02) {
                window.location.href =
                  '../Web/CheckOperationQuestionNew?strGameLevelId=' + strGameLevelId + '';
              } else {
                //继续闯关3
                window.location.href =
                  '../Web/OperationQuestionHistory?strGameLevelId=' +
                  strGameLevelId +
                  '&strChallengeMode=3&strExamBatchNo=' +
                  strExamBatchNo +
                  '';
              }
              break;
            case '16':
              //算法
              $('#divGameLevelLst').hide();
              $('#divQuestionShow').hide();
              $('#divCaozuoQuestionList').show();

              //require(["../js/Web/PassGame_Recommend.js"], function (index) {

              //    const objPage = new PassGame_Recommend();
              //    objPage.CaozuoQuestionClick(strUserId, strid_CurrEducls, strDifficultyLevelId, strQuestionTypeId, strQuestionNum);
              //});

              if (strChallengeMode == enumChallengeMode.ViewLast_01) {
                //查看上一次
                window.location.href =
                  '../Web/OperationQuestionHistory?strGameLevelId=' +
                  strGameLevelId +
                  '&strChallengeMode=1&strExamBatchNo=' +
                  strExamBatchNo +
                  '';
              } else if (strChallengeMode == enumChallengeMode.StartGame_02) {
                window.location.href =
                  '../Web/CheckOperationQuestionNew?strGameLevelId=' + strGameLevelId + '';
              } else {
                //继续闯关3
                window.location.href =
                  '../Web/OperationQuestionHistory?strGameLevelId=' +
                  strGameLevelId +
                  '&strChallengeMode=3&strExamBatchNo=' +
                  strExamBatchNo +
                  '';
              }

              break;

            case '14':
              //操作题
              // xadmin1_open(
              //   '知识结构图题目',
              //   '../Web/StructureChartQuestion?strDifficultyLevelId=' +
              //     strDifficultyLevelId +
              //     '&strQuestionTypeId=' +
              //     strQuestionTypeId +
              //     '&strGameLevelId=' +
              //     strGameLevelId +
              //     '&strLevelModeTypeId=' +
              //     strLevelModeTypeId +
              //     '&strGameLevelName=' +
              //     strGameLevelName +
              //     '&strQuestionNum=' +
              //     strQuestionNum +
              //     '',
              //   '',
              //   '',
              //   true,
              // );
              difficultyLevelId.value = strDifficultyLevelId;
              questionTypeId.value = strQuestionTypeId;
              gameLevelId.value = strGameLevelId;
              levelModeTypeId.value = strLevelModeTypeId;
              gameLevelName.value = strGameLevelName;
              questionNum.value = strQuestionNum;
              refStructureChartQuestion.value.showDialog();
              break;
            case '15':
              //操作题
              // xadmin1_open(
              //   '知识结构图题目',
              //   '../Web/StructureChartQuestion?strDifficultyLevelId=' +
              //     strDifficultyLevelId +
              //     '&strQuestionTypeId=' +
              //     strQuestionTypeId +
              //     '&strGameLevelId=' +
              //     strGameLevelId +
              //     '&strLevelModeTypeId=' +
              //     strLevelModeTypeId +
              //     '&strGameLevelName=' +
              //     strGameLevelName +
              //     '&strQuestionNum=' +
              //     strQuestionNum +
              //     '',
              //   '',
              //   '',
              //   true,
              // );
              difficultyLevelId.value = strDifficultyLevelId;
              questionTypeId.value = strQuestionTypeId;
              gameLevelId.value = strGameLevelId;
              levelModeTypeId.value = strLevelModeTypeId;
              gameLevelName.value = strGameLevelName;
              questionNum.value = strQuestionNum;
              refStructureChartQuestion.value.showDialog();
              break;
          }
        }
      }

      ////展示考卷信息
      async function showQuestion(id: number, questions: Array<clsQuestionnaireENEx>) {
        SetSpanHtmlInDivObj(refDivLayout.value, 'spnQuestioned', (id + 1).toString());
        questioned = (id + 1) / questions.length;
        if (activeQuestion != undefined) {
          $('#ques' + activeQuestion)
            .removeClass('question_id')
            .addClass('active_question_id');
        }
        activeQuestion = id;
        $('.question').find('.question_info').remove();
        const question = questions[id];
        $('.liQuestion_title').html(
          '<strong>第 ' + (id + 1) + ' 题 、</strong>' + question.questionName,
        );
        const items = await questionOptionsStore.getObjLstByQuestionId(question.questionId);
        let item = '';
        for (let i = 0; i < items.length; i++) {
          item =
            "<li class='question_info' @click='clickTrim(this)' id='item" +
            i +
            "'><input type='radio' name='item' value='" +
            itemList[i] +
            "'>&nbsp;" +
            itemList[i] +
            '.' +
            items[i] +
            '</li>';
          $('.question').append(item);
        }
        $('.question').attr('questionId', 'question' + id);
        $('#ques' + id)
          .removeClass('active_question_id')
          .addClass('question_id');
        for (let i = 0; i < checkQues.length; i++) {
          if (checkQues[i].id == id) {
            $('#' + checkQues[i].item)
              .find('input')
              .prop('checked', 'checked');
            $('#' + checkQues[i].item).addClass('clickTrim');
            $('#ques' + activeQuestion)
              .removeClass('question_id')
              .addClass('clickQue');
          }
        }
        //   progress();
      }
      /*选中考题 .单选、多选题*/
      // const intQuestion;
      function clickTrim(source: any) {
        const id = source.id;
        btn_Click('clickTrim', id);
      }
      function clickTrimBak(source: any) {
        const id = source.id;
        const examId = $('#' + id)
          .find('input[name=item]')
          .attr('id');
        let ques = 0;

        //const type = $(this).attr("data-type");

        //如果是checkbox那么就不用限定单选规则；
        const type = $('#' + id)
          .find('input[name=item]')
          .attr('type');
        switch (type) {
          case 'checkbox':
            //先判断通过id获取到checkbox状态是否勾选；
            if (
              $('#' + id)
                .find('input[name=item]:checked')
                .is(':checked')
            ) {
              $('#' + id)
                .find('input')
                .prop('checked', false);
              //去掉答题卡颜色
              $('#ques' + activeQuestion)
                .removeClass('question_id')
                .addClass('clickQue'); //答题卡
              $('#' + id).removeClass('clickTrim');
              //判断是否还有勾选的checkbox，如果没有那么去掉答题卡的颜色
              // if ($("#" + id).find("input[name=item]:checked").length > 0) {
              if ($('input[type=checkbox]:checked').length > 0) {
                // $("#ques" + activeQuestion).removeClass("question_id").addClass("clickQue");//答题卡
              } else {
                $('#ques' + activeQuestion)
                  .removeClass('question_id')
                  .removeClass('clickQue'); //答题卡
                // $("#" + id).removeClass("clickTrim");
              }
              //去掉勾选复选框后，同时需要去掉二维数组中 该答案的值；
              for (let i = 0; i < checkQues.length; i++) {
                //循环当前数组答案
                //判断如果Id相同时候
                if (checkQues[i].id == activeQuestion && checkQues[i].item == id) {
                  //const strItem = "ItemNo";
                  checkQues.splice(i, 1);
                  //const newData = checkQues[i].filter(function (item) {
                  //    delete item[checkQues[i]]
                  //    return item;
                  //});
                  //checkQues = newData;
                }
              }
            } else {
              ////判断是否还有勾选的checkbox，如果没有那么去掉答题卡的颜色
              //if ($("#" + id).find("input[name=item]:checked“).length > 0) {
              //没有勾选时候，变成勾选状态，同时判断该答案是否已经存在数组中，如果
              $('#' + id)
                .find('input')
                .prop('checked', 'checked');
              $('#' + id).addClass('clickTrim');
              $('#ques' + activeQuestion)
                .removeClass('question_id')
                .addClass('clickQue'); //答题卡
              if (
                checkQues.length == 0 ||
                (intQuestion != activeQuestion && activeQuestion != ques)
              ) {
                const check = new clsCheck();
                check.examId = Number(examId) ?? 0; //获取当前题目ID；
                check.id = activeQuestion; //获取当前考题的编号
                check.item = id; //获取当前考题的选项ID
                // check.answer = $("#" + id).find("input[name=item]:checked").val();//获取当前考题的选项值
                check.answer = getCheckValueInDivObj(refDivLayout.value, id).toString();

                check.type = type; //存放类型；
                checkQues.push(check);
              } else {
                //点击勾选checkbox 时候需要判断是否存在此值，不存在则需要插入；
                if (checkQues.indexOf(id) > -1) {
                  // && checkQues.indexOf($(this).item) > -1) {
                  //则包含该元素
                } else {
                  const check = new clsCheck();
                  check.examId = Number(examId) ?? 0; //获取当前题目ID；
                  check.id = activeQuestion; //获取当前考题顺序的编号
                  check.item = id; //获取当前考题的选项ID
                  // check.answer = $("#" + id).find("input[name=item]:checked").val();//获取当前考题的选项值
                  check.answer = getCheckValueInDivObj(refDivLayout.value, id).toString();

                  check.type = type; //存放类型；
                  checkQues.push(check);
                }
              }
            }
            break;
          case 'radio':
            $('#' + id)
              .find('input')
              .prop('checked', 'checked');
            $('#' + id).addClass('clickTrim');
            $('#ques' + activeQuestion)
              .removeClass('question_id')
              .addClass('clickQue'); //答题卡
            for (let i = 0; i < checkQues.length; i++) {
              if (checkQues[i].id == activeQuestion && checkQues[i].item != id) {
                ques = checkQues[i].id;
                checkQues[i].item = id; //获取当前考题的选项ID
                // checkQues[i].answer = $("#" + id).find("input[name=item]:checked").val();//获取当前考题的选项值
                checkQues[i].answer = getCheckValueInDivObj(refDivLayout.value, id).toString();
              }
            }
            if (
              checkQues.length == 0 ||
              (intQuestion != activeQuestion && activeQuestion != ques)
            ) {
              const check = new clsCheck();
              check.examId = Number(examId) ?? 0; //获取当前题目ID；
              check.id = activeQuestion; //获取当前考题的顺序编号
              check.item = id; //获取当前考题的选项ID
              // check.answer = $("#" + id).find("input[name=item]:checked").val();//获取当前考题的选项值
              check.answer = getCheckValueInDivObj(refDivLayout.value, id).toString();
              check.type = type; //存放类型；
              checkQues.push(check);
            }
            $('.question_info').each(function () {
              const otherId = $(this).attr('id');
              if (otherId != id) {
                $('#' + otherId)
                  .find('input')
                  .prop('checked', false);
                $('#' + otherId).removeClass('clickTrim');
              }
            });
            intQuestion = activeQuestion;
            break;
          default:
            const strMsg = '类型(type)：' + type + '没有被处理！';
            alert(strMsg);
            break;
        }
      }
      //获取input为文本时候的值 并保存
      function getInputTextValue() {
        //获取该类控件下指定Id 这里指题目ID组合item+题目号
        let examId = $('.question_infos').attr('id');
        if (examId != undefined) {
          //因为是文本框值，所以需要截取题目ID；
          examId = examId.substring(4);

          //获取该类控件下指定类型
          //const type = $(".question_infos").find("input[name=item]").attr("type");
          const type = 'text';
          //获取指定样式下的类型是Text的所有文本框
          const InputsWrapper = $('.question_infos').find('input[type=text]');
          const y = InputsWrapper.length;

          //$("#textbox input[type='text']").each(function () {
          //    alert($(this).val())
          //});
          const strText = '';
          if (y > 0) {
            $(".question_infos input[type='text']").each(function () {
              //alert($(this).val())
              const id = $(this).attr('id'); //获取当前文本框ID
              // const examId = $(".question_infos").find("input[name=item]").attr("id");
              const strText = GetInputValueInDivObj(refDivLayout.value, id ?? ''); //$(this).val();//获取文本值；
              // strText = y[i].text;

              let resultAnswer = '';
              $('#ques' + activeQuestion)
                .removeClass('question_id')
                .addClass('clickQue'); //答题卡样式
              //存答案；如果已经作答
              //需要判断是否存在此值，不存在则需要插入；
              //if (checkQues.indexOf(id) > -1 && checkQues.indexOf($(this).item) > -1) {
              //if (checkQues.indexOf(examId) > -1) {
              //则包含该元素 循环数组
              for (let i = 0; i < checkQues.length; i++) {
                //resultAnswer = "";
                if (checkQues[i].id == activeQuestion && checkQues[i].item == id) {
                  resultAnswer = 'yes'; //存在此问题的答案
                  //ques = checkQues[i].id;
                  //checkQues[i].item = id;//获取当前考题的选项ID
                  checkQues[i].answer = strText ?? ''; //把当前答案赋值给数组；
                }
              }
              if (resultAnswer == '') {
                const check = new clsCheck();
                check.examId = Number(examId) ?? 0; //获取当前题目ID；
                check.id = activeQuestion; //获取当前考题的编号
                check.item = id ?? ''; //获取当前考题的选项ID
                check.answer = strText ?? ''; //获取文本框的值；
                check.type = type; //存放类型；
                checkQues.push(check);
              }
              //去掉文本框的样式
            });
          }
        }
      }
      /*保存考题状态 已做答的状态*/
      function saveQuestionState(clickId: number) {
        //调用判断文本框类型题目答案
        getInputTextValue();

        //进行下一题操作前，把当前数据存放到数据库；
        //去掉前后双引号
        // const newquestions = eval(questions)
        const newquestions = questions;
        const question = newquestions[activeQuestion];
        const vQuestionId = question.questionId; //当前题目号；
        const vType = question.questionTypeId; //题目类型；

        //显示题目
        showQuestion(clickId, questions);
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'SetExamBatchNo':
            examBatchNo.value = strKeyId;
            return;
          case 'SetChallengeMode':
            challengeMode.value = strKeyId;
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
        PassGame_Recommend.btn_Click(strCommandName, strKeyId);
      }
      //展示习题信息

      return {
        btn_Click,

        difficultyLevelId,
        questionTypeId,
        questionNum,
        gameLevelId,
        gameLevelName,
        levelModeTypeId,
        refKnowledgeMasterChart,
        refStructureChartQuestion,
        clickTrim,
        challengeMode,
        examBatchNo,
        refDivLayout,
        // headerStyle,
      };
    },
    methods: {},
  });
</script>

<style lang="less" scoped>
  .myTitle {
    font-size: 1.05rem; /* 设置标题字体大小 */
    font-weight: bold; /* 设置标题字体粗细 */
    line-height: 1.5; /*设置内容行高 */
    color: #333; /* 设置标题字体颜色 */
    /* 其他标题样式 */
  }

  .myContent {
    font-size: 1.05rem; /* 设置内容字体大小 */
    line-height: 1.5; /*设置内容行高 */
    margin-top: 2px;
    color: #666; /* 设置内容字体颜色 */
    /* 其他内容样式 */
  }
  .subDiv {
    margin-bottom: 10px !important; /* 设置子层之间的下边距为 10px */
    margin-top: 10px;
  }
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

  .divQuestionPager {
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
  .divParent {
    display: flex;
    flex-direction: column;
  }
  .modal {
    display: none;
  }

  .modal.show {
    display: block;
  }
</style>
@/views/web/PassGame_Recommend
