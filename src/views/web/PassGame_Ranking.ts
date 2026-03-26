import $ from 'jquery';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import { useUserStore } from '@/store/modulesShare/user';
import { ge_UserCreditsLogEx_Getge_UserCreditsRankLstEx } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserCreditsLogExWApi';
import { ge_UserCreditsLogCRUD } from '@/viewsBase/GameLearn/ge_UserCreditsLogCRUD';
import clsCheck from '@/ts/FunClass/clsCheck';

import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { ge_GameLevel_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { ge_UserLevelScore_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsge_UserLevelScoreWApi';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { clsge_UserLevelScoreEN } from '@/ts/L0Entity/GameLearn/clsge_UserLevelScoreEN';
import { clsge_UserCreditsLogEN } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsLogEN';
import {
  GetDivObjInDivObj,
  GetInputValueInDivObj,
  GetUlObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { ge_UserCreditsTtl_ListEx } from '@/views/GameLearn/ge_UserCreditsTtl_ListEx';
import { menu_SetActiveItemLi } from '@/ts/FunClass/clsPubFun4Menu';
import { ge_StuBatchQuesRelaEx_GetLevelNoByCourseIdEx } from '@/ts/L3ForWApiEx/InteractManage/clsge_StuBatchQuesRelaExWApi';
import { clsStudentInfoEN } from 'share-stu-study-base-lib';
import { BindTab } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_UserCreditsTtlEN } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsTtlEN';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsge_UserCreditsTtlENEx } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsTtlENEx';
import { ge_UserCreditsTtl_CopyObjTo } from '@/ts/L3ForWApi/GameLearn/clsge_UserCreditsTtlWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { usevQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { clsCurrEduClsEN } from 'share-stu-study-base-lib';

import { ge_UserCreditsTtlEx_CopyToEx } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserCreditsTtlExWApi';
import { vStudentInfo_Sim_GetObjLstCache } from 'share-stu-study-base-lib';
import { vCurrEduCls_Sim_func } from 'share-stu-study-base-lib';
import { viewVarSet } from '@/views/GameLearn/ge_UserCreditsLogVueShare';

/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PassGame_Ranking extends ge_UserCreditsLogCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static divLayout: HTMLDivElement; //界面布局的层对象
  public static arrCheckQues: Array<clsCheck> = []; //已做答的题的集合
  public static gameLevelId_Static = '';
  public mstrCreditsTtlListDiv: string = 'divCreditsTtlDataLst'; //班级用户总分区域id；

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
    const strExamBatchNo = PassGame_Ranking.GetPropValue('examBatchNo');
    return strExamBatchNo;
  }
  public set examBatchNo(value) {
    PassGame_Ranking.vuebtn_Click('SetExamBatchNo', value);
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
    const objPage: PassGame_Ranking = new PassGame_Ranking();
    console.log(strKeyId);

    switch (strCommandName) {
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PassGame_Ranking.btn_Click');

        break;
    }
  }
  //3排名；
  public async Getge_UserCreditsOrderByUser() {
    const strThisFuncName = this.Getge_UserCreditsOrderByUser.name;
    this.hidSortge_UserCreditsTtlBy = 'userId Asc';
    const strid_CurrEducls = clsPubLocalStorage.idCurrEduCls;
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    const strCourseId = clsPubLocalStorage.courseId;

    //获取当前登录用户的闯关分数；
    let strWhereCond = " idCurrEduCls='" + strid_CurrEducls + "'";
    const ulPaperReportTreeBind = GetUlObjInDivObj(this.thisDivLayout, 'PaperReportTreeBind');

    //const strWhereCondAttachment = "1=1";

    //闯关纪录分数
    let arrge_UserLevelScoreObjLst: Array<clsge_UserLevelScoreEN> = [];
    //关卡数量
    let arrge_GameLevelObjLst: Array<clsge_GameLevelEN> = [];

    try {
      //获取当前教学班 每个人 、各个关卡 最佳纪录；
      //arrge_UserCreditsLogObjLst = await ge_UserCreditsLogEx_Getge_UserCreditsRankLstEx(strWhereCond);
      arrge_UserLevelScoreObjLst = await ge_UserLevelScore_GetObjLstAsync(strWhereCond);
      //获取用户名转换

      strWhereCond = " idCurrEduCls='" + strid_CurrEducls + "' And inUse='true'";
      //获取当前教学班 关卡
      arrge_GameLevelObjLst = await ge_GameLevel_GetObjLstAsync(strWhereCond);
      arrge_GameLevelObjLst = arrge_GameLevelObjLst.sort((x, y) => x.orderNum - y.orderNum);
      let k = 0;
      //循环关卡数
      for (let i = 0; i < arrge_GameLevelObjLst.length; i++) {
        k++;
        const strGameLevelId = arrge_GameLevelObjLst[i].gameLevelId;
        const strGameLevelName = arrge_GameLevelObjLst[i].gameLevelName;
        //接收过滤得到的当前用户的闯关分数
        const arrge_UserCreditsLogObjLst1 = arrge_UserLevelScoreObjLst.filter(
          (x) => x.userId == strUserId && x.gameLevelId == strGameLevelId,
        );
        const objLi = document.createElement('li');
        objLi.className = 'nav-item';
        // objLi.setAttribute('onclick', Format("btnChallengeClick('{0}')", strGameLevelId));
        (function (strGameLevelId) {
          objLi.onclick = function () {
            btnChallengeClick(strGameLevelId, objLi);
          };
        })(strGameLevelId);
        const objA = document.createElement('a');
        objA.className = 'nav-link active';
        objA.setAttribute('data-toggle', 'pill');
        objA.title = '12';
        objA.style.float = 'left';
        objA.href = 'javascript:void(0)';
        if (arrge_UserCreditsLogObjLst1.length != 0) {
          //通过当前用户数据，比对其他人分数和关卡 进行排名
          for (let j = 0; j < arrge_UserCreditsLogObjLst1.length; j++) {
            const LevelNo1 = arrge_UserCreditsLogObjLst1[j].gameLevelId;
            const Credits1 = arrge_UserCreditsLogObjLst1[j].credits;
            //得到等级、得到分数；
            //排名
            let IndexNumber = 0;
            const arrSysScoreSummaryObjLst2 = arrge_UserLevelScoreObjLst.filter(
              (x) => x.gameLevelId == LevelNo1 && x.credits > Credits1,
            );
            //大于0 ，说明有高于当前用户的分数记录
            if (arrSysScoreSummaryObjLst2.length > 0) {
              IndexNumber = arrSysScoreSummaryObjLst2.length + 1; //加1代表自己当前排名
            } else {
              IndexNumber = 1; //1代表当前排名，数据没大于0 ，那么说明当前用户就是第一名；
            }

            objA.innerText = Format('{0}  排名：{1}', strGameLevelName, IndexNumber);
            if (k == 1) {
              objA.className = 'nav-link active';
            } else {
              objA.className = 'nav-link';
            }
            objLi.appendChild(objA);
          }
        } else {
          objA.innerText = Format('{0}  排名：未闯关', strGameLevelName);
          if (k == 1) {
            objA.className = 'nav-link active';
          } else {
            objA.className = 'nav-link';
          }
          objLi.appendChild(objA);
        }

        ulPaperReportTreeBind.appendChild(objLi);
      }

      //拼接；
      // $('#PaperReportTreeBind').html(strhtml);

      //调用班级总分
      const objge_UserCreditsTtl_ListEx = new ge_UserCreditsTtl_ListEx();
      await objge_UserCreditsTtl_ListEx.PageLoad();
      await objge_UserCreditsTtl_ListEx.BindGv_ge_UserCreditsTtl4Func(this.thisDivList);

      console.log('完成Getge_UserCreditsOrderByUser!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }
  //4每关前几名的得分分数；；Rank 关卡
  public async Getge_UserCreditsRank(Rank: string) {
    const strThisFuncName = this.Getge_UserCreditsRank.name;
    const strid_CurrEducls = clsPubLocalStorage.idCurrEduCls;
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    const strCourseId = clsPubLocalStorage.courseId;
    let strhtml: string = '';
    //获取当前登录用户的闯关分数；
    const strWhereCond = " idCurrEduCls='" + strid_CurrEducls + "'";

    //闯关纪录分数
    let arrge_UserCreditsLogObjLst: Array<clsge_UserCreditsLogEN> = [];

    try {
      //获取当前教学班 每个人 、各个关卡 最佳纪录；
      arrge_UserCreditsLogObjLst = await ge_UserCreditsLogEx_Getge_UserCreditsRankLstEx(
        strWhereCond,
      );

      const arrStudentInfo = await vStudentInfo_Sim_GetObjLstCache(clsPubLocalStorage.idCurrEduCls);

      //获取总关卡数；
      const responseText2 = await ge_StuBatchQuesRelaEx_GetLevelNoByCourseIdEx(
        strCourseId,
        strid_CurrEducls,
      );
      const strGuanqia: string = responseText2;

      let arrge_UserCreditsLogObjLst1;
      //if (Rank== "") {
      //    //接收过滤得到的当前用户的闯关分数
      //     arrge_UserCreditsLogObjLst1 = arrge_UserCreditsLogObjLst.filter(x => x.LevelNo == 1);
      //}
      //else {
      //    //接收过滤得到的当前用户的闯关分数
      //     arrge_UserCreditsLogObjLst1 = arrge_UserCreditsLogObjLst.filter(x => x.LevelNo == Number(Rank));
      //}
      //接收过滤得到的当前用户的闯关分数
      arrge_UserCreditsLogObjLst1 = arrge_UserCreditsLogObjLst.filter((x) => x.gameLevelId == Rank);
      if (arrge_UserCreditsLogObjLst1.length > 0) {
        let i = 0;
        //通过当前用户数据，比对其他人分数和关卡 进行排名
        for (let j = 0; j < arrge_UserCreditsLogObjLst1.length; j++) {
          i++;
          // const LevelNo1 = arrge_UserCreditsLogObjLst1[j].levelNo;
          const Credits1 = arrge_UserCreditsLogObjLst1[j].credits;
          const userId = arrge_UserCreditsLogObjLst1[j].userId;
          //得到等级 //排名、得到分数；只取前几名；
          //if (j == 6) {
          //    break;
          //}
          //else {
          //这里查询学生表 StudentInfo
          const ObjUsers = arrStudentInfo.find((x: any) => x.stuId == userId);
          if (ObjUsers != null) {
            strhtml += '<li id="" class="nav-item">';

            strhtml += '<span class="color2" style="float:left;">第' + i + '名：</span>';
            strhtml +=
              '<span class="" style="float:left;">' +
              ObjUsers.stuName +
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>';

            strhtml += '<span class="color2" style="float:left;">得分：</span>';
            strhtml +=
              '<span class="" style="float:left;">' +
              Credits1 +
              '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>';

            //strhtml += '<span>第' + i + '名：</span>';
            //strhtml += '<a style="float:left;" href = "#" title = "12" >';
            //strhtml += ' 第' + i + '名：' + ObjUsers.stuName + '  &nbsp;&nbsp;&nbsp;得分：' + Credits1 + ' </a>';
            strhtml += ' </li><br>';
          }
        }
      }

      //拼接；
      $('#RankScore').html(strhtml);

      console.log('完成Getge_UserCreditsRank!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  /* 显示ge_UserCreditsTtl对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
     <param name = "divContainer">显示容器</param>
     <param name = "arrge_UserCreditsTtlExObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_ge_UserCreditsTtl4Func(
    divContainer: HTMLDivElement,
    arrge_UserCreditsTtlExObjLst: Array<clsge_UserCreditsTtlENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_UserCreditsTtl4Func.name;

    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');

    const arrDataColumn: Array<clsDataColumn> = [
      //{
      //    fldName: "",
      //    sortBy: "", getDataSource: "", sortFun: clsPubVar4Web.SortFun,
      //    colHeader: "",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "CheckBox",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
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
        fldName: 'userName',
        sortBy: 'userName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '用户名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },

      {
        fldName: clsge_UserCreditsTtlEN.con_CreditsNum,
        sortBy: clsge_UserCreditsTtlEN.con_CreditsNum,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '练习积分',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: clsge_UserCreditsTtlEN.con_ExamTotal,
        sortBy: clsge_UserCreditsTtlEN.con_ExamTotal,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '考试积分',
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
      //    orderNum: 4,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "updDate",
      //    sortBy: "updDate",
      //    colHeader: "修改日期",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 5,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "updUser",
      //    sortBy: "updUser",
      //    colHeader: "修改人",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 6,
      //    funcName: () => { }
      //},
    ];
    await BindTab(divDataLst, arrge_UserCreditsTtlExObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortge_UserCreditsTtlBy(value: string) {
    $('#hidSortge_UserCreditsTtlBy').val(value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortge_UserCreditsTtlBy(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidSortge_UserCreditsTtlBy');
  }
  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
    <returns>条件串(strWhereCond)</returns>
  */
  public Combinege_UserCreditsTtlConditionObj(): clsge_UserCreditsTtlEN {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strWhereCond: string = ' 1 = 1 ';
    const objge_UserCreditsTtl_Cond = new clsge_UserCreditsTtlEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.userId_q != "") {
      //    strWhereCond += ` And ${clsge_UserCreditsTtlEN.con_UserId} like '% ${this.userId_q}%'`;
      //    objge_UserCreditsTtl_Cond.SetCondFldValue(clsge_UserCreditsTtlEN.con_UserId, this.userId_q, "like");
      //}
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinege_UserCreditsTtlConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objge_UserCreditsTtl_Cond.whereCond = strWhereCond;
    return objge_UserCreditsTtl_Cond;
  }
  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objge_UserCreditsTtlS">源对象</param>
  public async FuncMapCreditsTtl(objge_UserCreditsTtl: clsge_UserCreditsTtlENEx) {
    const vQxUsersSimStore = usevQxUsersSimStore();
    try {
      {
        const CurrEduCls_id_CurrEduCls = objge_UserCreditsTtl.idCurrEduCls;
        const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(
          clsCurrEduClsEN.con_IdCurrEduCls,
          clsCurrEduClsEN.con_EduClsName,
          CurrEduCls_id_CurrEduCls,
          clsPubLocalStorage.courseId,
        );
        objge_UserCreditsTtl.eduClsName = CurrEduCls_EduClsName;

        //const Users_UserId = objge_UserCreditsTtl.userId;
        //const Users_UserName = await vQxUsersSimStore.getUserName(clsvQxUsersSimEN.con_UserId, clsvQxUsersSimEN.con_UserName, Users_UserId);
        //objge_UserCreditsTtl.userName = Users_UserName;
        const Users_UserId = objge_UserCreditsTtl.userId;
        const Users_UserName = await vQxUsersSimStore.getUserName(Users_UserId);
        objge_UserCreditsTtl.userName = Users_UserName;
      }
    } catch (e) {
      const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.(${clsStackTrace.GetCurrClassFunction()})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objge_UserCreditsTtlENS">源对象</param>
  /// <returns>目标对象=>clsge_UserCreditsTtlEN:objge_UserCreditsTtlENT</returns>
  public CopyToCreditsTtlExBak(
    objge_UserCreditsTtlENS: clsge_UserCreditsTtlEN,
  ): clsge_UserCreditsTtlENEx {
    const objge_UserCreditsTtlENT = new clsge_UserCreditsTtlENEx();
    try {
      ge_UserCreditsTtl_CopyObjTo(objge_UserCreditsTtlENS, objge_UserCreditsTtlENT);
      return objge_UserCreditsTtlENT;
    } catch (e) {
      const strMsg: string = Format(
        '(errid:WiTsCs0011)Copy表对象数据出错,${e}.({0})',
        clsStackTrace.GetCurrClassFunction(),
      );
      console.error(strMsg);
      alert(strMsg);
      return objge_UserCreditsTtlENT;
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
function btnChallengeClick(k: string, liItem: HTMLLIElement) {
  menu_SetActiveItemLi(liItem);
  const objPage = new PassGame_Ranking();
  objPage.Getge_UserCreditsRank(k);
}
