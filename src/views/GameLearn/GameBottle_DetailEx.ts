/**
 * 类名:GameBottle_DetailEx(界面:GameBottleCRUD,01120256)
 * 表名:GameBottle(01120974)
 * 版本:2024.11.10.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/12 00:49:48
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS,0261)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { GameBottle_Detail } from '@/viewsBase/GameLearn/GameBottle_Detail';
import { GameBottleCRUDEx } from '@/views/GameLearn/GameBottleCRUDEx';
/* GameBottle_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class GameBottle_DetailEx extends GameBottle_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objGameBottleCRUD: GameBottleCRUDEx = new GameBottleCRUDEx();
    const objPage: GameBottle_DetailEx = new GameBottle_DetailEx(objGameBottleCRUD);
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(GameBottle_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
