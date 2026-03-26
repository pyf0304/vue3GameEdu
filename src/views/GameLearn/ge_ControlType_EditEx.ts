/**
 * 类名:ge_ControlType_EditEx(界面:ge_ControlTypeCRUD)
 * 表名:ge_ControlType(01120900)
 * 版本:2024.01.29.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/01 11:30:40
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { message } from '@/utils/myMessage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { ge_ControlType_Edit } from '@/viewsBase/GameLearn/ge_ControlType_Edit';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsge_ControlTypeEN } from '@/ts/L0Entity/GameLearn/clsge_ControlTypeEN';
import { useUserStore } from '@/store/modulesShare/user';
import { refge_ControlType_Edit } from '@/views/GameLearn/ge_ControlTypeVueShare';
/* ge_ControlType_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ge_ControlType_EditEx extends ge_ControlType_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: ge_ControlType_EditEx = <ge_ControlType_EditEx>(
      ge_ControlType_Edit.GetPageEditObj('ge_ControlType_EditEx')
    );
    if (objPage == null) {
      const strMsg = `从预存编辑类获取关键字:[ge_ControlType_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
      console.error(strMsg);
      message.warning(strMsg);
      return;
    }
    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPage.btnUpdateRecord_Click(strKeyId);
        }
        break;
      default:
        strMsg = Format(
          '命令:{0}, 关键字: {1}, 在函数({2}.{3})中没有被处理!',
          strCommandName,
          strKeyId,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjge_ControlTypeEN">数据传输的目的类对象</param>
  */
  public async PutDataToge_ControlTypeClass(pobjge_ControlTypeEN: clsge_ControlTypeEN) {
    const userStore = useUserStore();
    pobjge_ControlTypeEN.SetControlTypeName(refge_ControlType_Edit.value.controlTypeName); // 控件名称
    pobjge_ControlTypeEN.SetControlTypeEnName(refge_ControlType_Edit.value.controlTypeEnName); // 控件英文名称
    pobjge_ControlTypeEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjge_ControlTypeEN.SetUpdUser(userStore.userId); // 修改人
    pobjge_ControlTypeEN.SetMemo(refge_ControlType_Edit.value.memo); // 备注
  }
}
