import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { clsge_GameLevelENEx } from '@/ts/L0Entity/Knowledges/clsge_GameLevelENEx';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { clsAnswerENEx } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerENEx';
import { clsUserAnswerResultENEx } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultENEx';
import { enumQuestionType } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';

import { ge_GameLevel_GetObjByGameLevelIdCache } from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { Answer_GetObjLstAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsAnswerWApi';
import { QuestionOptions_GetObjLstAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import { UserAnswerResult_GetObjLstAsync } from '@/ts/L3ForWApi/QuestionnaireResult/clsUserAnswerResultWApi';
import { QuestionType_GetObjByQuestionTypeIdCache } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import { ge_UserCreditsLogEx_GetObjByGameLevelIdAndUserId } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserCreditsLogExWApi';
import {
  AnswerEx_CopyToEx,
  AnswerEx_FuncMapByFldName,
} from '@/ts/L3ForWApiEx/QuestionaireEdit/clsAnswerExWApi';
import {
  QuestionOptionsEx_GetSpanForOptionPreEmpty,
  QuestionOptionsEx_GetSpanForOptionTitle,
} from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionOptionsExWApi';
import {
  UserAnswerResultEx_CopyToEx,
  UserAnswerResultEx_FuncMapByFldName,
} from '@/ts/L3ForWApiEx/QuestionnaireResult/clsUserAnswerResultExWApi';
import {
  GetLi_Empty,
  GetDiv_Empty,
  GetSpan_Empty,
  GetTextAreaEmpty,
  HideDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { TzMsgBox } from './TzMsgBox';
import { useUserStore } from '@/store/modulesShare/user';

declare const window: any;
/* TzMsgBoxEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class TzMsgBoxEx extends TzMsgBox {
  public static examBatchNo_Static = '';
  public objge_GameLevel: clsge_GameLevelEN = new clsge_GameLevelEN();
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage = TzMsgBoxEx.objPageEdit;
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnCloseReturn_Click();
        break;
      case 'CloseReturn': //提交
        objPage.btnCloseReturn_Click();
        break;
      default:
        const strMsg = '命令:' + strCommandName + '在函数(TzMsgBoxEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnOKUpd_Click() {
    const strCommandText: string = this.btnCloseReturn_Click.name;
    const userStore = useUserStore();
    try {
      //判断session是否失效
      if (userStore.userId != '') {
        let strInfo;
        switch (strCommandText) {
          case '关闭':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            const returnBool = await this.CloseBoxReturn();
            strInfo = returnBool ? '修改成功！' : '修改不成功！';
            strInfo += '(In ge_GameLevelCRUD.btnOKUpd_Click)';

            //显示信息框
            console.log(strInfo);
            alert(strInfo);
            if (returnBool == true) {
              // HideDialog();
              this.iShowList.BindGv(clsge_GameLevelEN._CurrTabName, returnBool.toString());
            }

            break;
          default:
            const strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnOKUpd_Click())`;
            alert(strMsg);
            break;
        }
      } else {
        alert('登录超时，请重新登录');
        window.top.location.href = '../Web/Login';
      }
      HideDivInDivObj(TzMsgBox.divEdit, 'divLoading');
      //去掉提交按钮不可用状态
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  //    /* 修改记录
  //(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnShowMsgBox_Click)
  //*/
  //    public async btnShowMsgBox_Click(strKeyId: string, strPara:string) {
  //        this.opType = 'ShowMsgBox';
  //        //const strKeyId = GetFirstCheckedKeyIdInDiv();
  //        if (strKeyId == "") {
  //            alert("请选择需要修改的记录！");
  //            return;
  //        }
  //        TzMsgBoxEx.examBatchNo_Static = strPara;
  //        //读取session角色 来判断绑定不同数据列表
  //        //获取用户角色来判断显示不同的列表数据；
  //        const strUserId = userStore.userId;
  //        const strRoleId = userStore.getRoleId;

  //        //判断角色
  //        //管理员

  //        if (this.bolIsLoadEditRegion == false)  //
  //        {
  //            const responseBool = await this.AddDPV_Edit(this.divName4MsgBox);
  //            // 为编辑区绑定下拉框
  //            const conBindDdl = await this.BindDdl4EditRegionInDiv();
  //            ShowDialog('ShowMsgBox');
  //            this.bolIsLoadEditRegion = true;  //
  //            this.ShowMsgBox(strKeyId);
  //        }
  //        else {
  //            ShowDialog('ShowMsgBox');
  //            this.ShowMsgBox(strKeyId);
  //        }

  //    }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_ShowMsgBox)
   * @param sender">参数列表</param>
   **/
  public async ShowMsgBox(strGameLevelId: string): Promise<boolean> {
    const strThisFuncName = this.ShowMsgBox.name;
    this.keyId = strGameLevelId;
    const strCourseId = clsPubLocalStorage.courseId;
    try {
      const objge_GameLevelEN_Const = await ge_GameLevel_GetObjByGameLevelIdCache(
        strGameLevelId,
        strCourseId,
      );
      if (objge_GameLevelEN_Const == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      this.objge_GameLevel = objge_GameLevelEN_Const;
      const conGetDataFromClass = await this.DetailRecord4Func(objge_GameLevelEN_Const);
      console.log('完成ShowMsgBox!');
      return true;
    } catch (e) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
     (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
     <param name = "pobjge_GameLevelEN">表实体类对象</param>
   */
  public async ShowDetailDataFromge_GameLevelClass4Func(pobjge_GameLevelENEx: clsge_GameLevelENEx) {
    const strThisFuncName = this.ShowDetailDataFromge_GameLevelClass4Func.name;
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    const strQuestionTypeId = pobjge_GameLevelENEx.questionTypeId;

    const objDiv = <HTMLDivElement>document.getElementById('divInfo');
    objDiv.innerHTML = '';
    const objUl = document.createElement('ul');
    objUl.classList.add('artlist');
    const objDiv_Img = GetDiv_Empty('textcenter');

    const objImg = <HTMLImageElement>document.createElement('img');
    objImg.src = '/images/DataSaveFinished.png';
    objImg.width = 150;
    objImg.height = 150;
    const objLi1 = GetLi_Empty('');
    objDiv_Img.appendChild(objImg);
    objDiv_Img.style.textAlign = 'center';
    objUl.appendChild(objDiv_Img);

    //const objBr0 = <HTMLBRElement>document.createElement("br");
    //objDiv.appendChild(objBr0);

    const objge_UserCreditsLog = await ge_UserCreditsLogEx_GetObjByGameLevelIdAndUserId(
      pobjge_GameLevelENEx.idCurrEduCls,
      pobjge_GameLevelENEx.gameLevelId,
      strUserId,
      TzMsgBoxEx.examBatchNo_Static,
    );
    if (objge_UserCreditsLog == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const spnScore0 = <HTMLSpanElement>document.createElement('span');
    spnScore0.innerHTML = '得分:';
    spnScore0.classList.add('rowtit');
    spnScore0.classList.add('color3');
    const spnScore1 = <HTMLSpanElement>document.createElement('span');
    spnScore1.innerHTML = objge_UserCreditsLog.credits.toString();
    spnScore1.style.marginLeft = '5px';
    spnScore1.classList.add('abstract-text');

    //通过批次号+用户 课程得到 做题结果表数据
    const strCourseId = clsPubLocalStorage.courseId;
    const strWhereResult =
      "	examBatchNo='" + TzMsgBoxEx.examBatchNo_Static + "' And userId='" + strUserId + "'";

    //获取获取题目库
    const arrUserAnswerResultObjLst = await UserAnswerResult_GetObjLstAsync(strWhereResult);

    //获取问题选项
    const strWhereQuestionOptions =
      "1=1 and courseId='" + strCourseId + "' order by questionOptionId Asc ";

    const arrQuestionOptionsObjLst2 = await QuestionOptions_GetObjLstAsync(strWhereQuestionOptions);

    //正确答案
    const strWhereAnswer = "1=1 and courseId='" + strCourseId + "' order by answerIndex Asc ";
    const arrAnswerObjLst2 = await Answer_GetObjLstAsync(strWhereAnswer);
    const arrAnswerExObjLst2 = arrAnswerObjLst2.map(AnswerEx_CopyToEx);
    for (const objInFor of arrAnswerExObjLst2) {
      await AnswerEx_FuncMapByFldName(clsAnswerENEx.con_OptionName, objInFor);
    }

    const strQuestionNum = arrUserAnswerResultObjLst.length;
    //得到正确数
    const arrUserAnswerResultObjLst1 = arrUserAnswerResultObjLst.filter((x) => x.isRight == true);
    //总数-正确数等于错误数；
    const strErrorNum = strQuestionNum - arrUserAnswerResultObjLst1.length;

    const spnQuestionNum0 = <HTMLSpanElement>document.createElement('span');
    spnQuestionNum0.innerHTML = '题目数:';
    spnQuestionNum0.style.marginLeft = '10px';
    const spnQuestionNum1 = <HTMLSpanElement>document.createElement('span');
    spnQuestionNum1.innerHTML = strQuestionNum.toString();
    spnQuestionNum1.style.marginLeft = '5px';
    spnQuestionNum0.classList.add('rowtit');
    spnQuestionNum0.classList.add('color3');
    spnQuestionNum1.classList.add('abstract-text');

    const spnErrorNum0 = <HTMLSpanElement>document.createElement('span');
    spnErrorNum0.innerHTML = '错题数:';
    spnErrorNum0.style.marginLeft = '10px';
    const spnErrorNum1 = <HTMLSpanElement>document.createElement('span');
    spnErrorNum1.innerHTML = strErrorNum.toString();
    spnErrorNum1.style.marginLeft = '5px';
    spnErrorNum0.classList.add('rowtit');
    spnErrorNum0.classList.add('color3');
    spnErrorNum1.classList.add('abstract-text');

    const objLi2 = GetLi_Empty('');

    objLi2.appendChild(spnScore0);
    objLi2.appendChild(spnScore1);

    objLi2.appendChild(spnScore0);
    objLi2.appendChild(spnScore1);
    objLi2.appendChild(spnQuestionNum0);
    objLi2.appendChild(spnQuestionNum1);
    objLi2.appendChild(spnErrorNum0);
    objLi2.appendChild(spnErrorNum1);
    objUl.appendChild(objLi2);

    const spnDetail0 = <HTMLSpanElement>document.createElement('span');
    spnDetail0.innerHTML = '具体做题情况:';
    spnDetail0.classList.add('rowtit');
    spnDetail0.classList.add('color3');
    const objLi_Detail0 = GetLi_Empty('');
    objLi_Detail0.appendChild(spnDetail0);
    objUl.appendChild(objLi_Detail0);

    let arrUserAnswerResultExObjLst = arrUserAnswerResultObjLst.map(UserAnswerResultEx_CopyToEx);
    arrUserAnswerResultExObjLst = arrUserAnswerResultExObjLst.sort(
      (x, y) => x.questionId - y.questionId,
    );
    let intIndex0 = 1;
    for (const objInFor of arrUserAnswerResultExObjLst) {
      await UserAnswerResultEx_FuncMapByFldName(clsUserAnswerResultENEx.con_QuestionName, objInFor);
      const objBr = <HTMLBRElement>document.createElement('br');
      const spnDetail0 = <HTMLSpanElement>document.createElement('span');
      spnDetail0.innerHTML = Format('{0}、{1}', intIndex0++, objInFor.questionName);
      const spnDetail1 = <HTMLSpanElement>document.createElement('span');
      spnDetail1.innerHTML = objInFor.isRight ? '(正确)' : '(错误)';
      spnDetail1.className = objInFor.isRight ? 'color1' : 'color3';
      spnDetail1.style.marginLeft = '10px';
      const objLi3 = GetLi_Empty('');

      objLi3.appendChild(spnDetail0);
      objLi3.appendChild(spnDetail1);
      objUl.appendChild(objLi3);

      const strQuestionId = objInFor.questionId;
      const arrQuestionOptionsObjLst = arrQuestionOptionsObjLst2.filter(
        (x) => x.questionId == strQuestionId,
      );
      let intIndex = 0;
      if (arrQuestionOptionsObjLst.length > 0) {
        for (let y = 0; y < arrQuestionOptionsObjLst.length; y++) {
          const objLi = document.createElement('li');
          const txtOptionPreEmpty = QuestionOptionsEx_GetSpanForOptionPreEmpty();
          const spnOptionTitle = QuestionOptionsEx_GetSpanForOptionTitle(intIndex++);
          const spnQuestionOptionId = <HTMLSpanElement>document.createElement('span');
          spnQuestionOptionId.className = 'rowtit color3';
          spnQuestionOptionId.innerText = Format(
            '[{0}]',
            arrQuestionOptionsObjLst[y].questionOptionId,
          );

          const spnOptionName = <HTMLSpanElement>document.createElement('span');

          spnOptionName.innerText = arrQuestionOptionsObjLst[y].optionName;
          if (arrQuestionOptionsObjLst[y].isCorrect == true) {
            spnOptionName.className = 'abstract-text color3';
          } else {
            spnOptionName.className = 'abstract-text';
          }
          objLi.appendChild(txtOptionPreEmpty);
          objLi.appendChild(spnOptionTitle);
          objLi.appendChild(spnQuestionOptionId);
          objLi.appendChild(spnOptionName);
          objUl.appendChild(objLi);
        }
      }

      //答案数据
      const objAnswer = arrAnswerExObjLst2.find((x) => x.questionId == strQuestionId);
      const objLi_RightAnswer = GetLi_Empty('');
      const spnRightAnswer0 = GetSpan_Empty('rowtit color3');
      spnRightAnswer0.innerHTML = '[正确答案]：';
      objLi_RightAnswer.appendChild(spnRightAnswer0);
      //答案
      //strhtml += '<li><span class="rowtit color3">[正确答案]：</span>';
      //strhtml += '&nbsp;&nbsp;';
      let strMsg = '';
      if (objAnswer != null) {
        const spnRightAnswer1 = GetSpan_Empty('');
        spnRightAnswer1.style.marginLeft = '5px';
        //spnRightAnswer1.innerHTML = "[正确答案]：";
        //strhtml += '&nbsp;&nbsp;';
        switch (strQuestionTypeId) {
          case enumQuestionType.FillInBlank_01: //填空题
            spnRightAnswer1.innerHTML = objAnswer.answerFillInBlank;
            break;
          case enumQuestionType.SingleChoice_02: //单选题
            spnRightAnswer1.innerHTML = objAnswer.optionName;
            break;
          case enumQuestionType.MultipleChoice_03: //多选题
            spnRightAnswer1.innerHTML = objAnswer.answerMultiOptions;
            break;
          case enumQuestionType.TrueorFalse_11:
            //判断题
            spnRightAnswer1.innerHTML = objAnswer.answerTrueOrFalse.toString();
            break;
          case enumQuestionType.AnswerQuestions_05: //解答题
          case enumQuestionType.OperationQuestions_09: //操作
          case enumQuestionType.ShortAnswer_10: //简答
          case '16': //运算
            objUl.appendChild(objLi_RightAnswer);
            const objLi_Code = GetLi_Empty('');
            const objTextArea = GetTextAreaEmpty('form-control');
            objTextArea.id = 'txtCode';
            objTextArea.name = 'txtCode';
            objTextArea.setAttribute('disabled', 'true');
            objTextArea.style.width = '100%';
            objTextArea.style.height = '150px';
            objTextArea.innerHTML = objAnswer.answerContent;
            objLi_Code.appendChild(objTextArea);
            objUl.appendChild(objLi_Code);
            break;
          default:
            const objQuestionType = await QuestionType_GetObjByQuestionTypeIdCache(
              strQuestionTypeId,
            );
            if (objQuestionType == null) {
              strMsg = Format(
                '根据问题类型Id获取相应的记录的对象为空.(in {0}.{1})',
                this.constructor.name,
                strThisFuncName,
              );
              console.error(strMsg);
              alert(strMsg);
              return;
            }
            strMsg = Format(
              '问题类型:{0}({1})在Switch中没有被处理.(in {2}.{3})',
              objQuestionType.questionTypeName,
              strQuestionTypeId,
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            break;
            break;
        }
        objLi_RightAnswer.appendChild(spnRightAnswer1);
        objUl.appendChild(objLi_RightAnswer);
      }

      //回答答案
      const objLi_UserAnswer = GetLi_Empty('');
      const spnUserAnswer0 = GetSpan_Empty('rowtit color3');
      spnUserAnswer0.innerHTML = '[作答答案]：';
      objLi_UserAnswer.appendChild(spnUserAnswer0);

      //strhtml += '<li><span class="rowtit color3">[作答答案]：</span>';
      //strhtml += '&nbsp;&nbsp;';

      if (objInFor != null) {
        await UserAnswerResultEx_FuncMapByFldName(clsUserAnswerResultENEx.con_OptionName, objInFor);
        let objHtml4IsRight = document.createElement('i');
        objHtml4IsRight.className = 'layui-icon';
        if (objInFor.isRight == true) {
          objHtml4IsRight.innerHTML = '√'; //'&#xe605;';
          objHtml4IsRight.classList.add('color3');
        } else {
          objHtml4IsRight.innerHTML = 'X'; //'&#x1006;';
          objHtml4IsRight.classList.add('color2');
        }
        if (
          strQuestionTypeId == '05' ||
          strQuestionTypeId == '09' ||
          strQuestionTypeId == '10' ||
          strQuestionTypeId == '16'
        ) {
          //解答题.操作、简答、运算
          let objTxtCode = document.createElement('textarea');
          objTxtCode.id = 'txtCode';
          objTxtCode.name = 'txtCode';
          objTxtCode.className = 'form-control';
          objTxtCode.disabled = true;
          objTxtCode.style.width = '100%';
          objTxtCode.style.height = '150px;';
          objTxtCode.textContent = objInFor.answerText;
          const objLi = document.createElement('li');
          objLi.appendChild(objHtml4IsRight);
          objLi.appendChild(objTxtCode);
          objUl.appendChild(objLi);
          //strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;';
          //strhtml += '</li>';
          //strhtml += objLi.outerHTML;
        } else {
          //objUl.appendChild(objLi);
          /*                    strhtml += '&nbsp;&nbsp;' + objHtml4IsRight.outerHTML;*/
          const spnUserAnswer1 = GetSpan_Empty('');
          spnUserAnswer1.style.marginLeft = '5px';

          if (strQuestionTypeId == '01') {
            //填空题
            spnUserAnswer1.innerHTML = objInFor.answerText;
          } else if (strQuestionTypeId == '02') {
            //单选题
            spnUserAnswer1.innerHTML = objInFor.optionName;
          } else if (strQuestionTypeId == '03') {
            //多选题
            spnUserAnswer1.innerHTML = objInFor.answerMultiOption;
          } else if (strQuestionTypeId == '11') {
            //判断题
            spnUserAnswer1.innerHTML = objInFor.answerText;
          }
          objLi_UserAnswer.appendChild(objHtml4IsRight);
          objLi_UserAnswer.appendChild(spnUserAnswer1);
          objUl.appendChild(objLi_UserAnswer);
        }
      }
    }
    objDiv.appendChild(objUl);
    //this.userId_d = pobjge_GameLevelENEx.userId;// 用户Id
    //this.cacheKey_d = pobjge_GameLevelENEx.cacheKey;// 缓存关键字
    //this.cacheSize_d = pobjge_GameLevelENEx.cacheSize;// 缓存大小
    //this.memo_d = pobjge_GameLevelENEx.memo;// 说明
    //this.cacheModeName_d = pobjge_GameLevelENEx.cacheModeName;// 缓存方式
    //this.cacheModeENName_d = pobjge_GameLevelENEx.cacheModeENName;// 缓存方式英文名
  }

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnShowMsgBox_Click)
   **/
  public async btnShowMsgBox_Click(strKeyId: string, strPara: string) {
    const strThisFuncName = this.btnShowMsgBox_Click.name;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '显示记录的关键字为空，请检查！';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    TzMsgBoxEx.examBatchNo_Static = strPara;
    try {
      //
      const bolIsSuccess = await this.ShowDialog_TzMsgBox(this.opType);
      if (bolIsSuccess == false) return;
      this.opType = 'ShowMsgBox';
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegionInDiv();

      this.bolIsLoadEditRegion = true; //
      this.btnCloseReturn = '关闭';
      const update = await this.ShowMsgBox(strKeyId);
      if (update == false) {
        const strMsg = Format('在显示记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (TzMsgBox.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        this.ShowDialog_TzMsgBox('ShowMsgBox');
      }
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在显示记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
