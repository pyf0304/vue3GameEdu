/**
 * 类名:ClassPerfAnalysisVueShare(界面:ClassPerfAnalysisCRUD,01120258)
 * 表名:ClassPerfAnalysis(01120977)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:15:15
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsClassPerfAnalysisEN } from '@/ts/L0Entity/QuestionnaireResult/clsClassPerfAnalysisEN';
import { clsClassPerfAnalysisENEx } from '@/ts/L0Entity/QuestionnaireResult/clsClassPerfAnalysisENEx';
import { ClassPerfAnalysisEx_FuncMapKeyQuestionName } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsClassPerfAnalysisExWApi';
import { intersectSets_Number } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { ClassPerfAnalysisEx_FuncMapKeyDifficultyLevelId } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsClassPerfAnalysisExWApi';
import { ClassPerfAnalysisEx_FuncMapKeyQuestionTypeId } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsClassPerfAnalysisExWApi';
import { intersectSets } from '@/ts/PubFun/clsCommFunc4Ctrl';

const ascOrDesc4SortFun = ref('Asc');
const sortClassPerfAnalysisBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortClassPerfAnalysisBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IdSchool_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refClassPerfAnalysis_Detail = ref();
const refClassPerfAnalysis_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refClassPerfAnalysis_Detail,
  refClassPerfAnalysis_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refClassPerfAnalysis_Detail,
  refClassPerfAnalysis_List,
};

export const showErrorMessage = ref(false);
export const dataListClassPerfAnalysis = ref<Array<clsClassPerfAnalysisENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const classPerfAnalysisCache: { [key: string]: clsClassPerfAnalysisENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const idSchool_q = ref('');
export const courseId_q = ref('');
export const idCurrEduCls_q = ref('');
export const questionName_q = ref('');
export const difficultyLevelId_q = ref('');
export const questionTypeId_q = ref('');
const qryVarSet = reactive({
  idSchool_q,
  courseId_q,
  idCurrEduCls_q,
  questionName_q,
  difficultyLevelId_q,
  questionTypeId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineClassPerfAnalysisCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and IdSchool ='{0}'", IdSchool_Session.value);
  strWhereCond += Format(" and CourseId ='{0}'", CourseId_Session.value);
  try {
    if (idCurrEduCls_q.value != '' && idCurrEduCls_q.value != '0') {
      strWhereCond += Format(
        " And ClassPerfAnalysis.{0} = '{1}'",
        clsClassPerfAnalysisEN.con_IdCurrEduCls,
        idCurrEduCls_q.value,
      );
    }

    //处理针对扩展字段:[QuestionId]的查询
    const arrQuestionId = await GetCondition_QuestionIdLst_In();
    if (arrQuestionId.length > 0) {
      strWhereCond += Format(
        ' And {0} in ({1})',
        clsClassPerfAnalysisEN.con_QuestionId,
        arrQuestionId.join(','),
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineClassPerfAnalysisCondition)时出错!请联系管理员!{0}',
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
export const CombineClassPerfAnalysisConditionObj = async (): Promise<clsClassPerfAnalysisEN> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objClassPerfAnalysisCond = new clsClassPerfAnalysisEN();
  let strWhereCond = ' 1 = 1 ';
  objClassPerfAnalysisCond.SetCondFldValue(
    clsClassPerfAnalysisEN.con_IdSchool,
    IdSchool_Session.value,
    '=',
  );
  objClassPerfAnalysisCond.SetCondFldValue(
    clsClassPerfAnalysisEN.con_CourseId,
    CourseId_Session.value,
    '=',
  );
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (idCurrEduCls_q.value != '' && idCurrEduCls_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsClassPerfAnalysisEN.con_IdCurrEduCls,
        idCurrEduCls_q.value,
      );
      objClassPerfAnalysisCond.SetCondFldValue(
        clsClassPerfAnalysisEN.con_IdCurrEduCls,
        idCurrEduCls_q.value,
        '=',
      );
    }

    //处理针对扩展字段:[QuestionId]的查询
    const arrQuestionId = await GetCondition_QuestionIdLst_In();
    if (arrQuestionId.length > 0) {
      objClassPerfAnalysisCond.SetCondFldValue(
        clsClassPerfAnalysisEN.con_QuestionId,
        arrQuestionId.join(','),
        'in',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineClassPerfAnalysisConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objClassPerfAnalysisCond.whereCond = strWhereCond;
  return objClassPerfAnalysisCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineClassPerfAnalysisConditionObj4ExportExcel =
  async (): Promise<clsClassPerfAnalysisEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objClassPerfAnalysisCond = new clsClassPerfAnalysisENEx();
    let strWhereCond = ' 1 = 1 ';
    objClassPerfAnalysisCond.SetCondFldValue(
      clsClassPerfAnalysisEN.con_IdSchool,
      IdSchool_Session.value,
      '=',
    );
    objClassPerfAnalysisCond.SetCondFldValue(
      clsClassPerfAnalysisEN.con_CourseId,
      CourseId_Session.value,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (idCurrEduCls_q.value != '' && idCurrEduCls_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsClassPerfAnalysisEN.con_IdCurrEduCls,
          idCurrEduCls_q.value,
        );
        objClassPerfAnalysisCond.SetCondFldValue(
          clsClassPerfAnalysisEN.con_IdCurrEduCls,
          idCurrEduCls_q.value,
          '=',
        );
      }

      //处理针对扩展字段:[QuestionId]的查询
      const arrQuestionId = await GetCondition_QuestionIdLst_In();
      if (arrQuestionId.length > 0) {
        objClassPerfAnalysisCond.SetCondFldValue(
          clsClassPerfAnalysisEN.con_QuestionId,
          arrQuestionId.join(','),
          'in',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineClassPerfAnalysisConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objClassPerfAnalysisCond.whereCond = strWhereCond;
    return objClassPerfAnalysisCond;
  };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Ts_CombineConditionInFldValueLst_GeneFun)
 * @returns 相关字段的关键字列表(Array<string>)
 **/
export async function GetCondition_QuestionIdLst_In(): Promise<Array<number>> {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objClassPerfAnalysisCond = new clsClassPerfAnalysisENEx();
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  let arrQuestionIdInclude: Array<number> = [];
  try {
    if (questionName_q.value != '') {
      objClassPerfAnalysisCond.SetCondFldValue(
        clsClassPerfAnalysisENEx.con_QuestionName,
        questionName_q.value,
        '=',
      );

      const arrQuestionId_QuestionName = await ClassPerfAnalysisEx_FuncMapKeyQuestionName(
        objClassPerfAnalysisCond,
      );
      if (arrQuestionIdInclude.length == 0) {
        arrQuestionIdInclude = arrQuestionId_QuestionName.map((x) => x);
      } else {
        arrQuestionIdInclude = intersectSets_Number(
          arrQuestionIdInclude,
          arrQuestionId_QuestionName.map((x) => x),
        );
      }
    }
    if (difficultyLevelId_q.value != '' && difficultyLevelId_q.value != '0') {
      objClassPerfAnalysisCond.SetCondFldValue(
        clsClassPerfAnalysisENEx.con_DifficultyLevelId,
        difficultyLevelId_q.value,
        '=',
      );

      const arrQuestionId_DifficultyLevelId = await ClassPerfAnalysisEx_FuncMapKeyDifficultyLevelId(
        objClassPerfAnalysisCond,
      );
      if (arrQuestionIdInclude.length == 0) {
        arrQuestionIdInclude = arrQuestionId_DifficultyLevelId.map((x) => x);
      } else {
        arrQuestionIdInclude = intersectSets_Number(
          arrQuestionIdInclude,
          arrQuestionId_DifficultyLevelId.map((x) => x),
        );
      }
    }
    if (questionTypeId_q.value != '' && questionTypeId_q.value != '0') {
      objClassPerfAnalysisCond.SetCondFldValue(
        clsClassPerfAnalysisENEx.con_QuestionTypeId,
        questionTypeId_q.value,
        '=',
      );

      const arrQuestionId_QuestionTypeId = await ClassPerfAnalysisEx_FuncMapKeyQuestionTypeId(
        objClassPerfAnalysisCond,
      );
      if (arrQuestionIdInclude.length == 0) {
        arrQuestionIdInclude = arrQuestionId_QuestionTypeId.map((x) => x);
      } else {
        arrQuestionIdInclude = intersectSets_Number(
          arrQuestionIdInclude,
          arrQuestionId_QuestionTypeId.map((x) => x),
        );
      }
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  return arrQuestionIdInclude;
}

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsClassPerfAnalysisENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListClassPerfAnalysis.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refClassPerfAnalysis_List.value != null)
    refClassPerfAnalysis_List.value.selectAllChecked = false;
};
