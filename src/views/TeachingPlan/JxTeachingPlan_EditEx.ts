/**
 * 类名:JxTeachingPlan_EditEx(界面:JxTeachingPlanCRUD)
 * 表名:JxTeachingPlan(01120968)
 * 版本:2024.04.16.1(服务器:DESKTOP-1KM2OK3)
 * 日期:2024/05/02 21:42:47
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { message } from '@/utils/myMessage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { JxTeachingPlan_Edit } from '@/viewsBase/TeachingPlan/JxTeachingPlan_Edit';
import {
  JxTeachingPlan_AddNewRecordAsync,
  JxTeachingPlan_AddNewRecordWithMaxIdAsync,
  JxTeachingPlan_CheckPropertyNew,
  JxTeachingPlan_IsExistAsync,
  JxTeachingPlan_ReFreshCache,
} from '@/ts/L3ForWApi/TeachingPlan/clsJxTeachingPlanWApi';
import { clsJxTeachingPlanEN } from '@/ts/L0Entity/TeachingPlan/clsJxTeachingPlanEN';
import { refJxTeachingPlan_Edit } from '@/views/TeachingPlan/JxTeachingPlanVueShare';
/* JxTeachingPlan_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class JxTeachingPlan_EditEx extends JxTeachingPlan_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: JxTeachingPlan_EditEx = <JxTeachingPlan_EditEx>(
      JxTeachingPlan_Edit.GetPageEditObj('JxTeachingPlan_EditEx')
    );
    if (objPage == null) {
      const strMsg = `从预存编辑类获取关键字:[JxTeachingPlan_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
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
        objPage.btnAddNewRecord_Click();
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
  /** 添加新记录,由后台自动获取最大值的关键字。保存函数
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxIdSave)
   **/
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithMaxIdSave.name;
    let objJxTeachingPlanEN;
    try {
      objJxTeachingPlanEN = await refJxTeachingPlan_Edit.value.GetEditDataJxTeachingPlanObj();
      objJxTeachingPlanEN.SetIdSubmitStatus('01');
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
      JxTeachingPlan_CheckPropertyNew(objJxTeachingPlanEN);
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
      const responseKeyId = await JxTeachingPlan_AddNewRecordWithMaxIdAsync(objJxTeachingPlanEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        JxTeachingPlan_ReFreshCache();
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值,否则会出错!
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
    return ''; //一定要有一个返回值,否则会出错!
  }
  /** 添加新记录,保存函数
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objJxTeachingPlanEN = new clsJxTeachingPlanEN();
    try {
      await refJxTeachingPlan_Edit.value.PutDataToJxTeachingPlanClass(objJxTeachingPlanEN);
      objJxTeachingPlanEN.SetIdSubmitStatus('01');
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      JxTeachingPlan_CheckPropertyNew(objJxTeachingPlanEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      let returnBool = false;
      const bolIsExist = await JxTeachingPlan_IsExistAsync(objJxTeachingPlanEN.idTeachingPlan);
      if (bolIsExist == true) {
        const strMsg = Format(
          '添加记录时,关键字：{0}已经存在!',
          objJxTeachingPlanEN.idTeachingPlan,
        );
        console.error(strMsg);
        alert(strMsg);
        return false; //一定要有一个返回值,否则会出错!
      }
      returnBool = await JxTeachingPlan_AddNewRecordAsync(objJxTeachingPlanEN);
      if (returnBool == true) {
        JxTeachingPlan_ReFreshCache();
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值,否则会出错!
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
  }
  public Clear() {
    refJxTeachingPlan_Edit.value.teachingPlanId = '';
    refJxTeachingPlan_Edit.value.teachingPlanDesc = '';
    refJxTeachingPlan_Edit.value.idGrade = '';
    refJxTeachingPlan_Edit.value.schoolTerm = '';
    refJxTeachingPlan_Edit.value.courseId = '';
    refJxTeachingPlan_Edit.value.memo = '';
  }
}
