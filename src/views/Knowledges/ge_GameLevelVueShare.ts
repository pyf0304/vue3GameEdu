
 /**
 * 类名:ge_GameLevelVueShare(界面:ge_GameLevelCRUD,01120225)
 * 表名:ge_GameLevel(01120904)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:32
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
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsge_GameLevelEN } from "@/ts/L0Entity/Knowledges/clsge_GameLevelEN";
import { clsge_GameLevelENEx } from "@/ts/L0Entity/Knowledges/clsge_GameLevelENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_GameLevelBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_GameLevelBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const InUse_Static = ref(false);//5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const IsUse_Static = ref(false);//5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refge_GameLevel_Edit = ref ();
const refge_GameLevel_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_GameLevel_Edit,
refge_GameLevel_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_GameLevel_Edit,
refge_GameLevel_List, };

export const showErrorMessage = ref (false);
export const dataListge_GameLevel = ref<Array<clsge_GameLevelENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_GameLevelCache: { [key: string]: clsge_GameLevelENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const gameLevelName_q = ref('');
export const difficultyLevelId_q = ref('');
export const questionTypeId_q = ref('');
const qryVarSet = reactive({
 gameLevelName_q,
 difficultyLevelId_q,
 questionTypeId_q,});
export { qryVarSet };

//功能区变量定义
export const courseId_f = ref('');
const featureVarSet = reactive({
 courseId_f,});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_GameLevelCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( gameLevelName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_GameLevelEN.con_GameLevelName, gameLevelName_q.value);
}
if ( difficultyLevelId_q.value != "" && difficultyLevelId_q.value != "0")
{
strWhereCond += Format(" And ge_GameLevel.{0} = '{1}'", clsge_GameLevelEN.con_DifficultyLevelId, difficultyLevelId_q.value);
}
if ( questionTypeId_q.value != "" && questionTypeId_q.value != "0")
{
strWhereCond += Format(" And ge_GameLevel.{0} = '{1}'", clsge_GameLevelEN.con_QuestionTypeId, questionTypeId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_GameLevelCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_GameLevelConditionObj=async (): Promise<clsge_GameLevelEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_GameLevelCond = new clsge_GameLevelEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( gameLevelName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_GameLevelEN.con_GameLevelName, gameLevelName_q.value);
objge_GameLevelCond.SetCondFldValue(clsge_GameLevelEN.con_GameLevelName, gameLevelName_q.value, "like");
}
if ( difficultyLevelId_q.value != "" && difficultyLevelId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_GameLevelEN.con_DifficultyLevelId, difficultyLevelId_q.value);
objge_GameLevelCond.SetCondFldValue(clsge_GameLevelEN.con_DifficultyLevelId, difficultyLevelId_q.value, "=");
}
if ( questionTypeId_q.value != "" && questionTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_GameLevelEN.con_QuestionTypeId, questionTypeId_q.value);
objge_GameLevelCond.SetCondFldValue(clsge_GameLevelEN.con_QuestionTypeId, questionTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_GameLevelConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_GameLevelCond.whereCond = strWhereCond;
return objge_GameLevelCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_GameLevelConditionObj4ExportExcel = async ():Promise<clsge_GameLevelEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_GameLevelCond = new clsge_GameLevelENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( gameLevelName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_GameLevelEN.con_GameLevelName, gameLevelName_q.value);
objge_GameLevelCond.SetCondFldValue(clsge_GameLevelEN.con_GameLevelName, gameLevelName_q.value, "like");
}
if ( difficultyLevelId_q.value != "" && difficultyLevelId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_GameLevelEN.con_DifficultyLevelId, difficultyLevelId_q.value);
objge_GameLevelCond.SetCondFldValue(clsge_GameLevelEN.con_DifficultyLevelId, difficultyLevelId_q.value, "=");
}
if ( questionTypeId_q.value != "" && questionTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_GameLevelEN.con_QuestionTypeId, questionTypeId_q.value);
objge_GameLevelCond.SetCondFldValue(clsge_GameLevelEN.con_QuestionTypeId, questionTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinege_GameLevelConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_GameLevelCond.whereCond = strWhereCond;
return objge_GameLevelCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_GameLevelENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_GameLevel.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_GameLevel_List.value != null) refge_GameLevel_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function ge_GameLevel_DeleteKeyIdCache(strCourseId: string,  strGameLevelId:string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In ge_GameLevelVueShare..DeleteKeyIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(ge_GameLevelVueShare..DeleteKeyIdCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
IsNullOrEmpty(strGameLevelId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strGameLevelId }_${ strCourseId }`;
delete ge_GameLevelCache[cacheKey];
return;
}
}