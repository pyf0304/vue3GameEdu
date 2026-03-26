import $ from 'jquery';
import { clsge_ControlTypeEN } from '@/ts/L0Entity/GameLearn/clsge_ControlTypeEN';
import { clsge_InspectionResultsENEx } from '@/ts/L0Entity/GameLearn/clsge_InspectionResultsENEx';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { clstz_ContentAttachmentEN } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentEN';
import { ge_ControlType_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_ControlTypeWApi';
import { ge_InspectionResults_GetFirstObjAsync } from '@/ts/L3ForWApi/GameLearn/clsge_InspectionResultsWApi';
import { ge_InspectProcess_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsge_InspectProcessWApi';
import { Answer_GetFirstObjAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsAnswerWApi';
import {
  Questionnaire_CheckProperty4Update,
  Questionnaire_GetObjByQuestionIdAsync,
  Questionnaire_UpdateRecordAsync,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';
import { tz_ContentAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/ResourceMan/clstz_ContentAttachmentWApi';
import {
  ge_ExaminationCriteriaEx_Getge_InspectionResultsByExamTypeEx,
  ge_ExaminationCriteriaEx_SubmitQuestionEx,
} from '@/ts/L3ForWApiEx/GameLearn/clsge_ExaminationCriteriaExWApi';
import { clsOperateList, ListPara } from '@/ts/PubFun/clsOperateList';
import { clsPager } from '@/ts/PubFun/clsPager';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetInputValueInDivObj, GetTextAreaValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { useUserStore } from '@/store/modulesShare/user';

//declare function Preview(): void;
declare function ShowHtmlcode(): void;
declare function rundata(): void;

// declare function Page_Load1(): void;

declare function ShowPageList(): void;

declare function RefreshParent(): void;

declare function BtnFuncton(Func: string): void;
declare function rgb2hex(rgb: string): void;

const i = 0;
let strquestions: string;
declare function showQuestion(i: string, strquestions: string): void;
//答题卡
declare function answerCard(strquestions: string): void;

declare const window: any;

export class TestQuestionName implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => string;
  public static GetPropValue: (strPropName: string) => string;
  public static divLayout: HTMLDivElement; //界面布局的层对象
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public listPara: ListPara; //是否窄行的小表,即表中加样式： table-sm
  public static divList: HTMLDivElement; //列表区的层对象
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return TestQuestionName.divLayout;
  }

  public static objPageCRUD: TestQuestionName;
  constructor() {
    this.listPara = new ListPara(TestQuestionName.divLayout, TestQuestionName.divList);
    TestQuestionName.objPageCRUD = this;
    this.objPager = new clsPager(this);
  }

  //专门用于数据列表的界面变量，用于分页功能等
  public currPageIndex = 0;
  public divName4List = 'divList'; //列表区的层Id
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsInitShow = false; //记录是否导入分页区的变量
  public bolIsTableSm = true; //是否窄行的小表，即表中加样式： table-sm
  //public mstrListDiv = "divDataLst";//列表区数据列表层id
  public objPager: clsPager;

  public divName4Query = 'divQuery'; //查询区的层Id
  public divName4Function = 'divFunction'; //功能区的层Id
  public divName4Layout = 'divLayout'; //界面布局的层Id
  SortBy(objAnchorElement: any): void {
    throw new Error('Method not implemented.');
  }
  BindInDiv(divBind: HTMLDivElement): void {
    throw new Error('Method not implemented.');
  }
  IndexPage(intPageIndex: number): void {
    throw new Error('Method not implemented.');
  }
  PrevPage(strDivName4Pager: string): void {
    throw new Error('Method not implemented.');
  }
  NextPage(strDivName4Pager: string): void {
    throw new Error('Method not implemented.');
  }
  SetCurrPageIndex(value: number, strDivName4Pager: string): void {
    throw new Error('Method not implemented.');
  }

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 1;
  }

  public recCount = 0;
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面

    const strThisFuncName = this.PageLoad.name;
    try {
      const userStore = useUserStore();
      this.hidSortQuestionnaireBy = ' questionId Asc';
      if (userStore.userId != '') {
        //获取关卡名称等信息显示
        // const responseBindGv1 = await this.GetGameLevelMsg();
        // 获取题目批次示
        //  const responseBindGv2 = await this.GetQuestionList();

        const responseBindGv3 = await this.ShowStructureChartQuestion();

        // ShowPageList();
      } else {
        window.top.location.href = '../Web/Index';
      }
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //获取操作题目
  public async ShowStructureChartQuestion() {
    const strThisFuncName = this.ShowStructureChartQuestion.name;

    const arrtz_ContentAttachmentObjLst: Array<clstz_ContentAttachmentEN> = [];
    try {
      const userStore = useUserStore();
      const strAddressAndPort = `${clsSysPara4WebApi.CurrIPAddressAndPort_LocalPic}/${clsSysPara4WebApi.CurrPrx_Local}/`;
      let strhtml: string = '';

      let strQuestionId = this.questionId;

      //查询得到题目相关信息
      const objQuestion = await Questionnaire_GetObjByQuestionIdAsync(strQuestionId);
      if (objQuestion == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      strQuestionId = strQuestionId;

      //contentTypeId='0001' 代码题目数据源；
      const strWhereAttachment = "tableNameKey='" + strQuestionId + "' And  contentTypeId='0001'";
      //const strCourseId = clsPubLocalStorage.courseId;
      const arrtz_ContentAttachmentObjLst = await tz_ContentAttachment_GetObjLstAsync(
        strWhereAttachment,
      );

      //获取标准表的数据源
      const strCourseId = clsPubLocalStorage.courseId;

      //如果是算法题，那么不用调用检查标准表；
      const strQuestionTypeId = GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionTypeId');

      //获取传递过来的ID值进行展示；
      const strWhereCond = " questionId='" + strQuestionId + "'";

      //获取问题ID，存放隐藏控件；
      this.strQuestionId = strQuestionId;
      //存放检测类型
      // this.strExaminationTypeId = objge_Exam.examinationTypeId;

      //根据题目号 和内容类型查询题目附件表 得到想关信息；
      const arrList = arrtz_ContentAttachmentObjLst.filter(
        (x) => x.tableNameKey == strQuestionId.toString() && x.contentTypeId == '0001',
      );
      if (arrList.length > 0) {
        strhtml += '1.' + objQuestion.questionName;
        ////换行符
        const strBr = '<br/>&nbsp;&nbsp;&nbsp;&nbsp;';
        for (let i = 0; i < arrList.length; i++) {
          //判断附件资源类型
          const strResourceType = arrList[i].idResourceType;
          const strTextContent = arrList[i].textContent;
          //  strTextContent = strTextContent.replace(/\r\n/g, strBr);
          //  strTextContent = strTextContent.replace(/\n/g, strBr);

          if (strResourceType == '0004') {
            const strAddressAndPortfull = strAddressAndPort + arrList[i].filePath;
            strhtml +=
              '<br><div class="example"><img style="max-width:400px; margin-left: 10px; " src="' +
              strAddressAndPortfull +
              '"  alt="" data-action="zoom" /></div>';
          } else if (strResourceType == '0010' || strResourceType == '0011') {
            strhtml += '<br><pre><div class="example">' + strTextContent + '</div></pre>';
          } else if (strResourceType == '0015') {
            //源代码
            //判断如果questioncode字段代码不为空，那么则需要把内容填充到指定的文本域
            if (arrList[i].textContent != '') {
              $('#Oldcode').show(); //显示div
              // 把questioncode 存放右上角；
              $('#ContentHtmlCode').val(arrList[i].textContent);

              //运行事件；
              ShowHtmlcode();
            } else {
              //如果源代码字段值为空，则隐藏
              $('#Oldcode').hide(); //隐藏div
            }
          }
        }
      } else {
        strhtml += '1.' + objQuestion.questionName + '<br>';
      }

      //拼接；
      $('#ContentHtmlText').html(strhtml);

      const strUserId = userStore.userId;
      //判断题目有没有提交，如果提交了则不可以编辑
      const strWhereResultCond = " questionId='" + strQuestionId + "'";
      //调用操作题目类型表； 获取题目要求
      const objAnswer = await Answer_GetFirstObjAsync(strWhereResultCond);
      if (objAnswer != null) {
        //如果不等于说明已经把数据存入了数据库；

        //提交事件完成后，运行、检查、提交 按钮置灰
        $('#submitBTN').attr('disabled', 'false');
        $('#Checkrundata').attr('disabled', 'false');
        // $('#QuestionSubmit').attr("disabled", 'true');

        //显示提示；
        $('#btnMsg').attr('disabled', 'true');

        //把题目正确答案内容显示到编辑框；
        $('#textareaCode').val(objAnswer.answerContent);
      } else {
        //提交事件完成后，运行、检查、提交 按钮置灰
        $('#submitBTN').attr('disabled', 'false');
        $('#Checkrundata').attr('disabled', 'false');
        //    $('#QuestionSubmit').attr("disabled", 'true');

        //显示提示；
        $('#btnMsg').attr('disabled', 'true');
      }

      //运行事件
      //rundata();

      //显示完成后直接运行检查事件
      // const responseObjLst6 = await this.Checkrundata();
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async Checkrundata() {
    if ($('#iframeResult').contents().find('body').html.length < 0) {
      alert('请先点击运行窗口按钮');
    } else {
      //判断题目类型
      const strQuestionTypeId = GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionTypeId');

      //调用检查过程表数据；
      const responseObjLst6 = await this.AlgorithmQuestionCheck();

      ////检测完成之后 提示该题目汇总信息红色字体标识；
      ////该题出错（红色）
      ////如果前面都正确，就再添加一行：该题正确，恭喜您！（红色）
      //const strUserId = userStore.userId;
      //const strWhereResultCond = " questionId='" + this.strQuestionId + "' And isRight='false' And userId='" + strUserId + "'";
      ////调用操作题目类型表； 获取题目要求
      //const objge_InspectionResults: ge_InspectionResultsEN = await clsge_InspectionResults_GetFirstObjAsync(strWhereResultCond);
      //if (objge_InspectionResults != null) {
      //    //说明有检查错误，那么该题目就没通过
      //    $("#lblmsgResult").html("该题出错");
      //}
      //else {
      //    $("#lblmsgResult").html("该题正确，恭喜您！");
      //}
    }

    //点击检查加载时候，提交按钮去掉置灰
    //     $('#QuestionSubmit').attr("disabled", 'true');
  }

  //算法题检测
  public async AlgorithmQuestionCheck() {
    const strThisFuncName = this.AlgorithmQuestionCheck.name;

    //获取检查过程

    const strWhereCond = " questionId='" + this.strQuestionId + "' order by orderNum Asc";
    //得到检查过程
    const userStore = useUserStore();
    const arrge_InspectProcessObjLst = await ge_InspectProcess_GetObjLstAsync(strWhereCond);
    let strhtml: string = '';
    try {
      //0001	赋值
      //0002	运算符
      //0003	单击事件
      //0004	运算结果
      let strRun: string = ''; //定义中间变量，用来记录是否执行了函数验证，默认为空，如果有值说明已经执行了函数验证；
      this.CheckIsRight = true; //默认是true；
      let j = 0;
      for (let i = 0; i < arrge_InspectProcessObjLst.length; i++) {
        const stroperationTypeId = arrge_InspectProcessObjLst[i].operationTypeId;
        //得到控件ID
        const strControlId = arrge_InspectProcessObjLst[i].controlId;
        //得到值
        const strControlValue = arrge_InspectProcessObjLst[i].controlValue;
        //得到描述；
        const strCheckMemo = arrge_InspectProcessObjLst[i].checkMemo;
        //得到属性ID
        const strAttributeId = arrge_InspectProcessObjLst[i].attributeId;
        //检查表主键
        const criteriaId = arrge_InspectProcessObjLst[i].inspectId;
        //控件类型
        const controlTypeId = arrge_InspectProcessObjLst[i].controlTypeId;
        //操作类型；
        const strExaminationTypeId = arrge_InspectProcessObjLst[i].examinationTypeId;
        const strEventTypeId = arrge_InspectProcessObjLst[i].eventTypeId;
        const strFunctionName = arrge_InspectProcessObjLst[i].functionName; //函数名；

        if (stroperationTypeId == '0001') {
          $('#iframeResult')
            .contents()
            .find('#' + strControlId)
            .val(strControlValue);
        } else if (stroperationTypeId == '0002') {
          //验证函数；
          const str = strFunctionName;
          //获取用户编辑的文本域类容；
          const strTextAreacode = GetTextAreaValueInDivObj(this.thisDivLayout, 'textareaCode');
          if (strTextAreacode.indexOf(str) != -1) {
            // true
          } else {
            //不存在
            $('#lblmsgtext').html('提示：请正确使用函数名！');
          }
        } else if (stroperationTypeId == '0003') {
          //得到Id onclick;
          //按钮事件
          //const strCalc = $("#iframeResult").contents().find("#" + strControlId).attr("onclick");

          ////截取后2位之前数据
          //strCalc = strCalc.substr(0, strCalc.length - 2);

          //if (typeof strCalc != 'undefined' && strCalc instanceof Function) {
          // $("#iframeResult").contents().find("#" + strControlId).click();
          //这里需要读取属性值
          let strCalc;
          switch (strEventTypeId) {
            case '0001':
              //0001	 0001	鼠标点击事件
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onclick');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .click();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0002':
              //0002	0002	鼠标按下事件
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onmousedown');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .mousedown();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0003':
              //0003	onmouseup
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onmouseup');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .mouseup();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0004':
              // 0004	onmouseover	鼠标移入事件
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onmouseover');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .mouseover();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0005':
              //0005	鼠标移出事件	onmouseout

              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onmouseout');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .mouseout();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0006':
              // 0006	鼠标移动事件	onmousemove
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onmousemove');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .mousemove();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0007':
              //0007	键盘按下松开事件	onkeyup
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onkeyup');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .keyup();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0008':
              // 0008	键盘按下触发事件	onkeydown
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onkeydown');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .keydown();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0009':
              //0009	失去焦点修改事件	onchange
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onchange');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .change();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0010':
              // 0010	style.获得焦点事件	onfocus
              //获取style中font-size
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onfocus');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .focus();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;

            case '0011':
              // 0011	style.失去焦点事件	onblur
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onblur');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .blur();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;

            case '0012':
              //选择文本事件	onselect
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onselect');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .select();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }

              break;
          }

          //}
          //else {

          //    alert("请设置按钮触发正确事件的函数！");
          //    break;
          //}
        } else if (stroperationTypeId == '0004') {
          j++;
          //判断运行结果是否和页面结果一致；
          strhtml += '<tr>';
          strhtml += '<td class="NameTD" style="width: 50 %;" >';

          // const PageControlvalue = $('#iframeResult')
          //   .contents()
          //   .find('#' + strControlId)
          //   .html();
          const PageControlvalue = TestQuestionName.vuebtn_Click('getControlHtml', strControlId);

          if (strControlValue == PageControlvalue) {
            strhtml += strCheckMemo + '-----成功';
            //检测是否把所有过程都成功通过；
          } else {
            strhtml += strCheckMemo + '-----失败';
            //有一次失败则false；
            this.CheckIsRight = false;
          }
          strhtml += '</td></tr>';
        } else if (stroperationTypeId == '0005') {
          //控件属性检查
          //strControlValue 控件值；
          const responseObjLst1 = await this.GetCheckAttribute(
            strAttributeId,
            criteriaId,
            controlTypeId,
            strExaminationTypeId,
            strControlId,
            strControlValue,
          );
          strRun = '1';
        } else {
          //其他类型；
        }
      }

      //拼接；因为执行多次 所以用append
      //$("#tabwucScore").html(strhtml);
      $('#tabwucScore').append(strhtml);

      //for循环结束后  判断题目如果出错，那么则不需要显示此数据；
      //   if (this.CheckIsRight == true) {
      //保证没有异常；
      if (strRun == '1') {
        //保证已经执行了 函数验证；
        //检测完成之后 提示该题目汇总信息红色字体标识；
        //该题出错（红色）
        //如果前面都正确，就再添加一行：该题正确，恭喜您！（红色）
        const strUserId = userStore.userId;
        const strWhereResultCond =
          " questionId='" +
          this.strQuestionId +
          "' And isRight='false' And userId='" +
          strUserId +
          "'";
        //调用操作题目类型表； 获取题目要求
        const objge_InspectionResults = await ge_InspectionResults_GetFirstObjAsync(
          strWhereResultCond,
        );
        if (objge_InspectionResults != null) {
          //说明有检查错误，那么该题目就没通过
          $('#lblmsgResult').html('该题出错');
        } else {
          $('#lblmsgResult').html('该题正确，恭喜您！');

          const responseText3 = await this.UpdateRecordSave(); //修改题目测试通过

          RefreshParent();
        }
      }
      //   }
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  public async UpdateRecordSave() {
    const objQuestionnaireEN: clsQuestionnaireEN = new clsQuestionnaireEN();
    objQuestionnaireEN.questionId = Number(
      GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionId'),
    );
    objQuestionnaireEN.isTest = true;
    objQuestionnaireEN.sfUpdFldSetStr = objQuestionnaireEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objQuestionnaireEN.questionId == 0 || objQuestionnaireEN.questionId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      Questionnaire_CheckProperty4Update(objQuestionnaireEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseText = await Questionnaire_UpdateRecordAsync(objQuestionnaireEN);
      const returnBool: boolean = !!responseText;
      if (returnBool == true) {
        console.log('修改题目已测试通过！');
      }
      return returnBool;
    } catch (e) {
      const strMsg: string = `修改题目测试失败,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  //获取的检查属性
  public async GetCheckAttribute(
    strAttributeId: string,
    criteriaId: string,
    controlTypeId: string,
    strExaminationTypeId: string,
    controlId: string,
    strControlValue: string,
  ) {
    try {
      ////标准表主键
      //const criteriaId = arrge_ExaminationCriteriaObjLst[i].criteriaId;
      ////控件类型
      //const controlTypeId = arrge_ExaminationCriteriaObjLst[i].controlTypeId;
      ////操作类型；
      //const strExaminationTypeId = arrge_ExaminationCriteriaObjLst[i].examinationTypeId;
      ////判断根据标准表设定ID判断各种操作类型；
      //const controlId = arrge_ExaminationCriteriaObjLst[i].controlId;//此ID是数据库中需要操作的标准ID

      // //测试指定控件，指定ID是否存在；
      // const strinput = "input";
      // const testId = $("#iframeResult").contents().find(strinput + "[id='" + controlId + "']").attr("id");
      ////const testId = $("#iframeResult").contents().find("input[id='" + controlId + "'").attr("id");
      //alert(testId);
      //获取指定ID对应的相关属性值
      // const strid = $('#iframeResult')
      //   .contents()
      //   .find('#' + controlId)
      //   .attr('id');
      const strid = TestQuestionName.vuebtn_Click('getElementId', controlId) ?? '';

      //const strclass = $("#iframeResult").contents().find("#" + controlId).attr("class");
      ////const strvalue = $("#iframeResult").contents().find("#" + controlId).val();
      //const strvalue = $("#iframeResult").contents().find("#" + controlId).text();

      let strControlName = '';

      //这里需要判断指定的控件、指定的ID是否存在，存在则调用扩展函数去比对属性；如果不存在，则无需比对属性，说明控件创建错误；直接把数据插入到相关表；
      const arrge_ControlTypeObjLst = await ge_ControlType_GetObjLstCache();
      const objge_ControlType = arrge_ControlTypeObjLst.find(
        (x) => x.controlTypeId == controlTypeId,
      );
      if (objge_ControlType != null) {
        strControlName = objge_ControlType.controlTypeEnName; //获取控件英文名称;
      }

      // const controlId = ''; //controlId; //此ID是数据库中需要操作的标准ID

      //查询指定控件对应的ID是否存在；
      // const ResultControlId = $('#iframeResult')
      //   .contents()
      //   .find(strControlName + "[id='" + controlId + "']")
      //   .attr('id');
      const ResultControlId = TestQuestionName.vuebtn_Click('getElementId', controlId) ?? '';

      //参数用来区别比后的结果值；
      let strResultType = '';
      let strValue = '';
      if (strExaminationTypeId != '') {
        switch (strExaminationTypeId) {
          case '0001':
            //显示控件 strResultType=1 主要是用户0002 0003来区分控件是否成功；等于2则不成功

            if (ResultControlId == undefined) {
              strResultType = '2';
            } else {
              strResultType = '1';

              //这里需要读取属性值
              switch (strAttributeId) {
                case '0001':
                  //0001	value

                  // const strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .val();
                  strValue = TestQuestionName.vuebtn_Click('getControlValue', controlId);
                  break;
                case '0002':
                  //0002	html
                  // strValue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .html();
                  strValue = TestQuestionName.vuebtn_Click('getControlHtml', controlId);

                  break;
                case '0003':
                  //0003	text
                  // strValue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('text');
                  strValue = TestQuestionName.vuebtn_Click('getControlText', controlId);
                  break;
                case '0004':
                  // 0004	class
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('class');
                  strValue = TestQuestionName.vuebtn_Click('getElementClass', controlId);
                  break;
                case '0005':
                  //0005	name
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('name');

                  strValue = TestQuestionName.vuebtn_Click('getElementName', controlId);
                  break;
                case '0006':
                  // 0006	type

                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('type');
                  strValue = TestQuestionName.vuebtn_Click('getElementType', controlId);
                  break;
                case '0007':
                  //0007	alt
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('alt');
                  strValue = TestQuestionName.vuebtn_Click('getElementAlt', controlId);

                  break;
                case '0008':
                  // 0008	src
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('src');
                  strValue = TestQuestionName.vuebtn_Click('getElementArc', controlId);

                  break;
                case '0009':
                  //0009	checked
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('checked');
                  strValue = TestQuestionName.vuebtn_Click('getElementChecked', controlId);

                  break;
                case '0010':
                  // 0010	style.fontSize
                  //获取style中font-size
                  // const strtt = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('style');
                  // strvalue = strtt
                  //   .match(/(?:font-size:)s*(\d+.{0,2}\d*)/)[0]
                  //   .replace(/font-size:/, '');
                  strValue = TestQuestionName.vuebtn_Click('getFontSize', controlId);

                  break;

                case '0011':
                  // 0011	style.color
                  // strvalue = document.getElementById("iframeResult").contentWindow.document.getElementById("" + controlId).style.color;
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .css('color');

                  // strvalue = rgb2hex(strvalue);
                  strValue = TestQuestionName.vuebtn_Click('getFontColor', controlId);

                  break;

                case '0012':
                  // 0012	style.display
                  //strvalue = document.getElementById("iframeResult").contentWindow.document.getElementById("" + controlId).style.display;
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .css('display');
                  strValue = TestQuestionName.vuebtn_Click('getDisplay', controlId);

                  break;

                case '0013':
                  // 0013	style.backgroundColor
                  // strvalue = document.getElementById("iframeResult").contentWindow.document.getElementById("" + controlId).style.background;
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .css('background-color');

                  // strvalue = rgb2hex(strvalue);
                  strValue = TestQuestionName.vuebtn_Click('getFontColor', controlId);
                  break;

                case '0014':
                  //0014	style.height
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .height();
                  // strvalue = strvalue + 'px';
                  strValue = TestQuestionName.vuebtn_Click('getControlHeight', controlId);
                  strValue = strValue + 'px';
                  break;
                case '0015':
                  //0015	style.width
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .width();
                  // strvalue = strvalue + 'px';
                  strValue = TestQuestionName.vuebtn_Click('getControlWidth', controlId);
                  strValue = strValue + 'px';
                  break;
              }
            }

            break;
          case '0002':
            //隐藏控件
            if (
              $('#iframeResult')
                .contents()
                .find('#' + controlId)
                .is(':hidden')
            ) {
              strResultType = '1';
            } else {
              strResultType = '2';
            }
            break;
          case '0003':
            //删除控件
            //指定控件ID 找不到说明被删除了；
            if (ResultControlId == undefined) {
              strResultType = '1';
            } else {
              //说明存在 ，没有删除
              strResultType = '2';
            }
            break;

          case '0004':
            //获取下拉框子项数量
            //0004 获取子项值，所以strvalue 需要重新赋值；
            // strvalue = $('#iframeResult')
            //   .contents()
            //   .find('#' + controlId + ' option').length;
            strValue = TestQuestionName.vuebtn_Click('getOptionCount', controlId);

            //判断获取的界面值 和检查过程标准值是否对应
            if (strValue == strControlValue && ResultControlId != undefined) {
              strResultType = '1';
            } else {
              strResultType = '2';
            }

            break;

          default:
            strResultType = '';
            break;
        }
      } else {
        const strMsg: string = `检查类型 strExaminationTypeId变量值为空`;
        console.error(strMsg);
      }

      const strclass = '';
      //根据当前参数执行检查操作；
      const responseObjLst1 = await this.CheckAttributeSubmitClick(
        strid,
        strclass,
        strValue,
        controlId,
        criteriaId,
        controlTypeId,
        strResultType,
      );
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `获取属性函数不成功,${e}.`;
      alert(strMsg);
    }
  }

  //Id: string, Css: string, value: string,界面获取的控件参数
  //ExaminationControlId: string, criteriaId: string,数据源中 检查类型和主键类型；
  //controlTypeId: string,控件类型 ResultType: string判断控件类型值是否存在
  public async CheckAttributeSubmitClick(
    Id: string,
    Css: string,
    value: string,
    ExaminationControlId: string,
    criteriaId: string,
    controlTypeId: string,
    ResultType: string,
  ) {
    const strThisFuncName = this.CheckAttributeSubmitClick.name;
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    //const strQuestionId = "00003038";//这里先默认；
    const strQuestionId = this.strQuestionId;
    const strExamBatchNo = this.strExamBatchNo; //批次；
    const strCourseId = clsPubLocalStorage.courseId;
    //获取文本域内容；
    const strHmtlcode = GetTextAreaValueInDivObj(this.thisDivLayout, 'textareaCode');
    //const strHmtlcode = "";

    //把对应的参数存入实体对象；
    const objge_InspectionResultsENEx: clsge_InspectionResultsENEx =
      new clsge_InspectionResultsENEx();
    //主键；criteriaId
    objge_InspectionResultsENEx.criteriaId = criteriaId;
    objge_InspectionResultsENEx.userId = strUserId;
    objge_InspectionResultsENEx.examBatchNo = strExamBatchNo;
    //objge_InspectionResultsENEx.courseId = strCourseId;
    //objge_InspectionResultsENEx.controlHtml = strHmtlcode;
    if (Id == undefined) {
      Id = '';
    }
    if (Css == undefined) {
      Css = '';
    }
    if (value == undefined) {
      value = '';
    }
    //objge_InspectionResultsENEx.controlId = Id;
    //objge_InspectionResultsENEx.controlClass = Css;
    //objge_InspectionResultsENEx.controlValue = value;
    //objge_InspectionResultsENEx.result = ResultType;
    objge_InspectionResultsENEx.questionId = strQuestionId;

    const arrge_ControlTypeObjLst: Array<clsge_ControlTypeEN> = []; //控件类型

    let strhtml: string = '';
    const strControlName = '';
    try {
      //调用合并的扩展函数，验证控件、和控件相关属性；
      const arrge_InspectionResultsObjLst =
        await ge_ExaminationCriteriaEx_Getge_InspectionResultsByExamTypeEx(
          objge_InspectionResultsENEx,
        );

      let k = 0;
      if (arrge_InspectionResultsObjLst.length > 0) {
        for (let i = 0; i < arrge_InspectionResultsObjLst.length; i++) {
          k++;
          strhtml += '<tr>';
          strhtml += '<td class="NameTD" style="width: 50 %;" >';
          const inspectionName = arrge_InspectionResultsObjLst[i].inspectionName;

          strhtml += k + '.' + inspectionName;
          strhtml += '</td></tr>';
        }
      } else {
        //这里没有得到比对返回数据，说明数据库真确题目表，没有该题目数据；所以需要提示 该题目还没有设置正确答案；
        const strMsg: string = `检查结束没有出现比对值;请根据要求编写`;
        console.error(strMsg);
      }

      //拼接；
      //$("#tabwucScore").html(strhtml);
      $('#tabwucScore').append(strhtml);

      console.log('完成CheckAttributeSubmitClick!');
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  public async SubmitClick() {
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    //const strQuestionId = "00003038";//这里先默认；
    const strQuestionId = this.strQuestionId;
    const strExamBatchNo = this.strExamBatchNo; //批次；
    const strCourseId = clsPubLocalStorage.courseId;
    //获取文本域内容；
    const strHmtlcode = GetTextAreaValueInDivObj(this.thisDivLayout, 'textareaCode');
    //const strHmtlcode = "";

    //把对应的参数存入实体对象；
    const objge_InspectionResultsENEx: clsge_InspectionResultsENEx =
      new clsge_InspectionResultsENEx();

    objge_InspectionResultsENEx.criteriaId = '';
    objge_InspectionResultsENEx.userId = strUserId;
    objge_InspectionResultsENEx.examBatchNo = strExamBatchNo;
    //objge_InspectionResultsENEx.courseId = strCourseId;
    //objge_InspectionResultsENEx.controlHtml = strHmtlcode;
    ////因为参数已经提交检查，所以借用扩展实体 进行提交操作；
    //objge_InspectionResultsENEx.controlId = "";
    //objge_InspectionResultsENEx.controlClass = "";
    //objge_InspectionResultsENEx.controlValue = "";
    //if (this.CheckIsRight == true) {
    //    //没有值如果是计算算法结果，那么则为true  赋值空；
    //    objge_InspectionResultsENEx.result = "";
    //}
    //else {
    //    //有值说明出错；赋值1
    //    objge_InspectionResultsENEx.result = "1";
    //}
    objge_InspectionResultsENEx.questionId = strQuestionId;

    const responseText3 = await ge_ExaminationCriteriaEx_SubmitQuestionEx(
      objge_InspectionResultsENEx,
    );
    const returnBool: boolean = !!responseText3;
    if (returnBool == true) {
      const strMsg: string = `提交成功`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  ////算法题提交函数；
  //public async SuanfaSubmitClick() {
  //    const strUserId = userStore.userId;

  //    const strQuestionId = this.strQuestionId;
  //    const strExamBatchNo = this.strExamBatchNo;//批次；
  //    const strCourseId = clsPubLocalStorage.courseId;
  //    //获取文本域内容；
  //    const strHmtlcode = $("#textareaCode").val();
  //    //const strHmtlcode = "";

  //    //把对应的参数存入实体对象；
  //    const objge_InspectionResultsENEx: clsge_InspectionResultsENEx = new clsge_InspectionResultsENEx();

  //    objge_InspectionResultsENEx.criteriaId = "";
  //    objge_InspectionResultsENEx.userId = strUserId;
  //    objge_InspectionResultsENEx.examBatchNo = strExamBatchNo;
  //    objge_InspectionResultsENEx.courseId = strCourseId;
  //    objge_InspectionResultsENEx.controlHtml = strHmtlcode;
  //    //因为参数已经提交检查，所以借用扩展实体 进行提交操作；
  //    objge_InspectionResultsENEx.controlId = "";
  //    objge_InspectionResultsENEx.controlClass = "";
  //    objge_InspectionResultsENEx.controlValue = "";
  //    if (this.CheckIsRight == true) {
  //        //没有值如果是计算算法结果，那么则为true  赋值空；
  //        objge_InspectionResultsENEx.result = "";
  //    }
  //    else {
  //        //有值说明出错；赋值1
  //        objge_InspectionResultsENEx.result = "1";
  //    }

  //    objge_InspectionResultsENEx.questionId = strQuestionId;

  //    const responseText3 = await ge_InspectionResultsEx_SubmitQuestionEx(objge_InspectionResultsENEx);
  //    const returnBool: boolean = !!responseText3;
  //    if (returnBool == true) {
  //        const strMsg: string = `提交成功`;
  //        console.error(strMsg);
  //        alert(strMsg);
  //    }

  //    ////把对应的参数存入实体对象；
  //    //const objUserAnswerResult: clsUserAnswerResultEN = new clsUserAnswerResultEN();
  //    //objUserAnswerResult.userId = strUserId;
  //    //objUserAnswerResult.examBatchNo = strExamBatchNo;
  //    //objUserAnswerResult.courseId = strCourseId;
  //    //objUserAnswerResult.answerText = strHmtlcode;
  //    ////因为参数已经提交检查，所以借用扩展实体 进行提交操作；
  //    //objUserAnswerResult.updDate = clsPubFun4Web.getNowDate();
  //    //objUserAnswerResult.updUser = strUserId;

  //    //objUserAnswerResult.isRight = this.CheckIsRight;
  //    ////objUserAnswerResult.result = "";
  //    //objUserAnswerResult.questionId = strQuestionId;

  //    //const responseText3 = await UserAnswerResult_AddNewRecordAsync(objUserAnswerResult);
  //    //const returnBool: boolean = !!responseText3;
  //    //if (returnBool == true) {
  //    //    const strMsg: string = `提交成功`;
  //    //    console.error(strMsg);
  //    //    alert(strMsg);
  //    //}

  //}

  //帮助提示
  public async ShowMsgClick() {
    //得到当前题目Id
    const QuestionId = this.strQuestionId;
    try {
      const strWhere = "questionId = '" + QuestionId + "'";
      const objAnswer = await Answer_GetFirstObjAsync(strWhere);
      if (objAnswer != null) {
        //获取提示代码存放到隐藏层控件
        $('#DivMsg').val(objAnswer.answerContent); //显示div
      }
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `获取帮助数据不成功,${e}.`;
      alert(strMsg);
    }
  }

  public set strCriteriaId(value: string) {
    $('#hidCriteriaId').val(value);
  }
  /*
   * 存放标准表主键id
   */
  public get strCriteriaId(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidCriteriaId');
  }

  public set strExaminationTypeId(value: string) {
    $('#hidExaminationTypeId').val(value);
  }
  /*
   * 存放标准检查类型id
   */
  public get strExaminationTypeId(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidExaminationTypeId');
  }

  /*
   * 存放控件类型id ，用于提交验证时，检测用户是否正确创建；
   */
  public set strControlTypeID(value: string) {
    $('#hidControlTypeID').val(value);
  }

  public get strControlTypeID(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidControlTypeID');
  }

  public set strControlID(value: string) {
    $('#hidControlID').val(value);
  }
  /*
   * 存放控件id
   */
  public get strControlID(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidControlID');
  }

  public set strExamBatchNo(value: string) {
    $('#hidExamBatchNo').val(value);
  }

  /*
   * 存放闯关批次
   */
  public get strExamBatchNo(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidExamBatchNo');
  }

  public set strQuestionId(value: number) {
    $('#hidQuestionId').val(value);
  }
  /*
   * 存放题目ID
   */
  public get strQuestionId(): number {
    return Number(GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionId'));
  }

  // 关卡模式
  public set strLevelModeTypeId(value: string) {
    $('#hidLevelModeTypeId').val(value);
  }
  // 关卡模式
  public get strLevelModeTypeId(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidLevelModeTypeId');
  }

  /*
   * 获取当前页序号(Used In BindGv_Cache)
   */
  public get CurrPageIndex(): number {
    const strCurrPageIndex = GetInputValueInDivObj(this.thisDivLayout, 'hidCurrPageIndex');
    return Number(strCurrPageIndex);
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    $('#hidCurrPageIndex').val(value);
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortQuestionnaireBy(value: string) {
    $('#hidSortQuestionnaireBy').val(value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortQuestionnaireBy(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidSortQuestionnaireBy');
  }

  /*
   * 是否启用 (Used In Clear())
   */
  public set CheckIsRight(value: boolean) {
    $('#hidCheckIsRight').val(value.toString());
  }
  /*
   * 是否启用 (Used In PutDataToClass())
   */
  public get CheckIsRight(): boolean {
    return Boolean(GetInputValueInDivObj(this.thisDivLayout, 'hidCheckIsRight'));
  }
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: TestQuestionName;

    let strMsg = '';
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      default:
        strMsg = '命令:' + strCommandName + '在函数(AnswerCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /*
   * 存放题目ID
   */
  public get questionId() {
    const strQuestionId = Number(TestQuestionName.GetPropValue('questionId'));
    return strQuestionId;
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    console.log(sortColumnKey, sortDirection);
  }
}
