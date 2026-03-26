
 /**
 * 类名:UserAnswerResultVueShare(界面:UserAnswerResultCRUD,01120201)
 * 表名:UserAnswerResult(01120032)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:30
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsUserAnswerResultEN } from "@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN";
import { clsUserAnswerResultENEx } from "@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortUserAnswerResultBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortUserAnswerResultBy,
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
const refUserAnswerResult_Edit = ref ();
const refUserAnswerResult_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refUserAnswerResult_Edit,
refUserAnswerResult_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refUserAnswerResult_Edit,
refUserAnswerResult_List, };

export const showErrorMessage = ref (false);
export const dataListUserAnswerResult = ref<Array<clsUserAnswerResultENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const userAnswerResultCache: { [key: string]: clsUserAnswerResultENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const courseId_q = ref('');
export const batchId_q = ref('');
export const userId_q = ref('');
export const answerText_q = ref('');
export const idCurrEduCls_q = ref('');
export const examBatchNo_q = ref('');
export const answerMultiOption_q = ref('');
export const examPaperName_q = ref('');
export const questionName_q = ref('');
export const optionName_q = ref('');
const qryVarSet = reactive({
 courseId_q,
 batchId_q,
 userId_q,
 answerText_q,
 idCurrEduCls_q,
 examBatchNo_q,
 answerMultiOption_q,
 examPaperName_q,
 questionName_q,
 optionName_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineUserAnswerResultCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

strWhereCond += Format(" and IdCurrEduCls ='{0}'", IdCurrEduCls_Session.value);
try
{
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsUserAnswerResultEN.con_CourseId, courseId_q.value);
}
if ( batchId_q.value != "" && batchId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsUserAnswerResultEN.con_BatchId, batchId_q.value);
}
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultEN.con_UserId, userId_q.value);
}
if ( answerText_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultEN.con_AnswerText, answerText_q.value);
}
if ( examBatchNo_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultEN.con_ExamBatchNo, examBatchNo_q.value);
}
if ( answerMultiOption_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultEN.con_AnswerMultiOption, answerMultiOption_q.value);
}
if ( examPaperName_q.value != "")
{
strWhereCond += Format(" And  CourseExamPaperId in (Select CourseExamPaperId from cc_CourseExamPaper where ExamPaperName like '%{0}%') ", examPaperName_q.value);
}
if ( questionName_q.value != "")
{
strWhereCond += Format(" And  QuestionId in (Select QuestionId from vQuestionnaire_Sim where QuestionName like '%{0}%') ", questionName_q.value);
}
if ( optionName_q.value != "")
{
strWhereCond += Format(" And  QuestionOptionId in (Select QuestionOptionId from QuestionOptions where OptionName like '%{0}%') ", optionName_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineUserAnswerResultCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineUserAnswerResultConditionObj=async (): Promise<clsUserAnswerResultEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objUserAnswerResultCond = new clsUserAnswerResultEN();
let strWhereCond = " 1 = 1 ";
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_IdCurrEduCls, IdCurrEduCls_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsUserAnswerResultEN.con_CourseId, courseId_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_CourseId, courseId_q.value, "=");
}
if ( batchId_q.value != "" && batchId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsUserAnswerResultEN.con_BatchId, batchId_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_BatchId, batchId_q.value, "=");
}
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultEN.con_UserId, userId_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_UserId, userId_q.value, "like");
}
if ( answerText_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultEN.con_AnswerText, answerText_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_AnswerText, answerText_q.value, "like");
}
if ( examBatchNo_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultEN.con_ExamBatchNo, examBatchNo_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_ExamBatchNo, examBatchNo_q.value, "like");
}
if ( answerMultiOption_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultEN.con_AnswerMultiOption, answerMultiOption_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_AnswerMultiOption, answerMultiOption_q.value, "like");
}
if ( examPaperName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultENEx.con_ExamPaperName, examPaperName_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultENEx.con_ExamPaperName, examPaperName_q.value, "like");
}
if ( questionName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultENEx.con_QuestionName, questionName_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultENEx.con_QuestionName, questionName_q.value, "like");
}
if ( optionName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultENEx.con_OptionName, optionName_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultENEx.con_OptionName, optionName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineUserAnswerResultConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objUserAnswerResultCond.whereCond = strWhereCond;
return objUserAnswerResultCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineUserAnswerResultConditionObj4ExportExcel = async ():Promise<clsUserAnswerResultEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objUserAnswerResultCond = new clsUserAnswerResultENEx();
let strWhereCond = " 1 = 1 ";
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_IdCurrEduCls, IdCurrEduCls_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsUserAnswerResultEN.con_CourseId, courseId_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_CourseId, courseId_q.value, "=");
}
if ( batchId_q.value != "" && batchId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsUserAnswerResultEN.con_BatchId, batchId_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_BatchId, batchId_q.value, "=");
}
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultEN.con_UserId, userId_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_UserId, userId_q.value, "like");
}
if ( answerText_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultEN.con_AnswerText, answerText_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_AnswerText, answerText_q.value, "like");
}
if ( examBatchNo_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultEN.con_ExamBatchNo, examBatchNo_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_ExamBatchNo, examBatchNo_q.value, "like");
}
if ( answerMultiOption_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultEN.con_AnswerMultiOption, answerMultiOption_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultEN.con_AnswerMultiOption, answerMultiOption_q.value, "like");
}
if ( examPaperName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultENEx.con_ExamPaperName, examPaperName_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultENEx.con_ExamPaperName, examPaperName_q.value, "like");
}
if ( questionName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultENEx.con_QuestionName, questionName_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultENEx.con_QuestionName, questionName_q.value, "like");
}
if ( optionName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsUserAnswerResultENEx.con_OptionName, optionName_q.value);
objUserAnswerResultCond.SetCondFldValue(clsUserAnswerResultENEx.con_OptionName, optionName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineUserAnswerResultConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objUserAnswerResultCond.whereCond = strWhereCond;
return objUserAnswerResultCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsUserAnswerResultENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListUserAnswerResult.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refUserAnswerResult_List.value != null) refUserAnswerResult_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function UserAnswerResult_DeleteKeyIdCache( lngMinId:number):void
{


if (
lngMinId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngMinId }`;
delete userAnswerResultCache[cacheKey];
return;
}
}