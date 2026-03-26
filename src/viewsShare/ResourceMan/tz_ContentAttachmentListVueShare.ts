/**
 * 类名:tz_ContentAttachmentVueShare(界面:tz_ContentAttachmentCRUD,01120228)
 * 表名:tz_ContentAttachment(01120207)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:29
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:资源管理(ResourceMan)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clstz_ContentAttachmentEN } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentEN';
import { clstz_ContentAttachmentENEx } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentENEx';

const ascOrDesc4SortFun = ref('Asc');
const sorttz_ContentAttachmentBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sorttz_ContentAttachmentBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const tableNameKey_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const divQuestionAttachmentShow = ref();
const reftz_ContentAttachment_Edit = ref();
const reftz_ContentAttachment_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  divQuestionAttachmentShow,
  reftz_ContentAttachment_Edit,
  reftz_ContentAttachment_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  divQuestionAttachmentShow,
  reftz_ContentAttachment_Edit,
  reftz_ContentAttachment_List,
};

export const showErrorMessage = ref(false);
export const dataListtz_ContentAttachment = ref<Array<clstz_ContentAttachmentENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const tz_ContentAttachmentCache: { [key: string]: clstz_ContentAttachmentENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const idResourceType_q = ref('');
const qryVarSet = reactive({
  idResourceType_q,
});
export { qryVarSet };

//功能区变量定义
export const tableNameKey_f = ref('');
const featureVarSet = reactive({
  tableNameKey_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const Combinetz_ContentAttachmentCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (idResourceType_q.value != '' && idResourceType_q.value != '0') {
      strWhereCond += Format(
        " And tz_ContentAttachment.{0} = '{1}'",
        clstz_ContentAttachmentEN.con_IdResourceType,
        idResourceType_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(Combinetz_ContentAttachmentCondition)时出错!请联系管理员!{0}',
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
export const Combinetz_ContentAttachmentConditionObj =
  async (): Promise<clstz_ContentAttachmentEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objtz_ContentAttachmentCond = new clstz_ContentAttachmentEN();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (idResourceType_q.value != '' && idResourceType_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clstz_ContentAttachmentEN.con_IdResourceType,
          idResourceType_q.value,
        );
        objtz_ContentAttachmentCond.SetCondFldValue(
          clstz_ContentAttachmentEN.con_IdResourceType,
          idResourceType_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合查询条件对象(Combinetz_ContentAttachmentConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objtz_ContentAttachmentCond.whereCond = strWhereCond;
    return objtz_ContentAttachmentCond;
  };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinetz_ContentAttachmentConditionObj4ExportExcel =
  async (): Promise<clstz_ContentAttachmentEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objtz_ContentAttachmentCond = new clstz_ContentAttachmentENEx();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (idResourceType_q.value != '' && idResourceType_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clstz_ContentAttachmentEN.con_IdResourceType,
          idResourceType_q.value,
        );
        objtz_ContentAttachmentCond.SetCondFldValue(
          clstz_ContentAttachmentEN.con_IdResourceType,
          idResourceType_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(Combinetz_ContentAttachmentConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objtz_ContentAttachmentCond.whereCond = strWhereCond;
    return objtz_ContentAttachmentCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clstz_ContentAttachmentENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListtz_ContentAttachment.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (reftz_ContentAttachment_List.value != null)
    reftz_ContentAttachment_List.value.selectAllChecked = false;
};

/**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export function tz_ContentAttachment_DeleteKeyIdCache(lngmId: number): void {
  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}`;
    delete tz_ContentAttachmentCache[cacheKey];
    return;
  }
}
