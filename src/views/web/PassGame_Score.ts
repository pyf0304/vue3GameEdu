import $ from 'jquery';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import { useUserStore } from '@/store/modulesShare/user';
import {
  ge_UserCreditsLogEx_CopyToEx,
  ge_UserCreditsLogEx_FuncMapByFldName,
  ge_UserCreditsLogEx_GetMaxCreditObjByIdCurrEduClsAndUserId,
  ge_UserCreditsLogEx_GetObjByIdCurrEduClsAndUserId,
} from '@/ts/L3ForWApiEx/GameLearn/clsge_UserCreditsLogExWApi';
import { ge_UserCreditsLogCRUD } from '@/viewsBase/GameLearn/ge_UserCreditsLogCRUD';
import clsCheck from '@/ts/FunClass/clsCheck';

import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { ge_GameLevel_func } from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { ge_UserLevelScore_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsge_UserLevelScoreWApi';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { clsge_UserLevelScoreEN } from '@/ts/L0Entity/GameLearn/clsge_UserLevelScoreEN';
import { clsge_UserCreditsLogEN } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsLogEN';
import { clsge_UserLevelScoreENEx } from '@/ts/L0Entity/GameLearn/clsge_UserLevelScoreENEx';
import { ge_UserLevelScoreEx_CopyToEx } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserLevelScoreExWApi';
import { clsge_UserCreditsLogENEx } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsLogENEx';
import { usege_GameLevelStore } from '@/store/modules/ge_GameLevel';

import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import {
  Combinege_UserCreditsLogCondition,
  divVarSet,
  viewVarSet,
} from '@/views/GameLearn/ge_UserCreditsLogVueShare';
import { GetDivObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import {
  ge_UserCreditsLog_CopyObjTo,
  ge_UserCreditsLog_GetObjLstByPagerAsync,
  ge_UserCreditsLog_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserCreditsLogWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { BindTab } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { vCurrEduCls_Sim_func } from 'share-stu-study-base-lib';

/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PassGame_Score extends ge_UserCreditsLogCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  public static arrCheckQues: Array<clsCheck> = []; //已做答的题的集合
  public static gameLevelId_Static = '';

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
    const strExamBatchNo = PassGame_Score.GetPropValue('examBatchNo');
    return strExamBatchNo;
  }
  public set examBatchNo(value) {
    PassGame_Score.vuebtn_Click('SetExamBatchNo', value);
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
      // const gvResultOne = await this.Show_GameChallenge();
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
    const objPage: PassGame_Score = new PassGame_Score();
    console.log(strKeyId);

    switch (strCommandName) {
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PassGame_Score.btn_Click');

        break;
    }
  }
  //2得分；
  public async Getge_UserCredits() {
    const strThisFuncName = this.Getge_UserCredits.name;
    const ge_GameLevelStore = usege_GameLevelStore();
    const strid_CurrEducls = clsPubLocalStorage.idCurrEduCls;
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    let strhtml: string = '';
    //获取当前登录用户的闯关分数；
    const strWhereCond = " userId='" + strUserId + "' And idCurrEduCls='" + strid_CurrEducls + "'";
    ////附件
    //const strWhereCondAttachment = "1=1";

    const objge_UserCreditsLog: clsge_UserCreditsLogEN = new clsge_UserCreditsLogEN();
    //获取图片
    let arrge_UserLevelScoreObjLst: Array<clsge_UserLevelScoreEN> = [];
    let arrge_UserLevelScoreExObjLst: Array<clsge_UserLevelScoreENEx> = [];
    try {
      arrge_UserLevelScoreObjLst = await ge_UserLevelScore_GetObjLstAsync(strWhereCond);
      arrge_UserLevelScoreExObjLst = arrge_UserLevelScoreObjLst.map(ge_UserLevelScoreEx_CopyToEx);
      for (const objInFor of arrge_UserLevelScoreExObjLst) {
        await this.FuncMapge_UserLevelScore(objInFor);
      }
      arrge_UserLevelScoreExObjLst = arrge_UserLevelScoreExObjLst.sort(
        (x, y) => x.orderNum - y.orderNum,
      );

      let LianxiScore = 0;
      let ExamScore = 0;
      for (let i = 0; i < arrge_UserLevelScoreExObjLst.length; i++) {
        const objge_UserLevelScoreEx = arrge_UserLevelScoreExObjLst[i];
        const objge_UserCreditsLog = await ge_UserCreditsLogEx_GetObjByIdCurrEduClsAndUserId(
          objge_UserLevelScoreEx.idCurrEduCls,
          objge_UserLevelScoreEx.userId,
          objge_UserLevelScoreEx.credits,
        );
        let strUpdDate_Sim = '';
        if (objge_UserCreditsLog != null) {
          const objge_UserCreditsLogEx = ge_UserCreditsLogEx_CopyToEx(objge_UserCreditsLog);
          await ge_UserCreditsLogEx_FuncMapByFldName(
            clsge_UserCreditsLogENEx.con_UpdDateSim,
            objge_UserCreditsLogEx,
          );
          strUpdDate_Sim = Format('({0})', objge_UserCreditsLogEx.updDateSim);
        }
        strhtml += '<tr>';
        strhtml += '<td class="NameTD" style="width: 50 %;" >';
        const LevelNo = objge_UserLevelScoreEx.gameLevelId;
        const strLevelName = objge_UserLevelScoreEx.gameLevelName;
        //const Ispassed = objge_UserLevelScoreEx.passed;
        let Ispassed = false;
        const objge_UserCreditsLog_GetMaxCredit =
          await ge_UserCreditsLogEx_GetMaxCreditObjByIdCurrEduClsAndUserId(
            objge_UserLevelScoreEx.idCurrEduCls,
            objge_UserLevelScoreEx.userId,
            objge_UserLevelScoreEx.gameLevelId,
          );
        if (objge_UserCreditsLog_GetMaxCredit != null) {
          Ispassed = objge_UserCreditsLog_GetMaxCredit.passed;
        }
        //通过关卡号得到关卡类型；
        const objge_GameLevel = await ge_GameLevelStore.getObj(LevelNo);
        if (objge_GameLevel != null) {
          let strLevelTypeName = '';
          const strLevelTypeId = objge_GameLevel.levelModeTypeId;
          if (strLevelTypeId == '01') {
            //练习
            strLevelTypeName = '练习';
            LianxiScore += objge_UserLevelScoreEx.credits;
          } else if (strLevelTypeId == '02') {
            strLevelTypeName = '考试';
            ExamScore += objge_UserLevelScoreEx.credits;
          } else {
            strLevelTypeName = '所有';
          }

          if (Ispassed == true) {
            strhtml += Format(
              '{0}({1})  合格 得分：{2}{3} ;',
              strLevelName,
              strLevelTypeName,
              objge_UserLevelScoreEx.credits,
              strUpdDate_Sim,
            );
          } else {
            strhtml +=
              strLevelName +
              '（' +
              strLevelTypeName +
              '）  不合格 得分：' +
              arrge_UserLevelScoreExObjLst[i].credits;
          }
          strhtml += '</td></tr>';
        }
      }
      //拼接；
      $('#tabwucScore').html(strhtml);
      //显示练习总分、考试总分
      const strlianxi = '练习总分：' + LianxiScore;
      const strExam = '考试总分：' + ExamScore;

      $('#lianxiScore').html(strlianxi);
      $('#ExamScore').html(strExam);
      //调用闯关历史；
      await this.BindGv_ge_UserCreditsLog4Func(divVarSet.refDivList);
      console.log('完成Getge_UserCredits!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  public async FuncMapge_UserLevelScore(objge_UserCreditsLog: clsge_UserLevelScoreENEx) {
    try {
      {
        const CurrEduCls_id_CurrEduCls = objge_UserCreditsLog.idCurrEduCls;
        const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(
          clsCurrEduClsEN.con_IdCurrEduCls,
          clsCurrEduClsEN.con_EduClsName,
          CurrEduCls_id_CurrEduCls,
          objge_UserCreditsLog.courseId,
        );
        objge_UserCreditsLog.eduClsName = CurrEduCls_EduClsName;
      }
      {
        const ge_GameLevel_GameLevelId = objge_UserCreditsLog.gameLevelId;
        const ge_GameLevel_GameLevelName = await ge_GameLevel_func(
          clsge_GameLevelEN.con_GameLevelId,
          clsge_GameLevelEN.con_GameLevelName,
          ge_GameLevel_GameLevelId,
          clsPubLocalStorage.courseId,
        );
        objge_UserCreditsLog.gameLevelName = ge_GameLevel_GameLevelName;
      }
      {
        const ge_GameLevel_GameLevelId = objge_UserCreditsLog.gameLevelId;
        const ge_GameLevel_OrderNum = await ge_GameLevel_func(
          clsge_GameLevelEN.con_GameLevelId,
          clsge_GameLevelEN.con_OrderNum,
          ge_GameLevel_GameLevelId,
          clsPubLocalStorage.courseId,
        );
        objge_UserCreditsLog.orderNum = ge_GameLevel_OrderNum;
      }
      //{
      //    const arrge_UserCreditsLog = ge_UserCreditsLog_GetObjLstCache(clsPubLocalStorage.idCurrEduCls)
      //    const objge_UserCreditsLog_Max = (await arrge_UserCreditsLog).find(x =>
      //        x.userId == objge_UserCreditsLog.userId
      //        && x.gameLevelId == objge_UserCreditsLog.gameLevelId
      //        && x.credits == objge_UserCreditsLog.credits);
      //    if (objge_UserCreditsLog_Max != null) {
      //        objge_UserCreditsLog.passed = objge_UserCreditsLog_Max.passed;
      //    }
      //};
    } catch (e) {
      const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   */
  public async BindGv_ge_UserCreditsLog4Func(divList: HTMLDivElement) {
    if (viewVarSet.sortge_UserCreditsLogBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortge_UserCreditsLogBy)为空，请检查！(In BindGv_ge_UserCreditsLog_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await Combinege_UserCreditsLogCondition();
    // objge_UserCreditsLog_Cond.SetCondFldValue(
    //   clsge_UserCreditsLogEN.con_IdCurrEduCls,
    //   clsPubLocalStorage.idCurrEduCls,
    //   '=',
    // );

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_UserCreditsLogObjLst: Array<clsge_UserCreditsLogEN> = [];
    let arrge_UserCreditsLogExObjLst: Array<clsge_UserCreditsLogENEx> = [];
    try {
      this.recCount = await ge_UserCreditsLog_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_UserCreditsLogBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrge_UserCreditsLogObjLst = await ge_UserCreditsLog_GetObjLstByPagerAsync(objPagerPara);

      arrge_UserCreditsLogExObjLst = arrge_UserCreditsLogObjLst.map(this.CopyToEx);
      for (const objInFor of arrge_UserCreditsLogExObjLst) {
        //const conFuncMap = await this.FuncMap(objInFor);
        const conFuncMap = await this.FuncMap(objInFor);
      }
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `绑定GridView不成功,${e}.`;
      alert(strMsg);
      return;
    }
    //if (arrge_UserCreditsLogObjLst.length == 0) {
    //    const strKey: string = `${clsge_UserCreditsLogEN._CurrTabName}_${ge_UserCreditsLogCRUD.}`;
    //    const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
    //    console.error("Error: ", strMsg);
    //    //console.trace();
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_ge_UserCreditsLog4Func(divList, arrge_UserCreditsLogExObjLst);
      console.log('完成BindGv_ge_UserCreditsLog4Func!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   <returns>条件串(strWhereCond)</returns>
 */
  public async Combinege_UserCreditsLogConditionObj(): Promise<clsge_UserCreditsLogEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    const objge_UserCreditsLog_Cond = new clsge_UserCreditsLogEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      const userStore = useUserStore();
      const strUserId = userStore.userId;
      strWhereCond += ` And ${clsge_UserCreditsLogEN.con_UserId} like '% ${strUserId}%'`;
      objge_UserCreditsLog_Cond.SetCondFldValue(
        clsge_UserCreditsLogEN.con_UserId,
        strUserId,
        'like',
      );
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinege_UserCreditsLogConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objge_UserCreditsLog_Cond.whereCond = strWhereCond;
    return objge_UserCreditsLog_Cond;
  }
  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objge_UserCreditsLogS">源对象</param>
  public async FuncMap(objge_UserCreditsLog: clsge_UserCreditsLogENEx) {
    try {
      {
        const CurrEduCls_id_CurrEduCls = objge_UserCreditsLog.idCurrEduCls;
        const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(
          clsCurrEduClsEN.con_IdCurrEduCls,
          clsCurrEduClsEN.con_EduClsName,
          CurrEduCls_id_CurrEduCls,
          objge_UserCreditsLog.courseId,
        );
        objge_UserCreditsLog.eduClsName = CurrEduCls_EduClsName;
      }

      {
        const ge_GameLevel_GameLevelId = objge_UserCreditsLog.gameLevelId;
        const ge_GameLevel_GameLevelName = await ge_GameLevel_func(
          clsge_GameLevelEN.con_GameLevelId,
          clsge_GameLevelEN.con_GameLevelName,
          ge_GameLevel_GameLevelId,
          clsPubLocalStorage.courseId,
        );
        objge_UserCreditsLog.gameLevelName = ge_GameLevel_GameLevelName;
      }
    } catch (e) {
      const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.(${clsStackTrace.GetCurrClassFunction()})`;
      alert(strMsg);
    }
  }
  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objge_UserCreditsLogENS">源对象</param>
  /// <returns>目标对象=>clsge_UserCreditsLogEN:objge_UserCreditsLogENT</returns>
  public CopyToEx(objge_UserCreditsLogENS: clsge_UserCreditsLogEN): clsge_UserCreditsLogENEx {
    const objge_UserCreditsLogENT = new clsge_UserCreditsLogENEx();
    try {
      ge_UserCreditsLog_CopyObjTo(objge_UserCreditsLogENS, objge_UserCreditsLogENT);
      return objge_UserCreditsLogENT;
    } catch (e) {
      const strMsg: string = Format(
        '(errid:WiTsCs0011)Copy表对象数据出错,${e}.({0})',
        clsStackTrace.GetCurrClassFunction(),
      );
      alert(strMsg);
      return objge_UserCreditsLogENT;
    }
  }
  /* 显示ge_UserCreditsLog对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
     <param name = "divContainer">显示容器</param>
     <param name = "arrge_UserCreditsLogExObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_ge_UserCreditsLog4Func(
    divContainer: HTMLDivElement,
    arrge_UserCreditsLogExObjLst: Array<clsge_UserCreditsLogENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_UserCreditsLog4Func.name;

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
        fldName: 'userId',
        sortBy: 'userId',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '用户ID',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'gameLevelName',
        sortBy: 'gameLevelName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '学习关卡',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: 'credits',
        sortBy: 'credits',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '积分',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: clsge_UserCreditsLogEN.con_GetInstructions,
        sortBy: clsge_UserCreditsLogEN.con_GetInstructions,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '获取说明',
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
        colHeader: '获取日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      //{
      //    fldName: "eduClsName",
      //    sortBy: "eduClsName",
      //    colHeader: "教学班名称",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 7,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "updDate",
      //    sortBy: "updDate",
      //    colHeader: "修改日期",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 8,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "updUser",
      //    sortBy: "updUser",
      //    colHeader: "修改人",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 9,
      //    funcName: () => { }
      //},
    ];
    await BindTab(divDataLst, arrge_UserCreditsLogExObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objge_UserCreditsLogENS">源对象</param>
  /// <returns>目标对象=>clsge_UserCreditsLogEN:objge_UserCreditsLogENT</returns>
  public CopyToExge_UserCreditsLog(
    objge_UserCreditsLogENS: clsge_UserCreditsLogEN,
  ): clsge_UserCreditsLogENEx {
    const objge_UserCreditsLogENT = new clsge_UserCreditsLogENEx();
    try {
      ge_UserCreditsLog_CopyObjTo(objge_UserCreditsLogENS, objge_UserCreditsLogENT);
      return objge_UserCreditsLogENT;
    } catch (e) {
      const strMsg: string = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objge_UserCreditsLogENT;
    }
  }
  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objge_UserCreditsLogS">源对象</param>
  public async FuncMapge_UserCreditsLog(objge_UserCreditsLog: clsge_UserCreditsLogENEx) {
    try {
      {
        const CurrEduCls_id_CurrEduCls = objge_UserCreditsLog.idCurrEduCls;
        const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(
          clsCurrEduClsEN.con_IdCurrEduCls,
          clsCurrEduClsEN.con_EduClsName,
          CurrEduCls_id_CurrEduCls,
          objge_UserCreditsLog.courseId,
        );
        objge_UserCreditsLog.eduClsName = CurrEduCls_EduClsName;
      }
      {
        const ge_GameLevel_GameLevelId = objge_UserCreditsLog.gameLevelId;
        const ge_GameLevel_GameLevelName = await ge_GameLevel_func(
          clsge_GameLevelEN.con_GameLevelId,
          clsge_GameLevelEN.con_GameLevelName,
          ge_GameLevel_GameLevelId,
          clsPubLocalStorage.courseId,
        );
        objge_UserCreditsLog.gameLevelName = ge_GameLevel_GameLevelName;
      }
    } catch (e) {
      const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'userNameEx|Ex':
        viewVarSet.sortge_UserCreditsLogBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'gameLevelName|Ex':
        viewVarSet.sortge_UserCreditsLogBy = `ge_GameLevel|gameLevelName ${sortDirection}|ge_UserCreditsLog.GameLevelId = ge_GameLevel.GameLevelId`;
        break;
      default:
        viewVarSet.sortge_UserCreditsLogBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_UserCreditsLog4Func(this.thisDivList);
  }
}
