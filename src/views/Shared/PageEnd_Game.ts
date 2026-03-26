import $ from 'jquery';
import { message } from '@/utils/myMessage';
import {
  CurrEduClsEx_Bind_EduClsStuList,
  CurrEduClsEx_Bind_EduClsTeaList,
  CurrEduClsEx_GetCourseIdByIdCurrEduCls,
} from 'share-stu-study-base-lib';
import { qa_Push_GetRecCountByCondAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_PushWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { SetAHtmlInDivObj, SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';

import { useUserStore } from '@/store/modulesShare/user';

/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PageEnd_Game {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static divLayout: HTMLDivElement; //界面布局的层对象
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    const userStore = useUserStore();
    try {
      if (userStore.getUserId != '') {
        SetAHtmlInDivObj(
          PageEnd_Game.divLayout,
          'lnkUserName',
          `${userStore.getUserName}(${userStore.getRoleName})`,
        );

        $('#spanMajorName').html(`${userStore.getMajorName}专业`);

        // 判断角色
        // 管理员
        const isShowEduCls = PageEnd_Game.GetPropValue('isShowEduCls');
        if (isShowEduCls == 'true') {
          if (userStore.getRoleId == '00620001') {
            await CurrEduClsEx_Bind_EduClsTeaList(
              PageEnd_Game.divLayout,
              PageEnd_Game.EduCls_Click,
              'spnEduClsName_Head',
            );
          }
          //老师
          else if (userStore.getRoleId == '00620002' || userStore.getRoleId == '00620013') {
            await CurrEduClsEx_Bind_EduClsTeaList(
              PageEnd_Game.divLayout,
              PageEnd_Game.EduCls_Click,
              'spnEduClsName_Head',
            );
          }

          //学生
          else {
            await CurrEduClsEx_Bind_EduClsStuList(
              PageEnd_Game.divLayout,
              PageEnd_Game.EduCls_Click,
              'spnEduClsName_Head',
            );
          }
        }

        // const isShowTopic = PageEnd_Game.GetPropValue('isShowTopic');
        // if (isShowTopic == 'true') {
        //   setTimeout(() => {
        //     this.Bind_TopicList();
        //   }, 200);
        // }

        //$("#divLoading").hide();
      } else {
      }
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
    // const objPage = new SysScoreSummaryCRUD();
    console.log(strKeyId);

    switch (strCommandName) {
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要复制的记录！');
        //   return;
        // }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PageEnd_Game.btn_Click');

        break;
    }
  }
  //教学班教师
  public static async EduCls_Click(
    divName: HTMLDivElement,
    strIdCurrEduCls: string,
    strEduName: string,
    strTypeID: string,
  ) {
    //$("#hidIdCurrEduCls").val(strkey);
    // $('#spnEduClsName_Head').html(strEduName);
    SetSpanHtmlInDivObj(PageEnd_Game.divLayout, 'spnEduClsName_Head', strEduName);
    const strCourseId = await CurrEduClsEx_GetCourseIdByIdCurrEduCls(strIdCurrEduCls);
    if (IsNullOrEmpty(strCourseId) == false) {
      clsPubLocalStorage.courseId = strCourseId;
    }
    clsPubLocalStorage.idCurrEduCls = strIdCurrEduCls;
    clsPubLocalStorage.eduClsTypeId = strTypeID;
    clsPubLocalStorage.eduClsName = strEduName;

    // $('#Paper_iframe')[0].contentWindow.btnQuery_Click();
    const iframeElement = $('#Paper_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).btnQuery_Click();
    }
    message.success('已切换教学班！');
  }
}
