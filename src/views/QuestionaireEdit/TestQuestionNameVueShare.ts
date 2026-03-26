/**
 * 类名:QuestionnaireVueShare(界面:QuestionnaireCRUD,01120199)
 * 表名:Questionnaire(01120001)
 * 版本:2024.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/23 17:12:26
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format } from '@/ts/PubFun/clsString';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { clsQuestionnaireENEx } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireENEx';

const ascOrDesc4SortFun = ref('Asc');
const sortQuestionnaireBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortQuestionnaireBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IsVisible_Giving = ref(false); //6、定义下拉框条件给定值2

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const reftz_ContentAttachmentList = ref();
const refQuestionnaire_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  reftz_ContentAttachmentList,
  refQuestionnaire_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  reftz_ContentAttachmentList,
  refQuestionnaire_List,
};

export const showErrorMessage = ref(false);
export const dataListQuestionnaire = ref<Array<clsQuestionnaireENEx>>([]);
export const emptyRecNumInfo = ref('');

//查询区变量定义
export const questionName_q = ref('');
export const courseChapterId_q = ref('');
export const questionTypeId_q = ref('');
export const difficultyLevelId_q = ref('');
export const levelModeTypeId_q = ref('');
export const isTest_q = ref(true);
export const courseId_q = ref('');
const qryVarSet = reactive({
  questionName_q,
  courseChapterId_q,
  questionTypeId_q,
  difficultyLevelId_q,
  levelModeTypeId_q,
  isTest_q,
  courseId_q,
});
export { qryVarSet };

//功能区变量定义
export const courseId_f = ref('');
const featureVarSet = reactive({
  courseId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQuestionnaireCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and CourseId ='{0}'", CourseId_Session.value);
  try {
    if (questionName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQuestionnaireEN.con_QuestionName,
        questionName_q.value,
      );
    }
    if (courseChapterId_q.value != '' && courseChapterId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQuestionnaireEN.con_CourseChapterId,
        courseChapterId_q.value,
      );
    }
    if (questionTypeId_q.value != '' && questionTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQuestionnaireEN.con_QuestionTypeId,
        questionTypeId_q.value,
      );
    }
    if (difficultyLevelId_q.value != '' && difficultyLevelId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQuestionnaireEN.con_DifficultyLevelId,
        difficultyLevelId_q.value,
      );
    }
    if (levelModeTypeId_q.value != '' && levelModeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQuestionnaireEN.con_LevelModeTypeId,
        levelModeTypeId_q.value,
      );
    }
    if (isTest_q.value == true) {
      strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsTest);
    } else if (isTest_q.value == false) {
      strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsTest);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineQuestionnaireCondition)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  return strWhereCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQuestionnaireConditionObj = async (): Promise<clsQuestionnaireEN> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  const objQuestionnaireCond = new clsQuestionnaireEN();
  objQuestionnaireCond.SetCondFldValue(
    clsQuestionnaireEN.con_CourseId,
    CourseId_Session.value,
    '=',
  );
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (questionName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQuestionnaireEN.con_QuestionName,
        questionName_q.value,
      );
      objQuestionnaireCond.SetCondFldValue(
        clsQuestionnaireEN.con_QuestionName,
        questionName_q.value,
        'like',
      );
    }
    if (courseChapterId_q.value != '' && courseChapterId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQuestionnaireEN.con_CourseChapterId,
        courseChapterId_q.value,
      );
      objQuestionnaireCond.SetCondFldValue(
        clsQuestionnaireEN.con_CourseChapterId,
        courseChapterId_q.value,
        '=',
      );
    }
    if (questionTypeId_q.value != '' && questionTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQuestionnaireEN.con_QuestionTypeId,
        questionTypeId_q.value,
      );
      objQuestionnaireCond.SetCondFldValue(
        clsQuestionnaireEN.con_QuestionTypeId,
        questionTypeId_q.value,
        '=',
      );
    }
    if (difficultyLevelId_q.value != '' && difficultyLevelId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQuestionnaireEN.con_DifficultyLevelId,
        difficultyLevelId_q.value,
      );
      objQuestionnaireCond.SetCondFldValue(
        clsQuestionnaireEN.con_DifficultyLevelId,
        difficultyLevelId_q.value,
        '=',
      );
    }
    if (levelModeTypeId_q.value != '' && levelModeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQuestionnaireEN.con_LevelModeTypeId,
        levelModeTypeId_q.value,
      );
      objQuestionnaireCond.SetCondFldValue(
        clsQuestionnaireEN.con_LevelModeTypeId,
        levelModeTypeId_q.value,
        '=',
      );
    }
    if (isTest_q.value == true) {
      strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsTest);
      objQuestionnaireCond.SetCondFldValue(clsQuestionnaireEN.con_IsTest, true, '=');
    } else if (isTest_q.value == false) {
      strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsTest);
      objQuestionnaireCond.SetCondFldValue(clsQuestionnaireEN.con_IsTest, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineQuestionnaireConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objQuestionnaireCond.whereCond = strWhereCond;
  return objQuestionnaireCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQuestionnaireConditionObj4ExportExcel =
  async (): Promise<clsQuestionnaireEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objQuestionnaireCond = new clsQuestionnaireENEx();
    objQuestionnaireCond.SetCondFldValue(
      clsQuestionnaireEN.con_CourseId,
      CourseId_Session.value,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (questionName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsQuestionnaireEN.con_QuestionName,
          questionName_q.value,
        );
        objQuestionnaireCond.SetCondFldValue(
          clsQuestionnaireEN.con_QuestionName,
          questionName_q.value,
          'like',
        );
      }
      if (courseChapterId_q.value != '' && courseChapterId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQuestionnaireEN.con_CourseChapterId,
          courseChapterId_q.value,
        );
        objQuestionnaireCond.SetCondFldValue(
          clsQuestionnaireEN.con_CourseChapterId,
          courseChapterId_q.value,
          '=',
        );
      }
      if (questionTypeId_q.value != '' && questionTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQuestionnaireEN.con_QuestionTypeId,
          questionTypeId_q.value,
        );
        objQuestionnaireCond.SetCondFldValue(
          clsQuestionnaireEN.con_QuestionTypeId,
          questionTypeId_q.value,
          '=',
        );
      }
      if (difficultyLevelId_q.value != '' && difficultyLevelId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQuestionnaireEN.con_DifficultyLevelId,
          difficultyLevelId_q.value,
        );
        objQuestionnaireCond.SetCondFldValue(
          clsQuestionnaireEN.con_DifficultyLevelId,
          difficultyLevelId_q.value,
          '=',
        );
      }
      if (levelModeTypeId_q.value != '' && levelModeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQuestionnaireEN.con_LevelModeTypeId,
          levelModeTypeId_q.value,
        );
        objQuestionnaireCond.SetCondFldValue(
          clsQuestionnaireEN.con_LevelModeTypeId,
          levelModeTypeId_q.value,
          '=',
        );
      }
      if (isTest_q.value == true) {
        strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsTest);
        objQuestionnaireCond.SetCondFldValue(clsQuestionnaireEN.con_IsTest, true, '=');
      } else if (isTest_q.value == false) {
        strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsTest);
        objQuestionnaireCond.SetCondFldValue(clsQuestionnaireEN.con_IsTest, false, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineQuestionnaireConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objQuestionnaireCond.whereCond = strWhereCond;
    return objQuestionnaireCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsQuestionnaireENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListQuestionnaire.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
};
