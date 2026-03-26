
 /**
 * 类名:cc_ExamPaperStuRelationVueShare(界面:cc_ExamPaperStuRelationCRUD,01120190)
 * 表名:cc_ExamPaperStuRelation(01120235)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:15:11
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
import { clscc_ExamPaperStuRelationEN } from "@/ts/L0Entity/InteractManage/clscc_ExamPaperStuRelationEN";
import { clscc_ExamPaperStuRelationENEx } from "@/ts/L0Entity/InteractManage/clscc_ExamPaperStuRelationENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortcc_ExamPaperStuRelationBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortcc_ExamPaperStuRelationBy,
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
const refcc_ExamPaperStuRelation_Edit = ref ();
const refcc_ExamPaperStuRelation_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refcc_ExamPaperStuRelation_Edit,
refcc_ExamPaperStuRelation_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refcc_ExamPaperStuRelation_Edit,
refcc_ExamPaperStuRelation_List, };

export const showErrorMessage = ref (false);
export const dataListcc_ExamPaperStuRelation = ref<Array<clscc_ExamPaperStuRelationENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const cc_ExamPaperStuRelationCache: { [key: string]: clscc_ExamPaperStuRelationENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const idCurrEduCls_q = ref('');
export const schoolYear_q = ref('');
export const schoolTerm_q = ref('');
const qryVarSet = reactive({
 idCurrEduCls_q,
 schoolYear_q,
 schoolTerm_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinecc_ExamPaperStuRelationCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And cc_ExamPaperStuRelation.{0} = '{1}'", clscc_ExamPaperStuRelationEN.con_IdCurrEduCls, idCurrEduCls_q.value);
}
if ( schoolYear_q.value != "" && schoolYear_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_ExamPaperStuRelationEN.con_SchoolYear, schoolYear_q.value);
}
if ( schoolTerm_q.value != "" && schoolTerm_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_ExamPaperStuRelationEN.con_SchoolTerm, schoolTerm_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinecc_ExamPaperStuRelationCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_ExamPaperStuRelationConditionObj=async (): Promise<clscc_ExamPaperStuRelationEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_ExamPaperStuRelationCond = new clscc_ExamPaperStuRelationEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_ExamPaperStuRelationEN.con_IdCurrEduCls, idCurrEduCls_q.value);
objcc_ExamPaperStuRelationCond.SetCondFldValue(clscc_ExamPaperStuRelationEN.con_IdCurrEduCls, idCurrEduCls_q.value, "=");
}
if ( schoolYear_q.value != "" && schoolYear_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_ExamPaperStuRelationEN.con_SchoolYear, schoolYear_q.value);
objcc_ExamPaperStuRelationCond.SetCondFldValue(clscc_ExamPaperStuRelationEN.con_SchoolYear, schoolYear_q.value, "=");
}
if ( schoolTerm_q.value != "" && schoolTerm_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_ExamPaperStuRelationEN.con_SchoolTerm, schoolTerm_q.value);
objcc_ExamPaperStuRelationCond.SetCondFldValue(clscc_ExamPaperStuRelationEN.con_SchoolTerm, schoolTerm_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinecc_ExamPaperStuRelationConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_ExamPaperStuRelationCond.whereCond = strWhereCond;
return objcc_ExamPaperStuRelationCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_ExamPaperStuRelationConditionObj4ExportExcel = async ():Promise<clscc_ExamPaperStuRelationEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_ExamPaperStuRelationCond = new clscc_ExamPaperStuRelationENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_ExamPaperStuRelationEN.con_IdCurrEduCls, idCurrEduCls_q.value);
objcc_ExamPaperStuRelationCond.SetCondFldValue(clscc_ExamPaperStuRelationEN.con_IdCurrEduCls, idCurrEduCls_q.value, "=");
}
if ( schoolYear_q.value != "" && schoolYear_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_ExamPaperStuRelationEN.con_SchoolYear, schoolYear_q.value);
objcc_ExamPaperStuRelationCond.SetCondFldValue(clscc_ExamPaperStuRelationEN.con_SchoolYear, schoolYear_q.value, "=");
}
if ( schoolTerm_q.value != "" && schoolTerm_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_ExamPaperStuRelationEN.con_SchoolTerm, schoolTerm_q.value);
objcc_ExamPaperStuRelationCond.SetCondFldValue(clscc_ExamPaperStuRelationEN.con_SchoolTerm, schoolTerm_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinecc_ExamPaperStuRelationConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_ExamPaperStuRelationCond.whereCond = strWhereCond;
return objcc_ExamPaperStuRelationCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clscc_ExamPaperStuRelationENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListcc_ExamPaperStuRelation.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refcc_ExamPaperStuRelation_List.value != null) refcc_ExamPaperStuRelation_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function cc_ExamPaperStuRelation_DeleteKeyIdCache(strIdCurrEduCls: string,  lngIdExamPaperStuRelation:number):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In cc_ExamPaperStuRelationVueShare..DeleteKeyIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(cc_ExamPaperStuRelationVueShare..DeleteKeyIdCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}


if (
lngIdExamPaperStuRelation != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngIdExamPaperStuRelation }_${ strIdCurrEduCls }`;
delete cc_ExamPaperStuRelationCache[cacheKey];
return;
}
}