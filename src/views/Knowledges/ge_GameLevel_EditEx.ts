/**
 * 类名:ge_GameLevel_EditEx(界面:ge_GameLevelCRUD)
 * 表名:ge_GameLevel(01120904)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/08 12:05:27
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_编辑区后台Ex_TS(TS)(WA_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/

import {
  divVarSet,
  viewVarSet,
  CourseId_Session,
  qryVarSet,
  refge_GameLevel_Edit,
} from '@/views/Knowledges/ge_GameLevelVueShare';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
import { ge_LevelModeTypeEx_BindDdl_LevelModeTypeIdInDivCache } from '@/ts/L3ForWApiExShare/Knowledges/clsge_LevelModeTypeExWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { ge_GameLevel_Edit } from '@/viewsBase/Knowledges/ge_GameLevel_Edit';
import { clsge_GameLevelChapterRelaEN } from '@/ts/L0Entity/GameLearn/clsge_GameLevelChapterRelaEN';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import {
  ge_GameLevel_AddNewRecordWithMaxIdAsync,
  ge_GameLevel_CheckPropertyNew,
  ge_GameLevel_ReFreshCache,
} from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';

import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { GetInputValueInDivObj, GetInputValueInDivObjN } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { useUserStore } from '@/store/modulesShare/user';

/* ge_GameLevel_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class ge_GameLevel_EditEx extends ge_GameLevel_Edit {
  /*
       按钮单击,用于调用Js函数中btn_Click
      (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
      */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = ge_GameLevel_EditEx.objPageEdit;
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(ge_GameLevel_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
    */
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    //this.DivName = "divAddNewRecordWithMaxIdSave";
    const objge_GameLevelEN: clsge_GameLevelEN = new clsge_GameLevelEN();
    objge_GameLevelEN.orderNum = 99;
    this.PutDataToge_GameLevelClass(objge_GameLevelEN);
    try {
      ge_GameLevel_CheckPropertyNew(objge_GameLevelEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseKeyId = await ge_GameLevel_AddNewRecordWithMaxIdAsync(objge_GameLevelEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        ge_GameLevel_ReFreshCache(CourseId_Session.value);
        const strInfo: string = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo: string = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg: string = `添加记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    return ''; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   <param name = "pobjge_GameLevelEN">数据传输的目的类对象</param>
  */
  public async PutDataToge_GameLevelClass(pobjge_GameLevelEN: clsge_GameLevelEN) {
    const userStore = useUserStore();
    pobjge_GameLevelEN.SetGameLevelName(refge_GameLevel_Edit.value.gameLevelName); // 游戏关卡名称
    pobjge_GameLevelEN.SetDifficultyLevelId(refge_GameLevel_Edit.value.difficultyLevelId); // 难度等级Id
    pobjge_GameLevelEN.SetQuestionTypeId(refge_GameLevel_Edit.value.questionTypeId); // 题目类型Id

    pobjge_GameLevelEN.SetQuestionNum(refge_GameLevel_Edit.value.questionNum); // 题目数
    pobjge_GameLevelEN.SetQuestionScore(refge_GameLevel_Edit.value.questionScore); // 题目分
    pobjge_GameLevelEN.SetLevelModeTypeId(refge_GameLevel_Edit.value.levelModeTypeId); // 模式
    pobjge_GameLevelEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjge_GameLevelEN.SetCourseId(clsPubLocalStorage.courseId);
    pobjge_GameLevelEN.SetInUse(refge_GameLevel_Edit.value.inUse);
    pobjge_GameLevelEN.SetIsRecommend(refge_GameLevel_Edit.value.isRecommend);

    pobjge_GameLevelEN.SetUpdDate(clsPubFun4Web.getNowDate());
    pobjge_GameLevelEN.SetUpdUser(userStore.userId);
    pobjge_GameLevelEN.SetStartTime(refge_GameLevel_Edit.value.startTime); // 开始时间
    pobjge_GameLevelEN.SetEndTime(refge_GameLevel_Edit.value.endTime); // 结束时间
    pobjge_GameLevelEN.SetMemo(refge_GameLevel_Edit.value.memo); // 备注
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[levelModeTypeId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  /// </summary>
  public async SetDdl_LevelModeTypeIdInDiv() {
    const objge_LevelModeType_Cond = new clsge_LevelModeTypeEN(); //编辑区域
    const ddlLevelModeTypeId = await ge_LevelModeTypeEx_BindDdl_LevelModeTypeIdInDivCache(
      this.divName4Edit,
      'ddlLevelModeTypeId',
      objge_LevelModeType_Cond,
    ); //编辑区域
  }

  /* 函数功能:把界面上的属性数据传到类对象中
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   <param name = "pobjge_GameLevelChapterRelaEN">数据传输的目的类对象</param>
  */
  public PutDataToge_GameLevelChapterRelaClass(
    pobjge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN,
    ChapterId: string,
  ) {
    const userStore = useUserStore();
    pobjge_GameLevelChapterRelaEN.SetCourseId(clsPubLocalStorage.courseId); // 课程Id
    pobjge_GameLevelChapterRelaEN.SetGameLevelId(
      GetInputValueInDivObj(this.thisDivLayout, 'hidGameLevel'),
    ); // 游戏关卡Id
    pobjge_GameLevelChapterRelaEN.SetCourseChapterId(ChapterId); // 课程章节ID
    pobjge_GameLevelChapterRelaEN.SetQuestionNum(
      GetInputValueInDivObjN(this.thisDivLayout, 'txtQuestionNum'),
    ); //题目数量
    pobjge_GameLevelChapterRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjge_GameLevelChapterRelaEN.SetUpdUser(userStore.userId); // 修改人
    // pobjge_GameLevelChapterRelaEN.Setmemo(this.memo;// 备注
  }
}
