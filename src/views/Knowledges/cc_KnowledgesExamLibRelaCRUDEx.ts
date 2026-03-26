import $ from 'jquery';
import cc_KnowledgesExamLibRela_EditEx from './cc_KnowledgesExamLibRela_EditEx';

import { cc_KnowledgesExamLibRelaCRUD } from '@/viewsBase/Knowledges/cc_KnowledgesExamLibRelaCRUD';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
import { clscc_CourseKnowledgesENEx } from 'share-stu-study-base-lib';
import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
import { clsKnowledgeTypeEN } from 'share-stu-study-base-lib';
import {
  cc_CourseChapter_BindDdl_CourseChapterIdInDivCache,
  cc_CourseChapter_func,
} from 'share-stu-study-base-lib';
import {
  cc_KnowledgesExamLibRela_AddNewRecordAsync,
  cc_KnowledgesExamLibRela_CheckPropertyNew,
  cc_KnowledgesExamLibRela_DelRecordAsync,
  cc_KnowledgesExamLibRela_GetRecCountByCondAsync,
  cc_KnowledgesExamLibRela_GetRecCountByCondCache,
  cc_KnowledgesExamLibRela_ReFreshCache,
} from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgesExamLibRelaWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  GetSelectValueInDivObjForBool,
  SetSelectValueByIdInDivObj,
  SetSelectValueByIdInDivObjForBool,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  cc_CourseKnowledges_CopyObjTo,
  cc_CourseKnowledges_GetObjLstByPagerCache,
  cc_CourseKnowledges_GetRecCountByCondCache,
} from 'share-stu-study-base-lib';
import { KnowledgeType_func } from 'share-stu-study-base-lib';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { useUserStore } from '@/store/modulesShare/user';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clscc_KnowledgesExamLibRelaENEx } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaENEx';
import {
  divVarSet,
  viewVarSet,
  CourseId_Session,
  QuestionId_Static,
} from '@/views/Knowledges/cc_KnowledgesExamLibRelaVueShare';
import {
  BindTabByList_Dialog,
  Combinecc_KnowledgesExamLibRelaCondition_Dialog,
} from '@/views/Knowledges/cc_KnowledgesExamLibRelaExVueShare';
import { cc_KnowledgesExamLibRelaEx_GetObjExLstByPagerAsync } from '@/ts/L3ForWApiEx/Knowledges/clscc_KnowledgesExamLibRelaExWApi';

// declare function ShowDialogOne(): void;
// declare function HideDialogOne(): void;
// declare function RefreshParent(): void;

/* cc_KnowledgesExamLibRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class cc_KnowledgesExamLibRelaCRUDEx
  extends cc_KnowledgesExamLibRelaCRUD
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static vuebtn_Click_Parent: (strCommandName: string, strKeyId: string) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static divListDialog: HTMLDivElement; //列表区的层对象
  //public static divName4List: string = "divDataLst";
  //public static mstrSortcc_KnowledgesExamLibRelaBy: string = "mId";
  public mstrListDivKnowledge: string = 'divKnowledgeDataLst';
  //public divName4Pager2: string = "divKnowledgePager";  //列表中的分页区的层Id

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
    CourseId_Session.value = clsPubLocalStorage.courseId;
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string) {
    switch (strType) {
      case 'cc_KnowledgesExamLibRela':
        cc_KnowledgesExamLibRela_ReFreshCache(clsPubLocalStorage.courseId);
        this.BindGv_cc_KnowledgesExamLibRela4Func(divVarSet.refDivList);
        if (cc_KnowledgesExamLibRelaCRUDEx.vuebtn_Click_Parent) {
          cc_KnowledgesExamLibRelaCRUDEx.vuebtn_Click_Parent('RefreshParent', '');
        }
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  BindGvCache(strType: string) {
    switch (strType) {
      case 'cc_KnowledgesExamLibRela':
        // alert('该类没有绑定该函数：[this.BindGv_cc_KnowledgesExamLibRela_Cache]！');
        this.BindGv_cc_KnowledgesExamLibRela4Func(divVarSet.refDivList);
        cc_KnowledgesExamLibRelaCRUDEx.vuebtn_Click_Parent('RefreshParent', '');
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: cc_KnowledgesExamLibRelaCRUDEx;
    if (cc_KnowledgesExamLibRelaCRUD.objPageCRUD == null) {
      cc_KnowledgesExamLibRelaCRUD.objPageCRUD = new cc_KnowledgesExamLibRelaCRUDEx();
      objPage = <cc_KnowledgesExamLibRelaCRUDEx>cc_KnowledgesExamLibRelaCRUD.objPageCRUD;
    } else {
      objPage = <cc_KnowledgesExamLibRelaCRUDEx>cc_KnowledgesExamLibRelaCRUD.objPageCRUD;
    }
    const objPageEdit: cc_KnowledgesExamLibRela_EditEx = new cc_KnowledgesExamLibRela_EditEx(
      'cc_KnowledgesExamLibRela_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    let strMsg = '';
    switch (strCommandName) {
      case 'SetIsMain': //自定义功能:设置是否主资源
        objPage.btnSetIsMain_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'QueryKnowledge': //查询记录
        objPage.btnCurrEduClsQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecord_Click(Number(strKeyId));
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit.btnUpdateRecordInTab_Click(Number(strKeyId));
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        strMsg =
          '命令:' +
          strCommandName +
          '在函数(cc_KnowledgesExamLibRelaCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
*/
  public async PageLoad_Dialog() {
    // 在此处放置用户代码以初始化页面
    try {
      // QuestionId_Static.value = vuebtn_Click.('QuestionId');
      this.InitVarSet();

      // 为功能区绑定下拉框
      // await this.BindDdl4FeatureRegion();
      // SetSelectValueByIdInDivObjForBool(this.thisDivLayout, 'chkIsMain_SetFldValue', true);
      viewVarSet.sortcc_KnowledgesExamLibRelaBy = 'questionId Asc';

      this.hidSortcc_CourseKnowledgesBy = 'orderNum Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_cc_KnowledgesExamLibRela4Func_Dialog(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
 <returns>条件串(strWhereCond)</returns>
*/
  public async Combinecc_KnowledgesExamLibRelaConditionObj(): Promise<clscc_KnowledgesExamLibRelaEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    const objcc_KnowledgesExamLibRela_Cond: clscc_KnowledgesExamLibRelaEN =
      new clscc_KnowledgesExamLibRelaEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.CourseId_q != "" && this.CourseId_q != "0") {
      //    strWhereCond += ` And ${clscc_KnowledgesExamLibRelaEN.con_CourseId} = '${this.CourseId_q}'`;
      //    objcc_KnowledgesExamLibRela_Cond.SetCondFldValue(clscc_KnowledgesExamLibRelaEN.con_CourseId, this.CourseId_q, "=");
      //}
      //判断隐藏传递题目ID是否为空，如果不为空，那么则显示该题目相关选项ID；
      if (this.questionId != 0) {
        strWhereCond += ` And ${clscc_KnowledgesExamLibRelaEN.con_QuestionId} = '${this.questionId}'`;
        objcc_KnowledgesExamLibRela_Cond.SetCondFldValue(
          clscc_KnowledgesExamLibRelaEN.con_QuestionId,
          this.questionId,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinecc_KnowledgesExamLibRelaConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objcc_KnowledgesExamLibRela_Cond.whereCond = strWhereCond;
    return objcc_KnowledgesExamLibRela_Cond;
  }

  //-----------------------------------------------------知识点相关
  public get thisDivListDialog(): HTMLDivElement {
    return cc_KnowledgesExamLibRelaCRUDEx.divListDialog;
  }
  //弹出列表添加知识点关系列表
  public async btnAddNewKnowledge() {
    cc_KnowledgesExamLibRelaCRUDEx.vuebtn_Click('ShowDialogOne', '');
    const responseObjList1 = await this.BindDdl4KnowledgeQueryRegion();
    $('#ddlCourseChapterId_q').val(this.courseChapterId);
    const responseObjList = await this.BindGv_cc_CourseKnowledges4Func(this.thisDivListDialog);
  }
  /* 函数功能:为查询区绑定下拉框
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
*/
  public async BindDdl4KnowledgeQueryRegion() {
    // 在此处放置用户代码以初始化页面
    const strCourseId = clsPubLocalStorage.courseId; //定义条件字段
    const ddlCourseChapterId_q = await this.SetDdl_CourseChapterId(strCourseId); //查询区域
  }
  /// <summary>
  /// 设置绑定下拉框，针对字段:[courseChapterId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion)
  /// </summary>
  public async SetDdl_CourseChapterId(strCourseId: string) {
    const objcc_CourseChapter_Cond = new clscc_CourseChapterEN(); //查询区域
    //定义条件字段
    //const strCourseId = "";//定义条件字段
    await cc_CourseChapter_BindDdl_CourseChapterIdInDivCache(
      this.thisDivLayout,
      'ddlCourseChapterId_q',
      strCourseId,
    ); //查询区域
  }

  //查询列表
  public async btnCurrEduClsQuery_Click() {
    const responseObjList = await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
  }
  //确定选择 并添加到关系表中 获取知识点Id
  public async btnCurrEduClsInTab_Click(courseKnowledgeId: string): Promise<boolean> {
    const response = await this.AddNewRecordSaveKnowledgeRela(courseKnowledgeId);
    return response;
  }

  /* 添加新记录，保存函数
(AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSaveKnowledgeRela(courseKnowledgeId: string) {
    const objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN =
      new clscc_KnowledgesExamLibRelaEN();
    this.PutDataTocc_KnowledgesExamLibRelaClass(objcc_KnowledgesExamLibRelaEN, courseKnowledgeId);
    try {
      cc_KnowledgesExamLibRela_CheckPropertyNew(objcc_KnowledgesExamLibRelaEN);
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `检查数据不成功,${e}.`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseText2 = await cc_KnowledgesExamLibRela_AddNewRecordAsync(
        objcc_KnowledgesExamLibRelaEN,
      );
      const returnBool: boolean = !!responseText2;
      if (returnBool == true) {
        console.error(
          '由于该页面没有设置使用缓存列表，所以没有刷新缓存！请在生成代码平台中为该页面中设置使用缓存列表。',
        ); //cc_KnowledgesExamLibRela_ReFreshCache();
        //cc_KnowledgesExamLibRela_ReFreshCache();
        const strInfo: string = `添加记录成功!`;

        cc_KnowledgesExamLibRelaCRUDEx.vuebtn_Click('RefreshParent', '');

        //显示信息框
        alert(strInfo);
        //关闭列表
        cc_KnowledgesExamLibRelaCRUDEx.vuebtn_Click('HideDialogOne', '');

        this.BindGv(clscc_KnowledgesExamLibRelaEN._CurrTabName);
      } else {
        const strInfo: string = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjcc_KnowledgesExamLibRelaEN">数据传输的目的类对象</param>
*/
  public PutDataTocc_KnowledgesExamLibRelaClass(
    pobjcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN,
    courseKnowledgeId: string,
  ) {
    const userStore = useUserStore();
    pobjcc_KnowledgesExamLibRelaEN.courseId = clsPubLocalStorage.courseId; // 课程
    pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId = courseKnowledgeId; // 课程知识点
    pobjcc_KnowledgesExamLibRelaEN.questionId = this.questionId; // 题目
    pobjcc_KnowledgesExamLibRelaEN.updUserId = userStore.userId; //
    pobjcc_KnowledgesExamLibRelaEN.updDate = clsPubFun4Web.getNowDate();
  }

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
 <returns>条件串(strWhereCond)</returns>
*/
  public Combinecc_CourseKnowledgesConditionObj(): clscc_CourseKnowledgesEN_T {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    const objcc_CourseKnowledges_Cond: clscc_CourseKnowledgesEN_T = new clscc_CourseKnowledgesEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.knowledgeTitle_q != '') {
        strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_KnowledgeTitle} like '% ${this.knowledgeTitle_q}%'`;
        objcc_CourseKnowledges_Cond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_KnowledgeTitle,
          this.knowledgeTitle_q,
          'like',
        );
      }

      if (this.courseChapterId_q != '' && this.courseChapterId_q != '0') {
        strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_CourseChapterId} = '${this.courseChapterId_q}'`;
        objcc_CourseKnowledges_Cond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_CourseChapterId,
          this.courseChapterId_q,
          '=',
        );
      }
      //只显示当前课程下的知识点
      const strCourseId = clsPubLocalStorage.courseId;
      strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_CourseId} = '${strCourseId}'`;
      objcc_CourseKnowledges_Cond.SetCondFldValue(
        clscc_CourseKnowledgesEN.con_CourseId,
        strCourseId,
        '=',
      );
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinecc_CourseKnowledgesConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objcc_CourseKnowledges_Cond.whereCond = strWhereCond;
    return objcc_CourseKnowledges_Cond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
*/
  public async BindGv_cc_CourseKnowledges4Func(divList: HTMLDivElement) {
    if (this.hidSortcc_CourseKnowledgesBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortcc_CourseKnowledgesBy)为空，请检查！(In BindGv_cc_CourseKnowledges_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strListDiv: string = this.mstrListDivKnowledge;
    const objcc_CourseKnowledges_Cond = await this.Combinecc_CourseKnowledgesConditionObj();
    const strWhereCond = JSON.stringify(objcc_CourseKnowledges_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrcc_CourseKnowledgesObjLst: Array<clscc_CourseKnowledgesEN_T> = [];
    let arrcc_CourseKnowledgesExObjLst: Array<clscc_CourseKnowledgesENEx_T> = [];
    try {
      this.recCount = await cc_CourseKnowledges_GetRecCountByCondCache(
        objcc_CourseKnowledges_Cond,
        clsPubLocalStorage.courseId,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        //pageSize: this.pageSize,
        pageSize: 100,
        whereCond: strWhereCond,
        orderBy: this.hidSortcc_CourseKnowledgesBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrcc_CourseKnowledgesObjLst = await cc_CourseKnowledges_GetObjLstByPagerCache(
        objPagerPara,
        clsPubLocalStorage.courseId,
      );
      arrcc_CourseKnowledgesExObjLst = arrcc_CourseKnowledgesObjLst.map(this.CopyKnowToEx);
      for (const objInFor of arrcc_CourseKnowledgesExObjLst) {
        const conFuncMap = await this.FuncKnowMap(objInFor);
      }
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    //if (arrcc_CourseKnowledgesObjLst.length == 0) {
    //    const strKey: string = `${clscc_CourseKnowledgesEN._CurrTabName}`;
    //    const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
    //    console.error("Error: ", strMsg);
    //    //console.trace();
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_cc_CourseKnowledges4Func(divList, arrcc_CourseKnowledgesExObjLst);
      console.log('完成BindGv_cc_CourseKnowledges4Func!');
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objcc_CourseKnowledgesS">源对象</param>
  public async FuncKnowMap(objcc_CourseKnowledges: clscc_CourseKnowledgesENEx) {
    try {
      {
        const cc_CourseChapter_CourseChapterId = objcc_CourseKnowledges.courseChapterId;
        const cc_CourseChapter_ChapterName = await cc_CourseChapter_func(
          clscc_CourseChapterEN.con_CourseChapterId,
          clscc_CourseChapterEN.con_ChapterName,
          cc_CourseChapter_CourseChapterId,
          objcc_CourseKnowledges.courseId,
        );
        objcc_CourseKnowledges.courseChapterName = cc_CourseChapter_ChapterName;
      }
      {
        const KnowledgeType_KnowledgeTypeId = objcc_CourseKnowledges.knowledgeTypeId;
        const KnowledgeType_KnowledgeTypeName = await KnowledgeType_func(
          clsKnowledgeTypeEN.con_KnowledgeTypeId,
          clsKnowledgeTypeEN.con_KnowledgeTypeName,
          KnowledgeType_KnowledgeTypeId,
          objcc_CourseKnowledges.courseId,
        );
        objcc_CourseKnowledges.knowledgeTypeName = KnowledgeType_KnowledgeTypeName;
      }
      {
        const strCourseKnowledgeId = objcc_CourseKnowledges.courseKnowledgeId;
        const objcc_KnowledgesExamLibRela_Cond: clscc_KnowledgesExamLibRelaEN =
          new clscc_KnowledgesExamLibRelaEN();
        objcc_KnowledgesExamLibRela_Cond.SetCondFldValue(
          clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId,
          strCourseKnowledgeId,
          '=',
        );
        const intQuestionNum = await cc_KnowledgesExamLibRela_GetRecCountByCondCache(
          objcc_KnowledgesExamLibRela_Cond,
          objcc_CourseKnowledges.courseId,
        );
        objcc_CourseKnowledges.questionNum = intQuestionNum;
      }
    } catch (e) {
      const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objcc_CourseKnowledgesENS">源对象</param>
  /// <returns>目标对象=>clscc_CourseKnowledgesEN:objcc_CourseKnowledgesENT</returns>
  public CopyKnowToEx(
    objcc_CourseKnowledgesENS: clscc_CourseKnowledgesEN_T,
  ): clscc_CourseKnowledgesENEx {
    const objcc_CourseKnowledgesENT = new clscc_CourseKnowledgesENEx();
    try {
      cc_CourseKnowledges_CopyObjTo(objcc_CourseKnowledgesENS, objcc_CourseKnowledgesENT);
      return objcc_CourseKnowledgesENT;
    } catch (e) {
      const strMsg: string = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objcc_CourseKnowledgesENT;
    }
  }

  /* 显示cc_CourseKnowledges对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
 <param name = "divContainer">显示容器</param>
 <param name = "arrcc_CourseKnowledgesExObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_cc_CourseKnowledges4Func(
    divContainer: HTMLDivElement,
    arrcc_CourseKnowledgesExObjLst: Array<clscc_CourseKnowledgesENEx_T>,
  ) {
    const strThisFuncName = this.BindTab_cc_CourseKnowledges4Func.name;
    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');

    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'orderNum',
        sortBy: 'orderNum',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'knowledgeName',
        sortBy: 'knowledgeName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '知识点名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },

      {
        fldName: 'courseChapterName',
        sortBy: 'courseChapterId',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '课程章节',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: 'userId',
        sortBy: 'userId',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '用户ID',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: 'knowledgeTypeName',
        sortBy: 'knowledgeTypeName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '知识点类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: 'isShow',
        sortBy: 'isShow',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '是否启用',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
      //{
      //    fldName: "LikeCount",
      //    sortBy: "LikeCount",
      //    colHeader: "资源喜欢数量",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 8,
      //    funcName: () => { }
      //},
      {
        fldName: 'updDate',
        sortBy: 'updDate',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
      {
        fldName: 'questionNum',
        sortBy: 'questionNum',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '题目数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
      {
        fldName: '',
        colHeader: '确定',
        text: '确定',
        tdClass: 'text-left',
        sortBy: '',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          // btn1.onclick = .setAttribute('onclick', `btnCurrEduClsInTab_Click('${strKeyId}');`);
          (function (strKeyId: string) {
            btn1.onclick = function () {
              cc_KnowledgesExamLibRelaCRUDEx.vuebtn_Click('btnCurrEduClsInTab', strKeyId);
            };
          })(strKeyId);
          return btn1;
        },
      },
    ];
    await BindTab(
      divDataLst,
      arrcc_CourseKnowledgesExObjLst,
      arrDataColumn,
      'courseKnowledgeId',
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /* 
    在数据表里删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   */
  public async btnDelRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert('请选择需要删除的记录！');
        return '';
      }
      const lngKeyId = Number(strKeyId);
      const responseText = await this.DelRecord(lngKeyId);
      await this.BindGv_cc_KnowledgesExamLibRela4Func(divVarSet.refDivList);
      cc_KnowledgesExamLibRelaCRUDEx.vuebtn_Click('RefreshParent', '');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
   根据关键字删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  */
  public async DelRecord(lngmId: number) {
    try {
      const responseText = await cc_KnowledgesExamLibRela_DelRecordAsync(lngmId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        cc_KnowledgesExamLibRela_ReFreshCache(clsPubLocalStorage.courseId);
        const strInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo: string = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortcc_CourseKnowledgesBy(value: string) {
    $('#hidSortcc_CourseKnowledgesBy').val(value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortcc_CourseKnowledgesBy(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidSortcc_CourseKnowledgesBy');
  }

  /*
   * 知识点标题 (Used In CombineCondition())
   */
  public get knowledgeTitle_q(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'txtKnowledgeTitle_q');
  }
  /*
   * 知识点标题 (Used In CombineCondition())
   */
  public set knowledgeTitle_q(value: string) {
    $('#txtKnowledgeTitle_q').val(value);
  }
  /*
   * 课程章节ID (Used In CombineCondition())
   */
  public get courseChapterId_q(): string {
    return GetSelectValueInDivObj(this.thisDivLayout, 'ddlCourseChapterId_q');
  }
  /*
   * 课程章节ID (Used In CombineCondition())
   */
  public set courseChapterId_q(value: string) {
    $('#ddlCourseChapterId_q').val(value);
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinecc_KnowledgesExamLibRelaConditionBak(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = Format(
      " {0} = '{1}'",
      clscc_KnowledgesExamLibRelaEN.con_CourseId,
      clsPubLocalStorage.courseId,
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      //if (this.courseId_q != "" && this.courseId_q != "0") {
      //    strWhereCond += Format(" And {0} = '{1}'", clscc_KnowledgesExamLibRelaEN.con_CourseId, this.courseId_q);
      //}
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(Combinecc_KnowledgesExamLibRelaCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  /*
   * 存放题目ID
   */
  public get questionId() {
    const strQuestionId = cc_KnowledgesExamLibRelaCRUDEx.GetPropValue('questionId');
    return Number(strQuestionId);
  }

  public get courseChapterId() {
    const strCourseChapterId = cc_KnowledgesExamLibRelaCRUDEx.GetPropValue('courseChapterId');
    return strCourseChapterId;
  }
  /** 显示cc_KnowledgesExamLibRela对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrcc_KnowledgesExamLibRelaExObjLst:需要绑定的对象列表
   **/
  public async BindTab_cc_KnowledgesExamLibRela4Func(
    divContainer: HTMLDivElement,
    arrcc_KnowledgesExamLibRelaExObjLst: Array<clscc_KnowledgesExamLibRelaENEx>,
  ) {
    const strThisFuncName = this.BindTab_cc_KnowledgesExamLibRela4Func.name;
    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_KnowledgesExamLibRelaENEx.con_CourseName,
        sortBy: 'courseName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_KnowledgesExamLibRelaENEx.con_KnowledgeName,
        sortBy: 'knowledgeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '知识点名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_KnowledgesExamLibRelaENEx.con_QuestionName,
        sortBy: 'questionName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '题目名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_KnowledgesExamLibRelaEN.con_IsMain,
        sortBy: clscc_KnowledgesExamLibRelaEN.con_IsMain,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '主要知识点',
        text: '',
        tdClass: 'text-left',
        columnType: 'Icon',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_KnowledgesExamLibRelaEN.con_PositiveCorrelation,
        sortBy: clscc_KnowledgesExamLibRelaEN.con_PositiveCorrelation,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '正相关度',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_KnowledgesExamLibRelaEN.con_NegativeCorrelation,
        sortBy: clscc_KnowledgesExamLibRelaEN.con_NegativeCorrelation,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '负相关度',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_KnowledgesExamLibRelaEN.con_UpdDate,
        sortBy: clscc_KnowledgesExamLibRelaEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_KnowledgesExamLibRelaEN.con_UpdUserId,
        sortBy: clscc_KnowledgesExamLibRelaEN.con_UpdUserId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改用户Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrcc_KnowledgesExamLibRelaExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrcc_KnowledgesExamLibRelaExObjLst,
      arrDataColumn,
      clscc_KnowledgesExamLibRelaEN.con_mId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /** 设置字段值-IsMain
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetIsMain_Click() {
    const strThisFuncName = this.btnSetIsMain_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置是否主资源的${this.thisTabName}记录!`);
        return '';
      }
      // const bolIsMain: boolean = $('#chkIsMain_SetFldValue').prop('checked');
      const bolIsMain: boolean = GetSelectValueInDivObjForBool(
        this.thisDivLayout,
        'chkIsMain_SetFldValue',
      );
      //console.log('bolIsMain=' + bolIsMain);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetIsMain(arrKeyIds, bolIsMain);
      await this.BindGv_cc_KnowledgesExamLibRela4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'courseName|Ex':
        viewVarSet.sortcc_KnowledgesExamLibRelaBy = `vcc_Course_Sim|courseName ${sortDirection}|cc_KnowledgesExamLibRela.CourseId = vcc_Course_Sim.CourseId`;
        break;
      case 'knowledgeName|Ex':
        viewVarSet.sortcc_KnowledgesExamLibRelaBy = `cc_CourseKnowledges|knowledgeName ${sortDirection}|cc_KnowledgesExamLibRela.CourseKnowledgeId = cc_CourseKnowledges.CourseKnowledgeId`;
        break;
      case 'questionName|Ex':
        viewVarSet.sortcc_KnowledgesExamLibRelaBy = `vQuestionnaire_Sim|questionName ${sortDirection}|cc_KnowledgesExamLibRela.QuestionId = vQuestionnaire_Sim.QuestionId`;
        break;
      default:
        viewVarSet.sortcc_KnowledgesExamLibRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_cc_KnowledgesExamLibRela4Func(this.thisDivList);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func)
   **/
  public async BindGv_cc_KnowledgesExamLibRela4Func_Dialog(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_cc_KnowledgesExamLibRela4Func.name;
    if (viewVarSet.sortcc_KnowledgesExamLibRelaBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortcc_KnowledgesExamLibRelaBy)为空,请检查!(In BindGv_cc_KnowledgesExamLibRelaCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strWhereCond = await Combinecc_KnowledgesExamLibRelaCondition_Dialog();
    // objcc_KnowledgesExamLibRelaCond.SetCondFldValue(
    //   clscc_KnowledgesExamLibRelaEN.con_CourseId,
    //   CourseId_Session.value,
    //   '=',
    // );
    // const strWhereCond = JSON.stringify(objcc_KnowledgesExamLibRelaCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrcc_KnowledgesExamLibRelaExObjLst: Array<clscc_KnowledgesExamLibRelaENEx> = [];
    try {
      this.recCount = await cc_KnowledgesExamLibRela_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          strWhereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        BindTabByList_Dialog(arrcc_KnowledgesExamLibRelaExObjLst, true);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (cc_KnowledgesExamLibRelaCRUD.sortFunStatic != undefined) {
        strSortFun = cc_KnowledgesExamLibRelaCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortcc_KnowledgesExamLibRelaBy,
        sortFun: strSortFun,
      };
      arrcc_KnowledgesExamLibRelaExObjLst =
        await cc_KnowledgesExamLibRelaEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrcc_KnowledgesExamLibRelaExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clscc_KnowledgesExamLibRelaEN._CurrTabName,
        CourseId_Session.value,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_cc_KnowledgesExamLibRela4Func(
        divList,
        arrcc_KnowledgesExamLibRelaExObjLst,
      );
      //console.log("完成BindGv_cc_KnowledgesExamLibRela4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
