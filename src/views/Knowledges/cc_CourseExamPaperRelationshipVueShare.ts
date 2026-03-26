
 /**
 * 类名:cc_CourseExamPaperRelationshipVueShare(界面:cc_CourseExamPaperRelationshipCRUD,01120198)
 * 表名:cc_CourseExamPaperRelationship(01120076)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:40
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
import { clscc_CourseExamPaperRelationshipEN } from "@/ts/L0Entity/Knowledges/clscc_CourseExamPaperRelationshipEN";
import { clscc_CourseExamPaperRelationshipENEx } from "@/ts/L0Entity/Knowledges/clscc_CourseExamPaperRelationshipENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortcc_CourseExamPaperRelationshipBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortcc_CourseExamPaperRelationshipBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refcc_CourseExamPaperRelationship_Edit = ref ();
const refcc_CourseExamPaperRelationship_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refcc_CourseExamPaperRelationship_Edit,
refcc_CourseExamPaperRelationship_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refcc_CourseExamPaperRelationship_Edit,
refcc_CourseExamPaperRelationship_List, };

export const showErrorMessage = ref (false);
export const dataListcc_CourseExamPaperRelationship = ref<Array<clscc_CourseExamPaperRelationshipENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const cc_CourseExamPaperRelationshipCache: { [key: string]: clscc_CourseExamPaperRelationshipENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const courseId_q = ref('');
export const userId_q = ref('');
const qryVarSet = reactive({
 courseId_q,
 userId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinecc_CourseExamPaperRelationshipCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

strWhereCond += Format(" and CourseId ='{0}'", CourseId_Session.value);
try
{
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseExamPaperRelationshipEN.con_UserId, userId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinecc_CourseExamPaperRelationshipCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_CourseExamPaperRelationshipConditionObj=async (): Promise<clscc_CourseExamPaperRelationshipEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_CourseExamPaperRelationshipCond = new clscc_CourseExamPaperRelationshipEN();
let strWhereCond = " 1 = 1 ";
objcc_CourseExamPaperRelationshipCond.SetCondFldValue(clscc_CourseExamPaperRelationshipEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseExamPaperRelationshipEN.con_UserId, userId_q.value);
objcc_CourseExamPaperRelationshipCond.SetCondFldValue(clscc_CourseExamPaperRelationshipEN.con_UserId, userId_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinecc_CourseExamPaperRelationshipConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_CourseExamPaperRelationshipCond.whereCond = strWhereCond;
return objcc_CourseExamPaperRelationshipCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_CourseExamPaperRelationshipConditionObj4ExportExcel = async ():Promise<clscc_CourseExamPaperRelationshipEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_CourseExamPaperRelationshipCond = new clscc_CourseExamPaperRelationshipENEx();
let strWhereCond = " 1 = 1 ";
objcc_CourseExamPaperRelationshipCond.SetCondFldValue(clscc_CourseExamPaperRelationshipEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseExamPaperRelationshipEN.con_UserId, userId_q.value);
objcc_CourseExamPaperRelationshipCond.SetCondFldValue(clscc_CourseExamPaperRelationshipEN.con_UserId, userId_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinecc_CourseExamPaperRelationshipConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_CourseExamPaperRelationshipCond.whereCond = strWhereCond;
return objcc_CourseExamPaperRelationshipCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clscc_CourseExamPaperRelationshipENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListcc_CourseExamPaperRelationship.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refcc_CourseExamPaperRelationship_List.value != null) refcc_CourseExamPaperRelationship_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function cc_CourseExamPaperRelationship_DeleteKeyIdCache( lngmId:number):void
{


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }`;
delete cc_CourseExamPaperRelationshipCache[cacheKey];
return;
}
}