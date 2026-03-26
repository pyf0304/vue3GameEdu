/**
 * 类名:cc_KnowledgesExamLibRelaVueShare(界面:cc_KnowledgesExamLibRelaCRUD,01120185)
 * 表名:cc_KnowledgesExamLibRela(01120140)
 * 版本:2024.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/23 17:19:47
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format } from '@/ts/PubFun/clsString';
import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
import { clscc_KnowledgesExamLibRelaENEx } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaENEx';
import {
  courseChapterId_q,
  CourseId_Session,
  knowledgeModuleId_q,
  QuestionId_Static,
} from '@/views/Knowledges/cc_KnowledgesExamLibRelaVueShare';

const ascOrDesc4SortFun = ref('Asc');
const sortcc_KnowledgesExamLibRelaBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortcc_KnowledgesExamLibRelaBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CourseId_Cache = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const addiCondition = ref(''); //附加条件
const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivListDialog = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refcc_KnowledgesExamLibRela_Edit = ref();
const refcc_KnowledgesExamLibRela_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivListDialog,
  refDivEdit,
  refDivDetail,
  refcc_KnowledgesExamLibRela_Edit,
  refcc_KnowledgesExamLibRela_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivListDialog,
  refDivEdit,
  refDivDetail,
  refcc_KnowledgesExamLibRela_Edit,
  refcc_KnowledgesExamLibRela_List,
};

export const showErrorMessage = ref(false);
export const dataListcc_KnowledgesExamLibRela = ref<Array<clscc_KnowledgesExamLibRelaENEx>>([]);
export const emptyRecNumInfo = ref('');

//查询区变量定义
export const courseId_q = ref('');
const qryVarSet = reactive({
  courseId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

export const Combinecc_KnowledgesExamLibRelaCondition_Dialog = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  strWhereCond += ` and ${clscc_KnowledgesExamLibRelaEN.con_CourseId} = '${CourseId_Session.value}'`;
  strWhereCond += Format(' and QuestionId ={0}', QuestionId_Static.value);
  try {
    if (courseId_q.value != '' && courseId_q.value != '0') {
      strWhereCond += Format(
        " And cc_KnowledgesExamLibRela.{0} = '{1}'",
        clscc_KnowledgesExamLibRelaEN.con_CourseId,
        courseId_q.value,
      );
    }
    if (knowledgeModuleId_q.value != '' && knowledgeModuleId_q.value != '0') {
      strWhereCond += Format(
        " And  CourseKnowledgeId in (Select CourseKnowledgeId from cc_CourseKnowledges where KnowledgeModuleId = '{0}')",
        knowledgeModuleId_q.value,
      );
    }
    if (courseChapterId_q.value != '' && courseChapterId_q.value != '0') {
      strWhereCond += Format(
        " And  CourseKnowledgeId in (Select CourseKnowledgeId from cc_CourseKnowledges where CourseChapterId = '{0}')",
        courseChapterId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(Combinecc_KnowledgesExamLibRelaCondition)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  return strWhereCond;
};
/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_KnowledgesExamLibRelaConditionObj4ExportExcel =
  async (): Promise<clscc_KnowledgesExamLibRelaEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objcc_KnowledgesExamLibRelaCond = new clscc_KnowledgesExamLibRelaENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (courseId_q.value != '' && courseId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clscc_KnowledgesExamLibRelaEN.con_CourseId,
          courseId_q.value,
        );
        objcc_KnowledgesExamLibRelaCond.SetCondFldValue(
          clscc_KnowledgesExamLibRelaEN.con_CourseId,
          courseId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(Combinecc_KnowledgesExamLibRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objcc_KnowledgesExamLibRelaCond.whereCond = strWhereCond;
    return objcc_KnowledgesExamLibRelaCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList_Dialog = async (
  arrObjLst: Array<clscc_KnowledgesExamLibRelaENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListcc_KnowledgesExamLibRela.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
};
