/**
 * 类名:ge_GameLevelCRUDEx(界面:ge_GameLevelCRUD)
 * 表名:ge_GameLevel(01120904)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/08 12:05:27
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_界面后台Ex_TS(TS)(WA_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
import $ from 'jquery';
import { ge_GameLevelCRUD } from '@/viewsBase/Knowledges/ge_GameLevelCRUD';
import ge_GameLevel_EditEx from './ge_GameLevel_EditEx';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetButtonObjLstInDivObjN,
  GetCheckedKeyIdsInDiv,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import {
  ge_GameLevel_AddNewRecordAsync,
  ge_GameLevel_DelRecordAsync,
  ge_GameLevel_Delge_GameLevelsAsync,
  ge_GameLevel_DownMoveAsync,
  ge_GameLevel_GetMaxStrIdAsync,
  ge_GameLevel_GetObjLstByGameLevelIdLstAsync,
  ge_GameLevel_GetRecCountByCondCache,
  ge_GameLevel_GoBottomAsync,
  ge_GameLevel_GoTopAsync,
  ge_GameLevel_ReFreshCache,
  ge_GameLevel_ReOrderAsync,
  ge_GameLevel_UpMoveAsync,
} from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { ge_GameLevel_Edit } from '@/viewsBase/Knowledges/ge_GameLevel_Edit';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsge_GameLevelENEx } from '@/ts/L0Entity/Knowledges/clsge_GameLevelENEx';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
import { ge_DifficultyLevel_func } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
import { QuestionType_func } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
import { ge_LevelModeType_func } from '@/ts/L3ForWApi/Knowledges/clsge_LevelModeTypeWApi';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { BindTab, SetCkechedItem4KeyIdInDivObj, confirm_del } from '@/ts/PubFun/clsCommFunc4Web';
import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
import {
  ge_GameLevelChapterRelaEx_AddNewRecordEx,
  ge_GameLevelChapterRelaEx_DelRecordEx,
} from '@/ts/L3ForWApiEx/GameLearn/clsge_GameLevelChapterRelaExWApi';
import {
  ge_GameLevelChapterRela_CheckPropertyNew,
  ge_GameLevelChapterRela_Delge_GameLevelChapterRelasByCondAsync,
  ge_GameLevelChapterRela_GetFirstObjAsync,
  ge_GameLevelChapterRela_GetObjLstAsync,
} from '@/ts/L3ForWApi/GameLearn/clsge_GameLevelChapterRelaWApi';
import {
  cc_CourseChapter_CopyObjTo,
  cc_CourseChapter_GetObjLstByPagerCache,
  cc_CourseChapter_GetRecCountByCondCache,
  cc_CourseChapter_func,
} from 'share-stu-study-base-lib';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { message } from '@/utils/myMessage';
import { clscc_CourseChapterENEx } from 'share-stu-study-base-lib';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsge_GameLevelChapterRelaEN } from '@/ts/L0Entity/GameLearn/clsge_GameLevelChapterRelaEN';
import { useUserStore } from '@/store/modulesShare/user';
import { ge_GameLevelEx_GetObjExLstByPagerCache } from '@/ts/L3ForWApiEx/Knowledges/clsge_GameLevelExWApi';
import { clsPager } from '@/ts/PubFun/clsPager';
import {
  divVarSet,
  viewVarSet,
  CourseId_Session,
  qryVarSet,
} from '@/views/Knowledges/ge_GameLevelVueShare';
//import $ from "jquery";
/** ge_GameLevelCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class ge_GameLevelCRUDEx extends ge_GameLevelCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static divList_Chapter: HTMLDivElement; //列表区的层对象
  public static keyId_Static = '';
  public mstrListDivChapter = '';
  public static gameLevelId_Sel = '';
  public objPager_Chapter: clsPager;

  constructor() {
    super();
    this.objPager_Chapter = new clsPager(this);
  }

  /**
   * 获取当前组件的divList的层对象
   **/
  public get thisDivList_Chapter(): HTMLDivElement {
    return ge_GameLevelCRUDEx.divList_Chapter;
  }
  /**
   * 每页记录数，在扩展类可以修改
   **/
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
    ge_GameLevel_ReFreshCache(clsPubLocalStorage.courseId);
    this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'ge_GameLevel':
        // alert('该类没有绑定该函数：[this.BindGv_ge_GameLevel4Func]！');
        this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
        break;
      default:
        const strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
 */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      this.InitVarSet();

      CourseId_Session.value = clsPubLocalStorage.courseId;

      this.InitCtlVar();
      this.hidSortcc_CourseChapterBy = 'courseChapterId Asc';
      viewVarSet.sortge_GameLevelBy = 'orderNum Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
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
  public async Combinege_GameLevelConditionObj(): Promise<clsge_GameLevelEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    const objge_GameLevel_Cond = new clsge_GameLevelEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (qryVarSet.gameLevelName_q != '') {
        strWhereCond += ` And ${clsge_GameLevelEN.con_GameLevelName} like '% ${qryVarSet.gameLevelName_q}%'`;
        objge_GameLevel_Cond.SetCondFldValue(
          clsge_GameLevelEN.con_GameLevelName,
          qryVarSet.gameLevelName_q,
          'like',
        );
      }
      if (qryVarSet.difficultyLevelId_q != '' && qryVarSet.difficultyLevelId_q != '0') {
        strWhereCond += ` And ${clsge_GameLevelEN.con_DifficultyLevelId} = '${qryVarSet.difficultyLevelId_q}'`;
        objge_GameLevel_Cond.SetCondFldValue(
          clsge_GameLevelEN.con_DifficultyLevelId,
          qryVarSet.difficultyLevelId_q,
          '=',
        );
      }
      if (qryVarSet.questionTypeId_q != '' && qryVarSet.questionTypeId_q != '0') {
        strWhereCond += ` And ${clsge_GameLevelEN.con_QuestionTypeId} = '${qryVarSet.questionTypeId_q}'`;
        objge_GameLevel_Cond.SetCondFldValue(
          clsge_GameLevelEN.con_QuestionTypeId,
          qryVarSet.questionTypeId_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinege_GameLevelConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objge_GameLevel_Cond.whereCond = strWhereCond;
    return objge_GameLevel_Cond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
*/
  public async BindGv_ge_GameLevel4Func(divList: HTMLDivElement) {
    if (viewVarSet.sortge_GameLevelBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortge_GameLevelBy)为空，请检查！(In BindGv_ge_GameLevel_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objge_GameLevel_Cond = await this.Combinege_GameLevelConditionObj();
    objge_GameLevel_Cond.SetCondFldValue(
      clsge_GameLevelEN.con_CourseId,
      CourseId_Session.value,
      '=',
    );
    const strWhereCond = JSON.stringify(objge_GameLevel_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrge_GameLevelExObjLst: Array<clsge_GameLevelENEx> = [];
    try {
      this.recCount = await ge_GameLevel_GetRecCountByCondCache(
        objge_GameLevel_Cond,
        CourseId_Session.value,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_GameLevelBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrge_GameLevelExObjLst = await ge_GameLevelEx_GetObjExLstByPagerCache(
        objPagerPara,
        CourseId_Session.value,
      );
      //arrge_GameLevelExObjLst = arrge_GameLevelObjLst.map(this.CopyToEx);
      //for (const objInFor of arrge_GameLevelExObjLst) {
      //    const conFuncMap = await this.FuncMap(objInFor);
      //}
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrge_GameLevelExObjLst.length == 0) {
      const strKey: string = `${clsge_GameLevelEN._CurrTabName}_${CourseId_Session.value}`;
      const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_ge_GameLevel4Func(divList, arrge_GameLevelExObjLst);
      console.log('完成BindGv_ge_GameLevel4Func!');
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
  /// <param name = "objge_GameLevelS">源对象</param>
  public async FuncMap(objge_GameLevel: clsge_GameLevelENEx) {
    try {
      //{
      //    const CurrEduCls_id_CurrEduCls = objge_GameLevel.idCurrEduCls;
      //    const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(clsCurrEduClsEN.con_IdCurrEduCls, clsCurrEduClsEN.con_EduClsName, CurrEduCls_id_CurrEduCls);
      //    objge_GameLevel.eduClsName = CurrEduCls_EduClsName;
      //};
      //{
      //    const cc_Course_CourseId = objge_GameLevel.courseId;
      //    const cc_Course_CourseName = await cc_Course_func(clscc_CourseEN.con_CourseId, clscc_CourseEN.con_CourseName, cc_Course_CourseId);
      //    objge_GameLevel.courseName = cc_Course_CourseName;
      //};
      {
        const ge_DifficultyLevel_DifficultyLevelId = objge_GameLevel.difficultyLevelId;
        const ge_DifficultyLevel_DifficultyLevelName = await ge_DifficultyLevel_func(
          clsge_DifficultyLevelEN.con_DifficultyLevelId,
          clsge_DifficultyLevelEN.con_DifficultyLevelName,
          ge_DifficultyLevel_DifficultyLevelId,
        );
        objge_GameLevel.difficultyLevelName = ge_DifficultyLevel_DifficultyLevelName;
      }
      {
        const QuestionType_QuestionTypeId = objge_GameLevel.questionTypeId;
        const QuestionType_QuestionTypeName = await QuestionType_func(
          clsQuestionTypeEN.con_QuestionTypeId,
          clsQuestionTypeEN.con_QuestionTypeName,
          QuestionType_QuestionTypeId,
        );
        objge_GameLevel.questionTypeName = QuestionType_QuestionTypeName;
      }
      {
        const ge_LevelModeType_LevelModeTypeId = objge_GameLevel.levelModeTypeId;
        const ge_LevelModeType_LevelModeTypeName = await ge_LevelModeType_func(
          clsge_LevelModeTypeEN.con_LevelModeTypeId,
          clsge_LevelModeTypeEN.con_LevelModeTypeName,
          ge_LevelModeType_LevelModeTypeId,
        );
        objge_GameLevel.levelModeTypeName = ge_LevelModeType_LevelModeTypeName;
      }

      {
        //相关章节

        //获取问题检查的对象列表数据源
        //获取标准表的数据源
        const strCourseId = clsPubLocalStorage.courseId;

        const strWhere =
          "gameLevelId='" + objge_GameLevel.gameLevelId + "' And  courseId='" + strCourseId + "'";
        const arrge_GameLevelChapterRelaObjLst = await ge_GameLevelChapterRela_GetObjLstAsync(
          strWhere,
        );

        if (arrge_GameLevelChapterRelaObjLst.length > 0) {
          for (let i = 0; i < arrge_GameLevelChapterRelaObjLst.length; i++) {
            const cc_CourseChapter_CourseChapterId =
              arrge_GameLevelChapterRelaObjLst[i].courseChapterId;
            const cc_CourseChapter_ChapterName = await cc_CourseChapter_func(
              clscc_CourseChapterEN.con_CourseChapterId,
              clscc_CourseChapterEN.con_ChapterName,
              cc_CourseChapter_CourseChapterId,
              strCourseId,
            );
            objge_GameLevel.chapterNameName +=
              cc_CourseChapter_ChapterName +
              '(' +
              arrge_GameLevelChapterRelaObjLst[i].questionNum +
              '),';
          }
        }

        //const ge_GameLevelId = objge_GameLevel.gameLevelId;
        //const ge_LevelModeType_LevelModeTypeName = await ge_LevelModeType_func(clsge_LevelModeTypeEN.con_LevelModeTypeId, clsge_LevelModeTypeEN.con_LevelModeTypeName, ge_LevelModeType_LevelModeTypeId);
        //objge_GameLevel.chapterNameName = ge_LevelModeType_LevelModeTypeName;
      }
    } catch (e) {
      const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 显示ge_GameLevel对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
 <param name = "divContainer">显示容器</param>
 <param name = "arrge_GameLevelExObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_ge_GameLevel4Func(
    divContainer: HTMLDivElement,
    arrge_GameLevelExObjLst: Array<clsge_GameLevelENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_GameLevel4Func.name;
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
        colHeader: '排序',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
      {
        fldName: 'gameLevelName',
        sortBy: 'gameLevelName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '关卡',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: clsge_GameLevelENEx.con_ChapterNamesEx,
        sortBy: clsge_GameLevelENEx.con_ChapterNamesEx,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '章节',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      //{
      //    fldName: "eduClsName",
      //    sortBy: "eduClsName",
      //    colHeader: "教学班名称",
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
        fldName: 'difficultyLevelName',
        sortBy: 'difficultyLevelName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '难度',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: 'levelModeTypeName',
        sortBy: 'levelModeTypeName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '模式',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: 'questionTypeName',
        sortBy: 'questionTypeName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '题目类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
      {
        fldName: clsge_GameLevelEN.con_IsRecommend,
        sortBy: clsge_GameLevelEN.con_IsRecommend,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '推荐?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Icon',
        orderNum: 7,
        funcName: () => {},
      },
      {
        fldName: clsge_GameLevelEN.con_StartTime,
        sortBy: clsge_GameLevelEN.con_StartTime,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '开始日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
      {
        fldName: clsge_GameLevelEN.con_EndTime,
        sortBy: clsge_GameLevelEN.con_EndTime,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '结束日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
      {
        fldName: 'inUse',
        sortBy: 'inUse',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '是否在用',
        text: '',
        tdClass: 'text-left',
        columnType: 'Icon',
        orderNum: 8,
        funcName: () => {},
      },

      {
        fldName: clsge_GameLevelEN.con_QuestionNum,
        sortBy: clsge_GameLevelEN.con_QuestionNum,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '题目数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: () => {},
      },
      {
        fldName: 'questionScore',
        sortBy: 'questionScore',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '题目分',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: () => {},
      },
      {
        fldName: 'updDate',
        sortBy: 'updDate',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: () => {},
      },
      {
        fldName: 'updUser',
        sortBy: 'updUser',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: () => {},
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrge_GameLevelExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(divDataLst, arrge_GameLevelExObjLst, arrDataColumn, 'gameLevelId', this);
    this.SetEventForDel();
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /* 根据关键字列表删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
*/
  public async DelMultiRecord(arrGameLevelId: Array<string>) {
    try {
      const responseText = await ge_GameLevel_Delge_GameLevelsAsync(arrGameLevelId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        ge_GameLevel_ReFreshCache(CourseId_Session.value);
        const strInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo: string = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e) {
      const strMsg: string = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 
根据关键字删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecord(strGameLevelId: string) {
    try {
      const responseText = await ge_GameLevel_DelRecordAsync(strGameLevelId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        ge_GameLevel_ReFreshCache(CourseId_Session.value);
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
      const strMsg: string = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: ge_GameLevelCRUDEx;
    if (ge_GameLevelCRUD.objPageCRUD == null) {
      ge_GameLevelCRUD.objPageCRUD = new ge_GameLevelCRUDEx();
      objPage = <ge_GameLevelCRUDEx>ge_GameLevelCRUD.objPageCRUD;
    } else {
      objPage = <ge_GameLevelCRUDEx>ge_GameLevelCRUD.objPageCRUD;
    }
    const objPageEdit: ge_GameLevel_EditEx = new ge_GameLevel_EditEx(
      'ge_GameLevel_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    let strMsg = '';
    switch (strCommandName) {
      case 'DelChapter': //查询记录
        objPage.btnDelChapter_Click(strKeyId);
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecord_Click();
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
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
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
        if (confirm_del(arrKeyIds.length) == false) {
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
        objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        objPage.btnReOrder_Click();
        break;
      case 'AddChapter': //添加章节关系
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要添加章节的关卡！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        objPage.btnAddNewChapter(strKeyId);
        break;

      default:
        strMsg = '命令:' + strCommandName + '在函数(ge_GameLevelCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
  public async btnDelChapter_Click(objData: any) {
    try {
      console.error(objData);

      // let arrStr = strMyPara.split('|');

      const strGameLevelId = objData.gameLevelId;
      const strCourseChapterId = objData.courseChapterId;

      //删除关系表；
      //const strWhereCond = Format(" gameLevelId ='{0}' and {1} = '{2}'", strGameLevelId,
      //    clsge_GameLevelChapterRelaEN.con_CourseChapterId, strCourseChapterId);
      const intCount = await ge_GameLevelChapterRelaEx_DelRecordEx(
        strGameLevelId,
        strCourseChapterId,
      );
      if (intCount > 0) {
        console.log('删除成功');

        ge_GameLevel_ReFreshCache(clsPubLocalStorage.courseId);
      } else {
        console.error('删除失败');
        alert('删除失败');
        return;
      }

      await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
*/
  public async btnDelRecord_Click() {
    try {
      const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(arrKeyIds.length) == false) {
        return;
      }

      //删除之前先删除关系表数据
      let strKeyList;
      if (arrKeyIds.length == 0) return '';
      strKeyList = '';
      for (let i = 0; i < arrKeyIds.length; i++) {
        //组合数据主键
        if (i == 0) strKeyList = strKeyList + "'" + arrKeyIds[i].toString() + "'";
        else strKeyList += ',' + "'" + arrKeyIds[i].toString() + "'";
      }
      //删除关系表；
      const strWhereCond = ' gameLevelId in (' + strKeyList + ')';
      const intCount = await ge_GameLevelChapterRela_Delge_GameLevelChapterRelasByCondAsync(
        strWhereCond,
      );
      if (intCount > 0) {
        console.log('删除成功');
      } else {
        console.error('删除失败');
      }

      const responseText = await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
   重序
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
   */
  public async btnReOrder_Click() {
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = CourseId_Session.value;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        courseId: strCourseId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await ge_GameLevel_ReOrderAsync(objOrderByData);
      ge_GameLevel_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `重序出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    message.success('已重序');
    await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
  }

  /*
    置底
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
    */
  public async btnGoBottum_Click() {
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = CourseId_Session.value;
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置底的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        courseId: strCourseId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await ge_GameLevel_GoBottomAsync(objOrderByData);
      ge_GameLevel_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `置底出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    message.success('已置底');
    await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCkechedItem4KeyIdInDivObj(divDataLst, e));
  }

  /*
    移动记录序号时的预检查函数
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
    */
  public PreCheck4Order(): boolean {
    const strCourseId: string = CourseId_Session.value;
    if (strCourseId == '') {
      const strMsg = `请输入courseId!`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return false;
    }
    return true;
  }

  /*
    下移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
    */
  public async btnDownMove_Click() {
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = CourseId_Session.value;
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要下移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        courseId: strCourseId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await ge_GameLevel_DownMoveAsync(objOrderByData);
      ge_GameLevel_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `下移记录出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    message.success('已下移');
    await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCkechedItem4KeyIdInDivObj(divDataLst, e));
  }

  /*
    上移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
    */
  public async btnUpMove_Click() {
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = CourseId_Session.value;
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要上移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        courseId: strCourseId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await ge_GameLevel_UpMoveAsync(objOrderByData);
      ge_GameLevel_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `上移记录出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    message.success('已上移');
    await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCkechedItem4KeyIdInDivObj(divDataLst, e));
  }

  /* 置顶
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
    */
  public async btnGoTop_Click() {
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = CourseId_Session.value;
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置顶的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        courseId: strCourseId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await ge_GameLevel_GoTopAsync(objOrderByData);
      ge_GameLevel_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `置顶出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    message.success('已置顶');
    await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCkechedItem4KeyIdInDivObj(divDataLst, e));
  }

  //-----------------------------------------------章节

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
 <returns>条件串(strWhereCond)</returns>
*/
  public Combinecc_CourseChapterConditionObj(): clscc_CourseChapterEN_T {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strWhereCond: string = ' 1 = 1 ';
    const objcc_CourseChapter_Cond = new clscc_CourseChapterEN();
    objcc_CourseChapter_Cond.SetCondFldValue(
      clscc_CourseChapterEN.con_CourseId,
      clsPubLocalStorage.courseId,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.CourseChapterName_q != "") {
      //    strWhereCond += ` And ${clscc_CourseChapterEN.con_CourseChapterName} like '% ${this.CourseChapterName_q}%'`;
      //    objcc_CourseChapter_Cond.SetCondFldValue(clscc_CourseChapterEN.con_CourseChapterName, this.CourseChapterName_q, "like");
      //}
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinecc_CourseChapterConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objcc_CourseChapter_Cond.whereCond = strWhereCond;
    return objcc_CourseChapter_Cond;
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   */
  public async BindGv_cc_CourseChapter4Func(divList: HTMLDivElement) {
    if (this.hidSortcc_CourseChapterBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortcc_CourseChapterBy)为空，请检查！(In BindGv_cc_CourseChapter_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strCourseId = clsPubLocalStorage.courseId;
    // const strListDiv: string = this.mstrListDivChapter;
    const objcc_CourseChapter_Cond = await this.Combinecc_CourseChapterConditionObj();

    //objcc_CourseChapter_Cond.SetCondFldValue(clscc_CourseChapterEN.con_CourseId, strCourseId, "=");
    const strWhereCond = JSON.stringify(objcc_CourseChapter_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager_Chapter.currPageIndex); //获取当前页
    let arrcc_CourseChapterObjLst: Array<clscc_CourseChapterEN_T> = [];
    let arrcc_CourseChapterExObjLst: Array<clscc_CourseChapterENEx> = [];
    try {
      this.recCount = await cc_CourseChapter_GetRecCountByCondCache(
        objcc_CourseChapter_Cond,
        strCourseId,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: 50,
        whereCond: strWhereCond,
        orderBy: this.hidSortcc_CourseChapterBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrcc_CourseChapterObjLst = await cc_CourseChapter_GetObjLstByPagerCache(
        objPagerPara,
        strCourseId,
      );
      arrcc_CourseChapterExObjLst = arrcc_CourseChapterObjLst.map(this.CopyToExChapter);
      const arrge_GameLevelChapterRela = await ge_GameLevelChapterRela_GetObjLstAsync(
        `${clsge_GameLevelChapterRelaEN.con_CourseId}='${strCourseId}'`,
      );
      const arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela.filter(
        (x) => x.gameLevelId == ge_GameLevelCRUDEx.keyId_Static,
      );
      for (const objInFor of arrcc_CourseChapterExObjLst) {
        const conFuncMap = await this.FuncMapChapter(objInFor);
      }
      if (arrge_GameLevelChapterRela_Sel != null) {
        for (const objInFor of arrcc_CourseChapterExObjLst) {
          const objChapter = arrge_GameLevelChapterRela_Sel.find(
            (x) => x.courseChapterId == objInFor.courseChapterId,
          );
          if (objChapter != null) {
            objInFor.questionNum = objChapter.questionNum;
          }
        }
      }
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `绑定GridView不成功,${e}.`;
      alert(strMsg);
      return;
    }
    //if (arrcc_CourseChapterObjLst.length == 0) {
    //    const strKey: string = `${clscc_CourseChapterEN._CurrTabName}_${strCourseId}`;
    //    const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
    //    console.error("Error: ", strMsg);
    //    //console.trace();
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_cc_CourseChapter4Func(divList, arrcc_CourseChapterExObjLst);
      console.log('完成BindGv_cc_CourseChapter4Func!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objcc_CourseChapterENS">源对象</param>
  /// <returns>目标对象=>clscc_CourseChapterEN:objcc_CourseChapterENT</returns>
  public CopyToExChapter(objcc_CourseChapterENS: clscc_CourseChapterEN_T): clscc_CourseChapterENEx {
    const objcc_CourseChapterENT = new clscc_CourseChapterENEx();
    try {
      cc_CourseChapter_CopyObjTo(objcc_CourseChapterENS, objcc_CourseChapterENT);
      return objcc_CourseChapterENT;
    } catch (e) {
      const strMsg: string = Format(
        '(errid:WiTsCs0011)Copy表对象数据出错,${e}.({0})',
        clsStackTrace.GetCurrClassFunction(),
      );
      alert(strMsg);
      return objcc_CourseChapterENT;
    }
  }

  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objcc_CourseChapterS">源对象</param>
  public async FuncMapChapter(objcc_CourseChapter: clscc_CourseChapterENEx) {
    try {
      //{
      //    const cc_Course_CourseId = objcc_CourseChapter.courseId;
      //    const cc_Course_CourseName = await cc_Course_func(clscc_CourseEN.con_CourseId, clscc_CourseEN.con_CourseName, cc_Course_CourseId);
      //    objcc_CourseChapter.courseName = cc_Course_CourseName;
      //};
    } catch (e) {
      const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.(${clsStackTrace.GetCurrClassFunction()})`;
      alert(strMsg);
    }
  }
  /* 显示cc_CourseChapter对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
 <param name = "divContainer">显示容器</param>
 <param name = "arrcc_CourseChapterExObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_cc_CourseChapter4Func(
    divContainer: HTMLDivElement,
    arrcc_CourseChapterExObjLst: Array<clscc_CourseChapterENEx_T>,
  ) {
    const strThisFuncName = this.BindTab_cc_CourseChapter4Func.name;
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
      //{
      //    fldName: "orderNum",
      //    sortBy: "orderNum",
      //    colHeader: "序号",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 2,
      //    funcName: () => { }
      //},
      {
        fldName: 'courseChapterName',
        sortBy: 'courseChapterName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '课程章节名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      //{
      //    fldName: "chapterName",
      //    sortBy: "chapterName",
      //    colHeader: "章名",
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
      //{
      //    fldName: "sectionName",
      //    sortBy: "sectionName",
      //    colHeader: "节名",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 5,
      //    funcName: () => { }
      //},
      {
        fldName: 'chapterNameSim',
        sortBy: 'chapterNameSim',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '章名简称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      //{
      //    fldName: "sectionName_Sim",
      //    sortBy: "sectionName_Sim",
      //    colHeader: "节名简称",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 7,
      //    funcName: () => { }
      //},
      {
        fldName: clscc_CourseChapterENEx.con_QuestionNum,
        sortBy: clscc_CourseChapterENEx.con_QuestionNum,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '节简称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseChapterEN.con_EditPeople,
        sortBy: clscc_CourseChapterEN.con_EditPeople,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: 'updDate',
        sortBy: 'updDate',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
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
          // btn1.setAttribute('onclick', `btnCurrEduClsInTab_Click('${strKeyId}');`);
          (function (strKeyId: string) {
            btn1.onclick = function () {
              ge_GameLevelCRUDEx.vuebtn_Click('SaveChapterRela', strKeyId);
            };
          })(strKeyId);
          return btn1;
        },
      },
    ];

    await BindTab(divDataLst, arrcc_CourseChapterExObjLst, arrDataColumn, 'courseChapterId', this);

    if (this.objPager_Chapter.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager_Chapter.InitShow(divContainer, this.divName4Pager);
    this.objPager_Chapter.recCount = this.recCount;
    this.objPager_Chapter.pageSize = this.pageSize;
    this.objPager_Chapter.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public SetEventForDel() {
    {
      const arrButtonLst = GetButtonObjLstInDivObjN(divVarSet.refDivList, 'btnDelChapter');
      for (const btnDelChapter of arrButtonLst) {
        if (btnDelChapter != null) {
          const strKeyId = btnDelChapter.getAttribute('keyId');
          if (strKeyId == null) continue;
          // const strKeyId = `${objge_GameLevelChapterRela.gameLevelId}|${objCourseChapter.courseChapterId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            gameLevelId: arr[0],
            courseChapterId: arr[1],
          };

          (function (objData: any) {
            btnDelChapter.onclick = function () {
              ge_GameLevelCRUDEx.vuebtn_Click('DelChapter', objData);
            };
          })(objData);
        }
      }
    }
  }
  //弹出列表添加知识点关系列表
  public async btnAddNewChapter(strKeyId: string) {
    ge_GameLevelCRUDEx.gameLevelId_Sel = strKeyId;
    ge_GameLevelCRUDEx.keyId_Static = strKeyId;
    ge_GameLevelCRUDEx.vuebtn_Click('ShowDialogOne', '');

    await this.BindGv_cc_CourseChapter4Func(this.thisDivList_Chapter);
  }

  //确定选择 并添加到关系表中 章节Id
  public async btnSaveChapterRela_Click(ChapterId: string) {
    const response = await this.AddNewRecordSaveChapterRela(ChapterId);

    this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
    //const strInfo: string = `添加记录成功!`;
    //
    ////显示信息框
    //alert(strInfo);
  }
  //添加多个章
  public async btnChapterRela() {
    const arrKeyIds = await this.GetCheckedKeyIds();
    if (arrKeyIds.length == 0) {
      alert('请选择需要的记录！');
      return '';
    }
    for (let i = 0; i < arrKeyIds.length; i++) {
      //先删除总表数据更新总表
      const strChapterId = arrKeyIds[i].toString();
      const response = await this.AddNewRecordSaveChapterRela(strChapterId);
    }
    this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
    //const strInfo: string = `添加记录成功!`;
    //
    ////显示信息框
    //alert(strInfo);
  }

  /*
   * 获取列表中所有被选的复选框的关键字值，以列表方式(Array<string>)返回
   */
  //public async GetCheckedKeyIds(): Array<string> {
  public async GetCheckedKeyIds() {
    const divList: HTMLDivElement = document.getElementById('divChapterList') as HTMLDivElement;
    const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
    let arrChkLitems: Array<HTMLInputElement> = this.GetArray(chkItems) as Array<HTMLInputElement>;

    const chkCheckedItems: Array<HTMLInputElement> = arrChkLitems.filter((x) => x.checked == true);

    const arrSelectedKeys: Array<string> = chkCheckedItems.map((x) => {
      const strId = x.id;
      const strKey = strId.substring(3);
      return strKey;
    });

    return arrSelectedKeys;
  }
  /*
   * 把控件数组(arr[])变成控件列表(Array<HTMLElement>)。arr[]=>Array<HTMLElement>
   */
  //public async GetArray(arr): Array<HTMLElement> {
  public GetArray(arr: any) {
    let arrLst: Array<HTMLElement> = new Array<HTMLElement>();
    for (let i = 0; i < arr.length; i++) {
      const chk: HTMLElement = arr[i]; // as HTMLElement;
      arrLst.push(chk);
    }
    return arrLst;
  }
  public PutDataToge_GameLevelChapterRelaClass(
    pobjge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN,
    ChapterId: string,
  ) {
    const userStore = useUserStore();
    pobjge_GameLevelChapterRelaEN.SetCourseId(clsPubLocalStorage.courseId); // 课程Id
    pobjge_GameLevelChapterRelaEN.SetGameLevelId(ge_GameLevelCRUDEx.gameLevelId_Sel); // 游戏关卡Id
    pobjge_GameLevelChapterRelaEN.SetCourseChapterId(ChapterId); // 课程章节ID
    pobjge_GameLevelChapterRelaEN.SetQuestionNum(this.questionNum); //题目数量
    pobjge_GameLevelChapterRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjge_GameLevelChapterRelaEN.SetUpdUser(userStore.userId); // 修改人
    // pobjge_GameLevelChapterRelaEN.Setmemo(this.memo;// 备注
  }
  /* 添加新记录，保存函数
(AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSaveChapterRela(ChapterId: string) {
    if (this.questionNum == 0) {
      const strMsg: string = `请给当前题目章节设置题目数量！`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    } else {
      // this.DivName = "divAddNewRecordSave";
      const objge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN =
        new clsge_GameLevelChapterRelaEN();
      this.PutDataToge_GameLevelChapterRelaClass(objge_GameLevelChapterRelaEN, ChapterId);
      try {
        ge_GameLevelChapterRela_CheckPropertyNew(objge_GameLevelChapterRelaEN);
      } catch (e) {
        const strMsg: string = `检查数据不成功,${e}.`;
        console.error(strMsg);
        alert(strMsg);
        return false; //一定要有一个返回值，否则会出错！
      }
      try {
        const strCourseId = clsPubLocalStorage.courseId;
        const strGameLevelId = ge_GameLevelCRUDEx.gameLevelId_Sel;
        //添加之前判断关卡是否已经有该章节 如果存在 则不执行添加操作；
        const strwhere =
          "courseChapterId='" +
          ChapterId +
          "' And courseId='" +
          strCourseId +
          "' And gameLevelId='" +
          strGameLevelId +
          "'";
        const objge_GameLevelEN = await ge_GameLevelChapterRela_GetFirstObjAsync(strwhere);
        if (objge_GameLevelEN == null) {
          const returnBool = await ge_GameLevelChapterRelaEx_AddNewRecordEx(
            objge_GameLevelChapterRelaEN,
          );

          if (returnBool == true) {
            ge_GameLevel_ReFreshCache(clsPubLocalStorage.courseId);

            const strInfo: string = `添加记录成功!`;

            //显示信息框
            alert(strInfo);
          } else {
            const strInfo: string = `添加记录不成功!`;

            //显示信息框
            alert(strInfo);
          }

          return returnBool; //一定要有一个返回值，否则会出错！
        } else {
          console.log('该关卡已存在此章节');
        }
      } catch (e) {
        const strMsg: string = `添加记录不成功,${e}.`;
        console.error(strMsg);
        alert(strMsg);
        return false; //一定要有一个返回值，否则会出错！
      }
    }
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortcc_CourseChapterBy(value: string) {
    $('#hidSortcc_CourseChapterBy').val(value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortcc_CourseChapterBy(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidSortcc_CourseChapterBy');
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrGameLevelId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrge_GameLevelObjLst = await ge_GameLevel_GetObjLstByGameLevelIdLstAsync(
        arrGameLevelId,
      );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrge_GameLevelObjLst) {
        const strMaxStrId = await ge_GameLevel_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.gameLevelId = strMaxStrId;
        objInFor.gameLevelName = objInFor.gameLevelName + '_C';

        const returnBool = await ge_GameLevel_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          ge_GameLevel_ReFreshCache(CourseId_Session.value);
          const strInfo = Format('克隆记录成功!');
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
    } catch (e) {
      const strMsg = Format(
        '复制记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  public get questionNum(): number {
    const strQuestionNum = ge_GameLevelCRUDEx.GetPropValue('questionNum');
    if (strQuestionNum == '') return 0;
    return Number(strQuestionNum);
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'eduClsName|Ex':
        viewVarSet.sortge_GameLevelBy = `CurrEduCls|eduClsName ${sortDirection}|ge_GameLevel.IdCurrEduCls = CurrEduCls.IdCurrEduCls`;
        break;
      case 'courseName|Ex':
        viewVarSet.sortge_GameLevelBy = `CurrEduCls|courseName ${sortDirection}|ge_GameLevel.IdCurrEduCls = CurrEduCls.IdCurrEduCls,CurrEduCls.CourseId = vcc_Course_Sim.CourseId`;
        break;
      case 'difficultyLevelName|Ex':
        viewVarSet.sortge_GameLevelBy = `ge_DifficultyLevel|difficultyLevelName ${sortDirection}|ge_GameLevel.DifficultyLevelId = ge_DifficultyLevel.DifficultyLevelId`;
        break;
      case 'levelModeTypeName|Ex':
        viewVarSet.sortge_GameLevelBy = `ge_LevelModeType|levelModeTypeName ${sortDirection}|ge_GameLevel.LevelModeTypeId = ge_LevelModeType.LevelModeTypeId`;
        break;
      case 'questionTypeName|Ex':
        viewVarSet.sortge_GameLevelBy = `QuestionType|questionTypeName ${sortDirection}|ge_GameLevel.QuestionTypeId = QuestionType.QuestionTypeId`;
        break;
      default:
        viewVarSet.sortge_GameLevelBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_GameLevel4Func(this.thisDivList);
  }
}
