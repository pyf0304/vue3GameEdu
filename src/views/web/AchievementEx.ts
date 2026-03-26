import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';

import { clsge_UserCreditsTtlEN } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsTtlEN';
import { clsge_UserCreditsTtlENEx } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsTtlENEx';

import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';

import { ge_UserCreditsTtlCRUD } from '@/viewsBase/GameLearn/ge_UserCreditsTtlCRUD';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { enumBadgeType } from '@/ts/L0Entity/GameLearn/clsBadgeTypeEN';
import { BadgeType_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsBadgeTypeWApi';
import { ge_UserBadgeTtlEx_GetObjByIdCurrEduClsAndUserId } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserBadgeTtlExWApi';
import {
  ge_UserCreditsTtlEx_FuncMapByFldName,
  ge_UserCreditsTtlEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/GameLearn/clsge_UserCreditsTtlExWApi';
import {
  GetDivObjInDivObj,
  GetDiv_Empty,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSpan_Empty,
  SetSpanHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, Redirect } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Achievement_BadgeLstEx } from './Achievement_BadgeLstEx';
import { useUserStore } from '@/store/modulesShare/user';
import { ge_UserBadgeTtlCRUD } from '@/viewsBase/GameLearn/ge_UserBadgeTtlCRUD';
import router from '@/router';
import {
  Combinege_UserCreditsTtlCondition,
  divVarSet,
  viewVarSet,
} from '@/views/GameLearn/ge_UserCreditsTtlVueShare';
import { ge_UserCreditsTtl_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GameLearn/clsge_UserCreditsTtlWApi';

declare const window: any;

export class AchievementEx extends ge_UserCreditsTtlCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static objPageCRUD: AchievementEx;
  public static strCourseId = clsPubLocalStorage.courseId;
  public static divList2: HTMLDivElement; //列表区的层对象
  public divName4Query: string = 'divQuery'; //查询区的层Id
  public divName4Function: string = 'divFunction'; //功能区的层Id
  public divName_CreditTtl: string = 'divPager_CreditTtl'; //列表中的分页区的总排名分页

  constructor() {
    super();
    this.divName4Pager = 'divPager_CreditTtl';
    AchievementEx.objPageCRUD = this;
  }

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  public recCount = 0;
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
  /*
   按钮单击,用于调用Js函数中btn_Click
  (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
  */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: AchievementEx = new AchievementEx();
    //const objPageEdit: cc_Course_EditEx = new cc_Course_EditEx('cc_Course_EditEx', objPage);
    switch (strCommandName) {
      case 'Menu_Click': //重序记录
        objPage.Menu_Click(strKeyId);
        break;

      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        const strMsg = '命令:' + strCommandName + '在函数(cc_CourseCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
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
        router.push('/PassGame');
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
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    const strThisFuncName = this.PageLoad.name;
    const userStore = useUserStore();
    try {
      this.divName4Pager = this.divName_CreditTtl;
      //AchievementEx.strid_CurrEduClsCache = clsPubLocalStorage.idCurrEduCls;
      viewVarSet.sortge_UserCreditsTtlBy = '';
      clsge_UserCreditsTtlENEx.con_CreditsNum;

      if (userStore.userId != '') {
        //关卡数量
        await this.BindGv_ge_UserCreditsTtl4Func(divVarSet.refDivList);
        let objPage0 = new Achievement_BadgeLstEx();
        divVarSet.refDivList = AchievementEx.divList2;
        await objPage0.PageLoad();
      } else {
        window.top.location.href = '../Web/Index';
      }
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //5班级总分排名；
  public async BindGv_ge_UserCreditsTtl4Func(divList: HTMLDivElement) {
    if (viewVarSet.sortge_UserCreditsTtlBy == null) {
      const strMsg = `在显示列表时，排序字段(sortge_UserCreditsTtlBy)为空，请检查！(In BindGv_ge_UserCreditsTtl_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strListDiv: string = 'divCreditRanking';
    const strWhereCond = await Combinege_UserCreditsTtlCondition();
    // objge_UserCreditsTtl_Cond.SetCondFldValue(
    //   clsge_UserCreditsTtlEN.con_IdCurrEduCls,
    //   clsPubLocalStorage.idCurrEduCls,
    //   '=',
    // );
    // const strWhereCond = JSON.stringify(objge_UserCreditsTtl_Cond);
    //const intCurrPageIndex = GetCurrPageIndex(this.divName4PagerTtl);//获取当前页
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_UserCreditsTtlExObjLst: Array<clsge_UserCreditsTtlENEx> = [];
    try {
      this.recCount = await ge_UserCreditsTtl_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: '', //AchievementEx.sortge_UserCreditsTtlBy,
        sortFun: (x, y) => y.creditsNum - x.creditsNum,
      };

      arrge_UserCreditsTtlExObjLst = await ge_UserCreditsTtlEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );

      for (const objInFor of arrge_UserCreditsTtlExObjLst) {
        const conFuncMap = await ge_UserCreditsTtlEx_FuncMapByFldName(
          clsge_UserCreditsTtlENEx.con_UserName,
          objInFor,
        );
      }
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.Show_CreditRanking(divList, arrge_UserCreditsTtlExObjLst);
      console.log('完成BindGv_ge_UserCreditsTtl4Func!');
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
    <returns>条件串(strWhereCond)</returns>
  */
  public async Combinege_UserCreditsTtlConditionObj(): Promise<clsge_UserCreditsTtlEN> {
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

  public async Show_CreditRanking(
    divContainer1: HTMLDivElement,
    arrge_UserCreditsTtlExObjLst: Array<clsge_UserCreditsTtlENEx>,
  ) {
    const strThisFuncName = this.Show_CreditRanking.name;
    const userStore = useUserStore();
    const strid_CurrEducls = clsPubLocalStorage.idCurrEduCls;
    const strUserId = userStore.userId;
    const strCourseId = clsPubLocalStorage.courseId;
    const strhtml: string = '';
    //获取当前登录用户的闯关分数；
    //只查询使用中的关卡

    //const strWhereCond = Format(" idCurrEduCls='{0}'", strid_CurrEducls);
    ////附件
    //const strWhereCondAttachment = "1=1";

    const divDataLst = GetDivObjInDivObj(divContainer1, 'divDataLst'); // "divCreditRanking");
    divDataLst.innerHTML = '';
    try {
      //获取当前教学班 关卡
      //arrge_UserCreditsTtlObjLst = await ge_UserCreditsTtl_GetObjLstAsync(strWhereCond);
      //arrge_UserCreditsTtlObjLst = arrge_UserCreditsTtlObjLst.sort((x, y) => y.creditsNum = x.creditsNum);
      //arrge_UserCreditsTtlExObjLst = arrge_UserCreditsTtlObjLst.map(ge_UserCreditsTtlEx_CopyToEx);
      //for (const objInFor of arrge_UserCreditsTtlExObjLst) {
      //    const conFuncMap = await ge_UserCreditsTtlEx_FuncMapByFldName(clsge_UserCreditsTtlENEx.con_UserName, objInFor);
      //}

      let strChallengeMode = '';
      for (let i = 0; i < arrge_UserCreditsTtlExObjLst.length; i++) {
        const objge_UserCreditsTtlEx = arrge_UserCreditsTtlExObjLst[i];
        let arrge_UserBadgeTtl = await ge_UserBadgeTtlEx_GetObjByIdCurrEduClsAndUserId(
          objge_UserCreditsTtlEx.idCurrEduCls,
          objge_UserCreditsTtlEx.userId,
        );

        const arrBadgeType = await BadgeType_GetObjLstCache();
        let intBadgeNum_Credit = 0;
        let intBadgeNum_CollaborationBadge = 0;
        let intBadgeNum_ProgressBadge = 0;
        let intBadgeNum_ReflectionBadge = 0;
        let intBadgeNum_QuestionAnsweringBadge = 0;
        let intBadgeNum_ChapterBadge = 0;

        for (const objge_UserBadgeTtl of arrge_UserBadgeTtl) {
          switch (objge_UserBadgeTtl.badgeTypeId) {
            case enumBadgeType.CreditBadge_01:
              intBadgeNum_Credit = objge_UserBadgeTtl.badgeNum;
              break;
            case enumBadgeType.CollaborationBadge_02:
              intBadgeNum_CollaborationBadge = objge_UserBadgeTtl.badgeNum;
              break;
            case enumBadgeType.ProgressBadge_03:
              intBadgeNum_ProgressBadge = objge_UserBadgeTtl.badgeNum;
              break;
            case enumBadgeType.ReflectionBadge_04:
              intBadgeNum_ReflectionBadge = objge_UserBadgeTtl.badgeNum;
              break;
            case enumBadgeType.QuestionAnsweringBadge_05:
              intBadgeNum_QuestionAnsweringBadge = objge_UserBadgeTtl.badgeNum;
              break;
            case enumBadgeType.ChapterBadge_06:
              intBadgeNum_ChapterBadge = objge_UserBadgeTtl.badgeNum;
              break;
          }
        }
        //    //参数、用户、教学班、关卡号；
        //difficultyLevelId 等级难度,questionTypeId	题目类型,questionNum,题目数
        const strUserName = objge_UserCreditsTtlEx.userName;
        const intCreditsNum = objge_UserCreditsTtlEx.creditsNum;

        const strCurrDateTime = clsPubFun4Web.getNowDate();

        const objDiv_ge_UserCreditsTtl = GetDiv_Empty('alert alert-info');
        const strongUserName = document.createElement('strong');
        strongUserName.innerHTML = Format('{0} {1}', objge_UserCreditsTtlEx.userId, strUserName);

        const iCredits = document.createElement('i');
        iCredits.style.fontSize = '30px';
        iCredits.style.color = '#666';
        iCredits.title = '总积分';
        iCredits.style.marginLeft = '20px';

        iCredits.className = 'layui-icon layui-icon-flag';

        const spnCredits = GetSpan_Empty('');
        spnCredits.innerHTML = Format('{0}', intCreditsNum);
        spnCredits.style.marginLeft = '5px';

        //<i class="layui-icon layui-icon-diamond" style = "font-size: 30px; color: #ffd800;" > </i>

        //case enumBadgeType.CreditBadge_01:
        const iCreditBadge = document.createElement('i');
        iCreditBadge.style.fontSize = '30px';
        iCreditBadge.style.color = '#ffd800';
        iCreditBadge.style.marginLeft = '20px';

        iCreditBadge.className = 'layui-icon layui-icon-diamond';
        iCreditBadge.title = '积分徽章';
        const spnCreditBadge = GetSpan_Empty('');
        spnCreditBadge.innerHTML = Format('{0}', intBadgeNum_Credit);
        spnCreditBadge.style.marginLeft = '5px';

        //case enumBadgeType.CollaborationBadge_02:
        const iCollaborationBadge = document.createElement('i');
        iCollaborationBadge.style.fontSize = '30px';
        iCollaborationBadge.style.color = 'brown';
        iCollaborationBadge.style.marginLeft = '20px';

        iCollaborationBadge.className = 'layui-icon layui-icon-diamond';
        iCollaborationBadge.title = '合作徽章';
        const spnCollaborationBadge = GetSpan_Empty('');
        spnCollaborationBadge.innerHTML = Format('{0}', intBadgeNum_CollaborationBadge);
        spnCollaborationBadge.style.marginLeft = '5px';

        //case enumBadgeType.ProgressBadge_03:
        const iProgressBadge = document.createElement('i');
        iProgressBadge.style.fontSize = '30px';
        iProgressBadge.style.color = 'royalblue';
        iProgressBadge.style.marginLeft = '20px';

        iProgressBadge.className = 'layui-icon layui-icon-diamond';
        iProgressBadge.title = '进步徽章';
        const spnProgressBadge = GetSpan_Empty('');
        spnProgressBadge.innerHTML = Format('{0}', intBadgeNum_ProgressBadge);
        spnProgressBadge.style.marginLeft = '5px';

        //case enumBadgeType.ReflectionBadge_04:
        const iReflectionBadge = document.createElement('i');
        iReflectionBadge.style.fontSize = '30px';
        iReflectionBadge.style.color = 'grey';

        iReflectionBadge.style.marginLeft = '20px';
        iReflectionBadge.className = 'layui-icon layui-icon-diamond';
        iReflectionBadge.title = '反思徽章';
        const spnReflectionBadge = GetSpan_Empty('');
        spnReflectionBadge.innerHTML = Format('{0}', intBadgeNum_ReflectionBadge);
        spnReflectionBadge.style.marginLeft = '5px';

        //case enumBadgeType.QuestionAnsweringBadge_05:
        const iQuestionAnsweringBadge = document.createElement('i');
        iQuestionAnsweringBadge.style.fontSize = '30px';
        iQuestionAnsweringBadge.style.color = 'red';
        iQuestionAnsweringBadge.style.marginLeft = '20px';

        iQuestionAnsweringBadge.className = 'layui-icon layui-icon-diamond';
        iQuestionAnsweringBadge.title = '答疑徽章';
        const spnQuestionAnsweringBadge = GetSpan_Empty('');
        spnQuestionAnsweringBadge.innerHTML = Format('{0}', intBadgeNum_QuestionAnsweringBadge);
        spnQuestionAnsweringBadge.style.marginLeft = '5px';

        //case enumBadgeType.ChapterBadge_06:
        const iChapterBadge = document.createElement('i');
        iChapterBadge.style.fontSize = '30px';
        iChapterBadge.style.color = 'yellow';
        iChapterBadge.style.marginLeft = '20px';

        iChapterBadge.className = 'layui-icon layui-icon-diamond';
        iChapterBadge.title = '章节徽章';
        const spnChapterBadge = GetSpan_Empty('');
        spnChapterBadge.innerHTML = Format('{0}', intBadgeNum_ChapterBadge);
        spnChapterBadge.style.marginLeft = '5px';

        objDiv_ge_UserCreditsTtl.appendChild(strongUserName);
        objDiv_ge_UserCreditsTtl.appendChild(iCredits);
        objDiv_ge_UserCreditsTtl.appendChild(spnCredits);
        //      case enumBadgeType.CreditBadge_01:
        if (intBadgeNum_Credit > 0) {
          objDiv_ge_UserCreditsTtl.appendChild(iCreditBadge);
          objDiv_ge_UserCreditsTtl.appendChild(spnCreditBadge);
        }

        //        case enumBadgeType.CollaborationBadge_02:
        if (intBadgeNum_CollaborationBadge > 0) {
          objDiv_ge_UserCreditsTtl.appendChild(iCollaborationBadge);
          objDiv_ge_UserCreditsTtl.appendChild(spnCollaborationBadge);
        }
        //        case enumBadgeType.ProgressBadge_03:
        if (intBadgeNum_ProgressBadge > 0) {
          objDiv_ge_UserCreditsTtl.appendChild(iProgressBadge);
          objDiv_ge_UserCreditsTtl.appendChild(spnProgressBadge);
        }
        //        case enumBadgeType.ReflectionBadge_04:
        if (intBadgeNum_ReflectionBadge > 0) {
          objDiv_ge_UserCreditsTtl.appendChild(iReflectionBadge);
          objDiv_ge_UserCreditsTtl.appendChild(spnReflectionBadge);
        }
        //        case enumBadgeType.QuestionAnsweringBadge_05:
        if (intBadgeNum_QuestionAnsweringBadge > 0) {
          objDiv_ge_UserCreditsTtl.appendChild(iQuestionAnsweringBadge);
          objDiv_ge_UserCreditsTtl.appendChild(spnQuestionAnsweringBadge);
        }
        //        case enumBadgeType.ChapterBadge_06:
        if (intBadgeNum_ChapterBadge > 0) {
          objDiv_ge_UserCreditsTtl.appendChild(iChapterBadge);
          objDiv_ge_UserCreditsTtl.appendChild(spnChapterBadge);
        }
        //<i class="layui-icon layui-icon-flag" style = "font-size: 30px; color: #666;" > </i>

        divDataLst.appendChild(objDiv_ge_UserCreditsTtl);
      }
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(divContainer1, this, this.divName4Pager);
      console.log('完成:Show_CreditRanking!');
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async btnQuery_Click() {
    this.SetCurrPageIndex(1);
    await this.BindGv_ge_UserCreditsTtl4Func(divVarSet.refDivList);
  }

  /*
   * 获取当前页序号(Used In BindGv_Cache)
   */
  public get CurrPageIndex(): number {
    const strCurrPageIndex = GetInputValueInDivObj(this.thisDivLayout, 'hidCurrPageIndex');
    if (IsNullOrEmpty(strCurrPageIndex)) return 0;
    return Number(strCurrPageIndex);
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    $('#hidCurrPageIndex').val(value);
  }

  /* 函数功能:在数据 列表中跳转到某一页
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
     <param name = "intPageIndex">页序号</param>
   */
  //public async IndexPage(intPageIndex) {
  //    if (intPageIndex == 0) {
  //        intPageIndex = this.objPager.PageCount;
  //    }
  //    console.log("跳转到" + intPageIndex + "页");
  //    this.setCurrPageIndex(intPageIndex, this.divName4PagerTtl);
  //    await this.BindGv_ge_UserCreditsTtl4Func(divVarSet.refDivList);
  //}
  public async Menu_Click(strKey: string) {
    const strThisFuncName = this.Menu_Click.name;
    switch (strKey) {
      case '1':
        SetSpanHtmlInDivObj(this.thisDivLayout, 'navTitle', '游戏');

        await this.BindGv_ge_UserCreditsTtl4Func(divVarSet.refDivList);
        //answerCard();
        //showQuestion(0);
        break;
      case '2':
        SetSpanHtmlInDivObj(this.thisDivLayout, 'navTitle', '得分');
        await this.BindGv_ge_UserCreditsTtl4Func(divVarSet.refDivList);
        break;

      default:
        const strMsg = Format(
          'key:{0}在Switch中没有被处理.(in {1}.{2})',
          strKey,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'userName|Ex':
        viewVarSet.sortge_UserCreditsTtlBy = `vUsersSim|userName ${sortDirection}|ge_UserCreditsTtl.UserId = vUsersSim.UserId`;
        break;
      case 'eduClsName|Ex':
        viewVarSet.sortge_UserCreditsTtlBy = `CurrEduCls|eduClsName ${sortDirection}|ge_UserCreditsTtl.IdCurrEduCls = CurrEduCls.IdCurrEduCls`;
        break;
      default:
        viewVarSet.sortge_UserCreditsTtlBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_UserCreditsTtl4Func(this.thisDivList);
  }
}
