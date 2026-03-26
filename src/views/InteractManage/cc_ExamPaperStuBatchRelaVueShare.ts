
 /**
 * 类名:cc_ExamPaperStuBatchRelaVueShare(界面:cc_ExamPaperStuBatchRelaCRUD,01120194)
 * 表名:cc_ExamPaperStuBatchRela(01120239)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:35
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:互动管理(InteractManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clscc_ExamPaperStuBatchRelaEN } from "@/ts/L0Entity/InteractManage/clscc_ExamPaperStuBatchRelaEN";
import { clscc_ExamPaperStuBatchRelaENEx } from "@/ts/L0Entity/InteractManage/clscc_ExamPaperStuBatchRelaENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortcc_ExamPaperStuBatchRelaBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortcc_ExamPaperStuBatchRelaBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IdCurrEduCls_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refcc_ExamPaperStuBatchRela_Edit = ref ();
const refcc_ExamPaperStuBatchRela_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refcc_ExamPaperStuBatchRela_Edit,
refcc_ExamPaperStuBatchRela_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refcc_ExamPaperStuBatchRela_Edit,
refcc_ExamPaperStuBatchRela_List, };

export const showErrorMessage = ref (false);
export const dataListcc_ExamPaperStuBatchRela = ref<Array<clscc_ExamPaperStuBatchRelaENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const cc_ExamPaperStuBatchRelaCache: { [key: string]: clscc_ExamPaperStuBatchRelaENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const courseExamPaperId_q = ref('');
export const idCurrEduCls_q = ref('');
export const isSubmit_q = ref('0')
const qryVarSet = reactive({
 courseExamPaperId_q,
 idCurrEduCls_q,
 isSubmit_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinecc_ExamPaperStuBatchRelaCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( courseExamPaperId_q.value != "" && courseExamPaperId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_ExamPaperStuBatchRelaEN.con_CourseExamPaperId, courseExamPaperId_q.value);
}
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And cc_ExamPaperStuBatchRela.{0} = '{1}'", clscc_ExamPaperStuBatchRelaEN.con_IdCurrEduCls, idCurrEduCls_q.value);
}
if (isSubmit_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuBatchRelaEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuBatchRelaEN.con_IsSubmit);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinecc_ExamPaperStuBatchRelaCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_ExamPaperStuBatchRelaConditionObj=async (): Promise<clscc_ExamPaperStuBatchRelaEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_ExamPaperStuBatchRelaCond = new clscc_ExamPaperStuBatchRelaEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( courseExamPaperId_q.value != "" && courseExamPaperId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_ExamPaperStuBatchRelaEN.con_CourseExamPaperId, courseExamPaperId_q.value);
objcc_ExamPaperStuBatchRelaCond.SetCondFldValue(clscc_ExamPaperStuBatchRelaEN.con_CourseExamPaperId, courseExamPaperId_q.value, "=");
}
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_ExamPaperStuBatchRelaEN.con_IdCurrEduCls, idCurrEduCls_q.value);
objcc_ExamPaperStuBatchRelaCond.SetCondFldValue(clscc_ExamPaperStuBatchRelaEN.con_IdCurrEduCls, idCurrEduCls_q.value, "=");
}
if (isSubmit_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuBatchRelaEN.con_IsSubmit);
objcc_ExamPaperStuBatchRelaCond.SetCondFldValue(clscc_ExamPaperStuBatchRelaEN.con_IsSubmit, true, "=");
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuBatchRelaEN.con_IsSubmit);
objcc_ExamPaperStuBatchRelaCond.SetCondFldValue(clscc_ExamPaperStuBatchRelaEN.con_IsSubmit, false, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinecc_ExamPaperStuBatchRelaConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_ExamPaperStuBatchRelaCond.whereCond = strWhereCond;
return objcc_ExamPaperStuBatchRelaCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_ExamPaperStuBatchRelaConditionObj4ExportExcel = async ():Promise<clscc_ExamPaperStuBatchRelaEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_ExamPaperStuBatchRelaCond = new clscc_ExamPaperStuBatchRelaENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( courseExamPaperId_q.value != "" && courseExamPaperId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_ExamPaperStuBatchRelaEN.con_CourseExamPaperId, courseExamPaperId_q.value);
objcc_ExamPaperStuBatchRelaCond.SetCondFldValue(clscc_ExamPaperStuBatchRelaEN.con_CourseExamPaperId, courseExamPaperId_q.value, "=");
}
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_ExamPaperStuBatchRelaEN.con_IdCurrEduCls, idCurrEduCls_q.value);
objcc_ExamPaperStuBatchRelaCond.SetCondFldValue(clscc_ExamPaperStuBatchRelaEN.con_IdCurrEduCls, idCurrEduCls_q.value, "=");
}
if (isSubmit_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuBatchRelaEN.con_IsSubmit);
objcc_ExamPaperStuBatchRelaCond.SetCondFldValue(clscc_ExamPaperStuBatchRelaEN.con_IsSubmit, true, "=");
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuBatchRelaEN.con_IsSubmit);
objcc_ExamPaperStuBatchRelaCond.SetCondFldValue(clscc_ExamPaperStuBatchRelaEN.con_IsSubmit, false, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinecc_ExamPaperStuBatchRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_ExamPaperStuBatchRelaCond.whereCond = strWhereCond;
return objcc_ExamPaperStuBatchRelaCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clscc_ExamPaperStuBatchRelaENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListcc_ExamPaperStuBatchRela.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refcc_ExamPaperStuBatchRela_List.value != null) refcc_ExamPaperStuBatchRela_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function cc_ExamPaperStuBatchRela_DeleteKeyIdCache( strIdPaperStuBatch:string):void
{


if (
IsNullOrEmpty(strIdPaperStuBatch) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strIdPaperStuBatch }`;
delete cc_ExamPaperStuBatchRelaCache[cacheKey];
return;
}
}