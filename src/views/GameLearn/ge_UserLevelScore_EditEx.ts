/**
 * 类名:ge_UserLevelScore_EditEx(界面:ge_UserLevelScoreCRUD)
 * 表名:ge_UserLevelScore(01120942)
 * 版本:2022.12.23.1(服务器:WIN-SRV103-116)
 * 日期:2022/12/30 17:21:28
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:WA_编辑区后台Ex_TS(TS)(WA_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
import { ge_UserLevelScore_Edit } from '@/viewsBase/GameLearn/ge_UserLevelScore_Edit';
/* ge_UserLevelScore_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ge_UserLevelScore_EditEx extends ge_UserLevelScore_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage = ge_UserLevelScore_EditEx.objPageEdit;
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(ge_UserLevelScore_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
}
