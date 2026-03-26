/**
 * 类名:ge_ExaminationCriteria_EditEx(界面:ge_ExaminationCriteriaCRUD)
 * 表名:ge_ExaminationCriteria(01120898)
 * 版本:2024.01.29.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/01 11:54:24
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
import { ge_ExaminationCriteria_Edit } from '@/viewsBase/GameLearn/ge_ExaminationCriteria_Edit';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsge_ExaminationCriteriaEN } from '@/ts/L0Entity/GameLearn/clsge_ExaminationCriteriaEN';
import { useUserStore } from '@/store/modulesShare/user';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import {
  GetInputObjInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { refge_ExaminationCriteria_Edit } from '@/views/GameLearn/ge_ExaminationCriteriaVueShare';
/* ge_ExaminationCriteria_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ge_ExaminationCriteria_EditEx extends ge_ExaminationCriteria_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: ge_ExaminationCriteria_EditEx = <ge_ExaminationCriteria_EditEx>(
      ge_ExaminationCriteria_Edit.GetPageEditObj('ge_ExaminationCriteria_EditEx')
    );
    if (objPage == null) {
      const strMsg = `从预存编辑类获取关键字:[ge_ExaminationCriteria_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
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

  /* 函数功能:为编辑区绑定下拉框
(AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
*/
  public async BindDdl4EditRegionInDiv() {
    // 在此处放置用户代码以初始化页面
    const strCourseId = clsPubLocalStorage.courseId; //定义条件字段
    //const ddlQuestionId = await this.SetDdl_QuestionIdInDiv(strCourseId);//编辑区域
    // const ddlCourseId = await this.SetDdl_CourseIdInDiv();//编辑区域
    // 在此处放置用户代码以初始化页面
    // const ddlControlTypeId = await this.SetDdl_ControlTypeIdInDiv(); //编辑区域
    // const ddlEventTypeId = await this.SetDdl_EventTypeIdInDiv(); //编辑区域
    // const ddlExaminationTypeId = await this.SetDdl_ExaminationTypeIdInDiv(); //编辑区域
  }
  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjge_ExaminationCriteriaEN">数据传输的目的类对象</param>
*/
  public async PutDataToge_ExaminationCriteriaClass(
    pobjge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN,
  ) {
    const userStore = useUserStore();
    pobjge_ExaminationCriteriaEN.SetQuestionId(
      refge_ExaminationCriteria_Edit.value.ge_ExaminationCriteria.strQuestionId,
    ); // 题目ID
    pobjge_ExaminationCriteriaEN.SetCourseId(clsPubLocalStorage.courseId);
    pobjge_ExaminationCriteriaEN.SetControlTypeId(
      refge_ExaminationCriteria_Edit.value.controlTypeId,
    ); // 控件
    pobjge_ExaminationCriteriaEN.SetEventTypeId(refge_ExaminationCriteria_Edit.value.eventTypeId); // 事件Id
    pobjge_ExaminationCriteriaEN.SetControlId(refge_ExaminationCriteria_Edit.value.controlId); // 控件Id
    pobjge_ExaminationCriteriaEN.SetControlClass(refge_ExaminationCriteria_Edit.value.controlClass); // 控件样式
    pobjge_ExaminationCriteriaEN.SetControlValue(refge_ExaminationCriteria_Edit.value.controlValue); // 控件值
    pobjge_ExaminationCriteriaEN.SetExaminationTypeId(
      refge_ExaminationCriteria_Edit.value.examinationTypeId,
    );
    pobjge_ExaminationCriteriaEN.SetDescribe(refge_ExaminationCriteria_Edit.value.describe); // 标准描述
    pobjge_ExaminationCriteriaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjge_ExaminationCriteriaEN.SetUpdUser(userStore.userId); // 修改人
    pobjge_ExaminationCriteriaEN.SetMemo(refge_ExaminationCriteria_Edit.value.memo); // 备注
  }
  /* 函数功能:把类对象的属性内容显示到界面上
  注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   如果在设置数据库时,就应该一级字段在前,二级字段在后
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   <param name = "pobjge_ExaminationCriteriaEN">表实体类对象</param>
 */
  public async GetDataFromge_ExaminationCriteriaClass(
    pobjge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN,
  ) {
    refge_ExaminationCriteria_Edit.value.controlTypeId = pobjge_ExaminationCriteriaEN.controlTypeId; // 控件
    refge_ExaminationCriteria_Edit.value.eventTypeId = pobjge_ExaminationCriteriaEN.eventTypeId; // 事件
    refge_ExaminationCriteria_Edit.value.examinationTypeId =
      pobjge_ExaminationCriteriaEN.examinationTypeId; // 检查类型
    refge_ExaminationCriteria_Edit.value.controlId = pobjge_ExaminationCriteriaEN.controlId; // 控件Id
    refge_ExaminationCriteria_Edit.value.controlClass = pobjge_ExaminationCriteriaEN.controlClass; // 控件样式
    refge_ExaminationCriteria_Edit.value.controlValue = pobjge_ExaminationCriteriaEN.controlValue; // 控件值
    refge_ExaminationCriteria_Edit.value.describe = pobjge_ExaminationCriteriaEN.describe; // 标准描述
    //this.updDate = pobjge_ExaminationCriteriaEN.updDate;// 修改日期
    //this.updUser = pobjge_ExaminationCriteriaEN.updUser;// 修改人
    refge_ExaminationCriteria_Edit.value.memo = pobjge_ExaminationCriteriaEN.memo; // 备注
  }

  /* 添加新记录
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecordWithMaxId_Click)
*/
  public async btnAddNewRecordWithMaxId_Click() {
    this.opType = 'AddWithMaxId';

    try {
      if (this.bolIsLoadEditRegion == false) {
        //
        const bolIsSuccess = await this.ShowDialog_ge_ExaminationCriteria(this.opType);
        if (bolIsSuccess == false) return;

        // 为编辑区绑定下拉框
        //if (this.bolIsUseInDiv == true) {
        //    const conBindDdl = await this.BindDdl4EditRegionInDiv();
        //}
        //else {
        const conBindDdl = await this.BindDdl4EditRegionInDiv();
        //}

        this.ShowDialog_ge_ExaminationCriteria('Add');
        this.bolIsLoadEditRegion = true; //
        const responseText = this.AddNewRecordWithMaxId();
      } else {
        this.ShowDialog_ge_ExaminationCriteria('Add');
        const responseText = this.AddNewRecordWithMaxId();
      }
    } catch (e) {
      const strMsg: string = `添加新记录初始化不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //添加题目标准
  public async btnAddNewQuestionCriteria_Click(strQuestionId: number) {
    //存入隐藏控件
    refge_ExaminationCriteria_Edit.value.strQuestionId = strQuestionId;
    //调用添加函数；
    this.btnAddNewRecordWithMaxId_Click();
  }

  /*
   * 设置关键字的值(Used In UpdateRecord())
   */
  public set strQuestionId(value: string) {
    SetInputValueInDivObj(this.thisDivEdit, 'hidQuestionId', value);
  }
  /*
   * 设置关键字的值
   */
  public get strQuestionId(): string {
    return GetInputValueInDivObj(this.thisDivEdit, 'hidQuestionId');
  }
}
