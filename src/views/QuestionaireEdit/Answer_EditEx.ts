import $ from 'jquery';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { clsAnswerEN } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { Answer_Edit } from '@/viewsBase/QuestionaireEdit/Answer_Edit';
import {
  Answer_AddNewRecordAsync,
  Answer_CheckPropertyNew,
  Answer_ReFreshCache,
  Answer_ReOrderAsync,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsAnswerWApi';
import {
  GetInputValueInDivObj,
  GetTextAreaValueInDivObj,
  SetInputValueInDivObj,
  SetTextAreaValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { useUserStore } from '@/store/modulesShare/user';
import { CourseId_Session } from '@/views/QuestionaireEdit/AnswerVueShare';
declare function RefreshParent(): void;

/* Answer_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class Answer_EditEx extends Answer_Edit {
  public static GetPropValue: (strPropName: string) => string;
  public static strCourseIdCache: string = clsPubLocalStorage.courseId;
  public questionId0 = '';
  public questionTypeId = '';
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = Answer_EditEx.objPageEdit;
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        const strMsg = '命令:' + strCommandName + '在函数(Answer_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnSubmit_Click() {
    const strCommandText: string = this.btnSubmitAnswer;
    try {
      let strInfo;
      switch (strCommandText) {
        case '添加':
          const responseText1 = await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            const returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (Answer_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                this.HideDialog_Answer();
              }
              if (this.iShowList) this.iShowList.BindGv(clsAnswerEN._CurrTabName, '');
            }
          } else {
            const returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (Answer_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                this.HideDialog_Answer();
              }
              if (this.iShowList) this.iShowList.BindGv(clsAnswerEN._CurrTabName, '');
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          const returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In Answer_Edit.btnSubmit_Click)';

          //显示信息框
          console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (Answer_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              this.HideDialog_Answer();
            }
            if (this.iShowList) this.iShowList.BindGv(clsAnswerEN._CurrTabName, '');
          }

          break;
        default:
          const strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnSubmit_Click())`;
          console.error(strMsg);
          alert(strMsg);
          break;
      }
      const responseText8 = await this.btnReOrder_Click(); //重序
      RefreshParent();
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
   重序
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
   */
  public async btnReOrder_Click() {
    const strQuestionId: number = this.questionId;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        questionId: strQuestionId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await Answer_ReOrderAsync(objOrderByData);
      Answer_ReFreshCache(clsPubLocalStorage.courseId);
    } catch (e) {
      const strMsg: string = `重序出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    //await this.BindGv_Answer4Func(divVarSet.refDivList);
  }

  //添加题目标准
  public async btnAddNewQuestionAnswer_Click(strQuestionId: number) {
    //调用添加函数；
    this.btnAddNewRecordWithMaxId_Click();
    //存入隐藏控件
    // this.questionId = strQuestionId;
    console.log(strQuestionId);
  }

  /* 添加新记录
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecordWithMaxId_Click)
  */
  public async btnAddNewRecordWithMaxId_Click() {
    this.opType = 'AddWithMaxId';
    try {
      if (this.bolIsLoadEditRegion == false) {
        //
        const bolIsSuccess = await this.ShowDialog_Answer(this.opType);
        if (bolIsSuccess == false) return;

        this.bolIsLoadEditRegion = true; //
        const responseText = this.AddNewRecordWithMaxId();
        if (Answer_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
          this.ShowDialog_Answer('Add');
        }
      } else {
        const responseText = this.AddNewRecordWithMaxId();
        if (Answer_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
          this.ShowDialog_Answer('Add');
        }
      }

      if (this.questionTypeId == '01') {
        $('#trAnswerContent').hide();
        $('#trAnswerFillInBlank').show();
      } else {
        $('#trAnswerFillInBlank').hide();
        $('#trAnswerContent').show();
      }
    } catch (e) {
      const strMsg: string = `添加新记录初始化不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async GetDataFromAnswerClass(pobjAnswerEN: clsAnswerEN) {
    this.answerFillInBlank = pobjAnswerEN.answerFillInBlank;
    this.answerContent = pobjAnswerEN.answerContent; // 答案内容
    //this.isShow = pobjAnswerEN.isShow;// 是否启用
    this.memo = pobjAnswerEN.memo; // 备注
  }

  /* 添加新记录，保存函数
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
  */
  public async AddNewRecordSave() {
    //this.DivName = "divAddNewRecordSave";
    const objAnswerEN: clsAnswerEN = new clsAnswerEN();
    objAnswerEN.answerIndex = 9;
    objAnswerEN.questionId = this.questionId;
    this.PutDataToAnswerClass(objAnswerEN);
    try {
      Answer_CheckPropertyNew(objAnswerEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseText2 = await Answer_AddNewRecordAsync(objAnswerEN);
      const returnBool: boolean = !!responseText2;
      if (returnBool == true) {
        Answer_ReFreshCache(CourseId_Session.value);
        const strInfo: string = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo: string = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg: string = `添加记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjAnswerEN">数据传输的目的类对象</param>
*/
  public async PutDataToAnswerClass(pobjAnswerEN: clsAnswerEN) {
    const userStore = useUserStore();
    pobjAnswerEN.SetCourseId(clsPubLocalStorage.courseId);
    pobjAnswerEN.SetAnswerContent(this.answerContent); // 答案内容
    pobjAnswerEN.SetAnswerFillInBlank(this.answerFillInBlank); // 填空题
    //pobjAnswerEN.SetisShow(this.isShow;// 是否启用
    pobjAnswerEN.SetIsShow(true); // 是否启用
    pobjAnswerEN.SetMemo(this.memo); // 备注
    pobjAnswerEN.SetProvider(userStore.userId);
    pobjAnswerEN.SetIsAutoCorrect(false);
    pobjAnswerEN.SetScore(0);
    pobjAnswerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjAnswerEN.SetUpdUser(userStore.userId); // 修改人
  }

  /*
   * 填空题 (Used In Clear())
   */
  public set answerFillInBlank(value: string) {
    SetInputValueInDivObj(this.thisDivLayout, 'txtAnswerFillInBlank', value);
  }
  /*
   * 填空题 (Used In PutDataToClass())
   */
  public get answerFillInBlank(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'txtAnswerFillInBlank');
  }

  /*
   * 答案内容 (Used In Clear())
   */
  public set answerContent(value: string) {
    SetTextAreaValueInDivObj(this.thisDivLayout, 'txtAnswerContent', value);
  }
  /*
   * 答案内容 (Used In PutDataToClass())
   */
  public get answerContent(): string {
    return GetTextAreaValueInDivObj(this.thisDivLayout, 'txtAnswerContent');
  }

  /*
   * 备注 (Used In Clear())
   */
  public set memo(value: string) {
    SetTextAreaValueInDivObj(this.thisDivLayout, 'txtMemo', value);
  }
  /*
   * 备注 (Used In PutDataToClass())
   */
  public get memo(): string {
    return GetTextAreaValueInDivObj(this.thisDivLayout, 'txtMemo');
  }

  /*
   * 存放题目ID
   */
  public get questionId() {
    const strQuestionId = Answer_EditEx.GetPropValue('questionId');
    return Number(strQuestionId);
  }
}
