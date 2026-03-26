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
import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
import {
  courseChapterId_q,
  CourseId_Session,
  difficultyLevelId_q,
  isTest_q,
  levelModeTypeId_q,
  questionName_q,
  questionTypeId_q,
} from '@/views/QuestionaireEdit/QuestionnaireVueShare';

//界面公共变量，可以在多个相关界面中共享

const reftz_ContentAttachmentList = ref();

const divVarSet = reactive({
  reftz_ContentAttachmentList,
});
export { divVarSet, reftz_ContentAttachmentList };

//查询区变量定义

export const questionId_q = ref(0);
export const courseKnowledgeId_q = ref('');
const qryVarSet = reactive({
  questionId_q,
  courseKnowledgeId_q,
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
export const CombineQuestionnaireConditionEx = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and CourseId ='{0}'", CourseId_Session.value);
  try {
    if (courseKnowledgeId_q.value != '' && courseKnowledgeId_q.value != '0') {
      strWhereCond += ` And ${clscc_KnowledgesExamLibRelaEN.con_QuestionId} in (select ${clscc_KnowledgesExamLibRelaEN.con_QuestionId} from ${clscc_KnowledgesExamLibRelaEN._CurrTabName} where ${clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId}= '${courseKnowledgeId_q.value}')`;
    }

    if (questionId_q.value != 0) {
      strWhereCond += Format(
        ' And {0} = {1}',
        clsQuestionnaireEN.con_QuestionId,
        questionId_q.value,
      );
    }

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

    if (isTest_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsTest);
    } else if (isTest_q.value == 'false') {
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
    if (isTest_q.value == '1') {
      strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsTest);
      objQuestionnaireCond.SetCondFldValue(clsQuestionnaireEN.con_IsTest, true, '=');
    } else if (isTest_q.value == '0') {
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
      if (isTest_q.value == '1') {
        strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsTest);
        objQuestionnaireCond.SetCondFldValue(clsQuestionnaireEN.con_IsTest, true, '=');
      } else if (isTest_q.value == '0') {
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
