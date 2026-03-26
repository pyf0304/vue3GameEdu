import { cc_ExamPaperStuRelation_Edit } from '@/viewsBase/InteractManage/cc_ExamPaperStuRelation_Edit';

declare function ShowDialog_cc_ExamPaperStuRelation(strOpType: string): void;
declare function HideDialog_cc_ExamPaperStuRelation(): void;

/* cc_ExamPaperStuRelation_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class cc_ExamPaperStuRelation_EditEx extends cc_ExamPaperStuRelation_Edit {
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = cc_ExamPaperStuRelation_EditEx.objPageEdit;
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
        //objPage.btnUpdateRecord_Click();
        break;
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        const strMsg =
          '命令:' +
          strCommandName +
          '在函数(cc_ExamPaperStuRelation_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
}
