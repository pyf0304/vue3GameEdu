import { UserAnswerResult_Edit } from '@/viewsBase/QuestionnaireResult/UserAnswerResult_Edit';
import { GetFirstCheckedKeyIdInDiv } from '@/ts/PubFun/clsCommFunc4Ctrl';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { refUserAnswerResult_Edit } from '@/views/QuestionnaireResult/UserAnswerResultVueShare';
import {
  UserAnswerResult_AddNewRecordWithReturnKeyAsync,
  UserAnswerResult_CheckPropertyNew,
  UserAnswerResult_GetFirstIDAsync,
  UserAnswerResult_GetUniCondStr,
  UserAnswerResult_UpdateRecordAsync,
  UserAnswerResult_UpdateWithConditionAsync,
} from '@/ts/L3ForWApi/QuestionnaireResult/clsUserAnswerResultWApi';

declare function ShowDialog_UserAnswerResult(strOpType: string): void;
declare function HideDialog_UserAnswerResult(): void;

/* UserAnswerResult_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class UserAnswerResult_EditEx extends UserAnswerResult_Edit {
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = UserAnswerResult_EditEx.objPageEdit;
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        const strKeyId = GetFirstCheckedKeyIdInDiv('divList');
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPage.btnUpdateRecord_Click(Number(strKeyId));
        break;
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(UserAnswerResult_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
  /** 添加新记录,由后台自动获取最大值的关键字。保存函数
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithReturnKeySave)
   **/
  public async EditRecordSave(): Promise<boolean> {
    const strThisFuncName = this.EditRecordSave.name;
    let objUserAnswerResultEN;
    try {
      objUserAnswerResultEN = await refUserAnswerResult_Edit.value.GetEditDataUserAnswerResultObj();
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
      UserAnswerResult_CheckPropertyNew(objUserAnswerResultEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      const strUniquenessCondition = UserAnswerResult_GetUniCondStr(objUserAnswerResultEN);
      const lngKeyId = await UserAnswerResult_GetFirstIDAsync(strUniquenessCondition);

      if (lngKeyId != '' || Number(lngKeyId) > 0) {
        objUserAnswerResultEN.SetMinId(Number(lngKeyId));
        const responseBool = await UserAnswerResult_UpdateRecordAsync(objUserAnswerResultEN);
        if (responseBool == true) {
          //UserAnswerResult_ReFreshCache(IdCurrEduCls_Cache.value);
          const strInfo = `添加[用户答题结果(UserAnswerResult)]记录成功!`;
          //显示信息框
          if (this.isShowMsg == true) alert(strInfo);
        } else {
          const strInfo = `添加[用户答题结果(UserAnswerResult)]记录不成功!`;
          //显示信息框
          alert(strInfo);
        }
        return responseBool; //一定要有一个返回值,否则会出错!
      } else {
        const responseKeyId = await UserAnswerResult_AddNewRecordWithReturnKeyAsync(
          objUserAnswerResultEN,
        );
        const returnKeyId: string = responseKeyId;
        if (IsNullOrEmpty(returnKeyId) == false) {
          objUserAnswerResultEN.minId = Number(returnKeyId);
          //UserAnswerResult_ReFreshCache(IdCurrEduCls_Cache.value);
          const strInfo = `添加[用户答题结果(UserAnswerResult)]记录成功!`;
          //显示信息框
          if (this.isShowMsg == true) alert(strInfo);
          return true; //一定要有一个返回值,否则会出错!
        } else {
          const strInfo = `添加[用户答题结果(UserAnswerResult)]记录不成功!`;
          //显示信息框
          alert(strInfo);
          return false; //一定要有一个返回值,否则会出错!
        }
      }
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
  }
}
