import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsge_InspectProcessEN } from '@/ts/L0Entity/GameLearn/clsge_InspectProcessEN';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import {
  ge_InspectProcess_AddNewRecordWithMaxIdAsync,
  ge_InspectProcess_CheckPropertyNew,
} from '@/ts/L3ForWApi/GameLearn/clsge_InspectProcessWApi';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { ge_InspectProcess_Edit } from '@/viewsBase/GameLearn/ge_InspectProcess_Edit';
import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { useUserStore } from '@/store/modulesShare/user';
import { refge_InspectProcess_Edit } from '@/views/GameLearn/ge_InspectProcessVueShare';

declare function RefreshParent(): void;
/* ge_InspectProcess_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ge_InspectProcess_EditEx extends ge_InspectProcess_Edit {
  public static GetPropValue: (strPropName: string) => string;
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = ge_InspectProcess_EditEx.objPageEdit;

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(ge_InspectProcess_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnSubmit_Click() {
    const strCommandText: string = this.btnSubmitge_InspectProcess;
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
              if (ge_InspectProcess_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                this.HideDialog_ge_InspectProcess();
              }
              if (this.iShowList) {
                this.iShowList.BindGv(clsge_InspectProcessEN._CurrTabName, '');
              }
            }
          } else {
            const returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (ge_InspectProcess_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                this.HideDialog_ge_InspectProcess();
              }
              if (this.iShowList) {
                this.iShowList.BindGv(clsge_InspectProcessEN._CurrTabName, '');
              }
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          const returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In ge_InspectProcess_Edit.btnSubmit_Click)';

          //显示信息框
          console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (ge_InspectProcess_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              this.HideDialog_ge_InspectProcess();
            }
            if (this.iShowList) {
              this.iShowList.BindGv(clsge_InspectProcessEN._CurrTabName, '');
            }
          }

          break;
        default:
          const strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnSubmit_Click())`;
          console.error(strMsg);
          alert(strMsg);
          break;
      }
      RefreshParent();
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 函数功能:为编辑区绑定下拉框
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
*/
  public async BindDdl4EditRegion() {
    // 在此处放置用户代码以初始化页面
    // const ddloperationTypeId = await this.SetDdl_OperationTypeIdInDiv(); //编辑区域
    const strCourseId = clsPubLocalStorage.courseId; //定义条件字段
    // const strCourseId = CourseId_Session.value;
    if (strCourseId == '99999991') {
      const strMsg = Format("CourseId_Session.value='99999991'，还没有被赋正确的值,请检查!");
      throw strMsg;
    }

    // const ddlControlTypeId = await this.SetDdl_ControlTypeIdInDiv(); //编辑区域
    // const ddlAttributeId = await this.SetDdl_AttributeIdInDiv(); //编辑区域

    // const ddlExaminationTypeId = await this.SetDdl_ExaminationTypeIdInDiv(); //编辑区域
    // const ddlEventTypeId = await this.SetDdl_EventTypeIdInDiv(); //编辑区域
  }

  /* 函数功能:为编辑区绑定下拉框
  (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
*/
  public async BindDdl4EditRegionInDiv() {
    // 在此处放置用户代码以初始化页面
    // const ddloperationTypeId = await this.SetDdl_OperationTypeIdInDiv(); //编辑区域
    const strCourseId = clsPubLocalStorage.courseId; //定义条件字段

    // const strCourseId = CourseId_Session.value; //定义条件字段
    if (strCourseId == '99999991') {
      const strMsg = Format("CourseId_Session.value='99999991'，还没有被赋正确的值,请检查!");
      throw strMsg;
    }

    // const ddlControlTypeId = await this.SetDdl_ControlTypeIdInDiv(); //编辑区域
    // const ddlAttributeId = await this.SetDdl_AttributeIdInDiv(); //编辑区域
    // const ddlExaminationTypeId = await this.SetDdl_ExaminationTypeIdInDiv(); //编辑区域
    // const ddlEventTypeId = await this.SetDdl_EventTypeIdInDiv(); //编辑区域
  }

  /** 添加新记录,由后台自动获取最大值的关键字。保存函数
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxIdSave)
   **/
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithMaxIdSave.name;
    let objge_InspectProcessEN;
    try {
      objge_InspectProcessEN =
        await refge_InspectProcess_Edit.value.GetEditDatage_InspectProcessObj();
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
      ge_InspectProcess_CheckPropertyNew(objge_InspectProcessEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseKeyId = await ge_InspectProcess_AddNewRecordWithMaxIdAsync(
        objge_InspectProcessEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //ge_InspectProcess_ReFreshCache(CourseId_Session.value);
        const strInfo: string = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo: string = `添加记录不成功!`;

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

  /* 修改记录
(AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecord_Click(strKeyId: string) {
    this.opType = 'Update';
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '修改记录的关键字为空，请检查！';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      if (this.bolIsLoadEditRegion == false) {
        //
        const bolIsSuccess = await this.ShowDialog_ge_InspectProcess(this.opType);
        if (bolIsSuccess == false) return;
        // 为编辑区绑定下拉框

        await this.BindDdl4EditRegionInDiv();

        this.bolIsLoadEditRegion = true; //
        const update = await this.UpdateRecord(strKeyId);
        if (update == false) {
          const strMsg: string = `在修改记录时,显示记录数据不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (ge_InspectProcess_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
          this.ShowDialog_ge_InspectProcess('Update');
        }
      } else {
        const update = await this.UpdateRecord(strKeyId);
        if (update == false) {
          const strMsg: string = `在修改记录时,显示记录数据不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (ge_InspectProcess_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
          this.ShowDialog_ge_InspectProcess('Update');
        }
      }
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0034)在修改记录时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
   * 存放题目ID
   */
  public get questionId() {
    const strQuestionId = ge_InspectProcess_EditEx.GetPropValue('questionId');
    return strQuestionId;
  }
}
