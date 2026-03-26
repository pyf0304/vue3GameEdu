/**
 * 类名:ge_UserCreditsLog_DetailEx(界面:ge_UserCreditsLogCRUD)
 * 表名:ge_UserCreditsLog(01120883)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/08 12:12:14
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:WA_详细信息后台Ex_TS(TS)(WA_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
import { ge_UserCreditsLog_Detail } from '@/viewsBase/GameLearn/ge_UserCreditsLog_Detail';
import { ge_UserCreditsLogCRUDEx } from './ge_UserCreditsLogCRUDEx';
declare function ShowDialog_ge_UserCreditsLog(strOpType: string): void;
declare function HideDialog_ge_UserCreditsLog(): void;
/* ge_UserCreditsLog_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class ge_UserCreditsLog_DetailEx extends ge_UserCreditsLog_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objge_UserCreditsLogCRUD: ge_UserCreditsLogCRUDEx = new ge_UserCreditsLogCRUDEx();
    const objPage: ge_UserCreditsLog_DetailEx = new ge_UserCreditsLog_DetailEx(
      objge_UserCreditsLogCRUD,
    );
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(ge_UserCreditsLog_DetailEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
}
