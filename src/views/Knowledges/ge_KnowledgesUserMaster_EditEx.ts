import { ge_KnowledgesUserMaster_Edit } from '@/viewsBase/Knowledges/ge_KnowledgesUserMaster_Edit';

/* ge_KnowledgesUserMaster_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class ge_KnowledgesUserMaster_EditEx extends ge_KnowledgesUserMaster_Edit {
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = ge_KnowledgesUserMaster_EditEx.objPageEdit;
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        const strMsg =
          '命令:' +
          strCommandName +
          '在函数(ge_KnowledgesUserMaster_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
}
