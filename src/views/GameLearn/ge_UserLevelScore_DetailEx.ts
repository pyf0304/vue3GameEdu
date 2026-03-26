/**
 * 类名:ge_UserLevelScore_DetailEx(界面:ge_UserLevelScoreCRUD)
 * 表名:ge_UserLevelScore(01120942)
 * 版本:2022.12.23.1(服务器:WIN-SRV103-116)
 * 日期:2022/12/30 17:21:30
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:WA_详细信息后台Ex_TS(TS)(WA_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
import { ge_UserLevelScore_Detail } from '@/viewsBase/GameLearn/ge_UserLevelScore_Detail';
import { ge_UserLevelScoreCRUDEx } from './ge_UserLevelScoreCRUDEx';
declare function ShowDialog_ge_UserLevelScore(strOpType: string): void;
declare function HideDialog_ge_UserLevelScore(): void;
/* ge_UserLevelScore_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class ge_UserLevelScore_DetailEx extends ge_UserLevelScore_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objge_UserLevelScoreCRUD: ge_UserLevelScoreCRUDEx = new ge_UserLevelScoreCRUDEx();
    const objPage: ge_UserLevelScore_DetailEx = new ge_UserLevelScore_DetailEx(
      objge_UserLevelScoreCRUD,
    );
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(ge_UserLevelScore_DetailExEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
}
