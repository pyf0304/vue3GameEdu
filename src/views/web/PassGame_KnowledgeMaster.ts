import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import clsCheck from '@/ts/FunClass/clsCheck';

import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { GetDivObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_KnowledgesUserMasterENEx } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesUserMasterENEx';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import {
  BindTab_Cls,
  ge_KnowledgesUserMasterEx_GetObjExLstByPagerAsync,
  ge_KnowledgesUserMasterEx_getUserMasterKnowledge,
} from '@/ts/L3ForWApiEx/Knowledges/clsge_KnowledgesUserMasterExWApi';
import { cc_CourseKnowledges_func } from 'share-stu-study-base-lib';
import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
import { clsKnowledgeMasterLevelEN } from 'share-stu-study-base-lib';
import {
  KnowledgeMasterLevel_BindDdl_MasterLevelIdInDivCache,
  KnowledgeMasterLevel_func,
} from 'share-stu-study-base-lib';
import { clsKnowledgeMasterTypeEN } from 'share-stu-study-base-lib';
import { KnowledgeMasterType_func } from 'share-stu-study-base-lib';
import {
  ge_KnowledgesUserMaster_CopyObjTo,
  ge_KnowledgesUserMaster_GetObjLstByPagerAsync,
  ge_KnowledgesUserMaster_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/Knowledges/clsge_KnowledgesUserMasterWApi';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsge_KnowledgesUserMasterEN } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesUserMasterEN';
import {
  CourseId_Session,
  viewVarSet,
  divVarSet,
  qryVarSet,
  Combinege_KnowledgesUserMasterCondition,
  BindTabByList,
} from '@/views/Knowledges/ge_KnowledgesUserMasterVueShare';

import {
  divVarSet_V2,
  qryVarSet as qryVarSet_KnowledgeMaster,
} from '@/views/web/PassGame_KnowledgeMasterVueShare';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ge_KnowledgesUserMasterCRUD } from '@/viewsBase/Knowledges/ge_KnowledgesUserMasterCRUD';
import { clsDimensions } from '@/ts/FunClass/clsDimensions';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { useStudentInfoStore } from '@/store/modulesShare/studentInfo';
import { useUserStore } from '@/store/modulesShare/user';
import { vi } from 'element-plus/es/locale';
import { QuestionTypeEx_BindDdl_QuestionTypeIdInDiv_CacheEx } from '@/ts/L3ForWApiEx/SystemSet/clsQuestionTypeExWApi';
import { CurrEduClsStuEx_BindDdl_IdStuWithStuIdByIdCurrEduClsInDivExCache } from 'share-stu-study-base-lib';
import {
  CurrEduClsStuEx_AddId_Stu4EduCls,
  CurrEduClsStuEx_GetStuIDLstByIdCurrEduCls,
} from 'share-stu-study-base-lib';
import { CurrEduClsStuEx_GetStuIDLstByIdCurrEduClsType } from 'share-stu-study-base/src/types';

/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PassGame_KnowledgeMaster extends ge_KnowledgesUserMasterCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static divLayout: HTMLDivElement; //界面布局的层对象
  public static arrCheckQues: Array<clsCheck> = []; //已做答的题的集合
  public static gameLevelId_Static = '';
  public mstrCreditsTtlListDiv: string = 'divCreditsTtlDataLst'; //班级用户总分区域id；
  public mstrListUserMasterDiv: string = 'divDataUserMasterLst'; //列表区数据列表层id

  public static intQuestion = 0;
  public static arrQuestions_Curr: Array<clsQuestionnaireEN> = [];
  public static objQuestions_Curr: clsQuestionnaireEN;
  public static intActiveQuestion = 0; //当前操作的考题编号
  public divQuestionShow = 'divQuestionShow';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  public get examBatchNo() {
    const strExamBatchNo = PassGame_KnowledgeMaster.GetPropValue('examBatchNo');
    return strExamBatchNo;
  }
  public set examBatchNo(value) {
    PassGame_KnowledgeMaster.vuebtn_Click('SetExamBatchNo', value);
  }
  BindGv(strType: string, strPara: string) {
    //this.BindGv_vXzMajor();
    console.log('strType', strType);
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'default':
        //alert('该类没有绑定该函数：[this.BindGv_vXzMajor_Cache]！');
        //this.BindGv_vXzMajorCache();
        // router.push('/PassGame');
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vXzMajor':
        alert('该类没有绑定该函数：[this.BindGv_vXzMajor_Cache]！');
        //this.BindGv_vXzMajorCache();
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面

    try {
      //关卡数量
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: PassGame_KnowledgeMaster = new PassGame_KnowledgeMaster();
    console.log(strKeyId);

    switch (strCommandName) {
      case 'Query_Cls':
        objPage.btnQuery_Cls_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PassGame_KnowledgeMaster.btn_Click');

        break;
    }
  }
  //3排名；
  public async btnQuery_Cls_Click() {
    this.SetCurrPageIndex(1);
    await this.BindGv_ge_KnowledgesUserMaster4Func_Cls(divVarSet_V2.refDivList_Cls);
  }
  public async BindGv_ge_KnowledgesUserMaster4Func_Cls(divList: HTMLDivElement) {
    if (viewVarSet.sortge_KnowledgesUserMasterBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortge_KnowledgesUserMasterBy)为空，请检查！(In BindGv_ge_KnowledgesUserMaster_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    // const strListDiv: string = this.mstrListUserMasterDiv;
    const strWhereCond = await this.Combinege_KnowledgesUserMasterCondition_Cls();
    // objge_KnowledgesUserMaster_Cond.SetCondFldValue(
    //   clsge_KnowledgesUserMasterEN.con_CourseId,
    //   CourseId_Session.value,
    //   '=',
    // );

    //const intCurrPageIndex = this.getCurrPageIndex(this.divName4PagerTtl);//获取当前页
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_KnowledgesUserMasterObjLst: Array<clsge_KnowledgesUserMasterEN> = [];
    let arrge_KnowledgesUserMasterExObjLst: Array<clsge_KnowledgesUserMasterENEx> = [];
    try {
      this.recCount = await ge_KnowledgesUserMaster_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_KnowledgesUserMasterBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrge_KnowledgesUserMasterObjLst = await ge_KnowledgesUserMaster_GetObjLstByPagerAsync(
        objPagerPara,
      );

      arrge_KnowledgesUserMasterExObjLst = arrge_KnowledgesUserMasterObjLst.map(
        this.CopyToUserMaterEx,
      );
      for (const objInFor of arrge_KnowledgesUserMasterExObjLst) {
        const conFuncMap = await this.FuncMapUserMater(objInFor);
      }
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    //if (arrge_KnowledgesUserMasterObjLst.length == 0) {
    //    const strKey: string = `${clsge_KnowledgesUserMasterEN._CurrTabName}_${CourseId_Session.value}`;
    //    const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
    //    console.error("Error: ", strMsg);
    //    //console.trace();
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_ge_KnowledgesUserMaster4Func_Cls(divList, arrge_KnowledgesUserMasterExObjLst);
      console.log('完成BindGv_ge_KnowledgesUserMaster4Func!');
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async BindTab_ge_KnowledgesUserMaster4Func_Cls(
    divContainer: HTMLDivElement,
    arrge_KnowledgesUserMasterExObjLst: Array<clsge_KnowledgesUserMasterENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_KnowledgesUserMaster4Func_Cls.name;

    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    await BindTab_Cls(divDataLst, arrge_KnowledgesUserMasterExObjLst);
    this.objPager.isShowInputPage = false;
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /* 显示ge_KnowledgesUserMaster对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
 <param name = "divContainer">显示容器</param>
 <param name = "arrge_KnowledgesUserMasterExObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_ge_KnowledgesUserMaster4Func(
    divContainer: HTMLDivElement,
    arrge_KnowledgesUserMasterExObjLst: Array<clsge_KnowledgesUserMasterENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_KnowledgesUserMaster4Func.name;

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
        fldName: 'knowledgeName',
        sortBy: 'knowledgeName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '知识点名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      //{
      //    fldName: "userId",
      //    sortBy: "userId",
      //    colHeader: "用户ID",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 3,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "courseName",
      //    sortBy: "courseName",
      //    colHeader: "课程名称",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 4,
      //    funcName: () => { }
      //},
      {
        fldName: 'masterLevelName',
        sortBy: 'masterLevelName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '掌握等级',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: 'masterTypeName',
        sortBy: 'masterTypeName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '掌握类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: clsge_KnowledgesUserMasterENEx.con_RightCount,
        sortBy: clsge_KnowledgesUserMasterENEx.con_RightCount,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '正确次数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
      {
        fldName: clsge_KnowledgesUserMasterENEx.con_ErrorCount,
        sortBy: clsge_KnowledgesUserMasterENEx.con_ErrorCount,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '错误次数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: () => {},
      },
      {
        fldName: clsge_KnowledgesUserMasterENEx.con_MasteryValue,
        sortBy: clsge_KnowledgesUserMasterENEx.con_MasteryValue,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '掌握度',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
      //{
      //    fldName: "updDate",
      //    sortBy: "updDate",
      //    colHeader: "修改日期",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 10,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "updUser",
      //    sortBy: "updUser",
      //    colHeader: "修改人",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 11,
      //    funcName: () => { }
      //},
    ];
    await BindTab(divDataLst, arrge_KnowledgesUserMasterExObjLst, arrDataColumn, 'mId', this);
    this.objPager.isShowInputPage = false;
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objge_KnowledgesUserMasterS">源对象</param>
  public async FuncMapUserMater(objge_KnowledgesUserMaster: clsge_KnowledgesUserMasterENEx) {
    try {
      //{
      //    const cc_Course_CourseId = objge_KnowledgesUserMaster.courseId;
      //    const cc_Course_CourseName = await cc_Course_func(clscc_CourseEN.con_CourseId, clscc_CourseEN.con_CourseName, cc_Course_CourseId);
      //    objge_KnowledgesUserMaster.courseName = cc_Course_CourseName;
      //};
      {
        const KnowledgeMasterType_MasterTypeId = objge_KnowledgesUserMaster.masterTypeId;
        const KnowledgeMasterType_MasterTypeName = await KnowledgeMasterType_func(
          clsKnowledgeMasterTypeEN.con_MasterTypeId,
          clsKnowledgeMasterTypeEN.con_MasterTypeName,
          KnowledgeMasterType_MasterTypeId,
        );
        objge_KnowledgesUserMaster.masterTypeName = KnowledgeMasterType_MasterTypeName;
      }
      {
        // const ge_KnowledgesUserMaster_MasterLevelId = await ge_KnowledgesUserMaster_func(clsge_KnowledgesUserMasterEN.con_mId, clsge_KnowledgesUserMasterEN.con_StructureNodeId, ge_KnowledgesUserMaster_mId , objge_KnowledgesUserMaster.courseId);
        const KnowledgeMasterLevel_MasterLevelId = objge_KnowledgesUserMaster.masterLevelId;
        const KnowledgeMasterLevel_MasterLevelName = await KnowledgeMasterLevel_func(
          clsKnowledgeMasterLevelEN.con_MasterLevelId,
          clsKnowledgeMasterLevelEN.con_MasterLevelName,
          KnowledgeMasterLevel_MasterLevelId,
        );
        objge_KnowledgesUserMaster.masterLevelName = KnowledgeMasterLevel_MasterLevelName;
      }
      {
        //const ge_KnowledgesUserMaster_CourseKnowledgeId = await ge_KnowledgesUserMaster_func(clsge_KnowledgesUserMasterEN.con_mId, clsge_KnowledgesUserMasterEN.con_StructureSectionId, ge_KnowledgesUserMaster_mId , objge_KnowledgesUserMaster.courseId);
        const cc_CourseKnowledges_CourseKnowledgeId = objge_KnowledgesUserMaster.courseKnowledgeId;
        const cc_CourseKnowledges_KnowledgeName = await cc_CourseKnowledges_func(
          clscc_CourseKnowledgesEN.con_CourseKnowledgeId,
          clscc_CourseKnowledgesEN.con_KnowledgeName,
          cc_CourseKnowledges_CourseKnowledgeId,
          objge_KnowledgesUserMaster.courseId,
        );
        objge_KnowledgesUserMaster.knowledgeName = cc_CourseKnowledges_KnowledgeName;
      }
    } catch (e) {
      const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public Combinege_KnowledgesUserMasterConditionObj_ClsBak(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (
        qryVarSet_KnowledgeMaster.masterLevelId_q_Cls != '' &&
        qryVarSet_KnowledgeMaster.masterLevelId_q_Cls != '0'
      ) {
        strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_MasterLevelId} = '${qryVarSet_KnowledgeMaster.masterLevelId_q_Cls}'`;
        // objge_KnowledgesUserMaster_Cond.SetCondFldValue(
        //   clsge_KnowledgesUserMasterEN.con_MasterLevelId,
        //   qryVarSet.masterLevelId_q_Cls,
        //   '=',
        // );
      }
      //得到当前用户的掌握度
      // if (this.isForCls == 'false') {
      //   strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_UserId} = '${strUserId}'`;
      //   objge_KnowledgesUserMaster_Cond.SetCondFldValue(
      //     clsge_KnowledgesUserMasterEN.con_UserId,
      //     strUserId,
      //     '=',
      //   );
      // }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinege_KnowledgesUserMasterConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    // objge_KnowledgesUserMaster_Cond.whereCond = strWhereCond;
    return strWhereCond;
  }

  public async Combinege_KnowledgesUserMasterCondition_Cls(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    let arrStuId: Array<string> = await CurrEduClsStuEx_GetStuIDLstByIdCurrEduCls(
      clsPubLocalStorage.idCurrEduCls,
    );
    arrStuId = arrStuId.map((item) => `'${item}'`);
    const arrUserIdLst = arrStuId.join(',');
    strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_UserId} in (${arrUserIdLst})`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (
        qryVarSet_KnowledgeMaster.masterLevelId_q_Cls != '' &&
        qryVarSet_KnowledgeMaster.masterLevelId_q_Cls != '0'
      ) {
        strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_MasterLevelId} = '${qryVarSet_KnowledgeMaster.masterLevelId_q_Cls}'`;
        // objge_KnowledgesUserMaster_Cond.SetCondFldValue(
        //   clsge_KnowledgesUserMasterEN.con_MasterLevelId,
        //   qryVarSet.masterLevelId_q_Cls,
        //   '=',
        // );
      }
      //得到当前用户的掌握度
      // if (this.isForCls == 'false') {
      //   strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_UserId} = '${strUserId}'`;
      //   objge_KnowledgesUserMaster_Cond.SetCondFldValue(
      //     clsge_KnowledgesUserMasterEN.con_UserId,
      //     strUserId,
      //     '=',
      //   );
      // }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinege_KnowledgesUserMasterConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    // objge_KnowledgesUserMaster_Cond.whereCond = strWhereCond;
    return strWhereCond;
  }
  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objge_KnowledgesUserMasterENS">源对象</param>
  /// <returns>目标对象=>clsge_KnowledgesUserMasterEN:objge_KnowledgesUserMasterENT</returns>
  public CopyToUserMaterEx(
    objge_KnowledgesUserMasterENS: clsge_KnowledgesUserMasterEN,
  ): clsge_KnowledgesUserMasterENEx {
    const objge_KnowledgesUserMasterENT = new clsge_KnowledgesUserMasterENEx();
    try {
      ge_KnowledgesUserMaster_CopyObjTo(
        objge_KnowledgesUserMasterENS,
        objge_KnowledgesUserMasterENT,
      );
      return objge_KnowledgesUserMasterENT;
    } catch (e) {
      const strMsg: string = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objge_KnowledgesUserMasterENT;
    }
  }
  public get isForCls() {
    const strIsForCls = PassGame_KnowledgeMaster.GetPropValue('isForCls');
    return strIsForCls;
  }

  public async getUserMasterKnowledge(): Promise<Array<clsDimensions> | null> {
    try {
      const userStore = useUserStore();
      const arrDimension = await ge_KnowledgesUserMasterEx_getUserMasterKnowledge(
        clsPubLocalStorage.courseId,
        userStore.userId,
      );
      return arrDimension;
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return null;
    }
  }

  public async getUserMasterKnowledgeByIdStudentInfo(
    strIdStudentInfo: string,
  ): Promise<Array<clsDimensions> | null> {
    try {
      const studentInfoStore = useStudentInfoStore();
      const strStuId = await studentInfoStore.getStuId(strIdStudentInfo);
      const arrDimension = await ge_KnowledgesUserMasterEx_getUserMasterKnowledge(
        clsPubLocalStorage.courseId,
        strStuId,
      );
      return arrDimension;
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return null;
    }
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_ge_KnowledgesUserMaster4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ge_KnowledgesUserMaster4Func.name;
    if (divList == null) {
      const strMsg = Format(
        '用于显示列表的div为空,请检查!(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    this.listPara.listDiv = divList;
    if (viewVarSet.sortge_KnowledgesUserMasterBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortge_KnowledgesUserMasterBy)为空,请检查!(In BindGv_ge_KnowledgesUserMasterCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await this.Combinege_KnowledgesUserMasterCondition_User();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_KnowledgesUserMasterExObjLst: Array<clsge_KnowledgesUserMasterENEx> = [];
    try {
      this.recCount = await ge_KnowledgesUserMaster_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        BindTabByList(arrge_KnowledgesUserMasterExObjLst, true);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_KnowledgesUserMasterBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrge_KnowledgesUserMasterExObjLst = await ge_KnowledgesUserMasterEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrge_KnowledgesUserMasterExObjLst.length == 0) {
      const strKey = Format('{0}', clsge_KnowledgesUserMasterEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ge_KnowledgesUserMaster4Func(divList, arrge_KnowledgesUserMasterExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   */
  public async BindGv_ge_KnowledgesUserMaster4FuncBak(divList: HTMLDivElement) {
    if (viewVarSet.sortge_KnowledgesUserMasterBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortge_KnowledgesUserMasterBy)为空，请检查！(In BindGv_ge_KnowledgesUserMaster_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strListDiv: string = this.mstrListUserMasterDiv;
    const strWhereCond = await Combinege_KnowledgesUserMasterCondition();
    // objge_KnowledgesUserMaster_Cond.SetCondFldValue(
    //   clsge_KnowledgesUserMasterEN.con_CourseId,
    //   CourseId_Session.value,
    //   '=',
    // );
    // const strWhereCond = JSON.stringify(objge_KnowledgesUserMaster_Cond);
    //const intCurrPageIndex = this.getCurrPageIndex(this.divName4PagerTtl);//获取当前页
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_KnowledgesUserMasterObjLst: Array<clsge_KnowledgesUserMasterEN> = [];
    let arrge_KnowledgesUserMasterExObjLst: Array<clsge_KnowledgesUserMasterENEx> = [];
    try {
      this.recCount = await ge_KnowledgesUserMaster_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_KnowledgesUserMasterBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrge_KnowledgesUserMasterObjLst = await ge_KnowledgesUserMaster_GetObjLstByPagerAsync(
        objPagerPara,
      );

      arrge_KnowledgesUserMasterExObjLst = arrge_KnowledgesUserMasterObjLst.map(
        this.CopyToUserMaterEx,
      );
      for (const objInFor of arrge_KnowledgesUserMasterExObjLst) {
        const conFuncMap = await this.FuncMapUserMater(objInFor);
      }
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    //if (arrge_KnowledgesUserMasterObjLst.length == 0) {
    //    const strKey: string = `${clsge_KnowledgesUserMasterEN._CurrTabName}_${CourseId_Session.value}`;
    //    const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
    //    console.error("Error: ", strMsg);
    //    //console.trace();
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_ge_KnowledgesUserMaster4Func(divList, arrge_KnowledgesUserMasterExObjLst);
      console.log('完成BindGv_ge_KnowledgesUserMaster4Func!');
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async UserMaterMsgBak(strKey: string) {
    if (strKey == '6') {
      await this.SetDdl_MasterLevelId(); //查询区域
      await this.SetDdl_MasterLevelId_Cls();
      await this.SetDdl_QuestionTypeIdInDiv();
      await this.SetDdl_QuestionTypeIdInDiv_Cls();
      await this.SetDdl_IdStuByIdCurrEduClsInDiv();
      //列表
      await this.BindGv_ge_KnowledgesUserMaster4FuncBak(this.thisDivList);
    }
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[masterLevelId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion)
  /// </summary>
  public async SetDdl_MasterLevelId() {
    await KnowledgeMasterLevel_BindDdl_MasterLevelIdInDivCache(
      this.thisDivLayout,
      'ddlMasterLevelId_q',
    ); //查询区域
  }
  public async SetDdl_MasterLevelId_Cls() {
    await KnowledgeMasterLevel_BindDdl_MasterLevelIdInDivCache(
      this.thisDivLayout,
      'ddlMasterLevelId_q_Cls',
    ); //查询区域
  }

  public async SetDdl_QuestionTypeIdInDiv() {
    await QuestionTypeEx_BindDdl_QuestionTypeIdInDiv_CacheEx(
      this.thisDivLayout,
      'ddlQuestionTypeId_q',
    ); //查询区域
  }

  public async SetDdl_QuestionTypeIdInDiv_Cls() {
    await QuestionTypeEx_BindDdl_QuestionTypeIdInDiv_CacheEx(
      this.thisDivLayout,
      'ddlQuestionTypeId_q_Cls',
    ); //查询区域
  }

  public async SetDdl_IdStuByIdCurrEduClsInDiv() {
    await CurrEduClsStuEx_BindDdl_IdStuWithStuIdByIdCurrEduClsInDivExCache(
      this.thisDivLayout,
      'ddlIdStu_q',
      clsPubLocalStorage.idCurrEduCls,
    ); //查询区域
  }
  /* 根据条件获取相应的对象列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async btnQuery_ClickBak() {
    this.SetCurrPageIndex(1);
    await this.BindGv_ge_KnowledgesUserMaster4FuncBak(this.thisDivList);
  }
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
 <returns>条件串(strWhereCond)</returns>
*/
  public Combinege_KnowledgesUserMasterConditionObj(): clsge_KnowledgesUserMasterEN {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    const strCourseId = clsPubLocalStorage.courseId;
    const objge_KnowledgesUserMaster_Cond: clsge_KnowledgesUserMasterEN =
      new clsge_KnowledgesUserMasterEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (qryVarSet.masterLevelId_q != '' && qryVarSet.masterLevelId_q != '0') {
        strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_MasterLevelId} = '${qryVarSet.masterLevelId_q}'`;
        objge_KnowledgesUserMaster_Cond.SetCondFldValue(
          clsge_KnowledgesUserMasterEN.con_MasterLevelId,
          qryVarSet.masterLevelId_q,
          '=',
        );
      }
      //得到当前用户的掌握度
      // if (this.isForCls == 'false') {
      strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_UserId} = '${strUserId}'`;
      objge_KnowledgesUserMaster_Cond.SetCondFldValue(
        clsge_KnowledgesUserMasterEN.con_UserId,
        strUserId,
        '=',
      );
      // }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinege_KnowledgesUserMasterConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objge_KnowledgesUserMaster_Cond.whereCond = strWhereCond;
    return objge_KnowledgesUserMaster_Cond;
  }

  public Combinege_KnowledgesUserMasterCondition_User(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    let strWhereCond: string = ' 1 = 1 ';
    strWhereCond += ` and ${clsge_KnowledgesUserMasterEN.con_UserId} = '${strUserId}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (
        qryVarSet_KnowledgeMaster.masterLevelId_q_Cls != '' &&
        qryVarSet_KnowledgeMaster.masterLevelId_q_Cls != '0'
      ) {
        strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_MasterLevelId} = '${qryVarSet_KnowledgeMaster.masterLevelId_q_Cls}'`;
        // objge_KnowledgesUserMaster_Cond.SetCondFldValue(
        //   clsge_KnowledgesUserMasterEN.con_MasterLevelId,
        //   qryVarSet.masterLevelId_q_Cls,
        //   '=',
        // );
      }
      //得到当前用户的掌握度
      // if (this.isForCls == 'false') {
      //   strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_UserId} = '${strUserId}'`;
      //   objge_KnowledgesUserMaster_Cond.SetCondFldValue(
      //     clsge_KnowledgesUserMasterEN.con_UserId,
      //     strUserId,
      //     '=',
      //   );
      // }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinege_KnowledgesUserMasterConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    // objge_KnowledgesUserMaster_Cond.whereCond = strWhereCond;
    return strWhereCond;
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'knowledgeName|Ex':
        viewVarSet.sortge_KnowledgesUserMasterBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'courseName|Ex':
        viewVarSet.sortge_KnowledgesUserMasterBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'masterLevelName|Ex':
        viewVarSet.sortge_KnowledgesUserMasterBy = `KnowledgeMasterLevel|masterLevelName ${sortDirection}|ge_KnowledgesUserMaster.MasterLevelId = KnowledgeMasterLevel.MasterLevelId`;
        break;
      case 'masterTypeName|Ex':
        viewVarSet.sortge_KnowledgesUserMasterBy = `KnowledgeMasterType|masterTypeName ${sortDirection}|ge_KnowledgesUserMaster.MasterTypeId = KnowledgeMasterType.MasterTypeId`;
        break;
      default:
        viewVarSet.sortge_KnowledgesUserMasterBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_KnowledgesUserMaster4Func(this.thisDivList);
  }
}
