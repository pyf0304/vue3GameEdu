/**
 * 类名:KnowledgeTypeVueShare(界面:KnowledgeTypeCRUD,01120214)
 * 表名:KnowledgeType(01120890)
 * 版本:2024.11.25.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/27 00:23:48
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
import { clsKnowledgeTypeEN } from 'share-stu-study-base-lib';
import { clsKnowledgeTypeENEx } from 'share-stu-study-base-lib';

const ascOrDesc4SortFun = ref('Asc');
const sortKnowledgeTypeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortKnowledgeTypeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refKnowledgeType_Edit = ref();
const refKnowledgeType_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refKnowledgeType_Edit,
  refKnowledgeType_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refKnowledgeType_Edit,
  refKnowledgeType_List,
};

export const showErrorMessage = ref(false);
export const dataListKnowledgeType = ref<Array<clsKnowledgeTypeENEx>>([]);
export const emptyRecNumInfo = ref('');

//查询区变量定义
export const knowledgeTypeName_q = ref('');
const qryVarSet = reactive({
  knowledgeTypeName_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineKnowledgeTypeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (knowledgeTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsKnowledgeTypeEN.con_KnowledgeTypeName,
        knowledgeTypeName_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineKnowledgeTypeCondition)时出错!请联系管理员!{0}',
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
export const CombineKnowledgeTypeConditionObj = async (): Promise<clsKnowledgeTypeEN_T> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  const objKnowledgeTypeCond = new clsKnowledgeTypeEN();
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (knowledgeTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsKnowledgeTypeEN.con_KnowledgeTypeName,
        knowledgeTypeName_q.value,
      );
      objKnowledgeTypeCond.SetCondFldValue(
        clsKnowledgeTypeEN.con_KnowledgeTypeName,
        knowledgeTypeName_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineKnowledgeTypeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objKnowledgeTypeCond.whereCond = strWhereCond;
  return objKnowledgeTypeCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineKnowledgeTypeConditionObj4ExportExcel =
  async (): Promise<clsKnowledgeTypeEN_T> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objKnowledgeTypeCond = new clsKnowledgeTypeENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (knowledgeTypeName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsKnowledgeTypeEN.con_KnowledgeTypeName,
          knowledgeTypeName_q.value,
        );
        objKnowledgeTypeCond.SetCondFldValue(
          clsKnowledgeTypeEN.con_KnowledgeTypeName,
          knowledgeTypeName_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineKnowledgeTypeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objKnowledgeTypeCond.whereCond = strWhereCond;
    return objKnowledgeTypeCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsKnowledgeTypeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListKnowledgeType.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
};
