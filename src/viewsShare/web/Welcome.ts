import $ from 'jquery';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { useUserStore } from '@/store/modulesShare/user';
import { clsvXzMajorDirectionEN } from 'share-stu-study-base-lib';
import { vXzMajorDirection_GetSubObjLstCache } from 'share-stu-study-base-lib';
import { HideDivInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';

/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Welcome {
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

    try {
      const userStore = useUserStore();
      //管理员 判断角色
      if (userStore.getRoleId == '00620001') {
        $('#Personaldiv').hide();
      } else {
        //学生00620003 教师
        $('#Personaldiv').show();
      }

      await this.Bind_Major();
      await this.Bind_AllCount();

      HideDivInDivObj(Welcome.divLayout, 'divLoading');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async Bind_Major() {
    try {
      const userStore = useUserStore();
      let arrvXzMajorDirectionObjLst: Array<clsvXzMajorDirectionEN_T> = [];

      const objvXzMajorDirection_Cond = new clsvXzMajorDirectionEN();
      objvXzMajorDirection_Cond.SetCondFldValue(
        clsvXzMajorDirectionEN.con_IdXzMajor,
        userStore.getIdXzMajor,
        '=',
      );

      arrvXzMajorDirectionObjLst = await vXzMajorDirection_GetSubObjLstCache(
        objvXzMajorDirection_Cond,
      );

      //strWhereCond = " idXzMajor='" + userStore.getIdXzMajor + "'";
      //const responseObjLst = await vXzMajorDirection_GetObjLstAsync(strWhereCond).then((jsonData) => {
      //    arrvXzMajorDirectionObjLst = <Array_T>>jsonData;
      //});

      let strMajorDirection = '';
      for (let i = 0; i < arrvXzMajorDirectionObjLst.length; i++) {
        strMajorDirection += `${arrvXzMajorDirectionObjLst[i].majorDirectionName},`;
      }

      $('#spanMajordirection').html(
        `${userStore.getUserName + userStore.getMajorName}专业，专业方向包含(${strMajorDirection})`,
      );
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async Bind_AllCount() {
    try {
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      // const strCourseId = clsPubLocalStorage.courseId;
      //论文统计
      //
      ////加载页面所需数据源到缓存
      //vPaper_GetObjLstAsync("1=1");
      //const arrvPaper_Cache = await vPaper_GetObjLstAsync("1=1");
    } catch (e: any) {
      console.error(e);
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
        AccessBtnClickDefault(strCommandName, 'Welcome.btn_Click');

        break;
    }
  }
}
