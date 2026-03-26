import $ from 'jquery';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsgs_KnowledgesGraphEN } from 'share-stu-study-base-lib';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { Questionnaire_Edit } from '@/viewsBase/QuestionaireEdit/Questionnaire_Edit';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  Questionnaire_AddNewRecordWithReturnKeyAsync,
  Questionnaire_CheckProperty4Update,
  Questionnaire_CheckPropertyNew,
  Questionnaire_GetObjByQuestionIdAsync,
  Questionnaire_UpdateRecordAsync,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi'; // Ensure this path is correct and the module exists
import { gs_KnowledgesGraph_BindDdl_KnowledgeGraphIdInDivCache } from 'share-stu-study-base-lib';
import {
  CheckControlExist,
  GetCheckBoxValueInDivObj,
  GetSelectValueInDivObj,
  SetCheckBoxValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { QuestionTypeEx_BindDdl_QuestionTypeIdInDiv_CacheEx } from '@/ts/L3ForWApiEx/SystemSet/clsQuestionTypeExWApi';
import { useUserStore } from '@/store/modulesShare/user';
import { message } from '@/utils/myMessage';
import {
  CourseId_Session,
  refQuestionnaire_Edit,
} from '@/views/QuestionaireEdit/QuestionnaireVueShare';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
declare function layui_Alert(iconKey: string, strMsg: string): void;

/* Questionnaire_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class Questionnaire_EditEx extends Questionnaire_Edit {
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = Questionnaire_EditEx.objPageEdit;
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(Questionnaire_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  public async btnSubmit_Click() {
    const strCommandText: string = this.btnSubmitQuestionnaire;
    try {
      let strInfo;
      switch (strCommandText) {
        case '添加':
          const responseText1 = await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            const returnKeyId = await this.AddNewRecordWithReturnKeySave();
            if (returnKeyId != 0) {
              this.HideDialog_Questionnaire();
              if (this.iShowList != null)
                this.iShowList.BindGv(clsQuestionnaireEN._CurrTabName, '');

              ////判断只有问题类型为操作题，才执行标准添加
              //if (this.questionTypeId == "09") {
              //    //根据返回的ID添加问题标准；
              //    this.AddNewExaminationCriteria(returnKeyId);
              //}
            }
          } else {
            const returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              this.HideDialog_Questionnaire();
              if (this.iShowList != null)
                this.iShowList.BindGv(clsQuestionnaireEN._CurrTabName, '');
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          const returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In Questionnaire_Edit.btnSubmit_Click)';

          //显示信息框
          console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            this.HideDialog_Questionnaire();
            if (this.iShowList != null) this.iShowList.BindGv(clsQuestionnaireEN._CurrTabName, '');
          }

          break;
        default:
          const strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnSubmit_Click())`;
          console.error(strMsg);
          alert(strMsg);
          break;
      }
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   */
  public async AddNewRecordWithReturnKeySave(): Promise<number> {
    //this.DivName = "divAddNewRecordWithMaxIdSave";
    const objQuestionnaireEN = await refQuestionnaire_Edit.value.GetEditDataQuestionnaireObj();
    objQuestionnaireEN.questionIndex = 999; // 排序号
    objQuestionnaireEN.isTest = false; // 是否测试

    try {
      Questionnaire_CheckPropertyNew(objQuestionnaireEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseKeyId = await Questionnaire_AddNewRecordWithReturnKeyAsync(objQuestionnaireEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        objQuestionnaireEN.questionId = Number(returnKeyId);
        const strInfo: string = `添加记录成功!`;

        //显示信息框
        if (this.isShowMsg) alert(strInfo);
      } else {
        const strInfo: string = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return Number(responseKeyId); //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg: string = `添加记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    return 0; //一定要有一个返回值，否则会出错！
  }

  /* 修改记录
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   */
  public async UpdateRecordSave() {
    //this.DivName = "divUpdateRecordSave";
    const objQuestionnaireEN = await refQuestionnaire_Edit.value.GetEditDataQuestionnaireObj();
    objQuestionnaireEN.questionId = this.keyId;

    objQuestionnaireEN.sfUpdFldSetStr = objQuestionnaireEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objQuestionnaireEN.questionId == '' || objQuestionnaireEN.questionId == undefined) {
      throw '关键字不能为空!';
    }
    try {
      Questionnaire_CheckProperty4Update(objQuestionnaireEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseText = await Questionnaire_UpdateRecordAsync(objQuestionnaireEN);
      const returnBool: boolean = !!responseText;
      if (returnBool == true) {
        //修改成功后判断操作题是否是09类型，如果是 则同时更新一下标准表；
        //if (this.questionTypeId == "09") {
        //    const responseText = await this.UpdateRecordCriteriaSave();
        //}

        message.success('修改记录成功！');
      }
      return returnBool;
    } catch (e) {
      const strMsg: string = `修改记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /* 函数功能:为编辑区绑定下拉框
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
*/
  public async BindDdl4EditRegionInDiv() {
    // 在此处放置用户代码以初始化页面
    // const ddlCourseId = await this.SetDdl_CourseIdInDiv();//编辑区域

    const strCourseId = CourseId_Session.value; //定义条件字段
    if (strCourseId == '99999991') {
      const strMsg = Format("CourseId_Session.value='99999991'，还没有被赋正确的值,请检查!");
      throw strMsg;
    }
    await this.SetDdl_QuestionTypeIdInDiv(); //编辑区域
    await this.SetDdl_KnowledgeGraphIdInDiv(strCourseId); //编辑区域
  }
  /// <summary>
  /// 设置绑定下拉框，针对字段:[questionTypeId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  /// </summary>
  public async SetDdl_QuestionTypeIdInDiv() {
    await QuestionTypeEx_BindDdl_QuestionTypeIdInDiv_CacheEx(
      this.thisDivLayout,
      'ddlQuestionTypeId',
    ); //编辑区域
  }

  /* 根据关键字获取相应的记录的对象
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
    <param name = "sender">参数列表</param>
  */
  public async UpdateRecord(strQuestionId: number): Promise<boolean> {
    this.btnSubmitQuestionnaire = '确认修改';
    this.btnCancelQuestionnaire = '取消修改';
    this.keyId = strQuestionId;
    try {
      const responseText = await Questionnaire_GetObjByQuestionIdAsync(strQuestionId);
      const objQuestionnaireEN: clsQuestionnaireEN = <clsQuestionnaireEN>responseText;

      await refQuestionnaire_Edit.value.ShowDataFromQuestionnaireObj(objQuestionnaireEN);
      console.log('完成UpdateRecord!');
      return true;
    } catch (e) {
      const strMsg: string = `根据关键字获取相应的记录的对象不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }
  /* 函数功能:为编辑区绑定下拉框
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
 */
  public async BindDdl4EditRegion() {
    // 在此处放置用户代码以初始化页面
    //  const ddlCourseId = await this.SetDdl_CourseId();//编辑区域
    const strCourseId = CourseId_Session.value; //定义条件字段
    if (strCourseId == '99999991') {
      const strMsg = Format("CourseId_Session.value='99999991'，还没有被赋正确的值,请检查!");
      throw strMsg;
    }
    await this.SetDdl_QuestionTypeIdInDiv(); //编辑区域
    await this.SetDdl_KnowledgeGraphId(strCourseId); //编辑区域
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[knowledgeGraphId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS)
  /// </summary>
  public async SetDdl_KnowledgeGraphId(strCourseId: string) {
    const objgs_KnowledgesGraph_Cond = new clsgs_KnowledgesGraphEN(); //编辑区域
    //定义条件字段
    //const strCourseId = "";//定义条件字段
    objgs_KnowledgesGraph_Cond.SetCondFldValue(clsgs_KnowledgesGraphEN.con_IsAnswer, true, '=');
    await gs_KnowledgesGraph_BindDdl_KnowledgeGraphIdInDivCache(
      this.thisDivEdit,
      'ddlKnowledgeGraphId',
      strCourseId,
    ); //编辑区域
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[knowledgeGraphId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  /// </summary>
  public async SetDdl_KnowledgeGraphIdInDiv(strCourseId: string) {
    const objgs_KnowledgesGraph_Cond = new clsgs_KnowledgesGraphEN(); //编辑区域
    //定义条件字段
    //const strCourseId = "";//定义条件字段
    objgs_KnowledgesGraph_Cond.SetCondFldValue(clsgs_KnowledgesGraphEN.con_IsAnswer, true, '=');
    await gs_KnowledgesGraph_BindDdl_KnowledgeGraphIdInDivCache(
      this.thisDivEdit,
      'ddlKnowledgeGraphId',
      strCourseId,
    ); //编辑区域
  }

  /* 修改记录
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
  */
  public async btnUpdateRecord_Click(strKeyId: number) {
    this.opType = 'Update';
    if (strKeyId == 0) {
      const strMsg = '修改记录的关键字为空，请检查！';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      //先判断是否是操作类型 显示不同的文本
      //判断题目类型是否是操作题，如果是操作题则显示对应的数据 文本；
      //if (this.questionTypeId == "09") {
      //    $("#borrowAccountDiv_CJ").show();//显示标准编辑框；

      // }

      if (this.bolIsLoadEditRegion == false) {
        //

        const bolIsSuccess = await this.ShowDialog_Questionnaire(this.opType);
        if (bolIsSuccess == false) return;
        await this.BindDdl4EditRegionInDiv();

        this.bolIsLoadEditRegion = true; //
        const update = await this.UpdateRecord(strKeyId);
        if (update == false) {
          const strMsg: string = `在修改记录时,显示记录数据不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        this.ShowDialog_Questionnaire('Update');
      } else {
        const update = await this.UpdateRecord(strKeyId);
        if (update == false) {
          const strMsg: string = `在修改记录时,显示记录数据不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        this.ShowDialog_Questionnaire('Update');
      }
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0034)在修改记录时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 修改记录
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
   */
  //public async btnUpdateCriteriaRecord_Click(strKeyId: string) {
  //    //根据问题ID得到标注表主键
  //    try {

  //        const responseText1 = await Questionnaire_GetObjByQuestionIdAsync(strKeyId);
  //        const objQuestionnaireEN: clsQuestionnaireEN = <clsQuestionnaireEN>responseText1;
  //        this.objQuestionnaire = objQuestionnaireEN;
  //        //判断题目类型是否是操作题，如果是操作题则显示对应的数据 文本；
  //        if (objQuestionnaireEN.questionTypeId == "09") {
  //            $("#borrowAccountDiv_CJ").show();//显示标准编辑框；
  //            //const conGetDataFromClass = await this.btnUpdateCriteriaRecord_Click(strQuestionId);

  //            const objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN = new clsge_ExaminationCriteriaEN();
  //            const strWhere = "questionId ='" + strKeyId + "'"
  //            const responseText = await ge_ExaminationCriteria_GetFirstObjAsync(strWhere);
  //            objge_ExaminationCriteriaEN = <clsge_ExaminationCriteriaEN>responseText;
  //            if (objge_ExaminationCriteriaEN != null) {
  //                const strCriteriaId = objge_ExaminationCriteriaEN.criteriaId;

  //                const conBindDdl = await this.BindDdlExaminationCriteriaInDiv();
  //                const update = await this.UpdateRecordCriteria(strCriteriaId);
  //            }

  //        }
  //        else if (objQuestionnaireEN.questionTypeId == "14") {

  //            $("#trIsHaveAdditionalMemo").show();

  //        }
  //        else if (objQuestionnaireEN.questionTypeId == "15") {

  //            $("#trKnowledgeGraph").show();

  //        }
  //        else {

  //        }

  //    }
  //    catch (e) {
  //        const strMsg: string = `根据关键字获取相应的记录的对象不成功,${e}.`;
  //        console.error(strMsg);
  //        alert(strMsg);
  //    }

  //    try {

  //    }
  //    catch (e) {
  //        const strMsg: string = `(errid: WiTsCs0034)在修改记录时出错!请联系管理员!${e}`;
  //        console.error(strMsg);
  //        alert(strMsg);
  //    }
  //}
  /* 函数功能:把类对象的属性内容显示到界面上
注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
 如果在设置数据库时,就应该一级字段在前,二级字段在后
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
 <param name = "pobjge_ExaminationCriteriaEN">表实体类对象</param>
*/
  //public GetDataFromge_ExaminationCriteriaClass(pobjge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN) {

  //    //this.courseId = pobjge_ExaminationCriteriaEN.courseId;// 课程Id
  //    this.controlTypeId = pobjge_ExaminationCriteriaEN.controlTypeId;// 控件
  //    this.eventTypeId = pobjge_ExaminationCriteriaEN.eventTypeId;// 事件Id
  //    this.controlId = pobjge_ExaminationCriteriaEN.controlId;// 控件Id
  //    this.controlClass = pobjge_ExaminationCriteriaEN.controlClass;// 控件样式
  //    this.controlValue = pobjge_ExaminationCriteriaEN.controlValue;// 控件值
  //    this.controlHtml = pobjge_ExaminationCriteriaEN.controlHtml;// 控件html
  //    this.describe = pobjge_ExaminationCriteriaEN.describe;// 标准描述
  //    this.examinationTypeId = pobjge_ExaminationCriteriaEN.examinationTypeId;//检查类型id
  //    this.memo = pobjge_ExaminationCriteriaEN.memo;// 备注
  //}

  /* 根据关键字获取相应的记录的对象
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  //public async UpdateRecordCriteria(strCriteriaId: string) {

  //    this.strhidCriteriaId = strCriteriaId;
  //    try {
  //        const responseText = await ge_ExaminationCriteria_GetObjByCriteriaIdAsync(strCriteriaId);
  //        const objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN = <clsge_ExaminationCriteriaEN>responseText;
  //        // this.objge_ExaminationCriteria = objge_ExaminationCriteriaEN;
  //        const conGetDataFromClass = await this.GetDataFromge_ExaminationCriteriaClass(objge_ExaminationCriteriaEN);
  //        console.log("完成UpdateRecord!");
  //    }
  //    catch (e) {
  //        const strMsg: string = `根据关键字获取相应的记录的对象不成功,${e}.`;
  //        console.error(strMsg);
  //        alert(strMsg);
  //    }
  //}

  /* 修改记录
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   */
  //public async UpdateRecordCriteriaSave() {
  //    this.DivName = "divUpdateRecordSave";
  //    const objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN = new clsge_ExaminationCriteriaEN();
  //    objge_ExaminationCriteriaEN.criteriaId = this.strhidCriteriaId;
  //    this.PutDataToge_ExaminationCriteriaClass(objge_ExaminationCriteriaEN, this.keyId);
  //    objge_ExaminationCriteriaEN.sfUpdFldSetStr = objge_ExaminationCriteriaEN.updFldString;//设置哪些字段被修改(脏字段)
  //    if (objge_ExaminationCriteriaEN.criteriaId == "" || objge_ExaminationCriteriaEN.criteriaId == undefined) {
  //        throw "关键字不能为空!";
  //    }
  //    try {
  //        ge_ExaminationCriteria_CheckProperty4Update(objge_ExaminationCriteriaEN);
  //    }
  //    catch (e) {
  //        const strMsg: string = `检查数据不成功,${e}.`;
  //        console.error(strMsg);
  //        alert(strMsg);
  //        return false;//一定要有一个返回值，否则会出错！
  //    }
  //    try {
  //        const responseText = await ge_ExaminationCriteria_UpdateRecordAsync(objge_ExaminationCriteriaEN);
  //        const returnBool: boolean = !!responseText;
  //        if (returnBool == true) {
  //            ge_ExaminationCriteria_ReFreshCache(clsPubLocalStorage.courseId);
  //        }
  //        return returnBool;
  //    }
  //    catch (e) {
  //        const strMsg: string = `修改记录不成功,${e}.`;
  //        console.error(strMsg);
  //        alert(strMsg);
  //        return false;
  //    }
  //}

  /// <summary>
  /// 设置绑定下拉框，针对字段:[controlTypeId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS)
  /// </summary>
  //public async SetDdl_ControlTypeId() {
  //    const objge_ControlType_Cond = new clsge_ControlTypeEN();//编辑区域
  //    const ddlControlTypeId = await ge_ControlType_BindDdl_ControlTypeIdCache("ddlControlTypeId", objge_ControlType_Cond);//编辑区域
  //}

  ///// <summary>
  ///// 设置绑定下拉框，针对字段:[controlTypeId]
  ///// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  ///// </summary>
  //public async SetDdl_ControlTypeIdInDiv() {
  //    const objge_ControlType_Cond = new clsge_ControlTypeEN();//编辑区域
  //    const ddlControlTypeId = await ge_ControlType_BindDdl_ControlTypeIdInDivCache(this.divName4Edit, "ddlControlTypeId", objge_ControlType_Cond);//编辑区域
  //}

  /// <summary>
  /// 设置绑定下拉框，针对字段:[eventTypeId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS)
  /// </summary>
  //public async SetDdl_EventTypeId() {
  //    const objge_EventType_Cond = new clsge_EventTypeEN();//编辑区域
  //    const ddlEventTypeId = await ge_EventType_BindDdl_EventTypeIdCache("ddlEventTypeId", objge_EventType_Cond);//编辑区域
  //}

  ///// <summary>
  ///// 设置绑定下拉框，针对字段:[eventTypeId]
  ///// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  ///// </summary>
  //public async SetDdl_EventTypeIdInDiv() {
  //    const objge_EventType_Cond = new clsge_EventTypeEN();//编辑区域
  //    const ddlEventTypeId = await ge_EventType_BindDdl_EventTypeIdInDivCache(this.divName4Edit, "ddlEventTypeId", objge_EventType_Cond);//编辑区域
  //}

  /*
   * 事件Id (Used In Clear())
   */
  // public set eventTypeId(value: string) {
  //     const objDiv = $(`#${this.divName4Edit}`);
  //     CheckControlExist(this.divName4Edit, "select", "ddlEventTypeId");
  //     const strId = `select[id ^= "ddlEventTypeId"]`;
  //     objDiv.find(strId).val(value);
  // }
  // /*
  // * 事件Id (Used In PutDataToClass())
  //*/
  // public get eventTypeId(): string {
  //     const objDiv = $(`#${this.divName4Edit}`);
  //     CheckControlExist(this.divName4Edit, "select", "ddlEventTypeId");
  //     const strId = `select[id ^= "ddlEventTypeId"]`;
  //     if (objDiv.find(strId).val() == "0") return "";
  //     return objDiv.find(strId).val();
  // }

  // /*
  // * 控件Id (Used In Clear())
  //*/
  // public set controlTypeId(value: string) {
  //     const objDiv = $(`#${this.divName4Edit}`);
  //     CheckControlExist(this.divName4Edit, "select", "ddlControlTypeId");
  //     const strId = `select[id ^= "ddlControlTypeId"]`;
  //     objDiv.find(strId).val(value);
  // }
  // /*
  // * 控件Id (Used In PutDataToClass())
  //*/
  // public get controlTypeId(): string {
  //     const objDiv = $(`#${this.divName4Edit}`);
  //     CheckControlExist(this.divName4Edit, "select", "ddlControlTypeId");
  //     const strId = `select[id ^= "ddlControlTypeId"]`;
  //     if (objDiv.find(strId).val() == "0") return "";
  //     return objDiv.find(strId).val();
  // }
  //

  // /*
  // * 检查类型Id (Used In Clear())
  //*/
  // public set examinationTypeId(value: string) {
  //     const objDiv = $(`#${this.divName4Edit}`);
  //     CheckControlExist(this.divName4Edit, "select", "ddlExaminationTypeId");
  //     const strId = `select[id ^= "ddlExaminationTypeId"]`;
  //     objDiv.find(strId).val(value);
  // }
  // /*
  // * 检查类型Id (Used In PutDataToClass())
  //*/
  // public get examinationTypeId(): string {
  //     const objDiv = $(`#${this.divName4Edit}`);
  //     CheckControlExist(this.divName4Edit, "select", "ddlExaminationTypeId");
  //     const strId = `select[id ^= "ddlExaminationTypeId"]`;
  //     if (objDiv.find(strId).val() == "0") return "";
  //     return objDiv.find(strId).val();
  // }

  //   /*
  // * 存放标准表ID
  //*/
  //   public get strhidCriteriaId(): string {
  //       return $("#hidCriteriaIdKeyId").val();
  //   }

  //   public set strhidCriteriaId(value: string) {
  //       $("#hidCriteriaIdKeyId").val(value);
  //   }

  /*
   * 是否启用 (Used In Clear())
   */
  public set isRandom(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.thisDivEdit, 'chkIsRandom', value);
  }
  /*
   * 是否启用 (Used In PutDataToClass())
   */
  public get isRandom(): boolean {
    return GetCheckBoxValueInDivObj(this.thisDivEdit, 'chkIsRandom');
  }

  /*
   * 节点类型Id (Used In Clear())
   */
  public set knowledgeGraphId(value: string) {
    const objDiv = $(`#${this.divName4Edit}`);
    CheckControlExist(this.divName4Edit, 'select', 'ddlKnowledgeGraphId');
    const strId = `select[id ^= "ddlKnowledgeGraphId"]`;
    objDiv.find(strId).val(value);
  }
  /*
   * 节点类型Id (Used In PutDataToClass())
   */
  public get knowledgeGraphId(): string {
    return GetSelectValueInDivObj(this.thisDivLayout, 'ddlKnowledgeGraphId');
  }

  /**
   * 清除用户自定义控件中，所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  // public Clear() {
  //   const strThisFuncName = this.Clear.name;
  //   refQuestionnaire_Edit.value.questionName = '';
  //   $('#ddlDifficultyLevelId option[0]').attr('selected', 'true');
  //   refQuestionnaire_Edit.value.questionContent = '';
  //   refQuestionnaire_Edit.value.questionCode = '';
  //   $('#ddlCourseChapterId option[0]').attr('selected', 'true');
  //   $('#ddlQuestionTypeId option[0]').attr('selected', 'true');
  //   $('#ddlAnswerTypeId option[0]').attr('selected', 'true');
  //   $('#ddlSectionTypeId option[0]').attr('selected', 'true');
  //   refQuestionnaire_Edit.value.isShow = false;
  //   refQuestionnaire_Edit.value.isEffective = false;
  //   refQuestionnaire_Edit.value.memo = '';
  //   $('#ddlKnowledgeGraphId option[0]').attr('selected', 'true');
  //   //this.isTest = false;
  //   $('#ddlLevelModeTypeId option[0]').attr('selected', 'true');
  // }
  /** 函数功能:系统生成的Change事件函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript+<>c__DisplayClass7_0:<Gen_WApi_Ts_GeneEventFunc>b__1)
   **/
  public ddlQuestionTypeId_SelectedIndexChanged(ddlQuestionTypeId: HTMLSelectElement): void {} //
}
