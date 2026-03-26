import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsge_UserBadgeTtlEN } from '@/ts/L0Entity/GameLearn/clsge_UserBadgeTtlEN';
import { clsge_UserBadgeTtlENEx } from '@/ts/L0Entity/GameLearn/clsge_UserBadgeTtlENEx';

import { ge_UserBadgeTtlCRUD } from '@/viewsBase/GameLearn/ge_UserBadgeTtlCRUD';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { enumBadgeType } from '@/ts/L0Entity/GameLearn/clsBadgeTypeEN';
import { BadgeType_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsBadgeTypeWApi';
import {
  ge_UserBadgeTtlEx_FuncMapByFldName,
  ge_UserBadgeTtlEx_GetObjByIdCurrEduClsAndUserId,
  ge_UserBadgeTtlEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/GameLearn/clsge_UserBadgeTtlExWApi';
import {
  GetDivObjInDivObj,
  GetDiv_Empty,
  GetInputValueInDivObj,
  GetSpan_Empty,
  SetSpanHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, Redirect } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import { useUserStore } from '@/store/modulesShare/user';
import router from '@/router';
import {
  Combinege_UserBadgeTtlCondition,
  divVarSet,
  viewVarSet,
} from '@/views/GameLearn/ge_UserBadgeTtlVueShare';
import { viewDepthKey } from 'vue-router';
import { ge_UserBadgeTtl_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GameLearn/clsge_UserBadgeTtlWApi';

declare const window: any;

export class Achievement_BadgeLstEx extends ge_UserBadgeTtlCRUD implements IShowList {
  public static objPageCRUD: Achievement_BadgeLstEx;
  public static strCourseId = clsPubLocalStorage.courseId;
  //public static examBatchNo_Static = "";
  public divName4Query: string = 'divQuery'; //查询区的层Id
  public divName4Function: string = 'divFunction'; //功能区的层Id
  public divPager_BadgeTtl: string = 'divPager_BadgeTtl'; //列表中的分页区的总排名分页

  constructor() {
    super();
    this.divName4Pager = 'divPager_BadgeTtl';
    Achievement_BadgeLstEx.objPageCRUD = this;
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
    const objPage: Achievement_BadgeLstEx = new Achievement_BadgeLstEx();
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
      this.divName4Pager = this.divPager_BadgeTtl;
      //Achievement_BadgeLstEx.strid_CurrEduClsCache = clsPubLocalStorage.idCurrEduCls;
      viewVarSet.sortge_UserBadgeTtlBy = ''; //clsge_UserBadgeTtlENEx.con_BadgeNum;

      if (userStore.userId != '') {
        await this.BindGv_ge_UserBadgeTtl4Func(divVarSet.refDivList);
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
  public async BindGv_ge_UserBadgeTtl4Func(divList: HTMLDivElement) {
    if (viewVarSet.sortge_UserBadgeTtlBy == null) {
      const strMsg = `在显示列表时，排序字段(sortge_UserBadgeTtlBy)为空，请检查！(In BindGv_ge_UserBadgeTtl_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strListDiv: string = 'divBadgeRanking';
    const strWhereCond = await Combinege_UserBadgeTtlCondition();
    // objge_UserBadgeTtl_Cond.SetCondFldValue(
    //   clsge_UserBadgeTtlEN.con_IdCurrEduCls,
    //   clsPubLocalStorage.idCurrEduCls,
    //   '=',
    // );
    // const strWhereCond = JSON.stringify(objge_UserBadgeTtl_Cond);
    //const intCurrPageIndex = GetCurrPageIndex(this.divName4PagerTtl);//获取当前页
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_UserBadgeTtlExObjLst: Array<clsge_UserBadgeTtlENEx> = [];
    try {
      this.recCount = await ge_UserBadgeTtl_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: '', //Achievement_BadgeLstEx.sortge_UserBadgeTtlBy,
        sortFun: (x, y) => y.badgeNum - x.badgeNum,
      };

      arrge_UserBadgeTtlExObjLst = await ge_UserBadgeTtlEx_GetObjExLstByPagerAsync(objPagerPara);

      for (const objInFor of arrge_UserBadgeTtlExObjLst) {
        const conFuncMap = await ge_UserBadgeTtlEx_FuncMapByFldName(
          clsge_UserBadgeTtlENEx.con_UserName,
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
      this.Show_BadgeRanking(divList, arrge_UserBadgeTtlExObjLst);
      console.log('完成BindGv_ge_UserBadgeTtl4Func!');
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
  public async Combinege_UserBadgeTtlConditionObj(): Promise<clsge_UserBadgeTtlEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strWhereCond: string = ' 1 = 1 ';
    const objge_UserBadgeTtl_Cond = new clsge_UserBadgeTtlEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.userId_q != "") {
      //    strWhereCond += ` And ${clsge_UserBadgeTtlEN.con_UserId} like '% ${this.userId_q}%'`;
      //    objge_UserBadgeTtl_Cond.SetCondFldValue(clsge_UserBadgeTtlEN.con_UserId, this.userId_q, "like");
      //}
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinege_UserBadgeTtlConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objge_UserBadgeTtl_Cond.whereCond = strWhereCond;
    return objge_UserBadgeTtl_Cond;
  }
  /* 显示ge_UserBadgeTtl对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
     <param name = "divContainer">显示容器</param>
     <param name = "arrge_UserBadgeTtlExObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_ge_UserBadgeTtl4Func(
    divContainer: HTMLDivElement,
    arrge_UserBadgeTtlExObjLst: Array<clsge_UserBadgeTtlENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_UserBadgeTtl4Func.name;
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
        fldName: clsge_UserBadgeTtlEN.con_BadgeNum,
        sortBy: clsge_UserBadgeTtlEN.con_BadgeNum,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '练习积分',
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
    await BindTab(divDataLst, arrge_UserBadgeTtlExObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async Show_BadgeRanking(
    divContainer1: HTMLDivElement,
    arrge_UserBadgeTtlExObjLst: Array<clsge_UserBadgeTtlENEx>,
  ) {
    const strThisFuncName = this.Show_BadgeRanking.name;
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
    // const divBadgeRanking = <HTMLDivElement>document.getElementById(divContainer); // "divBadgeRanking");
    divDataLst.innerHTML = '';
    try {
      //获取当前教学班 关卡
      //arrge_UserBadgeTtlObjLst = await ge_UserBadgeTtl_GetObjLstAsync(strWhereCond);
      //arrge_UserBadgeTtlObjLst = arrge_UserBadgeTtlObjLst.sort((x, y) => y.BadgeNum = x.BadgeNum);
      //arrge_UserBadgeTtlExObjLst = arrge_UserBadgeTtlObjLst.map(ge_UserBadgeTtlEx_CopyToEx);
      //for (const objInFor of arrge_UserBadgeTtlExObjLst) {
      //    const conFuncMap = await ge_UserBadgeTtlEx_FuncMapByFldName(clsge_UserBadgeTtlENEx.con_UserName, objInFor);
      //}

      let strChallengeMode = '';
      const arrUsers = new Array<clsUsersEN>();
      for (const objInFor of arrge_UserBadgeTtlExObjLst) {
        const objUsers = new clsUsersEN();
        objUsers.userId = objInFor.userId;
        objUsers.userName = objInFor.userName;
        objUsers.memo = objInFor.idCurrEduCls;
        if (arrUsers.find((x) => x.userId == objUsers.userId) == null) arrUsers.push(objUsers);
      }

      for (let i = 0; i < arrUsers.length; i++) {
        const objUsers = arrUsers[i];
        let arrge_UserBadgeTtl = await ge_UserBadgeTtlEx_GetObjByIdCurrEduClsAndUserId(
          objUsers.memo,
          objUsers.userId,
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
        const strUserName = objUsers.userName;

        const strCurrDateTime = clsPubFun4Web.getNowDate();

        const objDiv_ge_UserBadgeTtl = GetDiv_Empty('alert alert-info');
        const strongUserName = document.createElement('strong');
        strongUserName.innerHTML = Format('{0} {1}', objUsers.userId, strUserName);

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

        objDiv_ge_UserBadgeTtl.appendChild(strongUserName);

        //      case enumBadgeType.CreditBadge_01:
        if (intBadgeNum_Credit > 0) {
          objDiv_ge_UserBadgeTtl.appendChild(iCreditBadge);
          objDiv_ge_UserBadgeTtl.appendChild(spnCreditBadge);
        }

        //        case enumBadgeType.CollaborationBadge_02:
        if (intBadgeNum_CollaborationBadge > 0) {
          objDiv_ge_UserBadgeTtl.appendChild(iCollaborationBadge);
          objDiv_ge_UserBadgeTtl.appendChild(spnCollaborationBadge);
        }
        //        case enumBadgeType.ProgressBadge_03:
        if (intBadgeNum_ProgressBadge > 0) {
          objDiv_ge_UserBadgeTtl.appendChild(iProgressBadge);
          objDiv_ge_UserBadgeTtl.appendChild(spnProgressBadge);
        }
        //        case enumBadgeType.ReflectionBadge_04:
        if (intBadgeNum_ReflectionBadge > 0) {
          objDiv_ge_UserBadgeTtl.appendChild(iReflectionBadge);
          objDiv_ge_UserBadgeTtl.appendChild(spnReflectionBadge);
        }
        //        case enumBadgeType.QuestionAnsweringBadge_05:
        if (intBadgeNum_QuestionAnsweringBadge > 0) {
          objDiv_ge_UserBadgeTtl.appendChild(iQuestionAnsweringBadge);
          objDiv_ge_UserBadgeTtl.appendChild(spnQuestionAnsweringBadge);
        }
        //        case enumBadgeType.ChapterBadge_06:
        if (intBadgeNum_ChapterBadge > 0) {
          objDiv_ge_UserBadgeTtl.appendChild(iChapterBadge);
          objDiv_ge_UserBadgeTtl.appendChild(spnChapterBadge);
        }
        //<i class="layui-icon layui-icon-flag" style = "font-size: 30px; color: #666;" > </i>

        divDataLst.appendChild(objDiv_ge_UserBadgeTtl);
      }
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(divContainer1, this, this.divName4Pager);
      console.log('完成:Show_BadgeRanking!');
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
    await this.BindGv_ge_UserBadgeTtl4Func(divVarSet.refDivList);
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
  //    await this.BindGv_ge_UserBadgeTtl4Func(divVarSet.refDivList);
  //}
  public async Menu_Click(strKey: string) {
    const strThisFuncName = this.Menu_Click.name;
    switch (strKey) {
      case '1':
        SetSpanHtmlInDivObj(this.thisDivLayout, 'navTitle', '游戏');

        await this.BindGv_ge_UserBadgeTtl4Func(divVarSet.refDivList);
        //answerCard();
        //showQuestion(0);
        break;
      case '2':
        SetSpanHtmlInDivObj(this.thisDivLayout, 'navTitle', '得分');
        await this.BindGv_ge_UserBadgeTtl4Func(divVarSet.refDivList);
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
        viewVarSet.sortge_UserBadgeTtlBy = `vUsersSim|userName ${sortDirection}|ge_UserBadgeTtl.UserId = vUsersSim.UserId`;
        break;
      case 'eduClsName|Ex':
        viewVarSet.sortge_UserBadgeTtlBy = `CurrEduCls|eduClsName ${sortDirection}|ge_UserBadgeTtl.IdCurrEduCls = CurrEduCls.IdCurrEduCls`;
        break;
      default:
        viewVarSet.sortge_UserBadgeTtlBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_UserBadgeTtl4Func(this.thisDivList);
  }
}
