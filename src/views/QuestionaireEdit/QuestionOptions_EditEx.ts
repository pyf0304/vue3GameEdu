import $ from 'jquery';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { QuestionOptions_Edit } from '@/viewsBase/QuestionaireEdit/QuestionOptions_Edit';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  QuestionOptions_AddNewRecordWithMaxIdAsync,
  QuestionOptions_CheckPropertyNew,
  QuestionOptions_ReFreshCache,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import { GetTextAreaValueInDivObj, SetTextAreaValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { useUserStore } from '@/store/modulesShare/user';
import {
  refQuestionOptions_Edit,
  CourseId_Session,
} from '@/views/QuestionaireEdit/QuestionOptionsVueShare';

// declare function RefreshParent(): void;

/* QuestionOptions_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class QuestionOptions_EditEx extends QuestionOptions_Edit {
  public static GetPropValue: (strPropName: string) => string;
  public static strCourseIdCache: string = clsPubLocalStorage.courseId;
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = QuestionOptions_EditEx.objPageEdit;
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        //objPage.btnUpdateRecord_Click();
        break;
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(QuestionOptions_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  public async btnSubmit_Click() {
    const strCommandText: string = this.btnSubmitQuestionOptions;
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
            const returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (QuestionOptions_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                this.HideDialog_QuestionOptions();
              }
              if (this.iShowList) {
                this.iShowList.BindGv(clsQuestionOptionsEN._CurrTabName, '');
              }
            }
          } else {
            const returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (QuestionOptions_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                this.HideDialog_QuestionOptions();
              }
              if (this.iShowList) {
                this.iShowList.BindGv(clsQuestionOptionsEN._CurrTabName, '');
              }
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          const returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In QuestionOptions_Edit.btnSubmit_Click)';

          //显示信息框
          console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (QuestionOptions_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              this.HideDialog_QuestionOptions();
            }
            if (this.iShowList) {
              this.iShowList.BindGv(clsQuestionOptionsEN._CurrTabName, '');
            }
          }

          break;
        default:
          const strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnSubmit_Click())`;
          console.error(strMsg);
          alert(strMsg);
          break;
      }
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   */
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const strThisFuncName = 'AddNewRecordWithMaxIdSave';
    let objQuestionOptionsEN: clsQuestionOptionsEN = new clsQuestionOptionsEN();
    objQuestionOptionsEN.optionIndex = 9;
    try {
      objQuestionOptionsEN = await refQuestionOptions_Edit.value.GetEditDataQuestionOptionsObj();
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值,否则会出错!
    }

    try {
      QuestionOptions_CheckPropertyNew(objQuestionOptionsEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseKeyId = await QuestionOptions_AddNewRecordWithMaxIdAsync(objQuestionOptionsEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        QuestionOptions_ReFreshCache(CourseId_Session.value);
        const strInfo: string = `添加记录成功!`;

        //显示信息框
        if (this.isShowMsg) alert(strInfo);
      } else {
        const strInfo: string = `问题选项不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg: string = `添加记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    return ''; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjQuestionOptionsEN">数据传输的目的类对象</param>
*/
  public async PutDataToQuestionOptionsClass(pobjQuestionOptionsEN: clsQuestionOptionsEN) {
    const userStore = useUserStore();
    pobjQuestionOptionsEN.SetOptionName(this.optionName); // 选项名称
    //pobjQuestionOptionsEN.SetoptionIndex(this.optionIndex;// 选项序号
    //pobjQuestionOptionsEN.SetOptionTitle(this.optionTitle;// 选项标题
    //pobjQuestionOptionsEN.SetOptionContent(this.OptionContent;// 选项内容
    pobjQuestionOptionsEN.SetIsCorrect(refQuestionOptions_Edit.value.isCorrect); // 是否正确
    pobjQuestionOptionsEN.SetCourseId(clsPubLocalStorage.courseId);

    pobjQuestionOptionsEN.SetIsShow(refQuestionOptions_Edit.value.isShow); // 是否启用
    pobjQuestionOptionsEN.SetMemo(this.memo); // 备注
    pobjQuestionOptionsEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjQuestionOptionsEN.SetUpdUser(userStore.userId); // 修改人
  }
  /* 函数功能:把类对象的属性内容显示到界面上
注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
 如果在设置数据库时,就应该一级字段在前,二级字段在后
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
 <param name = "pobjQuestionOptionsEN">表实体类对象</param>
*/
  public async GetDataFromQuestionOptionsClass(pobjQuestionOptionsEN: clsQuestionOptionsEN) {
    // this.strQuestionId = pobjQuestionOptionsEN.questionId;
    this.optionName = pobjQuestionOptionsEN.optionName; // 选项名称
    //this.optionIndex = pobjQuestionOptionsEN.optionIndex;// 选项序号
    //this.optionTitle = pobjQuestionOptionsEN.optionTitle;// 选项标题
    //this.OptionContent = pobjQuestionOptionsEN.OptionContent;// 选项内容
    refQuestionOptions_Edit.value.isCorrect = pobjQuestionOptionsEN.isCorrect; // 是否正确
    refQuestionOptions_Edit.value.isShow = pobjQuestionOptionsEN.isShow; // 是否启用
    this.memo = pobjQuestionOptionsEN.memo; // 备注
  }
  /*
   * 选项标题 (Used In Clear())
   */
  public set optionName(value: string) {
    SetTextAreaValueInDivObj(this.thisDivLayout, 'txtOptionName', value);
  }
  /*
   * 选项标题 (Used In PutDataToClass())
   */
  public get optionName(): string {
    return GetTextAreaValueInDivObj(this.thisDivLayout, 'txtOptionName');
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

  public Clear() {
    this.optionName = '';
    // this.optionIndex = 0;
    // this.optionTitle = '';
    // this.optionContent = '';
    // this.isCorrect = false;
    // this.isShow = false;
    this.memo = '';
  }
}
