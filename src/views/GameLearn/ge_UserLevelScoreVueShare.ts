/**
 * 类名:ge_UserLevelScoreVueShare(界面:ge_UserLevelScoreCRUD,01120239)
 * 表名:ge_UserLevelScore(01120942)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:54:15
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
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsge_UserLevelScoreEN } from '@/ts/L0Entity/GameLearn/clsge_UserLevelScoreEN';
import { clsge_UserLevelScoreENEx } from '@/ts/L0Entity/GameLearn/clsge_UserLevelScoreENEx';
import { ge_UserLevelScoreEx_FuncMapKeyUserName } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserLevelScoreExWApi';
import { intersectSets } from '@/ts/PubFun/clsCommFunc4Ctrl';

const ascOrDesc4SortFun = ref('Asc');
const sortge_UserLevelScoreBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortge_UserLevelScoreBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const CourseId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IdCurrEduCls_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refge_UserLevelScore_Detail = ref();
const refge_UserLevelScore_Edit = ref();
const refge_UserLevelScore_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refge_UserLevelScore_Detail,
  refge_UserLevelScore_Edit,
  refge_UserLevelScore_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refge_UserLevelScore_Detail,
  refge_UserLevelScore_Edit,
  refge_UserLevelScore_List,
};

export const showErrorMessage = ref(false);
export const dataListge_UserLevelScore = ref<Array<clsge_UserLevelScoreENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const ge_UserLevelScoreCache: { [key: string]: clsge_UserLevelScoreENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const gameLevelId_q = ref('');
export const userId_q = ref('');
export const passed_q = ref('0');
export const userName_q = ref('');
const qryVarSet = reactive({
  gameLevelId_q,
  userId_q,
  passed_q,
  userName_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_UserLevelScoreCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (gameLevelId_q.value != '' && gameLevelId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsge_UserLevelScoreEN.con_GameLevelId,
        gameLevelId_q.value,
      );
    }
    if (userId_q.value != '' && userId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsge_UserLevelScoreEN.con_UserId, userId_q.value);
    }
    if (passed_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsge_UserLevelScoreEN.con_Passed);
    } else if (passed_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsge_UserLevelScoreEN.con_Passed);
    }

    //处理针对扩展字段:[UserId]的查询
    const arrUserId = await GetCondition_UserIdLst_In();
    if (arrUserId.length > 0) {
      strWhereCond += Format(
        ' And {0} in ({1})',
        clsge_UserLevelScoreEN.con_UserId,
        arrUserId.join(','),
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(Combinege_UserLevelScoreCondition)时出错!请联系管理员!{0}',
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
export const Combinege_UserLevelScoreConditionObj = async (): Promise<clsge_UserLevelScoreEN> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objge_UserLevelScoreCond = new clsge_UserLevelScoreEN();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (gameLevelId_q.value != '' && gameLevelId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsge_UserLevelScoreEN.con_GameLevelId,
        gameLevelId_q.value,
      );
      objge_UserLevelScoreCond.SetCondFldValue(
        clsge_UserLevelScoreEN.con_GameLevelId,
        gameLevelId_q.value,
        '=',
      );
    }
    if (userId_q.value != '' && userId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsge_UserLevelScoreEN.con_UserId, userId_q.value);
      objge_UserLevelScoreCond.SetCondFldValue(
        clsge_UserLevelScoreEN.con_UserId,
        userId_q.value,
        '=',
      );
    }
    if (passed_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsge_UserLevelScoreEN.con_Passed);
      objge_UserLevelScoreCond.SetCondFldValue(clsge_UserLevelScoreEN.con_Passed, true, '=');
    } else if (passed_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsge_UserLevelScoreEN.con_Passed);
      objge_UserLevelScoreCond.SetCondFldValue(clsge_UserLevelScoreEN.con_Passed, false, '=');
    }

    //处理针对扩展字段:[UserId]的查询
    const arrUserId = await GetCondition_UserIdLst_In();
    if (arrUserId.length > 0) {
      objge_UserLevelScoreCond.SetCondFldValue(
        clsge_UserLevelScoreEN.con_UserId,
        arrUserId.join(','),
        'in',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(Combinege_UserLevelScoreConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objge_UserLevelScoreCond.whereCond = strWhereCond;
  return objge_UserLevelScoreCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_UserLevelScoreConditionObj4ExportExcel =
  async (): Promise<clsge_UserLevelScoreEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objge_UserLevelScoreCond = new clsge_UserLevelScoreENEx();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (gameLevelId_q.value != '' && gameLevelId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsge_UserLevelScoreEN.con_GameLevelId,
          gameLevelId_q.value,
        );
        objge_UserLevelScoreCond.SetCondFldValue(
          clsge_UserLevelScoreEN.con_GameLevelId,
          gameLevelId_q.value,
          '=',
        );
      }
      if (userId_q.value != '' && userId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsge_UserLevelScoreEN.con_UserId,
          userId_q.value,
        );
        objge_UserLevelScoreCond.SetCondFldValue(
          clsge_UserLevelScoreEN.con_UserId,
          userId_q.value,
          '=',
        );
      }

      //处理针对扩展字段:[UserId]的查询
      const arrUserId = await GetCondition_UserIdLst_In();
      if (arrUserId.length > 0) {
        objge_UserLevelScoreCond.SetCondFldValue(
          clsge_UserLevelScoreEN.con_UserId,
          arrUserId.join(','),
          'in',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(Combinege_UserLevelScoreConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objge_UserLevelScoreCond.whereCond = strWhereCond;
    return objge_UserLevelScoreCond;
  };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Ts_CombineConditionInFldValueLst_GeneFun)
 * @returns 相关字段的关键字列表(Array<string>)
 **/
export async function GetCondition_UserIdLst_In(): Promise<Array<string>> {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objge_UserLevelScoreCond = new clsge_UserLevelScoreENEx();
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  let arrUserIdInclude: Array<string> = [];
  try {
    if (userName_q.value != '') {
      objge_UserLevelScoreCond.SetCondFldValue(
        clsge_UserLevelScoreENEx.con_UserName,
        userName_q.value,
        'like',
      );

      const arrUserId_UserName = await ge_UserLevelScoreEx_FuncMapKeyUserName(
        objge_UserLevelScoreCond,
      );
      if (arrUserIdInclude.length == 0) {
        arrUserIdInclude = arrUserId_UserName.map((x) => x.toString());
      } else {
        arrUserIdInclude = intersectSets(
          arrUserIdInclude,
          arrUserId_UserName.map((x) => x.toString()),
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
  return arrUserIdInclude;
}

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsge_UserLevelScoreENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListge_UserLevelScore.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refge_UserLevelScore_List.value != null)
    refge_UserLevelScore_List.value.selectAllChecked = false;
};

export function ge_UserLevelScore_DeleteKeyIdCache(
  strIdCurrEduCls: string,
  strGameLevelId: string,
  strUserId: string,
): void {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空!(In ge_UserLevelScoreVueShare.ge_UserLevelScore.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(ge_UserLevelScoreVueShare.ge_UserLevelScore.ReFreshCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (
    IsNullOrEmpty(strIdCurrEduCls) == false &&
    IsNullOrEmpty(strGameLevelId) == false &&
    IsNullOrEmpty(strUserId) == false
  ) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strIdCurrEduCls}_${strGameLevelId}_${strUserId}_${strIdCurrEduCls}`;
    delete ge_UserLevelScoreCache[cacheKey];
    return;
  }
}
