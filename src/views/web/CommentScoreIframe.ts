import { useUserStore } from '@/store/modulesShare/user';
import { CurrEduCls_GetFirstObjAsync } from 'share-stu-study-base-lib';
import { vCurrEduClsStu_GetObjLstAsync } from 'share-stu-study-base-lib';
import { vCurrEduClsTeacher_GetObjLstAsync } from 'share-stu-study-base-lib';
import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { message } from '@/utils/myMessage';

declare function ShowDialog(strOpType: string): void;
declare function layui_Alert(iconKey: string, strMsg: string): void;

declare function RemoveIfame_Click(): void;
declare function HideDialog(): void;

declare const window: any;

/* UsersCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class CommentScoreIframe {
  public static divLayout: HTMLDivElement; //界面布局的层对象
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return CommentScoreIframe.divLayout;
  }
  //public static divName4List: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    // 在此处放置用户代码以初始化页面

    const strThisFuncName = this.PageLoad.name;
    const userStore = useUserStore();
    try {
      if (userStore.userId != '') {
        $('#userName').append(userStore.getUserName + '(' + userStore.getRoleName + ')');

        //$("#hidUserId").val(objvUserRoleRelation.userId);
        $('#spanMajorName').html(userStore.getMajorName + '专业');
        //获取教学班名称；
        const responseObjLst = await this.GetCurrEduClsNamebyId();
        //把传递参数存放缓存；
        clsPubLocalStorage.idCurrEduCls = GetInputValueInDivObj(
          this.thisDivLayout,
          'hidId_CurrEduClspara',
        );

        ////判断角色
        ////管理员
        //if (userStore.getRoleId == "00620001") {
        //    const responseObjLst = await this.Bind_EduClsTeaList();

        //}
        ////老师
        //else if (userStore.getRoleId == "00620002") {
        //    const responseObjLst = await this.Bind_EduClsTeaList();

        //}
        ////学生
        //else {
        //    const responseObjLst = await this.Bind_EduClsStuList();

        //}

        //$("#divLoading").hide();
      } else {
        window.top.location.href = '../Web/Index';
      }
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //获取教学班名称；
  public async GetCurrEduClsNamebyId() {
    const strWhereCond1 = " idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
    // 获取教学班学生数据；
    const objCurrEduCls = await CurrEduCls_GetFirstObjAsync(strWhereCond1);

    if (objCurrEduCls != null) {
      $('#CurrEduName').html(objCurrEduCls.eduClsName);
    }
  }

  //教学班教师
  public async Bind_EduClsTeaList() {
    const strThisFuncName = this.Bind_EduClsTeaList.name;
    const userStore = useUserStore();
    try {
      const strWhereCond = " TeacherID='" + userStore.userId + "' order by updDate Desc";

      const arrvCurrEduClsTeacherObjLst = await vCurrEduClsTeacher_GetObjLstAsync(strWhereCond);
      let strhtml = '';
      for (let i = 0; i < arrvCurrEduClsTeacherObjLst.length; i++) {
        if (i == 0) {
          if (clsPubLocalStorage.idCurrEduCls == '') {
            //$("#hidid_CurrEduCls").val(arrvCurrEduClsTeacherObjLst[i].idCurrEduCls);
            $('#eduClsName').html(arrvCurrEduClsTeacherObjLst[i].eduClsName);
            //存入session
            clsPubLocalStorage.idCurrEduCls = arrvCurrEduClsTeacherObjLst[i].idCurrEduCls;
            clsPubLocalStorage.eduClsTypeId = arrvCurrEduClsTeacherObjLst[i].eduClsTypeId;
            clsPubLocalStorage.eduClsName = arrvCurrEduClsTeacherObjLst[i].eduClsName;
          } else {
            $('#eduClsName').html(clsPubLocalStorage.eduClsName);
          }
        }
        strhtml +=
          '<dd><a onclick=EduCls_Click("' +
          arrvCurrEduClsTeacherObjLst[i].idCurrEduCls +
          '","' +
          arrvCurrEduClsTeacherObjLst[i].eduClsName +
          '","' +
          arrvCurrEduClsTeacherObjLst[i].eduClsTypeId +
          '")> ' +
          arrvCurrEduClsTeacherObjLst[i].eduClsName +
          '</a></dd>';
      }
      $('#dlEduClsList').html(strhtml);
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班学生
  public async Bind_EduClsStuList() {
    const strThisFuncName = this.Bind_EduClsStuList.name;
    const userStore = useUserStore();
    try {
      const strWhereCond = " stuId='" + userStore.userId + "' order by modifyDate Desc";

      const arrvCurrEduClsStuObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond);
      let strhtml = '';
      for (let i = 0; i < arrvCurrEduClsStuObjLst.length; i++) {
        if (i == 0) {
          if (clsPubLocalStorage.idCurrEduCls == '') {
            //$("#hidid_CurrEduCls").val(arrvCurrEduClsStuObjLst[i].idCurrEduCls);
            $('#eduClsName').html(arrvCurrEduClsStuObjLst[i].eduClsName);
            //存入session
            clsPubLocalStorage.idCurrEduCls = arrvCurrEduClsStuObjLst[i].idCurrEduCls;
            clsPubLocalStorage.eduClsTypeId = arrvCurrEduClsStuObjLst[i].eduClsTypeId;
            clsPubLocalStorage.eduClsName = arrvCurrEduClsStuObjLst[i].eduClsName;
          } else {
            $('#eduClsName').html(clsPubLocalStorage.eduClsName);
          }
        }
        strhtml +=
          '<dd><a onclick=EduCls_Click("' +
          arrvCurrEduClsStuObjLst[i].idCurrEduCls +
          '","' +
          arrvCurrEduClsStuObjLst[i].eduClsName +
          '","' +
          arrvCurrEduClsStuObjLst[i].eduClsTypeId +
          '")> ' +
          arrvCurrEduClsStuObjLst[i].eduClsName +
          '</a></dd>';
      }
      $('#dlEduClsList').html(strhtml);
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班教师
  public async EduCls_Click(strkey: string, strName: string, strTypeID: string) {
    //$("#hidid_CurrEduCls").val(strkey);
    $('#eduClsName').html(strName);
    clsPubLocalStorage.idCurrEduCls = strkey;
    clsPubLocalStorage.eduClsTypeId = strTypeID;
    clsPubLocalStorage.eduClsName = strName;

    message.success('已切换教学班！');
    // $('#Topic_iframe')[0].contentWindow.btnQuery_Click();
    const iframeElement = $('#Topic_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).btnQuery_Click();
    }
    //$("#ResearchTopicList")[0].contentWindow.btnQuery_Click();

    RemoveIfame_Click();
  }
}
