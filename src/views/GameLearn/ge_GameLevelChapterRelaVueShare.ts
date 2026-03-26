
 /**
 * 类名:ge_GameLevelChapterRelaVueShare(界面:ge_GameLevelChapterRelaCRUD,01120229)
 * 表名:ge_GameLevelChapterRela(01120913)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:39
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
import { clsge_GameLevelChapterRelaEN } from "@/ts/L0Entity/GameLearn/clsge_GameLevelChapterRelaEN";
import { clsge_GameLevelChapterRelaENEx } from "@/ts/L0Entity/GameLearn/clsge_GameLevelChapterRelaENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_GameLevelChapterRelaBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_GameLevelChapterRelaBy,
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
const refge_GameLevelChapterRela_Edit = ref ();
const refge_GameLevelChapterRela_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_GameLevelChapterRela_Edit,
refge_GameLevelChapterRela_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_GameLevelChapterRela_Edit,
refge_GameLevelChapterRela_List, };

export const showErrorMessage = ref (false);
export const dataListge_GameLevelChapterRela = ref<Array<clsge_GameLevelChapterRelaENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_GameLevelChapterRelaCache: { [key: string]: clsge_GameLevelChapterRelaENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const courseChapterId_q = ref('');
const qryVarSet = reactive({
 courseChapterId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_GameLevelChapterRelaCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( courseChapterId_q.value != "" && courseChapterId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_GameLevelChapterRelaEN.con_CourseChapterId, courseChapterId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_GameLevelChapterRelaCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_GameLevelChapterRelaConditionObj=async (): Promise<clsge_GameLevelChapterRelaEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_GameLevelChapterRelaCond = new clsge_GameLevelChapterRelaEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( courseChapterId_q.value != "" && courseChapterId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_GameLevelChapterRelaEN.con_CourseChapterId, courseChapterId_q.value);
objge_GameLevelChapterRelaCond.SetCondFldValue(clsge_GameLevelChapterRelaEN.con_CourseChapterId, courseChapterId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_GameLevelChapterRelaConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_GameLevelChapterRelaCond.whereCond = strWhereCond;
return objge_GameLevelChapterRelaCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_GameLevelChapterRelaConditionObj4ExportExcel = async ():Promise<clsge_GameLevelChapterRelaEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_GameLevelChapterRelaCond = new clsge_GameLevelChapterRelaENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( courseChapterId_q.value != "" && courseChapterId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_GameLevelChapterRelaEN.con_CourseChapterId, courseChapterId_q.value);
objge_GameLevelChapterRelaCond.SetCondFldValue(clsge_GameLevelChapterRelaEN.con_CourseChapterId, courseChapterId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinege_GameLevelChapterRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_GameLevelChapterRelaCond.whereCond = strWhereCond;
return objge_GameLevelChapterRelaCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_GameLevelChapterRelaENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_GameLevelChapterRela.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_GameLevelChapterRela_List.value != null) refge_GameLevelChapterRela_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function ge_GameLevelChapterRela_DeleteKeyIdCache(strCourseId: string,  lngmId:number):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In ge_GameLevelChapterRelaVueShare..DeleteKeyIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(ge_GameLevelChapterRelaVueShare..DeleteKeyIdCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }_${ strCourseId }`;
delete ge_GameLevelChapterRelaCache[cacheKey];
return;
}
}