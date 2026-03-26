import { useUserStore } from '@/store/modulesShare/user';
import { clsvCurrEduClsStuEN } from 'share-stu-study-base-lib';
import { clsvCurrEduClsTeacherEN } from 'share-stu-study-base-lib';
import { vCurrEduClsStu_GetObjLstAsync } from 'share-stu-study-base-lib';
import { vCurrEduClsTeacher_GetObjLstAsync } from 'share-stu-study-base-lib';
import { qa_Push_GetRecCountByCondAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_PushWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { message } from '@/utils/myMessage';

declare function ShowDialog(strOpType: string): void;

declare const window: any;

/* UsersCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class QAIframe {
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

    try {
      const userStore = useUserStore();
      if (userStore.userId != '') {
        $('#userName').append(userStore.getUserName + '(' + userStore.getRoleName + ')');

        //$("#hidUserId").val(objvUserRoleRelation.userId);
        $('#spanMajorName').html(userStore.getMajorName + '专业');
        //获得被邀请数
        const responseIntCount = await this.Bind_QuestionsCount();

        //判断角色
        //管理员
        if (userStore.getRoleId == '00620001') {
          const responseObjLst = await this.Bind_EduClsTeaList();
        }
        //老师
        else if (userStore.getRoleId == '00620002') {
          const responseObjLst = await this.Bind_EduClsTeaList();
        }
        //学生
        else {
          const responseObjLst = await this.Bind_EduClsStuList();
        }

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

  //答疑被邀请数
  public async Bind_QuestionsCount() {
    const strThisFuncName = this.Bind_QuestionsCount.name;
    try {
      const userStore = useUserStore();
      let strWhereCond = " 1=1 and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
      strWhereCond += " and ReceiveUser='" + userStore.userId + "' and isReceive=0";
      const intQuestionsCount = await qa_Push_GetRecCountByCondAsync(strWhereCond);
      $('#QuestionsCount').html(intQuestionsCount.toString());
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      //alert(strMsg);
      console.error(strMsg);
    }
  }

  //教学班教师
  public async Bind_EduClsTeaList() {
    const strThisFuncName = this.Bind_EduClsTeaList.name;
    try {
      const userStore = useUserStore();
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
    try {
      const userStore = useUserStore();
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
    // $('#QA_iframe')[0].contentWindow.btn_Click('Query');
  }
  public static btn_Click(strCommandName: string, strKeyId: string) {
    //const objPageEdit: cc_Course_EditEx = new cc_Course_EditEx('cc_Course_EditEx', objPage);
    switch (strCommandName) {
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        const strMsg = '命令:' + strCommandName + '在函数(PassGameEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
}
