/**
 * 类名:ge_KnowledgesClsMasterVueShare(界面:ge_KnowledgesClsMasterCRUD,01120250)
 * 表名:ge_KnowledgesClsMaster(01120962)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:41:18
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsge_KnowledgesClsMasterEN } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesClsMasterEN';
import { clsge_KnowledgesClsMasterENEx } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesClsMasterENEx';

const ascOrDesc4SortFun = ref('Asc');
const sortge_KnowledgesClsMasterBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortge_KnowledgesClsMasterBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IdCurrEduCls_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refge_KnowledgesClsMaster_Detail = ref();
const refge_KnowledgesClsMaster_Edit = ref();
const refge_KnowledgesClsMaster_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refge_KnowledgesClsMaster_Detail,
  refge_KnowledgesClsMaster_Edit,
  refge_KnowledgesClsMaster_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refge_KnowledgesClsMaster_Detail,
  refge_KnowledgesClsMaster_Edit,
  refge_KnowledgesClsMaster_List,
};

export const showErrorMessage = ref(false);
export const dataListge_KnowledgesClsMaster = ref<Array<clsge_KnowledgesClsMasterENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const ge_KnowledgesClsMasterCache: { [key: string]: clsge_KnowledgesClsMasterENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const masterLevelId_q = ref('');
export const courseKnowledgeId_q = ref('');
export const idCurrEduCls_q = ref('');
const qryVarSet = reactive({
  masterLevelId_q,
  courseKnowledgeId_q,
  idCurrEduCls_q,
});
export { qryVarSet };

//功能区变量定义
export const masteryValue_f = ref(0);
const featureVarSet = reactive({
  masteryValue_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_KnowledgesClsMasterCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and IdCurrEduCls ='{0}'", IdCurrEduCls_Session.value);
  try {
    if (masterLevelId_q.value != '' && masterLevelId_q.value != '0') {
      strWhereCond += Format(
        " And ge_KnowledgesClsMaster.{0} = '{1}'",
        clsge_KnowledgesClsMasterEN.con_MasterLevelId,
        masterLevelId_q.value,
      );
    }
    if (courseKnowledgeId_q.value != '' && courseKnowledgeId_q.value != '0') {
      strWhereCond += Format(
        " And ge_KnowledgesClsMaster.{0} = '{1}'",
        clsge_KnowledgesClsMasterEN.con_CourseKnowledgeId,
        courseKnowledgeId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(Combinege_KnowledgesClsMasterCondition)时出错!请联系管理员!{0}',
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
export const Combinege_KnowledgesClsMasterConditionObj =
  async (): Promise<clsge_KnowledgesClsMasterEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objge_KnowledgesClsMasterCond = new clsge_KnowledgesClsMasterEN();
    let strWhereCond = ' 1 = 1 ';
    objge_KnowledgesClsMasterCond.SetCondFldValue(
      clsge_KnowledgesClsMasterEN.con_IdCurrEduCls,
      IdCurrEduCls_Session.value,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (masterLevelId_q.value != '' && masterLevelId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsge_KnowledgesClsMasterEN.con_MasterLevelId,
          masterLevelId_q.value,
        );
        objge_KnowledgesClsMasterCond.SetCondFldValue(
          clsge_KnowledgesClsMasterEN.con_MasterLevelId,
          masterLevelId_q.value,
          '=',
        );
      }
      if (courseKnowledgeId_q.value != '' && courseKnowledgeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsge_KnowledgesClsMasterEN.con_CourseKnowledgeId,
          courseKnowledgeId_q.value,
        );
        objge_KnowledgesClsMasterCond.SetCondFldValue(
          clsge_KnowledgesClsMasterEN.con_CourseKnowledgeId,
          courseKnowledgeId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合查询条件对象(Combinege_KnowledgesClsMasterConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objge_KnowledgesClsMasterCond.whereCond = strWhereCond;
    return objge_KnowledgesClsMasterCond;
  };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_KnowledgesClsMasterConditionObj4ExportExcel =
  async (): Promise<clsge_KnowledgesClsMasterEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objge_KnowledgesClsMasterCond = new clsge_KnowledgesClsMasterENEx();
    let strWhereCond = ' 1 = 1 ';
    objge_KnowledgesClsMasterCond.SetCondFldValue(
      clsge_KnowledgesClsMasterEN.con_IdCurrEduCls,
      IdCurrEduCls_Session.value,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (masterLevelId_q.value != '' && masterLevelId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsge_KnowledgesClsMasterEN.con_MasterLevelId,
          masterLevelId_q.value,
        );
        objge_KnowledgesClsMasterCond.SetCondFldValue(
          clsge_KnowledgesClsMasterEN.con_MasterLevelId,
          masterLevelId_q.value,
          '=',
        );
      }
      if (courseKnowledgeId_q.value != '' && courseKnowledgeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsge_KnowledgesClsMasterEN.con_CourseKnowledgeId,
          courseKnowledgeId_q.value,
        );
        objge_KnowledgesClsMasterCond.SetCondFldValue(
          clsge_KnowledgesClsMasterEN.con_CourseKnowledgeId,
          courseKnowledgeId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(Combinege_KnowledgesClsMasterConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objge_KnowledgesClsMasterCond.whereCond = strWhereCond;
    return objge_KnowledgesClsMasterCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsge_KnowledgesClsMasterENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListge_KnowledgesClsMaster.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refge_KnowledgesClsMaster_List.value != null)
    refge_KnowledgesClsMaster_List.value.selectAllChecked = false;
};

export function ge_KnowledgesClsMaster_DeleteKeyIdCache(
  strIdCurrEduCls: string,
  strCourseKnowledgeId: string,
): void {
  if (IsNullOrEmpty(strIdCurrEduCls) == false && IsNullOrEmpty(strCourseKnowledgeId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strIdCurrEduCls}_${strCourseKnowledgeId}`;
    delete ge_KnowledgesClsMasterCache[cacheKey];
    return;
  }
}
