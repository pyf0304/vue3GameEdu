
 /**
 * 类名:GameBottleVueShare(界面:GameBottleCRUD,01120256)
 * 表名:GameBottle(01120974)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:51
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsGameBottleEN } from "@/ts/L0Entity/GameLearn/clsGameBottleEN";
import { clsGameBottleENEx } from "@/ts/L0Entity/GameLearn/clsGameBottleENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortGameBottleBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortGameBottleBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IsUse_Static = ref(false);//5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refGameBottle_Detail = ref ();
const refGameBottle_Edit = ref ();
const refGameBottle_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refGameBottle_Detail,
refGameBottle_Edit,
refGameBottle_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refGameBottle_Detail,
refGameBottle_Edit,
refGameBottle_List, };

export const showErrorMessage = ref (false);
export const dataListGameBottle = ref<Array<clsGameBottleENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const gameBottleCache: { [key: string]: clsGameBottleENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const userId_Throw_q = ref('');
export const userName_Throw_q = ref('');
export const userId_PickUp_q = ref('');
export const userName_PickUp_q = ref('');
export const bottleStateId_q = ref('');
export const questionTypeId_q = ref('');
const qryVarSet = reactive({
 userId_Throw_q,
 userName_Throw_q,
 userId_PickUp_q,
 userName_PickUp_q,
 bottleStateId_q,
 questionTypeId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineGameBottleCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( userId_Throw_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsGameBottleEN.con_UserId_Throw, userId_Throw_q.value);
}
if ( userName_Throw_q.value != "")
{
strWhereCond += Format(" And  UserId in (Select UserId from vQxUsersSim where UserName like '%{0}%') ", userName_Throw_q.value);
}
if ( userId_PickUp_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsGameBottleENEx.con_UserId_PickUp, userId_PickUp_q.value);
}
if ( userName_PickUp_q.value != "")
{
strWhereCond += Format(" And  UserId in (Select UserId from vQxUsersSim where UserName like '%{0}%') ", userName_PickUp_q.value);
}
if ( bottleStateId_q.value != "" && bottleStateId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsGameBottleEN.con_BottleStateId, bottleStateId_q.value);
}
if ( questionTypeId_q.value != "" && questionTypeId_q.value != "0")
{
strWhereCond += Format(" And  QuestionId in (Select QuestionId from vQuestionnaire_Sim where QuestionTypeId = '{0}')", questionTypeId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineGameBottleCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGameBottleConditionObj=async (): Promise<clsGameBottleEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objGameBottleCond = new clsGameBottleEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_Throw_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsGameBottleEN.con_UserId_Throw, userId_Throw_q.value);
objGameBottleCond.SetCondFldValue(clsGameBottleEN.con_UserId_Throw, userId_Throw_q.value, "like");
}
if ( userName_Throw_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsGameBottleENEx.con_UserName_Throw, userName_Throw_q.value);
objGameBottleCond.SetCondFldValue(clsGameBottleENEx.con_UserName_Throw, userName_Throw_q.value, "like");
}
if ( userId_PickUp_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsGameBottleENEx.con_UserId_PickUp, userId_PickUp_q.value);
objGameBottleCond.SetCondFldValue(clsGameBottleENEx.con_UserId_PickUp, userId_PickUp_q.value, "like");
}
if ( userName_PickUp_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsGameBottleENEx.con_UserName_PickUp, userName_PickUp_q.value);
objGameBottleCond.SetCondFldValue(clsGameBottleENEx.con_UserName_PickUp, userName_PickUp_q.value, "like");
}
if ( bottleStateId_q.value != "" && bottleStateId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsGameBottleEN.con_BottleStateId, bottleStateId_q.value);
objGameBottleCond.SetCondFldValue(clsGameBottleEN.con_BottleStateId, bottleStateId_q.value, "=");
}
if ( questionTypeId_q.value != "" && questionTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsGameBottleENEx.con_QuestionTypeId, questionTypeId_q.value);
objGameBottleCond.SetCondFldValue(clsGameBottleENEx.con_QuestionTypeId, questionTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineGameBottleConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objGameBottleCond.whereCond = strWhereCond;
return objGameBottleCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGameBottleConditionObj4ExportExcel = async ():Promise<clsGameBottleEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objGameBottleCond = new clsGameBottleENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_Throw_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsGameBottleEN.con_UserId_Throw, userId_Throw_q.value);
objGameBottleCond.SetCondFldValue(clsGameBottleEN.con_UserId_Throw, userId_Throw_q.value, "like");
}
if ( userName_Throw_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsGameBottleENEx.con_UserName_Throw, userName_Throw_q.value);
objGameBottleCond.SetCondFldValue(clsGameBottleENEx.con_UserName_Throw, userName_Throw_q.value, "like");
}
if ( userId_PickUp_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsGameBottleENEx.con_UserId_PickUp, userId_PickUp_q.value);
objGameBottleCond.SetCondFldValue(clsGameBottleENEx.con_UserId_PickUp, userId_PickUp_q.value, "like");
}
if ( userName_PickUp_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsGameBottleENEx.con_UserName_PickUp, userName_PickUp_q.value);
objGameBottleCond.SetCondFldValue(clsGameBottleENEx.con_UserName_PickUp, userName_PickUp_q.value, "like");
}
if ( bottleStateId_q.value != "" && bottleStateId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsGameBottleEN.con_BottleStateId, bottleStateId_q.value);
objGameBottleCond.SetCondFldValue(clsGameBottleEN.con_BottleStateId, bottleStateId_q.value, "=");
}
if ( questionTypeId_q.value != "" && questionTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsGameBottleENEx.con_QuestionTypeId, questionTypeId_q.value);
objGameBottleCond.SetCondFldValue(clsGameBottleENEx.con_QuestionTypeId, questionTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineGameBottleConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objGameBottleCond.whereCond = strWhereCond;
return objGameBottleCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsGameBottleENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListGameBottle.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refGameBottle_List.value != null) refGameBottle_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function GameBottle_DeleteKeyIdCache( lngBottleId:number):void
{


if (
lngBottleId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngBottleId }`;
delete gameBottleCache[cacheKey];
return;
}
}