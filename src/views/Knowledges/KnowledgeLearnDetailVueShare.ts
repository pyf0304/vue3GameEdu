
 /**
 * 类名:KnowledgeLearnDetailVueShare(界面:KnowledgeLearnDetailCRUD,01120186)
 * 表名:KnowledgeLearnDetail(01120153)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:15:10
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
import { clsKnowledgeLearnDetailEN } from "@/ts/L0Entity/Knowledges/clsKnowledgeLearnDetailEN";
import { clsKnowledgeLearnDetailENEx } from "@/ts/L0Entity/Knowledges/clsKnowledgeLearnDetailENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortKnowledgeLearnDetailBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortKnowledgeLearnDetailBy,
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
const refKnowledgeLearnDetail_Edit = ref ();
const refKnowledgeLearnDetail_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refKnowledgeLearnDetail_Edit,
refKnowledgeLearnDetail_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refKnowledgeLearnDetail_Edit,
refKnowledgeLearnDetail_List, };

export const showErrorMessage = ref (false);
export const dataListKnowledgeLearnDetail = ref<Array<clsKnowledgeLearnDetailENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const knowledgeLearnDetailCache: { [key: string]: clsKnowledgeLearnDetailENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const userId_q = ref('');
export const learnModeId_q = ref('');
const qryVarSet = reactive({
 userId_q,
 learnModeId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineKnowledgeLearnDetailCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsKnowledgeLearnDetailEN.con_UserId, userId_q.value);
}
if ( learnModeId_q.value != "" && learnModeId_q.value != "0")
{
strWhereCond += Format(" And KnowledgeLearnDetail.{0} = '{1}'", clsKnowledgeLearnDetailEN.con_LearnModeId, learnModeId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineKnowledgeLearnDetailCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineKnowledgeLearnDetailConditionObj=async (): Promise<clsKnowledgeLearnDetailEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objKnowledgeLearnDetailCond = new clsKnowledgeLearnDetailEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsKnowledgeLearnDetailEN.con_UserId, userId_q.value);
objKnowledgeLearnDetailCond.SetCondFldValue(clsKnowledgeLearnDetailEN.con_UserId, userId_q.value, "like");
}
if ( learnModeId_q.value != "" && learnModeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsKnowledgeLearnDetailEN.con_LearnModeId, learnModeId_q.value);
objKnowledgeLearnDetailCond.SetCondFldValue(clsKnowledgeLearnDetailEN.con_LearnModeId, learnModeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineKnowledgeLearnDetailConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objKnowledgeLearnDetailCond.whereCond = strWhereCond;
return objKnowledgeLearnDetailCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineKnowledgeLearnDetailConditionObj4ExportExcel = async ():Promise<clsKnowledgeLearnDetailEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objKnowledgeLearnDetailCond = new clsKnowledgeLearnDetailENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsKnowledgeLearnDetailEN.con_UserId, userId_q.value);
objKnowledgeLearnDetailCond.SetCondFldValue(clsKnowledgeLearnDetailEN.con_UserId, userId_q.value, "like");
}
if ( learnModeId_q.value != "" && learnModeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsKnowledgeLearnDetailEN.con_LearnModeId, learnModeId_q.value);
objKnowledgeLearnDetailCond.SetCondFldValue(clsKnowledgeLearnDetailEN.con_LearnModeId, learnModeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineKnowledgeLearnDetailConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objKnowledgeLearnDetailCond.whereCond = strWhereCond;
return objKnowledgeLearnDetailCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsKnowledgeLearnDetailENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListKnowledgeLearnDetail.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refKnowledgeLearnDetail_List.value != null) refKnowledgeLearnDetail_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function KnowledgeLearnDetail_DeleteKeyIdCache(strCourseId: string,  lngmId:number):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In KnowledgeLearnDetailVueShare..DeleteKeyIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(KnowledgeLearnDetailVueShare..DeleteKeyIdCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }_${ strCourseId }`;
delete knowledgeLearnDetailCache[cacheKey];
return;
}
}