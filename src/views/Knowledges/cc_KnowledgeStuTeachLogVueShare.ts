/**
 * 类名:cc_KnowledgeStuTeachLogVueShare(界面:cc_KnowledgeStuTeachLogCRUD,01120255)
 * 表名:cc_KnowledgeStuTeachLog(01120973)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:40:10
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
import { clscc_KnowledgeStuTeachLogEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeStuTeachLogEN';
import { clscc_KnowledgeStuTeachLogENEx } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeStuTeachLogENEx';
import { cc_KnowledgeStuTeachLogEx_FuncMapKeyStuId } from '@/ts/L3ForWApiEx/Knowledges/clscc_KnowledgeStuTeachLogExWApi';
import { cc_KnowledgeStuTeachLogEx_FuncMapKeyStuName } from '@/ts/L3ForWApiEx/Knowledges/clscc_KnowledgeStuTeachLogExWApi';
import { intersectSets } from '@/ts/PubFun/clsCommFunc4Ctrl';

const ascOrDesc4SortFun = ref('Asc');
const sortcc_KnowledgeStuTeachLogBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortcc_KnowledgeStuTeachLogBy,
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
const refcc_KnowledgeStuTeachLog_Detail = ref();
const refcc_KnowledgeStuTeachLog_Edit = ref();
const refcc_KnowledgeStuTeachLog_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refcc_KnowledgeStuTeachLog_Detail,
  refcc_KnowledgeStuTeachLog_Edit,
  refcc_KnowledgeStuTeachLog_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refcc_KnowledgeStuTeachLog_Detail,
  refcc_KnowledgeStuTeachLog_Edit,
  refcc_KnowledgeStuTeachLog_List,
};

export const showErrorMessage = ref(false);
export const dataListcc_KnowledgeStuTeachLog = ref<Array<clscc_KnowledgeStuTeachLogENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const cc_KnowledgeStuTeachLogCache: { [key: string]: clscc_KnowledgeStuTeachLogENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const courseId_q = ref('');
export const stuId_q = ref('');
export const stuName_q = ref('');
const qryVarSet = reactive({
  courseId_q,
  stuId_q,
  stuName_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_KnowledgeStuTeachLogCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and CourseId ='{0}'", CourseId_Session.value);
  try {
    //处理针对扩展字段:[IdStudentInfo]的查询
    const arrIdStudentInfo = await GetCondition_IdStudentInfoLst_In();
    if (arrIdStudentInfo.length > 0) {
      strWhereCond += Format(
        ' And {0} in ({1})',
        clscc_KnowledgeStuTeachLogEN.con_IdStudentInfo,
        arrIdStudentInfo.join(','),
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(Combinecc_KnowledgeStuTeachLogCondition)时出错!请联系管理员!{0}',
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
export const Combinecc_KnowledgeStuTeachLogConditionObj =
  async (): Promise<clscc_KnowledgeStuTeachLogEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objcc_KnowledgeStuTeachLogCond = new clscc_KnowledgeStuTeachLogEN();
    let strWhereCond = ' 1 = 1 ';
    objcc_KnowledgeStuTeachLogCond.SetCondFldValue(
      clscc_KnowledgeStuTeachLogEN.con_CourseId,
      CourseId_Session.value,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //处理针对扩展字段:[IdStudentInfo]的查询
      const arrIdStudentInfo = await GetCondition_IdStudentInfoLst_In();
      if (arrIdStudentInfo.length > 0) {
        objcc_KnowledgeStuTeachLogCond.SetCondFldValue(
          clscc_KnowledgeStuTeachLogEN.con_IdStudentInfo,
          arrIdStudentInfo.join(','),
          'in',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合查询条件对象(Combinecc_KnowledgeStuTeachLogConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objcc_KnowledgeStuTeachLogCond.whereCond = strWhereCond;
    return objcc_KnowledgeStuTeachLogCond;
  };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_KnowledgeStuTeachLogConditionObj4ExportExcel =
  async (): Promise<clscc_KnowledgeStuTeachLogEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objcc_KnowledgeStuTeachLogCond = new clscc_KnowledgeStuTeachLogENEx();
    let strWhereCond = ' 1 = 1 ';
    objcc_KnowledgeStuTeachLogCond.SetCondFldValue(
      clscc_KnowledgeStuTeachLogEN.con_CourseId,
      CourseId_Session.value,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //处理针对扩展字段:[IdStudentInfo]的查询
      const arrIdStudentInfo = await GetCondition_IdStudentInfoLst_In();
      if (arrIdStudentInfo.length > 0) {
        objcc_KnowledgeStuTeachLogCond.SetCondFldValue(
          clscc_KnowledgeStuTeachLogEN.con_IdStudentInfo,
          arrIdStudentInfo.join(','),
          'in',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(Combinecc_KnowledgeStuTeachLogConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objcc_KnowledgeStuTeachLogCond.whereCond = strWhereCond;
    return objcc_KnowledgeStuTeachLogCond;
  };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Ts_CombineConditionInFldValueLst_GeneFun)
 * @returns 相关字段的关键字列表(Array<string>)
 **/
export async function GetCondition_IdStudentInfoLst_In(): Promise<Array<string>> {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objcc_KnowledgeStuTeachLogCond = new clscc_KnowledgeStuTeachLogENEx();
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  let arrIdStudentInfoInclude: Array<string> = [];
  try {
    if (stuId_q.value != '') {
      objcc_KnowledgeStuTeachLogCond.SetCondFldValue(
        clscc_KnowledgeStuTeachLogENEx.con_StuId,
        stuId_q.value,
        'like',
      );

      const arrIdStudentInfo_StuId = await cc_KnowledgeStuTeachLogEx_FuncMapKeyStuId(
        objcc_KnowledgeStuTeachLogCond,
      );
      if (arrIdStudentInfoInclude.length == 0) {
        arrIdStudentInfoInclude = arrIdStudentInfo_StuId.map((x) => x.toString());
      } else {
        arrIdStudentInfoInclude = intersectSets(
          arrIdStudentInfoInclude,
          arrIdStudentInfo_StuId.map((x) => x.toString()),
        );
      }
    }
    if (stuName_q.value != '') {
      objcc_KnowledgeStuTeachLogCond.SetCondFldValue(
        clscc_KnowledgeStuTeachLogENEx.con_StuName,
        stuName_q.value,
        'like',
      );

      const arrIdStudentInfo_StuName = await cc_KnowledgeStuTeachLogEx_FuncMapKeyStuName(
        objcc_KnowledgeStuTeachLogCond,
      );
      if (arrIdStudentInfoInclude.length == 0) {
        arrIdStudentInfoInclude = arrIdStudentInfo_StuName.map((x) => x.toString());
      } else {
        arrIdStudentInfoInclude = intersectSets(
          arrIdStudentInfoInclude,
          arrIdStudentInfo_StuName.map((x) => x.toString()),
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
  return arrIdStudentInfoInclude;
}

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clscc_KnowledgeStuTeachLogENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListcc_KnowledgeStuTeachLog.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refcc_KnowledgeStuTeachLog_List.value != null)
    refcc_KnowledgeStuTeachLog_List.value.selectAllChecked = false;
};

export function cc_KnowledgeStuTeachLog_DeleteKeyIdCache(
  lngQuestionId: number,
  strIdStudentInfo: string,
): void {
  if (lngQuestionId != 0 && IsNullOrEmpty(strIdStudentInfo) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngQuestionId}_${strIdStudentInfo}`;
    delete cc_KnowledgeStuTeachLogCache[cacheKey];
    return;
  }
}
