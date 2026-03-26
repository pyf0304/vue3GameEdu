
 /**
 * 类名:ge_StuBatchQuesRelaVueShare(界面:ge_StuBatchQuesRelaCRUD,01120211)
 * 表名:ge_StuBatchQuesRela(01120885)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:42
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
import { clsge_StuBatchQuesRelaEN } from "@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaEN";
import { clsge_StuBatchQuesRelaENEx } from "@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaENEx";
import { ge_StuBatchQuesRelaEx_FuncMapKeyQuestionTypeId } from '@/ts/L3ForWApiEx/InteractManage/clsge_StuBatchQuesRelaExWApi';
import { intersectSets_Number } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { ge_StuBatchQuesRelaEx_FuncMapKeyCourseChapterId } from '@/ts/L3ForWApiEx/InteractManage/clsge_StuBatchQuesRelaExWApi';
import { ge_StuBatchQuesRelaEx_FuncMapKeyUserName } from '@/ts/L3ForWApiEx/InteractManage/clsge_StuBatchQuesRelaExWApi';
import { intersectSets } from '@/ts/PubFun/clsCommFunc4Ctrl';

const ascOrDesc4SortFun = ref ('Asc');
const sortge_StuBatchQuesRelaBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_StuBatchQuesRelaBy,
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
const refge_StuBatchQuesRela_Edit = ref ();
const refge_StuBatchQuesRela_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_StuBatchQuesRela_Edit,
refge_StuBatchQuesRela_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_StuBatchQuesRela_Edit,
refge_StuBatchQuesRela_List, };

export const showErrorMessage = ref (false);
export const dataListge_StuBatchQuesRela = ref<Array<clsge_StuBatchQuesRelaENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_StuBatchQuesRelaCache: { [key: string]: clsge_StuBatchQuesRelaENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const questionTypeId_q = ref('');
export const courseChapterId_q = ref('');
export const gameLevelId_q = ref('');
export const userId_q = ref('');
export const userName_q = ref('');
export const markerId_q = ref('');
export const isSubmit_q = ref('0')
export const isMarking_q = ref('0')
export const isHasAnswer_q = ref('0')
export const idCurrEduCls_q = ref('');
const qryVarSet = reactive({
 questionTypeId_q,
 courseChapterId_q,
 gameLevelId_q,
 userId_q,
 userName_q,
 markerId_q,
 isSubmit_q,
 isMarking_q,
 isHasAnswer_q,
 idCurrEduCls_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_StuBatchQuesRelaCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

strWhereCond += Format(" and IdCurrEduCls ='{0}'", IdCurrEduCls_Session.value);
try
{
if ( gameLevelId_q.value != "" && gameLevelId_q.value != "0")
{
strWhereCond += Format(" And ge_StuBatchQuesRela.{0} = '{1}'", clsge_StuBatchQuesRelaEN.con_GameLevelId, gameLevelId_q.value);
}
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_StuBatchQuesRelaEN.con_UserId, userId_q.value);
}
if ( markerId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_StuBatchQuesRelaEN.con_MarkerId, markerId_q.value);
}
if (isSubmit_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsSubmit); 
}
else if (isSubmit_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsSubmit);
}
if (isMarking_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsMarking); 
}
else if (isMarking_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsMarking);
}
if (isHasAnswer_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsHasAnswer); 
}
else if (isHasAnswer_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsHasAnswer);
}

//处理针对扩展字段:[QuestionId]的查询
const arrQuestionId = await GetCondition_QuestionIdLst_In();
if (arrQuestionId.length > 0)
{
strWhereCond += Format(" And {0} in ({1})", clsge_StuBatchQuesRelaEN.con_QuestionId, arrQuestionId.join(','));
}
//处理针对扩展字段:[UserId]的查询
const arrUserId = await GetCondition_UserIdLst_In();
if (arrUserId.length > 0)
{
strWhereCond += Format(" And {0} in ({1})", clsge_StuBatchQuesRelaEN.con_UserId, arrUserId.join(','));
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_StuBatchQuesRelaCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_StuBatchQuesRelaConditionObj=async (): Promise<clsge_StuBatchQuesRelaEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_StuBatchQuesRelaCond = new clsge_StuBatchQuesRelaEN();
let strWhereCond = " 1 = 1 ";
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_IdCurrEduCls, IdCurrEduCls_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( gameLevelId_q.value != "" && gameLevelId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_StuBatchQuesRelaEN.con_GameLevelId, gameLevelId_q.value);
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_GameLevelId, gameLevelId_q.value, "=");
}
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_StuBatchQuesRelaEN.con_UserId, userId_q.value);
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_UserId, userId_q.value, "like");
}
if ( markerId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_StuBatchQuesRelaEN.con_MarkerId, markerId_q.value);
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_MarkerId, markerId_q.value, "like");
}
if (isSubmit_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsSubmit); 
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_IsSubmit, true, "=");
}
else if (isSubmit_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsSubmit);
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_IsSubmit, false, "=");
}
if (isMarking_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsMarking); 
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_IsMarking, true, "=");
}
else if (isMarking_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsMarking);
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_IsMarking, false, "=");
}
if (isHasAnswer_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsHasAnswer); 
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_IsHasAnswer, true, "=");
}
else if (isHasAnswer_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsHasAnswer);
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_IsHasAnswer, false, "=");
}

//处理针对扩展字段:[QuestionId]的查询
const arrQuestionId = await GetCondition_QuestionIdLst_In();
if (arrQuestionId.length > 0)
{
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_QuestionId, arrQuestionId.join(','), "in");
}
//处理针对扩展字段:[UserId]的查询
const arrUserId = await GetCondition_UserIdLst_In();
if (arrUserId.length > 0)
{
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_UserId, arrUserId.join(','), "in");
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_StuBatchQuesRelaConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_StuBatchQuesRelaCond.whereCond = strWhereCond;
return objge_StuBatchQuesRelaCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_StuBatchQuesRelaConditionObj4ExportExcel = async ():Promise<clsge_StuBatchQuesRelaEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_StuBatchQuesRelaCond = new clsge_StuBatchQuesRelaENEx();
let strWhereCond = " 1 = 1 ";
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_IdCurrEduCls, IdCurrEduCls_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( gameLevelId_q.value != "" && gameLevelId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_StuBatchQuesRelaEN.con_GameLevelId, gameLevelId_q.value);
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_GameLevelId, gameLevelId_q.value, "=");
}
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_StuBatchQuesRelaEN.con_UserId, userId_q.value);
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_UserId, userId_q.value, "like");
}
if ( markerId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_StuBatchQuesRelaEN.con_MarkerId, markerId_q.value);
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_MarkerId, markerId_q.value, "like");
}

//处理针对扩展字段:[QuestionId]的查询
const arrQuestionId = await GetCondition_QuestionIdLst_In();
if (arrQuestionId.length > 0)
{
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_QuestionId, arrQuestionId.join(','), "in");
}
//处理针对扩展字段:[UserId]的查询
const arrUserId = await GetCondition_UserIdLst_In();
if (arrUserId.length > 0)
{
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaEN.con_UserId, arrUserId.join(','), "in");
}
}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinege_StuBatchQuesRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_StuBatchQuesRelaCond.whereCond = strWhereCond;
return objge_StuBatchQuesRelaCond;
}

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Ts_CombineConditionInFldValueLst_GeneFun)
 * @returns 相关字段的关键字列表(Array<number>)
 **/
 export async function GetCondition_QuestionIdLst_In(): Promise<Array<number>> 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_StuBatchQuesRelaCond = new clsge_StuBatchQuesRelaENEx();
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
let arrQuestionIdInclude: Array<number> = [];
try
{
if ( questionTypeId_q.value != "" && questionTypeId_q.value != "0")
{
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaENEx.con_QuestionTypeId, questionTypeId_q.value, "=");

const arrQuestionId_QuestionTypeId = await ge_StuBatchQuesRelaEx_FuncMapKeyQuestionTypeId(objge_StuBatchQuesRelaCond);
if (arrQuestionIdInclude.length == 0)
{
arrQuestionIdInclude = arrQuestionId_QuestionTypeId.map(x=>x);
}
else
{
arrQuestionIdInclude = intersectSets_Number(arrQuestionIdInclude, arrQuestionId_QuestionTypeId.map(x=>x)); 
}
}
if ( courseChapterId_q.value != "" && courseChapterId_q.value != "0")
{
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaENEx.con_CourseChapterId, courseChapterId_q.value, "=");

const arrQuestionId_CourseChapterId = await ge_StuBatchQuesRelaEx_FuncMapKeyCourseChapterId(objge_StuBatchQuesRelaCond);
if (arrQuestionIdInclude.length == 0)
{
arrQuestionIdInclude = arrQuestionId_CourseChapterId.map(x=>x);
}
else
{
arrQuestionIdInclude = intersectSets_Number(arrQuestionIdInclude, arrQuestionId_CourseChapterId.map(x=>x)); 
}
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return arrQuestionIdInclude;
}
 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Ts_CombineConditionInFldValueLst_GeneFun)
 * @returns 相关字段的关键字列表(Array<string>)
 **/
 export async function GetCondition_UserIdLst_In(): Promise<Array<string>> 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_StuBatchQuesRelaCond = new clsge_StuBatchQuesRelaENEx();
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
let arrUserIdInclude: Array<string> = [];
try
{
if ( userName_q.value != "")
{
objge_StuBatchQuesRelaCond.SetCondFldValue(clsge_StuBatchQuesRelaENEx.con_UserName, userName_q.value, "like");

const arrUserId_UserName = await ge_StuBatchQuesRelaEx_FuncMapKeyUserName(objge_StuBatchQuesRelaCond);
if (arrUserIdInclude.length == 0)
{
arrUserIdInclude = arrUserId_UserName.map(x=>x.toString());
}
else
{
arrUserIdInclude = intersectSets(arrUserIdInclude, arrUserId_UserName.map(x=>x.toString())); 
}
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return arrUserIdInclude;
}

/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_StuBatchQuesRelaENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_StuBatchQuesRela.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_StuBatchQuesRela_List.value != null) refge_StuBatchQuesRela_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function ge_StuBatchQuesRela_DeleteKeyIdCache( lngIdStuBatchQuesRela:number):void
{


if (
lngIdStuBatchQuesRela != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngIdStuBatchQuesRela }`;
delete ge_StuBatchQuesRelaCache[cacheKey];
return;
}
}