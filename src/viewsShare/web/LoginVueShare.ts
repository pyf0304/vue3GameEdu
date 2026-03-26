/**
 * 类名:TeachingCaseResCaseVueShare(界面:TeachingCaseResCaseCRUD,01120191)
 * 表名:TeachingCaseResCase(01120377)
 * 版本:2024.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/23 17:20:14
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:教学案例资源(TeachingCaseResLib)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format } from '@/ts/PubFun/clsString';
import { clsTeachingCaseResCaseEN } from '@/ts/L0Entity/TeachingCaseResLib/clsTeachingCaseResCaseEN';
import { clsTeachingCaseResCaseENEx } from '@/ts/L0Entity/TeachingCaseResLib/clsTeachingCaseResCaseENEx';

const ascOrDesc4SortFun = ref('Asc');
const sortTeachingCaseResCaseBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortTeachingCaseResCaseBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CourseId_Cache = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refLogin_Edit = ref();
const refTeachingCaseResCase_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refLogin_Edit,
  refTeachingCaseResCase_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refLogin_Edit,
  refTeachingCaseResCase_List,
};

export const showErrorMessage = ref(false);
export const dataListTeachingCaseResCase = ref<Array<clsTeachingCaseResCaseENEx>>([]);
export const emptyRecNumInfo = ref('');

//查询区变量定义
export const teachingCaseResCaseName_q = ref('');
export const idCaseType_q = ref('');
export const courseId_q = ref('');
export const caseLevelId_q = ref('');
const qryVarSet = reactive({
  teachingCaseResCaseName_q,
  idCaseType_q,
  courseId_q,
  caseLevelId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineTeachingCaseResCaseCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (teachingCaseResCaseName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTeachingCaseResCaseEN.con_TeachingCaseResCaseName,
        teachingCaseResCaseName_q.value,
      );
    }
    if (idCaseType_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTeachingCaseResCaseEN.con_IdCaseType,
        idCaseType_q.value,
      );
    }
    if (courseId_q.value != '' && courseId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsTeachingCaseResCaseEN.con_CourseId,
        courseId_q.value,
      );
    }
    if (caseLevelId_q.value != '' && caseLevelId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsTeachingCaseResCaseEN.con_CaseLevelId,
        caseLevelId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineTeachingCaseResCaseCondition)时出错!请联系管理员!{0}',
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
export const CombineTeachingCaseResCaseConditionObj =
  async (): Promise<clsTeachingCaseResCaseEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objTeachingCaseResCaseCond = new clsTeachingCaseResCaseEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (teachingCaseResCaseName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsTeachingCaseResCaseEN.con_TeachingCaseResCaseName,
          teachingCaseResCaseName_q.value,
        );
        objTeachingCaseResCaseCond.SetCondFldValue(
          clsTeachingCaseResCaseEN.con_TeachingCaseResCaseName,
          teachingCaseResCaseName_q.value,
          'like',
        );
      }
      if (idCaseType_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsTeachingCaseResCaseEN.con_IdCaseType,
          idCaseType_q.value,
        );
        objTeachingCaseResCaseCond.SetCondFldValue(
          clsTeachingCaseResCaseEN.con_IdCaseType,
          idCaseType_q.value,
          'like',
        );
      }
      if (courseId_q.value != '' && courseId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTeachingCaseResCaseEN.con_CourseId,
          courseId_q.value,
        );
        objTeachingCaseResCaseCond.SetCondFldValue(
          clsTeachingCaseResCaseEN.con_CourseId,
          courseId_q.value,
          '=',
        );
      }
      if (caseLevelId_q.value != '' && caseLevelId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTeachingCaseResCaseEN.con_CaseLevelId,
          caseLevelId_q.value,
        );
        objTeachingCaseResCaseCond.SetCondFldValue(
          clsTeachingCaseResCaseEN.con_CaseLevelId,
          caseLevelId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合查询条件对象(CombineTeachingCaseResCaseConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objTeachingCaseResCaseCond.whereCond = strWhereCond;
    return objTeachingCaseResCaseCond;
  };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineTeachingCaseResCaseConditionObj4ExportExcel =
  async (): Promise<clsTeachingCaseResCaseEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objTeachingCaseResCaseCond = new clsTeachingCaseResCaseENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (teachingCaseResCaseName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsTeachingCaseResCaseEN.con_TeachingCaseResCaseName,
          teachingCaseResCaseName_q.value,
        );
        objTeachingCaseResCaseCond.SetCondFldValue(
          clsTeachingCaseResCaseEN.con_TeachingCaseResCaseName,
          teachingCaseResCaseName_q.value,
          'like',
        );
      }
      if (idCaseType_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsTeachingCaseResCaseEN.con_IdCaseType,
          idCaseType_q.value,
        );
        objTeachingCaseResCaseCond.SetCondFldValue(
          clsTeachingCaseResCaseEN.con_IdCaseType,
          idCaseType_q.value,
          'like',
        );
      }
      if (courseId_q.value != '' && courseId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTeachingCaseResCaseEN.con_CourseId,
          courseId_q.value,
        );
        objTeachingCaseResCaseCond.SetCondFldValue(
          clsTeachingCaseResCaseEN.con_CourseId,
          courseId_q.value,
          '=',
        );
      }
      if (caseLevelId_q.value != '' && caseLevelId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTeachingCaseResCaseEN.con_CaseLevelId,
          caseLevelId_q.value,
        );
        objTeachingCaseResCaseCond.SetCondFldValue(
          clsTeachingCaseResCaseEN.con_CaseLevelId,
          caseLevelId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineTeachingCaseResCaseConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objTeachingCaseResCaseCond.whereCond = strWhereCond;
    return objTeachingCaseResCaseCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsTeachingCaseResCaseENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListTeachingCaseResCase.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
};
